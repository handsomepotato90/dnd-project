import React from "react";
import MainMonsterBox from "./MainMonsterBox";

import "./Voting.css";

export default function Voting() {
  const monsters = [
    {
      index: 1,
      name: "Aboleth",
      size: "Large",
      type: "aberration",
      subtype: null,
      alignment: "lawful evil",
      armor_class: 17,
      hit_points: 135,
      hit_dice: "18d10",
      speed: {
        walk: "10 ft.",
        swim: "40 ft.",
      },
      strength: 21,
      dexterity: 9,
      constitution: 15,
      intelligence: 18,
      wisdom: 15,
      charisma: 18,
      proficiencies: [
        {
          name: "Saving Throw: CON",
          url: "http://www.dnd5eapi.co/api/proficiencies/101",
          value: 6,
        },
        {
          name: "Saving Throw: INT",
          url: "http://www.dnd5eapi.co/api/proficiencies/102",
          value: 8,
        },
        {
          name: "Saving Throw: WIS",
          url: "http://www.dnd5eapi.co/api/proficiencies/103",
          value: 6,
        },
        {
          name: "Skill: History",
          url: "http://www.dnd5eapi.co/api/proficiencies/110",
          value: 12,
        },
        {
          name: "Skill: Perception",
          url: "http://www.dnd5eapi.co/api/proficiencies/116",
          value: 10,
        },
      ],
      damage_vulnerabilities: [],
      damage_resistances: [],
      damage_immunities: [],
      condition_immunities: [],
      senses: {
        darkvision: "120 ft.",
        passive_perception: 20,
      },
      languages: "Deep Speech, telepathy 120 ft.",
      challenge_rating: 10,
      special_abilities: [
        {
          name: "Amphibious",
          desc: "The aboleth can breathe air and water.",
        },
        {
          name: "Mucous Cloud",
          desc: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
          dc: {
            dc_type: {
              name: "CON",
              url: "http://www.dnd5eapi.co/api/ability-scores/3",
            },
            dc_value: 14,
            success_type: "none",
          },
        },
        {
          name: "Probing Telepathy",
          desc: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
        },
      ],
      actions: [
        {
          name: "Multiattack",
          desc: "The aboleth makes three tentacle attacks.",
        },
        {
          name: "Tentacle",
          desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
          attack_bonus: 9,
          dc: {
            dc_type: {
              name: "CON",
              url: "http://www.dnd5eapi.co/api/ability-scores/3",
            },
            dc_value: 14,
            success_type: "none",
          },
          damage: [
            {
              damage_type: {
                name: "Acid",
                url: "http://www.dnd5eapi.co/api/damage-types/1",
              },
              damage_dice: "2d6",
              damage_bonus: 5,
            },
          ],
        },
        {
          name: "Tail",
          desc: "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
          attack_bonus: 9,
          damage: [
            {
              damage_type: {
                name: "Bludgeoning",
                url: "http://www.dnd5eapi.co/api/damage-types/2",
              },
              damage_dice: "3d6",
              damage_bonus: 5,
            },
          ],
        },
        {
          name: "Enslave (3/day)",
          desc: "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
          dc: {
            dc_type: {
              name: "WIS",
              url: "http://www.dnd5eapi.co/api/ability-scores/5",
            },
            dc_value: 14,
            success_type: "none",
          },
        },
      ],
      legendary_actions: [
        {
          name: "Detect",
          desc: "The aboleth makes a Wisdom (Perception) check.",
        },
        {
          name: "Tail Swipe",
          desc: "The aboleth makes one tail attack.",
        },
        {
          name: "Psychic Drain (Costs 2 Actions)",
          desc: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
          attack_bonus: 0,
          damage: [
            {
              damage_type: {
                name: "Psychic",
                url: "http://www.dnd5eapi.co/api/damage-types/10",
              },
              damage_dice: "3d6",
              damage_bonus: 0,
            },
          ],
        },
      ],
      url: "http://www.dnd5eapi.co/api/monsters/1",
    },
    {
      index: 2,
      name: "Acolyte",
      size: "Medium",
      type: "humanoid",
      subtype: "any race",
      alignment: "any alignment",
      armor_class: 10,
      hit_points: 9,
      hit_dice: "2d8",
      speed: {
        walk: "30 ft.",
      },
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 14,
      charisma: 11,
      proficiencies: [
        {
          name: "Skill: Medicine",
          url: "http://www.dnd5eapi.co/api/proficiencies/114",
          value: 4,
        },
        {
          name: "Skill: Religion",
          url: "http://www.dnd5eapi.co/api/proficiencies/119",
          value: 2,
        },
      ],
      damage_vulnerabilities: [],
      damage_resistances: [],
      damage_immunities: [],
      condition_immunities: [],
      senses: {
        passive_perception: 12,
      },
      languages: "any one language (usually Common)",
      challenge_rating: 0.25,
      special_abilities: [
        {
          name: "Spellcasting",
          desc: "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:\n\n- Cantrips (at will): light, sacred flame, thaumaturgy\n- 1st level (3 slots): bless, cure wounds, sanctuary",
        },
      ],
      actions: [
        {
          name: "Club",
          desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
          attack_bonus: 2,
          damage: [
            {
              damage_type: {
                name: "Bludgeoning",
                url: "http://www.dnd5eapi.co/api/damage-types/2",
              },
              damage_dice: "1d4",
              damage_bonus: 0,
            },
          ],
        },
      ],
      url: "http://www.dnd5eapi.co/api/monsters/2",
    },
  ];
  const defaultBoxLabels = {
    name: "Name",
    size: "Size",
    type: "Type",
    alignment: "Alignment",
    challenge_rating: "Chalenge Rating",
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
        className="main_head__text_color"
        monsterStats={defaultBoxLabels}
      ></MainMonsterBox>
      {monsters.map((monster, i) => (
        <MainMonsterBox key={i} monsterStats={monster}></MainMonsterBox>
      ))}
    </>
  );
}
