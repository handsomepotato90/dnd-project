import React, { useEffect,useContext,useState } from "react";
import EncounterBox from "./EncounterBox";
import styles from "./MyEncounters.module.css";
import { useHttpClient } from "../hooks/http-hook";
import { LoginContext } from "../store/login-context";
import EmptyPage from "../UI/EmptyPage";

export default function MyEncounters() {
  const { sendRequest } = useHttpClient();
  const [encounters,setEncounters] = useState([]);
  const login = useContext(LoginContext);
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
       const resData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/my_encounters",
          "POST",
          JSON.stringify({
           user: login.userId
           } ),
          {
            
            "Content-Type": "application/json",
          }
        );
        setEncounters([...resData])
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest,login.userId]);
  console.log(encounters)
  return (
    <div className={styles.my_encounters__style}>
    {encounters.length < 1 && <EmptyPage message="You have no encounters created."></EmptyPage>}
      {encounters.map((encounter, i) => (
        <EncounterBox
          key={i}
          name={encounter.enc_name}
          monsters={encounter.monsters}
          players={encounter.players}
          id={encounter._id}
        ></EncounterBox>
      ))}
    </div>
  );
}
