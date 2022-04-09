import React, { useEffect } from 'react';
import '../css/dashboard.css';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import RightNavbar_bg from '../images/right_navbar_bg.png';
import LightThemeBG from '../images/light_themeBG.png';
import DarkThemeBG from '../images/dark_themeBG.png';
import Arrow_down from '../images/icons/arrow_down.svg'
import { Link} from "react-router-dom";
import moment from 'moment';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CloseRightNavbar from '../functions/CloseRightNavbar'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import TermsOfService from '@mui/icons-material/Article';
import PrivacyPolicy from '@mui/icons-material/Security';
import Logout from '@mui/icons-material/Logout';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import log_login from '../images/icons/log_login.svg';
import MenuVerticalIcon from '../images/icons/menu_vertical.svg';
import TaskIcon1 from '@mui/icons-material/Task';

import axios from "axios";
import { useState } from "react";
import TaskModal from '../modalsUi/TaskModal';
import EachTask from '../eachTask/EachTask';
import taskDateClick from '../functions/TaskDateSelector';
import ViewTaskModal from '../modalsUi/ViewTaskModal';

export default function RightNavbar(){
  //getting the email of user
  let email_key = localStorage.getItem('email');

  //Open the modal for task 
  function OpenTaskModal(){
      document.getElementsByClassName("task_modal_container")[0].style.display = "flex";
  }

  //Hook for view the list of task of user
  const [task, setTask] = useState([]);  

  const loadTasks = async () =>{
      const result = await axios.get("http://localhost/fms/listoftask.php");
      setTask(result.data.phpresult);
  };

  useEffect(() => {
      loadTasks();
  }, []);

  

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
            if(res.email === email_key && res.date === localStorage.getItem('taskDateValue') ){
                if(time_AM == "am"){
                    return (
                        <EachTask 
                            time={res.time}
                            title= {res.title}
                            description={description_trim+dot}
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
  
        if(res.email === email_key && res.date === localStorage.getItem('taskDateValue') ){
            if(time_AM == "pm"){
                return (
                    <EachTask 
                        time={res.time}
                        title= {res.title}
                        description={description_trim+dot}
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
                    time={res.time}
                    title= {res.title}
                    description={description_trim+dot}
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
                    />
                )
            }
        }
    })     
  //-------------------------------------------------------------------------------//

    //for getting the initial name in avatar
    let initialName = localStorage.getItem('name').charAt(0);
    let firstName = localStorage.getItem('name').split(' ')[0]

    var theme_ctr = "light";
    function theme_toggle(){
            if(theme_ctr === "light"){//togle light mode
                document.getElementById("circle").style.marginLeft = "0";
                document.getElementById("circle").style.backgroundColor = "#ffff";
                document.getElementById("theme_toggle").style.backgroundImage = `url(${DarkThemeBG})`;
                theme_ctr = "dark";
            }
            else{//toggle dark mode
                document.getElementById("circle").style.marginLeft = "3.5vh";
                document.getElementById("circle").style.backgroundColor = "#FFE879";
                document.getElementById("theme_toggle").style.backgroundImage = `url(${LightThemeBG})`;
                theme_ctr = "light";
            }
    }

    //Menu on navbar
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    //Menu on activity log
    const [anchor_act, setAnchorEl_act] = React.useState(null);
    const open_act = Boolean(anchor_act);
    const handleClick_act = (event) => {
      setAnchorEl_act(event.currentTarget);
    };
    const handleClose_act = () => {
      setAnchorEl_act(null);
    };

    //Menu on task
    const [anchor_task, setAnchorEl_task] = React.useState(null);
    const open_task = Boolean(anchor_task);
    const handleClick_task = (event) => {
        setAnchorEl_task(event.currentTarget);
    };
    const handleClose_task = () => {
        setAnchorEl_task(null);
    };
    
    return (
        <div className="right_navbar_container"
            style={{
                backgroundImage: `url(${RightNavbar_bg})` 
            }}
        >
            <div className='right_navbar_top'>

                <div className='right_nav_sizer'  title="Minimize" onClick={CloseRightNavbar}>
                    <span className='span1_right_nav'>&#187;</span>
                </div>
                
                <div className='theme_toggle' id="theme_toggle" style={{ backgroundImage: `url(${LightThemeBG})` }} >
                    <div className='circle' id="circle" onClick={theme_toggle}></div>
                </div>

                <div className='right_navbar_profile'>
                    <Avatar 
                        src="http://localhost/fms/upload_profile/sample_profile.jpg" 
                        sx={{ bgcolor: deepOrange[600] , width: "4vh", height: "4vh", fontSize: "1rem"}}
                    >
                        {initialName}
                    </Avatar>
                    <span>{firstName}</span>
                    <img src={Arrow_down} className="arrow_down" title='Account' onClick={handleClick}/>

                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
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

                        <MenuItem>
                            <Avatar 
                                src="http://localhost/fms/upload_profile/sample_profile.jpg" 
                                sx={{ bgcolor: deepOrange[600] , width: "4vh", height: "4vh", fontSize: "1rem"}}
                                >
                                {initialName}
                            </Avatar>
                            Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <TermsOfService fontSize="small" />
                            </ListItemIcon>
                            Terms of Service
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <PrivacyPolicy fontSize="small" />
                            </ListItemIcon>
                            Privacy Policy
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <LocalActivityIcon fontSize="small" />
                            </ListItemIcon>
                            Activity Log
                        </MenuItem>
                        <Link to="/" style={{ textDecoration: 'none', color: '#212121' }}>
                        <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Sign Out
                        </MenuItem>
                        </Link>
                    </Menu>
                </div>

            </div>

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
                                <MenuItem>
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
                    </div>
                    <div className='task2_display' style={{display:"none"}}>
                        {Task_box_AM2}
                        {Task_box_PM2}
                    </div>
                    <div className='task3_display' style={{display:"none"}}>
                        {Task_box_AM3}
                        {Task_box_PM3}
                    </div>
                    <div className='task4_display'>
                        {Task_box_AM_today}
                        {Task_box_PM_today}
                    </div>
                    <div className='task5_display' style={{display:"none"}}>
                        {Task_box_AM5}
                        {Task_box_PM5}
                    </div>
                    <div className='task6_display' style={{display:"none"}}>
                        {Task_box_AM6}
                        {Task_box_PM6}
                    </div>
                    <div className='task7_display' style={{display:"none"}}>
                        {Task_box_AM7}
                        {Task_box_PM7}
                    </div>
                </div>
            </div>
 
            <div className='activitylog_container'>
                <span>Activity Log</span>
                <MoreHorizIcon sx={{marginRight : '5%'}} className={"MoreHorizIcon"} onClick={handleClick_act}/>
                <Menu
                    anchorEl={anchor_act}
                    id="account-menu"
                    open={open_act}
                    onClose={handleClose_act}
                    onClick={handleClose_act}
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
                        <MenuItem>
                            <ListItemIcon>
                                <LocalActivityIcon fontSize="small" />
                            </ListItemIcon>
                            View all recent activity
                        </MenuItem>
                </Menu>
            </div>    

            <div className='activitylog_content'>
                <div className='activity_box'>
                    <div className='left'><img src={log_login}/></div>
                    <div className='right'>
                         <span>March 20, 2022</span>
                         <span>2:20 PM</span>
                         <span>You logged in</span>
                    </div>
                </div>
                <div className='activity_box'>
                    <div className='left'><img src={log_login}/></div>
                    <div className='right'>
                         <span>March 20, 2022</span>
                         <span>2:20 PM</span>
                         <span>You logged in</span>
                    </div>
                </div>
                <div className='activity_box'>
                    <div className='left'><img src={log_login}/></div>
                    <div className='right'>
                         <span>March 20, 2022</span>
                         <span>2:20 PM</span>
                         <span>You logged in</span>
                    </div>
                </div>
            </div>   



            {/*MODAL FOR ADD TASK */}
            <div className="modal_container task_modal_container">
                <TaskModal/>
            </div>

            <div className="modal_container view_task_modal_container"
             style={{display:"none"}}>
                <ViewTaskModal/>
            </div>

        </div>
    )
}