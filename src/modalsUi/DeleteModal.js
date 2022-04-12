import React from "react";
import DeleteIconModal from '../images/icons/delete_icon_modal.svg';
import axios from "axios";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function DeleteModal(props){

    function closeDeleteModal(){
        document.getElementsByClassName("delete_task_modal_container")[0].style.display = "none"
    }

    //Getting the value of all input when submitting the form
    const submitForm=(e)=>{
        e.preventDefault();
        
        if(props.forWhatModal === "submitFormDeleteTask"){
            const sendData = {
                id: document.getElementById("id_delete_key").value,
           }
        
           //Sending the data to my backend
           axios.post('http://localhost/fms/deletetask.php',sendData)
           .then((result)=>{                   
            if(result.data.status === "Success"){
                window.localStorage.setItem('constStatus', "ready");
                document.getElementsByClassName("delete_task_modal_container")[0].style.display = "none"

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
        
    }
    
    return(
        <div className="modal_validation_version2">             
            <p title="Close" className='close_modal' onClick={closeDeleteModal}>&#215;</p>
            <div className='top'>
                <img src={DeleteIconModal}/>
             Delete
            </div>
            <p className='title'>Are you sure you want to continue? </p>
            <p className='subtitle'>This action is permanent and cannot be undone!</p>

            <form style={{width: "100%"}} onSubmit={submitForm}>
            <div className='bot'>
                <input type="hidden" id="id_delete_key"/>
                <button type="button" onClick={closeDeleteModal}>Cancel</button>
                <button type="submit">Delete</button>
            </div>
            </form>
        </div>
    )
}