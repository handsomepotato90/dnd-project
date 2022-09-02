import React, { useState } from "react";
import styles from "./SubmitHomeBrew.module.css";
import InputFields from "./InputFields";
import TextArea from "./TextArea";
import ModalSubmitSucces from "../UI/ModalSubmitSucces";

const fields = [
  {
    name: "MONSTER NAME",
    input_name: "name",
    placeholder: "Enter monster name",
    required: "required",
  },
  {
    name: "Image",
    input_name: "img_url",
    placeholder: "Provide URL for image",
    required: "",
  },
  {
    name: "MONSTER TYPE",
    input_name: "meta_type",
    placeholder: "#",
    required: "required",
  },
  {
    name: "SIZE",
    input_name: "meta_size",
    placeholder: "#",
    required: "required",
  },
  {
    name: "ALIGNMENT",
    input_name: "meta_alignment",
    placeholder: "-",
    required: "",
  },
  {
    name: "SPEED",
    input_name: "Speed",
    placeholder: "20 ft., fly 30 ft. ",
    required: "",
  },
  {
    name: "CHALLENGE RATING",
    input_name: "Challenge",
    placeholder: " # ",
    required: "required",
  },
  {
    name: "GRANTS XP",
    input_name: "Xp",
    placeholder: " # ",
    required: "required",
  },
  {
    name: "ARMOR CLASS",
    input_name: "armor_class",
    placeholder: "#",
    required: "required",
  },
  {
    name: "ARMOR CLASS TYPE",
    input_name: "armor_type",
    placeholder: "Natural armor,plate...",
    required: "required",
  },
  {
    name: "PROFICIENCY BONUS",
    input_name: "proficiency_bonus",
    placeholder: "#",
    required: "required",
  },
  {
    name: "SENSES",
    input_name: "Senses",
    placeholder: "Passive Perception 11, Darkvision 60 ft., ...",
    required: "required",
  },
  {
    name: "HIT POINT DIE COUNT",
    input_name: "hp_die_count",
    placeholder: "#",
    required: "required",
  },
  {
    name: "HIT POINTS DIE VALUE",
    input_name: "hp_die_value",
    placeholder: "#",
    required: "required",
  },
  {
    name: "AVERAGE HIT POINTS",
    input_name: "avrg_hp",
    placeholder: "#",
    required: "required",
  },
  {
    name: "STR SCORE",
    input_name: "STR",
    placeholder: "#",
    required: "required",
  },
  {
    name: "DEX SCORE",
    input_name: "DEX",
    placeholder: "#",
    required: "required",
  },
  {
    name: "CON SCORE",
    input_name: "CON",
    placeholder: "#",
    required: "required",
  },
  {
    name: "INT SCORE",
    input_name: "INT",
    placeholder: "#",
    required: "required",
  },
  {
    name: "WIS SCORE",
    input_name: "WIS",
    placeholder: "#",
    required: "required",
  },
  {
    name: "CHA SCORE",
    input_name: "CHA",
    placeholder: "#",
    required: "required",
  },
  {
    name: "SAVING THROW PROFICIENCIES",
    input_name: "Saving Throws",
    placeholder: "STR +6 , INT +4....",
    required: "",
  },
  {
    name: "SKILLS",
    input_name: "skills",
    placeholder: "Acrobatics +6, Deception +3, Stealth +9....",
    required: "",
  },
  {
    name: "DAMAGE RESISTANCES",
    input_name: "Damage Resistances",
    placeholder: "Bludgeoning,Piercing,Fire ...",
    required: "",
  },
  {
    name: "DAMAGE IMMUNITIES",
    input_name: "Damage Immunities",
    placeholder: "Bludgeoning,Piercing,Fire ...",
    required: "",
  },
  {
    name: "DAMAGE VULNERABILITIES",
    input_name: "Damage Vulnerabilities",
    placeholder: "Bludgeoning,Piercing,Fire ...",
    required: "",
  },
  {
    name: "CONDITION IMMUNITIES",
    input_name: "Condition Immunities",
    placeholder: "Charmed, Exhaustion, Frightened ...",
    required: "",
  },
  {
    name: "LANGUAGES",
    input_name: "Languages",
    placeholder: "-",
    required: "",
  },
];
const textZone = [
  {
    name: "SPECIAL TRAITS DESCRIPTION",
    input_name: "Traits",
    placeholder:
      "<p><strong>Special Trait Name.</strong>&nbsp;Enter the description for your special trait.<strong></p> <p>Spellcasting.</strong>The [monster name]&nbsp;is a #-level spellcaster. Its spellcasting ability is [ability score]&nbsp;(spell save DC #, +# to hit with spell attacks). The [monster name]&nbsp;has following [class name]&nbsp;spells prepared: <br>Cantrips (at will): [spell name], [spell name]&nbsp;<br>1st level (# slots):&nbsp;[spell name], [spell name]&nbsp;</p>",
  },
  {
    name: "ACTIONS DESCRIPTION",
    input_name: "Actions",
    placeholder:
      "<p><strong>Action Name.</strong>&nbsp;Enter the description for your action.</p><p><strong>Action Melee Attack.</strong> <em>Melee Weapon Attack:</em> +# to hit, reach #&nbsp;ft., #&nbsp;target. <em>Hit:</em>&nbsp;# (#d# + #) [damage type]&nbsp;damage.&nbsp;</p><p><strong>Action Ranged Attack.</strong> Ranged<em>Weapon Attack:</em> +# to hit, range #/# ft., #&nbsp;target. <em>Hit:</em>&nbsp;# (#d# + #) [damage type]&nbsp;damage.</p>",
  },
  {
    name: "REACTIONS DESCRIPTION",
    input_name: "Reactions",
    placeholder:
      "<p><strong>Reaction Name.</strong>&nbsp;Enter the description for your action.</p>",
  },
  {
    name: "MONSTER CHARACTERISTICS DESCRIPTION",
    input_name: "Characteristics",
    placeholder: "Enter a general description for your monster here.",
  },
  {
    name: "BONUS ACTIONS DESCRIPTION",
    input_name: "Bonus Actions",
    placeholder:
      "Enter the description for how bonus actions work for your monster here.",
  },
  {
    name: "LEGENDARY ACTIONS DESCRIPTION",
    input_name: "Legendary Actions",
    placeholder:
      "Enter the description for how legendary actions work for your monster here.<p><strong>Legendary Action Name (Costs # Actions).</strong>&nbsp;Enter the description for your legendary action.</p>",
  },
];

