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