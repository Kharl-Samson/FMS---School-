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
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export default function NavbarFaculty(props){
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
                    <Link to="/FacultyDashboard" style={{ textDecoration: 'none',width: "25%" }}>
                    <div className="navlink_container" id="dashboard_link">
                        <LightTooltip title='Dashboard'>
                        <img src={Dashboard_icon} className="left_nav_minimize_img"/>
                        </LightTooltip>
                        <span className='left_nav_minimize'>Dashboard</span>
                    </div>
                    </Link>

                    <Link to="" style={{ textDecoration: 'none',width: "25%" }}>
                    <div className="navlink_container" id="profile_link">
                        <LightTooltip title='Profile'>
                        <img src={Profile_icon} className="left_nav_minimize_img"/>
                        </LightTooltip>
                        <span className='left_nav_minimize'>Profile</span>
                    </div>
                    </Link>

                    <Link to="/PersonalDataSheet" style={{ textDecoration: 'none',width: "25%"  }}>
                    <div className="navlink_container"  id="pds_link">
                        <LightTooltip title='Personal Data Sheet'>
                        <img src={Pds_icon} className="left_nav_minimize_img"/>
                        </LightTooltip>
                        <span className='left_nav_minimize'>PDS</span>
                    </div>
                    </Link>

                    <Link to="" style={{ textDecoration: 'none',width: "25%" }}>
                    <div className="navlink_container nav_part3"  id="certificate_link">
                        <LightTooltip title='Certificates'>
                        <img src={Certificate_icon} className="left_nav_minimize_img"/>
                        </LightTooltip>
                        <span className='left_nav_minimize'>Certificates</span>
                    </div>
                    </Link>
                    
                </div>
            </div>



            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logout_container navlink_container">
                    <LightTooltip title='Sign Out'>
                    <img src={Logout_icon} className='left_nav_minimize_img'/>
                    </LightTooltip>
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