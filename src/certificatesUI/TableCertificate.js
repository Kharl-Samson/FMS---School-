import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import no_record_icon from "../images/no_record_icon.png";

export default function TableRowCertificate() {
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

  const input_keyForCertificates = pdsStep5.map((res) => {
    if (res.email_id === email_key) {
      return (
        <div>
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

  setTimeout(function () {
    if (document.getElementById("LD_title").value.length === 0) {
      document.getElementById("certTABLEDesktop").style.display = "none"
      document.getElementsByClassName("no_searchFound1")[0].style.display ="flex";
    }
    }, 10);

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
    var replaceTo = inputLDto.replace(/-/g, "/");
    var sliceinputLDto = replaceTo.slice(0, -5);
    const inputLDto_Array = sliceinputLDto.split(" |:| ");
    setLDto(inputLDto_Array);
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
      <div
        className="header certTABLEDesktop"
        style={{ alignItems: "center", padding: "1rem 0" }}
        id="certTABLEDesktop"
      >
        <div className="th">
          <p style={{display:"none"}}>{LDtitleFull[ld_ctr]}</p>
          <p style={{display:"none"}}>{LDfrom[ld_ctr]}</p>
          <input type="hidden" value={LDto1[ld_ctr]} className="inputDateKey_hidden"/>
          <p style={{display:"none"}}>{LDhours[ld_ctr]+" HOURS"}</p>
          <p style={{display:"none"}}>{LDtype[ld_ctr]}</p>
          <p style={{display:"none"}}>{LDsponsor[ld_ctr]}</p>
          <p style={{display:"none"}}>{LDcoverage[ld_ctr]}</p>
          <p style={{display:"none"}}>{LDcategory[ld_ctr]}</p>
          <span style={{ color: "black"}}>{LDtitle[ld_ctr]}</span>
        </div>
        <div className="th">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="date" style={{ width: "50%", color: "black" }}>
              {LDfrom[ld_ctr]}
            </div>
            <div className="date" style={{ width: "50%", color: "black" }}>
              {LDto[ld_ctr]}
            </div>
          </div>
        </div>
        <div className="th">
          <span style={{ color: "black" }}>{LDhours[ld_ctr]+" HOURS"}</span>
        </div>
        <div className="th">
          <button style={{ fontWeight: "600" }}>View</button>
        </div>          
      </div>
    );
  });

  return (
    <div id="rowTable_forSearch">
      <div className="header">
        <div className="th">
          <span>
            Title of learning and development interventions/ training programs
          </span>
        </div>
        <div className="th">
          <div>INCLUSIVE DATES OF ATTENDANCE (mm/dd/yy)</div>
          <div>
            <div className="date">FROM</div>
            <div className="date">TO</div>
          </div>
        </div>
        <div className="th">
          <span>Number of hours</span>
        </div>
        <div className="th">
          <span>Action</span>
        </div>
      </div>

      <div className="tableRow_scrollable_container">
        {ldContent} 
        <div className="no_searchFound1">
              <img src={no_record_icon}/>
              <p>No Certificate Available!</p>
        </div>
      </div>

      {input_keyForCertificates}
    </div>
  );
}
