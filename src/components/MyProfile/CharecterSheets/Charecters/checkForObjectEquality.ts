import _ from "lodash";
import CharacterDefault from "../../../types/CSTypes";

const checkForObjectEquality = (currentSheet: Omit<CharacterDefault, 'xpSetter' | 'spellSetter' |
    'setOtherProficiency' | 'metaSetter' | 'maxHpSetter' | 'setSpeed' | 'statsSetter' | 'logRestNow' |
    'healFor' | 'newClass' | 'newNote' | 'backNApp' | 'charData' | 'otherInventory' | 'attuneItem' |
    'currencyValue' | 'spellmods' | 'addWeapons' | 'proff' | 'savingThrows' |
    'proficiencySet' | 'setingSkills' | 'armorClassSetter' | 'currentHpSetter' | 'tempHpSetter' |
    'setSpecialStat' | 'setSpecialName' | 'setInspiration' |
    'setWeapons' | 'removeSpell' | 'addSpells' | 'healingDone' | 'defencesSetter' | 'conditionsSetter'>) => {
        
    const sheetStorage = JSON.parse(localStorage.getItem("charSheet") ?? "");

    return _.isEqual(sheetStorage, currentSheet);
}

export default checkForObjectEquality;