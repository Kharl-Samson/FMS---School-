import React from "react";

export default function CertificateRowMobile(props){
    function viewCertificate2(){
        document.getElementById("view_certificate_container2").style.display="flex"
        document.getElementById("imgCert2").src =  "http://localhost/fms/upload_certificate/"+props.LDimage;
        document.getElementById("viewCert_img2").src = "http://localhost/fms/upload_certificate/"+props.LDimage;
        document.getElementById("viewCert_title2").textContent = props.LDtitleFull;
        document.getElementById("viewCert_fromTo2").textContent = "( "+props.LDfrom+" ) TO ( "+props.LDto1+" )";
        document.getElementById("viewCert_hours2").textContent = props.LDhours+" HOURS";
        document.getElementById("viewCert_type2").textContent =props.LDtype;
        document.getElementById("viewCert_sponsor2").textContent =props.LDsponsor;
        document.getElementById("viewCert_coverage2").textContent = props.LDcoverage;
        document.getElementById("viewCert_category2").textContent = props.LDcategory;
      }

    return(
        <div className="mobile_container certTABLEMobile" id="certTABLEMobile">

          <p style={{display:"none"}}>{props.LDtitleFull}</p>
          <p style={{display:"none"}}>{props.LDfrom}</p>
          <input type="hidden" value={props.LDto1} className="inputDateKey_hidden"/>
          <p style={{display:"none"}}>{props.LDhours+" HOURS"}</p>
          <p style={{display:"none"}}>{props.LDtype}</p>
          <p style={{display:"none"}}>{props.LDsponsor}</p>
          <p style={{display:"none"}}>{props.LDcoverage}</p>
          <p style={{display:"none"}}>{props.LDcategory}</p>


      <p className="th">Title of learning and development interventions/ training programs</p>
      <p className="th_content">{props.LDtitleFull}</p>
      <hr/>

      <p className="th" style={{marginTop:"10px"}}>Inclusive dates of attendance (mm/dd/yy)</p>
      <div className="th_date">
          <div>
              <p>FROM</p>
              <p>{props.LDfrom}</p>
          </div>
          <div>
              <p>TO</p>
              <p>{props.LDto}</p>
          </div>
      </div>
      <hr/>

      <p className="th" style={{marginTop:"10px"}}>Number of hours</p>
      <p className="th_content">{props.LDhours+" HOURS"}</p>
      <hr/>

      <button onClick={viewCertificate2}>View</button>
  </div>
    )
}