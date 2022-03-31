import React from "react";
import { Link, Navigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Terms_icon from "../images/icons/terms_of_service.svg";
import Privacy_icon from "../images/icons/privacy_policy.svg";
import CICT_Logo from "../images/login/cict_logo.png";
import Profile_icon from "../images/icons/profile.svg";
import Logout_icon from "../images/icons/logout.svg";


export default function Drawer(){
    return (
       <div>
        <div className='profile_drawer_container'>
            <div className='left'>
                <img src="http://localhost/fms/upload_profile/sample_profile.jpg" />
            </div>
            <div className='right'>
                    <span>{localStorage.getItem('name')}</span>
                    <p>{localStorage.getItem('email')}</p>
            </div>
        </div>

        <div className='line_drawer'></div>

        <div className='drawer_link'>
            <img src={Profile_icon} />
            View Profile
            <span>&#62;</span>
        </div>

        <div className='drawer_link'>
            <img src={Terms_icon} />
            Terms of Service
            <span>&#62;</span>
        </div>

        <div className='drawer_link'>
            <img src={Privacy_icon} />
            Privacy Policy
            <span>&#62;</span>
        </div>

        <Link to="/" style={{ textDecoration: 'none', color: '#353434   ' }}>
            <div className='logout_link'>
                <img src={Logout_icon} />
                Sign Out
            </div>
        </Link>
 
        <div className='drawer_footer'>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src={CICT_Logo} className="cict_logo"/>
                    <span>College of Information and Communication Technology</span>
                </Grid>  

        </div>
      </div>
    )
}