export default function SubmitHomeBrew() {
  const [isSubmited, setSubmit] = useState(false);

  let data = [{}];
  const ckEditorText = [{}];
  let objForNode = [{}];
  const baseModifier = -5;

  const textZoneChange = (text, name) => {
    ckEditorText[name] = text;
  };

  const fieldsChange = (name, val) => {
    data[name] = val;
  };
  const removeModal = () => {
    setSubmit(false);
    window.location.href = "/";
  };
  const formSubmit = (e) => {
    e.preventDefault();
    modifiers(data);
  };

  const modifiers = (objectStats) => {
    const newObject = {};
    const stats = [
      { score: objectStats.STR, stat: "STR" },
      { score: objectStats.DEX, stat: "DEX" },
      { score: objectStats.CON, stat: "CON" },
      { score: objectStats.INT, stat: "INT" },
      { score: objectStats.WIS, stat: "WIS" },
      { score: objectStats.CHA, stat: "CHA" },
    ];
    stats.forEach((stat) => {
      let statModifier = baseModifier + parseInt(parseInt(stat.score) / 2);
      if (statModifier > 0) {
        statModifier = `(+${statModifier})`;
      } else {
        statModifier = `(${statModifier})`;
      }
      newObject[`${stat.stat}_mod`] = statModifier;
    });
    data = { ...objectStats, ...newObject };
    objectReady(data);
  };
  const objectReady = (rawObject) => {
    const theObjToSend = { ...rawObject };
    const meta = {
      meta: `${theObjToSend.meta_size} ${theObjToSend.meta_type}, ${theObjToSend.meta_alignment}`,
    };
    const armorClass = {
      "Armor Class": `${theObjToSend.armor_class} (${theObjToSend.armor_type})`,
    };
    const hp = {
      "Hit Points": `${theObjToSend.avrg_hp} (${theObjToSend.hp_die_count}d${theObjToSend.hp_die_value})`,
    };
    const xp = {
      Clallenge: `${theObjToSend.Challenge} (${theObjToSend.Xp} Xp)`,
    };
    delete theObjToSend.meta_size;
    delete theObjToSend.meta_type;
    delete theObjToSend.meta_alignment;
    delete theObjToSend.armor_class;
    delete theObjToSend.armor_type;
    delete theObjToSend.avrg_hp;
    delete theObjToSend.hp_die_count;
    delete theObjToSend.hp_die_value;
    delete theObjToSend.Challenge;
    delete theObjToSend.Xp;

    objForNode = {
      ...theObjToSend,
      ...meta,
      ...armorClass,
      ...hp,
      ...xp,
      ...ckEditorText,
    };

    console.log(Object.keys(objForNode).length);
    if (Object.keys(objForNode).length >= 10) {
      setSubmit(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {isSubmited && (
        <ModalSubmitSucces onClick={removeModal}></ModalSubmitSucces>
      )}
      <form onSubmit={formSubmit} id="form">
        <div className={styles.form__style}>
          {fields.map((field, i) => (
            <InputFields
              key={i}
              name={field.name}
              input_name={field.input_name}
              placeholder={field.placeholder}
              required={field.required}
              onBlur={fieldsChange}
            ></InputFields>
          ))}

          {textZone.map((zone, i) => (
            <TextArea
              onChange={textZoneChange}
              key={i}
              name={zone.name}
              input_name={zone.input_name}
              placeholder={zone.placeholder}
            ></TextArea>
          ))}
        </div>

        <button className={styles.submit_btn__style} type="submit">
          {" "}
          Submit
        </button>
      </form>
    </>
  );
}
