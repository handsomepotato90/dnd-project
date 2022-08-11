import React from "react";
import { stripHtml, workebleObject } from "./functions";


export default function Legendary(props){
        const legend = workebleObject(props.legendary)


        return (
                <>
                    <div>Legendary Actions</div>
                    {legend.map((leg,i)=>(
                        <div key={i}>
                            <div>{stripHtml(leg.trait)}</div>
                            <div>{stripHtml(leg.text)}</div>
                        </div>
                    ))}
                </>    
        )
}
