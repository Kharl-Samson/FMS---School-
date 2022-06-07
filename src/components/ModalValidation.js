import React from "react";
import { Link } from "react-router-dom";

export default function ModalValidation (props){
    function goToHome(){
        window.location.href = "http://localhost:3000/";
    }

    return (
        <div className="modal_validation">
            <img src={require('../images/icons/'+props.name)} className="emailVal_img"/>
            <h1 className="val_header">{props.headtext}</h1>
            <span className="val_subtext">{props.subtext}</span>

            <button className="modal_close_btn" onClick={goToHome}>{props.button1}</button>
        </div>
    )
}