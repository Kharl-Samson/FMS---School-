import React from "react"
import '../css/certificate.css';
import LeftNavbarFaculty from "../navbarsUI/LeftNavbarFaculty";
import NavbarSizer from "../navbarsUI/NavbarSizer";
import RightNavbar from "../navbarsUI/RightNavbar";
import upload_imgIcon from "../images/icons/upload_imgIcon.svg";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import moment from "moment";
import { useEffect, useState } from "react";
import axios from "axios";
import error_info from '../images/icons/error_info.svg';
import SuccessIcon from "../images/icons/success_modal.svg";
import { Link } from "react-router-dom";

export default function EditCertificate(){
    document.title = "CICT | Faculty Management System";

    setTimeout(function(){
        document.getElementById("certificate_link").classList.add('nav_active');
        document.getElementById("link_certificate").style.pointerEvents="none";
    },10);
    var today = moment().format("L");
    today = today.split("/");
    var maxDateInput = today[2] + "-" + today[0] + "-" + today[1];
 
    //getting the email of user
    let email_key = localStorage.getItem("email");
    //Hook for getting all certificates
    const [pdsStep5, setpdsStep5] = useState([]);
    const loadpdsStep5 = async () => {
      const result = await axios.get("http://localhost/fms/pdsStep5.php");
      setpdsStep5(result.data.phpresult);
    };
    useEffect(() => {
      loadpdsStep5();
    }, []);
  
    var keyInput=0;
    const input_keyForCertificates = pdsStep5.map((res) => {
      if (res.email_id === email_key) {
          keyInput++;
        return (
          <div key={keyInput}>
            <input type="hidden" id="LD_img_handler1" value={res.LD_img} />
            <input type="hidden" id="LD_title_handler1" value={res.LD_title} />
            <input type="hidden" id="LD_dateFrom_handler1" value={res.LD_dateFrom} />
            <input type="hidden" id="LD_dateTo_handler1" value={res.LD_dateTo} />
            <input type="hidden" id="LD_hours_handler1" value={res.LD_hours} />
            <input type="hidden" id="LD_type_handler1" value={res.LD_type} />
            <input type="hidden" id="LD_sponsored_handler1" value={res.LD_sponsored} />
            <input type="hidden" id="LD_coverage_handler1" value={res.LD_coverage} />
            <input type="hidden" id="LD_category_handler1" value={res.LD_category} />
          </div>
        );
      }
    });

//Changing input in Edit Certificate
function changeInputEditCertificate(){
    var propsKey = document.getElementById("editCetificate_key").value;

    var imgInp = document.getElementById("LD_img_handler1").value;
    var NewimgInp = imgInp.split(" |:| ");  
    var img = "";
    for(var i = 0 ; i < NewimgInp.length ; i++){
        if(i == propsKey){
            NewimgInp[i] = document.getElementById("imgInput_holder").value;
        }
        img+= NewimgInp[i]+" |:| ";
    }
    document.getElementById("LD_img_handler1").value = img.slice(0, -5);  

    var titleInp = document.getElementById("LD_title_handler1").value;
    var NewtitleInp = titleInp.split(" |:| ");  
    var title = "";
    for(var i = 0 ; i < NewtitleInp.length ; i++){
        if(i == propsKey){
            NewtitleInp[i] = document.getElementById("edit_titleLD").value;
        }
        title+= NewtitleInp[i]+" |:| ";
    }
    document.getElementById("LD_title_handler1").value = title.slice(0, -5);  

    var fromInp = document.getElementById("LD_dateFrom_handler1").value;
    var NewfromInp = fromInp.split(" |:| ");  
    var from = ""
    for(var i = 0 ; i < NewfromInp.length ; i++){
        if(i == propsKey){
            NewfromInp[i] = document.getElementById("edit_dateFromLD").value;
        }
        from+= NewfromInp[i]+" |:| ";
    }
    document.getElementById("LD_dateFrom_handler1").value = from.slice(0, -5);  

    var toInp = document.getElementById("LD_dateTo_handler1").value;
    var NewtoInp = toInp.split(" |:| ");  
    var to = "";
    for(var i = 0 ; i < NewtoInp.length ; i++){
        if(i == propsKey){
            NewtoInp[i] = document.getElementById("edit_dateToLD").value;
        }
        to+= NewtoInp[i]+" |:| ";
    }
    document.getElementById("LD_dateTo_handler1").value = to.slice(0, -5);  

    var hoursInp = document.getElementById("LD_hours_handler1").value;
    var NewhoursInp = hoursInp.split(" |:| ");  
    var hours = "";
    for(var i = 0 ; i <  NewhoursInp.length ; i++){
        if(i == propsKey){
             NewhoursInp[i] = document.getElementById("edit_hoursLD").value;
        }
        hours+=  NewhoursInp[i]+" |:| ";
    }
    document.getElementById("LD_hours_handler1").value = hours.slice(0, -5); 
    
    var typeInp = document.getElementById("LD_type_handler1").value;
    var NewtypeInp = typeInp.split(" |:| ");  
    var type = "";
    for(var i = 0 ; i <  NewtypeInp.length ; i++){
        if(i == propsKey){
             NewtypeInp[i] = document.getElementById("edit_typeLD").value;
        }
        type+=  NewtypeInp[i]+" |:| ";
    }
    document.getElementById("LD_type_handler1").value = type.slice(0, -5); 

    var sponsorInp = document.getElementById("LD_sponsored_handler1").value;
    var NewsponsorInp = sponsorInp.split(" |:| ");  
    var sponsor = "";
    for(var i = 0 ; i <  NewsponsorInp.length ; i++){
        if(i == propsKey){
             NewsponsorInp[i] = document.getElementById("edit_sponsoredLD").value;
        }
        sponsor+=  NewsponsorInp[i]+" |:| ";
    }
    document.getElementById("LD_sponsored_handler1").value = sponsor.slice(0, -5); 

    var coverageInp = document.getElementById("LD_coverage_handler1").value;
    var NewcoverageInp = coverageInp.split(" |:| ");  
    var coverage = "";
    for(var i = 0 ; i <  NewcoverageInp.length ; i++){
        if(i == propsKey){
             NewcoverageInp[i] = document.getElementById("edit_coverageLD").value;
        }
        coverage+=  NewcoverageInp[i]+" |:| ";
    }
    document.getElementById("LD_coverage_handler1").value = coverage.slice(0, -5); 

    var categoryInp = document.getElementById("LD_category_handler1").value;
    var NewcategoryInp = categoryInp.split(" |:| ");  
    var category = "";
    for(var i = 0 ; i <  NewcategoryInp.length ; i++){
        if(i == propsKey){
             NewcategoryInp[i] = document.getElementById("edit_categoryLD").value;
        }
        category+=  NewcategoryInp[i]+" |:| ";
    }
    document.getElementById("LD_category_handler1").value = category.slice(0, -5); 
}

//Getting the value of all input when submitting the form
const submitForm=(e)=>{
    e.preventDefault();
    const data = new FormData();
                
       //Sending the data to my backend
       if(document.getElementById("imgInput_holder").value == "certificateTemplate.png"){
           document.getElementById("validator_uploadCert").style.display = "flex"
           document.getElementById("validator_uploadCertText").textContent = "You must upload a file to submit your certificate!"
           setTimeout(() => {
               var objDiv = document.getElementsByClassName("Upload_certificate_form")[0];
               objDiv.scrollTop = objDiv.scrollHeight;
           }, 50);
       }
       else if(document.getElementById("edit_titleLD").value == "" || document.getElementById("edit_dateFromLD").value == "" 
       || document.getElementById("edit_dateFromLD").value == "" || document.getElementById("edit_dateToLD").value == ""
       || document.getElementById("edit_hoursLD").value == "" || document.getElementById("edit_typeLD").value == ""
       || document.getElementById("edit_sponsoredLD").value == "" || document.getElementById("edit_coverageLD").value == "" 
       || document.getElementById("edit_categoryLD").value == ""){
           document.getElementById("validator_uploadCert").style.display = "flex"
           document.getElementById("validator_uploadCertText").textContent = "You must answer all the fields to submit your certificate!"
                   setTimeout(() => {
               var objDiv = document.getElementsByClassName("Upload_certificate_form")[0];
               objDiv.scrollTop = objDiv.scrollHeight;
           }, 50);
       }
       else if(document.getElementById("edit_dateFromLD").value > document.getElementById("edit_dateToLD").value && document.getElementById("edit_dateFromLD").value !=="" &&  document.getElementById("edit_dateToLD").value !==""){
           document.getElementById("validator_uploadCert").style.display = "flex"
           document.getElementById("validator_uploadCertText").textContent = "Inclusive dates of attendance are invalid range!"
                   setTimeout(() => {
               var objDiv = document.getElementsByClassName("Upload_certificate_form")[0];
               objDiv.scrollTop = objDiv.scrollHeight;
           }, 50);
       }
       else{
            //Sending the data request to call it on backend
           const sendData = {
               email_pds: localStorage.getItem("email"),
               LD_img_handler: document.getElementById("LD_img_handler1").value,
               LD_title_handler: document.getElementById("LD_title_handler1").value,
               LD_dateFrom_handler: document.getElementById("LD_dateFrom_handler1").value,
               LD_dateTo_handler: document.getElementById("LD_dateTo_handler1").value,
               LD_hours_handler: document.getElementById("LD_hours_handler1").value,
               LD_type_handler: document.getElementById("LD_type_handler1").value ,
               LD_sponsored_handler: document.getElementById("LD_sponsored_handler1").value,
               LD_coverage_handler: document.getElementById("LD_coverage_handler1").value,
               LD_category_handler: document.getElementById("LD_category_handler1").value,
           }

           console.log(sendData)
           axios.post('http://localhost/fms/editCertificate.php',sendData).then((result)=>{
               document.getElementsByClassName("success_modal_Editcertificate_container")[0].style.display = "flex";
           })//End of axios
           for (let i = 0; i < document.getElementsByName("imgLD[]").length; i++) {
               data.append("file[]", document.getElementsByName("imgLD[]")[i].files[0]);
           }
           let url = "http://localhost/fms/editCertificate.php";
           axios.post(url, data, {}).then((res) => {});
       }
   }
     

    return(
            <div className="certificates_container" id="edit_Certificate_Container">
                <h1>Edit a Certificate</h1>
    
                <form onSubmit={submitForm}>
                <div className="table_container" id="table_containerID">
                    <div className="Upload_certificate_form">

                        <div className="ceritificate_img">
                            <p>Upload your certificate (Required) :</p>
                            <input type="hidden" id="editCetificate_key"/>
                            <div className="img_container">
                                <img src={upload_imgIcon} className="upload_imgIcon certImg_toHide" style={{display:"none"}}/>
                                <p className="selectText certImg_toHide" style={{display:"none"}}>Select your certificate file</p>
                                <p className="selectText1 certImg_toHide" style={{textAlign:"center",fontSize:".8rem",color:"red",display:"none"}}>*No special characters and whitespaces for filename</p>
                                <p className="selectText1 certImg_toHide" style={{display:"none"}}>Only accepts JPG or PNG file</p>
                                <p className="selectText1 certImg_toHide" style={{textAlign:"center",fontSize:".8rem",display:"none"}}>Valid example : 1st_Seminar.png</p>
                                <button type="button" onClick={selectFile} className="certImg_toHide" style={{padding:"7px 20px",display:"none"}}>SELECT FILE</button>
                                <img src="" className="uploaded_certIMG" id="edit_certIMG" style={{display:"block"}}/>
                            </div>

                            <div id="selectFile_sub" style={{display:"flex"}}>
                                <button type="button" onClick={removeFile} style={{marginRight:"10px",border:"2px solid #fb4f46", color:"#ffff",backgroundColor:"#fb4f46"}}>REMOVE FILE</button>
                                <button type="button" onClick={selectFile} >SELECT FILE</button>
                                <input type="file" accept="image/png, image/jpeg" id="edit_image_file" name="imgLD[]" onChange={() => { loadfile(event);}}/>
                                <input type="hidden" id="imgInput_holder"/>
                            </div>
                    
                        </div>

                        
                        <Grid
                            className="gridUploadCertcont"
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
       

                        <TextField
                            label="Title of Learning and Development Interventions/Training Programs (Write in full)"
                            variant="outlined"
                            required
                            color="warning"
                            className="pds_inputEduc"
                            placeholder="FIELDS WITH * ARE REQUIRED"
                            inputProps={{ style: { textTransform: "capitalize" } }}
                            id="edit_titleLD"
                            onChange={changeInputEditCertificate}
                        />

                        <TextField
                            id="edit_dateFromLD"
                            className="pds_inputEducSemi"
                            label="Inclusive Dates of attendance (From)"
                            required
                            color="warning"
                            type="date"
                            inputProps={{ min: "1950-01-01", max: maxDateInput }}
                            InputLabelProps={{ shrink: true }}
                            onChange={changeInputEditCertificate}
                        />

                        <TextField
                            id="edit_dateToLD"
                            className="pds_inputEducSemi"
                            label="Inclusive Dates of attendance (To)"
                            required
                            color="warning"
                            type="date"
                            inputProps={{ min: "1950-01-01", max: maxDateInput }}
                            InputLabelProps={{ shrink: true }}
                            onChange={changeInputEditCertificate}
                        />
                        <TextField
                            label="Number of hours"
                            variant="outlined"
                            color="warning"
                            className="pds_inputEducSemi"
                            placeholder="FIELDS WITH * ARE REQUIRED"
                            required
                            inputProps={{ style: { textTransform: "uppercase" } }}
                            id="edit_hoursLD"
                            type="number"
                            onChange={changeInputEditCertificate}
                        />

                        <TextField
                            label="Type of LD (Managerial/ Supervisory/ Technical/ etc)"
                            variant="outlined"
                            color="warning"
                            className="pds_inputEducSemi2"
                            placeholder="FIELDS WITH * ARE REQUIRED"
                            required
                            inputProps={{ style: { textTransform: "uppercase" } }}
                            id="edit_typeLD"
                            onChange={changeInputEditCertificate}
                        />

                        <TextField
                            label="Conducted/ Sponsored By (Write in full)"
                            variant="outlined"
                            color="warning"
                            className="pds_inputEducSemi2"
                            placeholder="FIELDS WITH * ARE REQUIRED"
                            required
                            inputProps={{ style: { textTransform: "capitalize" } }}
                            id="edit_sponsoredLD"
                            style={{width:"100%"}}
                            onChange={changeInputEditCertificate}
                        />


                        <div className="dateSchool_input">
                            <label>Coverage *</label>
                            <select
                                id="edit_coverageLD"
                                className="add_inp11"
                                onChange={changeInputEditCertificate}
                            >
                            {LandDCoverage &&
                                LandDCoverage.length > 0 &&
                                LandDCoverage.map((item) =>
                                <option key={item.label} value={item.label}>
                                    {item.label}
                                </option>
                            )}
                             </select>
                        </div>

                        <div className="dateSchool_input">
                            <label>Category *</label>
                            <select
                                id="edit_categoryLD"
                                className="add_inp11"
                                onChange={changeInputEditCertificate}
                            >
                            {LandDCategory &&
                                LandDCategory.length > 0 &&
                                LandDCategory.map((item) =>
                                <option key={item.label} value={item.label}>
                                    {item.label}
                                </option>
                            )}
                             </select>
                        </div>

                        </Grid>

                        <div className="validator_uploadCert" id="validator_uploadCert">
                            <img src={error_info}/>
                            <p id="validator_uploadCertText"></p>
                        </div>
                    </div>

                    {input_keyForCertificates}
           
                    <div className="Upload_certificate_btn">
                        <button type="button"  onClick={() =>window.location.replace("http://localhost:3000/Certificates")}  >&#8592; &nbsp;&nbsp;&nbsp; Back</button>
                        <button type="submit" onMouseOver={changeInputEditCertificate}>Submit &nbsp;&nbsp;&nbsp; &#8594;</button>
                    </div> 
                </div>
                </form>   

        {/*Modal When done editing certificate*/}
      <div className="modal_container success_modal_Editcertificate_container">
        <div className="modal_validation">
          <img
            src={SuccessIcon}
            className="emailVal_img"
            style={{ boxShadow: "none", height: "10vh" }}
          />
          <h1 className="val_header">Congratulations</h1>
          <span className="val_subtext">
            You have successfully edited your certificate. Thank you!
          </span>


            <button
              className="modal_close_btn"
              id="success_close_modal"
              style={{ backgroundColor: "#249F5D" }}
              onClick={() =>window.location.replace("http://localhost:3000/Certificates")} 
            >
              Close
            </button>
 
        </div>
      </div>
            </div>
    )
}


