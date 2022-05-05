import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import training from '../images/icons/training.svg';
import seminar from '../images/icons/seminar.svg';
import certificate from '../images/icons/certificate_statisctics.svg';
import Skeleton from '@mui/material/Skeleton';
import { Link } from "react-router-dom";

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

  //getting the email of user
  let email_key = localStorage.getItem("email");

  //Hook for getting all certificates
  const [pdsStep5, setpdsStep5] = useState([]);
  const loadpdsStep5 = async () => {
    const result = await axios.get("http://localhost/fms/pdsStep5.php");
    setpdsStep5(result.data.phpresult);
  };
  useEffect(() => {
    loadpdsStep5();
  }, []);

  const input_keyForCertificates = pdsStep5.map((res) => {
    if (res.email_id === email_key ) {
      return (
        <div>
          <input type="hidden" id="LD_category" value={res.LD_category} />
        </div>
      );
    }
  });
  const [LDcategory, setLDcategory] = useState([]);
  const loadLDcategory = async () => {
    var inputLDcategory = document.getElementById("LD_category").value;
    var sliceinputLDcategory = inputLDcategory.slice(0, -5);
    const inputLDcategory_Array = sliceinputLDcategory.split(" |:| ");
    setLDcategory(inputLDcategory_Array);
  };

  useEffect(() => {
    setTimeout(function () {
        loadLDcategory();
    }, 500);
  }, []);

//Certificate content
var trainingCTR = 0;
var seminarCTR = 0;
var totalCertificate = 0;
for(var x = 0 ; x<LDcategory.length ; x++){
    totalCertificate++
    if(LDcategory[x] == "TRAINING"){
        trainingCTR++;
    }
    else if(LDcategory[x] == "SEMINAR"){
        seminarCTR++;
    }
}



    return(
        <div className='dashboard_statistics'>
        <p className='header'>Dashboard</p>
        <div className='statistics_container'>

            <div className='box'>          
            <Link to="/Certificates" style={{ textDecoration: "none",display:"flex",width:"100%",height:"100%",color:"black"}}>
                <div className='left'>
                    <Skeleton animation="wave" variant="rectangular"  width={"50%"} height={"60%"}  className='skeleton_show'/>
                    <img src={training} className='skeleton_done'/>
                </div>
                <div className='right'>
                        <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                        <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                        <p className='skeleton_done p1'>Trainings Attended</p>
                        <p className='skeleton_done p2'>{trainingCTR}</p>
                </div>
            </Link>
            </div>
           
            <div className='box'>
            <Link to="/Certificates" style={{ textDecoration: "none",display:"flex",width:"100%",height:"100%",color:"black"}}>
                <div className='left'>
                    <Skeleton animation="wave" variant="rectangular"  width={"50%"} height={"60%"}  className='skeleton_show'/>
                    <img src={seminar} className='skeleton_done'/>
                </div>
                <div className='right'>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <p className='skeleton_done p1'>Seminars Attended</p>
                      <p className='skeleton_done p2'>{seminarCTR}</p>
                </div>
            </Link>    
            </div>

            <div className='box'>
            <Link to="/Certificates" style={{ textDecoration: "none",display:"flex",width:"100%",height:"100%",color:"black"}}>
                <div className='left'>
                    <Skeleton animation="wave" variant="rectangular"  width={"50%"} height={"60%"}  className='skeleton_show'/>
                    <img src={certificate} className='skeleton_done'/>
                </div>
                <div className='right'>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <Skeleton animation="wave" className='skeleton_show' sx={{marginRight:"20px"}}/>
                      <p className='skeleton_done p1'>Total Certificates</p>
                      <p className='skeleton_done p2'>{totalCertificate}</p>
                </div>
             </Link>   
            </div>
  
        </div>

        {input_keyForCertificates}
    </div>
    )
}