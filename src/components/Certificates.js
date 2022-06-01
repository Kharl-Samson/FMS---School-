import React from "react";
import '../css/certificate.css';
import LeftNavbarFaculty from "../navbarsUI/LeftNavbarFaculty";
import NavbarSizer from "../navbarsUI/NavbarSizer";
import RightNavbar from "../navbarsUI/RightNavbar";
import EachCertificate from "../certificatesUI/EachCertificate";
import TableRowCertificate from "../certificatesUI/TableCertificate";
import TableCertificateMobile from "../certificatesUI/TableCertificateMobile";
import no_record_icon from "../images/no_record_icon.png";
import CertificateTopActions from "../certificatesUI/CertificateTopButton";
import EditCertificate from "../certificatesUI/EditCertificate";

export default function Certificates() {

    setTimeout(function(){
        document.getElementById("certificate_link").classList.add('nav_active');
        document.getElementById("link_certificate").style.pointerEvents="none";
    },10);

  return (
    <div className="dashboard_container">
        <LeftNavbarFaculty />

        <div className="main_content">
            <NavbarSizer />

            <div className="certificates_container" id="certificates_container">
                <h1>Certificates</h1>
                
                <div className="table_container" id="table_containerID">
                    <CertificateTopActions/>

                    <div className="certficate_scrollable" id="grid_table"> 
                        <EachCertificate/>
                        <div className="no_searchFound">
                            <img src={no_record_icon}/>
                            <p>No Certificate Available!</p>
                        </div>
                    </div>

                    <div className="certficate_scrollable1" id="row_table" style={{display:"none"}}>
                        <TableRowCertificate/>
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

            <EditCertificate/>
   
        </div>

        <RightNavbar/>
    </div>
  );
}
