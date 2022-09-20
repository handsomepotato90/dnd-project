import React,{useEffect,useState} from "react";
import styles from "./BattleScreen.module.css";
import MonsterBattleBox from "./MonsterBattleBox";
import { useHttpClient } from "../hooks/http-hook";
const fullStats = [
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
    name: "Adult Green Dragon",
    meta: "Huge dragon, lawful evil",
    "Armor Class": "19 (Natural Armor)",
    "Hit Points": "207 (18d12 + 90)",
    Speed: "40 ft., fly 80 ft., swim 40 ft. ",
    STR: "23",
    STR_mod: "(+6)",
    DEX: "12",
    DEX_mod: "(+1)",
    CON: "21",
    CON_mod: "(+5)",
    INT: "18",
    INT_mod: "(+4)",
    WIS: "15",
    WIS_mod: "(+2)",
    CHA: "17",
    CHA_mod: "(+3)",
    "Saving Throws": "DEX +6, CON +10, WIS +7, CHA +8",
    Skills:
      "Deception +8, Insight +7, Perception +12, Persuasion +8, Stealth +6",
    "Damage Immunities": "Poison",
    "Condition Immunities": "Poisoned",
    Senses: "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 22",
    Languages: "Common, Draconic",
    Challenge: "15 (13,000 XP)",
    Traits:
      "<p><em><strong>Amphibious.</strong></em> The dragon can breathe air and water. </p><p><em><strong>Legendary Resistance (3/Day).</strong></em> If the dragon fails a saving throw, it can choose to succeed instead.</p>",
    Actions:
      "<p><em><strong>Multiattack.</strong></em> The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws. </p><p><em><strong>Bite.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 10 ft., one target. <em>Hit:</em> 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage. </p><p><em><strong>Claw.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 5 ft., one target. <em>Hit:</em> 13 (2d6 + 6) slashing damage. </p><p><em><strong>Tail.</strong></em> <em>Melee Weapon Attack:</em> +11 to hit, reach 15 ft., one target. <em>Hit:</em> 15 (2d8 + 6) bludgeoning damage. </p><p><em><strong>Frightful Presence.</strong></em> Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours. </p><p><em><strong>Poison Breath (Recharge 5–6).</strong></em> The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one.</p>",
    "Legendary Actions":
      "<p>The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn. </p><p><em><strong>Detect.</strong></em> The dragon makes a Wisdom (Perception) check. </p><p><em><strong>Tail Attack.</strong></em> The dragon makes a tail attack. </p><p><em><strong>Wing Attack (Costs 2 Actions).</strong></em> The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.</p>",
    img_url:
      "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/26/1000/1000/636238962276510242.jpeg",
  },
  {
    name: "Awakened Shrub",
    meta: "Small plant, unaligned",
    "Armor Class": "9 ",
    "Hit Points": "10 (3d6)",
    Speed: "20 ft. ",
    STR: "3",
    STR_mod: "(-4)",
    DEX: "8",
    DEX_mod: "(-1)",
    CON: "11",
    CON_mod: "(+0)",
    INT: "10",
    INT_mod: "(+0)",
    WIS: "10",
    WIS_mod: "(+0)",
    CHA: "6",
    CHA_mod: "(-2)",
    "Damage Vulnerabilities": "Fire",
    "Damage Resistances": "Piercing",
    Senses: "Passive Perception 10",
    Languages: "One language known by its creator",
    Challenge: "0 (10 XP)",
    Traits:
      "<p><em><strong>False Appearance.</strong></em> While the shrub remains motionless, it is indistinguishable from a normal shrub.</p>",
    Actions:
      "<p><em><strong>Rake.</strong></em> <em>Melee Weapon Attack:</em> +1 to hit, reach 5 ft., one target. <em>Hit:</em> 1 (1d4 − 1) slashing damage.</p>",
    img_url: "https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg",
  },
  {
    name: "Awakened Tree",
    meta: "Huge plant, unaligned",
    "Armor Class": "13 (Natural Armor)",
    "Hit Points": "59 (7d12 + 14)",
    Speed: "20 ft. ",
    STR: "19",
    STR_mod: "(+4)",
    DEX: "6",
    DEX_mod: "(-2)",
    CON: "15",
    CON_mod: "(+2)",
    INT: "10",
    INT_mod: "(+0)",
    WIS: "10",
    WIS_mod: "(+0)",
    CHA: "7",
    CHA_mod: "(-2)",
    "Damage Vulnerabilities": "Fire",
    "Damage Resistances": "Bludgeoning, Piercing",
    Senses: "Passive Perception 10",
    Languages: "One language known by its creator",
    Challenge: "2 (450 XP)",
    Traits:
      "<p><em><strong>False Appearance.</strong></em> While the tree remains motionless, it is indistinguishable from a normal tree.</p>",
    Actions:
      "<p><em><strong>Slam.</strong></em> <em>Melee Weapon Attack:</em> +6 to hit, reach 10 ft., one target. <em>Hit:</em> 14 (3d6 + 4) bludgeoning damage.</p>",
    img_url: "https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg",
  },
];

export default function BattleScreen() {
  const {sendRequest} = useHttpClient();
  const[fullStats,setStats] = useState([]);
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const resData = await sendRequest("http://localhost:5000/battle_scr");
        setStats([...resData]);
      } catch (err) {}

    };
    fetchMonsters();
  }, [sendRequest]);



  return (
    <div className={styles.display__style}>
      {fullStats.map((stats, i) => (
        <MonsterBattleBox key={i} stats={stats}></MonsterBattleBox>
      ))}
    </div>
  );
}
