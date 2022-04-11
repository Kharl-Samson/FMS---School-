import React from "react";

export default function SuccessSlideRightModal(props){
    function closingSuccessModalRight(){
        document.getElementsByClassName("task_edit_side_modal")[0].style.right = "-100%"; 
        setTimeout(function(){
            document.getElementsByClassName("task_edit_side_modal")[0].style.display = "none"; 
        },2000);
    }
    return(
        <div className="success_modal_right_side task_edit_side_modal">
            <div className="left"><img src={require('../images/icons/'+props.img)}/></div>
            <div className="center">
                <p>{props.title}</p>
                <p>{props.subtitle}</p>
            </div>
            <div className="right">
                <p title="Close" onClick={closingSuccessModalRight}>&#215;</p>
            </div>
        </div>
    )
}