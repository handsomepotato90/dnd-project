import React, { useState, useEffect, useContext } from "react";
import styles from "./SpellComponents.module.css";
import { SvgComponent } from "../../../../../../Navigation/Navigation";
import leftArrow from "../../../../../../../icons/leftArrow.svg";
import Spell from "./Spell";
import CS from "../../../../../../store/CS-context";
import { useHttpClient } from "../../../../../../hooks/http-hook";
import useWindowSize from "../../../../../../hooks/screensize-hook";

import SpellTypes from "../../../../../../types/SpellsTypes";

const SpellSearch: React.FC<{
  x: number;
  lvl: string;
  onClick: (arg0: boolean) => void;
  addSpellToList: (arg0: SpellTypes) => void;
}> = (props) => {
  const [spellList, setSpellList] = useState<SpellTypes[]>([]);
  const { sendRequest } = useHttpClient();
  const cs = useContext(CS);
  const size = useWindowSize();

  const mod = (size.width ?? 0) > 800 ? 330 : -props.x;
  const modheight = (size.width ?? 0) > 600 ? 100 : 0;

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
  const addSpell = (spell: SpellTypes) => {
    cs.addSpells(spell.level, spell);
    props.addSpellToList(spell);
  };

  return (
    <div
      style={{
        marginLeft: (size.width ?? 0) > 800 ? props.x + mod : 0,
        marginTop: modheight,
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
              <Spell search={true} key={i} spell={e} lvl={props.lvl}></Spell>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpellSearch;
