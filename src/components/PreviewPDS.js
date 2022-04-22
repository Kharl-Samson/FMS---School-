import React from "react";
import CICT_Logo from "../images/login/cict_logo.png";
import datasheet_info from '../images/icons/datasheet_info.svg'


export default function PreviewPDS(){

    const elemName = ["SAN MIGUEL ELEMENTARY SCHOOL","MEYSULAO ELEMENTARY SCHOOL"];
    const elemAttain = ["ELEMENTARY","ELEMENTARY"];
    const elemDateFrom = ["01/06/2006","01/06/2008"];
    const elemDateTo = ["01/06/2008","01/06/2010"];
    const elemUnits = ["N/A","N/A"];
    const elemYearGrad = ["N/A","2010"];
    const elemAward = ["N/A","8th honorable mention"];

    //ELEMENTARY
    let elem_ctr = -1;
    const ElementaryContent= elemName.map(()=> {
        elem_ctr++;
                return (   
                <div className="name_of_schooldPreview">
                    <div className="box_name" style={{width:"15.44%"}}> {elemName[elem_ctr]} </div>
                    <div className="box_name" style={{width:"15.40%"}}> {elemAttain[elem_ctr]} </div>
                    <div className="box_name" style={{width:"17.8%"}}> 
                        <div style={{borderRight:"1.5px solid black"}}>{elemDateFrom[elem_ctr]}</div>
                        <div>{elemDateTo[elem_ctr]}</div>
                    </div>
                    <div className="box_name" style={{width:"11.8%"}}> {elemUnits[elem_ctr]} </div>
                    <div className="box_name" style={{width:"9.5%"}}> {elemYearGrad[elem_ctr]} </div>
                    <div className="box_name" style={{width:"12%"}}> {elemAward[elem_ctr]} </div>
                </div>
                )
    })
    //SECONDARY
    let sec_ctr = -1;
    const SecondaryContent= elemName.map(()=> {
        sec_ctr++;
                return (   
                <div className="name_of_schooldPreview">
                    <div className="box_name" style={{width:"15.44%"}}> {elemName[sec_ctr]} </div>
                    <div className="box_name" style={{width:"15.40%"}}> {elemAttain[sec_ctr]} </div>
                    <div className="box_name" style={{width:"17.8%"}}> 
                        <div style={{borderRight:"1.5px solid black"}}>{elemDateFrom[sec_ctr]}</div>
                        <div>{elemDateTo[sec_ctr]}</div>
                    </div>
                    <div className="box_name" style={{width:"11.8%"}}> {elemUnits[elem_ctr]} </div>
                    <div className="box_name" style={{width:"9.5%"}}> {elemYearGrad[elem_ctr]} </div>
                    <div className="box_name"style={{width:"12%"}}> {elemAward[sec_ctr]} </div>
                </div>
                )
    })

    const cseName = ["NATIONAL CERTIFICATION III IN VISUAL GRAPHICS DESIGN"];
    //CIVIL SERVICE ELIGIBILITY
    let cse_ctr = -1;
    const cseContent= cseName.map(()=> {
        cse_ctr++;
                return (   
                <div className="CSE_content">
                    <div className="CSE_box" style={{width:"20%"}}>
                        {cseName[cse_ctr]}
                    </div>
                    <div className="CSE_box" style={{width:"15%"}}>
                        PASSED
                    </div>
                    <div className="CSE_box" style={{width:"15%"}}>
                        10/10/2015
                    </div>
                    <div className="CSE_box" style={{width:"20%"}}>               
                        PHILCOMTECH BALAGTAS INC.
                    </div>
                    <div className="CSE_box" style={{width:"17.2%"}}>
                        <div>115031503008110</div>
                        <div style={{borderLeft:"1px solid black"}}>10/23/2020</div>
                    </div>
                </div>
                )
    })

    const weName = ["INSTRUCTOR"];
    //WORK EXPERIENCE
    let we_ctr = -1;
    const weContent= weName.map(()=> {
        we_ctr++;
         return (   
        <div className="WE_content">
                <div className="WE_box" style={{width:"15%"}}>
                    <div style={{display:"flex"}}>
                        <div>1/3/2017</div>
                        <div style={{borderLeft:"1.5px solid black"}}>12/20/2016</div>
                    </div>
                </div>
                <div className="WE_box" style={{width:"15%"}}>
                    {weName[we_ctr]}
                </div>
                <div className="WE_box" style={{width:"18.1%"}}>
                    Bulacan State University/ College of Information and Communications Technology
                </div>
                <div className="WE_box" style={{width:"8%"}}>
                    191.25/HR
                </div>
                <div className="WE_box" style={{width:"10%"}}>
                    N/A
                </div>
                <div className="WE_box" style={{width:"10%"}}>
                    PART TIME
                </div>
                <div className="WE_box" style={{width:"6%"}}>
                    NO
                </div>
        </div>
        )
    })

    const ldName = ["BASIC COMPUTER LITERACY : WORD PROCESSING ESSENTIALS"];
    //LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS ATTENDED
    let ld_ctr = -1;
    const ldContent= ldName.map(()=> {
        ld_ctr++;
         return (   
            <div className="LD_content">
                <div className="LD_box" style={{width:"30%"}}>{ldName[ld_ctr]}</div>
                <div className="LD_box" style={{width:"15%"}}>
                    <div style={{display:"flex"}}>
                        <div>8/4/2016</div>
                        <div style={{borderLeft:"1.5px solid black"}}>8/4/2016</div>
                    </div>
                </div>
                <div className="LD_box" style={{width:"8%"}}>8 HRS</div>
                <div className="LD_box" style={{width:"15%"}}>TECHNICAL</div>
                <div className="LD_box" style={{width:"19.2%"}}>COLLEGE OF INFORMATION AND COMMUNICATIONS TECHNOLOGY</div>
            </div>
        )
    })

    return(
        <div className='step_content preview_pds'>

        <p className='step_text'>Finalization</p>
        <p className='step_desc'>Review your personal information</p>

      <div className='info_div' style={{fontSize:"1.5rem"}}>
          <img src={datasheet_info}/>
          Personal Information
      </div>  

      <div className='pds_review_container'>
          <div className='pds_preview' id="convertable_pdf_PDS">

              <div className='top'>
                    <div className='left'><img src={CICT_Logo}/></div>
                    <div className='right'>
                        <p>College of Information</p>
                        <p>and Communication Technology</p>
                    </div>
              </div>

              {/*Step 1*/}
              <div className="information_content">
                    <div className="header">Personal Information</div>

                    <div className="personal name">
                        <div className="box">
                            <span>First Name</span>
                            <span id="preview_fname"></span>
                        </div>
                        <div className="box">
                            <span>Middle Name</span>
                            <span id="preview_mname"></span>
                        </div>
                        <div className="box">
                            <span>Last Name</span>
                            <span id="preview_lname"></span>
                        </div>
                        <div className="box">
                            <span>Name Extension</span>
                            <span>N/A</span>
                        </div>
                    </div>

                    <div className="personal other_personal">
                        <div className="left">

                            <div className="box">
                                <span>Date of Birth</span>
                                <span>11/10/1999</span>
                            </div>
                            <div className="box">
                                <span>Age</span>
                                <span>22 years old</span>
                            </div>
                            <div className="box">
                                <span>Place of Birth</span>
                                <span>Philippines, Bulacan</span>
                            </div>
                            <div className="box">
                                <span>Gender</span>
                                <span>Male</span>
                            </div>
                            <div className="box">
                                <span>Civil Status</span>
                                <span>Single</span>
                            </div>
                            <div className="box">
                                <span>Height</span>
                                <span>167cm</span>
                            </div>
                            <div className="box">
                                <span>Weight</span>
                                <span>70kg</span>
                            </div>
                            <div className="box">
                                <span>Blood Type</span>
                                <span>A</span>
                            </div>
                            <div className="box">
                                <span>GSIS ID NO.</span>
                                <span>N/A</span>
                            </div>
                            <div className="box">
                                <span>PAG-IBIG ID NO.</span>
                                <span>N/A</span>
                            </div>
                            <div className="box">
                                <span>PHILHEALTH NO.</span>
                                <span>N/A</span>
                            </div>
                            <div className="box">
                                <span>SSS NO.</span>
                                <span>N/A</span>
                            </div>
                            <div className="box">
                                <span>TIN NO.</span>
                                <span>N/A</span>
                            </div>
                            <div className="box">
                                <span>EMPLOYEE NO.</span>
                                <span>N/A</span>
                            </div>
                        </div>

                        <div className="right">
                            <div className="citizenship_preview">
                                <div className="left_citizenship">Citizenship(S)</div>
                                <div className="right_citizenship">FILIPINO</div>
                            </div>

                            <div className="address_preview" style={{marginTop: "2px"}}> 
                                <div className="left_address">Resident Address</div>
                                <div className="right_address">
                                    <div className="add1">
                                        <div className="box">
                                            <span>House/Block/Lot No.</span>
                                            <span>526</span>
                                        </div>
                                        <div className="box">
                                            <span>Street</span>
                                            <span>BAGONG SILANG</span>
                                        </div>
                                    </div>
                                    <div className="add1">
                                        <div className="box">
                                            <span>Subdivision/Village</span>
                                            <span>N/A</span>
                                        </div>
                                        <div className="box">
                                            <span>Barangay</span>
                                            <span>San Miguel</span>
                                        </div>
                                    </div>
                                    <div className="add1">
                                        <div className="box">
                                            <span>City/Municipality</span>
                                            <span>Calumpit</span>
                                        </div>
                                        <div className="box">
                                            <span>Province</span>
                                            <span>Bulacan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="zip_preview">
                                <div style={{textTransform:"none"}}>Zip code</div>
                                <div>3003</div>
                            </div>

                            <div className="address_preview">
                                <div className="left_address">Pemanent Address</div>
                                <div className="right_address">
                                    <div className="add1">
                                        <div className="box">
                                            <span>House/Block/Lot No.</span>
                                            <span>526</span>
                                        </div>
                                        <div className="box">
                                            <span>Street</span>
                                            <span>BAGONG SILANG</span>
                                        </div>
                                    </div>
                                    <div className="add1">
                                        <div className="box">
                                            <span>Subdivision/Village</span>
                                            <span>N/A</span>
                                        </div>
                                        <div className="box">
                                            <span>Barangay</span>
                                            <span>San Miguel</span>
                                        </div>
                                    </div>
                                    <div className="add1">
                                        <div className="box">
                                            <span>City/Municipality</span>
                                            <span>Calumpit</span>
                                        </div>
                                        <div className="box">
                                            <span>Province</span>
                                            <span>Bulacan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="zip_preview">
                                <div style={{textTransform:"none"}}>Zip code</div>
                                <div>3003</div>
                            </div>

                            <div className="box" style={{height:"5.15%"}}>
                                <span>Mobile No.</span>
                                <span>09396164116</span>
                            </div>
                            <div className="box" style={{height:"5.15%"}}>
                                <span>Telephone No.</span>
                                <span>N/A</span>
                            </div>
                            <div className="box" style={{height:"5.15%"}}>
                                <span>Email Address</span>
                                <span style={{textTransform:"none"}}>khrlsmsn1110@gmail.com</span>
                            </div>
                            <div className="box" style={{height:"5.15%"}}>
                                <span>Alternate Email Address</span>
                                <span style={{textTransform:"none"}}>N/A</span>
                            </div>

                        </div>
                    </div>

              </div>

            {/*Step 2*/}
            <div className="information_content" style={{marginTop:"3rem"}}> 
                <div className="header">Educational Background</div>

                <div className="education_content">
                    <div className="educ_level" style={{width:"13%", backgroundColor: "rgb(238, 236, 236)"}}>LEVEL</div>
                    <div className="educ_name" style={{width:"13%", backgroundColor: "rgb(238, 236, 236)"}}><span>NAME OF SCHOOL</span> <span>(Write in full)</span></div>
                    <div className="educ_name" style={{width:"13%", backgroundColor: "rgb(238, 236, 236)"}}><span>BASIC EDUCATION / DEGREE / COURSE</span> <span>(Write in full)</span></div>
                    <div className="educ_level" style={{width:"15%", backgroundColor: "rgb(238, 236, 236)"}}> 
                        <span>PERIOD OF ATTENDANCE</span>
                        <div className="educ_period">
                            <div style={{borderRight:"1.5px solid black"}}>From</div>
                            <div>To</div>
                        </div>
                    </div>
                    <div className="educ_name" style={{width:"10%", backgroundColor: "rgb(238, 236, 236)"}}><span>HIGHEST LEVEL UNIT EARNED</span> <span>(If not graduated)</span></div>
                    <div className="educ_year" style={{width:"8%", backgroundColor: "rgb(238, 236, 236)"}}>YEAR GRADUATED</div>

                    <div className="educ_name1" style={{width:"10.1%" , backgroundColor: "rgb(238, 236, 236)"}}>SCHOLARSHIP / ACADEMIC HONORS RECEIVED</div>
                </div>

                <div className="education_content">
                    <div className="educ_level" style={{width:"13%", backgroundColor: "rgb(238, 236, 236)"}}>ELEMENTARY</div>
                    <div className="educ_name_content">
                            {ElementaryContent}
                    </div>
                </div>

                <div className="education_content">
                    <div className="educ_level" style={{width:"13%", backgroundColor: "rgb(238, 236, 236)"}}>SECONDARY</div>
                    <div className="educ_name_content">
                            {SecondaryContent}
                    </div>
                </div>

                <div className="education_content">
                    <div className="educ_level" style={{width:"13%", backgroundColor: "rgb(238, 236, 236)"}}>VOCATIONAL / TRADE / COURSE</div>
                    <div className="educ_name_content">
                            {SecondaryContent}
                    </div>
                </div>

                <div className="education_content">
                    <div className="educ_level" style={{width:"13%", backgroundColor: "rgb(238, 236, 236)"}}>College</div>
                    <div className="educ_name_content">
                            {SecondaryContent}
                    </div>
                </div>

                <div className="education_content">
                    <div className="educ_level" style={{width:"13%", backgroundColor: "rgb(238, 236, 236)"}}>Graduate Studies</div>
                    <div className="educ_name_content">
                            {SecondaryContent}
                    </div>
                </div>
            </div>    

            {/*Step 3*/}
            <div className="information_content" style={{marginTop:"3rem"}}> 
                <div className="header">Civil Service Eligibility</div>
            </div>

            <div className="CSE_content">
                <div className="headers" style={{width:"20%"}}>
                    CAREER SERVICE/ RA 1080 (BOARD/ BAR) UNDER SPECIAL LAWS/ CES/ CSEE BARANGAY ELIGIBILITY / DRIVER'S LICENSE
                </div>
                <div className="headers" style={{width:"15%"}}>
                    <span>Rating</span>
                    <span>(If Applicable)</span>
                </div>
                <div className="headers" style={{width:"15%"}}>
                    DATE OF EXAMINATION / CONFERMENT
                </div>
                <div className="headers" style={{width:"20%"}}>
                    PLACE OF EXAMINATION / CONFERMENT
                </div>
                <div className="headers" style={{width:"17.2%", padding: "0 10px"}}>
                    <div>LICENSE (if applicable)</div>
                    <div style={{display:"flex", marginTop:"20px"}}>
                        <div>Number</div>
                        <div style={{borderLeft:"1.5px solid black"}}>Date of Validity</div>
                    </div>
                </div>
            </div>

            {cseContent}

            {/*Step 4*/}
            <div className="information_content" style={{marginTop:"3rem"}}> 
                <div className="header">Work Experience</div>
            </div>

            <div className="WE_content">
                <div className="headers" style={{width:"15%"}}>
                    <div>INCLUSIVE DATES (mm/dd/yyyy)</div>
                    <div style={{display:"flex", marginTop:"20px"}}>
                        <div>From</div>
                        <div style={{borderLeft:"1.5px solid black"}}>To</div>
                    </div>
                </div>
                <div className="headers" style={{width:"15%"}}>
                    POSITION TITLE (Write in full/Do not abbreviate)
                </div>
                <div className="headers" style={{width:"18.1%"}}>
                   <span>DEPARTMENT / AGENCY / OFFICE / COMPANY</span>  
                   <span>(Write in full/Do not abbreviate)</span>
                </div>
                <div className="headers" style={{width:"8%"}}>               
                    MONTHLY SALARY
                </div>
                <div className="headers" style={{width:"10%"}}>               
                   SALARY/ JOB/ PAY GRADE (if applicable)& STEP  (Format "00-0")/ INCREMENT
                </div>
                <div className="headers" style={{width:"10%"}}>               
                    STATUS OF APPOINTMENT
                </div>
                <div className="headers" style={{width:"6%"}}>               
                    GOV'T SERVICE (Y/N)  
                </div>
            </div>

            {weContent}

            {/*Step 5*/}
            <div className="information_content" style={{marginTop:"3rem"}}> 
                <div className="header" style={{fontSize:"1.1rem"}}>LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS ATTENDED</div>
            </div>

            <div className="LD_content">
                <div className="headers" style={{width:"30%"}}>
                   <span>TITLE OF LEARNING AND DEVELOPMENT INTERVENTIONS/TRAINING PROGRAMS</span>  
                   <span>(Write in full)</span>
                </div>
                <div className="headers" style={{width:"15%"}}>
                    <div>INCLUSIVE DATES OF ATTENDANCE (mm/dd/yyyy)</div>
                    <div style={{display:"flex", marginTop:"20px"}}>
                        <div>From</div>
                        <div style={{borderLeft:"1.5px solid black"}}>To</div>
                    </div>
                </div>
                <div className="headers" style={{width:"8%"}}>               
                    NUMBER OF HOURS
                </div>
                <div className="headers" style={{width:"15%"}}>               
                    TYPE OF LD (Managerial / Supervisory / Technical / Etc)
                </div>
                <div className="headers" style={{width:"19.2%"}}>               
                    <span>CONDUCTED/ SPONSORED BY</span>  
                   <span>(Write in full)</span>
                </div>
            </div>

            {ldContent}


          </div>
      </div>

      <p className='p_consent' style={{visibility:"hidden"}}>By accepting, you acknowledge that you have read this form, understood its contents, and consent to the processing of your data for the purposes indicated in this Consent Form. If not, your data will not be used by Bulacan State University as long as your authorization to deny access has not been reversed.</p>
  </div>
    )
}