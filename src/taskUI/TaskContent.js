import React, { useEffect } from 'react';
import MenuVerticalIcon from '../images/icons/menu_vertical.svg';
import TaskIcon1 from '@mui/icons-material/Task';
import { useState } from "react";
import axios from "axios";
import moment from 'moment';
import TaskBoxRefresher from '../functions/TaskBoxRefresher';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import EachTask from '../taskUI/EachTask';
import taskDateClick from '../functions/TaskDateSelector';
import no_record_icon from "../images/no_record_icon.png";
import TaskModal from '../modalsUi/TaskModal';
import ViewTaskModal from '../modalsUi/ViewTaskModal';
import SuccessIcon from '../images/icons/success_modal.svg';
import TaskBox from './TaskBox';
import $ from 'jquery';
import SearchIcon from "../images/icons/search.svg";
import Grid from '@mui/material/Grid';
import SuccessSlideRightModal from '../modalsUi/SuccessSlideRightModal';
import DeleteIconModal from '../images/icons/delete_icon_modal.svg';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import TaskModalIcon from '../images/icons/task_modal.svg';

export default function TaskContent(){

  //getting the email of user
  let email_key = localStorage.getItem('email');

  //Open the modal for task 
  function OpenTaskModal(){
      document.getElementsByClassName("task_modal_container")[0].style.display = "flex";
  }

  //opening all task function
  function viewAllTask(){
    document.getElementsByClassName("view_alltask_modal_container")[0].style.display = "flex";
    setTimeout(function(){
        document.getElementsByClassName("see_all_task_container")[0].style.bottom = "0%";
    },200);
  }   

   //Menu on task
   const [anchor_task, setAnchorEl_task] = React.useState(null);
   const open_task = Boolean(anchor_task);
   const handleClick_task = (event) => {
       setAnchorEl_task(event.currentTarget);
   };
   const handleClose_task = () => {
       setAnchorEl_task(null);
   };
  
  //Hook for view the list of task of user
  const [task, setTask] = useState([]);  

  const loadTasks = async () =>{
      const result = await axios.get("http://localhost/fms/listoftask.php");
      setTask(result.data.phpresult);
  };

  useEffect(() => {
      loadTasks();
  }, []);

  //Hook for view all the task of user
  const [taskAll, setTaskAll] = useState([]);  

  const loadTasksAll = async () =>{
      const result = await axios.get("http://localhost/fms/listoftaskDescDate.php");
      setTask(result.data.phpresult);
  };

  useEffect(() => {
      loadTasksAll();
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
    var delete_certificate_modal_container = document.getElementsByClassName("delete_certificate_modal_container")[0];
    var view_certificate_container = document.getElementsByClassName("view_certificate_container")[0];
    var view_certificate_container1 = document.getElementById("view_certificate_container1");
    var view_certificate_container2 = document.getElementById("view_certificate_container2");
    var view_cert_enlarge = document.getElementById("view_cert_enlarge");
    var view_cert_enlarge1 = document.getElementById("view_cert_enlarge1");
    var view_cert_enlarge2 = document.getElementById("view_cert_enlarge2");
    var profileLocked_modal = document.getElementById("profileLocked_modal");
    var accept_faculty_modal_container = document.getElementsByClassName("accept_faculty_modal_container")[0];
    var decline_faculty_modal_container = document.getElementsByClassName("decline_faculty_modal_container")[0];
    var logout_modalAdmin = document.getElementsByClassName("logout_modalAdmin")[0];
    var delete_account = document.getElementsByClassName("delete_account")[0];
    
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
        else if (event.target == delete_certificate_modal_container) {
            delete_certificate_modal_container.style.display = "none";
        }
        else if (event.target == view_certificate_container) {
            view_certificate_container.style.display = "none";
        }
        else if (event.target == view_certificate_container1) {
            view_certificate_container1.style.display = "none";
        }
        else if (event.target == view_certificate_container2) {
            view_certificate_container2.style.display = "none";
        }
        else if (event.target == view_cert_enlarge) {
            view_cert_enlarge.style.display = "none";
        }
        else if (event.target == view_cert_enlarge1) {
            view_cert_enlarge1.style.display = "none";
        }
        else if (event.target == view_cert_enlarge2) {
            view_cert_enlarge2.style.display = "none";
        }
        else if (event.target == profileLocked_modal) {
            profileLocked_modal.style.display = "none";
        }
        else if (event.target == accept_faculty_modal_container) {
            accept_faculty_modal_container.style.display = "none";
        }
        else if (event.target == decline_faculty_modal_container) {
            decline_faculty_modal_container.style.display = "none";
        }
        else if (event.target == logout_modalAdmin) {
            logout_modalAdmin.style.display = "none";
        }
        else if (event.target == delete_account) {
            delete_account.style.display = "none";
        }   
    }

  setTimeout(function(){
    TaskBoxRefresher();
  },210);

  //Closing success modal when adding a task
  function CloseSuccessAddTaskModal(){
      document.getElementsByClassName("success_modal_task_container")[0].style.display="none";
      document.getElementsByClassName("task_modal_container")[0].style.display = "none";
      setTimeout(function(){
        loadTasks();
        loadTasksAll();
        var input =  document.getElementsByClassName("task_input");
        for(var i=0; i< input.length; i++){
            input[i].value = "";
        }
      },200);
      setTimeout(function(){
        TaskBoxRefresher();
      },210);
  }
  
  //Close delete task modal
  function closeDeleteModal(){
    document.getElementsByClassName("delete_task_modal_container")[0].style.display = "none"
  }

  //Getting the value of all input when submitting the form
  const submitForm=(e)=>{
        e.preventDefault();   
            const sendData = {
                email: localStorage.getItem('email'),
                id: document.getElementById("id_delete_key").value,
           }     
           //Sending the data to my backend
           axios.post('http://localhost/fms/deletetask.php',sendData)
           .then((result)=>{                   
            if(result.data.status === "Success"){
                loadTasks();
                loadTasksAll();
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

   //Close Edit Task Modal
   function CloseEditTaskModal(){
         document.getElementsByClassName("edit_task_modal_container")[0].style.display = "none";
   }

   const submitEditTaskForm=(e)=>{
    e.preventDefault();

    //Sending the data request to call it on backend
    const sendDataEdit = {
        email: localStorage.getItem('email'),
        id: document.getElementById("edit_task_id").value,
        title: document.getElementById("edit_task_title").value,
        description: document.getElementById("edit_task_description").value,
        link: document.getElementById("edit_task_link").value,
        date: document.getElementById("edit_task_date").value,
        time: document.getElementById("edit_task_time").value
    }
        //Sending the data to my backend
        axios.post('http://localhost/fms/updatetask.php',sendDataEdit)
        .then((result)=>{                   
            if(result.data.status === "Success"){
                loadTasks();
                loadTasksAll();
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

    //date today
    const today = new Date();
    const monthToday = today.toLocaleString('default', { month: 'long' });
    const yearToday = today.getFullYear();

    let startdate1 = moment().subtract(3, "days");
    let startdate2 = moment().subtract(2, "days");
    let startdate3 = moment().subtract(1, "days");
    let startdate4 = moment().subtract(0, "days");
    let startdate5 = moment().add(1, "days");
    let startdate6 = moment().add(2, "days");
    let startdate7 = moment().add(3, "days");
    
    const startdate_array = [startdate1,startdate2,startdate3,startdate4,startdate5,startdate6,startdate7];
    const today_arrayConverterd = [];
    const today_array = [];
    const initialday = [];
    var x;
    for(x = 0 ; x < 7 ; x++){
        today_arrayConverterd.push(startdate_array[x].format("L"));
        initialday.push(startdate_array[x] ? startdate_array[x].format("dddd").substring(0,2)  : '');
        today_array.push(startdate_array[x].format("DD"));
    }

    var taskDateValue =  new Date().toISOString().slice(0, 10);
    window.localStorage.setItem('taskDateValue', taskDateValue);

  //-------------------------------------------------------------------------------//
    //Task box container using map -> AM time
    const Task_box_AM1= task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ; 
        var today = today_arrayConverterd[0];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;
        if(res.email === email_key && res.date === taskDateValue ){
            if(time_AM == "am"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })
    //Task box container using map -> PM time
    const Task_box_PM1= task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ;  
        var today = today_arrayConverterd[0];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;   
        if(res.email === email_key && res.date === taskDateValue ){
            if(time_AM == "pm"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })
    //Task box container using map -> AM time
    const Task_box_AM2= task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ;   
        var today = today_arrayConverterd[1];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;
        if(res.email === email_key && res.date === taskDateValue ){
            if(time_AM == "am"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })
    //Task box container using map -> PM time
    const Task_box_PM2= task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ; 
        var today = today_arrayConverterd[1];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;
        if(res.email === email_key && res.date === taskDateValue ){
            if(time_AM == "pm"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })
    //Task box container using map -> AM time
    const Task_box_AM3= task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ; 
        var today = today_arrayConverterd[2];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;
        if(res.email === email_key && res.date === taskDateValue ){
            if(time_AM == "am"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })    
    //Task box container using map -> PM time
    const Task_box_PM3= task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ; 
        var today = today_arrayConverterd[2];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;
        if(res.email === email_key && res.date === taskDateValue ){
            if(time_AM == "pm"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })    
    //Task box container using map -> PM time
    const Task_box_AM_today = task.map((res)=> {
            var description_trim = res.description;
            description_trim = description_trim.substring(0, 20);
            var dot = "...";
            var time_AM = res.time.slice(-2);
            res.description.length >= 23 ? dot = "..." : dot = "" ; 
            var today = today_arrayConverterd[3];
            var splitToday = today.split("/");
            var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
            taskDateValue = date_Set;
            if(res.email === email_key && res.date === taskDateValue ){
                if(time_AM == "am"){
                    return (
                        <EachTask 
                            time={res.time}
                            title= {res.title}
                            description={description_trim+dot}
                            description_notTrim = {res.description}
                            link= {res.link}
                            date = {res.date}
                        />
                    )
                }
            }
     })
    //Task box container using map -> PM time
    const Task_box_PM_today = task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ; 
        var today = today_arrayConverterd[3];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;
        if(res.email === email_key && res.date === taskDateValue  ){
            if(time_AM == "pm"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })
    //Task box container using map -> AM time
    const Task_box_AM5= task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ; 
        var today = today_arrayConverterd[4];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;
        if(res.email === email_key && res.date === taskDateValue ){
            if(time_AM == "am"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })       
    //Task box container using map -> PM time
    const Task_box_PM5= task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ; 
        var today = today_arrayConverterd[4];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;
        if(res.email === email_key && res.date === taskDateValue ){
            if(time_AM == "pm"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })    
   //Task box container using map -> AM time
   const Task_box_AM6= task.map((res)=> {
    var description_trim = res.description;
    description_trim = description_trim.substring(0, 20);
    var dot = "...";
    var time_AM = res.time.slice(-2);
    res.description.length >= 23 ? dot = "..." : dot = "" ; 
    var today = today_arrayConverterd[5];
    var splitToday = today.split("/");
    var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
    taskDateValue = date_Set;
    if(res.email === email_key && res.date === taskDateValue ){
        if(time_AM == "am"){
            return (
                <EachTask 
                    title= {res.title}
                    description={description_trim+dot}
                    description_notTrim = {res.description}
                    link= {res.link}
                    date = {res.date}
                    time={res.time}
                />
            )
        }
    }
    })       
    //Task box container using map -> PM time
    const Task_box_PM6= task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ; 
        var today = today_arrayConverterd[5];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;
        if(res.email === email_key && res.date === taskDateValue ){
            if(time_AM == "pm"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })    
    //Task box container using map -> AM time
    const Task_box_AM7= task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ; 
        var today = today_arrayConverterd[6];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;
        if(res.email === email_key && res.date === taskDateValue ){
            if(time_AM == "am"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })         
    //Task box container using map -> PM time
    const Task_box_PM7 = task.map((res)=> {
        var description_trim = res.description;
        description_trim = description_trim.substring(0, 20);
        var dot = "...";
        var time_AM = res.time.slice(-2);
        res.description.length >= 23 ? dot = "..." : dot = "" ; 
        var today = today_arrayConverterd[6];
        var splitToday = today.split("/");
        var date_Set = splitToday[2]+"-"+splitToday[0]+"-"+splitToday[1];
        taskDateValue = date_Set;
        if(res.email === email_key && res.date === taskDateValue ){
            if(time_AM == "pm"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
                        description_notTrim = {res.description}
                        link= {res.link}
                        date = {res.date}
                    />
                )
            }
        }
    })     
  //-------------------------------------------------------------------------------//

    return (
    <div className='task_container'>

        <div className='task_top'>

            <div className='task_header'>
                <div className='left'>
                    <p>Your Task</p>
                    <span>{monthToday+" "+yearToday}</span>
                </div>
                <div className='right'>
                    <div className='task_btn' onClick={OpenTaskModal}>+ Add Task</div> 
                    <img src={MenuVerticalIcon} onClick={handleClick_task}/>
                    <Menu
                        anchorEl={anchor_task}
                        id="account-menu"
                        open={open_task}
                        onClose={handleClose_task}
                        onClick={handleClose_task}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                            },
                            }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem style={{display:"none"}}></MenuItem>
                        <MenuItem onClick={viewAllTask}>
                            <ListItemIcon>
                                <TaskIcon1 fontSize="small" />
                            </ListItemIcon>
                            View all scheduled task
                        </MenuItem>
                    </Menu>
                </div>
            </div>
            
            <div className='task_calendar'>
                <button className='date date1' onClick={() => { taskDateClick("date1");}}>
                    <p className='day1'>{initialday[0] }</p>
                    <p className='today1'>{today_array[0]}</p>
                </button>
                <button className='date date2' onClick={() => { taskDateClick("date2");}}>
                    <p>{initialday[1]}</p>
                    <p>{today_array[1]}</p>
                </button>
                <button className='date date3' onClick={() => { taskDateClick("date3");}}>
                    <p>{initialday[2]}</p>
                    <p>{today_array[2]}</p>
                </button>
                <button className='date date_today date4' onClick={() => { taskDateClick("date_today");}}>
                    <p>{initialday[3]}</p>
                    <p>{today_array[3]}</p>
                </button>
                <button className='date date5' onClick={() => { taskDateClick("date5");}}>
                    <p>{initialday[4]}</p>
                    <p>{today_array[4]}</p>
                </button>
                <button className='date date6' onClick={() => { taskDateClick("date6");}}>
                    <p>{initialday[5]}</p>
                    <p>{today_array[5]}</p>
                </button>
                <button className='date date7' onClick={() => { taskDateClick("date7");}}>
                    <p>{initialday[6]}</p>
                    <p>{today_array[6]}</p>
                </button>
            </div>
        </div>

        <div className='task_content' id="reload_task">
            <div className='task1_display' style={{display:"none"}}>
                {Task_box_AM1}
                {Task_box_PM1}
                <div className='empty_data_small empty_data_small1'>
                    <img src={no_record_icon}/>
                    <p>You have no tasks in your list</p>
                </div>
            </div>
            <div className='task2_display' style={{display:"none"}}>
                {Task_box_AM2}
                {Task_box_PM2}
                <div className='empty_data_small empty_data_small2'>
                    <img src={no_record_icon}/>
                    <p>You have no tasks in your list</p>
                </div>
            </div>
            <div className='task3_display' style={{display:"none"}}>
                {Task_box_AM3}
                {Task_box_PM3}
                <div className='empty_data_small empty_data_small3'>
                    <img src={no_record_icon}/>
                    <p>You have no tasks in your list</p>
                </div>
            </div>
            <div className='task4_display'>
                {Task_box_AM_today}
                {Task_box_PM_today}
                <div className='empty_data_small empty_data_small4'>
                    <img src={no_record_icon}/>
                    <p>You have no tasks in your list</p>
                </div>
            </div>
            <div className='task5_display' style={{display:"none"}}>
                {Task_box_AM5}
                {Task_box_PM5}
                <div className='empty_data_small empty_data_small5'>
                    <img src={no_record_icon}/>
                    <p>You have no tasks in your list</p>
                </div>
            </div>
            <div className='task6_display' style={{display:"none"}}>
                {Task_box_AM6}
                {Task_box_PM6}
                <div className='empty_data_small empty_data_small6'>
                    <img src={no_record_icon}/>
                    <p>You have no tasks in your list</p>
                </div>
            </div>
            <div className='task7_display' style={{display:"none"}}>
                {Task_box_AM7}
                {Task_box_PM7}
                <div className='empty_data_small empty_data_small7'>
                    <img src={no_record_icon}/>
                    <p>You have no tasks in your list</p>
                </div>
            </div>
        </div>


            {/*MODAL FOR TASK */}
            <div className="modal_container task_modal_container">
                <TaskModal/>
            </div>

            <div className="modal_container view_task_modal_container"
             style={{display:"none"}}>
                <ViewTaskModal/>
            </div>
            
            {/*Modal When done adding a task*/ }
            <div className="modal_container success_modal_task_container">
                <div className="modal_validation">
                    <img src={SuccessIcon} className="emailVal_img" style={{boxShadow :"none", height:"10vh"}}/>
                    <h1 className="val_header">Successful</h1>
                    <span className="val_subtext">You have successfully added a task to your schedule.</span>

                    <button className="modal_close_btn" id="success_close_modal" style={{backgroundColor : "#249F5D"}} onClick={CloseSuccessAddTaskModal}>Close</button>
                </div>
            </div>


           {/*SEE ALL TASK CONTAINER*/}
           <div className="modal_container view_alltask_modal_container">
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
            </div>

            {/*Delete Task Modal*/}
            <div className="modal_container delete_task_modal_container">
                <div className="modal_validation_version2">             
                <p title="Close" className='close_modal' onClick={closeDeleteModal}>&#215;</p>
                <div className='top'>
                    <img src={DeleteIconModal} style={{marginLeft:"25px"}}/>
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
            </div>

            {/*Editing task modal*/}
            <div className="modal_container edit_task_modal_container">
                <div className='task_modal'>
                    <div className='top'>
                        <img src={TaskModalIcon}/>
                        <div className='header'>
                            <p>Edit your tasks</p>
                            <p>Add some information about the task</p>
                        </div>
                        <div className='close_btn'><span title="Close" onClick={CloseEditTaskModal}>&#215;</span></div>
                    </div>
                    <form style={{width: "100%"}} onSubmit={submitEditTaskForm}>
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
                        <button onClick={CloseEditTaskModal} type="button">Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                    </form>

                </div>
            </div>

    </div>
    )
}