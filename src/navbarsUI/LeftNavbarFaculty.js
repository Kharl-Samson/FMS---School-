import * as React from 'react';
import { useEffect }  from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OpenRightNavbar from "../functions/OpenRightNavbar";
import CICT_Logo from "../images/login/cict_logo.png";
import Dashboard_icon from "../images/icons/dashboard.svg";
import Profile_icon from "../images/icons/profile.svg";
import Pds_icon from "../images/icons/pds.svg";
import Certificate_icon from "../images/icons/certificate.svg";
import Logout_icon from "../images/icons/logout.svg";
import Menu_icon from "../images/icons/menu.svg";

import { Link } from "react-router-dom";



export default function NavbarFaculty(props){

        //If wala laman yung local storage di makaka access sa loob
        const [auth,setAuth] = useState('');
        let navigate = useNavigate();
        
        useEffect(()=>{
            var auth = localStorage.getItem('email');
            if(auth === null){
                navigate(`/`)
            }
            setAuth(auth);
        },
        [])

    return (
        <div className="navbar_account_container">

            <div>
                <div className="navbar_logo_container nav_part1">
                    <img src={CICT_Logo} className="cict_logo"/>
                    <div className="cict_text left_nav_minimize">
                        <span>CICT</span>
                    </div>
                </div>
                <div className="nav_line nav_part1"></div>

                <div className="nav_part2">
                    <Link to="/FacultyDashboard" style={{ textDecoration: 'none' }}>
                    <div className="navlink_container" id="dashboard_link">
                        <img src={Dashboard_icon} className="left_nav_minimize_img" title="Dashboard"/>
                        <span className='left_nav_minimize'>Dashboard</span>
                    </div>
                    </Link>

                    <div className="navlink_container" id="profile_link">
                        <img src={Profile_icon} className="left_nav_minimize_img" title='Profile'/>
                        <span className='left_nav_minimize'>Profile</span>
                    </div>
               
                    <Link to="/PersonalDataSheet" style={{ textDecoration: 'none' }}>
                    <div className="navlink_container"  id="pds_link">
                    <img src={Pds_icon} className="left_nav_minimize_img" title='Personal Data Sheet'/>
                        <span className='left_nav_minimize'>PDS</span>
                    </div>
                    </Link>

                    <div className="navlink_container nav_part3"  id="certificate_link">
                        <img src={Certificate_icon} className="left_nav_minimize_img" title='Certificates'/>
                        <span className='left_nav_minimize'>Certificates</span>
                    </div>
                    
                </div>
            </div>



            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logout_container navlink_container">
                    <img src={Logout_icon} className='left_nav_minimize_img' title='Sign Out'/>
                    <span className='left_nav_minimize'>Sign Out</span>
                </div>
            </Link>

            {/* Nav drawer fo smaller device */}
            <div className="drawer_btn" onClick={OpenRightNavbar} >
                <img src={Menu_icon}/>
            </div>
     

        </div>
    )
}