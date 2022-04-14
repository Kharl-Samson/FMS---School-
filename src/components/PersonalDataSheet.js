import * as React from 'react';
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

export default function PersonalDataSheet(){
    //for getting the initial name in avatar
    let initialName = localStorage.getItem('name').charAt(0);
    let firstName = localStorage.getItem('name').split(' ')[0]
    let profile_photo = "http://localhost/fms/upload_profile/"+localStorage.getItem('profile_photo');

    document.title = "CICT | Personal Data Sheet";
    setTimeout(function(){
        document.getElementById("pds_link").classList.add('nav_active');
    },10);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className="dashboard_container">
            <LeftNavbarFaculty/>  

            <div className="main_content">
                <NavbarSizer/>

                <Box sx={{ width: '90%',margin: "0 auto", typography: 'body1' }} >
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}  >
                    <TabList onChange={handleChange} 
                        aria-label="lab API tabs example"  
                        style={{color:"#FFAA28"}}  
                        TabIndicatorProps=
                        {{style: {
                            backgroundColor: "#FFAA28"
                        }}}>
                        <Tab label="View PDS Info" value="1"  />
                        <Tab label="VIew as PDF" value="2" />
                    </TabList>
                    </Box>
                    <TabPanel value="1" style={{padding : "0",paddingTop : "1.5rem"}}>
                         <div className='view_pds_container'>
                            <div className='top_cover' style={{backgroundImage: `url(${cover_banner})`}}>
                               <p>PERSONAL DATA SHEET</p>

                               <div className='avatar_container'> 
                               <Avatar 
                                    src={profile_photo} 
                                    sx={{ bgcolor: deepOrange[600] , width: "200px", height: "200px", fontSize: "1rem", margin: "0 auto", border : "2px solid #ffff",borderRadius:"5px"}}
                                    variant="square"
                                    >
                                    {initialName}
                                </Avatar>
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
                    </TabPanel>


                    <TabPanel value="2">VIew as PDF</TabPanel>
                </TabContext>
                </Box>
                
            </div>
            
            <RightNavbar/>

        </div>
    )
}