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

export default function AdminDashboard(){

    document.title = "CICT | Faculty Management System";

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
            <div className='th th_hover' key={TableGroup_ctr}>
                <div style={{display:"flex",alignItems:"center"}}>
                    <img 
                        src={"http://localhost/fms/upload_profile/"+res.profile_photo}
                        id="profile_photo"
                        onError={(e)=>{e.target.onerror = null; e.target.src="http://localhost/fms/upload_profile/default_avatar.png"}}
                    />
                <span style={{fontWeight:"normal",fontSize:"1rem",marginLeft:"10px",color:"#3D3D3D"}}>{res.fname+" "+res.lname}</span>
                </div>
                <div><span style={{fontWeight:"normal",fontSize:"1rem",textDecoration:"underline"}}><a href={"mailto:"+res.email} target="_blank" style={{color:"#3D3D3D"}}>{res.email}</a></span></div>
                <div style={{justifyContent:"center"}}><span style={{fontWeight:"normal",fontSize:"1rem",color:"#3D3D3D"}}>{res.department}</span></div>
                <div><span style={{fontWeight:"normal",fontSize:"1rem",color:"#3D3D3D"}}>{res.employment+" EMPLOYEE"}</span></div>
            </div>
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

                        <div className='right'>
                            <div className='btn'><span title="Close" onClick={startScrolling}>&#187;</span></div>
                        </div>
                    </div>
                    <div className='th'>
                        <div style={{textIndent:"20px"}}><span>Name</span></div>
                        <div><span>Email Address</span></div>
                        <div style={{justifyContent:"center"}}><span>Department</span></div>
                        <div><span>Employment Status</span></div>
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

function startScrolling(){
    document.querySelector(".see_all_faculty").scrollIntoView()
}
   
