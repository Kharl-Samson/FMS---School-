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


export default function Faculty() {

    document.title = "CICT | Faculty Management System";

    setTimeout(function(){
        document.getElementById("faculty_link").classList.add('nav_active');
        document.getElementById("link_faculty").style.pointerEvents="none";
    },10);


    function goToActive() {
        document.getElementById("active_user_Table").style.display =
          "block";
        document.getElementById("pending_user_Table").style.display =
          "none";
        document.getElementById("pending_faculty").style.borderBottom =
          "0px solid #FFAA28";
        document.getElementById("pending_faculty").style.fontWeight = "normal";
    
        document.getElementById("active_faculty").style.borderBottom =
          "5px solid #FFAA28";
        document.getElementById("active_faculty").style.fontWeight = "600";
      }
      //function go to pdf view
      function goToPending() {
        document.getElementById("active_user_Table").style.display =
          "none";
        document.getElementById("pending_user_Table").style.display =
          "block";
        document.getElementById("active_faculty").style.borderBottom =
          "0px solid #FFAA28";
        document.getElementById("active_faculty").style.fontWeight = "normal";
    
        document.getElementById("pending_faculty").style.borderBottom =
          "5px solid #FFAA28";
        document.getElementById("pending_faculty").style.fontWeight = "600";
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

        </div>

        <RightNavbarAdmin/>
    </div>
  );
}
