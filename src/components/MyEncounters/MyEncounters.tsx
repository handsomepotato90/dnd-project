import React, { useEffect, useContext, useState } from "react";
import EncounterBox from "./EncounterBox";
import { useHttpClient } from "../hooks/http-hook";
import { LoginContext } from "../store/login-context";
import EmptyPage from "../UI/EmptyPage";
import ConteinerBox from "../UI/ConteinerBox";

interface Monster {
  img: string;
}

interface Encounter {
  enc_name: string;
  monsters: Monster[];
  _id: string;
}

const MyEncounters: React.FC = () => {
  const { sendRequest } = useHttpClient();
  const [encounters, setEncounters] = useState<Encounter[]>([]);
  const login = useContext(LoginContext);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/my_encounters`,
          "POST",
          JSON.stringify({
            user: login.userId,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setEncounters([...resData]);
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest, login.userId]);

  return (
    <ConteinerBox>
      {encounters.length < 1 && (
        <EmptyPage message="You have no encounters created." />
      )}
      {encounters.map((encounter, i) => (
        <EncounterBox
          key={i}
          name={encounter.enc_name}
          monsters={encounter.monsters}
          id={encounter._id}
        />
      ))}
    </ConteinerBox>
  );
};

export default MyEncounters;
