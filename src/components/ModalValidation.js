import React from "react";
import { Link } from "react-router-dom";

export default function ModalValidation (props){
    return (
        <div className="modal_validation">
            <img src={require('../images/icons/'+props.name)} className="emailVal_img"/>
            <h1 className="val_header">{props.headtext}</h1>
            <span className="val_subtext">{props.subtext}</span>

            <Link to="/" style={{ textDecoration: 'none' }}>
                <button className="modal_close_btn">{props.button1}</button>
            </Link>
        </div>
    )
}