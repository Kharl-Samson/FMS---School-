import React, { useEffect } from 'react';
import '../css/dashboard.css';
import LeftNavbarFaculty from '../navbarsUI/LeftNavbarFaculty';
import RightNavbar from '../navbarsUI/RightNavbar';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import ToggleRightNav from '../functions/RightNavbar';
import ToggleLeftNav from '../functions/LeftNavbar';

export default function FacultyDashboard(){

  //for getting the initial name in avatar
  let initialName = localStorage.getItem('name').charAt(0);
  const mediaQuery = window.matchMedia('(max-width: 850px)'); //Para macheck to punta sa Navbar js function

 // Para maclose yung right nav
  window.onclick = function(event) {
    if (event.target == document.getElementsByClassName('dashboard_content')[0] && mediaQuery.matches) {
        document.getElementsByClassName('right_navbar_container')[0].style.display = "none";
    }
  }
  
    return (
        <div className="dashboard_container">
            <LeftNavbarFaculty/>  

            <div className="dashboard_content">

              <div className='navbar_sizer'>
                <div className='left_nav_sizer'  onClick={ ToggleLeftNav} title="Minimize">
                  <span className='span1_left_nav'>&#171;</span>
                  <span className='span2_left_nav' style={{display: "none" }}>&#187;</span>
                </div>
                <div className='right_nav_sizer' onClick={ ToggleRightNav}  title="Minimize">
                  <span className='span1_right_nav'>&#187;</span>
                  <span className='span2_right_nav' style={{display: "none" }}>&#171;</span>
                  <Avatar 
                        src="http://localhost/fms/upload_profile/sample_profile.jpg" 
                        className='avatar_navbar_sizer'
                        sx={{ bgcolor: deepOrange[600] , width: "4vh", height: "4vh", fontSize: "1rem", margin: "0 10px", display: "none"}}
                    >
                        {initialName}
                  </Avatar>
                </div>
              </div>


            </div>
            
            <RightNavbar/>

        </div>
    )
}