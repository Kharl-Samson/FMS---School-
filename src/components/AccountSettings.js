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
import Invalid_icon from "../images/icons/invalid.svg";
import Valid_icon from "../images/icons/valid.svg";
import validator from 'validator';
import lock_icon from "../images/icons/lock_icon.svg";
import Password_icon from "../images/icons/password.svg";
import Open_eye_icon from "../images/icons/open_eye.svg";
import Close_eye_icon from "../images/icons/close_eye.svg"; 
import ProfileNotifyer from './NotifyerProfile';

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
const editAccountNameForm=(e)=>{
    e.preventDefault();
        
    //Sending the data request to call it on backend
    const sendData = {
        email_key : localStorage.getItem("email"),
        edit_fname: document.getElementById("edit_fname").value,
        edit_lname: document.getElementById("edit_lname").value,
        edit_department: document.getElementById("edit_department").value,
        edit_employment: document.getElementById("edit_employment").value,
    }
    
        axios.post('http://localhost/fms/updateAccountName.php',sendData).then((result)=>{
            if(result.data.status == "Invalid"){//If the response is invalid
                alert("There was an error in your SQL Connection!")
            }
            else if(result.data.status == "Success"){ //If the response is valid
                //pag tama lalabas modal
                window.localStorage.setItem('name', document.getElementById("edit_fname").value+" "+document.getElementById("edit_lname").value);
                window.localStorage.setItem('fname', document.getElementById("edit_fname").value);
                window.localStorage.setItem('lname', document.getElementById("edit_lname").value);
                window.localStorage.setItem('department', document.getElementById("edit_department").value);
                window.localStorage.setItem('employment', document.getElementById("edit_employment").value);

                document.getElementsByClassName("form_handler_container")[0].style.display = "none";
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;

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
            }
        })//End of axios
}

const editAccountForm=(e)=>{
    e.preventDefault();
        
    //Sending the data request to call it on backend
    const sendData = {
        email_key : localStorage.getItem("email"),
        edit_email: document.getElementById("edit_email").value,
    }
    
    if (validator.isEmail(document.getElementById("edit_email").value)) {
        axios.post('http://localhost/fms/updateAccount.php',sendData).then((result)=>{
            if(result.data.status == "Invalid"){//If the response is invalid
                alert("There was an error in your SQL Connection!")
            }
            else if(result.data.status == "Email taken"){ //If the response is Email taken
                document.getElementsByClassName("form_handler_container")[1].style.display = "flex";
                document.getElementsByClassName("text_verifyer")[1].innerHTML = "E-mail has already been taken.";
                document.getElementsByClassName("form_handler_container")[1].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[1].src = Invalid_icon;
                document.getElementsByClassName("edit_email")[1].style.border = "1px solid red";   
            }
            else if(result.data.status == "Success"){ //If the response is valid
                //pag tama lalabas modal
                window.localStorage.setItem('email', document.getElementById("edit_email").value);

                document.getElementsByClassName("form_handler_container")[1].style.display = "none";
                document.getElementsByClassName("text_verifyer")[1].innerHTML = "";
                document.getElementsByClassName("form_handler_container")[1].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[1].src = Invalid_icon;

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
                //location.reload();
            }
        })//End of axios
    }
}

function closingSuccessModalRight(){
    document.getElementsByClassName("profile_photo_side_modal")[0].style.right = "-100%"; 
    setTimeout(function(){
        document.getElementsByClassName("profile_photo_side_modal")[0].style.display = "none"; 
    },2000);
}

