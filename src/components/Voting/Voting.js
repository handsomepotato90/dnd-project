import React from "react";
import MainMonsterBox from "./MainMonsterBox";

import styles from "./Voting.module.css";

export default function Voting() {
  const monsters = [
    {
      name: "Aboleth",
      meta: "Large aberration, lawful evil",
      "Armor Class": "17 (Natural Armor)",
      "Hit Points": "135 (18d10 + 36)",
      Speed: "10 ft., swim 40 ft. ",
      STR: "21",
      STR_mod: "(+5)",
      DEX: "9",
      DEX_mod: "(-1)",
      CON: "15",
      CON_mod: "(+2)",
      INT: "18",
      INT_mod: "(+4)",
      WIS: "15",
      WIS_mod: "(+2)",
      CHA: "18",
      CHA_mod: "(+4)",
      "Saving Throws": "CON +6, INT +8, WIS +6",
      Skills: "History +12, Perception +10",
      Senses: "Darkvision 120 ft.,  Passive Perception 20",
      Languages: "Deep Speech, Telepathy 120 ft.",
      Challenge: "10 (5,900 XP)",
      Traits:
        "<p><em><strong>Amphibious.</strong></em> The aboleth can breathe air and water. </p><p><em><strong>Mucous Cloud.</strong></em> While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater. </p><p><em><strong>Probing Telepathy.</strong></em> If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.</p>",
      Actions:
        "<p><em><strong>Multiattack.</strong></em> The aboleth makes three tentacle attacks. </p><p><em><strong>Tentacle.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft., one target. <em>Hit:</em> 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +9 to hit, reach 10 ft. one target. <em>Hit:</em> 15 (3d6 + 5) bludgeoning damage. </p><p><em><strong>Enslave (3/Day).</strong></em> The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. </p><p>Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.</p>",
      "Legendary Actions":
        "<p>The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The aboleth makes a Wisdom (Perception) check. </p><p><em><strong>Tail Swipe.</strong></em> The aboleth makes one tail attack. </p><p><em><strong>Psychic Drain</strong></em> (Costs 2 Actions). One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.</p>",
      img_url:
        "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/11/1000/1000/636238825975375671.jpeg",
    },
    {
      name: "Acolyte",
      meta: "Medium humanoid, any",
      "Armor Class": "10 ",
      "Hit Points": "9 (2d8)",
      Speed: "30 ft. ",
      STR: "10",
      STR_mod: "(+0)",
      DEX: "10",
      DEX_mod: "(+0)",
      CON: "10",
      CON_mod: "(+0)",
      INT: "10",
      INT_mod: "(+0)",
      WIS: "14",
      WIS_mod: "(+2)",
      CHA: "11",
      CHA_mod: "(+0)",
      Skills: "Medicine +4, Religion +2",
      Senses: "Passive Perception 12",
      Languages: "Any one language (usually Common)",
      Challenge: "1/4 (50 XP)",
      Traits:
        "<p><em><strong>Spellcasting.</strong></em> The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared: </p><p>Cantrips (at will): light, sacred flame, thaumaturgy </p><p>1st level (3 slots): bless, cure wounds, sanctuary</p>",
      Actions:
        "<p><em><strong>Club.</strong></em> <em>Melee Weapon Attack:</em> +2 to hit, reach 5 ft., one target. <em>Hit:</em> 2 (1d4) bludgeoning damage.</p>",
      img_url:
        "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
    },
  ];
  const defaultBoxLabels = {
    name: "Name",
    meta: "Size Type, Alignment",
    Challenge: "Challenge Rating",
    extraContent: {
      readMore: "",
      positiveVotes: "",
      negativeVotes: "",
      positive: "Voting",
      negative: "Options",
    },
  };
  return (
    <>
      <MainMonsterBox
        className={styles.main_head__text_color}
        monsterStats={defaultBoxLabels}
      ></MainMonsterBox>
      {monsters.map((monster, i) => (
        <MainMonsterBox key={i} monsterStats={monster}></MainMonsterBox>
      ))}
    </>
  );
}
