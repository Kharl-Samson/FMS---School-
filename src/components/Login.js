import React from "react";
import '../css/login.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from "react";
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Login(){

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
                <Container maxWidth="md">
                    <Box sx={{  height: 'auto' }}>

                    <div className="login_form">
                        <div className="left">
                            <div className="left_container">
                                <h1>Welcome Back</h1>
                                <span className="subtext">Login to your account</span>

                                <div className="input_container input_container1">
                                    <div className="icon_container">
                                            <img src={Username_icon} className=".for_hover" title="Username or Email"/>
                                    </div>
                                    <input type="text" placeholder="Username or Email" />
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
                                                <span className="forgot_pass">Forgot Password?</span>
                                            </div> 
                                    </Grid>
                               </div>

                                <button className="sign_in_btn">Sign in</button>
                                <p className="dont_have_account_text">
                                    Don't have an account?&nbsp; 
                                    <span>Sign up</span>
                                </p>

                            </div>
                        </div>

                        <div className="right">
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