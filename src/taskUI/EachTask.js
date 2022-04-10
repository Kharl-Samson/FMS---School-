import React from 'react';
import TaskIcon from '../images/icons/task.svg'


function EachTask(props){
   function ClickSpecificTask(){
    document.getElementsByClassName("view_task_modal_container")[0].style.display = "flex";
       document.getElementById("task_title").innerHTML = props.title;
   }
    return (
        <div className='task_box' onClick={ClickSpecificTask}>
            <span>{props.time}</span>
            <div className='task_description'>
                <div className='top' style={{textTransform: "uppercase"}}>
                    <div className='task_icon'><img src={TaskIcon}/></div>
                    {props.title}
                </div>
                <span className='task_text'>{props.description}</span>
            </div>
        </div>
    )
}

export default EachTask;