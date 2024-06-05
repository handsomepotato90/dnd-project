import NameAndAlignment from "./NameAndAlignment";
import LifeArmorSpeed from "./LifeArmorSpeed";
import Stats from "./Stats";
import General from "./General";
import Actions from "../Actions";
import MonsterStats from "../../../types/MonsterStatsTypes"

interface StatBlockProps {
  monsterStats: MonsterStats;
}

const StatBlock: React.FC<StatBlockProps> = ({monsterStats}) => {
  return (
    <>
      <NameAndAlignment
        name={monsterStats.name}
        meta={monsterStats.meta}
      />
      <hr />
      <LifeArmorSpeed
        armor={monsterStats["Armor Class"]}
        hp={monsterStats["Hit Points"]}
        speed={monsterStats.Speed}
      />
      <hr />
      <Stats
        str={monsterStats.STR}
        str_mod={monsterStats.STR_mod}
        dex={monsterStats.DEX}
        dex_mod={monsterStats.DEX_mod}
        con={monsterStats.CON}
        con_mod={monsterStats.CON_mod}
        int={monsterStats.INT}
        int_mod={monsterStats.INT_mod}
        wis={monsterStats.WIS}
        wis_mod={monsterStats.WIS_mod}
        cha={monsterStats.CHA}
        cha_mod={monsterStats.CHA_mod}
      />
      <hr />
      <General
        saving_throw={monsterStats["Saving Throws"]}
        skill={monsterStats.Skills}
        senses={monsterStats.Senses}
        con={monsterStats["Condition Immunities"]}
        dmg={monsterStats["Damage Immunities"]}
        res={monsterStats["Damage Resistances"]}
        vul={monsterStats["Damage Vulnerabilities"]}
        lang={monsterStats.Languages}
        challenge={monsterStats.Challenge}
      />
      {monsterStats.Traits && (
        <Actions name="Traits" actions={monsterStats.Traits} />
      )}
      {monsterStats["Bonus Actions"] && (
        <Actions
          name="Bonus Actions"
          actions={monsterStats["Bonus Actions"]}
        />
      )}
    </>
  );
}
export default StatBlock;