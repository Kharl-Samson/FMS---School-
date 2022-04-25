import react from "react";
import training from '../images/icons/training.svg';
import seminar from '../images/icons/seminar.svg';
import certificate from '../images/icons/certificate_statisctics.svg';
import Skeleton from '@mui/material/Skeleton';

export default function DashboardStatistics(){
   //Skeleton show
   setTimeout(function(){
    var elements = document.getElementsByClassName("skeleton_done");
    for (var i = 0, len = elements.length; i < len; i++) {
       elements[i].style.display="block"
   }
   var elements1 = document.getElementsByClassName("skeleton_show");
   for (var i = 0, len = elements1.length; i < len; i++) {
      elements1[i].style.display="none"
    }
   },1000);


    return(
        <div className='dashboard_statistics'>
        <p className='header'>Dashboard</p>
        <div className='statistics_container'>

            <div className='box'>
                <div className='left'>
                    <Skeleton animation="wave" variant="rectangular"  width={"50%"} height={"60%"}  className='skeleton_show'/>
                    <img src={training} className='skeleton_done'/>
                </div>
                <div className='right'>
                        <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                        <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <p className='skeleton_done p1'>Trainings Attended</p>
                      <p className='skeleton_done p2'>100</p>
                </div>
            </div>
           
            <div className='box'>
                <div className='left'>
                    <Skeleton animation="wave" variant="rectangular"  width={"50%"} height={"60%"}  className='skeleton_show'/>
                    <img src={seminar} className='skeleton_done'/>
                </div>
                <div className='right'>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <p className='skeleton_done p1'>Seminars Attended</p>
                      <p className='skeleton_done p2'>100</p>
                </div>
            </div>

            <div className='box'>
                <div className='left'>
                    <Skeleton animation="wave" variant="rectangular"  width={"50%"} height={"60%"}  className='skeleton_show'/>
                    <img src={certificate} className='skeleton_done'/>
                </div>
                <div className='right'>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <p className='skeleton_done p1'>Total Certificates</p>
                      <p className='skeleton_done p2'>100</p>
                </div>
            </div>
  
        </div>
    </div>
    )
}