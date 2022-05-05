import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
import no_record_icon from "../images/no_record_icon.png";
import { Link } from "react-router-dom";

export default function RecentCertificate(){
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
  if (res.email_id === email_key) {
    return (
      <div>
        <input type="hidden" id="LD_img" value={res.LD_img} />
        <input type="hidden" id="LD_title" value={res.LD_title} />
        <input type="hidden" id="LD_dateTo" value={res.LD_dateTo} />
      </div>
    );
  }
});


  //Hook for getting Each Certificates
  const [LDimage, setLDimage] = useState([]);
  const loadLDimage = async () => {
    var inputLDimage = document.getElementById("LD_img").value;
    var sliceinputLDimage = inputLDimage.slice(0, -5);
    const inputLDimage_Array = sliceinputLDimage.split(" |:| ");
    setLDimage(inputLDimage_Array);
  };
  const [LDtitle, setLDtitle] = useState([]);
  const loadLDtitle = async () => {
    var inputLDtitle = document.getElementById("LD_title").value;
    var sliceinputLDtitle = inputLDtitle.slice(0, -5);
    const inputLDtitle_Array = sliceinputLDtitle.split(" |:| ");
    const newArray = [];
 
    for(var i=0 ; i<inputLDtitle_Array.length ; i++){
         var len = inputLDtitle_Array[i].length-18;
         if(inputLDtitle_Array[i].length >= 18){
             newArray.push(inputLDtitle_Array[i].slice(0, -len)+"...");
         }
         else{
             newArray.push(inputLDtitle_Array[i]);
         }
    }
    setLDtitle(newArray);
  };
 
  const [LDto, setLDto] = useState([]);
  const loadLDto = async () => {
    var inputLDto = document.getElementById("LD_dateTo").value;
    var replaceTo = inputLDto.replace(/-/g, "-");
    var sliceinputLDto = replaceTo.slice(0, -5);
    const inputLDto_Array = sliceinputLDto.split(" |:| ");
    const newArray1 = [];
    for(var i=0 ; i<inputLDto_Array .length ; i++){
         newArray1.push(moment(inputLDto_Array [i]).format('LL'))
    }
    setLDto(newArray1);
  };
 
 
  useEffect(() => {
     setTimeout(function () {
         loadLDimage();
         loadLDtitle();
         loadLDto();
     }, 500);
   }, []);

//Certificate content
let ld_ctr = -1;
const ldContent = LDtitle.map(() => {
ld_ctr++;
if(ld_ctr<10){
    return (
        <div className='for_boxShadow recentCert_Dash'>
        <Link to="/Certificates" style={{ textDecoration: "none",display:"flex",width:"100%",height:"100%"}}>
            <div className='certificate'
                style={{ backgroundImage: `url(http://localhost/fms/upload_certificate/`+LDimage[ld_ctr]+`)` }}
            >   
            </div>
        </Link>
        </div>
    );
}
});

setTimeout(function () {
    if (document.getElementsByClassName("recentCert_Dash").length === 0) {
      document.getElementsByClassName("no_certificateFound")[0].style.display ="flex";
      }
}, 1000);


    return(
        <div className='recentCertificate_container'>
            <p className='header'>Recent Certificates</p>
            <div className='certificate_container'>

            {ldContent}
 
            <div className="no_certificateFound">
                <img src={no_record_icon}/>
                <p>No Certificate Available!</p>
            </div>

        </div>

        <div className='see_all_certificate'>
        <Link to="/Certificates" style={{ textDecoration: "none",display:"flex",width:"100%",height:"100%",color:"#ffff",alignItems:"center",justifyContent:"center"}}>
            See All &#62;
        </Link>
        </div> 

        <div style={{clear: "both"}}></div>

        {input_keyForCertificates}
    </div>
    )
}