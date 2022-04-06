import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Left_navToggler from '../functions/Leftnavbar'
import OpenRightNavbar from '../functions/OpenRightNavbar'

export default function NavbarSizer(){
  //for getting the initial name in avatar
  let initialName = localStorage.getItem('name').charAt(0);
  const mediaQuery = window.matchMedia('(max-width: 850px)'); //Para macheck to punta sa Navbar js function

 // Para maclose yung right nav
  window.onclick = function(event) {
    if (event.target == document.getElementsByClassName('dashboard_content')[0] && mediaQuery.matches) {
      document.getElementsByClassName('right_nav_sizer')[0].title = "Maximize";
      document.getElementsByClassName('right_navbar_container')[0].style.marginRight = "-70%";
      document.getElementsByClassName('span1_right_nav')[0].style.display = "none";
      document.getElementsByClassName('avatar_navbar_sizer')[0].style.display = "flex";
      document.getElementsByClassName('right_nav_sizer')[0].style.width = "80px";
      document.getElementsByClassName('right_nav_sizer')[0].style.backgroundColor = "#ffff";
      document.getElementsByClassName('span2_right_nav')[0].style.color = "#ffaa28";
    }
  }
    return (
        <div className='navbar_sizer'>
        <div className='left_nav_sizer' onClick={Left_navToggler}  title="Minimize">
          <span className='span1_left_nav'>&#171;</span>
          <span className='span2_left_nav' style={{display: "none" }}>&#187;</span>
        </div>
        <div className='right_nav_sizer'  title="Minimize" onClick={OpenRightNavbar}>
          <span className='span1_right_nav'>&#187;</span>
          <span className='span2_right_nav'>&#171;</span>
          <Avatar 
                src="http://localhost/fms/upload_profile/sample_profile.jpg" 
                className='avatar_navbar_sizer'
                sx={{ bgcolor: deepOrange[600] , width: "4vh", height: "4vh", fontSize: "1rem", margin: "0 10px", display: "none"}}
            >
                {initialName}
          </Avatar>
        </div>
      </div>
    )
}