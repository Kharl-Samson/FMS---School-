import React from "react";
import '../css/login.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Invalid_icon from "../images/icons/invalid.svg";
import rightBG from "../images/login/login_img.png";
import CICT_Text from "../images/login/cict_bg_text.png";
import Image_rounder from "../images/login/login_img_rounder.png";
import CICT_Logo from "../images/login/cict_logo.png";
import Email_icon from "../images/icons/email.svg"
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import axios from "axios";
import EmailValidation from "../images/icons/EmailValidation.gif";
import loading from "../images/loading.gif";

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


        //Getting the value of all input when submitting the form
        const submitForm=(e)=>{
            e.preventDefault();

            //Sending the data request to call it on backend
            const sendData = {
                email1:document.getElementById("forgot_email").value,
            }
            //console.log(sendData)

            document.getElementsByClassName("LoadingContainer")[0].style.display = "flex";
                    //Sending the data to my backend
                    axios.post('http://localhost/fms/forgotPassword.php',sendData)
                    .then((result)=>{
                        if(result.data.status === "Mailer Error" ){
                            setTimeout(function(){
                                document.getElementsByClassName("LoadingContainer")[0].style.display = "none";
                                document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                                document.getElementsByClassName("text_verifyer")[0].innerHTML = "This email is invalid.";
                                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
                            },500);
                        }
                        else if(result.data.status === "No Email Found" ){
                            setTimeout(function(){
                                document.getElementsByClassName("LoadingContainer")[0].style.display = "none";
                                document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                                document.getElementsByClassName("text_verifyer")[0].innerHTML = "This email is not found in our system.";
                                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
                            },500);
                        }
                        else if(result.data.status === "Mailer Correct" ){
                            document.getElementsByClassName("LoadingContainer")[0].style.display = "none";
                            document.getElementById("forgot_email").value = "";
                            document.getElementById("email_modal").style.display = "flex";                                 
                        }    
                    })//End of axios
        }

    function closeProfileLockModal(){
        document.getElementById("email_modal").style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == document.getElementById("email_modal")) {
            document.getElementById("email_modal").style.display = "none";
        }
    }

    function removeVerifyer(){
        document.getElementsByClassName("form_handler_container")[0].style.display = "none";
        document.getElementsByClassName("text_verifyer")[0].innerHTML = "";
    }


    return (
        <div className="login_container">
            {/*Loading when getting data*/ }
            <div className="LoadingContainer">
                <img src={loading}/>
            </div>

            {/*Modal*/ }
            <div className="modal_container" id="email_modal">
              <div className="modal_validation">
                <img src={EmailValidation} className="emailVal_img" style={{boxShadow:"none"}}/>
                  <h1 className="val_header">Email Sent!</h1>
                  <span className="val_subtext">Please check your email and follow the instructions that we've sent to you.</span>
                  <button className="modal_close_btn" onClick={closeProfileLockModal}>Okay</button>
              </div>
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

            <div className="login_form_container forgot_password_container">

                <form onSubmit={submitForm}>
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
                                    <input type="email" placeholder="Email address" id="forgot_email" onKeyUp={removeVerifyer} required/>
                                </div>

                                <div className="form_handler_container">
                                     <img src={Invalid_icon} className="img_verifyer"/>
                                     <p className="text_verifyer"></p>
                                </div>    

                                <button className="forgot_pass_btn" type="submit" style={{marginBottom:"30px"}}>Send me instructions</button>

                            </div>
                        </div>

                        <div className="right right_part"
                         style={{
                             padding: "5% 0",
                             background: `url(${rightBG}) no-repeat center center fixed`,
                             webkitBackgroundSize: "cover",
                         }}
                        >
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