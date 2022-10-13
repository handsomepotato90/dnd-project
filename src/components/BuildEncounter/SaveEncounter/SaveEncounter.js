import React, { useState, useContext } from "react";
import styles from "./SaveEncounter.module.css";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";
import MonsterXp from "../../store/monsterXp-context";
import ModalSubmitSucces from "../../UI/ModalSubmitSucces";
import { useNavigate } from "react-router-dom";
import ModalError from "../../UI/ModalError";

export default function SaveEncounter() {
  const [title, setTitle] = useState("");
  const { sendRequest } = useHttpClient();
  const [submited, setSubmited] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const login = useContext(LoginContext);
  const mxp = useContext(MonsterXp);

  const enteringTitle = (event) => {
    setTitle(event.target.value);

  };

  const submitToDb = async (event) => {
    event.preventDefault();
    const encounter = {
      enc_name: title.trim(),
      creator: login.userId,
      monsters: [],
    };
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
        "http://localhost:5000/build_encounter/submit_new_enc",
        "POST",
        JSON.stringify(encounter),
        {
          "Content-Type": "application/json",
        }
      );
      setTitle("");
      setSubmited(true);
    } catch (err) {}
  };
  const removeModal = () => {
    setSubmited(false);
    navigate("/my_encounters");
  };
  const errorHandler= () =>{
    setError(false);
  }
  return (
    <>
      {submited && (
        <ModalSubmitSucces
          title="Successful submission!"
          text="Your Encounter has been saved!"
          onClick={removeModal}
        ></ModalSubmitSucces>
      )}
      {error && <ModalError header='Incomplete encounter' error="It seems you haven't selected eny creatures for your encounter. Plese use the +ADD button to add creatures to your encounter. " onClick={errorHandler}></ModalError>}
      <div className={styles.main_box__size}>
        <input
          className={styles.input_style}
          type="text"
          onChange={enteringTitle}
        ></input>
        <button
          className={`${styles.button_style} button`}
          type="submit"
          onClick={submitToDb}
        >
          {" "}
          Save Encounter
        </button>
      </div>
    </>
  );
}
