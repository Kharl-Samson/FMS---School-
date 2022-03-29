import React from "react";
import '../css/login.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

import Home_Icon from "../images/icons/home.svg";
import CICT_Text from "../images/login/cict_bg_text.png";
import Image_rounder from "../images/login/login_img_rounder.png";
import Username_icon from "../images/icons/username.svg";
import Password_icon from "../images/icons/password.svg";
import Open_eye_icon from "../images/icons/open_eye.svg";
import Close_eye_icon from "../images/icons/close_eye.svg"; 
import CICT_Logo from "../images/login/cict_logo.png";
import Email_icon from "../images/icons/email.png"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Register(){

    const [open,setOpen] = useState(false)
    const pass = {
      toggle:{
        visibility: open ? "visible" : "hidden",
      }
    };
    function TogglePass(){
        if(document.getElementById("password").value == ""){
            setOpen(false);
        }
        else{
            setOpen(true);
        }
    } 
    function show_pass(){
        document.getElementById('password').type = 'text';
        document.getElementsByClassName("open_eye")[0].style.display = "none"
        document.getElementsByClassName("close_eye")[0].style.display = "flex"
    }

    function hide_pass(){
        document.getElementById('password').type = 'password';
        document.getElementsByClassName("open_eye")[0].style.display = "flex"
        document.getElementsByClassName("close_eye")[0].style.display = "none"
    }

    const [open1,setOpen1] = useState(false)
    const pass1 = {
        toggle:{
          visibility: open1 ? "visible" : "hidden",
        }
    };
    function TogglePass1(){
        if(document.getElementById("confirm_password").value == ""){
            setOpen1(false);
        }
        else{
            setOpen1(true);
        }
    }

    function show_pass1(){
        document.getElementById('confirm_password').type = 'text';
        document.getElementsByClassName("open_eye")[1].style.display = "none"
        document.getElementsByClassName("close_eye")[1].style.display = "flex"
    }

    function hide_pass1(){
        document.getElementById('confirm_password').type = 'password';
        document.getElementsByClassName("open_eye")[1].style.display = "flex"
        document.getElementsByClassName("close_eye")[1].style.display = "none"
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

            <div className="login_form_container register_form_container">
                <Container maxWidth="md">
                    <Box sx={{  height: 'auto' }}>

                    <div className="login_form">
                        <div className="left">

                            <div className="left_container">
                                <h1 style={{lineHeight : 1,}}>Create an Account</h1>
                                <p className="already_have_account_text">
                                    Already have an account?&nbsp; 

                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <span>Sign in</span>
                                    </Link>
                                </p>

                                <div className="input_container input_container1">
                                    <div className="icon_container">
                                            <img src={Username_icon} className=".for_hover" title="First Name"/>
                                    </div>
                                    <input type="text" placeholder="First Name" />
                                </div>

                                <div className="input_container input_container2">
                                    <div className="icon_container">
                                            <img src={Username_icon} className=".for_hover" title="Last Name"/>
                                    </div>
                                    <input type="text" placeholder="Last Name" />
                                </div>

                                <div className="input_container input_container2">
                                    <div className="icon_container">
                                            <img src={Email_icon} className=".for_hover" title="Email"/>
                                    </div>
                                    <input type="text" placeholder="Email" />
                                </div>

                                <div className="input_container input_container2">
                                    <div className="icon_container">
                                            <img src={Password_icon} title="Password"/>
                                    </div>
                                    <input type="password" placeholder="Password" id="password" onKeyUp={TogglePass}/>
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

                                <div className="input_container input_container2">
                                    <div className="icon_container">
                                            <img src={Password_icon} title="Confirm Password"/>
                                    </div>
                                    <input type="password" placeholder="Confirm Password" id="confirm_password" onKeyUp={TogglePass1}/>
                                    <div className="toggle_password">                           
                                            <img src={Open_eye_icon} 
                                                className="password_toggle_icon open_eye"
                                                style={pass1.toggle}
                                                onClick={show_pass1}
                                                title="Show Password"
                                            />         
                                            <img src={Close_eye_icon}
                                                className="password_toggle_icon close_eye"
                                                style={pass1.toggle}
                                                onClick={hide_pass1}
                                                title="Hide Password"
                                            />
                                    </div>
                                </div>

                                <button className="sign_up_btn">Sign up</button>
           
                                <p className="terms_and_service">
                                    By continuing to use this website, I state that I have read and understood the <span>Terms of Service</span> and <span>Privacy Policy</span>.
                                </p>                
                            </div>
                
                        </div>

                        <div className="right right_part">
                            <img src={CICT_Logo} className="cict_logo"/>
                        </div>
                    </div>

                    </Box>
                </Container>
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