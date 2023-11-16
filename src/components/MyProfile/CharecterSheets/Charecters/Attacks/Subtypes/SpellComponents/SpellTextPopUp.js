import styles from "./SpellComponents.module.css";
import Draggable from "react-draggable";
import { formatAsParagraphs, getAllEntries } from "./spellFuctions";
const magicSchools = {
  V: "Evocation",
  E: "Enchantment",
  D: "Divination",
  A: "Abjuration",
  N: "Necromancy",
  T: "Transmutation",
  I: "Illusion",
  C: "Conjuration",
};
export default function SpellTextPopUp(props) {
  const removeMe = () => {
    props.onClick(false);
  };
  const closeMe = () => {
    props.onClick(false);
  };

  return (
    <Draggable>
      <div
        onDoubleClick={removeMe}
        style={{
          marginLeft: props.x - (!props.search ? 150 :  props.x),
          marginTop: props.y - (!props.search ? 500 : props.y),
        }}
        className={styles.spell_text_block}
      >
        <button
          onTouchEnd={closeMe}
          onClick={closeMe}
          className={styles.close_btn_pop_up}
        >
          x
        </button>
        <span className={styles.spell_name_style}>{props.spell.name}</span>
        <SpellText
          title={"School:"}
          value={magicSchools[props.spell.school]}
        ></SpellText>
        <SpellText
          title={"Casting Time:"}
          value={props.spell.time[0].number + " " + props.spell.time[0].unit}
        ></SpellText>
        <SpellText title={"Range:"} value={props.spell.range.type}></SpellText>
        <SpellText
          title={"Components:"}
          components={props.spell.components}
        ></SpellText>
        <SpellText
          title={"Duration:"}
          value={
            props.spell.duration[0].concentration === true
              ? "Concentration,up to " +
                props.spell.duration[0].duration.amount +
                " " +
                props.spell.duration[0].duration.type
              : props.spell.duration[0].duration
              ? props.spell.duration[0].duration.amount +
                " " +
                props.spell.duration[0].duration.type
              : "Instantaneous"
          }
        ></SpellText>

        <div
          className={styles.text_spell_style}
          dangerouslySetInnerHTML={{
            __html: formatAsParagraphs(props.spell.text),
          }}
        ></div>
        <div
          className={styles.text_spell_style}
          dangerouslySetInnerHTML={{
            __html: getAllEntries(props.spell.textHighLevel),
          }}
        ></div>
        <SpellText
          title={"Classes:"}
          value={props.spell.classes.join(", ")}
        ></SpellText>
        <SpellText
          title={"Source:"}
          value={props.spell.source + " page: " + props.spell.page}
        ></SpellText>
      </div>
    </Draggable>
  );
}
const SpellText = (props) => {
  return (
    <div>
      {props.components ? (
        <>
          <span className={styles.title_spell_text}>{props.title}</span>
          <span className={styles.components_style}>
            {props.components?.v && "V "}
          </span>
          <span className={styles.components_style}>
            {props.components?.s && "S "}
          </span>
          <span className={styles.text_spell_style}>
            {props.components?.m.length > 0 && `(${props.components.m})`}
          </span>
        </>
      ) : (
        <>
          <span className={styles.title_spell_text}>{props.title}</span>
          <span className={styles.text_spell_style}>{props.value}</span>
        </>
      )}
    </div>
  );
};
