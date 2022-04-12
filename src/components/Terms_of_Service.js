import React from "react";
import '../css/Guidelines.css';
import Grid from '@mui/material/Grid';
import CICT_Text from "../images/login/cict_bg_text.png";
import moment from 'moment'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import Image_rounder from "../images/login/login_img_rounder.png";

export default function Terms_of_Service(){
    document.title = "CICT | Terms Of Service";
    return(
        <div className="Guideline_container">
           
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

            <div className="opacity">  

                <div className="content_form_container">
                <Container maxWidth="md">
                    <Box sx={{  height: 'auto' }}>
                        <div className="content_form">  
                            <h1>Terms of Service</h1>
                            <span className="subtext">Updated as of {moment().format('LL')}</span>
                            <div className="upper"></div>

                            <div className="scrollable_content">
                                <p>If you continue to browse and use this website, you agree that by accessing this Site, you have read, understood, and agreed to be bound by all of these Terms & Conditions. If you disagree with any part of these terms and conditions, then you are expressly prohibited from using the site and you must discontinue use immediately.</p>
    
                                <p>This website aims to maintain comprehensive faculty management information, generate reliable reports and monitor faculty performance of the College of Information and Communications Technology Department in Bulacan State University.</p>
    
                                <span className="subtext1">Prohibited Activities</span>

                                <p>You may not access or use the Site for any purpose other than that for which we make the Site available. This website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

                                <p>As a user of the Site, you agree not to:</p>  

                                <ul class="dot">
                                    <li> Trick, defraud or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                                    <li> Disparage, tarnish or otherwise harm, us or other users of the Site.</li>
                                    <li> Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
                                    <li> Upload or transmit viruses, Trojan horses, or other material, including excessive spamming, that interferes with any party;s uninterrupted use, features, functions, operation or maintenance of the Site.</li>
                                    <li> Engage in any automated use of the system, or use any data mining bots or similar data gathering and extraction tools.</li>
                                    <li> Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site.</li>
                                    <li> Make any unauthorized use of the Site, including collecting usernames or email addresses of users by electronic or other means for the purpose of sending unsolicited email or creating user accounts by automated means/false pretenses.</li>
                                </ul>

                                <span className="subtext2">Site Management</span>

                                <p>We reserve the right, but not the obligation to: </p>

                                <ul class="dot">
                                <li> monitor the Site for violations of these Terms & Conditions</li>
                                <li> take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms & Conditions.</li>
                                <li> refuse, restrict access to, limit the availability of, or disable any of your contributions.</li>
                                <li> Disable all files and content that are excessive or in any way burdensome to our system.</li>
                                <li> manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.</li>  
                                </ul>
    
                                <span className="subtext3">Modifications and Interruptions</span>

                                <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification or discontinuance of the Site.</p>

                                <p>We may experience hardware, software or other problems or to perform maintenance to the Site. This results in interruptions, delays, or errors. We reserve the right to change, revise, update and modify the Site. You agree that we have no liability whatsoever for any loss, damage or inconvenience caused by your inability to access our Site during any downtime of the Site. Nothing in these TErms & Conditions will be construed to obligate us to maintain and support the Site to supply any corrections, updates or releases in connection therewith.</p>

                                <span className="subtext4">User Data</span>    

                                <p>We will maintain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. You are still solely responsible for all the data that you transmit that relates to any activity you have undertaken using the Site. You agree that we shall have no liability and you hereby waive any right of action against us from any loss or corruption of any such data.</p>

                                <span className="subtext4">Contact Us</span>        
    
                                <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:<br></br>
                                communicationsoffice@bulsu.edu.ph <br></br>
                                Phone: (044) 919 7800<br></br>
                                Bulacan State University<br></br>
                                (3000) Malolos, Bulacan <br></br>
                                Philippines
                                </p>
                            </div>   
                            <div className="upper"></div>
                            <center>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <button className="agree_button">I Agree</button>
                               </Link> 
                            </center>
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
                    <Link to="" style={{ textDecoration: 'none', marginBottom: "20px",marginLeft:"15px",marginRight:"15px"}}>
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
             
        </div>
    )
}