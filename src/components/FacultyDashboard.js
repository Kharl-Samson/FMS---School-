import React, { useState } from 'react';
import '../css/dashboard.css';
import NavbarFaculty from "./NavbarFaculty";
import RightNavbar from './RightNavbar';

export default function FacultyDashboard(){


    return (
        <div className="dashboard_container">

            <NavbarFaculty/>

            <div className="dashboard_content">
     
            </div>
            
            <RightNavbar/>

        </div>
    )
}