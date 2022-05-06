import React from 'react';
import '../css/dashboardAdmin.css';
import DashboardStatistics from '../dashboardUI/Statistics';
import WeatherAndBanner from '../dashboardUI/WeatherAndBanner';
import NavbarAdmin from '../navbarsUI/LeftNavbarAdmin';
import NavbarSizer from '../navbarsUI/NavbarSizer';
import RightNavbar from '../navbarsUI/RightNavbar';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function AdminDashboard(){

    document.title = "CICT | Faculty Management System";

    setTimeout(function(){
        document.getElementById("dashboard_link").classList.add('nav_active');
        document.getElementById("link_dashboard").style.pointerEvents="none";
    },10);

    const mq = window.matchMedia("(max-width: 850px)");
    if (mq.matches) {
    }
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

            <NavbarAdmin/> 
            
            <div className="main_content">
                <NavbarSizer/>

                <WeatherAndBanner/>
                <DashboardStatistics/>

                <div className='table_dashboard_lisUsers'>
                    <div className='top'>
                        <div className='left'>
                            <span>Faculty</span>
                            <AvatarGroup max={4}>
                                <Avatar alt="Remy Sharp" src="http://localhost/fms/upload_certificate/personA.jpg" sx={{ width: "32px", height: "32px" ,fontSize:".9rem"}}/>
                                <Avatar alt="Travis Howard" src="http://localhost/fms/upload_certificate/personb.jpg" sx={{ width: "32px", height: "32px",fontSize:".9rem" }}/>
                                <Avatar alt="Cindy Baker" src="http://localhost/fms/upload_certificate/personC.jpg" sx={{ width: "32px", height: "32px",fontSize:".9rem" }}/>
                                <Avatar alt="Agnes Walker" src="http://localhost/fms/upload_certificate/e.png" sx={{ width: "32px", height: "32px" ,fontSize:".9rem"}} />
                                <Avatar alt="Trevor Henderson" src="http://localhost/fms/upload_certificate/f.png" sx={{ width: "32px", height: "32px",fontSize:".9rem" }}/>
                            </AvatarGroup>
                        </div>

                        <div className='right'>
                            <div className='close_btn'><span title="Close">&#187;</span></div>
                        </div>
                    </div>
                </div>

                
            </div>
            
            <RightNavbar/>

        </div>
    )
}