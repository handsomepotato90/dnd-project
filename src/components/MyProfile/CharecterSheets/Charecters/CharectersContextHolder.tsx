import React, { useState, useEffect } from "react";
import NameClassLevel from "./CharecterComponents/NameClassLevel";
import ShortLongRest from "./CharecterComponents/ShortLongRest";
import { CSProvider } from "../../../store/CS-context";
import Stats from "./Stats/Stats";
import SavingThrows from "./Stats/SavingThrows/SavingThrows";
import PassiveSenses from "./Stats/PassiveSenses/PassiveSenses";
import OtherProficiencies from "./Stats/OtherProficiencies/OtherProficiencies";
import Skills from "./Stats/Skills/Skills";
import CSInitiative from "./Stats/InitiativeAcResistance/CSInitiative";
import CSArmorclass from "./Stats/InitiativeAcResistance/CSArmorclass";
import SpecialResource from "./Stats/InitiativeAcResistance/SpecialResource";
import Resistance from "./Stats/InitiativeAcResistance/Resistance";
import Attacks from "./Attacks/Attacks";
import SaveButton from "./SaveButton";
import UpdateButton from "./UpdateButton";
import useWindowSize from "../../../hooks/screensize-hook";
import { SvgComponent } from "../../../Navigation/Navigation";
import sleep from "../../../../icons/sleep.svg";
import skill from "../../../../icons/skills.svg";
import shield from "../../../../icons/shield.svg";
import proff from "../../../../icons/proff.svg";
import saveSvg from "../../../../icons/saveRed.svg";
import styles from "./Charecters.module.css";

const Charecters: React.FC = () => {
  const [newOrOld, setNewOrOld] = useState<boolean>();
  const [sills, setSkills] = useState(false);
  const [proffs, setProffs] = useState(false);
  const [save, setSave] = useState(false);
  const [rest, setRest] = useState(false);
  const [resistance, setResistance] = useState(false);

  const size = useWindowSize();
  useEffect(() => {
    const local = localStorage.getItem("charSheet");
    if (local) {
      setNewOrOld(true);
    } else {
      setNewOrOld(false);
    }
  }, []);

  return (
    <CSProvider>
      <div className={styles.charecter_general}>
        <div className={styles.general_charecter_info}>
          <NameClassLevel></NameClassLevel>
          {size.width && size.width > 800 ? (
            <ShortLongRest></ShortLongRest>
          ) : (
            <div className={styles.rest_minsize}>
              <div onClick={() => setRest((curr) => !curr)}>
                {" "}
                <SvgComponent
                  Image={sleep}
                  height="35"
                  color="red"
                  width="40"
                ></SvgComponent>
              </div>
              {rest && (
                <div className={styles.left_pannel}>
                  <ShortLongRest></ShortLongRest>
                </div>
              )}
            </div>
          )}
        </div>

        <div className={styles.important_stats_general_holder}>
          <Stats></Stats>
        </div>
        <div className={styles.all_stats_holder}>
          {/* ######################### this toDIsapear */}
          {size.width && size.width > 800 ? (
            <div className={styles.left_pannel}>
              <SavingThrows></SavingThrows>
              <PassiveSenses></PassiveSenses>
              <OtherProficiencies></OtherProficiencies>
            </div>
          ) : (
            <div className={styles.proff_midsize}>
              <div onClick={() => setProffs((curr) => !curr)}>
                {" "}
                <SvgComponent
                  Image={proff}
                  height="35"
                  color="red"
                  width="40"
                ></SvgComponent>
              </div>
              {proffs && (
                <div className={styles.left_pannel}>
                  <SavingThrows></SavingThrows>
                  <PassiveSenses></PassiveSenses>
                  <OtherProficiencies></OtherProficiencies>
                </div>
              )}
            </div>
          )}

          {/* ####################### */}
          {size.width && size.width > 800 ? (
            <div className={styles.prof_pannel_center}>
              <Skills></Skills>
            </div>
          ) : (
            <div className={styles.skill_midsize}>
              <div onClick={() => setSkills((curr) => !curr)}>
                {" "}
                <SvgComponent
                  Image={skill}
                  height="35"
                  color="red"
                  width="40"
                ></SvgComponent>
              </div>
              {sills && <Skills></Skills>}
            </div>
          )}

          <div className={styles.right_panel}>
            <div className={styles.right_panel_top}>
              <CSInitiative></CSInitiative>
              <CSArmorclass></CSArmorclass>
              <SpecialResource></SpecialResource>

              {size.width && size.width > 600 ? (
                <Resistance></Resistance>
              ) : (
                <div className={styles.resistance_midsize}>
                  <div onClick={() => setResistance((curr) => !curr)}>
                    {" "}
                    <SvgComponent
                      Image={shield}
                      height="35"
                      color="red"
                      width="40"
                    ></SvgComponent>
                  </div>
                  {resistance && <Resistance></Resistance>}
                </div>
              )}
            </div>
            <div>
              <Attacks></Attacks>
            </div>
          </div>
        </div>
        <>
          {size.width && size.width > 800 ? (
            newOrOld ? (
              <UpdateButton></UpdateButton>
            ) : (
              <SaveButton></SaveButton>
            )
          ) : (
            <div className={styles.save_midsize}>
              <div onClick={() => setSave((curr) => !curr)}>
                {" "}
                <SvgComponent
                  Image={saveSvg}
                  height="35"
                  color="red"
                  width="40"
                ></SvgComponent>
              </div>
              {save &&
                (newOrOld ? (
                  <UpdateButton></UpdateButton>
                ) : (
                  <SaveButton></SaveButton>
                ))}
            </div>
          )}
        </>
      </div>
    </CSProvider>
  );
};

export default Charecters;
