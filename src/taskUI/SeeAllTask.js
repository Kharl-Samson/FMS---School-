import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import SearchIcon from "../images/icons/search.svg";
import no_record_icon from "../images/no_record_icon.png";
import $ from 'jquery';
import TaskBox from './TaskBox';
import SuccessSlideRightModal from '../modalsUi/SuccessSlideRightModal';

export default function SeeAllTask(){
  //Email key
  let email_key = localStorage.getItem('email'); 
  //Hook for view the list of task of user
  const [task, setTask] = useState([]);  

  const loadTasks = async () =>{
      const result = await axios.get("http://localhost/fms/listoftaskDescDate.php");
      setTask(result.data.phpresult);
  };

  useEffect(() => {
    setInterval(() => {
      loadTasks();
    }, 10);
  }, []);


    //Task box container using map
    const Task_box= task.map((res)=> {
        if(res.email === email_key){
                return (
                  <TaskBox
                    id = {res.id}
                    title = {res.title}
                    description = {res.description}
                    link = {res.link}
                    date = {res.date}
                    time = {res.time}
                  />
                )
        }
    })


        //Filter Search
        $("#searh_task").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#ul_task .task_box_container").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });

            if($('#ul_task .task_box_container:visible').length === 0) {//pag not found
                document.getElementsByClassName("no_record_found")[0].style.display = "flex";
                document.getElementsByClassName("empty_data")[0].style.display = "none";
            }
            else if($('#ul_task .task_box_container:visible').length != 0){//pag found
                document.getElementsByClassName("no_record_found")[0].style.display = "none";
                document.getElementsByClassName("empty_data")[0].style.display = "none";
            }
            if(document.getElementById("searh_task").value == ""){
                document.getElementsByClassName("no_record_found")[0].style.display = "none";
                document.getElementsByClassName("empty_data")[0].style.display = "flex";
            }
        });


        //Closing all task function
        var task_modal_container =  document.getElementsByClassName("task_modal_container")[0];
        var view_task_modal_container =  document.getElementsByClassName("view_task_modal_container")[0];
        var view_alltask_modal_container = document.getElementsByClassName("view_alltask_modal_container")[0];
        var edit_task_modal_container = document.getElementsByClassName("edit_task_modal_container")[0];
        var delete_task_modal_container = document.getElementsByClassName("delete_task_modal_container")[0];

        function CloseAllTask(){
            document.getElementsByClassName("see_all_task_container")[0].style.bottom = "-100%";
            setTimeout(function(){
                document.getElementsByClassName("view_alltask_modal_container")[0].style.display = "none";
            },500);
        }

        window.onclick = function(event) {
            if (event.target == task_modal_container) {
                task_modal_container.style.display = "none";
                var input =  document.getElementsByClassName("task_input");
                for(var i=0; i< input.length; i++){
                    input[i].value = "";
                }
            }
            else if (event.target == view_task_modal_container) {
                view_task_modal_container.style.display = "none";
            }
            else if (event.target == view_alltask_modal_container) {
                document.getElementsByClassName("see_all_task_container")[0].style.bottom = "-100%";
                setTimeout(function(){
                    view_alltask_modal_container.style.display = "none";
                },500);
            }
            else if (event.target == edit_task_modal_container) {
                edit_task_modal_container.style.display = "none";
            }
            else if (event.target == delete_task_modal_container) {
                delete_task_modal_container.style.display = "none";
            }
        }

    return(
        <div className="see_all_task_container">

            <div className="top">
                <p className="header">Your List of Tasks</p>
                <div className='close_btn'><span title="Close" onClick={CloseAllTask}>&#187;</span></div>
            </div>

            <div className='search_container'>
                <div className='search_input_container'>
                    <div className='left'><img src={SearchIcon}/></div>
                    <input type="text" placeholder='Search here...' id="searh_task"/>
                </div> 
            </div>

            <div className="content">
                <ul className="ul_task" id="ul_task">
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        id="see_all_task_container"
                    >   
                        {Task_box.length !== 0 ? 
                                Task_box :      
                                  <div className='empty_data'>
                                    <img src={no_record_icon}/>
                                    <p>You have no tasks in your list</p>
                                </div>
                        }

                        <div className='no_record_found'>
                                <img src={no_record_icon}/>
                                <p>Sorry, No records found</p>
                        </div>
                    
                        
                    </Grid>     
                </ul>
            </div>

            {/*Modal*/ }
            <SuccessSlideRightModal
                img="success_modal.svg"
                title="Success!"
                subtitle="This action was process succesfully."
            />             

        </div>
    )
}