import React, { useState, useContext } from "react";
import styles from "./SaveEncounter.module.css";
import { useHttpClient } from "../../hooks/http-hook";
import { LoginContext } from "../../store/login-context";
import MonsterXp from "../../store/monsterXp-context";
import ModalSubmitSucces from "../../UI/ModalSubmitSucces"
import { useNavigate } from "react-router-dom";

export default function SaveEncounter() {
  const [title, setTitle] = useState("");
  const { sendRequest } = useHttpClient();
  const [submited, setSubmited] = useState(false);
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
  const removeModal = () =>{
    setSubmited(false)
    navigate("/");
  }
  return (
    <>
      {submited && <ModalSubmitSucces onClick ={removeModal}></ModalSubmitSucces>}

      <div className={styles.main_box__size}>
        <input type="text" onChange={enteringTitle}></input>
        <button type="submit" onClick={submitToDb}>
          {" "}
          Save Encounter
        </button>
      </div>
    </>
  );
}
