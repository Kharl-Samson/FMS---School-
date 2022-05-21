import React from "react";
import '../css/previewPDS.css';
import bulsu_icon from "../images/bulsu_icon.png";
import CICT_Logo from "../images/login/cict_logo.png";

export default function TestPDF(){
return(
<div className="pds_review_container"> 
    <div className="pds_preview" id="convertable_pdf_PDS">
        <div className="top">
              <div>
                  <p className="nameOfschool">Bulacan State University</p>
                  <div className="header">COLLEGE OF INFORMATION AND</div>
                  <div className="header1">COMMUNICATION TECHNOLOGY</div>
              </div>
              <div>
                  <img src={bulsu_icon} style={{marginRight:"30px"}}/> 
                  <img src={CICT_Logo}/> 
              </div>
        </div>

        <div className="pds_header">
            <p className="pds_header_p">CS Form No. 212</p>
            <p className="pds_header_p">Revised 2017</p>
            <div className="pds_text">PERSONAL DATA SHEET</div>
            <p className="pds_warning">WARNING: Any misrepresentation made in the Personal Data Sheet and the Work Experience Sheet shall cause the filing of administrative/criminal case/s against the person concerned.</p>
        </div>

        <div className="pds_th">
            <span>I. PERSONAL INFORMATION</span>
        </div>

        <div className="pds_row">
            <div className="left">
                <div className="cont"><span>SURNAME</span></div>
                <div className="cont"><span>FIRST NAME</span></div>
                <div className="cont"><span>MIDDLE NAME</span></div>
            </div>
            <div className="right">
                <div className="cont"><span>SAMSON</span></div>
                <div className="cont">
                    <div><span>KHARL NOEL</span></div>
                    <div className="name_ex">
                        <span>NAME EXTENSION (JR., SR)</span>
                        <span>N/A</span>
                    </div>
                </div>
                <div className="cont"><span>DELA CRUZ</span></div>
            </div>
        </div>

        <div className="pds_row1">
            <div className="row1">
                <div className="cont">
                    <span>DATE OF BIRTH</span>
                    <span>(mm/dd/yyyy)</span>
                </div>
                <div className="cont"><span>PLACE OF BIRTH</span></div>
                <div className="cont"><span>SEX</span></div>
            </div>
            <div className="row2">
                <div className="cont"><span>2/11/1988</span></div>
                <div className="cont"><span>DASMARINAS, CAVITE</span></div>
                <div className="cont"><span>MALE</span></div>
            </div>
            <div className="row3">
                 <span>CITIZENSHIP</span>
                 <span>If holder of  dual citizenship, please indicate the details.</span>
            </div>
            <div className="row4">
                FILIPINO
            </div>

        </div>

    </div>
</div>
)
}