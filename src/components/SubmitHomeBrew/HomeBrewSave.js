import React, { useContext, useState } from "react";
import { VALIDATOR_REQUIRE } from "../util/validators";
import TextArea from "./TextArea";
import Input from "../form-elements/Input";
import { useHttpClient } from "../hooks/http-hook";
import { LoginContext } from "../store/login-context";
import ModalError from "../UI/ModalError";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/form-hook";
import Button from "../form-elements/Button";
import styles from "./SubmitHomeBrew.module.css";


export default function HomeBrewSave(props) {
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
    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `${props.url}`,
        props.type,
        JSON.stringify(data),
        {
          Authorization: 'Bearer ' + auth.token,
          "Content-Type": "application/json",
        }
      );
      navigate( props.type ==="POST" ? "/voting" : "/myProfile");
    } catch (err) {
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
          {props.required.map((field, i) => (
            <Input
              key={i}
              element="input"
              id={field.input_name}
              type="text"
              initialValue={field.value}
              initialValid={props.valid}
              label={field.name}
              errorText="*This field is NOT optional!"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              placeholder={field.placeholder}
              notRequired={false}
              className="input_field__style"
            ></Input>
          ))}
          {props.notReq.map((field, i) => (
            <Input
              key={i}
              element="input"
              id={field.input_name}
              initialValue={field.value}
              type="text"
              initialValid={true}
              label={field.name}
              onInput={inputHandler}
              placeholder={field.placeholder}
              validators={[]}
              notRequired={true}
            ></Input>
          ))}

          {props.text.map((zone, i) => (
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
          className={!formState.isValid ?`${styles.submit_btn__style_disabled}`:`${styles.submit_btn__style_enabled} button`}
          type="submit"
          disabled={!formState.isValid}
        >
          Submit
        </Button>
      </form>
    </>
  );
}
