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
                    <div className="box_name" style={{width:"15.55%"}}> {elemName[elem_ctr]} </div>
                    <div className="box_name" style={{width:"15.55%"}}> {elemAttain[elem_ctr]} </div>
                    <div className="box_name" style={{width:"15.55%"}}> 
                        <div style={{borderRight:"1.5px solid black"}}>{elemDateFrom[elem_ctr]}</div>
                        <div>{elemDateTo[elem_ctr]}</div>
                    </div>
                    <div className="box_name" style={{width:"15.57%"}}> {elemUnits[elem_ctr]} </div>
                    <div className="box_name" style={{width:"9.7%"}}> {elemYearGrad[elem_ctr]} </div>
                    <div className="box_name"style={{width:"13.2%"}}> {elemAward[elem_ctr]} </div>
                </div>
                )
    })
    //SECONDARY
    let sec_ctr = -1;
    const SecondaryContent= elemName.map(()=> {
        sec_ctr++;
                return (   
                <div className="name_of_schooldPreview">
                    <div className="box_name" style={{width:"15.55%"}}> {elemName[sec_ctr]} </div>
                    <div className="box_name" style={{width:"15.55%"}}> {elemAttain[sec_ctr]} </div>
                    <div className="box_name" style={{width:"15.55%"}}> 
                        <div style={{borderRight:"1.5px solid black"}}>{elemDateFrom[sec_ctr]}</div>
                        <div>{elemDateTo[sec_ctr]}</div>
                    </div>
                    <div className="box_name" style={{width:"15.57%"}}> {elemUnits[elem_ctr]} </div>
                    <div className="box_name" style={{width:"9.7%"}}> {elemYearGrad[elem_ctr]} </div>
                    <div className="box_name"style={{width:"13.2%"}}> {elemAward[sec_ctr]} </div>
                </div>
                )
    })

    return(
        <div className='step_content preview_pds' style={{display:"block"}}>

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
                            <span>Kharl Noel</span>
                        </div>
                        <div className="box">
                            <span>Last Name</span>
                            <span>Dela Cruz</span>
                        </div>
                        <div className="box">
                            <span>Last Name</span>
                            <span>Samson</span>
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
                                <span>Employee NO.</span>
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
                    <div className="educ_level">LEVEL</div>
                    <div className="educ_name"><span>NAME OF SCHOOL</span> <span>(Write in full)</span></div>
                    <div className="educ_name"><span>BASIC EDUCATION / DEGREE / COURSE</span> <span>(Write in full)</span></div>
                    <div className="educ_level">
                        <span>PERIOD OF ATTENDANCE</span>
                        <div className="educ_period">
                            <div style={{borderRight:"1.5px solid black"}}>From</div>
                            <div>To</div>
                        </div>
                    </div>
                    <div className="educ_name"><span>HIGHEST LEVEL UNIT EARNED</span> <span>(If not graduated)</span></div>
                    <div className="educ_year">YEAR GRADUATED</div>

                    <div className="educ_name1">SCHOLARSHIP / ACADEMIC HONORS RECEIVED</div>
                </div>

                <div className="education_content">
                    <div className="educ_level" style={{width:"13.3%"}}>ELEMENTARY</div>
                    <div className="educ_name_content">
                            {ElementaryContent}
                    </div>
                </div>

                <div className="education_content">
                    <div className="educ_level" style={{width:"13.3%"}}>SECONDARY</div>
                    <div className="educ_name_content">
                            {SecondaryContent}
                    </div>
                </div>

                <div className="education_content">
                    <div className="educ_level" style={{width:"13.3%"}}>VOCATIONAL / TRADE / COURSE</div>
                    <div className="educ_name_content">
                            {SecondaryContent}
                    </div>
                </div>

                <div className="education_content">
                    <div className="educ_level" style={{width:"13.3%"}}>College</div>
                    <div className="educ_name_content">
                            {SecondaryContent}
                    </div>
                </div>

                <div className="education_content">
                    <div className="educ_level" style={{width:"13.3%"}}>Graduate Studies</div>
                    <div className="educ_name_content">
                            {SecondaryContent}
                    </div>
                </div>

            </div>    


          </div>
      </div>

      <p className='p_consent' style={{visibility:"hidden"}}>By accepting, you acknowledge that you have read this form, understood its contents, and consent to the processing of your data for the purposes indicated in this Consent Form. If not, your data will not be used by Bulacan State University as long as your authorization to deny access has not been reversed.</p>
  </div>
    )
}