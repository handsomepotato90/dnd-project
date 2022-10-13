import { useState, useEffect } from "react";
import HomeBrewSave from "../../SubmitHomeBrew/HomeBrewSave";
import { useHttpClient } from "../../hooks/http-hook";
import LoadingSpinner from "../../UI/LoadingSpinner";

export default function Edit() {
  const { isLoading, sendRequest } = useHttpClient();
  const [reqFields, setMonsterForEdit] = useState([]);
  const [fields, setFields] = useState([]);
  const [textZone,setTextZone] = useState([]);
  const url = window.location.href.split("Edit/");

  const removeBrakets = (string) => {
    return string.split("(")[1].split(")")[0];
  };
  console.log();
  useEffect(() => {
    const fetchMonsters = async () => {

      try {
        const resData = await sendRequest(
          `http://localhost:5000/myProfile/Edit/${url[1]}`
        );
        setMonsterForEdit([
          {
            name: "MONSTER NAME",
            input_name: "name",
            placeholder: "Enter monster name",
            value: resData.name,
          },
          {
            name: "SIZE",
            input_name: "meta_size",
            placeholder: "-",
            value: resData.meta.size,
          },
          {
            name: "MONSTER TYPE",
            input_name: "meta_type",
            placeholder: "-",
            value: resData.meta.type,
          },
          {
            name: "ALIGNMENT",
            input_name: "meta_alignment",
            placeholder: "-",
            value: resData.meta.alignment,
          },
          {
            name: "CHALLENGE RATING",
            input_name: "Challenge R",
            placeholder: " # ",
            value: resData.Challenge.rating,
          },
          {
            name: "GRANTS XP",
            input_name: "Xp",
            placeholder: " # ",
            value: removeBrakets(resData.Challenge.xp).toLowerCase().split("xp")[0],
          },
          {
            name: "ARMOR CLASS",
            input_name: "armor_class",
            placeholder: "#",
            value: resData["Armor Class"].value,
          },
          {
            name: "ARMOR CLASS TYPE",
            input_name: "armor_type",
            placeholder: "Natural armor,plate...",
            value: resData["Armor Class"].type,
          },
          {
            name: "PROFICIENCY BONUS",
            input_name: "proficiency_bonus",
            placeholder: "#",
            value: resData.proficiency_bonus,
          },
          {
            name: "SENSES",
            input_name: "Senses",
            placeholder: "Passive Perception 11, Darkvision 60 ft., ...",
            value: resData.Senses,
          },
          {
            name: "AVERAGE HIT POINTS",
            input_name: "avrg_hp",
            placeholder: "#",
            value: resData["Hit Points"].hp,
          },
          {
            name: "HIT POINT DIE COUNT",
            input_name: "hp_die_count",
            placeholder: "#",
            value: removeBrakets(resData["Hit Points"].dice).split("d")[0],
          },
          {
            name: "HIT POINTS DIE VALUE",
            input_name: "hp_die_value",
            placeholder: "#",
            value: removeBrakets(resData["Hit Points"].dice)
              .split("d")[1]
              .split(" + ")[0],
          },
          {
            name: "BONUS HIT POINTS",
            input_name: "bonus_hp",
            placeholder: "#",
            value: removeBrakets(resData["Hit Points"].dice)
              .split("d")[1]
              .split(" + ")[1],
          },
          {
            name: "STR SCORE",
            input_name: "STR",
            placeholder: "#",
            value: resData.STR,
          },
          {
            name: "DEX SCORE",
            input_name: "DEX",
            placeholder: "#",
            value: resData.DEX,
          },
          {
            name: "CON SCORE",
            input_name: "CON",
            placeholder: "#",
            value: resData.CON,
          },
          {
            name: "INT SCORE",
            input_name: "INT",
            placeholder: "#",
            value: resData.INT,
          },
          {
            name: "WIS SCORE",
            input_name: "WIS",
            placeholder: "#",
            value: resData.WIS,
          },
          {
            name: "CHA SCORE",
            input_name: "CHA",
            placeholder: "#",
            value: resData.CHA,
          },
        ]);
        setFields([
          {
            name: "Image",
            input_name: "img_url",
            placeholder: "Provide URL for image",
            value: resData.img_url,
          },
          {
            name: "SAVING THROW PROFICIENCIES",
            input_name: "Saving Throws",
            placeholder: "STR +6 , INT +4....",
            value: resData['Saving Throws'],

          },
          {
            name: "SKILLS",
            input_name: "skills",
            placeholder: "Acrobatics +6, Deception +3, Stealth +9....",
            value: resData.Skills,

          },
          {
            name: "DAMAGE RESISTANCES",
            input_name: "Damage Resistances",
            placeholder: "Bludgeoning,Piercing,Fire ...",
            value:resData['Damage Resistances'] === null? "": resData['Damage Resistances'].join(),

          },
          {
            name: "DAMAGE IMMUNITIES",
            input_name: "Damage Immunities",
            placeholder: "Bludgeoning,Piercing,Fire ...",
            value:resData['Damage Immunities'] === null? "": resData['Damage Immunities'].join(),

          },
          {
            name: "DAMAGE VULNERABILITIES",
            input_name: "Damage Vulnerabilities",
            placeholder: "Bludgeoning,Piercing,Fire ...",
            value:resData['Damage Vulnerabilities'] === null? "": resData['Damage Vulnerabilities'].join(),
          },
          {
            name: "CONDITION IMMUNITIES",
            input_name: "Condition Immunities",
            placeholder: "Charmed, Exhaustion, Frightened ...",
            value:resData['Condition Immunities'] === null? "": resData['Condition Immunities'].join(),
          },
          {
            name: "LANGUAGES",
            input_name: "Languages",
            placeholder: "-",
            value: resData.Languages,
          },
          {
            name: "SPEED",
            input_name: "Speed",
            placeholder: "20 ft., fly 30 ft. ",
            value: resData.Speed,

          },
        ]);
        setTextZone([{
            name: "SPECIAL TRAITS DESCRIPTION",
            input_name: "Traits",
            placeholder:resData.Traits,
          },
          {
            name: "ACTIONS DESCRIPTION",
            input_name: "Actions",
            placeholder:resData.Actions,
          },
          {
            name: "REACTIONS DESCRIPTION",
            input_name: "Reactions",
            placeholder:resData.Reactions,
          },
          {
            name: "MONSTER CHARACTERISTICS DESCRIPTION",
            input_name: "Characteristics",
            placeholder:  resData.Characteristics,
          },
          {
            name: "BONUS ACTIONS DESCRIPTION",
            input_name: "Bonus Actions",
            placeholder:  resData["Bonus Actions"],
          },
          {
            name: "LEGENDARY ACTIONS DESCRIPTION",
            input_name: "Legendary Actions",
            placeholder:  resData["Legendary Actions"],
          },])
      } catch (err) {}
    };
    fetchMonsters();
  }, [sendRequest]);

  return (
    <>
      {isLoading && <LoadingSpinner as0verlay></LoadingSpinner>}
      <HomeBrewSave
        valid={true}
        required={reqFields}
        notReq={fields}
        text={textZone}
        type="PATCH"
        url={`http://localhost:5000/myProfile/Edit/${url[1]}`}
      ></HomeBrewSave>
    </>
  );
}
