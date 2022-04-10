import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from "react";
import Grid from '@mui/material/Grid';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TimeIcon from "../images/icons/time.svg";
import CalendarIcon from "../images/icons/calendar.svg";
import SearchIcon from "../images/icons/search.svg";
import no_record_icon from "../images/no_record_icon.png"
import moment from 'moment';
import $ from 'jquery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
      loadTasks();
  }, []);



    //Menu on navbar
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    //Task box container using map
    const Task_box= task.map((res)=> {
      var dateFormat =  moment(res.date).format('LL');
        if(res.email === email_key){
                return (
                    <div className="task_box_container">
                        <MoreHorizIcon sx={{float : 'right', marginRight: "5%", marginTop:"3%", color:"#ffff"}} className={"MoreHorizIcon"}  onClick={handleClick}/>
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
                            <ListItemIcon>
                                <EditIcon fontSize="small" />
                            </ListItemIcon>
                            Edit Task
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <DeleteIcon fontSize="small" />
                            </ListItemIcon>
                            Delete
                        </MenuItem>
                    </Menu>
                    
                        <div className="date_container">
                            <img src={CalendarIcon}/>
                            {dateFormat}
                        </div>

                        <p className="title">{res.title}</p>
                        <p className="description">{res.description}</p>
                        <p className="link"><a href={res.link} target="_blank">{res.link}</a></p>

                        <div className="date_container" style={{marginTop: "0"}}>
                            <img src={TimeIcon}/>
                            {res.time}
                        </div>
                    </div>
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
            }
            else if($('#ul_task .task_box_container:visible').length != 0){//pag found
                document.getElementsByClassName("no_record_found")[0].style.display = "none";
            }
        });


        //Closing all task function
        var modal = document.getElementsByClassName("view_alltask_modal_container")[0];
        function CloseAllTask(){
            document.getElementsByClassName("see_all_task_container")[0].style.bottom = "-100%";
            setTimeout(function(){
                document.getElementsByClassName("view_alltask_modal_container")[0].style.display = "none";
            },500);
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                document.getElementsByClassName("see_all_task_container")[0].style.bottom = "-100%";
                setTimeout(function(){
                    document.getElementsByClassName("view_alltask_modal_container")[0].style.display = "none";
                },500);
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
                    >   
                        {Task_box}

                        <div className='no_record_found'>
                                <img src={no_record_icon}/>
                                <p>Sorry, No records found</p>
                        </div>
                    </Grid>     
                </ul>
            </div>
            
        </div>
    )
}