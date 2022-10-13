import React from "react";
import HomeBrewSave from "./HomeBrewSave";
export default function SubmitHomeBrew() {
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

  return (
    <>
      <HomeBrewSave valid={false} required={reqFields} notReq={fields} text={textZone} type="POST" url="http://localhost:5000/submit_homebrew"></HomeBrewSave>
    </>
  );
}
