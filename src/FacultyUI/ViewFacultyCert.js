import React from "react";
import '../css/certificate.css';
import NavbarSizer from "../navbarsUI/NavbarSizer";
import EachCertificate from "../certificatesUI/EachCertificate";
import TableRowCertificate from "../certificatesUI/TableCertificate";
import TableCertificateMobile from "../certificatesUI/TableCertificateMobile";
import no_record_icon from "../images/no_record_icon.png";
import CertificateTopActions from "../certificatesUI/CertificateTopButton";
import NavbarAdmin from "../navbarsUI/LeftNavbarAdmin";
import RightNavbarAdmin from "../navbarsUI/RightNavbarAdmin";
import cover_banner from "../images/pds_cover.png";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import downloadyellow_icon from "../images/icons/download_yellow.svg";
import TopCertBtn from "../viewcertificateUI/TopCertBtn";
import EachCertView from "../viewcertificateUI/EachCertView";
import TableRowCertificateView from "../viewcertificateUI/TableRowCertificateView";


export default function ViewFacultyCert() {

  //for getting the initial name in avatar
  let initialName = localStorage.getItem("viewFacultyName").charAt(0);
  let profile_photo =
    "http://localhost/fms/upload_profile/" +
    localStorage.getItem("viewFacultyPhoto");


    document.title = "CICT | "+localStorage.getItem("viewFacultyName");

  return (
    <div className="dashboard_container">
        <NavbarAdmin/>

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
                    <p className="view_pdsName">
                      {localStorage.getItem("viewFacultyName")}
                    </p>
                    <p className="view_pdsEmail">
                      {localStorage.getItem("viewFacultyEmail")}
                    </p>
                  </div>
                </div>
                <div className="right">
                  <div className="cover_button">
                    <form>
                    <button
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


   
        </div>

        <RightNavbarAdmin/>
    </div>
  );
}
