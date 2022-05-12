import React from "react";
import '../css/certificate.css';
import NavbarSizer from "../navbarsUI/NavbarSizer";
import TableCertificateMobile from "../certificatesUI/TableCertificateMobile";
import no_record_icon from "../images/no_record_icon.png";
import NavbarAdmin from "../navbarsUI/LeftNavbarAdmin";
import RightNavbarAdmin from "../navbarsUI/RightNavbarAdmin";
import cover_banner from "../images/pds_cover.png";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import downloadyellow_icon from "../images/icons/download_yellow.svg";
import TopCertBtn from "../viewcertificateUI/TopCertBtn";
import EachCertView from "../viewcertificateUI/EachCertView";
import TableRowCertificateView from "../viewcertificateUI/TableRowCertificateView";
import CertificateUserPDF from "./CertificateUserPDF";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import profile_lock from "../images/icons/profile_lock.svg";
import profile_lockOthers from "../images/profile_lock.png";

export default function ViewFacultyCert() {
    //Tooltip
    const LightTooltip = styled(({ className, ...props }) => (
      <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: theme.shadows[1],
        fontSize: ".8rem",
      },
    }));

  //for getting the initial name in avatar
  let initialName = localStorage.getItem("viewFacultyName").charAt(0);
  let profile_photo =
    "http://localhost/fms/upload_profile/" +
    localStorage.getItem("viewFacultyPhoto");


    document.title = "CICT | "+localStorage.getItem("viewFacultyName");

    const downloadCertificateUserForm=(e)=>{
      e.preventDefault();

      if(localStorage.getItem('isProfileLocked')=="yes"){
        document.getElementById("profileLocked_modal").style.display = "flex";
      }
      else{
        //Sending the data request to call it on backend
        const sendData = {
          email:localStorage.getItem('email'),
          viewEmail:localStorage.getItem('viewFacultyEmail'),
          viewName:localStorage.getItem('viewFacultyName'),
        }
        //Sending the data to my backend
        axios.post('http://localhost/fms/downloadCertificateUsers.php',sendData)
        .then((result)=>{})    
      }
    }

  //Hook for getting all certificates
  const [getAllUser, setGetAllUser] = useState([]);
  const loadGetAllUser = async () => {
    const result = await axios.get("http://localhost/fms/getAllUser.php");
    setGetAllUser(result.data.phpresult);
  };
  useEffect(() => {
    loadGetAllUser();
  }, []);

  //getting the email of user
  let email_key = localStorage.getItem("viewFacultyEmail");
  var input_keyForGetUser_ctr = 0;
  const profileLockContent = getAllUser.map((res) => {
    if (res.email == email_key && res.profile_locked !="") {
      window.localStorage.setItem('isProfileLocked', "yes");
      input_keyForGetUser_ctr++;
      return (
        <LightTooltip title="This person's profile is locked. It means you can't download his/her information." key={input_keyForGetUser_ctr}>
          <img src={profile_lock} id="profile_lockIMG" 
          style={{
            height:"25px",
            width:"auto",
            marginLeft:"7px"
          }}/>
        </LightTooltip>
      );
    }
    else if (res.email == email_key && res.profile_locked ==""){
      window.localStorage.setItem('isProfileLocked', "no");
    }
  });

  function closeProfileLockModal(){
    document.getElementById("profileLocked_modal").style.display = "none";
  }

  return (
    <div className="dashboard_container">
        <NavbarAdmin/>

          {/*Modal*/ }
          <div className="modal_container" id="profileLocked_modal">
            <div className="modal_validation">
                <img src={profile_lockOthers} className="emailVal_img" style={{boxShadow:"none"}}/>
                <h1 className="val_header">Profile is Locked</h1>
                <span className="val_subtext">This person's profile is locked. It means you can't download his/her certificates.</span>
                <button className="modal_close_btn" onClick={closeProfileLockModal}>Okay</button>
            </div>
          </div>


        <div className="main_content">
            <NavbarSizer />

            <div className="certificates_container" id="certificates_container">
            <div
              className="top_cover"
              style={{ backgroundImage: `url(${cover_banner})` }}
            >
              <p>CERTIFICATIONS</p>
              <div className="avatar_container">
                <div className="left">
                  <Avatar
                    className="my_avatarbig"
                    src={profile_photo}
                    sx={{
                      bgcolor: deepOrange[600],
                      width: "200px",
                      height: "200px",
                      fontSize: "5rem",
                      border: "2px solid #ffff",
                      borderRadius: "5px",
                    }}
                    variant="square"
                  >
                    {initialName}
                  </Avatar>
                  <div className="pds_contact">
                    <p className="view_pdsName" style={{display:"flex",alignItems:"center"}}>
                      {localStorage.getItem("viewFacultyName")}
                      {profileLockContent}
                    </p>
                    <p className="view_pdsEmail">
                      {localStorage.getItem("viewFacultyEmail")}
                    </p>
                  </div>
                </div>
                <div className="right">
                  <div className="cover_button">
                    <form onClick={downloadCertificateUserForm}>
                    <button
                      onClick={printDocument}
                      type="submit"
                    >
                      <img src={downloadyellow_icon} />
                      Download as PDF
                    </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

                
                <div className="table_container" id="table_containerID" style={{marginBottom:"5rem"}}>
                    <TopCertBtn/>
                    
                    <div className="certficate_scrollable" id="grid_table"> 
                        <EachCertView/>
                        <div className="no_searchFound">
                            <img src={no_record_icon}/>
                            <p>No Certificate Available!</p>
                        </div>
                    </div>

                    <div className="certficate_scrollable1" id="row_table" style={{display:"none"}}>
                        <TableRowCertificateView/>
                    </div>

                    <div className="certificate_scrollable_mobile" id="rowMobile_table" style={{display:"none"}}>
                        <TableCertificateMobile/>
                        <div className="no_searchFound2">
                            <img src={no_record_icon}/>
                            <p>No Certificate Available!</p>
                        </div>
                    </div>  
                </div>
            </div>

          <CertificateUserPDF/>
   
        </div>

        <RightNavbarAdmin/>
    </div>
  );
}


