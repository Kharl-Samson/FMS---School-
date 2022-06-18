import React from 'react';
import '../css/dashboard.css';
import '../css/profileNotify.css';
import RecentCertificate from '../dashboardUI/RecentCertificate';
import DashboardStatistics from '../dashboardUI/Statistics';
import WeatherAndBanner from '../dashboardUI/WeatherAndBanner';
import LeftNavbarFaculty from '../navbarsUI/LeftNavbarFaculty';
import NavbarSizer from '../navbarsUI/NavbarSizer';
import RightNavbar from '../navbarsUI/RightNavbar';
import ProfileNotifyer from './NotifyerProfile';
import { useEffect, useState } from "react";
import axios from "axios";

export default function FacultyDashboard(){

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
  
//Active pages set css
setTimeout(function(){
    document.getElementById("dashboard_link").classList.add('nav_active');
    document.getElementById("link_dashboard").style.pointerEvents="none";
},10);


//If the width of screen is below 850px -> It will hide the profile notifyer
const mq = window.matchMedia("(max-width: 850px)");
if (mq.matches) {}
else{
    setTimeout(function(){
        if(localStorage.getItem('pds_status') ==="Approved"){
            document.getElementById("profile_notify_container").style.display="none"
        }
        else if(localStorage.getItem('pds_status') ==="Pending" && localStorage.getItem('pds_ctr') ==="null"){
            document.getElementById("profile_notify_container").style.display="flex";
        }
        else if(localStorage.getItem('pds_status') ==="Pending" && localStorage.getItem('pds_ctr') ==="off"){
            document.getElementById("profile_notify_container").style.display="none";
        }
    },1000);
}


return (
    <div className="dashboard_container">

            <LeftNavbarFaculty/>  
            
            <div className="main_content">
                <NavbarSizer/>

                <WeatherAndBanner/>
                <DashboardStatistics/>
                <RecentCertificate/>
                
            </div>
            
            <RightNavbar/>

            <ProfileNotifyer/>

    </div>
    )
}