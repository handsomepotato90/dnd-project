import NameAndAlignment from "./NameAndAlignment";
import LifeArmorSpeed from "./LifeArmorSpeed";
import Stats from "./Stats";
import General from "./General";
import Actions from "../Actions";


export default function StatBlock(props) {
  return (
    <>
      <NameAndAlignment
        name={props.monsterStats.name}
        meta={props.monsterStats.meta}
      />
      <hr />
      <LifeArmorSpeed
        armor={props.monsterStats["Armor Class"]}
        hp={props.monsterStats["Hit Points"]}
        speed={props.monsterStats.Speed}
        img={props.monsterStats.img_url}
      />
      <hr />
      <Stats
        str={props.monsterStats.STR}
        str_mod={props.monsterStats.STR_mod}
        dex={props.monsterStats.DEX}
        dex_mod={props.monsterStats.DEX_mod}
        con={props.monsterStats.CON}
        con_mod={props.monsterStats.CON_mod}
        int={props.monsterStats.INT}
        int_mod={props.monsterStats.INT_mod}
        wis={props.monsterStats.WIS}
        wis_mod={props.monsterStats.WIS_mod}
        cha={props.monsterStats.CHA}
        cha_mod={props.monsterStats.CHA_mod}
      />
      <hr />
      <General
        saving_throw={props.monsterStats["Saving Throws"]}
        skill={props.monsterStats.Skills}
        senses={props.monsterStats.Senses}
        con={props.monsterStats["Condition Immunities"]}
        dmg={props.monsterStats["Damage Immunities"]}
        res={props.monsterStats["Damage Resistances"]}
        vul={props.monsterStats["Damage Vulnerabilities"]}
        lang={props.monsterStats.Languages}
        challenge={props.monsterStats.Challenge}
      />
      {props.monsterStats.Traits && <Actions name='Traits' actions={props.monsterStats.Traits} />}
      {props.monsterStats['Bonus Actions'] && <Actions name='Bonus Actions' actions={props.monsterStats['Bonus Actions']} />}
      {props.monsterStats.Reactions && <Actions name='Reactions' actions={props.monsterStats.Reactions} />}
    </>
  );
}
