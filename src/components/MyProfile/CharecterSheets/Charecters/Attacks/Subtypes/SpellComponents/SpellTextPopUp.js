import styles from "./SpellComponents.module.css";
import Draggable from "react-draggable";
export default function SpellTextPopUp(props) {
  console.log(props.x - (!props.search ? 150 : 0));
  console.log(!props.search ? 150 : 0);
  console.log(props.x);

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
          marginLeft: props.x - (!props.search ? 150 : 0),
          marginTop: props.y - (!props.search ? 500 : 0),
        }}
        className={styles.spell_text_block}
      >
        <button onClick={closeMe} className={styles.close_btn_pop_up}>
          x
        </button>
        <span className={styles.spell_name_style}>{props.name}</span>
        <span>{props.school}</span>
        <SpellText
          title={"Casting Time:"}
          value={props.casting_time}
        ></SpellText>
        <SpellText title={"Range:"} value={props.range}></SpellText>
        {/* <SpellText title={"Target:"} value={props.spell.components}></SpellText> */}
        <SpellText title={"Components:"} value={props.components}></SpellText>
        <SpellText title={"Duration:"} value={props.duration}></SpellText>
        <SpellText title={"Classes:"} value={props.class}></SpellText>
        <div
          className={styles.text_spell_style}
          dangerouslySetInnerHTML={{ __html: props.desc }}
        ></div>
      </div>
    </Draggable>
  );
}
const SpellText = (props) => {
  return (
    <div>
      <span className={styles.title_spell_text}>{props.title}</span>
      <span className={styles.text_spell_style}>{props.value}</span>
    </div>
  );
};
