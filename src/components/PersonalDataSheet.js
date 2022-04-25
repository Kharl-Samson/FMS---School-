import * as React from 'react';
import { useEffect }  from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/pds.css';
import LeftNavbarFaculty from '../navbarsUI/LeftNavbarFaculty';
import NavbarSizer from '../navbarsUI/NavbarSizer';
import RightNavbar from '../navbarsUI/RightNavbar';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

import cover_banner from "../images/pds_cover.png";
import edit_icon from "../images/icons/edit.svg";
import downloadyellow_icon from "../images/icons/download_yellow.svg";

import basic_info from '../images/icons/basic_info.svg';
import education_info from '../images/icons/education_info.svg';
import service_info from '../images/icons/service_info.svg'
import work_info from '../images/icons/work_info.svg';
import LandD_info from '../images/icons/LandD_info.svg'
import personal_info from '../images/icons/personal_info.svg';
import id_info from '../images/icons/id_info.svg'
import contactYellow from '../images/icons/contactYellow.svg'
import addressYellow from '../images/icons/addressYellow.svg'

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import axios from "axios";

export default function PersonalDataSheet(){
    //Tooltip
    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }}/>
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: theme.palette.common.white,
          color: 'rgba(0, 0, 0, 0.87)',
          boxShadow: theme.shadows[1],
          fontSize: ".8rem",
        },
    }));


    //for getting the initial name in avatar
    let initialName = localStorage.getItem('name').charAt(0);
    let profile_photo = "http://localhost/fms/upload_profile/"+localStorage.getItem('profile_photo');

    //If wala pa pds mag direct sa create pds
    const [auth,setAuth] = useState('');
    let navigate = useNavigate();
            
    useEffect(()=>{
        var auth = localStorage.getItem('pds_status');
        if(auth === "Pending"){
            navigate(`/CreatePersonalInformation`)
        }
        setAuth(auth);
    },
    [])

    document.title = "CICT | Personal Information";
    setTimeout(function(){
        document.getElementById("pds_link").classList.add('nav_active');
    },10);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    //Hook for view the list of task of user
    const [pdsStep1, setpdsStep1] = useState([]);  

     const loadpdsStep1 = async () =>{
      const result = await axios.get("http://localhost/fms/pdsStep1.php");
      setpdsStep1(result.data.phpresult);
    };

    useEffect(() => {
        loadpdsStep1();
    }, []);

    //getting the email of user
    let email_key = localStorage.getItem('email');
    //Task box container using map
    const pds_step1= pdsStep1.map((res)=> {
        if(res.email_id === email_key){
        return (
            <div className="row1" >
                <div className='box row1_content'>
                    <div className='top'>
                        <img src={personal_info}/>
                        Personal Information
                    </div>

                    <div className='content'>
                        <div className='left'>
                            <div className='span_cont'>
                                <span>FIRST NAME</span>
                                <span>{res.fname}</span>
                            </div>
                            <div className='span_cont'>
                                <span>MIDDLE NAME</span>
                                <span>{res.mname}</span>
                            </div>
                            <div className='span_cont'>
                                <span>LAST NAME</span>
                                <span>{res.lname}</span>
                            </div>
                            <div className='span_cont'>
                                <span>NAME EXTENSION</span>
                                <span>{res.nameExtension}</span>
                            </div>
                            <div className='span_cont'>
                                <span>Birthday</span>
                                <span>{res.bday}</span>
                            </div>
                            <div className='span_cont'>
                                <span>AGE</span>
                                <span>{res.age+" years old"}</span>
                            </div>
                        </div>     
                        
                        <div className='left'>
                            <div className='span_cont'>
                                <span>PLACE OF BIRTH</span>
                                <span>{res.cob+", "+res.pob}</span>
                            </div>
                            <div className='span_cont'>
                                <span>Gender</span>
                                <span>{res.gender}</span>
                            </div>
                            <div className='span_cont'>
                                <span>Civil Status</span>
                                <span>{res.civil}</span>
                            </div>
                            <div className='span_cont'>
                                <span>Height</span>
                                <span>{res.height+"CM"}</span>
                            </div>
                            <div className='span_cont'>
                                <span>Weight</span>
                                <span>{res.weight+"KG"}</span>
                            </div>
                            <div className='span_cont'>
                                <span>Citizenship</span>
                                <span>{res.citizenship}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='r1_content row1_content'>

                    <div className='box'  style={{width:"100%",margin:"0"}}>
                        <div className='top'>
                            <img src={id_info}/>
                            ID Information
                        </div>    

                        <div className='content'>
                            <div className='left'>
                                <div className='span_cont'>
                                    <span>GSIS ID No.</span>
                                    <span>{res.gsis}</span>
                                </div>
                                <div className='span_cont'>
                                    <span>PAG-IBIG ID No.</span>
                                    <span>{res.pagibig}</span>
                                </div>
                                <div className='span_cont'>
                                    <span>PHILHEALTH No.</span>
                                    <span>{res.philhealth}</span>
                                </div>
                            </div>
                            <div className='left'>
                                <div className='span_cont'>
                                    <span>SSS No.</span>
                                    <span>{res.sss}</span>
                                </div>
                                <div className='span_cont'>
                                    <span>TIN No.</span>
                                    <span>{res.tin}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='box'  style={{width:"100%",margin:"0",marginTop:"20px"}}>
                        <div className='top'>
                            <img src={contactYellow}/>
                            Contact Information
                        </div>    

                        <div className='content'>
                            <div className='left'>
                                <div className='span_cont'>
                                    <span>Mobile NO.</span>
                                    <span>{res.mobile}</span>
                                </div>
                                <div className='span_cont'>
                                    <span>TELEPHONe NO.</span>
                                    <span>{res.tele}</span>
                                </div>
                            </div>
                            <div className='left'>
                                <div className='span_cont'>
                                    <span>Alternate Email Address</span>
                                    <span style={{textTransform:"none",fontSize:".9rem"}}>{res.alEmail}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
 
       )
        }
    })

    const pds_step1_v2= pdsStep1.map((res)=> {
        if(res.email_id === email_key){
        return (
            <div className="row1">
            <div className='box row1_content'>
                <div className='top'>
                    <img src={addressYellow}/>
                    Resident Address
                </div>

                <div className='content'>
                    <div className='left'>
                        <div className='span_cont'>
                            <span>HOUSE/ BLOCK / LOT NO.</span>
                            <span>{res.r_house}</span>
                        </div>
                        <div className='span_cont'>
                            <span>SUBDIVISION / VILLAGE</span>
                            <span>{res.r_subdi}</span>
                        </div>
                        <div className='span_cont'>
                            <span>BARANGAY</span>
                            <span>{res.r_barangay}</span>
                        </div>
                        <div className='span_cont'>
                            <span>PROVINCE</span>
                            <span>{res.r_province}</span>
                        </div>
                    </div>
                    <div className='left'>
                        <div className='span_cont'>
                            <span>STREET</span>
                            <span>{res.r_street}</span>
                        </div>
                        <div className='span_cont'>
                            <span>CITY/MUNICIPALITY </span>
                            <span>{res.r_city}</span>
                        </div>
                        <div className='span_cont'>
                            <span>ZIP CODE</span>
                            <span>{res.r_zip}</span>
                        </div>
                    </div>
                </div>      
            </div>

            <div className='box row1_content'>
                <div className='top'>
                    <img src={addressYellow}/>
                    Permanent Address
                </div>

                <div className='content'>
                    <div className='left'>
                        <div className='span_cont'>
                            <span>HOUSE/ BLOCK / LOT NO.</span>
                            <span>{res.p_house}</span>
                        </div>
                        <div className='span_cont'>
                            <span>SUBDIVISION / VILLAGE</span>
                            <span>{res.p_subdi}</span>
                        </div>
                        <div className='span_cont'>
                            <span>BARANGAY</span>
                            <span>{res.p_barangay}</span>
                        </div>
                        <div className='span_cont'>
                            <span>PROVINCE</span>
                            <span>{res.p_province}</span>
                        </div>
                    </div>
                    <div className='left'>
                        <div className='span_cont'>
                            <span>STREET</span>
                            <span>{res.p_street}</span>
                        </div>
                        <div className='span_cont'>
                            <span>CITY/MUNICIPALITY </span>
                            <span>{res.p_city}</span>
                        </div>
                        <div className='span_cont'>
                            <span>ZIP CODE</span>
                            <span>{res.p_zip}</span>
                        </div>
                    </div>
                </div>     
            </div>
        </div>
       )
        }
    })


    //Hook for view the list of task of user
    const [pdsStep2, setpdsStep2] = useState([]);  

    const loadpdsStep2 = async () =>{
        const result = await axios.get("http://localhost/fms/pdsStep2.php");
        setpdsStep2(result.data.phpresult);
    };
   
    useEffect(() => {
        loadpdsStep2();
    }, []);


    const pds_step2= pdsStep2.map((res)=> {
        if(res.email_id === email_key){
            return(
               <div>
                    <input type="hidden" id="elemName" value={res.elem_namePDS}/>
                    <input type="hidden" id="elemFrom" value={res.elem_dateFromPDS}/>
                    <input type="hidden" id="elemTo" value={res.elem_dateToPDS}/>
                    <input type="hidden" id="elemUnit" value={res.elem_unitPDS}/>
                    <input type="hidden" id="elemYear" value={res.elem_yearGradPDS}/>
                    <input type="hidden" id="elemAward" value={res.elem_awardsPDS}/>
               </div>
            )     
            }
    })

