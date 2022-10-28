import React from "react";
import "./style.less"

const PubHeader = (props)=>{

    const {title} = props

    return (
        <div id="common-header">
            <span className="back-icon">
                <i className="icon-chevron-left"
                 onClick={()=>{window.history.back()}}></i>
            </span>
            <h1>{title}</h1>
        </div>
    )
}

export default PubHeader