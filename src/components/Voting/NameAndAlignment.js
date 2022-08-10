import React from "react";


import "./NameAndAlignment.css"


export default function NameAndAlignment (props){
        return(
                <div className="name_box">
                        <div className="name_styling">{props.name.toUpperCase()}</div>
                        <div>{props.size+" "+props.type+", "+props.alignment}</div>
                </div>
        )
}