//Hook for getting Elementary 
  const [elemName, setElemName] = useState([]);  
  const loadElemName = async () =>{
    var inputELEMname = document.getElementById("elemName").value;
    var sliceinputELEMname = inputELEMname.slice(0, -5);
    const inputELEMname_Array = sliceinputELEMname.split(" |:| ");
    setElemName(inputELEMname_Array);
  };
  const [elemfrom, setElemfrom] = useState([]);  
  const loadElemfrom = async () =>{
    var inputELEMfrom = document.getElementById("elemFrom").value;
    var replaceFrom = inputELEMfrom.replace(/-/g, "/");
    var sliceinputELEMfrom = replaceFrom.slice(0, -5);
    const inputELEMfrom_Array = sliceinputELEMfrom.split(" |:| ");
    setElemfrom(inputELEMfrom_Array);;
  };
  const [elemTO, setElemTO] = useState([]);  
  const loadElemTO = async () =>{
    var inputELEMTO = document.getElementById("elemTo").value;
    var replaceTO = inputELEMTO.replace(/-/g, "/");
    var sliceinputELEMTO = replaceTO.slice(0, -5);
    const inputELEMTO_Array = sliceinputELEMTO.split(" |:| ");
    setElemTO(inputELEMTO_Array);;
  };
  const [elemUNITS, setElemUNITS] = useState([]);  
  const loadElemUNITS = async () =>{
    var inputELEMUNITS = document.getElementById("elemUnit").value;
    var sliceinputELEMUNITS = inputELEMUNITS.slice(0, -5);
    const inputELEMUNITS_Array = sliceinputELEMUNITS.split(" |:| ");
    setElemUNITS(inputELEMUNITS_Array);;
  };
  const [elemYEAR, setElemYEAR] = useState([]);  
  const loadElemYEAR = async () =>{
    var inputELEMYEAR = document.getElementById("elemYear").value;
    var sliceinputELEMYEAR = inputELEMYEAR.slice(0, -5);
    const inputELEMYEAR_Array = sliceinputELEMYEAR.split(" |:| ");
    setElemYEAR(inputELEMYEAR_Array);;
  };
  const [elemAWARD, setElemAWARD] = useState([]);  
  const loadElemAWARD = async () =>{
    var inputELEMAWARD = document.getElementById("elemAward").value;
    var sliceinputELEMAWARD = inputELEMAWARD.slice(0, -5);
    const inputELEMAWARD_Array = sliceinputELEMAWARD.split(" |:| ");
    setElemAWARD(inputELEMAWARD_Array);;
  };

  useEffect(() => {
        loadElemName();
        loadElemfrom();
        loadElemTO();
        loadElemUNITS();
        loadElemYEAR();
        loadElemAWARD();
  }, []);

