import { ReactNode} from "react";
import styles from "./InitiativeAcResistance.module.css";

export default function GeneralLookInitiative(props: { children: ReactNode; }) {
  return <div className={styles.general_look_initiative}>{props.children}</div>;
}
