import React, { useContext, useState } from "react";
import styles from "./SubmitHomeBrew.module.css";
import TextArea from "./TextArea";
import { useHttpClient } from "../hooks/http-hook";
import { LoginContext } from "../store/login-context";
import ModalError from "../UI/ModalError";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/form-hook";
import Input from "../form-elements/Input";
import Button from "../form-elements/Button";
import { VALIDATOR_REQUIRE } from "../util/validators";
const reqFields = [
  {
    name: "MONSTER NAME",
    input_name: "name",
    placeholder: "Enter monster name",
  },
  {
    name: "SIZE",
    input_name: "meta_size",
    placeholder: "-",
  },
  {
    name: "MONSTER TYPE",
    input_name: "meta_type",
    placeholder: "-",
  },
  {
    name: "ALIGNMENT",
    input_name: "meta_alignment",
    placeholder: "-",
  },
  {
    name: "CHALLENGE RATING",
    input_name: "Challenge R",
    placeholder: " # ",
  },
  {
    name: "GRANTS XP",
    input_name: "Xp",
    placeholder: " # ",
  },
  {
    name: "ARMOR CLASS",
    input_name: "armor_class",
    placeholder: "#",
  },
  {
    name: "ARMOR CLASS TYPE",
    input_name: "armor_type",
    placeholder: "Natural armor,plate...",
  },
  {
    name: "PROFICIENCY BONUS",
    input_name: "proficiency_bonus",
    placeholder: "#",
  },
  {
    name: "SENSES",
    input_name: "Senses",
    placeholder: "Passive Perception 11, Darkvision 60 ft., ...",
  },
  {
    name: "AVERAGE HIT POINTS",
    input_name: "avrg_hp",
    placeholder: "#",
  },
  {
    name: "HIT POINT DIE COUNT",
    input_name: "hp_die_count",
    placeholder: "#",
  },
  {
    name: "HIT POINTS DIE VALUE",
    input_name: "hp_die_value",
    placeholder: "#",
  },
  {
    name: "BONUS HIT POINTS",
    input_name: "bonus_hp",
    placeholder: "#",
  },
  {
    name: "STR SCORE",
    input_name: "STR",
    placeholder: "#",
  },
  {
    name: "DEX SCORE",
    input_name: "DEX",
    placeholder: "#",
  },
  {
    name: "CON SCORE",
    input_name: "CON",
    placeholder: "#",
  },
  {
    name: "INT SCORE",
    input_name: "INT",
    placeholder: "#",
  },
  {
    name: "WIS SCORE",
    input_name: "WIS",
    placeholder: "#",
  },
  {
    name: "CHA SCORE",
    input_name: "CHA",
    placeholder: "#",
  },
];
const fields = [
  {
    name: "Image",
    input_name: "img_url",
    placeholder: "Provide URL for image",
  },
  {
    name: "SAVING THROW PROFICIENCIES",
    input_name: "Saving Throws",
    placeholder: "STR +6 , INT +4....",
  },
  {
    name: "SKILLS",
    input_name: "skills",
    placeholder: "Acrobatics +6, Deception +3, Stealth +9....",
  },
  {
    name: "DAMAGE RESISTANCES",
    input_name: "Damage Resistances",
    placeholder: "Bludgeoning,Piercing,Fire ...",
  },
  {
    name: "DAMAGE IMMUNITIES",
    input_name: "Damage Immunities",
    placeholder: "Bludgeoning,Piercing,Fire ...",
  },
  {
    name: "DAMAGE VULNERABILITIES",
    input_name: "Damage Vulnerabilities",
    placeholder: "Bludgeoning,Piercing,Fire ...",
  },
  {
    name: "CONDITION IMMUNITIES",
    input_name: "Condition Immunities",
    placeholder: "Charmed, Exhaustion, Frightened ...",
  },
  {
    name: "LANGUAGES",
    input_name: "Languages",
    placeholder: "-",
  },
  {
    name: "SPEED",
    input_name: "Speed",
    placeholder: "20 ft., fly 30 ft. ",
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
  const navigate = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [ckEditorText, setckEditorText] = useState({});
  const [formState, inputHandler] = useForm({}, false);
  const auth = useContext(LoginContext);
  const textZoneChange = (text, name) => {
    setckEditorText((prevState) => ({
      ...prevState,
      [name]: text,
    }));
  };
  const modifiersCalculation = (modifire) => {
    const baseModifier = -5;
    const statModifier = baseModifier + parseInt(parseInt(modifire) / 2);
    if (statModifier > 0) {
      return `(+${statModifier})`;
    } else {
      return `(${statModifier})`;
    }
  };

  const transformToArray = (comming) => {
    return [
      ...comming.split(/[.,#!$%&*;:{}=\-_`~()]/g).filter((elem) => elem.trim()),
    ];
  };

  const submitHadler = async (event) => {
    event.preventDefault();
    console.log(ckEditorText.Traits);
    const data = {
      name: formState.inputs.name.value,
      meta: {
        size: formState.inputs.meta_size.value,
        type: formState.inputs.meta_type.value,
        alignment: formState.inputs.meta_alignment.value,
      },
      "Armor Class": {
        value: formState.inputs.armor_class.value,
        type: formState.inputs.armor_type.value,
      },
      "Hit Points": {
        dice: `(${formState.inputs.hp_die_count.value}d${formState.inputs.hp_die_value.value} + ${formState.inputs.bonus_hp.value})`,
        hp: formState.inputs.avrg_hp.value,
      },
      Speed: formState.inputs.Speed.value,
      STR: formState.inputs.STR.value,
      STR_mod: modifiersCalculation(formState.inputs.STR.value),
      DEX: formState.inputs.DEX.value,
      DEX_mod: modifiersCalculation(formState.inputs.DEX.value),
      CON: formState.inputs.CON.value,
      CON_mod: modifiersCalculation(formState.inputs.CON.value),
      INT: formState.inputs.INT.value,
      INT_mod: modifiersCalculation(formState.inputs.INT.value),
      WIS: formState.inputs.WIS.value,
      WIS_mod: modifiersCalculation(formState.inputs.WIS.value),
      CHA: formState.inputs.CHA.value,
      CHA_mod: modifiersCalculation(formState.inputs.CHA.value),
      "Saving Throws": formState.inputs["Saving Throws"].value,
      Skills: formState.inputs.skills.value,
      Senses: formState.inputs.Senses.value,
      Languages: formState.inputs.Languages.value,
      Challenge: {
        rating: formState.inputs["Challenge R"].value,
        xp: `(${formState.inputs.Xp.value}XP)`,
      },
      Traits: ckEditorText.Traits,
      Actions: ckEditorText.Actions,
      "Legendary Actions": ckEditorText["Legendary Actions"],
      img_url: formState.inputs.img_url.value,
      "Bonus Actions": ckEditorText["Bonus Actions"],
      Characteristics: ckEditorText.Characteristics,
      "Condition Immunities": transformToArray(
        formState.inputs["Condition Immunities"].value
      ),
      "Damage Immunities": transformToArray(
        formState.inputs["Damage Immunities"].value
      ),
      "Damage Resistances": transformToArray(
        formState.inputs["Damage Resistances"].value
      ),
      "Damage Vulnerabilities": transformToArray(
        formState.inputs["Damage Vulnerabilities"].value
      ),
      Reactions: ckEditorText.Reactions,
      proficiency_bonus: formState.inputs.proficiency_bonus.value,
      creator: auth.userId,
    };
    console.log(data);
    try {
      await sendRequest(
        "http://localhost:5000/submit_homebrew",
        "POST",
        JSON.stringify(data),
        {
          "Content-Type": "application/json",
        }
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const errorHandler = () => {
    clearError(null);
  };

  return (
    <>
      {isLoading && <LoadingSpinner as0verlay></LoadingSpinner>}
      {error && <ModalError error={error} onClick={errorHandler}></ModalError>}
      <form id="form" onSubmit={submitHadler}>
        <div className={styles.form__style}>
          {reqFields.map((field, i) => (
            <Input
              key={i}
              element="input"
              id={field.input_name}
              type="text"
              label={field.name}
              errorText="*This field is NOT optional!"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              placeholder={field.placeholder}
              notRequired={false}
              className="input_field__style"
            ></Input>
          ))}
          {fields.map((field, i) => (
            <Input
              key={i}
              element="input"
              id={field.input_name}
              type="text"
              initialValid={true}
              label={field.name}
              onInput={inputHandler}
              placeholder={field.placeholder}
              validators={[]}
              notRequired={true}
            ></Input>
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
        <Button
          className={`${styles.submit_btn__style} button`}
          type="submit"
          disabled={!formState.isValid}
        >
          Submit
        </Button>
      </form>
    </>
  );
}
