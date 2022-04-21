import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import OpenRightNavbar from '../functions/OpenRightNavbar'

export default function NavbarSizer(){
  //for getting the initial name in avatar
  let initialName = localStorage.getItem('name').charAt(0);
  const mediaQuery = window.matchMedia('(max-width: 850px)'); //Para macheck to punta sa Navbar js function

  //Left Navbar function
  var left_navbar_status = "open";

  function Left_navToggler(){
      if(left_navbar_status === "open"){ //Closing left nav
          left_navbar_status = "close";
          document.getElementsByClassName('span1_left_nav')[0].style.display = "none";
          document.getElementsByClassName('span2_left_nav')[0].style.display = "flex";
          document.getElementsByClassName('left_nav_sizer')[0].title = "Maximize";
          var left_nav_minimize = document.getElementsByClassName('left_nav_minimize');
          for(var i=0; i< left_nav_minimize.length; i++){
              left_nav_minimize[i].style.display = "none";
          }
          var navlink_container = document.getElementsByClassName('navlink_container');
          for(var i=0; i< navlink_container.length; i++){
              navlink_container[i].style.justifyContent = "center";
          }
          var left_nav_minimize_img = document.getElementsByClassName('left_nav_minimize_img');
          for(var i=0; i< left_nav_minimize_img.length; i++){
              left_nav_minimize_img[i].style.marginLeft = "0%";
          }
      }
      else{
          left_navbar_status = "open";
          document.getElementsByClassName('span1_left_nav')[0].style.display = "flex";
          document.getElementsByClassName('span2_left_nav')[0].style.display = "none";
          document.getElementsByClassName('left_nav_sizer')[0].title = "Minimize";
          var left_nav_minimize = document.getElementsByClassName('left_nav_minimize');
          for(var i=0; i< left_nav_minimize.length; i++){
              left_nav_minimize[i].style.display = "flex";
          }
          var navlink_container = document.getElementsByClassName('navlink_container');
          for(var i=0; i< navlink_container.length; i++){
              navlink_container[i].style.justifyContent = "flex-start";
          }
          var left_nav_minimize_img = document.getElementsByClassName('left_nav_minimize_img');
          for(var i=0; i< left_nav_minimize_img.length; i++){
              left_nav_minimize_img[i].style.marginLeft = "15%";
          }
      }
  }  

 // Para maclose yung right nav
  window.onclick = function(event) {
    if (event.target == document.getElementsByClassName('dashboard_content')[0] && mediaQuery.matches) {
      document.getElementsByClassName('right_navbar_container')[0].style.marginRight = "-100%";
      setTimeout(function(){
          document.getElementsByClassName('right_nav_sizer_Open')[0].style.display = "flex";
      },200);
    }
  }
    return (
        <div className='navbar_sizer'>
        <div className='left_nav_sizer' onClick={Left_navToggler}  title="Minimize">
          <span className='span1_left_nav'>&#171;</span>
          <span className='span2_left_nav' style={{display: "none" }}>&#187;</span>
        </div>
        

        <div className='right_nav_sizer_Open'  title="Maximize" onClick={OpenRightNavbar}>
          <span className='span2_right_nav' >&#171;</span>
          <Avatar 
                src="http://localhost/fms/upload_profile/sample_profile.jpg" 
                className='avatar_navbar_sizer'
                sx={{ bgcolor: deepOrange[600] , width: "4vh", height: "4vh", fontSize: "1rem", margin: "0 10px"}}
            >
                {initialName}
          </Avatar>
        </div>


      </div>
    )
}