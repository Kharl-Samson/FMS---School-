import React from "react";
import '../css/previewPDS.css';
import bulsu_icon from "../images/bulsu_icon.png";
import CICT_Logo from "../images/login/cict_logo.png";

export default function TestPDF(){
return(
<div className="pds_review_container"> 
    <div className="pds_preview" id="convertable_pdf_PDS">


<div id="page_Separator">
        <div className="pds_header">
            <p className="pds_header_p">CS Form No. 212</p>
            <p className="pds_header_p">Revised 2017</p>
            <div className="pds_text">PERSONAL DATA SHEET</div>
            <p className="pds_warning">WARNING: Any misrepresentation made in the Personal Data Sheet and the Work Experience Sheet shall cause the filing of administrative/criminal case/s against the person concerned.</p>
        </div>

        <div className="pds_th">
            <span>I. PERSONAL INFORMATION</span>
        </div>

    {/*STEP1 */}
    <div>
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

        <div className="pds_row2">
            <div className="row1">
                <div className="cont"><span>CIVIL STATUS</span></div>
                <div className="cont"><span>HEIGHT (m)</span></div>
                <div className="cont"><span>WEIGHT (kg)</span></div>
            </div>
            <div className="row2">
                <div className="cont"><span>SINGLE</span></div>
                <div className="cont"><span>1.651</span></div>
                <div className="cont"><span>55 Kg</span></div>
            </div>
            <div className="row3">
                <div className="cont"><span>RESIDENTIAL ADDRESS</span></div>
                <div className="cont"><span>ZIP CODE</span></div>
            </div>
            <div className="row4">
                <div className="cont">
                    <div className="left_right">
                        <div>526</div>
                        <div>House/Block/Lot No.</div>
                    </div>
                    <div className="left_right">
                        <div>BAGONG SILANG</div>
                        <div>Street</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="left_right">
                        <div>N/A</div>
                        <div>Subdivision/Village</div>
                    </div>
                    <div className="left_right">
                        <div>PINAGBARILAN</div>
                        <div>Barangay</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="left_right">
                        <div>BALIUAG</div>
                        <div>City/Municipality</div>
                    </div>
                    <div className="left_right">
                        <div>BULACAN</div>
                        <div>Province</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="zip_code">3006</div>
                </div>
            </div>
        </div>

        <div className="pds_row3">
            <div className="row1">
                <div className="cont"><span>BLOOD TYPE</span></div>
                <div className="cont"><span>GSIS ID NO.</span></div>
                <div className="cont"><span>PAG-IBIG ID NO.</span></div>
                <div className="cont"><span>PHILHEALTH NO.</span></div>
            </div>
            <div className="row2">
                <div className="cont"><span>A+</span></div>
                <div className="cont"><span>N/A (GSIS)</span></div>
                <div className="cont"><span>N/A (PAG-IBIG)</span></div>
                <div className="cont"><span>N/A (PHILHEALTH)</span></div>
            </div>
            <div className="row3">
                <div className="cont"><span>PERMANENT ADDRESS</span></div>
                <div className="cont"><span>ZIP CODE</span></div>
            </div>

            <div className="row4">
                <div className="cont">
                    <div className="left_right">
                        <div>526</div>
                        <div>House/Block/Lot No.</div>
                    </div>
                    <div className="left_right">
                        <div>BAGONG SILANG</div>
                        <div>Street</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="left_right">
                        <div>N/A</div>
                        <div>Subdivision/Village</div>
                    </div>
                    <div className="left_right">
                        <div>PINAGBARILAN</div>
                        <div>Barangay</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="left_right">
                        <div>BALIUAG</div>
                        <div>City/Municipality</div>
                    </div>
                    <div className="left_right">
                        <div>BULACAN</div>
                        <div>Province</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="zip_code">3006</div>
                </div>
            </div>
        </div>

        <div className="pds_row4">
            <div className="row1">
                <div className="cont"><span>SSS NO.</span></div>
                <div className="cont"><span>TIN NO.</span></div>
                <div className="cont"><span>AGENCY EMPLOYEE NO.</span></div>
            </div>
            <div className="row2">
                <div className="cont"><span>N/A (SSS)</span></div>
                <div className="cont"><span>N/A (TIN NO)</span></div>
                <div className="cont"><span>N/A (EMPLOYEE NO)</span></div>
            </div>
            <div className="row3">
                <div className="cont"><span>TELEPHONE NO.</span></div>
                <div className="cont"><span>MOBILE NO.</span></div>
                <div className="cont"><span>E-MAIL ADDRESS</span></div>
            </div>
            <div className="row4">
                <div className="cont"><span style={{textTransform:"uppercase",fontWeight:"600"}}>N/A</span></div>
                <div className="cont"><span style={{textTransform:"uppercase"}}>09196714289</span></div>
                <div className="cont"><span>khrlsmsn1110@gmail.com</span></div>
            </div>
        </div>    
    </div>

    
        <div className="pds_th">
            <span>II. EDUCATIONAL BACKGROUND</span>
        </div>

        <div className="pds_educatiion_row">
            <div className="row1"><span>LEVEL</span></div>
            <div className="row2">
                <span>NAME OF SCHOOL</span>
                <span>(Write in full)</span>
            </div>
            <div className="row3">
                <span>BASIC EDUCATION / DEGREE / COURSE</span>
                <span>(Write in full)</span>
            </div>
            <div className="row4">
                <div className="top1"><span>PERIOD OF ATTENDANCE</span></div>
                <div className="bot">
                    <div className="from">From</div>
                    <div className="to">To</div>
                </div>
            </div>
            <div className="row5">
                <span>HIGHEST LEVEL / UNITS EARNED</span>
                <span>(If not graduated)</span>
            </div>
            <div className="row6">
                <span>YEAR GRADUATED</span>
            </div>
            <div className="row7">
                <span>SCHOLARSHIP / ACADEMIC HONORS RECEIVED</span>
            </div>
        </div>

        {/*ELEMENTARY*/}
        <div className="pds_educatiion_row pds_educatiion_row1">
            <div className="left">
                <div className="row1" style={{borderRight:"none"}}>
                    <span>ELEMENTARY</span>
                </div>
            </div>

            <div className="right">

            {/*CONTENT OF EACH ENTRY*/}
            <div className="educ_secRow">
                <div className="row2">
                    <span>MARIANO PONCE HIGH SCHOOL</span>
                </div>
                <div className="row3">
                    <span>JUNIOR HIGH SCHOOL</span>
                </div>
                <div className="row4">
                    <div className="bot">
                        <div className="from"><span>2006</span></div>
                        <div className="to"><span>2012</span></div>
                    </div>
                </div>
                <div className="row5">
                    <span>GRADUATED</span>
                </div>
                <div className="row6">
                    <span>2012</span>
                </div>
                <div className="row7">
                    <span>8TH HONORABLE MENTION</span>
                </div>
            </div> 

            </div>

        </div>

        {/*SECONDARY*/}
        <div className="pds_educatiion_row pds_educatiion_row1">
            <div className="left">
                <div className="row1" style={{borderRight:"none"}}>
                    <span>SECONDARY</span>
                </div>
            </div>

            <div className="right">

            {/*CONTENT OF EACH ENTRY*/}
            <div className="educ_secRow">
                <div className="row2">
                    <span>MARIANO PONCE HIGH SCHOOL</span>
                </div>
                <div className="row3">
                    <span>JUNIOR HIGH SCHOOL</span>
                </div>
                <div className="row4">
                    <div className="bot">
                        <div className="from">2006</div>
                        <div className="to">2012</div>
                    </div>
                </div>
                <div className="row5">
                    <span>GRADUATED</span>
                </div>
                <div className="row6">
                    <span>2012</span>
                </div>
                <div className="row7">
                    <span>8TH HONORABLE MENTION</span>
                </div>
            </div> 

            <div className="educ_secRow">
                <div className="row2">
                    <span>MARIANO PONCE HIGH SCHOOL</span>
                </div>
                <div className="row3">
                    <span>SENIOR HIGH SCHOOL</span>
                </div>
                <div className="row4">
                    <div className="bot">
                        <div className="from">2006</div>
                        <div className="to">2012</div>
                    </div>
                </div>
                <div className="row5">
                    <span>GRADUATED</span>
                </div>
                <div className="row6">
                    <span>2012</span>
                </div>
                <div className="row7">
                    <span>8TH HONORABLE MENTION</span>
                </div>
            </div> 

            </div>

        </div>

        {/*VOCATIONAL*/}
        <div className="pds_educatiion_row pds_educatiion_row1">
            <div className="left">
                <div className="row1" style={{borderRight:"none"}}>
                    <span>VOCATIONAL / TRADE COURSE</span>
                </div>
            </div>

            <div className="right">

            {/*CONTENT OF EACH ENTRY*/}
            <div className="educ_secRow">
                <div className="row2">
                    <span>N/A</span>
                </div>
                <div className="row3">
                    <span>N/A</span>
                </div>
                <div className="row4">
                    <div className="bot">
                        <div className="from">N/A</div>
                        <div className="to">N/A</div>
                    </div>
                </div>
                <div className="row5">
                    <span>N/A</span>
                </div>
                <div className="row6">
                    <span>N/A</span>
                </div>
                <div className="row7">
                    <span>N/A</span>
                </div>
            </div> 

            </div>

        </div>

        {/*COLLEGE*/}
        <div className="pds_educatiion_row pds_educatiion_row1">
            <div className="left">
                <div className="row1" style={{borderRight:"none"}}>
                    <span>COLLEGE</span>
                </div>
            </div>

            <div className="right">

            {/*CONTENT OF EACH ENTRY*/}
            <div className="educ_secRow">
                <div className="row2">
                    <span>N/A</span>
                </div>
                <div className="row3">
                    <span>N/A</span>
                </div>
                <div className="row4">
                    <div className="bot">
                        <div className="from">N/A</div>
                        <div className="to">N/A</div>
                    </div>
                </div>
                <div className="row5">
                    <span>N/A</span>
                </div>
                <div className="row6">
                    <span>N/A</span>
                </div>
                <div className="row7">
                    <span>N/A</span>
                </div>
            </div> 

            </div>

        </div>

        {/*GRADUATE STUDIES*/}
        <div className="pds_educatiion_row pds_educatiion_row1">
            <div className="left">
                <div className="row1" style={{borderRight:"none"}}>
                    <span>GRADUATE STUDIES</span>
                </div>
            </div>

            <div className="right">

            {/*CONTENT OF EACH ENTRY*/}
            <div className="educ_secRow">
                <div className="row2">
                    <span>N/A</span>
                </div>
                <div className="row3">
                    <span>N/A</span>
                </div>
                <div className="row4">
                    <div className="bot">
                        <div className="from">N/A</div>
                        <div className="to">N/A</div>
                    </div>
                </div>
                <div className="row5">
                    <span>N/A</span>
                </div>
                <div className="row6">
                    <span>N/A</span>
                </div>
                <div className="row7">
                    <span>N/A</span>
                </div>
            </div> 
            </div>

        </div>
</div>


<div id="page_Separator">
        <div className="pds_th">
            <span>III. CIVIL SERVICE ELIGIBILITY</span>
        </div>

        <div className="pds_cse_row">
            <div className="row1">
                <span>CAREER SERVICE/ RA 1080 (BOARD/ BAR) UNDER SPECIAL LAWS/ CES/ CSEE BARANGAY ELIGIBILITY / DRIVER'S LICENSE</span>
            </div>
            <div className="row2">
                <span>RATING</span>
                <span>(If Applicable)</span>
            </div>
            <div className="row3">
                <span>DATE OF EXAMINATION / CONFERMENT</span>
            </div>
            <div className="row4">
                <span>PLACE OF EXAMINATION / CONFERMENT</span>
            </div>
            <div className="row5">
                <div className="top_cse">
                    <span>LICENSE (if applicable)</span>
                </div>
                <div className="bot_cse">
                    <div className="lr_cse"><span>NUMBER</span></div>
                    <div className="lr_cse"><span>Date of Validity</span></div>
                </div>
            </div>
        </div>

        <div className="pds_cse_row pds_cse_row1">
            <div className="row1">
                <span>NATIONAL CERTIFICATION III IN VISUAL GRAPHICS DESIGN</span>
            </div>
            <div className="row2">
                <span>PASSED</span>
            </div>
            <div className="row3">
                <span>10/10/2015</span>
            </div>
            <div className="row4">
                <span>PHILCOMTECH BALAGTAS INC.</span>
            </div>
            <div className="row5">
                <div className="bot_cse">
                    <div className="lr_cse"><span>15031503008110</span></div>
                    <div className="lr_cse"><span>10/23/2020</span></div>
                </div>
            </div>
        </div>

        <div className="pds_th">
            <span>IV. WORK EXPERIENCE</span>
            <span style={{fontSize:".75rem",marginTop:"5px"}}>(Include private employment. Start from your recent work) Description of duties should be indicated in the attached Work Experience sheet.</span>
        </div>

        <div className="pds_we_row">
            <div className="row1">
                <div className="top1"><span>INCLUSIVE DATES  (mm/dd/yyyy)</span></div>
                <div className="bot">
                    <div className="from"><span>From</span></div>
                    <div className="to"><span>To</span></div>
                </div>
            </div>
            <div className="row2">
                <span>POSITION TITLE</span>
                <span>(Write in full / Do not abbreviate)</span>
            </div>
            <div className="row3">
                <span>DEPARTMENT / AGENCY / OFFICE / COMPANY</span>
                <span>(Write in full / Do not abbreviate)</span>
            </div>
            <div className="row4">
                <span>MONTHLY SALARY</span>
            </div>
            <div className="row5">
                <span>SALARY/ JOB/ PAY GRADE (if applicable) & STEP  (Format "00-0")/ INCREMENT</span>
            </div>
            <div className="row6">
                <span>STATUS OF APPOINTMENT</span>
            </div>
            <div className="row7">
                <span>GOV'T SERVICE</span>
                <span>(Y/ N)</span>
            </div>
        </div>

        <div className="pds_we_row pds_we_row1">
            <div className="row1">
                <div className="bot bot1">
                    <div className="from"><span>8/8/2016</span></div>
                    <div className="to"><span>8/8/2016</span></div>
                </div>
            </div>
            <div className="row2">
                <span>INSTRUCTOR</span>
            </div>
            <div className="row3">
                <span>Bulacan State University/ College of Information and Communications Technology</span>
            </div>
            <div className="row4">
                <span>191.25/HR</span>
            </div>
            <div className="row5">
                <span>N/A</span>
            </div>
            <div className="row6">
                <span>PART TIME</span>
            </div>
            <div className="row7">
                <span>NO</span>
            </div>
        </div>
</div>
        <div className="pds_th">
            <span>V. LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS ATTENDED</span>
            <span style={{fontSize:".75rem",marginTop:"5px",marginBottom:"5px"}}>(Start from the most recent L&D/training program and include only the relevant L&D/training taken for the last five (5) years for Division Chief/Executive/Managerial positions)</span>
        </div>

        <div className="pds_cert_row">
            <div className="row1">
                <span>TITLE OF LEARNING AND DEVELOPMENT INTERVENTIONS / TRAINING PROGRAMS</span>
                <span>(Write in full)</span>
            </div>
            <div className="row2">
                <div className="top1"><span>INCLUSIVE DATES OF ATTENDANCE  (mm/dd/yyyy)</span></div>
                <div className="bot">
                    <div className="from"><span>From</span></div>
                    <div className="to"><span>To</span></div>
                </div>
            </div>
            <div className="row3">
                <span>NUMBER OF HOURS</span>
            </div>
            <div className="row4">
                <span>Type of LD (Managerial / Supervisory / Technical / etc)</span>
            </div>
            <div className="row5">
                <span>CONDUCTED/ SPONSORED BY</span>
                <span>(Write in full)</span>
            </div>
        </div>

        <div className="pds_cert_row pds_cert_row1">
            <div className="row1">
                <span>BASIC COMPUTER LITERACY : WORD PROCESSING ESSENTIALS</span>
            </div>
            <div className="row2">
                <div className="bot">
                    <div className="from"><span>8/4/2016</span></div>
                    <div className="to"><span>8/4/2016</span></div>
                </div>
            </div>
            <div className="row3">
                <span>8 HRS</span>
            </div>
            <div className="row4">
                <span>Technical</span>
            </div>
            <div className="row5">
                <span>COLLEGE OF INFORMATION AND COMMUNICATIONS TECHNOLOGY</span>
            </div>
        </div>

    </div>
</div>
)
}