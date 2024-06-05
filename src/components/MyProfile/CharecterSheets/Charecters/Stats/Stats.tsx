import React, { useState } from "react";
import ComponentStats from "./ComponentStats";
import ComponentInit from "./ComponentInit";
import HpAndHpManagment from "./HpAndHpManagment";
import useWindowSize from "../../../../hooks/screensize-hook";
import { SvgComponent } from "../../../../Navigation/Navigation";
import hpImage from "../../../../../icons/health.svg";
import styles from "./Stats.module.css";

const Stats: React.FC = () => {
  const [hpmanager, setHpmanager] = useState(false);
  const size = useWindowSize();
  const openHpManager = () => {
    setHpmanager((curr) => !curr);
  };
  return (
    <>
      <div className={styles.important_stats_stats_holder}>
        <ComponentStats text={"STRENGHT"} shortHand={"Str"}></ComponentStats>
        <ComponentStats text={"DEXTERITY"} shortHand={"Dex"}></ComponentStats>
        <ComponentStats
          text={"CONSTITUTION"}
          shortHand={"Con"}
        ></ComponentStats>
        <ComponentStats text={"INTELIGENCE"} shortHand={"Int"}></ComponentStats>
        <ComponentStats text={"WISDOM"} shortHand={"Wis"}></ComponentStats>
        <ComponentStats text={"CHARISMA"} shortHand={"Cha"}></ComponentStats>
      </div>
      {size.width ?? 0 > 600 ? (
        <div className={styles.semi_important}>
          <ComponentInit text={"PROFICIENCY"}></ComponentInit>
          <ComponentInit text={"SPEED"}></ComponentInit>
          <ComponentInit text={"INSPIRATION"}></ComponentInit>
        </div>
      ) : (
        <div className={styles.medium_size_hp_svg}>
          <div onClick={openHpManager}>
            <SvgComponent
              Image={hpImage}
              height="35"
              color="red"
              width="40"
            ></SvgComponent>
          </div>
          {hpmanager && (
            <div className={styles.medium_size_hp}>
              <HpAndHpManagment></HpAndHpManagment>
            </div>
          )}
        </div>
      )}

      {size.width ?? 0 > 800 ? (
        <div>
          <HpAndHpManagment></HpAndHpManagment>
        </div>
      ) : (
        <div className={styles.medium_size_hp_svg}>
          <div onClick={openHpManager}>
            <SvgComponent
              Image={hpImage}
              height="35"
              color="red"
              width="40"
            ></SvgComponent>
          </div>
          {hpmanager && (
            <div className={styles.medium_size_hp}>
              <HpAndHpManagment></HpAndHpManagment>
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default Stats;