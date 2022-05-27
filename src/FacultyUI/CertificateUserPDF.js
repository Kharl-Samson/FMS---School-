import React from "react";
import CICT_Logo from "../images/login/cict_logo.png";
import { useEffect, useState } from "react";
import axios from "axios";
import bulsu_icon from "../images/bulsu_icon.png";
import moment from 'moment';

export default function CertificateUserPDF(){
   
  //getting the email of user
  let email_key = localStorage.getItem("viewFacultyEmail");

  //Hook for getting all certificates
  const [pdsStep5, setpdsStep5] = useState([]);
  const loadpdsStep5 = async () => {
    const result = await axios.get("http://localhost/fms/pdsStep5.php");
    setpdsStep5(result.data.phpresult);
  };
  useEffect(() => {
    loadpdsStep5();
  }, []);

  var input_keyForCertificates_ctr=0;
  const input_keyForCertificates = pdsStep5.map((res) => {
    if (res.email_id === email_key) {
      input_keyForCertificates_ctr++;
      return (
        <div key={input_keyForCertificates_ctr}>
          <input type="hidden" id="LD_img" value={res.LD_img} />
          <input type="hidden" id="LD_title" value={res.LD_title} />
          <input type="hidden" id="LD_dateFrom" value={res.LD_dateFrom} />
          <input type="hidden" id="LD_dateTo" value={res.LD_dateTo} />
          <input type="hidden" id="LD_hours" value={res.LD_hours} />
          <input type="hidden" id="LD_type" value={res.LD_type} />
          <input type="hidden" id="LD_sponsored" value={res.LD_sponsored} />
          <input type="hidden" id="LD_coverage" value={res.LD_coverage} />
          <input type="hidden" id="LD_category" value={res.LD_category} />
        </div>
      );
    }
  });

  //Hook for getting Each Certificates
  const [LDimage, setLDimage] = useState([]);
  const loadLDimage = async () => {
    var inputLDimage = document.getElementById("LD_img").value;
    var sliceinputLDimage = inputLDimage.slice(0, -5);
    const inputLDimage_Array = sliceinputLDimage.split(" |:| ");
    setLDimage(inputLDimage_Array);
  };
  const [LDtitle, setLDtitle] = useState([]);
  const loadLDtitle = async () => {
    var inputLDtitle = document.getElementById("LD_title").value;
    var sliceinputLDtitle = inputLDtitle.slice(0, -5);
    const inputLDtitle_Array = sliceinputLDtitle.split(" |:| ");
    setLDtitle(inputLDtitle_Array);
  };
  const [LDfrom, setLDfrom] = useState([]);
  const loadLDfrom = async () => {
    var inputLDfrom = document.getElementById("LD_dateFrom").value;
    var replaceTo = inputLDfrom.replace(/-/g, "/");
    var sliceinputLDfrom = replaceTo.slice(0, -5);
    const inputLDfrom_Array = sliceinputLDfrom.split(" |:| ");
    setLDfrom(inputLDfrom_Array);
  };
  const [LDto, setLDto] = useState([]);
  const loadLDto = async () => {
    var inputLDto = document.getElementById("LD_dateTo").value;
    var replaceTo = inputLDto.replace(/-/g, "-");
    var sliceinputLDto = replaceTo.slice(0, -5);
    const inputLDto_Array = sliceinputLDto.split(" |:| ");
    const newArray1 = [];
    for(var i=0 ; i<inputLDto_Array .length ; i++){
         newArray1.push(moment(inputLDto_Array [i]).format('LL'))
    }
    setLDto(newArray1);
  };
  const [LDhours, setLDhours] = useState([]);
  const loadLDhours = async () => {
    var inputLDhours = document.getElementById("LD_hours").value;
    var sliceinputLDhours = inputLDhours.slice(0, -5);
    const inputLDhours_Array = sliceinputLDhours.split(" |:| ");
    setLDhours(inputLDhours_Array);
  };
  const [LDtype, setLDtype] = useState([]);
  const loadLDtype = async () => {
    var inputLDtype = document.getElementById("LD_type").value;
    var sliceinputLDtype = inputLDtype.slice(0, -5);
    const inputLDtype_Array = sliceinputLDtype.split(" |:| ");
    setLDtype(inputLDtype_Array);
  };
  const [LDtitleFull, setLDtitleFull] = useState([]);
  const loadLDtitleFull = async () => {
    var inputLDtitleFull = document.getElementById("LD_title").value;
    var sliceinputLDtitleFull = inputLDtitleFull.slice(0, -5);
    const inputLDtitleFull_Array = sliceinputLDtitleFull.split(" |:| ");
    setLDtitleFull(inputLDtitleFull_Array);
  };
  const [LDto1, setLDto1] = useState([]);
  const loadLDto1 = async () => {
    var inputLDto1 = document.getElementById("LD_dateTo").value;
    var sliceinputLDto1 = inputLDto1.slice(0, -5);
    const inputLDto1_Array = sliceinputLDto1.split(" |:| ");
    setLDto1(inputLDto1_Array);
  };
  const [LDsponsor, setLDsponsor] = useState([]);
  const loadLDsponsor = async () => {
    var inputLDsponsor = document.getElementById("LD_sponsored").value;
    var sliceinputLDsponsor = inputLDsponsor.slice(0, -5);
    const inputLDsponsor_Array = sliceinputLDsponsor.split(" |:| ");
    setLDsponsor(inputLDsponsor_Array);
  };
  const [LDcoverage, setLDcoverage] = useState([]);
  const loadLDcoverage = async () => {
    var inputLDcoverage = document.getElementById("LD_coverage").value;
    var sliceinputLDcoverage = inputLDcoverage.slice(0, -5);
    const inputLDcoverage_Array = sliceinputLDcoverage.split(" |:| ");
    setLDcoverage(inputLDcoverage_Array);
  };
  const [LDcategory, setLDcategory] = useState([]);
  const loadLDcategory = async () => {
    var inputLDcategory = document.getElementById("LD_category").value;
    var sliceinputLDcategory = inputLDcategory.slice(0, -5);
    const inputLDcategory_Array = sliceinputLDcategory.split(" |:| ");
    setLDcategory(inputLDcategory_Array);
  }; 

  useEffect(() => {
    setTimeout(function () {
      loadLDto1();
      loadLDtitleFull();
      loadLDimage();
      loadLDtitle();
      loadLDfrom();
      loadLDto();
      loadLDhours(); 
      loadLDtype();
      loadLDsponsor();
      loadLDcoverage();
      loadLDcategory();
    }, 1000);
  }, []);

  //Certificate content
  let ld_ctr = -1;
  const ldContent = LDtitle.map(() => {
    ld_ctr++;
    return (
        <div className="th1 certDesktopPDF" style={{fontWeight:"normal"}} key={ld_ctr} id="certDesktopPDF">
        <div><span style={{textTransform:"Uppercase" }}>{LDtitleFull[ld_ctr]}</span></div>
        <div>
            <div style={{width:"100%",display:"flex",border:"none",justifyContent:"center",fontWeight:"normal",flexDirection:"row"}}>
                <span style={{margin:"7px",wordBreak:"break-all"}}>{LDfrom[ld_ctr]}</span>
                <span style={{margin:"0px"}}>-</span>
                <span style={{margin:"7px",wordBreak:"break-all"}}>{LDto1[ld_ctr]}</span>
            </div>
        </div>
        <div>
            <span>{LDhours[ld_ctr]+" HOURS"}</span>
        </div>
        <div>
            <span>{LDtype[ld_ctr]}</span>
        </div>
        <div>
            <span>{LDsponsor[ld_ctr]}</span>
        </div>
        <div>
            <span>{LDcoverage[ld_ctr]}</span>
        </div>

        <p style={{display:"none"}}>{LDtitleFull[ld_ctr]}</p>
        <p style={{display:"none"}}>{LDtitle[ld_ctr]}</p>
        <p style={{display:"none"}}>{LDfrom[ld_ctr]}</p>
        <p style={{display:"none"}}>{LDto[ld_ctr]}</p>
        <p style={{display:"none"}}>{LDto1[ld_ctr]}</p>
        <p style={{display:"none"}}>{LDhours[ld_ctr]}</p>
        <p style={{display:"none"}}>{LDtype[ld_ctr]}</p>
        <p style={{display:"none"}}>{LDsponsor[ld_ctr]}</p>
        <p style={{display:"none"}}>{LDcoverage[ld_ctr]}</p>
        <p style={{display:"none"}}>{LDcategory[ld_ctr]}</p>
        <input type="hidden" value={LDto1[ld_ctr]} className="inputDateKey_hidden"/>
    </div>
    );
  });

    return(
        <div className="certificatePDF_container" id="gridTable_forSearchPDF">
            <div className="pdf_container" id="convertableCertUser_pdf">

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


                <div className="th">
                    LIST OF ALL CERTIFICATES
                </div>

                <div className="th1">
                    <div><span>TITLE OF LEARNING AND DEVELOPMENT INTERVENTIONS / TRAINING PROGRAM</span></div>
                    <div>
                        <span>INCLUSIVE DATES OF ATTENDANCE</span>
                        <div style={{width:"100%",display:"flex",border:"none",justifyContent:"center",fontWeight:"normal",flexDirection:"row"}}>
                            <span style={{margin:"10px"}}>From</span>
                            <span style={{margin:"10px"}}>-</span>
                            <span style={{margin:"10px"}}>To</span>
                        </div>
                    </div>
                    <div>
                        <span>NUMBER OF HOURS</span>
                    </div>
                    <div>
                        <span>TYPE OF LD</span>
                    </div>
                    <div>
                        <span>CONDUCTED / SPONSORED BY</span>
                    </div>
                    <div>
                        <span>COVERAGE</span>
                    </div>
                </div>
                {ldContent}
            </div>

            {input_keyForCertificates}
        </div>
    )
}

