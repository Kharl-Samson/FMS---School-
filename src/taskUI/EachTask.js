import React from 'react';
import TaskIcon from '../images/icons/task.svg'
import moment from 'moment';

import no_record_icon from "../images/no_record_icon.png";

function EachTask(props){
   function ClickSpecificTask(){
        document.getElementsByClassName("view_task_modal_container")[0].style.display = "flex";
       document.getElementById("task_title").textContent = props.title;
       document.getElementById("task_description").textContent = props.description_notTrim;
       document.getElementById("task_link").textContent = props.link;
       document.getElementById("task_link").setAttribute("href", props.link);
       document.getElementById("task_time").textContent = props.time;
       var dateFormat =  moment(props.date).format('LL');
       document.getElementById("task_date").textContent = dateFormat;

       document.getElementById("task_link").textContent === "" ? document.getElementById("task_link").textContent = "No available link" : document.getElementById("task_link").textContent = props.link;       
   }
    return (
        <div className='task_box'>
            <span style={{fontWeight:"500",textTransform:"uppercase"}}>{props.time}</span>
            <div className='task_description' onClick={ClickSpecificTask}>
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