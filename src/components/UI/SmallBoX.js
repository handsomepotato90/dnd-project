import React from "react";

import "./SmallBox.css"

const SmallBox = (props) =>{
        const giveFeedback =() =>{
                props.onClick()
        }
        const cNames =  "small_box__color " + props.className;
        return (
                <div onClick={giveFeedback} onTouchStart={giveFeedback} className={cNames}>
                {props.children}
                </div>
        )
}

export default SmallBox;