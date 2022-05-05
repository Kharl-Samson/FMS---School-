import React from "react";
import '../css/accountSetting.css';
import LeftNavbarFaculty from '../navbarsUI/LeftNavbarFaculty';
import NavbarSizer from '../navbarsUI/NavbarSizer';
import RightNavbar from '../navbarsUI/RightNavbar';
import Grid from '@mui/material/Grid';
import upload_proficeIcon from "../images/icons/upload_proficeIcon.svg";
import success_modal from "../images/icons/success_modal.svg";
import edit_profileIcon from "../images/icons/edit_profileIcon.svg";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export default function AccountSettings(){
    document.title = "CICT | Faculty Management System";

    var photoURL =  "http://localhost/fms/upload_profile/" + localStorage.getItem("profile_photo");

    setTimeout(function(){
        document.getElementById("profile_link").classList.add('nav_active');
        document.getElementById("link_accountSetting").style.pointerEvents="none";
    },10);

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


//SELECT FILE BTN 
function selectFile(){
    document.getElementById('profile_photo_inpFile').click();
}

function removeFile(){
    document.getElementById("profile_photo_btn").style.display = "none";
    document.getElementById("profile_photo_inpText").value = "";
    document.getElementById("profile_photo_inpFile").value = null;
    document.getElementById("profile_photo").src = photoURL;
}

/* eslint no-restricted-globals:0 */
function loadfile(event){
    document.getElementById("profile_photo_btn").style.display = "flex";
    document.getElementById("profile_photo_inpText").value = document.getElementById("profile_photo_inpFile").files[0].name;
    var output=document.getElementById("profile_photo");
    output.src=URL.createObjectURL(event.target.files[0]);
};

//Getting the value of all input when submitting the form
const uploadPhotoForm=(e)=>{
    e.preventDefault();
    const data = new FormData();
                
    //Sending the data request to call it on backend
    const sendData = {
        email_pds: localStorage.getItem("email"),
        img_handler: document.getElementById("profile_photo_inpText").value,
    }


    axios.post('http://localhost/fms/uploadProfile.php',sendData).then((result)=>{
        window.localStorage.setItem('profile_photo', document.getElementById("profile_photo_inpText").value);
        document.getElementById("profile_photo_btn").style.display = "none";
        document.getElementById("profile_photo_inpText").value = "";
        document.getElementById("profile_photo_inpFile").value = null;
    
        document.getElementsByClassName("profile_photo_side_modal")[0].style.display = "flex"; 
        setTimeout(function(){
            document.getElementsByClassName("profile_photo_side_modal")[0].style.right = "2%"; 
        },400);
        setTimeout(function(){
            document.getElementsByClassName("profile_photo_side_modal")[0].style.right = "-100%"; 
        },5000);
        setTimeout(function(){
            document.getElementsByClassName("profile_photo_side_modal")[0].style.display = "none"; 
        },6000);
    })//End of axios
    for (let i = 0; i < document.getElementsByName("imgLD[]").length; i++) {
        data.append("file[]", document.getElementsByName("imgLD[]")[i].files[0]);
    }
    let url = "http://localhost/fms/uploadProfile.php";
    axios.post(url, data, {}).then((res) => {});
}

function closingSuccessModalRight(){
    document.getElementsByClassName("profile_photo_side_modal")[0].style.right = "-100%"; 
    setTimeout(function(){
        document.getElementsByClassName("profile_photo_side_modal")[0].style.display = "none"; 
    },2000);
}

    return(
        <div className="dashboard_container">

        <LeftNavbarFaculty/>  
            
        <div className="main_content">
                <NavbarSizer/>


            <div className="accountSettings_container">
                <h1>My Account</h1>
                
                <div className="table_container"> 
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                >

                    <div className="left">
                        <img 
                            src={photoURL} 
                            id="profile_photo"
                            onError={(e)=>{e.target.onerror = null; e.target.src="http://localhost/fms/upload_profile/default_avatar.png"}}
    
                        />
                        <LightTooltip title="Upload Photo">
                        <div className="upload_profile" onClick={selectFile}>
                            <img src={upload_proficeIcon} id="uploadprofile_icon"/>
                        </div>
                        </LightTooltip>

                        <form onSubmit={uploadPhotoForm}>
                        <input type="text" id="profile_photo_inpText" style={{display:"none"}}/>
                        <input type="file" id="profile_photo_inpFile" name="imgLD[]" onChange={() => { loadfile(event);}} accept="image/png, image/jpeg" style={{display:"none"}}/>

                        <div id="profile_photo_btn">
                            <button type="button" onClick={removeFile}>Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                        </form>
                    </div>
                    <div className="right">
                        <p className="full_name">Kharl Samson</p>
                        <p className="gmail">khrlsmsn1110@gmail.com</p>

                        <div className="info_details">
                            <div className="top">
                                <span>Profile details</span>
                                <LightTooltip title="Edit Profile">
                                    <img src={edit_profileIcon}/>
                                </LightTooltip>
                            </div>
                            <div className="content">
                                <div className="left">
                                    <div>
                                        <p className="label">Full Name</p>
                                        <p>Khar</p>
                                    </div>
                                    
                                    <p className="label">Department</p>
                                    <p className="label">Address</p>
                                    <p className="label">Employment Status</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>    
                </div>

            </div>
                
        </div>
            
        <RightNavbar/>

        {/*Success Editing Profile Photo */}
        <div className="success_modal_right_side profile_photo_side_modal">
            <div className="left"><img src={success_modal}/></div>
            <div className="center">
                <p>Success!</p>
                <p>This action was process succesfully.</p>
            </div>
            <div className="right">
                <p title="Close" onClick={closingSuccessModalRight}>&#215;</p>
            </div>
        </div>

        </div>
    )
}

