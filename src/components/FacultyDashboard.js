import React from 'react';
import '../css/dashboard.css';
import DashboardStatistics from '../dashboardUI/Statistics';
import WeatherAndBanner from '../dashboardUI/WeatherAndBanner';
import LeftNavbarFaculty from '../navbarsUI/LeftNavbarFaculty';
import NavbarSizer from '../navbarsUI/NavbarSizer';
import RightNavbar from '../navbarsUI/RightNavbar';
 
export default function FacultyDashboard(){

    return (
        <div className="dashboard_container">
            <LeftNavbarFaculty/>  

            <div className="dashboard_content">
                <NavbarSizer/>

                <WeatherAndBanner/>
                <DashboardStatistics/>

                <div className='recentCertificate_container'>
                    <p className='header'>Recent Certificates</p>
                    <div className='certificate_container'>
       
                        <div className='for_boxShadow'>
                            <div className='certificate' id="certificate1"
                                style={{ backgroundImage: `url("http://localhost/fms/upload_certificate/sample_cert.png")` }}
                            >   
                                <p>Faculty Webinar 2.0</p>
                                <p>November 15, 2020 <span> &#62; </span></p>
                            </div>
                        </div>
                        <div className='for_boxShadow'>
                            <div className='certificate' id="certificate2"
                                style={{ backgroundImage: `url("http://localhost/fms/upload_certificate/sample_cert.png")` }}
                            >   
                                <p>Faculty Webinar 2.0</p>
                                <p>November 15, 2020 <span> &#62; </span></p>
                            </div>
                        </div>
                        <div className='for_boxShadow'>
                            <div className='certificate' id="certificate3"
                                style={{ backgroundImage: `url("http://localhost/fms/upload_certificate/sample_cert.png")` }}
                            >   
                                <p>Faculty Webinar 2.0</p>
                                <p>November 15, 2020 <span> &#62; </span></p>
                            </div>
                        </div>
                        <div className='for_boxShadow'>
                            <div className='certificate' id="certificate4"
                                style={{ backgroundImage: `url("http://localhost/fms/upload_certificate/sample_cert.png")` }}
                            >   
                                <p>Faculty Webinar 2.0</p>
                                <p>November 15, 2020 <span> &#62; </span></p>
                            </div>
                        </div>
             
                    </div>

                    <div className='see_all_certificate'>See All &#62;</div> 
                    <div style={{clear: "both"}}></div>
                </div>
                

            </div>
            
            <RightNavbar/>

        </div>
    )
}