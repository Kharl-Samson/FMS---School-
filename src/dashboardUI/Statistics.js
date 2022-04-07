import react from "react";
import training from '../images/icons/training.svg';
import seminar from '../images/icons/seminar.svg';
import certificate from '../images/icons/certificate_statisctics.svg';

export default function DashboardStatistics(){
    return(
        <div className='dashboard_statistics'>
        <p className='header'>Dashboard</p>
        <div className='statistics_container'>

            <div className='box'>
                <div className='left'><img src={training}/></div>
                <div className='right'>
                      <p>Trainings Attended</p>
                      <p>100</p>
                </div>
            </div>
           
            <div className='box'>
                <div className='left'><img src={seminar}/></div>
                <div className='right'>
                      <p>Seminars Attended</p>
                      <p>100</p>
                </div>
            </div>

            <div className='box'>
                <div className='left'><img src={certificate}/></div>
                <div className='right'>
                      <p>Total Certificates</p>
                      <p>100</p>
                </div>
            </div>
  
        </div>
    </div>
    )
}