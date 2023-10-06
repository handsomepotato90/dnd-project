import styles from "./Page404.module.css";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();
  const returnToHomePage = () => {
    navigate("/");
  };
  return (
    <div className={styles.error_page__main_div}>
      <h1 className={styles.error_code_code}>404 Error</h1>
      <h1 className={styles.error_code_message}>
        Oops! You've Rolled a Critical Fail
      </h1>
      <span className={styles.error_code_text}>
        Hark, traveler of the digital realm! It seems you've taken a wrong turn
        through the arcane corridors of the internet. Alas, the page you were
        searching for has been spirited away by a mischievous rogue or a
        teleportation mishap!
      </span>

      <button
        className={`${styles.return_button} button `}
        onClick={returnToHomePage}
      >
        Return to the Tavern
      </button>
    </div>
  );
}