//Printing certificate
function printDocument() {
  if(localStorage.getItem('isProfileLocked')=="yes"){}
  else{   
  html2canvas(document.querySelector("#convertableCertUser_pdf"), {
    useCORS: true,
    allowTaint: true,
    scrollY: 0,
  }).then((canvas) => {
    const image = { type: "png", quality: 0.98 };
    const margin = [0.5, 0.5];
    const filename = "MyCertificates.pdf";
    var imgWidth = 8.5;
    var pageHeight = 11;
    var innerPageWidth = imgWidth - margin[0] * 2;
    var innerPageHeight = pageHeight - margin[1] * 2;
    // Calculate the number of pages.
    var pxFullHeight = canvas.height;
    var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
    var nPages = Math.ceil(pxFullHeight / pxPageHeight);
    // Define pageHeight separately so it can be trimmed on the final page.
    var pageHeight = innerPageHeight;
    // Create a one-page canvas to split up the full image.
    var pageCanvas = document.createElement("canvas");
    var pageCtx = pageCanvas.getContext("2d");
    pageCanvas.width = canvas.width;
    pageCanvas.height = pxPageHeight;
    // Initialize the PDF.
    var pdf = new jsPDF("p", "in", [8.5, 11]);
    for (var page = 0; page < nPages; page++) {
      // Trim the final page to reduce file size.
      if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
        pageCanvas.height = pxFullHeight % pxPageHeight;
        pageHeight = (pageCanvas.height * innerPageWidth) / pageCanvas.width;
      }
      // Display the page.
      var w = pageCanvas.width;
      var h = pageCanvas.height;
      pageCtx.fillStyle = "white";
      pageCtx.fillRect(0, 0, w, h);
      pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);
      // Add the page to the PDF.
      if (page > 0) pdf.addPage();
      debugger;
      var imgData = pageCanvas.toDataURL(
        "image/" + image.type,
        image.quality
      );
      pdf.addImage(
        imgData,
        image.type,
        margin[1],
        margin[0],
        innerPageWidth,
        pageHeight
      );
    }
    pdf.save(filename);
  });
  }
}