import React from "react";
import '../css/login.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from "react";
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { Link, Navigate } from "react-router-dom";

import Home_Icon from "../images/icons/home.svg";
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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Login(){

    //Para maclear email sa local storage
    localStorage.removeItem("email");

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
            email:user.email,
            password:user.password,
        }
        //console.log(sendData)

        //Sending the data to my backend
        axios.post('http://localhost/fms/login.php',sendData)
        .then((result)=>{

            if(result.data.status === "Admin Login"){ //If response is Admin Login
                alert("admin login")
            }
            else if(result.data.status === "Faculty Login"){ //If response is Faculty Login
                window.localStorage.setItem('email', result.data.email);
                window.localStorage.setItem('name', result.data.name);
                navigate(`/FacultyDashboard`);
            }
            else if(result.data.status === "Pending Admin" || result.data.status === "Pending Faculty"){ //If the account is still pending
                document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "This account is account is not yet approve by the admin.";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
            }
            else if(result.data.status === "Invalid"){ //If username or password is invalid
                document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "Incorrect email or password.";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
            }

        })   
    }

    return (
        <div className="login_container">

            <Link to="/Home" style={{ textDecoration: 'none' }}>
                <div className="home_container_btn">
                    <img src={Home_Icon}/>
                        <span>Home</span>
                </div>
            </Link>

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
                                            <img src={Email_icon} className=".for_hover" title="Email"/>
                                    </div>
                                    <input type="text" placeholder="Email" name="email" onChange={handleChange} value={user.email} onKeyUp={hide_validation} required/>
                                </div>

                                <div className="input_container input_container2">
                                    <div className="icon_container">
                                            <img src={Password_icon} title="Password"/>
                                    </div>
                                    <input type="password" placeholder="Password" id="password" name="password" onKeyUp={() => { TogglePass(); hide_validation();}} onChange={handleChange} value={user.password} required/>

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

                                <button type="submit" className="sign_in_btn">Sign in</button>

                                <p className="dont_have_account_text">
                                    Don't have an account?&nbsp; 

                                    <Link to="/Register" style={{ textDecoration: 'none' }}>
                                        <span>Sign up</span>
                                    </Link>
                                </p>

                            </div>
                        </div>

                        <div className="right right_part">
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
                    <span className="footer_clickable">Terms of Service</span>
                    <span className="footer_clickable">Privacy Policy</span>
                    <span>CICT © 2022</span>
                </Grid>                                                    
            </div>

        </div>
    )
}