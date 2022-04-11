import React from "react";
import TaskModalIcon from '../images/icons/task_modal.svg';
import axios from "axios";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function EditTaskModal(){

    function CloseTaskModal(){
        document.getElementsByClassName("edit_task_modal_container")[0].style.display = "none";
    }
        //Getting the value of all input when submitting the form
        const submitForm=(e)=>{
            e.preventDefault();
    
            //Sending the data request to call it on backend
            const sendData = {
                id: document.getElementById("edit_task_id").value,
                title: document.getElementById("edit_task_title").value,
                description: document.getElementById("edit_task_description").value,
                link: document.getElementById("edit_task_link").value,
                date: document.getElementById("edit_task_date").value,
                time: document.getElementById("edit_task_time").value
            }
            //console.log(sendData)  
                //Sending the data to my backend
                axios.post('http://localhost/fms/updatetask.php',sendData)
                .then((result)=>{                   
                    if(result.data.status === "Success"){
                        document.getElementsByClassName("edit_task_modal_container")[0].style.display = "none";
                        document.getElementsByClassName("task_edit_side_modal")[0].style.display = "flex"; 
                        setTimeout(function(){
                            document.getElementsByClassName("task_edit_side_modal")[0].style.right = "2%"; 
                        },400);
                        setTimeout(function(){
                            document.getElementsByClassName("task_edit_side_modal")[0].style.right = "-100%"; 
                        },5000);
                        setTimeout(function(){
                            document.getElementsByClassName("task_edit_side_modal")[0].style.display = "none"; 
                        },6000);
                    }
                    else{
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">There was an error in your SQL Connection!</Alert>
                        </Stack>
                    }
                })//End of axios  
        }


    return (
        <div className='task_modal'>
        <div className='top'>
            <img src={TaskModalIcon}/>
            <div className='header'>
                <p>Edit your tasks</p>
                <p>Add some information about the task</p>
            </div>
            <div className='close_btn'><span title="Close" onClick={CloseTaskModal}>&#215;</span></div>
        </div>

        <form style={{width: "100%"}} onSubmit={submitForm}>
        <div className='task_form'>
            <label>Title <span style={{color: "red", fontSize: "1rem"}}>*</span></label>
            <input type="text" placeholder="Task title here..." className='task_input' id="edit_task_title" name="title" required/>

            <label>Description <span style={{color: "red", fontSize: "1rem"}}>*</span></label>
            <textarea className='task_input' placeholder="Task description here..." name="description" id="edit_task_description" required></textarea>

            <label>Link</label>
            <input type="text" placeholder="Link here (If necessary)" className='task_input' name="link" id="edit_task_link" />

            <label>Date</label>
            <input type="date" className='task_input'  min={new Date().toISOString().split('T')[0]} name="date" id="edit_task_date" required/>

            <label>Time</label>
            <input type="time" className='task_input'  name="time"  id="edit_task_time" required />
            <input type="hidden"  name="edit_task_id"  id="edit_task_id"  required/>
        </div>

        <div className='submit_container'>
            <button onClick={CloseTaskModal} type="button">Cancel</button>
            <button type="submit">Submit</button>
        </div>
        </form>

        </div>
    )
}