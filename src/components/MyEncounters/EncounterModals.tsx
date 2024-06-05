import React from "react";
import styles from "./BattleScreen.module.css";

interface ImmunityesModalProps {
  width: string;
  height: string;
  dmgI: string[] | void[];
  conI: string[] | void[];
  dmgR: string[] | void[];
  dmgV: string[] | void[];
}

const ImmunityesModal: React.FC<ImmunityesModalProps> = ({
  width,
  height,
  dmgI,
  conI,
  dmgR,
  dmgV,
}) => {
  return (
    <div
      className={styles.modal__style}
      style={{ width: `${width}`, height: `${height}` }}
    >
      {" "}
      <div className={styles.resandvun_text__style}>
        <span className={styles.red_condition}>Damage Immunity: </span>
        <span className={`${styles.condition__txt__style}`}>{dmgI && dmgI.join(", ")}</span>
      </div>
      <div className={styles.resandvun_text__style}>
        <span className={styles.red_condition}>Condition Immunity:</span>
        <span className={`${styles.condition__txt__style} `}>{conI && conI.join(", ")}</span>
      </div>
      <div className={styles.resandvun_text__style}>
        <span className={styles.orange_condition}>Damage Resistance:</span>
        <span className={`${styles.condition__txt__style} `}>{dmgR && dmgR.join(", ")}</span>
      </div>
      <div className={styles.resandvun_text__style}>
        <span className={styles.green_condition}>Damage Vulnerability:</span>
        <span className={`${styles.condition__txt__style} `}>{dmgV && dmgV.join(", ")}</span>
      </div>
    </div>
  );
};

interface Meta {
  size: string;
  type: string;
  alignment: string;
}

interface Callenge {
  rating: number;
  xp: string;
}

interface AC {
  value: number;
  type: string;
}

interface Stats {
  name: string;
  meta: Meta;
  "Challenge": Callenge;
  "Armor Class": AC;
}

interface StatsModalProps {
  width: string;
  height: string;
  stats: Stats;
}

const StatsModal: React.FC<StatsModalProps> = ({width, height, stats}) => {
  return (
    <div
      className={styles.modal__style}
      style={{ width: `${width}`, height: `${height}` }}
    >
      <div className={styles.detail__style}>
        <span className="overflowing">
          <span>Name: </span>
          {stats.name}
        </span>
        <span>
          <span>Size: </span>
          {stats.meta.size} size type alignment
        </span>
        <span>
          <span>Type: </span>
          {stats.meta.type}
        </span>
        <span className="overflowing">
          <span>Alignment: </span>
          {stats.meta.alignment}
        </span>
        <span>
          <span>CR: </span>
          {stats["Challenge"].rating}
          {stats["Challenge"].xp}
        </span>
        <span>
          <span>AC: </span>
          {stats["Armor Class"].value}
          {stats["Armor Class"].type}
        </span>
      </div>
    </div>
  );
};
interface DeathModalProps {
  width: string;
  height: string;
}

const DeathModal: React.FC<DeathModalProps> = ({width,height}) => {
  return (
    <div
      className={styles.modal__style}
      style={{ width: `${width}`, height: `${height}` }}
    >
      <span className={styles.death_modal_text___style}>DEAD</span>
    </div>
  );
};
export default ImmunityesModal;
export { DeathModal, StatsModal };
