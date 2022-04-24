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
 
export default function FacultyDashboard(){

    document.title = "CICT | Faculty Management System";



    setTimeout(function(){
        document.getElementById("dashboard_link").classList.add('nav_active');

        if(localStorage.getItem('pds_status') ==="Approved" && localStorage.getItem('pds_ctr' === "on") ){
            document.getElementById("profile_notify_container").style.display="none"
         }
        else if(localStorage.getItem('pds_status') ==="Pending" && localStorage.getItem('pds_ctr' === "off")){
            document.getElementById("profile_notify_container").style.display="flex";
        }
    },10);



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