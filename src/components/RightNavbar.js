import React from 'react';
import '../css/dashboard.css';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import RightNavbar_bg from '../images/right_navbar_bg.png';
import LightThemeBG from '../images/light_themeBG.png';
import DarkThemeBG from '../images/dark_themeBG.png';
import Arrow_down from '../images/icons/arrow_down.svg'
import { Link, Navigate } from "react-router-dom";
import moment from 'moment';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import TermsOfService from '@mui/icons-material/Article';
import PrivacyPolicy from '@mui/icons-material/Security';
import Logout from '@mui/icons-material/Logout';
import TaskIcon from '../images/icons/task.svg'

export default function RightNavbar(){
    //date today
    const today = new Date();
    const monthToday = today.toLocaleString('default', { month: 'long' });
    const yearToday = today.getFullYear();

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day1 = weekday[today.getDay()-3];
    let day2 = weekday[today.getDay()-2];
    let day3 = weekday[today.getDay()-1];
    let day4 = weekday[today.getDay()];
    let day5 = weekday[today.getDay() - 6];
    let day6 = weekday[today.getDay() - 5];
    let day7 = weekday[today.getDay() - 4];
    let initialday1 = day1.substring(0,2);
    let initialday2 = day2.substring(0,2);
    let initialday3 = day3.substring(0,2);
    let initialday4 = day4.substring(0,2);
    let initialday5 = day5.substring(0,2);
    let initialday6 = day6.substring(0,2);
    let initialday7 = day7.substring(0,2);

    var startdate1 = moment().subtract(3, "days");
    var startdate2 = moment().subtract(2, "days");
    var startdate3 = moment().subtract(1, "days");
    var startdate4 = moment().subtract(0, "days");
    var startdate5 = moment().add(1, "days");
    var startdate6 = moment().add(2, "days");
    var startdate7 = moment().add(3, "days");
    let today1 = startdate1.format("DD");
    let today2 = startdate2.format("DD");
    let today3 = startdate3.format("DD");
    let today4 = startdate4.format("DD");
    let today5 = startdate5.format("DD");
    let today6 = startdate6.format("DD");
    let today7 = startdate7.format("DD");
  

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

    return (
        <div className="right_navbar_container"
            style={{
                backgroundImage: `url(${RightNavbar_bg})` 
            }}
        >

            <div className='right_navbar_top'>
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
                        <Link to="/" style={{ textDecoration: 'none', color: '#212121' }}>
                        <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
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
                            <div className='task_btn'>+ Add Task</div>
                        </div>
                    </div>
                    
                    <div className='task_calendar'>
                        <button className='date'>
                            <p>{initialday1}</p>
                            <p>{today1}</p>
                        </button>
                        <button className='date'>
                            <p>{initialday2}</p>
                            <p>{today2}</p>
                        </button>
                        <button className='date'>
                            <p>{initialday3}</p>
                            <p>{today3}</p>
                        </button>
                        <button className='date date_today'>
                            <p>{initialday4}</p>
                            <p>{today4}</p>
                        </button>
                        <button className='date'>
                            <p>{initialday5}</p>
                            <p>{today5}</p>
                        </button>
                        <button className='date'>
                            <p>{initialday6}</p>
                            <p>{today6}</p>
                        </button>
                        <button className='date'>
                            <p>{initialday7}</p>
                            <p>{today7}</p>
                        </button>
                    </div>
                </div>

                <div className='task_content'>
                     <div className='task_box'>
                         <span>7:00 pm</span>
                         <div className='task_description'>
                            <div className='top'>
                                <div className='task_icon'><img src={TaskIcon}/></div>
                                BSIT 4M CLASS
                            </div>
                            <span className='task_text'>This is a sample test.....</span>
                         </div>
                     </div>

                     <div className='task_box'>
                         <span>7:00 pm</span>
                         <div className='task_description'>
                            <div className='top'>
                                <div className='task_icon'><img src={TaskIcon}/> </div>
                                BSIT 4M CLASS
                            </div>
                            <span className='task_text'>This is a sample test.....</span>
                         </div>
                     </div>

                     <div className='task_box'>
                         <span>7:00 pm</span>
                         <div className='task_description'>
                            <div className='top'>
                                <div className='task_icon'><img src={TaskIcon}/> </div>
                                BSIT 4M CLASS
                            </div>
                            <span className='task_text'>This is a sample test.....</span>
                         </div>
                     </div>


                </div>
            </div>
 



        </div>
    )
}