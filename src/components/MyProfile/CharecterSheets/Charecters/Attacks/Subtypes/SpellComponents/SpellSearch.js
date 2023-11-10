import styles from "./SpellComponents.module.css";
import { SvgComponent } from "../../../../../../Navigation/Navigation";
import leftArrow from "../../../../../../../icons/leftArrow.svg";
import Spell from "./Spell";
import CS from "../../../../../../store/CS-context";
import { useState, useEffect, useContext } from "react";
import { useHttpClient } from "../../../../../../hooks/http-hook";

export default function SpellSearch(props) {
  const [spellList, setSpellList] = useState([]);
  const { sendRequest } = useHttpClient();
  const cs = useContext(CS);

  useEffect(() => {
    const searchSpellLevel = async () => {
      try {
        const resData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL +
            "/myProfile/CharecterSheets/Charecters/spell_search",
          "POST",
          JSON.stringify({
            level: props.lvl,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setSpellList(resData);
      } catch (err) {}
    };
    searchSpellLevel();
  }, [props.lvl, sendRequest, setSpellList]);

  const hideMe = () => {
    props.onClick(false);
  };
  const addSpell = (spell) => {
    // console.log(spell);
    cs.addSpells(spell.level, spell);
    props.addSpellToList(spell);
  };

  return (
    <div
      style={{
        marginLeft: 1450,
        marginTop: 100,
      }}
      className={styles.search_spells}
    >
      <div>
        <button
          onClick={hideMe}
          className={`button ${styles.search_spells_window_button}`}
        >
          Close
        </button>
      </div>
      <div>
        {spellList.map((e, i) => {
          return (
            <div key={i} className={styles.search_spells_window}>
              <div onClick={() => addSpell(e)}>
                <SvgComponent
                  Image={leftArrow}
                  height="30"
                  color="red"
                  width="30"
                ></SvgComponent>
              </div>
              <Spell search={true} key={i} spell={e}></Spell>
            </div>
          );
        })}
      </div>
    </div>
  );
}
