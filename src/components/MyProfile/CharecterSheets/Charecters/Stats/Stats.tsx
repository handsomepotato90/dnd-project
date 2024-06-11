import React, { useState } from "react";
import ComponentInit from "./ComponentInit";
import HpAndHpManagment from "./HpAndHpManagment";
import useWindowSize from "../../../../hooks/screensize-hook";
import { SvgComponent } from "../../../../Navigation/Navigation";
import hpImage from "../../../../../icons/health.svg";
import styles from "./Stats.module.css";
import MainStats from "./Skills/MainStats";

const Stats: React.FC = () => {
  const [hpmanager, setHpmanager] = useState(false);
  const size = useWindowSize();
  const openHpManager = () => {
    setHpmanager((curr) => !curr);
  };
  return (
    <>
      <div className={styles.important_stats_stats_holder}>
        <MainStats />
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
};
export default Stats;