//Elementary Content
let elem_ctr = -1;
const ElementaryContent= elemName.map(()=> {
elem_ctr++;
    return (   
        <div key={elemName+elem_ctr}>
            <p style={{fontWeight:"bold",color:"#8A8A8A",fontSize:"1.2rem", marginLeft:"10%",marginTop:"10px"}}>Elementary</p>
            <div className='content'>
                <div className='left'>
                    <div className='span_cont' style={{marginTop:"-20px"}}>
                        <span>Name of School</span>
                        <span>{elemName[elem_ctr]}</span>
                    </div>
                    <div className='span_cont'>
                        <span>Basic education/ Degree/ Course</span>
                        <span>Elementary</span>
                    </div>
                    <div className='span_cont'>
                        <span>Highest Level/ Units Earned</span>
                        <span>{elemUNITS[elem_ctr]}</span>
                    </div>
                </div>
                <div className='left'>
                    <div className='span_cont' style={{marginTop:"-20px"}}>
                        <span>Period of Attendance (From)</span>
                        <span>{elemfrom[elem_ctr]}</span>
                    </div>
                    <div className='span_cont'>
                    <span>Period of Attendance (To)</span>
                        <span>{elemTO[elem_ctr]}</span>
                    </div>
                    <div className='span_cont'>
                        <span>Year Graduate</span>
                        <span>{elemYEAR[elem_ctr]}</span>
                    </div>
                </div>
            </div>                               
        </div>
    )
})

    return (
        <div className="dashboard_container">
            <LeftNavbarFaculty/>  

            <div className="main_content">
                <NavbarSizer/>

                <Box sx={{ width: '92%',margin: "0 auto", typography: 'body1' }} >
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}  >
                    <TabList onChange={handleChange} 
                        aria-label="lab API tabs example"  
                        style={{color:"#FFAA28"}}  
                        TabIndicatorProps=
                        {{style: {
                            backgroundColor: "#FFAA28"
                        }}}>
                        <Tab label="WEB VIEW" value="1"  />
                        <Tab label="PDF VIEW" value="2" />
                    </TabList>
                    </Box>
                    <TabPanel value="1" style={{padding : "0",paddingTop : "1.5rem"}}>
                         <div className='view_pds_container'>
                            <div className='top_cover' style={{backgroundImage: `url(${cover_banner})`}}>
                               <p>PERSONAL INFORMATION</p>

                               <div className='avatar_container'> 

                               <div className='left'>
                                    <Avatar 
                                        src={profile_photo} 
                                        sx={{ bgcolor: deepOrange[600] , width: "200px", height: "200px", fontSize: "5rem", marginLeft: "20px", border  : "2px solid #ffff",borderRadius:"5px"}}
                                        variant="square"
                                        >
                                        {initialName}
                                    </Avatar>

                                    <div className="pds_contact">
                                        <p className='view_pdsName'>{localStorage.getItem('name')}</p>
                                        <p className='view_pdsEmail'>{localStorage.getItem('email')}</p>
                                        <p className='view_pdsEmpNo'>Employee No. : 20120141</p>
                                    </div>
                               </div>

                               <div className='right'>
                                    <div className='cover_button'>
                                        <button>
                                            <img src={downloadyellow_icon}/>
                                            Download as PDF
                                        </button>
                                        <button>
                                            <img src={edit_icon}/>
                                            Edit your PDS
                                        </button>
                                    </div>
                               </div>




                               </div>
                            </div>

                        
                            <div className="web_pds_container">
                                <div className='side_tab_container'> 
                                    <LightTooltip title='Basic Information'>
                                    <div className='box active'><img src={basic_info}/></div>
                                    </LightTooltip>

                                    <LightTooltip title='Educational Background'>
                                    <div className='box'><img src={education_info}/></div>
                                    </LightTooltip>

                                    <LightTooltip title='Civil Service Eligibility'>
                                    <div className='box'><img src={service_info}/></div>
                                    </LightTooltip>

                                    <LightTooltip title='Work Experience'>
                                    <div className='box'><img src={work_info}/></div>
                                    </LightTooltip>

                                    <LightTooltip title='Learning and Development (L&D)'>
                                    <div className='box'><img src={LandD_info}/></div>
                                    </LightTooltip>
                                </div>
                    
                                <div className='right_content'>

                                    <div className='pds_1' style={{display:"none"}}>
                                        {pds_step1}
                                        {pds_step1_v2}
                                    </div>


                                    <div className='pds_2'>
                                        <div className="row1" >
                                            <div className='box row1_content'>
                                                <div className='top'>
                                                    <img src={personal_info}/>
                                                    Educational Background
                                                </div>
                                                {ElementaryContent}
                                        
                                            </div> 
                                            <div className='box row1_content'>
                                                <div className='top'>
                                                    <img src={personal_info}/>
                                                    Educational Background
                                                </div>
                                                {ElementaryContent}
                                                {ElementaryContent}
                                            </div> 
                                        </div>
                                    </div>

                                    {pds_step2}
                     
                                </div>

                            </div>

                         </div>
                    </TabPanel>


                    <TabPanel value="2">VIew as PDF</TabPanel>
                </TabContext>
                </Box>
                
            </div>
            
            <RightNavbar/>

        </div>
    )
}