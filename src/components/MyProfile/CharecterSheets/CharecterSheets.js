import { Links } from "../../Navigation/Navigation";
import { LoginContext } from "../../store/login-context";
import { useHttpClient } from "../../hooks/http-hook";
import { useState, useEffect, useContext } from "react";

export default function CharecterSheets() {
  const { sendRequest } = useHttpClient();
  const [chars, setChars] = useState([]);

  const lgn = useContext(LoginContext);
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            `/myProfile/CharecterSheets/${lgn.userId}`
        );
        setChars(resData);
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest]);
  console.log(chars)
  const putInfoToLocal = (info) => {
    localStorage.setItem("charSheet", JSON.stringify(info));
  };
  const removeInfoToLocal = () => {
    localStorage.removeItem("charSheet");
  };

  return (
    <div>
      <div onClick={removeInfoToLocal}>
        <Links to="/myProfile/CharecterSheets/Charecters">
          <li>Charecters</li>
        </Links>
      </div>

      {chars.map((e, i) => {
        return (
          <div key={i} onClick={() => putInfoToLocal(e)}>
            <Links to={`/myProfile/CharecterSheets/Charecters/${e.meta.name}`}>
              {e._id+" "+e.meta.name}
            </Links>
          </div>
        );
      })}
    </div>
  );
}
