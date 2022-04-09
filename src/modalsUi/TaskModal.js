import React from "react";
import TaskModalIcon from '../images/icons/task_modal.svg';
import { useState } from "react";
import axios from "axios";

import ModalValidationSucces from "./SuccessModal";

export default function TaskModal(){

    function CloseTaskModal(){
        document.getElementsByClassName("task_modal_container")[0].style.display = "none";
        var input =  document.getElementsByClassName("task_input");
        for(var i=0; i< input.length; i++){
            input[i].value = "";
        }
    }

    //Declaring variable data to pass in backend
    const [data,setData ] = useState({
        email:localStorage.getItem('email'),
        title:"",
        description:"",
        link:"",
        date:"",
        time:""
    })
    //Setting a value to a data 
    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
    }
        //Getting the value of all input when submitting the form
        const submitForm=(e)=>{
            e.preventDefault();
    
            //Sending the data request to call it on backend
            const sendData = {
                email:data.email,
                title:data.title,
                description:data.description,
                link:data.link,
                date:data.date,
                time:data.time
            }
            //console.log(sendData)  
                //Sending the data to my backend
                axios.post('http://localhost/fms/addtask.php',sendData)
                .then((result)=>{ 
                    if(result.data.status === "Success"){
                        document.getElementsByClassName("success_modal_task_container")[0].style.display="flex";
                    }
                    else{
                        alert("sql error")
                    }
                })//End of axios  
        
        }

    return (
        <div className='task_modal'>
        <div className='top'>
            <img src={TaskModalIcon}/>
            <div className='header'>
                <p>Create a taks</p>
                <p>Add some information about the task</p>
            </div>
            <div className='close_btn'><span title="Close" onClick={CloseTaskModal}>&#215;</span></div>
        </div>

        <form style={{width: "100%"}} onSubmit={submitForm}>
        <div className='task_form'>
            <label>Title <span style={{color: "red", fontSize: "1rem"}}>*</span></label>
            <input type="text" placeholder="Task title here..." className='task_input' name="title"  onChange={handleChange} value={data.title}  required/>

            <label>Description <span style={{color: "red", fontSize: "1rem"}}>*</span></label>
            <textarea className='task_input' placeholder="Task description here..." name="description" onChange={handleChange} value={data.description} required></textarea>

            <label>Link</label>
            <input type="text" placeholder="Link here (If necessary)" className='task_input' name="link" onChange={handleChange} value={data.link}/>

            <label>Date</label>
            <input type="date" className='task_input'  min={new Date().toISOString().split('T')[0]} name="date" onChange={handleChange} value={data.date} required/>

            <label>Time</label>
            <input type="time" className='task_input'  name="time" onChange={handleChange} value={data.time} required />
            <input type="hidden"  name="email"  value={localStorage.getItem('email')} required/>
        </div>

        <div className='submit_container'>
            <button onClick={CloseTaskModal} type="button">Cancel</button>
            <button type="submit">Submit</button>
        </div>
        </form>

            {/*Modal*/ }
            <div className="modal_container success_modal_task_container">
                <ModalValidationSucces
                    name = "success_modal.svg"
                    headtext = "Successful"
                    subtext = "You have successfully added a task to your schedule."
                    button1 = "Close"
                />
            </div>

        </div>
    )
}