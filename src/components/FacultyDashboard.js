import React from 'react';
import '../css/dashboard.css';
import RecentCertificate from '../dashboardUI/RecentCertificate';
import DashboardStatistics from '../dashboardUI/Statistics';
import WeatherAndBanner from '../dashboardUI/WeatherAndBanner';
import LeftNavbarFaculty from '../navbarsUI/LeftNavbarFaculty';
import NavbarSizer from '../navbarsUI/NavbarSizer';
import RightNavbar from '../navbarsUI/RightNavbar';
 
export default function FacultyDashboard(){

    document.title = "CICT | Faculty Management System";

    setTimeout(function(){
        document.getElementById("dashboard_link").classList.add('nav_active');
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

        </div>
    )
}