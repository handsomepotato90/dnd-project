import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import Cookies from "js-cookie";

let logoutTimer;
export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(false);
  const [username, setUsername] = useState(false);
  const { sendRequest } = useHttpClient();
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const navigate = useNavigate();
  const remember = Cookies.get("rmTOKEN");

  const login = useCallback((uid, uname, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    setUsername(uname);

    const tokenExpiration =
      expirationDate ||
      new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);
    setTokenExpirationDate(tokenExpiration);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        username: uname,
        expiration: tokenExpiration.toISOString(),
      })
    );
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("googleData");
    Cookies.remove("rmTOKEN");
    navigate("/");
  }, []);

  const googleAuth = useCallback((date, token, google = true) => {
    localStorage.setItem(
      "googleData",
      JSON.stringify({
        expiry_date: date,
        refresh_token: token,
        google: google,
      })
    );
  }, []);

  useEffect(() => {
    const googleRefresh = async () => {
      const googleData = JSON.parse(localStorage.getItem("googleData"));

      if (googleData?.expiry_date < new Date().getTime()) {
        try {
          const resData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL + "/refresh-google-token",
            "POST",
            JSON.stringify({ token: googleData.refresh_token }),
            {
              "Content-Type": "application/json",
            }
          );
          googleAuth(
            resData.google_auth.expiry_date,
            resData.google_auth.refresh_token
          );
          login(resData.user._id, resData.token);
        } catch (err) {}
      }
    };

    googleRefresh();
  }, [sendRequest, googleAuth, login]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();

      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.username,
        storedData.token,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    const rememberUser = async () => {
      if (remember && remember !== "undefined" && !storedData) {
        try {
          const resData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL + "/remember",
            "POST",
            JSON.stringify(),
            {
              "Content-Type": "application/json",
            }
          );
          login(resData.user._id, resData.user.name, resData.token);
        } catch (err) {}
      }
    };
    rememberUser();
  }, [sendRequest, remember, login]);

  return { token, login, logout, userId, googleAuth, username };
};
