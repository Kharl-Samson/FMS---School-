import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import faculty from '../images/icons/faculty.svg';
import pendingAccount from '../images/icons/pendingAccount.svg';
import certificate from '../images/icons/certificate_statisctics.svg';
import Skeleton from '@mui/material/Skeleton';
import { Link } from "react-router-dom";

export default function DashboardStatisticsFaculty(){
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

  var approved = 0;
  var pending = 0;
  for(var i=0 ; i<getAllUser.length ; i++){
      if(getAllUser[i].account_status == "Approved"){
        approved++;
      }
      else{
        pending++;
      }
  }
  



    return(
        <div className='dashboard_statistics'>
        <p className='header'>Dashboard</p>
        <div className='statistics_container'>

            <div className='box'>          
            <Link to="/Faculty" style={{ textDecoration: "none",display:"flex",width:"100%",height:"100%",color:"black"}}>
                <div className='left'>
                    <Skeleton animation="wave" variant="rectangular"  width={"50%"} height={"60%"}  className='skeleton_show'/>
                    <img src={faculty} className='skeleton_done'/>
                </div>
                <div className='right'>
                        <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                        <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                        <p className='skeleton_done p1'>Active Faculty</p>
                        <p className='skeleton_done p2'>{approved}</p>
                </div>
            </Link>
            </div>
           
            <div className='box'>
            <Link to="/Faculty" style={{ textDecoration: "none",display:"flex",width:"100%",height:"100%",color:"black"}}>
                <div className='left'>
                    <Skeleton animation="wave" variant="rectangular"  width={"50%"} height={"60%"}  className='skeleton_show'/>
                    <img src={pendingAccount} className='skeleton_done'/>
                </div>
                <div className='right'>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <p className='skeleton_done p1'>Pending Accounts</p>
                      <p className='skeleton_done p2'>{pending}</p>
                </div>
            </Link>    
            </div>

            <div className='box'>
            <Link to="/Faculty" style={{ textDecoration: "none",display:"flex",width:"100%",height:"100%",color:"black"}}>
                <div className='left'>
                    <Skeleton animation="wave" variant="rectangular"  width={"50%"} height={"60%"}  className='skeleton_show'/>
                    <img src={certificate} className='skeleton_done'/>
                </div>
                <div className='right'>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <p className='skeleton_done p1'>All Users</p>
                      <p className='skeleton_done p2'>{getAllUser.length}</p>
                </div>
             </Link>   
            </div>
  
        </div>

    </div>
    )
}