//SELECT FILE BTN 
function selectFile(){
    document.getElementById('edit_image_file').click();
}

function removeFile(){
    document.getElementById("edit_certIMG").style.display = "none"
    document.getElementById("selectFile_sub").style.display="none";
    document.getElementById("edit_image_file").value = ""
    for(var i=0; i<document.getElementsByClassName("certImg_toHide").length ; i++){
        document.getElementsByClassName("certImg_toHide")[i].style.display = "block";
    }
    document.getElementById("imgInput_holder").value = "certificateTemplate.png";

}

/* eslint no-restricted-globals:0 */
function loadfile(event){
    document.getElementById("edit_certIMG").style.display = "block"
    for(var i=0; i<document.getElementsByClassName("certImg_toHide").length ; i++){
        document.getElementsByClassName("certImg_toHide")[i].style.display = "none";
    }

    var output=document.getElementById("edit_certIMG");
    output.src=URL.createObjectURL(event.target.files[0]);

    document.getElementById("selectFile_sub").style.display="flex";
    document.getElementById("imgInput_holder").value = document.getElementById("edit_image_file").files[0].name;
};

//LandD Category
const LandDCategory = [
    { label: "TRAINING" },
    { label: "SEMINAR" },
    { label: "WORKSHOP" },
  ];
  //LandD Coverage
  const LandDCoverage = [
    { label: "INTERNATIONAL" },
    { label: "NATIONAL" },
    { label: "REGIONAL" },
    { label: "LOCAL" },
  ];