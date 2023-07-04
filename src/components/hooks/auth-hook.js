import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import Cookies from "js-cookie";
let logoutTimer;
export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(false);
  const { sendRequest } = useHttpClient();
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const navigate = useNavigate();
  const remember = Cookies.get("rmTOKEN");
  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpiration =
      expirationDate ||
      new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7 );
    setTokenExpirationDate(tokenExpiration);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpiration.toISOString(),
      })
    );
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
    Cookies.remove('rmTOKEN') 
    navigate("/");
  }, []);
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
          login(resData.user._id, resData.token);
        } catch (err) {}
      }
    };
    rememberUser();
  }, [sendRequest, remember, login]);

  return { token, login, logout, userId };
};
