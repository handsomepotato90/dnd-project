import React, { useState } from "react";
import { SvgComponent } from "../../../../Navigation/Navigation";
import addClass from "../../../../../icons/add.svg";
import styles from "./CharecterComponents.module.css";
import ClassLevelComponent from "./ClassLevelComponent";
import ChosenClassNLevel from "./ChosenClassNLevel";
import XpTracker from "./XpTracker/XpTracker";

const ClassLevel: React.FC = () => {
  const [addNewClass, setNewAddClass] = useState(false);
  return (
    <div className={styles.xp_class_holder}>
      <XpTracker></XpTracker>
      <div className={styles.class_style}>
        <ChosenClassNLevel></ChosenClassNLevel>
        {!addNewClass && (
          <div
            className={styles.add_class_btn_style}
            onClick={() => setNewAddClass(true)}
          >
            {" "}
            <SvgComponent
              Image={addClass}
              height="30"
              color="red"
              width="30"
            ></SvgComponent>
            <span className={styles.add_class_btn_span_style}>add class</span>
          </div>
        )}

        {addNewClass && (
          <ClassLevelComponent
            onClick={(val) => setNewAddClass(val)}
          ></ClassLevelComponent>
        )}
      </div>
    </div>
  );
}
export default ClassLevel;