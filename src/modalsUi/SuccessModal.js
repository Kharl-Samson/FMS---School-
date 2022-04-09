import React from "react";

export default function ModalValidationSucces (props){

    function CloseTaskModal(){
        window.location.reload();
    }

    return (
        <div className="modal_validation">
            <img src={require('../images/icons/'+props.name)} className="emailVal_img" style={{boxShadow :"none", height:"10vh"}}/>
            <h1 className="val_header">{props.headtext}</h1>
            <span className="val_subtext">{props.subtext}</span>

            <button className="modal_close_btn" style={{backgroundColor : "#249F5D"}} onClick={CloseTaskModal}>{props.button1}</button>
        </div>
    )
}