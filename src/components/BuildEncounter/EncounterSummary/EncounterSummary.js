import React from "react";
import Difficulty from "./Difficulty";
import SelectedMonsters from "./SelectedMonsters";

export default function EncounterSummary(){
    return(
        <>
            <Difficulty></Difficulty>
            <SelectedMonsters></SelectedMonsters>
        </>
    )
}