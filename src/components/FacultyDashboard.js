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

    return (
        <div className="dashboard_container">
            <LeftNavbarFaculty/>  

            <div className="dashboard_content">
                <NavbarSizer/>

                <WeatherAndBanner/>
                <DashboardStatistics/>
                <RecentCertificate/>
                
            </div>
            
            <RightNavbar/>

        </div>
    )
}