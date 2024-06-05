import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import styles from "./SaveEncounter.module.css";

import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";
import MonsterXp from "../../store/monsterXp-context";
import GroupXp from "../../store/groupXp-context";
import ModalSubmitSucces from "../../UI/ModalSubmitSucces";
import { useNavigate } from "react-router-dom";
import ModalError from "../../UI/ModalError";

interface Encounter {
  numberAndLevelOfPlayers: { player: number }[];
  enc_name: string;
  creator: string;
  monsters: { name: string; img: string }[];
}

const SaveEncounter: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const { sendRequest } = useHttpClient();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const login = useContext(LoginContext);
  const mxp = useContext(MonsterXp);
  const gxp = useContext(GroupXp);

  const enteringTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const submitToDb = async (event: FormEvent) => {
    event.preventDefault();
    const encounter: Encounter = {
      numberAndLevelOfPlayers: [],
      enc_name: title.trim(),
      creator: login.userId,
      monsters: [],
    };

    gxp.players.forEach((element) => {
      encounter.numberAndLevelOfPlayers.push({
        player: element.player,
      });
    });

    mxp.monsterBlock.forEach((element) => {
      encounter.monsters.push({
        name: element.name,
        img: element.url,
      });
    });

    if (encounter.monsters.length < 1) {
      setError(true);
      return;
    }
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/build_encounter/submit_new_enc",
        "POST",
        JSON.stringify(encounter),
        {
          "Content-Type": "application/json",
        }
      );
      setTitle("");
      setSubmitted(true);
    } catch (err) {
      setError(true);
    }
  };

  const removeModal = () => {
    setSubmitted(false);
    navigate("/my_encounters");
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <>
      {submitted && (
        <ModalSubmitSucces
          title="Successful submission!"
          text="Your Encounter has been saved!"
          onClick={removeModal}
        />
      )}
      {error && (
        <ModalError
          header="Incomplete encounter"
          error="It seems you haven't selected any creatures for your encounter. Please use the +ADD button to add creatures to your encounter."
          onClick={errorHandler}
        />
      )}
      <div>
        <input
          className={styles.input__style__custom}
          type="text"
          value={title}
          onChange={enteringTitle}
        />
        <button
          className={`${styles.button__style} button green`}
          type="submit"
          onClick={submitToDb}
        >
          Save Encounter
        </button>
      </div>
    </>
  );
};

export default SaveEncounter;
