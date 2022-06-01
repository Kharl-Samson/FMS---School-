import React from "react";
import '../css/certificate.css';
import '../css/activityLog.css';
import LeftNavbarFaculty from "../navbarsUI/LeftNavbarFaculty";
import NavbarSizer from "../navbarsUI/NavbarSizer";
import RightNavbar from "../navbarsUI/RightNavbar";
import ActivityTop from "../activitylogUI/ActivityTop";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import no_record_icon from "../images/no_record_icon.png";
import $ from "jquery";
import moment from "moment";
import RightNavbarAdmin from "../navbarsUI/RightNavbarAdmin";
import NavbarAdmin from "../navbarsUI/LeftNavbarAdmin";

export default function ActivityLogAdmin() {

  document.title = "CICT | Faculty Management System";
  let email_key = localStorage.getItem("email"); 

  setTimeout(function(){
    document.getElementById("link_actLog").style.pointerEvents="none";
    },10);

  //Hook for getting all certificates
  const [getAllLog, setgetAllLog] = useState([]);
  const loadgetAllLog = async () => {
    const result = await axios.get("http://localhost/fms/getAllActivityLog.php");
    setgetAllLog(result.data.phpresult);
  };
  useEffect(() => {
    loadgetAllLog();
  }, []);

  var key_log = 0;
  const activityLogContent = getAllLog.map((res) => {
      key_log++;
      return (
        <div className="tr tr_log" key={key_log} id="tr_log">
            <div>
                <div className="left">
                    <img 
                    src={"http://localhost/fms/upload_profile/"+res.profile}
                    id="profile_photo"
                    onError={(e)=>{e.target.onerror = null; e.target.src="http://localhost/fms/upload_profile/default_avatar.png"}}
                    />
                </div>
                <div className="right">
                    <p>{res.name}</p>
                    <p>{res.email_id}</p>
                </div>
            </div>
            <div>
                <p style={{marginBottom:"5px"}}>{res.title}</p>
                <p>{res.description}</p>
            </div>
            <div>
                <p style={{fontSize:".9rem",fontWeight:"600",lineHeight:"1.1"}}>{res.date+" "+res.time}</p>
                <input type="hidden" value={moment(res.date).format("L")} className="inputDateKey_hidden"/>
            </div>
        </div>
      );
  });

  return (
    <div className="dashboard_container">
        <NavbarAdmin/>

        <div className="main_content">
            <NavbarSizer/>

            <div className="log_container">
                <h1>User Logs</h1>
                
                <div className="table_container">
                <ActivityTop/>

                <div className="actLog_scrollable">
                    <div className="tableRow_scrollable_container" id="table_log">
                        {activityLogContent}
                        <div className="no_searchFound5">
                            <img src={no_record_icon}/>
                            <p>No Activity logs found!</p>
                        </div>
                    </div>
                </div>
                </div>
       
            </div>
   
        </div>

        <RightNavbarAdmin/>
    </div>
  );
}

