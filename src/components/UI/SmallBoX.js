import React from "react";

import "./SmallBox.css"

const SmallBox = (props) =>{
        const cNames =  "small_box__color " + props.className;
        return (
                <div className ={cNames}>
                {props.children}
                </div>
        )
}

export default SmallBox;