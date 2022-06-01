import React from 'react';
import '../css/dashboardAdmin.css';
import { Link } from "react-router-dom";
import WeatherAndBanner from '../dashboardUI/WeatherAndBanner';
import NavbarAdmin from '../navbarsUI/LeftNavbarAdmin';
import NavbarSizer from '../navbarsUI/NavbarSizer';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useEffect, useState } from "react";
import axios from "axios";
import { deepOrange } from "@mui/material/colors";
import DashboardStatisticsFaculty from '../dashboardUI/StatisticsFaculty';
import RightNavbarAdmin from '../navbarsUI/RightNavbarAdmin';
import EachRowAdmin from './EachRowAdmin';

export default function AdminDashboard(){

//Hook for getting web content
  const [getWebContent, setWebContent] = useState([]);
  const loadWebContent = async () => {
    const result = await axios.get("http://localhost/fms/getWebContent.php");
    setWebContent(result.data.phpresult);
  };
  useEffect(() => {
    loadWebContent();
  }, []);
//Loading the icon in the tab
getWebContent.map((res) => { 
    document.querySelector("link[rel='shortcut icon']").href = "http://localhost/fms/web_content/"+res.logo;
    document.title = res.abbreviation+" | Dashboard";
});
  

    setTimeout(function(){
        document.getElementById("dashboard_link").classList.add('nav_active');
        document.getElementById("link_dashboard").style.pointerEvents="none";
    },10);

    setTimeout(function(){
        document.getElementsByClassName("table_dashboard_lisUsers")[0].style.marginTop = "2rem";
    },1000);



  //getting the email of user
  let email_key = localStorage.getItem("email");
  //Hook for getting all certificates
  const [getAllUser, setGetAllUser] = useState([]);
  const loadGetUsers = async () => {
    const result = await axios.get("http://localhost/fms/getAllUser.php");
    setGetAllUser(result.data.phpresult);
  };
  useEffect(() => {
    loadGetUsers();
  }, []);

  var AvatarGroup_ctr = 0;
  const AvatarGroupList = getAllUser.map((res) => {
    AvatarGroup_ctr++;
    if(email_key !== res.email && res.account_status == "Approved"){
      return (
        <Avatar  key={AvatarGroup_ctr} alt={res.fname} src={"http://localhost/fms/upload_profile/"+res.profile_photo}
        sx={{
            bgcolor: deepOrange[600],
            width: "34px",
            height: "34px",
            fontSize: ".9rem",
          }}
        />
      );
    }
  });

  var TableGroup_ctr = 0;
  const TableGroupList = getAllUser.map((res) => {
    TableGroup_ctr++;
    if(email_key !== res.email && TableGroup_ctr<=6 && res.account_status == "Approved"){
        return (
            <EachRowAdmin
            key= {TableGroup_ctr}
            photo = {res.profile_photo}
            name = {res.fname+" "+res.lname}
            email = {res.email}
            employment = {res.employment+" EMPLOYEE"}
            department = {res.department}
            />
        );
    }
});

    return (
        <div className="dashboard_container">

            <NavbarAdmin/> 
            
            <div className="main_content">
                <NavbarSizer/>

                <WeatherAndBanner/>
                <DashboardStatisticsFaculty/>

                <div className='table_dashboard_lisUsers'>
                    <div className='top'>
                        <div className='left'>
                            <span>Faculty</span>
                            <AvatarGroup max={4}>
                                {AvatarGroupList}
                            </AvatarGroup>
                        </div>
                    </div>
                    <div className='th'>
                        <div style={{textIndent:"20px"}}><span>Name</span></div>
                        <div><span>Email</span></div>
                        <div><span>Employment</span></div>
                        <div style={{justifyContent:"center"}}><span>Department</span></div>
                    </div>
                    {TableGroupList}
                </div>

                <div className='see_all_faculty'>
                <Link to="/Faculty" style={{ textDecoration: "none",display:"flex",width:"100%",height:"100%",color:"#ffff",alignItems:"center",justifyContent:"center"}}>
                    See All &#62;
                </Link>    
                </div> 

                
            </div>
            
            <RightNavbarAdmin/>

        </div>
    )
}
