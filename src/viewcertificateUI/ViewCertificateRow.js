import React from "react"

export default function ViewCertificateRow(props){

    function viewCertificate1(){
        document.getElementById("view_certificate_container1").style.display="flex"
        document.getElementById("imgCert1").src =  "http://localhost/fms/upload_certificate/"+props.LDimage;

        document.getElementById("viewCert_img1").src = "http://localhost/fms/upload_certificate/"+props.LDimage;
        document.getElementById("viewCert_title1").textContent = props.LDtitleFull;
        document.getElementById("viewCert_fromTo1").textContent = "( "+props.LDfrom+" ) TO ( "+props.LDto1+" )";
        document.getElementById("viewCert_hours1").textContent = props.LDhours+" HOURS";
        document.getElementById("viewCert_type1").textContent =props.LDtype;
        document.getElementById("viewCert_sponsor1").textContent =props.LDsponsor;
        document.getElementById("viewCert_coverage1").textContent = props.LDcoverage;
        document.getElementById("viewCert_category1").textContent = props.LDcategory;
      }

    return(
    <div
        className="header certTABLEDesktop"
        style={{ alignItems: "center", padding: "1rem 0" }}
        id="certTABLEDesktop"
      >
        <div className="th">
          <p style={{display:"none"}}>{props.LDtitleFull}</p>
          <p style={{display:"none"}}>{props.LDfrom}</p>
          <input type="hidden" value={props.LDto1} className="inputDateKey_hidden"/>
          <p style={{display:"none"}}>{props.LDhours+" HOURS"}</p>
          <p style={{display:"none"}}>{props.LDtype}</p>
          <p style={{display:"none"}}>{props.LDsponsor}</p>
          <p style={{display:"none"}}>{props.LDcoverage}</p>
          <p style={{display:"none"}}>{props.LDcategory}</p>
          <span style={{ color: "black"}}>{props.LDtitleFull}</span>
        </div>
        <div className="th">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="date" style={{ width: "50%", color: "black" }}>
              {props.LDfrom}
            </div>
            <div className="date" style={{ width: "50%", color: "black" }}>
              {props.LDto}
            </div>
          </div>
        </div>
        <div className="th">
          <span style={{ color: "black" }}>{props.LDhours+" HOURS"}</span>
        </div>
        <div className="th">
          <button style={{ fontWeight: "600" }} onClick={viewCertificate1}>View</button>
        </div>          
      </div>
    )
}