import { Links } from "../../Navigation/Navigation";
import { LoginContext } from "../../store/login-context";
import { useHttpClient } from "../../hooks/http-hook";
import { useState, useEffect, useContext } from "react";
import { SvgComponent } from "../../Navigation/Navigation";
import plus from "../../../icons/plus.svg";
import Artificer from "../../../icons/Artificer.svg";
import Barbarian from "../../../icons/barbarian.svg";
import Bard from "../../../icons/bard.svg";
import Cleric from "../../../icons/cleric.svg";
import Druid from "../../../icons/druid.svg";
import Fighter from "../../../icons/fighter.svg";
import Monk from "../../../icons/monk.svg";
import Paladin from "../../../icons/paladin.svg";
import Ranger from "../../../icons/ranger.svg";
import Rogue from "../../../icons/rogue.svg";
import Warlock from "../../../icons/rogue.svg";
import Sorcerer from "../../../icons/sorcerer.svg";
import Wizard from "../../../icons/sorcerer.svg";

import LoadingSpinner from "../../UI/LoadingSpinner";
import styles from "./CharecterSheets.module.css";

function getClassWithHighestLevel(classes) {
  if (!Array.isArray(classes) || classes.length === 0) {
    return "no class";
  }
  const result = classes.reduce((maxClass, currentClass) => {
    const maxLevel = parseInt(maxClass.level);
    const currentLevel = parseInt(currentClass.level);
    return currentLevel > maxLevel ? currentClass : maxClass;
  }, classes[0]);

  return result.class;
}

export default function CharecterSheets() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [chars, setChars] = useState([]);
  const classForIcon = {
    Artificer,
    Barbarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Warlock,
    Sorcerer,
    Wizard,
  };
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

  const putInfoToLocal = (info) => {
    localStorage.setItem("charSheet", JSON.stringify(info));
  };
  const removeInfoToLocal = () => {
    localStorage.removeItem("charSheet");
  };
  return (
    <div className={styles.general_sheet_display}>
      <div
        className={`${styles.charecter_blocks_styles}`}
        onClick={removeInfoToLocal}
        style={{
          backgroundImage: `url(${plus})`,
        }}
      >
        <Links to="/myProfile/CharecterSheets/Charecters">
          <span className={styles.all_text_style}>
            {" "}
            Create New Character Sheet
          </span>
        </Links>
      </div>
      {isLoading && (
        <div className={styles.charecter_blocks_styles}>
          <LoadingSpinner asOverlay />
        </div>
      )}
      {!isLoading &&
        chars.map((e, i) => {
          return (
            <div
              className={styles.charecter_blocks_styles}
              key={i}
              style={{
                backgroundImage: `url(${
                  classForIcon[getClassWithHighestLevel(e.classes)]
                })`,
              }}
              onClick={() => putInfoToLocal(e)}
            >
              <Links
                to={`/myProfile/CharecterSheets/Charecters/${e.meta.name}`}
              >
                {
                  <span className={`overflowing ${styles.name_style}`}>
                    {e.meta.name}
                  </span>
                }
                {e.classes.map((c, i) => {
                  return (
                    <div key={i}>
                      <span className={styles.all_text_style}>{c.class} </span>
                      <span className={styles.all_text_style}>{c.level}</span>
                    </div>
                  );
                })}
                <div className={styles.stats_style}>
                  <div>
                    <span className={styles.stats_style_text}>AC: </span>
                    <span className={styles.stats_style_text_value}>
                      {e.AC}
                    </span>
                  </div>
                  <div>
                    <span className={styles.stats_style_text}>HP: </span>
                    <span className={styles.stats_style_text_value}>
                      {e.hp_max}
                    </span>
                  </div>
                </div>
              </Links>
            </div>
          );
        })}
    </div>
  );
}
