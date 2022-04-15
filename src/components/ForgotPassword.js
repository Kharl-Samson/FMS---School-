import React from "react";
import '../css/login.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

import Home_Icon from "../images/icons/home.svg";
import CICT_Text from "../images/login/cict_bg_text.png";
import Image_rounder from "../images/login/login_img_rounder.png";
import CICT_Logo from "../images/login/cict_logo.png";
import Email_icon from "../images/icons/email.svg"
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ForgotPassword(){
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

    document.title = "CICT | Forgot Password";

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

            <div className="login_form_container forgot_password_container">
                <Container maxWidth="md">
                    <Box sx={{  height: 'auto' }}>
     
                    <div className="login_form">
                        <div className="left">
                            <div className="left_container">
                                <div className="forgot_header">
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <LightTooltip title="Back to sign in">
                                        <p className="back">&#8249;</p>
                                        </LightTooltip>
                                    </Link>
                                    <h1 style={{marginTop: "3%", marginLeft: "5%",lineHeight : 1}}>Forgot Password</h1>
                                </div>

                                <span className="forgot_subtext">Enter the email address you used to register with CICT.</span>

                                <div className="input_container input_container2">
                                    <div className="icon_container">
                                            <LightTooltip title="Email">
                                            <img src={Email_icon} className=".for_hover"/>
                                            </LightTooltip>
                                    </div>
                                    <input type="text" placeholder="Email address" />
                                </div>

                                <button className="forgot_pass_btn">Send me instructions</button>

                            </div>
                        </div>

                        <div className="right right_part"
                         style={{
                             padding: "5% 0",
                         }}
                        >
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