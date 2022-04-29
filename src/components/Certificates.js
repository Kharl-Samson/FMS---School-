import React from "react";
import '../css/certificate.css';
import LeftNavbarFaculty from "../navbarsUI/LeftNavbarFaculty";
import NavbarSizer from "../navbarsUI/NavbarSizer";
import RightNavbar from "../navbarsUI/RightNavbar";
import searchYellow from "../images/icons/searchYellow.svg";
import filterYellow from "../images/icons/filterYellow.svg";
import gridTableYellow from "../images/icons/gridTableYellow.svg";
import rowTableGray from "../images/icons/rowTableGray.svg";
import download_yellow from "../images/icons/download_yellow.svg";
import uploadWhite from "../images/icons/uploadWhite.svg";
import EachCertificate from "../certificatesUI/EachCertificate";
import TableRowCertificate from "../certificatesUI/TableCertificate";
import TableCertificateMobile from "../certificatesUI/TableCertificateMobile";
import gridTableGray from "../images/icons/gridTableGray.svg";
import rowTableYellow from "../images/icons/rowTableYellow.svg";
import no_record_icon from "../images/no_record_icon.png";
import $ from 'jquery';

export default function Certificates() {

    document.title = "CICT | Faculty Management System";

    setTimeout(function(){
        document.getElementById("certificate_link").classList.add('nav_active');
        document.getElementById("link_certificate").style.pointerEvents="none";
    },10);

var seacrhKey = "desktopGrid";
function gridView(){
    seacrhKey = "desktopGrid";
    document.getElementById("grid_icon").src = gridTableYellow;
    document.getElementById("row_icon").src = rowTableGray;
    document.getElementById("GridBtn").style.backgroundColor = "#FFFF";
    document.getElementById("RowBtn").style.backgroundColor = "transparent";
    document.getElementById("row_table").style.display ="none";
    document.getElementById("rowMobile_table").style.display ="none";

    document.getElementById("table_containerID").style.backgroundColor = "#ffff";
    document.getElementById("table_containerID").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    document.getElementById("grid_table").style.display ="block";
}
const mq = window.matchMedia("(max-width: 850px)");
function rowView(){
    document.getElementById("grid_icon").src = gridTableGray;
    document.getElementById("row_icon").src = rowTableYellow;
    document.getElementById("GridBtn").style.backgroundColor = "transparent";
    document.getElementById("RowBtn").style.backgroundColor = "#FFFF";

    document.getElementById("table_containerID").style.backgroundColor = "transparent";
    document.getElementById("table_containerID").style.boxShadow = "none";
    document.getElementById("grid_table").style.display ="none";
    if (mq.matches) {
        seacrhKey = "mobileRow";
        document.getElementById("rowMobile_table").style.display ="block";
        document.getElementById("row_table").style.display ="none";
    }
    else{
        seacrhKey = "desktopRow";
        document.getElementById("row_table").style.display ="block";
        document.getElementById("rowMobile_table").style.display ="none";
    }
}


//Filter Search
$("#search_certificate").on("keyup", function() {
    var value = $(this).val().toLowerCase();

    if(seacrhKey == "desktopGrid"){
        $("#gridTable_forSearch #certDesktop").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
          
        if($('#gridTable_forSearch #certDesktop:visible').length === 0) {//pag not found
            document.getElementsByClassName("no_searchFound")[0].style.display = "flex";
        }
        else if($('#gridTable_forSearch #certDesktop:visible').length != 0){//pag found
            document.getElementsByClassName("no_searchFound")[0].style.display = "none";
        }
        if(document.getElementById("search_certificate").value == ""){
            document.getElementsByClassName("no_searchFound")[0].style.display = "none";
        } 
    }
});
      

  return (
    <div className="dashboard_container">
        <LeftNavbarFaculty />

        <div className="main_content">
            <NavbarSizer />

            <div className="certificates_container">
                <h1>Certificates</h1>
                
                <div className="table_container" id="table_containerID">
                    <div className="top">
                        <div className="container">
                            <select>
                                <option disabled selected>Filter by</option>
                                <option>All</option>
                                <option>Title</option>
                                <option>Date (From)</option>
                                <option>Date (To)</option>
                                <option>Hours</option>
                                <option>Type</option>
                                <option>Sponsor</option>
                                <option>Coverage</option>
                                <option>Category</option>
                            </select>
                            <input type="text" placeholder="Find certificate" id="search_certificate"/>
                            <div><img src={searchYellow}/></div>
                        </div>
                    
                        <div className="container">
                            View :
                            <div>
                                <div id="GridBtn" onClick={gridView}><img id="grid_icon" src={gridTableYellow}/></div>
                                <div id="RowBtn" onClick={rowView}><img id="row_icon" src={rowTableGray}/></div>
                            </div>
                        </div>
                        <div className="container">
                            <div><img src={download_yellow}/> Download as PDF</div>
                            <div><img src={uploadWhite}/> Upload Certificate</div>
                        </div>
                    </div>

                    <div className="certficate_scrollable" id="grid_table"> 
                        <EachCertificate/>

                        <div className="no_searchFound">
                                <img src={no_record_icon}/>
                                <p>Sorry, No record found!</p>
                        </div>
                    </div>

                    <div className="certficate_scrollable1" id="row_table" style={{display:"none"}}>
                        <TableRowCertificate/>
                    </div>

                    <div className="certificate_scrollable_mobile" id="rowMobile_table" style={{display:"none"}}>
                        <TableCertificateMobile/>
                    </div>  


                </div>
            </div>
   
        </div>

        <RightNavbar/>
    </div>
  );
}
