import react from "react";
import TaskModalIcon from '../images/icons/task_modal.svg';

export default function ViewTaskModal(){
    function CloseTaskModal(){
        document.getElementsByClassName("view_task_modal_container")[0].style.display = "none";
    }

    return(
            <div className='task_modal'>
                <div className='top'>
                    <img src={TaskModalIcon}/>
                    <div className='header'>
                        <p>Task Scheduler</p>
                        <p>Information about your task</p>
                    </div>
                    <div className='close_btn' onClick={CloseTaskModal}><span title="Close" >&#215;</span></div>
                </div>

                    <div className='task_form'>
                        <label>Title</label>
                        <p style={{fontSize: "1rem"}} id="task_title">1</p>

                        <label>Description</label>
                        <p style={{fontSize: "1rem"}}>test</p>

                        <label>Link</label>
                        <a href="#" style={{color: "#5171E3"}}>test</a>

                        <label>Date</label>
                        <p style={{fontSize: "1rem"}}>test</p>

                        <label>Time</label>
                        <p style={{fontSize: "1rem"}}>test</p>
                    </div>
            </div>
    )
}