//Toggle Password
function toggle_password1(){
    document.getElementsByClassName("password_toggle_icon open_eye")[0].style.visibility="visible";
}
//Toggle Password
function toggle_password2(){
    document.getElementsByClassName("password_toggle_icon open_eye")[1].style.visibility="visible";
}
//Toggle Password
function toggle_password3(){
    document.getElementsByClassName("password_toggle_icon open_eye")[2].style.visibility="visible";
}
//Para maview yung password sa input form
function show_pass1(){
    document.getElementById('current_password').type = 'text';
    document.getElementsByClassName("open_eye")[0].style.display = "none"
    document.getElementsByClassName("close_eye")[0].style.display = "flex"
    document.getElementsByClassName("close_eye")[0].style.visibility = "visible"
}
//Para mahide yung password sa input form
function hide_pass1(){
    document.getElementById('current_password').type = 'password';
    document.getElementsByClassName("open_eye")[0].style.display = "flex"
    document.getElementsByClassName("open_eye")[0].style.visibility = "visible"
    document.getElementsByClassName("close_eye")[0].style.display = "none"
}
function show_pass2(){
    document.getElementById('new_password').type = 'text';
    document.getElementsByClassName("open_eye")[1].style.display = "none"
    document.getElementsByClassName("close_eye")[1].style.display = "flex"
    document.getElementsByClassName("close_eye")[1].style.visibility = "visible"
}
//Para mahide yung password sa input form
function hide_pass2(){
    document.getElementById('new_password').type = 'password';
    document.getElementsByClassName("open_eye")[1].style.display = "flex"
    document.getElementsByClassName("open_eye")[1].style.visibility = "visible"
    document.getElementsByClassName("close_eye")[1].style.display = "none"
}
function show_pass3(){
    document.getElementById('retype_password').type = 'text';
    document.getElementsByClassName("open_eye")[2].style.display = "none"
    document.getElementsByClassName("close_eye")[2].style.display = "flex"
    document.getElementsByClassName("close_eye")[2].style.visibility = "visible"
}
//Para mahide yung password sa input form
function hide_pass3(){
    document.getElementById('retype_password').type = 'password';
    document.getElementsByClassName("open_eye")[2].style.display = "flex"
    document.getElementsByClassName("open_eye")[2].style.visibility = "visible"
    document.getElementsByClassName("close_eye")[2].style.display = "none"
}
//Pang validate ng password
function password_validation(){
    if (validator.isStrongPassword(document.getElementById('new_password').value, { //Pag valid password
    minLength: 8, minLowercase: 1,
    minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {          
        document.getElementsByClassName("form_handler_container")[2].style.display = "flex";
        document.getElementsByClassName("form_handler_container")[2].style.backgroundColor = "rgb(76, 180, 76)"
        document.getElementsByClassName("img_verifyer")[2].src = Valid_icon;
        document.getElementsByClassName("text_verifyer")[2].innerHTML = "Your password is valid.";
    } else { //Pag maiksi or madali yung password
        document.getElementsByClassName("form_handler_container")[2].style.display = "flex";
        document.getElementsByClassName("text_verifyer")[2].innerHTML = "Your password is not strong.";
        document.getElementsByClassName("form_handler_container")[2].style.backgroundColor = "#f7526d"
        document.getElementsByClassName("img_verifyer")[2].src = Invalid_icon;     
    }     
    if(document.getElementById("new_password").value === "" ){ //Pag wala value yung password sa input form
        document.getElementsByClassName("form_handler_container")[2].style.display = "none";
        document.getElementsByClassName("text_verifyer")[2].innerHTML = "";
        document.getElementsByClassName("form_handler_container")[2].style.backgroundColor = "#f7526d"
        document.getElementsByClassName("img_verifyer")[2].src = Invalid_icon;
    }
}
function password_validation1(){ 
    if(document.getElementById('new_password').value != document.getElementById('retype_password').value){
        document.getElementsByClassName("form_handler_container")[2].style.display = "flex";
        document.getElementsByClassName("text_verifyer")[2].innerHTML = "Your password doesn't match.";
        document.getElementsByClassName("form_handler_container")[2].style.backgroundColor = "#f7526d"
        document.getElementsByClassName("img_verifyer")[2].src = Invalid_icon;     
    }
    else{
        document.getElementsByClassName("form_handler_container")[2].style.display = "none";
        document.getElementsByClassName("text_verifyer")[2].innerHTML = "";
        document.getElementsByClassName("form_handler_container")[2].style.backgroundColor = "#f7526d"
        document.getElementsByClassName("img_verifyer")[2].src = Invalid_icon;
    }
}
const changePasswordForm=(e)=>{
    e.preventDefault();

    //Sending the data request to call it on backend
    const sendData = {
        email_key : localStorage.getItem("email"),
        current_password: document.getElementById('current_password').value,
        new_password: document.getElementById('new_password').value,
    }
    if(document.getElementById('new_password').value != document.getElementById('retype_password').value){
        document.getElementsByClassName("form_handler_container")[2].style.display = "flex";
        document.getElementsByClassName("text_verifyer")[2].innerHTML = "Your password doesn't match.";
        document.getElementsByClassName("form_handler_container")[2].style.backgroundColor = "#f7526d"
        document.getElementsByClassName("img_verifyer")[2].src = Invalid_icon;     
    }
    else if (validator.isStrongPassword(document.getElementById('new_password').value, { // If password is valid
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {  

        //Sending the data to my backend
        axios.post('http://localhost/fms/updatePassword.php',sendData)
        .then((result)=>{
            //console.log(result.data.status)
            if(result.data.status == "Invalid"){//If the response is invalid
                alert("There was an error in your SQL Connection!")
            }
            else if(result.data.status == "ErrorCurrent"){
                document.getElementsByClassName("form_handler_container")[2].style.display = "flex";
                document.getElementsByClassName("text_verifyer")[2].innerHTML = "Your current password is invalid.";
                document.getElementsByClassName("form_handler_container")[2].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[2].src = Invalid_icon;     
            }
            else if(result.data.status == "Valid"){ //If the response is valid
                //pag tama lalabas modal
                document.getElementsByClassName("form_handler_container")[2].style.display = "none";
                document.getElementsByClassName("text_verifyer")[2].innerHTML = "";
                document.getElementsByClassName("form_handler_container")[2].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[2].src = Invalid_icon;

                document.getElementById('current_password').value = "";
                document.getElementById('retype_password').value = "";
                document.getElementById('new_password').value = "";
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
            }

            })//End of axios
        }
        else { //If the password is not strong
            document.getElementsByClassName("form_handler_container")[2].style.display = "flex";
            document.getElementsByClassName("text_verifyer")[2].innerHTML = "Your password is not strong.";
            document.getElementsByClassName("form_handler_container")[2].style.backgroundColor = "#f7526d"
            document.getElementsByClassName("img_verifyer")[2].src = Invalid_icon;     
        }
}
const lockedAccountForm=(e)=>{
    e.preventDefault();
        
    //Sending the data request to call it on backend
    if (document.getElementById("locked_checkbox").checked) {
        const sendData = {
            email_key : localStorage.getItem("email"),
            lock_status : document.getElementById("locked_checkbox").value,
        }
        axios.post('http://localhost/fms/updateProfileSecurity.php',sendData).then((result)=>{
            if(result.data.status == "Invalid"){//If the response is invalid
                alert("There was an error in your SQL Connection!")
            }
            else if(result.data.status == "Valid"){ //If the response is valid
                //pag tama lalabas modal
                window.localStorage.setItem('profile_locked', "Locked");
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
            }
        })//End of axios
    } else {
        const sendData = {
            email_key : localStorage.getItem("email"),
            lock_status : "",
        }
        axios.post('http://localhost/fms/updateProfileSecurity.php',sendData).then((result)=>{
            if(result.data.status == "Invalid"){//If the response is invalid
                alert("There was an error in your SQL Connection!")
            }
            else if(result.data.status == "Valid"){ //If the response is valid
                //pag tama lalabas modal
                window.localStorage.setItem('profile_locked', "");
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
            }
        })//End of axios
    }
}

setTimeout(function(){
    if(localStorage.getItem("profile_locked") == ""){
        document.getElementById("locked_checkbox").checked = false;
    }
    else{
        document.getElementById("locked_checkbox").checked = true;
    }
    
},500);
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

                        <div className="info_details info_details1">
                        <form onSubmit={lockedAccountForm}>
                            <div className="top">
                                <span>Privacy Setting</span>
                                <img src={lock_icon}/>
                            </div>
                            <div className="content">
                                 <div className="lock_profile">
                                    <input type="checkbox" value="Locked" id="locked_checkbox"/>
                                    <span>Lock my profile</span>
                                 </div>
                                 <p id="lock_profile_note">This means the admin can't download your personal information</p>
                                <button id="save_btn" type="submit">Save Changes</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="right">
                        <div className="info_details">
                        <form onSubmit={editAccountNameForm}>
                            <div className="top">
                                <span>Personal Details</span>
                                <img src={edit_profileIcon}/>
                            </div>
                            <div className="content">
                                <div className="left">
                                    <p className="label">First Name : </p>
                                    <input type="text" className="name_inPut" defaultValue={localStorage.getItem("fname")} placeholder="Enter your name here..." id="edit_fname" required/>
                                </div>   
                                <div className="left">
                                    <p className="label">Last Name : </p>
                                    <input type="text" defaultValue={localStorage.getItem("lname")} placeholder="Enter your name here..." id="edit_lname" className="name_inPut" required/>
                                </div>    
                                <div className="left">
                                    <p className="label">Department : </p>
                                    <select defaultValue={localStorage.getItem("department")} id="edit_department">
                                        <option value="" hidden>-Select an option-</option>
                                        <option value="BSIT" >BSIT</option>
                                        <option value="BLIS" >BLIS</option>
                                    </select>
                                </div>    
                                <div className="left">
                                    <p className="label">Employment : </p>
                                    <select defaultValue={localStorage.getItem("employment")} id="edit_employment">
                                        <option value="" hidden>-Select an option-</option>
                                        <option value="REGULAR" >REGULAR</option>
                                        <option value="TEMPORARY" >TEMPORARY</option>
                                        <option value="PART TIME" >PART TIME</option>
                                    </select>
                                </div>    
                                <div className="form_handler_container" style={{padding:"8px 0"}}>
                                     <img src={Invalid_icon} className="img_verifyer"/>
                                     <p className="text_verifyer" style={{fontSize:".9rem"}}></p>
                                </div>    
                                <button id="save_btn" type="submit">Save Changes</button>
                             </div>
                        </form>
                        </div>

                        <div className="info_details">
                        <form onSubmit={editAccountForm}>
                            <div className="top">
                                <span>Change my Email</span>
                                <img src={edit_profileIcon}/>
                            </div>
                            <div className="content">
                                <div className="left">
                                    <p className="label">Email : </p>
                                    <input type="email" defaultValue={localStorage.getItem("email")} placeholder="Enter your email here..." id="edit_email" onChange={email_validation} required/>
                                </div>      
                                <div className="form_handler_container" style={{padding:"8px 0"}}>
                                     <img src={Invalid_icon} className="img_verifyer"/>
                                     <p className="text_verifyer" style={{fontSize:".9rem"}}></p>
                                </div>    
                                <button id="save_btn" type="submit">Save Changes</button>
                             </div>
                        </form>
                        </div>
                        

                        <div className="info_details" style={{marginTop:"40px",marginBottom:"40px"}}>
                        <form onSubmit={changePasswordForm}>
                            <div className="top">
                                <span>Change Password</span>
                                <img src={edit_profileIcon}/>
                            </div>
                            <div className="content">
                                <div className="left" style={{flexDirection:"column",alignItems:"flex-start"}}>
                                    <p className="label">Current Password : </p>
                                    <div className="input_container input_container2 password_container">
                                        <div className="icon_container">
                                            <LightTooltip title="Password">
                                            <img src={Password_icon}/>
                                            </LightTooltip>
                                        </div>
                                        <input type="password" placeholder="Your password here" name="password" className="password" id="current_password" onKeyUp={toggle_password1} required/>
                                        <div className="toggle_password">                           
                                            <img src={Open_eye_icon} 
                                                className="password_toggle_icon open_eye"
                                                title="Show Password"
                                                onClick={show_pass1}
                                            />         
                                            <img src={Close_eye_icon}
                                                className="password_toggle_icon close_eye"
                                                title="Hide Password"
                                                onClick={hide_pass1}
                                            />
                                        </div>
                                    </div>
                                </div>   

                                <div className="left" style={{flexDirection:"column",alignItems:"flex-start"}}>
                                    <p className="label">New Password : </p>
                                    <div className="input_container input_container2 password_container">
                                        <div className="icon_container">
                                            <LightTooltip title="Password">
                                            <img src={Password_icon}/>
                                            </LightTooltip>
                                        </div>
                                        <input type="password" placeholder="Your new password here" className="password"  id="new_password"  onKeyUp={() => { toggle_password2(); password_validation();}} required/>
                                        <div className="toggle_password">                           
                                            <img src={Open_eye_icon} 
                                                className="password_toggle_icon open_eye"
                                                title="Show Password"
                                                onClick={show_pass2}
                                            />         
                                            <img src={Close_eye_icon}
                                                className="password_toggle_icon close_eye"
                                                title="Hide Password"
                                                onClick={hide_pass2}
                                            />
                                        </div>
                                    </div>
                                </div>   
                                   
                                <div className="left" style={{flexDirection:"column",alignItems:"flex-start"}}>
                                    <p className="label">Confirm New Password : </p>
                                    <div className="input_container input_container2 password_container">
                                        <div className="icon_container">
                                            <LightTooltip title="Password">
                                            <img src={Password_icon}/>
                                            </LightTooltip>
                                        </div>
                                        <input type="password" placeholder="Retype your password here" name="password" className="password" id="retype_password" onKeyUp={() => { toggle_password3(); password_validation1();}} required/>
                                        <div className="toggle_password">                           
                                            <img src={Open_eye_icon} 
                                                className="password_toggle_icon open_eye"
                                                title="Show Password"
                                                onClick={show_pass3}
                                            />         
                                            <img src={Close_eye_icon}
                                                className="password_toggle_icon close_eye"
                                                title="Hide Password"
                                                onClick={hide_pass3}
                                            />
                                        </div>
                                    </div>
                                </div>   

                                <div className="form_handler_container" style={{padding:"8px 0"}}>
                                     <img src={Invalid_icon} className="img_verifyer"/>
                                     <p className="text_verifyer" style={{fontSize:".9rem"}}></p>
                                </div>    
                                <button id="save_btn" type="submit">Save Changes</button>
                             </div>
                        </form>    
                        </div>


                    </div>
                </Grid>    
                </div>

            </div>
                
        </div>
            
        <RightNavbar/>

        <ProfileNotifyer/>

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

    //Para mavalidate email
    function email_validation(){
        if (validator.isEmail(document.getElementById("edit_email").value)) { //Pag valid email
                document.getElementsByClassName("form_handler_container")[1].style.display = "flex";
                document.getElementsByClassName("form_handler_container")[1].style.backgroundColor = "rgb(76, 180, 76)"
                document.getElementsByClassName("img_verifyer")[1].src = Valid_icon;
                document.getElementsByClassName("text_verifyer")[1].innerHTML = "Your email is valid.";
                document.getElementsByClassName("edit_email")[1].style.border = "1px solid #D8D8D8";   
        } 
        else if(document.getElementById("edit_email").value === "" ){  //Pag alang value email sa input form
                document.getElementsByClassName("form_handler_container")[1].style.display = "none";
                document.getElementsByClassName("form_handler_container")[1].style.backgroundColor = "rgb(76, 180, 76)"
                document.getElementsByClassName("img_verifyer")[1].src = Valid_icon;
                document.getElementsByClassName("text_verifyer")[1].innerHTML = "";
                document.getElementsByClassName("edit_email")[1].style.border = "1px solid #D8D8D8";   
        }
        else { //Pag invalid email
                document.getElementsByClassName("form_handler_container")[1].style.display = "flex";
                document.getElementsByClassName("text_verifyer")[1].innerHTML = "Your email is invalid.";
                document.getElementsByClassName("form_handler_container")[1].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[1].src = Invalid_icon;
                document.getElementsByClassName("edit_email")[1].style.border = "1px solid red";   
        }
    }