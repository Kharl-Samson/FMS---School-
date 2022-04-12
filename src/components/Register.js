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
import Email_icon from "../images/icons/email.svg";
import Invalid_icon from "../images/icons/invalid.svg";
import Valid_icon from "../images/icons/valid.svg";

import validator from 'validator'
import axios from "axios";
import ModalValidation from "./ModalValidation";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Register(){
    
    document.title = "CICT | Sign in or Sign up";

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
    //Para matoggle yung sa confirm password
    const [open1,setOpen1] = useState(false)
    const pass1 = {
        toggle:{
          visibility: open1 ? "visible" : "hidden",
        }
    };
    function TogglePass1(){
        if(document.getElementById("confirm_password").value == ""){
            setOpen1(false); //Pag wala laman password input mag set sa false para mag hide toggle icon
        }
        else{
            setOpen1(true);
        }
    }
   //Para maview yung password sa input form
    function show_pass1(){
        document.getElementById('confirm_password').type = 'text';
        document.getElementsByClassName("open_eye")[1].style.display = "none"
        document.getElementsByClassName("close_eye")[1].style.display = "flex"
    }
   //Para mahide yung password sa input form
    function hide_pass1(){
        document.getElementById('confirm_password').type = 'password';
        document.getElementsByClassName("open_eye")[1].style.display = "flex"
        document.getElementsByClassName("close_eye")[1].style.display = "none"
    }

    //Para mavalidate email
    function email_validation(){
        if (validator.isEmail(document.getElementById("email").value)) { //Pag valid email
                document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "rgb(76, 180, 76)"
                document.getElementsByClassName("img_verifyer")[0].src = Valid_icon;
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "Your email is valid.";
                document.getElementsByClassName("email_container")[0].style.border = "1px solid #D8D8D8";   
        } 
        else if(document.getElementById("email").value === "" ){  //Pag alang value email sa input form
                document.getElementsByClassName("form_handler_container")[0].style.display = "none";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "rgb(76, 180, 76)"
                document.getElementsByClassName("img_verifyer")[0].src = Valid_icon;
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "";
                document.getElementsByClassName("email_container")[0].style.border = "1px solid #D8D8D8";   
        }
        else { //Pag invalid email
                document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "Your email is invalid.";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
                document.getElementsByClassName("email_container")[0].style.border = "1px solid red";   
        }
    }

    //Pang validate ng password
    function password_validation(){
        if (validator.isStrongPassword(document.getElementById('password').value, { //Pag valid password
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {          
                document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "rgb(76, 180, 76)"
                document.getElementsByClassName("img_verifyer")[0].src = Valid_icon;
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "Your password is valid.";
                document.getElementsByClassName("password_container")[0].style.border = "1px solid #D8D8D8";
          } else { //Pag maiksi or madali yung password
                document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "Your password is not strong.";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
                document.getElementsByClassName("password_container")[0].style.border = "1px solid red";      
          }
          
          if(document.getElementById("password").value === "" ){ //Pag wala value yung password sa input form
                document.getElementsByClassName("form_handler_container")[0].style.display = "none";
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
                document.getElementsByClassName("password_container")[0].style.border = "1px solid #D8D8D8";
                document.getElementsByClassName("confirm_password_container")[0].style.border = "1px solid #D8D8D8";   
          }
    }

    //Pang determing kung match yung password at confirm password
    function password_verifyer(){
        const pass = document.getElementById('password').value;
        const confirm_pass = document.getElementById('confirm_password').value;

            if(pass !== confirm_pass && confirm_pass !== ""){ //Pag di equal yung password at confirm password 
                document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "Please make sure your password match.";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
                document.getElementsByClassName("confirm_password_container")[0].style.border = "1px solid red";   
            }
            else if(confirm_pass === ""){ //Pag wala value yung confirm password input
                document.getElementsByClassName("password_container")[0].style.border = "1px solid #D8D8D8"; 
                document.getElementsByClassName("confirm_password_container")[0].style.border = "1px solid #D8D8D8";   
                document.getElementsByClassName("form_handler_container")[0].style.display = "none";
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;  
            }
            else{ //Pag match equal yung password at confirm password 
                document.getElementsByClassName("form_handler_container")[0].style.display = "none";
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;  
                document.getElementsByClassName("confirm_password_container")[0].style.border = "1px solid #D8D8D8";   
            }
    }

    //Declaring variable data to pass in backend
    const [data,setData ] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        confirm_password:""
    })
    //Setting a value to a data 
    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
    }
    //Getting the value of all input when submitting the form
    const submitForm=(e)=>{
        e.preventDefault();

        const pass = document.getElementById('password').value;
        const confirm_pass = document.getElementById('confirm_password').value;

        //Sending the data request to call it on backend
        const sendData = {
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password,
            confirm_password:data.confirm_password
        }
        //console.log(sendData)

        if (validator.isEmail(document.getElementById("email").value)) {// If email is valid 
            if (validator.isStrongPassword(document.getElementById('password').value, { // If password is valid
                minLength: 8, minLowercase: 1,
                minUppercase: 1, minNumbers: 1, minSymbols: 1
            })) {  
                //Sending the data to my backend
                axios.post('http://localhost/fms/register.php',sendData)
                .then((result)=>{

                    if(result.data.status == "Invalid"){//If the response is invalid
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">There was an error in your SQL Connection!</Alert>
                        </Stack>
                    }
                    else if(result.data.status == "Password doesnt match"){ //If the response is Password doesnt match
                        document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                        document.getElementsByClassName("text_verifyer")[0].innerHTML = "Please make sure your password match.";
                        document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                        document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
                        document.getElementsByClassName("confirm_password_container")[0].style.border = "1px solid red";   
                    }
                    else if(result.data.status == "Email taken"){ //If the response is Email taken
                        document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                        document.getElementsByClassName("text_verifyer")[0].innerHTML = "E-mail has already been taken.";
                        document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                        document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
                        document.getElementsByClassName("email_container")[0].style.border = "1px solid red";   
                    }
                    else if(result.data.status == "valid"){ //If the response is valid
                        //pag tama lalabas modal
                        document.getElementsByClassName("modal_container")[0].style.display = "flex";
                    }
    
                })//End of axios
            }
            else { //If the password is not strong
                document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
                document.getElementsByClassName("text_verifyer")[0].innerHTML = "Your password is not strong.";
                document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
                document.getElementsByClassName("password_container")[0].style.border = "1px solid red";    
            }
        }
        else{ //If the email is invalid
            document.getElementsByClassName("form_handler_container")[0].style.display = "flex";
            document.getElementsByClassName("text_verifyer")[0].innerHTML = "Your email is invalid.";
            document.getElementsByClassName("form_handler_container")[0].style.backgroundColor = "#f7526d"
            document.getElementsByClassName("img_verifyer")[0].src = Invalid_icon;
            document.getElementsByClassName("email_container")[0].style.border = "1px solid red";   
        }
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
                <form onSubmit={submitForm}>
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

                                <div className="input_container input_container1 fname_container">
                                    <div className="icon_container">
                                            <img src={Username_icon} className=".for_hover" title="First Name"/>
                                    </div>
                                    <input type="text" placeholder="First Name" name="first_name" onChange={handleChange} value={data.first_name} required/>
                                </div>

                                <div className="input_container input_container2 lname_container">
                                    <div className="icon_container">
                                            <img src={Username_icon} className=".for_hover" title="Last Name"/>
                                    </div>
                                    <input type="text" placeholder="Last Name" name="last_name" onChange={handleChange} value={data.last_name} required/>
                                </div>

                                <div className="input_container input_container2 email_container">
                                    <div className="icon_container">
                                            <img src={Email_icon} className=".for_hover" title="Email"/>
                                    </div>
                                    <input type="text" placeholder="Email" name="email" id="email" onChange={handleChange} onKeyUp={email_validation} value={data.email} required/>
                                </div>

                                <div className="input_container input_container2 password_container">
                                    <div className="icon_container">
                                            <img src={Password_icon} title="Password"/>
                                    </div>
                                    <input type="password" placeholder="Password" name="password"  id="password" onKeyUp={() => { TogglePass(); password_validation();}} onChange={handleChange} value={data.password} required/>
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

                                <div className="input_container input_container2 confirm_password_container">
                                    <div className="icon_container">
                                            <img src={Password_icon} title="Confirm Password"/>
                                    </div>
                                    <input type="password" placeholder="Confirm Password" name="confirm_password" id="confirm_password" onKeyUp={() => { TogglePass1(); password_verifyer();}}  onChange={handleChange} value={data.confirm_password} required/>
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

                                <div className="form_handler_container">
                                     <img src={Invalid_icon} className="img_verifyer"/>
                                     <p className="text_verifyer"></p>
                                </div>          

                                <button type="submit" className="sign_up_btn">Sign up</button>
           
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

            {/*Modal*/ }
            <div className="modal_container">
                <ModalValidation
                    name = "EmailValidation.gif"
                    headtext = "Successful!"
                    subtext = "Your submission has been sent! Kindly check your email and spam for the reply. Thanks!"
                    button1 = "Close"
                />
            </div>


        </div>
    )
}