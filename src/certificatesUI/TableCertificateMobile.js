import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


export default function TableCertificateMobile(){
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

  useEffect(() => {
    setTimeout(function () {
      loadLDimage();
      loadLDtitle();
      loadLDfrom();
      loadLDto();
      loadLDhours(); 
      loadLDtype();
    }, 1000);
  }, []);

  //Certificate content
  let ld_ctr = -1;
  const ldContent = LDtitle.map(() => {
    ld_ctr++;
    return (
        <div className="mobile_container">
        <p className="th">Title of learning and development interventions/ training programs</p>
        <p className="th_content">{LDtitle[ld_ctr]}</p>
        <hr/>

        <p className="th" style={{marginTop:"10px"}}>Inclusive dates of attendance (mm/dd/yy)</p>
        <div className="th_date">
            <div>
                <p>FROM</p>
                <p>{LDfrom[ld_ctr]}</p>
            </div>
            <div>
                <p>TO</p>
                <p>{LDto[ld_ctr]}</p>
            </div>
        </div>
        <hr/>

        <p className="th" style={{marginTop:"10px"}}>Number of hours</p>
        <p className="th_content">{LDhours[ld_ctr]+" HOURS"}</p>
        <hr/>

        <button>View</button>
    </div>
    );
  });

    return(
        <div>
            {ldContent}
            {input_keyForCertificates}
        </div>
    )
}