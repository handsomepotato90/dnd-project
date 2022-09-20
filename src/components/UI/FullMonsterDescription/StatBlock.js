import NameAndAlignment from "./NameAndAlignment";
import LifeArmorSpeed from "./LifeArmorSpeed";
import Stats from "./Stats";
import General from "./General";
import Traits from "./Traits";


export default function StatBlock(props) {
  return (
    <>
      <NameAndAlignment
        name={props.monsterStats.name}
        meta={props.monsterStats.meta}
      />
      <LifeArmorSpeed
        armor={props.monsterStats["Armor Class"]}
        hp={props.monsterStats["Hit Points"]}
        speed={props.monsterStats.Speed}
        img={props.monsterStats.img_url}
      />
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

      <General
        saving_throw={props.monsterStats["Saving Throws"]}
        skill={props.monsterStats.Skills}
        senses={props.monsterStats.Senses}
        lang={props.monsterStats.Languages}
        challenge={props.monsterStats.Challenge}
      />
      <Traits traits={props.monsterStats.Traits} />
    </>
  );
}
