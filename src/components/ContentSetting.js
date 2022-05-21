import React from "react";
import '../css/contentSetting.css';
import LeftNavbarAdmin from '../navbarsUI/LeftNavbarAdmin';
import NavbarSizer from '../navbarsUI/NavbarSizer';
import RightNavbar from '../navbarsUI/RightNavbar';
import Grid from '@mui/material/Grid';
import upload_proficeIcon from "../images/icons/upload_proficeIcon.svg";
import success_modal from "../images/icons/success_modal.svg";
import edit_profileIcon from "../images/icons/edit_profileIcon.svg";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Invalid_icon from "../images/icons/invalid.svg";
import Valid_icon from "../images/icons/valid.svg";
import validator from 'validator';
import { useEffect, useState } from "react";
import RightNavbarAdmin from "../navbarsUI/RightNavbarAdmin";

export default function ContentSetting(){
    document.title = "CICT | Faculty Management System";

    var photoURL =  "http://localhost/fms/upload_profile/" + localStorage.getItem("profile_photo");

    setTimeout(function(){
        document.getElementById("contentS_link").classList.add('nav_active');
        document.getElementById("link_contentSetting").style.pointerEvents="none";
    },10);

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


//SELECT FILE BTN 
function selectFile(){
    document.getElementById('profile_photo_inpFile').click();
}

function removeFile(){
    document.getElementById("profile_photo_btn").style.display = "none";
    document.getElementById("profile_photo_inpText").value = "";
    document.getElementById("profile_photo_inpFile").value = null;
    document.getElementById("profile_photo1").src = document.getElementById("removeIMGsrc").value;
}

/* eslint no-restricted-globals:0 */
function loadfile(event){
    document.getElementById("profile_photo_btn").style.display = "flex";
    document.getElementById("profile_photo_inpText").value = document.getElementById("profile_photo_inpFile").files[0].name;
    var output=document.getElementById("profile_photo1");
    output.src=URL.createObjectURL(event.target.files[0]);
};

//Getting the value of all input when submitting the form
const uploadPhotoForm=(e)=>{
    e.preventDefault();
    const data = new FormData();
                
    //Sending the data request to call it on backend
    const sendData = {
        email_pds: localStorage.getItem("email"),
        img_handler: document.getElementById("profile_photo_inpText").value,
    }


    axios.post('http://localhost/fms/uploadLogo.php',sendData).then((result)=>{
        document.getElementById("profile_photo_btn").style.display = "none";
        document.getElementById("profile_photo_inpText").value = "";
        document.getElementById("profile_photo_inpFile").value = null;
    
        document.getElementsByClassName("profile_photo_side_modal")[0].style.display = "flex"; 
        setTimeout(function(){
            document.getElementsByClassName("profile_photo_side_modal")[0].style.right = "2%"; 
        },400);
        setTimeout(function(){
            document.getElementsByClassName("profile_photo_side_modal")[0].style.right = "-100%"; 
        },5000);
        setTimeout(function(){
            document.getElementsByClassName("profile_photo_side_modal")[0].style.display = "none"; 
        },6000);
    })//End of axios
    for (let i = 0; i < document.getElementsByName("imgLD[]").length; i++) {
        data.append("file[]", document.getElementsByName("imgLD[]")[i].files[0]);
    }
    let url = "http://localhost/fms/uploadLogo.php";
    axios.post(url, data, {}).then((res) => {});
}

function closingSuccessModalRight(){
    document.getElementsByClassName("profile_photo_side_modal")[0].style.right = "-100%"; 
    setTimeout(function(){
        document.getElementsByClassName("profile_photo_side_modal")[0].style.display = "none"; 
    },2000);
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
  const myFormImg = getWebContent.map((res) => { 
      return (
        <div> 
        <img 
        src={"http://localhost/fms/web_content/" + res.logo}
        id="profile_photo1"
        onError={(e)=>{e.target.onerror = null; e.target.src="http://localhost/fms/web_content/default_img.jpg"}}
      />
      <input type="hidden" id="removeIMGsrc" value={"http://localhost/fms/web_content/" + res.logo}/>
      </div> 
      );
  });

  const myFormImg1 = getWebContent.map((res) => { 
    return (
    <div className="info_details" style={{width:"88%"}}>
        <div className="top">
            <span>College Name</span>
            <img src={edit_profileIcon}/>
        </div>
        <div className="content">
            <div className="left">
                <textarea required placeholder="College name here" style={{height:"6rem"}} id="col_name">{res.name}</textarea>
            </div>    
        </div>
    </div>                
    );
});


const myFormImg2 = getWebContent.map((res) => { 
    return (
    <div className="info_details" style={{width:"88%",marginBottom:"2rem"}}>
        <div className="top">
            <span>College Abbreviation</span>
            <img src={edit_profileIcon}/>
        </div>
        <div className="content">
            <div className="left">
                <input type="text" placeholder="Abbreviation here" defaultValue={res.abbreviation} id="col_Ab" required minlength="3" maxlength="8"/>
            </div>      
            <div className="form_handler_container" style={{padding:"8px 0"}}>
                 <img src={Invalid_icon} className="img_verifyer"/>
                 <p className="text_verifyer" style={{fontSize:".9rem"}}></p>
            </div>    
         </div>
    </div>            
    );
});

const myFormImg3 = getWebContent.map((res) => { 
    return (                  
        <div className="info_details" style={{marginTop:"0px",marginBottom:"40px"}}>
            <div className="top">
                <span>Vision</span>
                <img src={edit_profileIcon}/>
            </div>
            <div className="content">
                <div className="left">
                    <textarea required placeholder="Vision here" id="col_Vis" style={{height:"10rem"}}>{res.vision}</textarea>
                </div>   
             </div> 
        </div>  
    );
});

const myFormImg4 = getWebContent.map((res) => { 
    return (                  
    <div className="info_details" style={{marginTop:"0px"}}>
        <div className="top">
            <span>Mission</span>
            <img src={edit_profileIcon}/>
        </div>
        <div className="content">
            <div className="left">
                <textarea required placeholder="Vision here" id="col_Mis" style={{height:"10rem"}}>{res.mission}</textarea>
            </div>   
         </div> 
    </div>
    );
});



  const saveForm=(e)=>{
    e.preventDefault();
        
    //Sending the data request to call it on backend
    const sendData = {
        email_key: localStorage.getItem("email"),
        name : document.getElementById("col_name").value,
        abb: document.getElementById("col_Ab").value,
        vision: document.getElementById("col_Vis").value,
        mission: document.getElementById("col_Mis").value,
    }
        axios.post('http://localhost/fms/updateWebContent.php',sendData).then((result)=>{
            if(result.data.status == "Invalid"){//If the response is invalid
                alert("There was an error in your SQL Connection!")
            }
            else if(document.getElementById("col_name").value=="" || document.getElementById("col_Ab").value=="" || document.getElementById("col_Vis").value=="" || document.getElementById("col_Mis").value==""){

            }
            else if(result.data.status == "Success"){ //If the response is valid
                document.getElementsByClassName("profile_photo_side_modal")[0].style.display = "flex"; 
                setTimeout(function(){
                    document.getElementsByClassName("profile_photo_side_modal")[0].style.right = "2%"; 
                },400);
                setTimeout(function(){
                    document.getElementsByClassName("profile_photo_side_modal")[0].style.right = "-100%"; 
                },5000);
                setTimeout(function(){
                    document.getElementsByClassName("profile_photo_side_modal")[0].style.display = "none"; 
                },6000);
            }
        })//End of axios
}
    return(
        <div className="dashboard_container">

        <LeftNavbarAdmin/>  
            
        <div className="main_content">
                <NavbarSizer/>


            <div className="accountSettings_container">
                <h1>Edit Content</h1>
                
                <div className="table_container"> 
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                >

                    <div className="left">
                        {myFormImg}
                        <LightTooltip title="Upload Photo">
                        <div className="upload_profile" onClick={selectFile}>
                            <img src={upload_proficeIcon} id="uploadprofile_icon"/>
                        </div>
                        </LightTooltip>

                        <form onSubmit={uploadPhotoForm}>
                        <input type="text" id="profile_photo_inpText" style={{display:"none"}}/>
                        <input type="file" id="profile_photo_inpFile" name="imgLD[]" onChange={() => { loadfile(event);}} accept="image/png, image/jpeg" style={{display:"none"}}/>

                        <div id="profile_photo_btn">
                            <button type="button" onClick={removeFile}>Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                        </form>

                        {myFormImg1}
                        {myFormImg2}

                    </div>

                    <div className="right">
                        {myFormImg3}  
                        {myFormImg4}
                        <button id="save_btn" type="button" onClick={saveForm}>Save Changes</button> 
                    </div>

                </Grid>   
                </div>

            </div>
                
        </div>
            
        <RightNavbarAdmin/>

        {/*Success Editing Profile Photo */}
        <div className="success_modal_right_side profile_photo_side_modal">
            <div className="left"><img src={success_modal}/></div>
            <div className="center">
                <p>Success!</p>
                <p>This action was process succesfully.</p>
            </div>
            <div className="right">
                <p title="Close" onClick={closingSuccessModalRight}>&#215;</p>
            </div>
        </div>

        </div>
    )
}

    //Para mavalidate email
    function email_validation(){
        if (validator.isEmail(document.getElementById("edit_email").value)) { //Pag valid email
                document.getElementsByClassName("form_handler_container")[1].style.display = "flex";
                document.getElementsByClassName("form_handler_container")[1].style.backgroundColor = "rgb(76, 180, 76)"
                document.getElementsByClassName("img_verifyer")[1].src = Valid_icon;
                document.getElementsByClassName("text_verifyer")[1].innerHTML = "Your email is valid.";
                document.getElementsByClassName("edit_email")[1].style.border = "1px solid #D8D8D8";   
        } 
        else if(document.getElementById("edit_email").value === "" ){  //Pag alang value email sa input form
                document.getElementsByClassName("form_handler_container")[1].style.display = "none";
                document.getElementsByClassName("form_handler_container")[1].style.backgroundColor = "rgb(76, 180, 76)"
                document.getElementsByClassName("img_verifyer")[1].src = Valid_icon;
                document.getElementsByClassName("text_verifyer")[1].innerHTML = "";
                document.getElementsByClassName("edit_email")[1].style.border = "1px solid #D8D8D8";   
        }
        else { //Pag invalid email
                document.getElementsByClassName("form_handler_container")[1].style.display = "flex";
                document.getElementsByClassName("text_verifyer")[1].innerHTML = "Your email is invalid.";
                document.getElementsByClassName("form_handler_container")[1].style.backgroundColor = "#f7526d"
                document.getElementsByClassName("img_verifyer")[1].src = Invalid_icon;
                document.getElementsByClassName("edit_email")[1].style.border = "1px solid red";   
        }
    }