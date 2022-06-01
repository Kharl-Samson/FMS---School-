import React from "react";
import '../css/Guidelines.css';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import CICT_Text from "../images/login/cict_bg_text.png";
import moment from 'moment'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image_rounder from "../images/login/login_img_rounder.png";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Privacy_Policy(){
    function closeWin() {
        window.close();
    }

//Hook for getting web content
  const [getWebContent, setWebContent] = useState([]);
  const loadWebContent = async () => {
    const result = await axios.get("http://localhost/fms/getWebContent.php");
    setWebContent(result.data.phpresult);
  };
  useEffect(() => {
    loadWebContent();
  }, []);
  const webC_abbr = getWebContent.map((res) => {
    return (
        <span style={{whiteSpace: "nowrap" }}>{res.abbreviation} © 2022</span>
    );
  });
//Loading the icon in the tab
getWebContent.map((res) => { 
    document.querySelector("link[rel='shortcut icon']").href = "http://localhost/fms/web_content/"+res.logo;
    document.title = res.abbreviation+" | Privacy Policy";
});


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
                        <h1 className="privacy_policy">Privacy Policy</h1>
                        <span className="subtext">Updated as of {moment().format('LL')}</span>
                           
                        <div className="upper"></div>
                        <div className="scrollable_content">

                        <p> This privacy policy for Bulacan State University (College of Information and Communications Technology) describes how and why we might collect, store, use and process your information when you use our website.</p>
                    
                        <p>
                            What personal information do we process?
                            We collect personal information that you voluntarily provide to us when you register and participate in activities on the Services. The personal information that we collect depends on the context of your interactions with us and the Services. 
                        </p>

                        <p>The personal information we collect may include the following:</p>

                        <ul class="dot">
                            <li>name</li>
                            <li>phone numbers</li>
                            <li>email address</li>
                            <li>job titles</li>
                            <li>username</li>
                            <li>password</li>
                            <li>faculty employee id</li>
                            <li>student data</li>
                            <li>social security numbers or other government identifiers</li>
                        </ul>

                        <p>
                            How do we process your information?
                            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                        </p>

                        <ul class="dot">
                            <li>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
                            <li>To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.</li>
                            <li>To send administrative information. We may process your information to send you details about services, changes to our terms and policies, and other similar information.</li>
                            <li>To personalize user experience. 
                                We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
                            <li>To run and operate our Site. We may need your information to display content on the Site correctly.</li>
                        </ul>

                        
                        <p> How do we keep your information safe?</p>
                        
                        <p> We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet can be guaranteed 100% secured, so we cannot promise or guarantee that hackers and cybercriminals will not be able to access your information. Although we will do our best to protect your personal information. You should only access the Services within a secure environment.</p>

                        <p>
                            Changes to this Privacy Policy<br></br>
                            Bulacan State University has the discretion to update this privacy policy at any time. We encourage Users to frequently check for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
                        
                        </p>

                        <p>
                            Your acceptance of these terms<br></br>
                            By using this Site, you signify your acceptance of this policy.Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
                        
                        </p>
                        
                        <p> How can you Contact Us about the Privacy Policy?</p>

                        <p>
                            If you have questions or comments about this policy, you may email us ar communicationsoffice@bulsu.edu.ph or:<br></br>
                            (044) 919 7800<br></br>
                            Bulacan State University<br></br>
                            (3000) Malolos, Bulacan <br></br>
                            Philippines
                        </p>

                        </div>
                        
                        <div className="upper"></div>
                        <button className="agree_button" onClick={closeWin}>Close</button>

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
                    <Link to="" style={{ textDecoration: 'none', marginBottom: "20px",marginLeft:"15px",marginRight:"15px"}}>
                        <span className="footer_clickable" style={{whiteSpace: "nowrap" }}>Privacy Policy</span>
                    </Link>
                    <Link to="" style={{ textDecoration: 'none', marginBottom: "20px",marginLeft:"15px",marginRight:"15px"}}>
                         <span style={{whiteSpace: "nowrap" }}>{webC_abbr}</span>
                    </Link>
                </Grid>                                                    
                </div>
            
            </div>
             
        </div>
    )
}

