import React from "react";
import '../css/login.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect, useState } from "react";
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import CICT_Text from "../images/login/cict_bg_text.png";
import Image_rounder from "../images/login/login_img_rounder.png";
import Email_icon from "../images/icons/email.svg";
import Password_icon from "../images/icons/password.svg";
import Open_eye_icon from "../images/icons/open_eye.svg";
import Close_eye_icon from "../images/icons/close_eye.svg"; 
import CICT_Logo from "../images/login/cict_logo.png";
import Invalid_icon from "../images/icons/invalid.svg";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import rightBG from "../images/login/login_img.png";
import loading from "../images/loading.gif";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Login(){
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

    //Loading the icon in the tab
    document.querySelector("link[rel='shortcut icon']").href = CICT_Logo;
    document.title = "CICT | Sign in or Sign up";
  
    //Para maclear email sa local storage
    localStorage.removeItem("email");
    localStorage.removeItem("pds_ctr");

    //Para matoggle yung password
    const [open,setOpen] = useState(false)
    const pass = {
      toggle:{
        visibility: open ? "visible" : "hidden",
      }
    };

    function TogglePass(){
        if(document.getElementById("password").value == ""){
            setOpen(false); //Pag wala laman password input mag set sa false para mag hide toggle icon
        }
        else{
            setOpen(true);
        }
    }
    //Para maview yung password sa input form
    function show_pass(){
        document.getElementById('password').type = 'text';
        document.getElementsByClassName("open_eye")[0].style.display = "none"
        document.getElementsByClassName("close_eye")[0].style.display = "flex"
    }
    //Para mahide yung password sa input form
    function hide_pass(){
        document.getElementById('password').type = 'password';
        document.getElementsByClassName("open_eye")[0].style.display = "flex"
        document.getElementsByClassName("close_eye")[0].style.display = "none"
    }
    //Para mahide yung validation sa form
    function hide_validation(){
        document.getElementsByClassName("form_handler_container")[0].style.display = "none";
        document.getElementsByClassName("text_verifyer")[0].innerHTML = "";
        document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
        document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
    }

    let navigate = useNavigate(); //Para mag direct sa specific page

    //Declaring variable data to pass in backend
    const [user,setData ] = useState({
        email:"",
        password:""
    })
    //Setting a value to a data 
    const handleChange=(e)=>{
        setData({...user, [e.target.name]: e.target.value });
    }
    //Getting the value of all input when submitting the form
    const submitForm=(e)=>{
        e.preventDefault();
        //Sending the data request to call it on backend
        const sendData = {
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
        }
        document.getElementsByClassName("LoadingContainer")[0].style.display = "flex";
        //Sending the data to my backend
        axios.post('http://localhost/fms/login.php',sendData)
        .then((result)=>{
            if(result.data.status === "Admin Login"){ //If response is Admin Login
                window.localStorage.setItem('email', result.data.email);
                window.localStorage.setItem('fname', result.data.fname);
                window.localStorage.setItem('lname', result.data.lname);
                window.localStorage.setItem('department', result.data.department);
                window.localStorage.setItem('employment', result.data.employment);
                window.localStorage.setItem('name', result.data.name);
                window.localStorage.setItem('pds_status', result.data.pds_status);
                window.localStorage.setItem('pds_ctr', "null");
                window.localStorage.setItem('profile_locked', result.data.profile_locked);
                window.localStorage.setItem('profile_photo', result.data.profile_photo);
                setTimeout(function(){
                    document.getElementsByClassName("LoadingContainer")[0].style.display = "none";
                    navigate(`/AdminDashboard`);
                },1000);     
            }
            else if(result.data.status === "Faculty Login"){ //If response is Faculty Login
                window.localStorage.setItem('email', result.data.email);
                window.localStorage.setItem('fname', result.data.fname);
                window.localStorage.setItem('lname', result.data.lname);
                window.localStorage.setItem('name', result.data.name);
                window.localStorage.setItem('pds_status', result.data.pds_status);
                window.localStorage.setItem('pds_ctr', "null");
                window.localStorage.setItem('profile_locked', result.data.profile_locked);
                window.localStorage.setItem('profile_photo', result.data.profile_photo);
                setTimeout(function(){
                    document.getElementsByClassName("LoadingContainer")[0].style.display = "none";
                    navigate(`/FacultyDashboard`);
                },1000)
            }
            else if(result.data.status === "Pending Admin" || result.data.status === "Pending Faculty"){ //If the account is still pending
                setTimeout(function(){
                    document.getElementsByClassName("LoadingContainer")[0].style.display = "none";
                    document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                    document.getElementsByClassName("text_verifyer")[0].innerHTML = "This account is account is not yet approve by the admin.";
                    document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                    document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
                },500)
            }
            else if(result.data.status === "Invalid"){ //If username or password is invalid
                setTimeout(function(){
                    document.getElementsByClassName("LoadingContainer")[0].style.display = "none";
                    document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                    document.getElementsByClassName("text_verifyer")[0].innerHTML = "Incorrect email or password.";
                    document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                    document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
                },500) 
            }

        })    
    }


    var defaultChecked1 = localStorage.getItem("remember_me1");
    setTimeout(function(){
        if(localStorage.getItem("remember_me") !="not_checked"){
            window.localStorage.setItem('remember_me1', "true");
         }
         else{
             window.localStorage.setItem('remember_me1', '');

         }
    },500);
 
 
   function lsRememberMe1() {
     if (document.getElementById('keep_logA').checked) {
         window.localStorage.setItem('email_input', document.getElementById("email").value);
         window.localStorage.setItem('password_input', document.getElementById("password").value);
         window.localStorage.setItem('remember_me', "checked");
         window.localStorage.setItem('remember_me1', "true");

     } 
     else{
         window.localStorage.setItem('email_input', "");
         window.localStorage.setItem('password_input', "");
         window.localStorage.setItem('remember_me', "not_checked");
         window.localStorage.setItem('remember_me1', '');

     }
   }

    return (
        <div className="login_container" >

            {/*Loading when getting data*/ }
            <div className="LoadingContainer">
                <img src={loading}/>
            </div>

            <div className="cict_text_container cict_text_container1">
                <img src={CICT_Text} className="cict_text cict_text1"/>     
            </div>
            <div className="cict_text_container cict_text_container2">
                <img src={CICT_Text} className="cict_text cict_text2"/>     
            </div>
            <div className="cict_text_container cict_text_container3">
                <img src={CICT_Text} className="cict_text cict_text1"/>     
            </div>

            <div className="img_rounder_container">
                <img src={Image_rounder} />
            </div>

            <div className="login_form_container">
                <form onSubmit={submitForm}>
                <Container maxWidth="md">
                    <Box sx={{  height: 'auto' }}>
     
                    <div className="login_form">
                        <div className="left">
                            <div className="left_container">
                                <h1>Welcome Back</h1>
                                <span className="subtext">Login to your account</span>

                                <div className="input_container input_container1">
                                    <div className="icon_container">
                                    <LightTooltip title="Email">
                                            <img src={Email_icon} className=".for_hover"/>
                                    </LightTooltip>
                                    </div>
                                    <input type="text" placeholder="Email" name="email"  onKeyUp={hide_validation} id="email" defaultValue={localStorage.getItem("email_input")} required/>
                                </div>

                                <div className="input_container input_container2">
                                    <div className="icon_container">
                                    <LightTooltip title="Password">
                                            <img src={Password_icon}/>
                                    </LightTooltip>
                                    </div>
                                    <input type="password" placeholder="Password" id="password" name="password" onKeyUp={() => { TogglePass(); hide_validation();}}  defaultValue={localStorage.getItem("password_input")} required/>

                                    <div className="toggle_password">
                                    
                                            <img src={Open_eye_icon} 
                                                className="password_toggle_icon open_eye"
                                                style={pass.toggle}
                                                onClick={show_pass}
                                                title="Show Password"
                                            />
            
                                            <img src={Close_eye_icon}
                                                className="password_toggle_icon close_eye"
                                                style={pass.toggle}
                                                onClick={hide_pass}
                                                title="Hide Password"
                                            />
                             
                                    </div>
                                </div>

                                <div className="remember_forgot_container">
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                            <div className="left">
                                                <Checkbox
                                               defaultChecked={defaultChecked1} 
                                                id="keep_logA"
                                                {...label}
                                                sx={{
                                                    color: orange[400],
                                                    '&.Mui-checked': {
                                                    color: orange[600],
                                                    },
                                                    padding: 0,
                                                    margin: 0,
                                                    }}
                                                />
                                                <span className="remember_me">Remember Me</span>
                                            </div>
                                            <div className="right">
                                                <Link to="/ForgotPassword" style={{ textDecoration: 'none' }}>
                                                    <span className="forgot_pass">Forgot Password?</span>
                                                </Link>          
                                            </div> 
                                    </Grid>
                               </div>

                               <div className="form_handler_container">
                                     <img src={Invalid_icon} className="img_verifyer"/>
                                     <p className="text_verifyer"></p>
                                </div>    

                                <button type="submit" className="sign_in_btn" onClick={lsRememberMe1} >Sign in</button>

                                <p className="dont_have_account_text">
                                    Don't have an account?&nbsp; 

                                    <Link to="/Register" style={{ textDecoration: 'none' }}>
                                        <span>Sign up</span>
                                    </Link>
                                </p>

                            </div>
                        </div>

                        <div className="right right_part" 
                            style={{
                                 background: `url(${rightBG}) no-repeat center center fixed`,
                                 webkitBackgroundSize: "cover",
                                 }}>
                             <img src={CICT_Logo} className="cict_logo"/>
                        </div>
                    </div>

                    </Box>
                </Container>
                </form>
            </div>

            <div className="footer">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Link to="/TermsOfService" style={{ textDecoration: 'none', marginBottom: "20px",marginLeft:"15px",marginRight:"15px"}} target="_blank">
                        <span className="footer_clickable" style={{whiteSpace: "nowrap" }}>Terms of Service</span>
                    </Link>
                    <Link to="/PrivacyPolicy" style={{ textDecoration: 'none', marginBottom: "20px",marginLeft:"15px",marginRight:"15px"}} target="_blank">
                        <span className="footer_clickable" style={{whiteSpace: "nowrap" }}>Privacy Policy</span>
                    </Link>
                    <Link to="" style={{ textDecoration: 'none', marginBottom: "20px",marginLeft:"15px",marginRight:"15px"}}>
                         <span style={{whiteSpace: "nowrap" }}>CICT © 2022</span>
                    </Link>
                </Grid>                                                    
            </div>

        </div>
    )
}



