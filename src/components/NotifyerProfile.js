import React from "react";
import CICT_Logo from "../images/login/cict_logo.png";
import Dashboard_icon from "../images/icons/dashboard.svg";
import Profile_icon from "../images/icons/profile.svg";
import mr_robot from "../images/Robot.gif";
import hand_mouse from "../images/icons/hand_mouse.svg"
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';


export default function ProfileNotifyer(){

    //Tooltip
    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }}/>
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: theme.palette.common.white,
          color: 'rgba(0, 0, 0, 0.87)',
          boxShadow: theme.shadows[1],
          fontSize: ".8rem",
        },
    }));


    function closeNotifyer(){
        window.localStorage.setItem('pds_ctr', "on");
        document.getElementById("profile_notify_container").style.display="none"
    }


    return(  
    <div className='profile_notify_container' id="profile_notify_container" onClick={closeNotifyer}>
        
        <div className="navbar_account_container" style={{backgroundColor:"transparent"}}>
            <div>
                <div className="navbar_logo_container nav_part1" style={{visibility:"hidden"}}>
                    <img src={CICT_Logo} className="cict_logo"/>
                    <div className="cict_text left_nav_minimize">
                        <span>CICT</span>
                    </div>
                </div>
                <div className="nav_line nav_part1"></div>

                <div className="nav_part2">
                    <Link to="" style={{ textDecoration: 'none',width: "25%",visibility:"hidden" }}>
                    <div className="navlink_container" id="dashboard_link">
                        <LightTooltip title='Dashboard'>
                        <img src={Dashboard_icon} className="left_nav_minimize_img"/>
                        </LightTooltip>
                        <span className='left_nav_minimize'>Dashboard</span>
                    </div>
                    </Link>

                    <Link to="/PersonalInformation" style={{ textDecoration: 'none',width: "25%"  }}>
                    <div className="navlink_container"  id="pds_link" style={{backgroundColor:"#FFFF",borderLeft:"5px solid #FFAA28"}}>
                        <LightTooltip title='My Profile'>
                        <img src={Profile_icon} className="left_nav_minimize_img"/>
                        </LightTooltip>
                        <span className='left_nav_minimize'>My Profile</span>
                    </div>
                    </Link>

                        <img src={hand_mouse} className="hand_mouse"/>
                        
                        <div className="robot_container">
                            <div className="left"><img src={mr_robot}/></div>
                            <div className="right">
                                <div className="convo_box">
                                     <p>Hey Kharl!</p>
                                     <p>It seems that your profile is not complete yet. You can go to my profile page and finish your account setup!</p>

                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        <div className="main_content_profile_notify">

                
        </div>
    </div>
    )
}