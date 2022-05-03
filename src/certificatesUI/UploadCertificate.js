import React from "react";
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

export default function UploadCertificate(){
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
          <input type="hidden" id="LD_img_handler" value={res.LD_img} />
          <input type="hidden" id="LD_title_handler" value={res.LD_title} />
          <input type="hidden" id="LD_dateFrom_handler" value={res.LD_dateFrom} />
          <input type="hidden" id="LD_dateTo_handler" value={res.LD_dateTo} />
          <input type="hidden" id="LD_hours_handler" value={res.LD_hours} />
          <input type="hidden" id="LD_type_handler" value={res.LD_type} />
          <input type="hidden" id="LD_sponsored_handler" value={res.LD_sponsored} />
          <input type="hidden" id="LD_coverage_handler" value={res.LD_coverage} />
          <input type="hidden" id="LD_category_handler" value={res.LD_category} />
        </div>
      );
    }
  });


//Getting the value of all input when submitting the form
const submitForm=(e)=>{
 e.preventDefault();
 const data = new FormData();
             
    //Sending the data to my backend
    if(document.getElementById("image_file").files.length == 0){
        document.getElementById("validator_uploadCert").style.display = "flex"
        document.getElementById("validator_uploadCertText").textContent = "You must upload a file to submit your certificate!"
        setTimeout(() => {
            var objDiv = document.getElementsByClassName("Upload_certificate_form")[0];
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 50);
    }
    else if(document.getElementById("titleLD").value == "" || document.getElementById("dateFromLD").value == "" 
    || document.getElementById("dateFromLD").value == "" || document.getElementById("dateToLD").value == ""
    || document.getElementById("hoursLD").value == "" || document.getElementById("typeLD").value == ""
    || document.getElementById("sponsoredLD").value == "" || document.getElementById("coverageLD").value == "" 
    || document.getElementById("categoryLD").value == ""){
        document.getElementById("validator_uploadCert").style.display = "flex"
        document.getElementById("validator_uploadCertText").textContent = "You must answer all the fields to submit your certificate!"
                setTimeout(() => {
            var objDiv = document.getElementsByClassName("Upload_certificate_form")[0];
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 50);
    }
    else if(document.getElementById("dateFromLD").value > document.getElementById("dateToLD").value && document.getElementById("dateFromLD").value !=="" &&  document.getElementById("dateToLD").value !==""){
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
            LD_img_handler: document.getElementById("LD_img_handler").value += document.getElementById("image_file").files[0].name+" |:| ",
            LD_title_handler: document.getElementById("LD_title_handler").value += document.getElementById("titleLD").value+" |:| ",
            LD_dateFrom_handler: document.getElementById("LD_dateFrom_handler").value += document.getElementById("dateFromLD").value+" |:| ",
            LD_dateTo_handler: document.getElementById("LD_dateTo_handler").value += document.getElementById("dateToLD").value+" |:| ",
            LD_hours_handler: document.getElementById("LD_hours_handler").value += document.getElementById("hoursLD").value+" |:| ",
            LD_type_handler: document.getElementById("LD_type_handler").value +=  document.getElementById("typeLD").value+" |:| ",
            LD_sponsored_handler: document.getElementById("LD_sponsored_handler").value +=document.getElementById("sponsoredLD").value+" |:| ",
            LD_coverage_handler: document.getElementById("LD_coverage_handler").value += document.getElementById("coverageLD").value+" |:| ",
            LD_category_handler: document.getElementById("LD_category_handler").value += document.getElementById("categoryLD").value+" |:| ",
        }
        axios.post('http://localhost/fms/uploadCertificate.php',sendData).then((result)=>{
            document.getElementsByClassName("success_modal_certificate_container")[0].style.display = "flex";
        })//End of axios
        for (let i = 0; i < document.getElementsByName("imgLD[]").length; i++) {
            data.append("file[]", document.getElementsByName("imgLD[]")[i].files[0]);
        }
        let url = "http://localhost/fms/uploadCertificate.php";
        axios.post(url, data, {}).then((res) => {});
    }
}
  
    return(
        <div className="dashboard_container">

        <LeftNavbarFaculty />

        <div className="main_content">
            <NavbarSizer />

            <div className="certificates_container">
                <h1>Upload a Certificate</h1>

                <form onSubmit={submitForm}>
                <div className="table_container" id="table_containerID">
                    <div className="Upload_certificate_form">

                        <div className="ceritificate_img">
                            <p>Upload your certificate (Required) :</p>
                            <div className="img_container">
                                <img src={upload_imgIcon} className="upload_imgIcon certImg_toHide"/>
                                <p className="selectText certImg_toHide">Select your certificate file</p>
                                <p className="selectText1 certImg_toHide">Only accepts JPG or PNG file</p>
                                <button type="button" onClick={selectFile} className="certImg_toHide" style={{padding:"7px 20px"}}>SELECT FILE</button>

                                <img src="" className="uploaded_certIMG" id="uploaded_certIMG"/>
                            </div>

                            <div id="selectFile_sub">
                                <button type="button" onClick={removeFile} style={{marginRight:"10px",border:"2px solid #fb4f46", color:"#ffff",backgroundColor:"#fb4f46"}}>REMOVE FILE</button>
                                <button type="button" onClick={selectFile} >SELECT FILE</button>
                                <input type="file" accept="image/png, image/jpeg" id="image_file" name="imgLD[]" onChange={() => { loadfile(event);}}/>
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
                            id="titleLD"
                        />

                        <TextField
                            id="dateFromLD"
                            className="pds_inputEducSemi"
                            label="Inclusive Dates of attendance (From)"
                            required
                            color="warning"
                            type="date"
                            inputProps={{ min: "1950-01-01", max: maxDateInput }}
                            InputLabelProps={{ shrink: true }}
                        />

                        <TextField
                            id="dateToLD"
                            className="pds_inputEducSemi"
                            label="Inclusive Dates of attendance (To)"
                            required
                            color="warning"
                            type="date"
                            inputProps={{ min: "1950-01-01", max: maxDateInput }}
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            label="Number of hours"
                            variant="outlined"
                            color="warning"
                            className="pds_inputEducSemi"
                            placeholder="FIELDS WITH * ARE REQUIRED"
                            required
                            inputProps={{ style: { textTransform: "uppercase" } }}
                            id="hoursLD"
                            type="number"
                        />

                        <TextField
                            label="Type of LD (Managerial/ Supervisory/ Technical/ etc)"
                            variant="outlined"
                            color="warning"
                            className="pds_inputEducSemi2"
                            placeholder="FIELDS WITH * ARE REQUIRED"
                            required
                            inputProps={{ style: { textTransform: "uppercase" } }}
                            id="typeLD"
                        />

                        <TextField
                            label="Conducted/ Sponsored By (Write in full)"
                            variant="outlined"
                            color="warning"
                            className="pds_inputEducSemi2"
                            placeholder="FIELDS WITH * ARE REQUIRED"
                            required
                            inputProps={{ style: { textTransform: "capitalize" } }}
                            id="sponsoredLD"
                        />

                        <Autocomplete
                            options={LandDCoverage}
                            className="pds_inputEducSemi2"
                            id="coverageLD"
                            renderInput={(params) => (
                            <TextField
                                color="warning"
                                placeholder="FIELDS WITH * ARE REQUIRED"
                                required
                                {...params}
                                label="Coverage"
                            />
                            )}
                        />

                        <Autocomplete
                            options={LandDCategory}
                            className="pds_inputEducSemi2"
                            id="categoryLD"
                            renderInput={(params) => (
                            <TextField
                                color="warning"
                                placeholder="FIELDS WITH * ARE REQUIRED"
                                required
                                {...params}
                                label="Category"
                             />
                            )}
                        />
                        </Grid>

                        <div className="validator_uploadCert" id="validator_uploadCert">
                            <img src={error_info}/>
                            <p id="validator_uploadCertText"></p>
                        </div>


                    </div>
                    {input_keyForCertificates}
                    <div className="Upload_certificate_btn">
                        <button type="button" onClick={() =>window.location.replace("http://localhost:3000/Certificates")} >&#8592; &nbsp;&nbsp;&nbsp; Back</button>
                        <button type="submit">Submit &nbsp;&nbsp;&nbsp; &#8594;</button>
                    </div> 
                </div>
                </form>   
            </div>
   
        </div>

        <RightNavbar/>

      {/*Modal When done uploading certificate*/}
      <div className="modal_container success_modal_certificate_container">
        <div className="modal_validation">
          <img
            src={SuccessIcon}
            className="emailVal_img"
            style={{ boxShadow: "none", height: "10vh" }}
          />
          <h1 className="val_header">Congratulations</h1>
          <span className="val_subtext">
            You have successfully uploaded your certificate. Thank you!
          </span>

          <Link to="/Certificates" style={{ textDecoration: "none" }}>
            <button
              className="modal_close_btn"
              id="success_close_modal"
              style={{ backgroundColor: "#249F5D" }}
            >
              Close
            </button>
          </Link>
        </div>
      </div>

    </div>
    )
}

//SELECT FILE BTN 

function selectFile(){
    document.getElementById('image_file').click();
}

function removeFile(){
    document.getElementById("uploaded_certIMG").style.display = "none"
    document.getElementById("selectFile_sub").style.display="none";
    document.getElementById("image_file").value = ""
    for(var i=0; i<document.getElementsByClassName("certImg_toHide").length ; i++){
        document.getElementsByClassName("certImg_toHide")[i].style.display = "block";
    }
}

/* eslint no-restricted-globals:0 */
function loadfile(event){
    document.getElementById("uploaded_certIMG").style.display = "block"
    for(var i=0; i<document.getElementsByClassName("certImg_toHide").length ; i++){
        document.getElementsByClassName("certImg_toHide")[i].style.display = "none";
    }

    var output=document.getElementById("uploaded_certIMG");
    output.src=URL.createObjectURL(event.target.files[0]);

    document.getElementById("selectFile_sub").style.display="flex";
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