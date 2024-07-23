import { useContext } from "react";
import CS from "../../../store/CS-context";
import { LoginContext } from "../../../store/login-context";
import Spell from "../../../types/SpellsTypes"

const useCharSheet = () => {
    const cs = useContext(CS);
    const user = useContext(LoginContext);

    const spells = Object.entries(cs.spells).reduce((acc: Record<string, { slots: number; spell_ids: string[]; spells: Spell[] }>, [level, spellData]) => {
        acc[level] = {
            slots: spellData.slots,
            spell_ids: spellData.spell_ids,
            spells: [],
        };
        return acc;
    }, {});

    return {
        xp: cs.xp,
        proficiency: cs.proficiency,
        stats: cs.stats,
        skills: cs.skills,
        AC: cs.AC,
        defences: cs.defences,
        conditions: cs.conditions,
        weapons: cs.weapons,
        spell_mod: cs.spell_mod,
        currency: cs.currency,
        attuned_items: cs.attuned_items,
        inventory: cs.inventory,
        characteristics: cs.characteristics,
        background_appearance: cs.background_appearance,
        notes: cs.notes,
        classes: cs.classes,
        speed: cs.speed,
        currHp: cs.currHp,
        hp_max: cs.hp_max,
        tempHp: cs.tempHp,
        meta: cs.meta,
        creator: user.userId,
        otherProff: cs.otherProff,
        inspiration: cs.inspiration,
        specialStat: cs.specialStat,
        specialName: cs.specialName,
        spells,
    };
};

export default useCharSheet;
