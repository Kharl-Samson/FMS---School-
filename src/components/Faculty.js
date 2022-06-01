import React from "react";
import '../css/certificate.css';
import '../css/faculty.css';
import NavbarSizer from "../navbarsUI/NavbarSizer";
import no_record_icon from "../images/no_record_icon.png";
import FacultyTopActions from "../FacultyUI/FacultyTopButton";
import NavbarAdmin from "../navbarsUI/LeftNavbarAdmin";
import RightNavbarAdmin from "../navbarsUI/RightNavbarAdmin";
import EachFaculty from "../FacultyUI/EachFaculty";
import TableRowFaculty from "../FacultyUI/TableFaculty";
import AllUsersPDF from "../FacultyUI/AllUsersPDF";
import FacultyTopButtonPending from "../FacultyUI/FacultyTopButtonPending";
import TableFacultyPending from "../FacultyUI/TableFacultyPending";
import $ from "jquery";
import PendingUsersPDF from "../FacultyUI/PendingUsersPDF";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Faculty() {

//Hook for getting web content
const [getWebContent, setWebContent] = useState([]);
const loadWebContent = async () => {
  const result = await axios.get("http://localhost/fms/getWebContent.php");
  setWebContent(result.data.phpresult);
};
useEffect(() => {
  loadWebContent();
}, []);
//Loading the icon in the tab
getWebContent.map((res) => { 
  document.querySelector("link[rel='shortcut icon']").href = "http://localhost/fms/web_content/"+res.logo;
  document.title = res.abbreviation+" | Manage Users";
});



    setTimeout(function(){
        document.getElementById("faculty_link").classList.add('nav_active');
        document.getElementById("link_faculty").style.pointerEvents="none";
    },10);


    function goToActive() {
        document.getElementById('search_faculty').value = "";

        document.getElementById("active_user_Table").style.display =
          "block";
        document.getElementById("pending_user_Table").style.display =
          "none";
        document.getElementById("pending_faculty").style.borderBottom =
          "0px solid #FFAA28";
        document.getElementById("pending_faculty").style.fontWeight = "normal";
    
        document.getElementById("active_faculty").style.borderBottom =
          "3px solid #FFAA28";
        document.getElementById("active_faculty").style.fontWeight = "600";


        if ($("#gridTable_forSearch #faculty_desktop:visible").length === 0) {
          document.getElementsByClassName("no_searchFound6")[0].style.display ="flex";
        }
        else if ($("#gridTable_forSearch #faculty_desktop:visible").length != 0) {
          document.getElementsByClassName("no_searchFound6")[0].style.display ="none";
        }
    
        if ($("#rowTable_forSearch #facultyRow_desktop:visible").length === 0) {
          document.getElementsByClassName("no_searchFound7")[0].style.display ="flex";
        }
        else if ($("#rowTable_forSearch #facultyRow_desktop:visible").length != 0) {
          document.getElementsByClassName("no_searchFound7")[0].style.display ="none";
        }

        var div = document.getElementsByClassName("facultyRow_desktopPending");
        for (var i = 0; i < div.length; i++) {
          div[i].style.display = "flex";
        }
      }
      //function go to pdf view
      function goToPending() {
        document.getElementById("search_faculty_Pending").value = "";

        document.getElementById("active_user_Table").style.display =
          "none";
        document.getElementById("pending_user_Table").style.display =
          "block";
        document.getElementById("active_faculty").style.borderBottom =
          "0px solid #FFAA28";
        document.getElementById("active_faculty").style.fontWeight = "normal";
    
        document.getElementById("pending_faculty").style.borderBottom =
          "3px solid #FFAA28";
        document.getElementById("pending_faculty").style.fontWeight = "600";

        if ($("#rowTable_forSearch_pending #facultyRow_desktopPending:visible").length === 0) {
          document.getElementsByClassName("no_searchFound8")[0].style.display ="flex";
        }
        else if ($("#rowTable_forSearch_pending #facultyRow_desktopPending:visible").length != 0) {
          document.getElementsByClassName("no_searchFound8")[0].style.display ="none";
        }

        var ele = document.getElementsByName("cb_filter");
        for (var i = 0; i < ele.length; i++) {
          ele[i].checked = false;
        }
        var div = document.getElementsByClassName("faculty_desktop");
        var div1 = document.getElementsByClassName("facultyRow_desktop");
        for (var i = 0; i < div.length; i++) {
          div[i].style.display = "block";
          div1[i].style.display = "flex";
        }
        document.getElementsByClassName("no_searchFound6")[0].style.display = "none";
        document.getElementsByClassName("no_searchFound7")[0].style.display = "none";
        document.getElementById("input_from").value = "";
        document.getElementById("input_to").value = "";
        document.getElementById("span_from").textContent = "dd/mm/yyyy";
        document.getElementById("span_to").textContent = "dd/mm/yyyy";
      }


  return (
    <div className="dashboard_container">
        <NavbarAdmin/>

        <div className="main_content">
            <NavbarSizer />

            <div className="certificates_container" id="certificates_container">
      

                <div className="choices_faculty_page" style={{zIndex:"0"}}>
                    <div id="active_faculty" style={{zIndex:"0"}} onClick={goToActive}>
                        Active Users
                    </div>
                    <div id="pending_faculty" style={{zIndex:"0"}} onClick={goToPending}>
                        Pending Users
                    </div>
                </div>
                

                <div id="active_user_Table" style={{display:"block"}}>
                    <div className="table_container" id="table_containerID">
                        <FacultyTopActions/>
                        <div className="certficate_scrollable" id="grid_table"> 
                            <EachFaculty/>
                            <div className="no_searchFound6">
                                <img src={no_record_icon}/>
                                <p>No Faculty Available!</p>
                            </div>
                         </div>

                        <div className="certficate_scrollable1" id="row_table" style={{display:"none"}}>
                            <TableRowFaculty/>
                        </div>
                    </div>
                </div>

                <div id="pending_user_Table">
                    <div className="table_container" id="table_containerID" style={{backgroundColor:"transparent" , boxShadow:"none"}}>
                            <FacultyTopButtonPending/>
                        <div className="certficate_scrollable1" id="row_table" style={{display:"block"}}>
                            <TableFacultyPending/>
                        </div>
                    </div>
                </div>

            </div>

            <AllUsersPDF/>
            <PendingUsersPDF/>

        </div>

        <RightNavbarAdmin/>
    </div>
  );
}
