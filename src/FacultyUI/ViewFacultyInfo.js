import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../css/pds.css";
import NavbarSizer from "../navbarsUI/NavbarSizer";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import cover_banner from "../images/pds_cover.png";
import certification from "../images/icons/certification.svg";
import downloadyellow_icon from "../images/icons/download_yellow.svg";
import basic_info from "../images/icons/basic_info.svg";
import education_info from "../images/icons/education_info.svg";
import service_info from "../images/icons/service_info.svg";
import work_info from "../images/icons/work_info.svg";
import LandD_info from "../images/icons/LandD_info.svg";
import personal_info from "../images/icons/personal_info.svg";
import id_info from "../images/icons/id_info.svg";
import contactYellow from "../images/icons/contactYellow.svg";
import addressYellow from "../images/icons/addressYellow.svg";
import educationYellow from "../images/icons/educationYellow.svg";
import cseYellow from "../images/icons/cseYellow.svg";
import workYellow from "../images/icons/workYellow.svg";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import PreviewPDS from "../components/PreviewPDS";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import NavbarAdmin from "../navbarsUI/LeftNavbarAdmin";
import RightNavbarAdmin from "../navbarsUI/RightNavbarAdmin";
import PreviewFacultyPDS from "./PreviewFacultyPDS";

export default function ViewFacultyInfo() {
  //Tooltip
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: ".8rem",
    },
  }));

  //for getting the initial name in avatar
  let initialName = localStorage.getItem("viewFacultyName").charAt(0);
  let profile_photo =
    "http://localhost/fms/upload_profile/" +
    localStorage.getItem("viewFacultyPhoto");


  document.title = "CICT | "+localStorage.getItem("viewFacultyName");


  //Hook for getting pds1
  const [pdsStep1, setpdsStep1] = useState([]);

  const loadpdsStep1 = async () => {
    const result = await axios.get("http://localhost/fms/pdsStep1.php");
    setpdsStep1(result.data.phpresult);
  };

  useEffect(() => {
    loadpdsStep1();
  }, []);

  //getting the email of user
  let email_key = localStorage.getItem("viewFacultyEmail");
  //Task box container using map
  var key_pds_A = 0;
  const pds_step1 = pdsStep1.map((res) => {
    key_pds_A++;
    if (res.email_id === email_key) {
      return (
        <div className="row1" key={key_pds_A}>
          <div className="box row1_content">
            <div className="top">
              <img src={personal_info} />
              Personal Information
            </div>

            <div className="content">
              <div className="left">
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">FIRST NAME</span>
                  <span className="skeleton_done">{res.fname}</span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">MIDDLE NAME</span>
                  <span className="skeleton_done">{res.mname}</span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">LAST NAME</span>
                  <span className="skeleton_done">{res.lname}</span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">NAME EXTENSION</span>
                  <span className="skeleton_done">{res.nameExtension}</span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">Birthday</span>
                  <span className="skeleton_done">{res.bday}</span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">AGE</span>
                  <span className="skeleton_done">
                    {res.age + " years old"}
                  </span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">Blood Type</span>
                  <span className="skeleton_done">{res.blood}</span>
                </div>
              </div>

              <div className="left">
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">PLACE OF BIRTH</span>
                  <span className="skeleton_done">
                    {res.cob + ", " + res.pob}
                  </span>
                </div>
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">Gender</span>
                  <span className="skeleton_done">{res.gender}</span>
                </div>
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">Civil Status</span>
                  <span className="skeleton_done">{res.civil}</span>
                </div>
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">Height</span>
                  <span className="skeleton_done">{res.height + "CM"}</span>
                </div>
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">Weight</span>
                  <span className="skeleton_done">{res.weight + "KG"}</span>
                </div>
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">Citizenship</span>
                  <span className="skeleton_done">{res.citizenship}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="r1_content row1_content">
            <div className="box" style={{ width: "100%", margin: "0" }}>
              <div className="top">
                <img src={id_info} />
                ID Information
              </div>

              <div className="content">
                <div className="left">
                  <Skeleton animation="wave" className="skeleton_show" />
                  <Skeleton animation="wave" className="skeleton_show" />
                  <div className="span_cont">
                    <span className="skeleton_done">GSIS ID No.</span>
                    <span className="skeleton_done">{res.gsis}</span>
                  </div>
                  <Skeleton animation="wave" className="skeleton_show" />
                  <Skeleton animation="wave" className="skeleton_show" />
                  <div className="span_cont">
                    <span className="skeleton_done">PAG-IBIG ID No.</span>
                    <span className="skeleton_done">{res.pagibig}</span>
                  </div>
                  <Skeleton animation="wave" className="skeleton_show" />
                  <Skeleton animation="wave" className="skeleton_show" />
                  <div className="span_cont">
                    <span className="skeleton_done">PHILHEALTH No.</span>
                    <span className="skeleton_done">{res.philhealth}</span>
                  </div>
                </div>
                <div className="left">
                  <Skeleton
                    animation="wave"
                    className="skeleton_show"
                    style={{ marginLeft: "20px" }}
                  />
                  <Skeleton
                    animation="wave"
                    className="skeleton_show"
                    style={{ marginLeft: "20px" }}
                  />
                  <div className="span_cont">
                    <span className="skeleton_done">SSS No.</span>
                    <span className="skeleton_done">{res.sss}</span>
                  </div>
                  <Skeleton
                    animation="wave"
                    className="skeleton_show"
                    style={{ marginLeft: "20px" }}
                  />
                  <Skeleton
                    animation="wave"
                    className="skeleton_show"
                    style={{ marginLeft: "20px" }}
                  />
                  <div className="span_cont">
                    <span className="skeleton_done">TIN No.</span>
                    <span className="skeleton_done">{res.tin}</span>
                  </div>
                  <Skeleton
                    animation="wave"
                    className="skeleton_show"
                    style={{ marginLeft: "20px" }}
                  />
                  <Skeleton
                    animation="wave"
                    className="skeleton_show"
                    style={{ marginLeft: "20px" }}
                  />
                  <div className="span_cont">
                    <span className="skeleton_done">EMPLOYEE NO.</span>
                    <span className="skeleton_done">{res.employeNo}</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="box"
              style={{ width: "100%", margin: "0", marginTop: "20px" }}
            >
              <div className="top">
                <img src={contactYellow} />
                Contact Information
              </div>

              <div className="content">
                <div className="left">
                  <Skeleton animation="wave" className="skeleton_show" />
                  <Skeleton animation="wave" className="skeleton_show" />
                  <div className="span_cont">
                    <span className="skeleton_done">Mobile NO.</span>
                    <span className="skeleton_done">{res.mobile}</span>
                  </div>
                  <Skeleton animation="wave" className="skeleton_show" />
                  <Skeleton animation="wave" className="skeleton_show" />
                  <div className="span_cont">
                    <span className="skeleton_done">TELEPHONe NO.</span>
                    <span className="skeleton_done">{res.tele}</span>
                  </div>
                </div>
                <div className="left">
                  <Skeleton
                    animation="wave"
                    className="skeleton_show"
                    style={{ marginLeft: "20px" }}
                  />
                  <Skeleton
                    animation="wave"
                    className="skeleton_show"
                    style={{ marginLeft: "20px" }}
                  />
                  <div className="span_cont">
                    <span className="skeleton_done">
                      Email Address
                    </span>
                    <span
                      style={{ textTransform: "none", fontSize: ".9rem" }}
                      className="skeleton_done"
                    >
                      {res.email}
                    </span>
                  </div>
                  <Skeleton
                    animation="wave"
                    className="skeleton_show"
                    style={{ marginLeft: "20px" }}
                  />
                  <Skeleton
                    animation="wave"
                    className="skeleton_show"
                    style={{ marginLeft: "20px" }}
                  />
                  <div className="span_cont">
                    <span className="skeleton_done">
                      Alternate Email Address
                    </span>
                    <span
                      style={{ textTransform: "none", fontSize: ".9rem" }}
                      className="skeleton_done"
                    >
                      {res.alEmail}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  var key_pds_B = 0;
  const pds_step1_v2 = pdsStep1.map((res) => {
    key_pds_B++;
    if (res.email_id === email_key) {
      return (
        <div className="row1" key={key_pds_B}>
          <div className="box row1_content">
            <div className="top">
              <img src={addressYellow} />
              Resident Address
            </div>

            <div className="content">
              <div className="left">
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">HOUSE/ BLOCK / LOT NO.</span>
                  <span className="skeleton_done">{res.r_house}</span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">SUBDIVISION / VILLAGE</span>
                  <span className="skeleton_done">{res.r_subdi}</span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">BARANGAY</span>
                  <span className="skeleton_done">{res.r_barangay}</span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">PROVINCE</span>
                  <span className="skeleton_done">{res.r_province}</span>
                </div>
              </div>
              <div className="left">
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">STREET</span>
                  <span className="skeleton_done">{res.r_street}</span>
                </div>
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">CITY/MUNICIPALITY </span>
                  <span className="skeleton_done">{res.r_city}</span>
                </div>
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">ZIP CODE</span>
                  <span className="skeleton_done">{res.r_zip}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="box row1_content">
            <div className="top">
              <img src={addressYellow} />
              Permanent Address
            </div>

            <div className="content">
              <div className="left">
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">HOUSE/ BLOCK / LOT NO.</span>
                  <span className="skeleton_done">{res.p_house}</span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">SUBDIVISION / VILLAGE</span>
                  <span className="skeleton_done">{res.p_subdi}</span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">BARANGAY</span>
                  <span className="skeleton_done">{res.p_barangay}</span>
                </div>
                <Skeleton animation="wave" className="skeleton_show" />
                <Skeleton animation="wave" className="skeleton_show" />
                <div className="span_cont">
                  <span className="skeleton_done">PROVINCE</span>
                  <span className="skeleton_done">{res.p_province}</span>
                </div>
              </div>
              <div className="left">
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">STREET</span>
                  <span className="skeleton_done">{res.p_street}</span>
                </div>
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">CITY/MUNICIPALITY </span>
                  <span className="skeleton_done">{res.p_city}</span>
                </div>
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <Skeleton
                  animation="wave"
                  className="skeleton_show"
                  style={{ marginLeft: "20px" }}
                />
                <div className="span_cont">
                  <span className="skeleton_done">ZIP CODE</span>
                  <span className="skeleton_done">{res.p_zip}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  //Hook for getting pds2
  const [pdsStep2, setpdsStep2] = useState([]);

  const loadpdsStep2 = async () => {
    const result = await axios.get("http://localhost/fms/pdsStep2.php");
    setpdsStep2(result.data.phpresult);
  };

  useEffect(() => {
    loadpdsStep2();
  }, []);

  var key_pds_C = 0;
  const pds_step2 = pdsStep2.map((res) => {
    key_pds_C++;
    if (res.email_id === email_key) {
      return (
        <div key={key_pds_C}>
          <input type="hidden" id="elemName" value={res.elem_namePDS} />
          <input type="hidden" id="elemFrom" value={res.elem_dateFromPDS} />
          <input type="hidden" id="elemTo" value={res.elem_dateToPDS} />
          <input type="hidden" id="elemUnit" value={res.elem_unitPDS} />
          <input type="hidden" id="elemYear" value={res.elem_yearGradPDS} />
          <input type="hidden" id="elemAward" value={res.elem_awardsPDS} />
          <input type="hidden" id="secName" value={res.second_namePDS} />
          <input
            type="hidden"
            id="secAttain"
            value={res.second_attainmentPDS}
          />
          <input type="hidden" id="secFrom" value={res.second_dateFromPDS} />
          <input type="hidden" id="secTo" value={res.second_dateToPDS} />
          <input type="hidden" id="secUnit" value={res.second_unitPDS} />
          <input type="hidden" id="secYear" value={res.second_yearGradPDS} />
          <input type="hidden" id="secAward" value={res.second_awardsPDS} />

          <input type="hidden" id="vocName" value={res.vocational_namePDS} />
          <input
            type="hidden"
            id="vocAttain"
            value={res.vocational_attainmentPDS}
          />
          <input
            type="hidden"
            id="vocFrom"
            value={res.vocational_dateFromPDS}
          />
          <input type="hidden" id="vocTo" value={res.vocational_dateToPDS} />
          <input type="hidden" id="vocUnit" value={res.vocational_unitPDS} />
          <input
            type="hidden"
            id="vocYear"
            value={res.vocational_yearGradPDS}
          />
          <input type="hidden" id="vocAward" value={res.vocational_awardsPDS} />

          <input type="hidden" id="colName" value={res.college_namePDS} />
          <input
            type="hidden"
            id="colAttain"
            value={res.college_attainmentPDS}
          />
          <input type="hidden" id="colFrom" value={res.college_dateFromPDS} />
          <input type="hidden" id="colTo" value={res.college_dateToPDS} />
          <input type="hidden" id="colUnit" value={res.college_unitPDS} />
          <input type="hidden" id="colYear" value={res.college_yearGradPDS} />
          <input type="hidden" id="colAward" value={res.college_awardsPDS} />

          <input type="hidden" id="gradName" value={res.graduate_namePDS} />
          <input
            type="hidden"
            id="gradAttain"
            value={res.graduate_attainmentPDS}
          />
          <input type="hidden" id="gradFrom" value={res.graduate_dateFromPDS} />
          <input type="hidden" id="gradTo" value={res.graduate_dateToPDS} />
          <input type="hidden" id="gradUnit" value={res.graduate_unitPDS} />
          <input type="hidden" id="gradYear" value={res.graduate_yearGradPDS} />
          <input type="hidden" id="gradAward" value={res.graduate_awardsPDS} />
        </div>
      );
    }
  });

  //Hook for getting Elementary
  const [elemName, setElemName] = useState([]);
  const loadElemName = async () => {
    var inputELEMname = document.getElementById("elemName").value;
    var sliceinputELEMname = inputELEMname.slice(0, -5);
    const inputELEMname_Array = sliceinputELEMname.split(" |:| ");
    setElemName(inputELEMname_Array);
  };
  const [elemfrom, setElemfrom] = useState([]);
  const loadElemfrom = async () => {
    var inputELEMfrom = document.getElementById("elemFrom").value;
    var replaceFrom = inputELEMfrom.replace(/-/g, "/");
    var sliceinputELEMfrom = replaceFrom.slice(0, -5);
    const inputELEMfrom_Array = sliceinputELEMfrom.split(" |:| ");
    setElemfrom(inputELEMfrom_Array);
  };
  const [elemTO, setElemTO] = useState([]);
  const loadElemTO = async () => {
    var inputELEMTO = document.getElementById("elemTo").value;
    var replaceTO = inputELEMTO.replace(/-/g, "/");
    var sliceinputELEMTO = replaceTO.slice(0, -5);
    const inputELEMTO_Array = sliceinputELEMTO.split(" |:| ");
    setElemTO(inputELEMTO_Array);
  };
  const [elemUNITS, setElemUNITS] = useState([]);
  const loadElemUNITS = async () => {
    var inputELEMUNITS = document.getElementById("elemUnit").value;
    var sliceinputELEMUNITS = inputELEMUNITS.slice(0, -5);
    const inputELEMUNITS_Array = sliceinputELEMUNITS.split(" |:| ");
    setElemUNITS(inputELEMUNITS_Array);
  };
  const [elemYEAR, setElemYEAR] = useState([]);
  const loadElemYEAR = async () => {
    var inputELEMYEAR = document.getElementById("elemYear").value;
    var sliceinputELEMYEAR = inputELEMYEAR.slice(0, -5);
    const inputELEMYEAR_Array = sliceinputELEMYEAR.split(" |:| ");
    setElemYEAR(inputELEMYEAR_Array);
  };
  const [elemAWARD, setElemAWARD] = useState([]);
  const loadElemAWARD = async () => {
    var inputELEMAWARD = document.getElementById("elemAward").value;
    var sliceinputELEMAWARD = inputELEMAWARD.slice(0, -5);
    const inputELEMAWARD_Array = sliceinputELEMAWARD.split(" |:| ");
    setElemAWARD(inputELEMAWARD_Array);
  };

  //Hook for getting Secondary
  const [SecondName, setSecondName] = useState([]);
  const loadSecondName = async () => {
    var inputSecondname = document.getElementById("secName").value;
    var sliceinputSecondname = inputSecondname.slice(0, -5);
    const inputSecondname_Array = sliceinputSecondname.split(" |:| ");
    setSecondName(inputSecondname_Array);
  };
  const [SecondAttain, setSecondAttain] = useState([]);
  const loadSecondAttain = async () => {
    var inputSecondAttain = document.getElementById("secAttain").value;
    var sliceinputSecondAttain = inputSecondAttain.slice(0, -5);
    const inputSecondAttain_Array = sliceinputSecondAttain.split(" |:| ");
    setSecondAttain(inputSecondAttain_Array);
  };
  const [SecondFrom, setSecondFrom] = useState([]);
  const loadSecondFrom = async () => {
    var inputSecondFrom = document.getElementById("secFrom").value;
    var replaceFrom = inputSecondFrom.replace(/-/g, "/");
    var sliceinputSecondFrom = replaceFrom.slice(0, -5);
    const inputSecondFrom_Array = sliceinputSecondFrom.split(" |:| ");
    setSecondFrom(inputSecondFrom_Array);
  };
  const [SecondTo, setSecondTo] = useState([]);
  const loadSecondTo = async () => {
    var inputSecondTo = document.getElementById("secTo").value;
    var replaceTo = inputSecondTo.replace(/-/g, "/");
    var sliceinputSecondTo = replaceTo.slice(0, -5);
    const inputSecondTo_Array = sliceinputSecondTo.split(" |:| ");
    setSecondTo(inputSecondTo_Array);
  };
  const [SecondUnit, setSecondUnit] = useState([]);
  const loadSecondUnit = async () => {
    var inputSecondUnit = document.getElementById("secUnit").value;
    var sliceinputSecondUnit = inputSecondUnit.slice(0, -5);
    const inputSecondUnit_Array = sliceinputSecondUnit.split(" |:| ");
    setSecondUnit(inputSecondUnit_Array);
  };
  const [SecondYear, setSecondYear] = useState([]);
  const loadSecondYear = async () => {
    var inputSecondYear = document.getElementById("secYear").value;
    var sliceinputSecondYear = inputSecondYear.slice(0, -5);
    const inputSecondYear_Array = sliceinputSecondYear.split(" |:| ");
    setSecondYear(inputSecondYear_Array);
  };
  const [SecondAward, setSecondAward] = useState([]);
  const loadSecondAward = async () => {
    var inputSecondAward = document.getElementById("secAward").value;
    var sliceinputSecondAward = inputSecondAward.slice(0, -5);
    const inputSecondAward_Array = sliceinputSecondAward.split(" |:| ");
    setSecondAward(inputSecondAward_Array);
  };

  //Hook for getting Vocational
  const [VocationalName, setVocationalName] = useState([]);
  const loadVocationalName = async () => {
    var inputVocationalname = document.getElementById("vocName").value;
    var sliceinputVocationalname = inputVocationalname.slice(0, -5);
    const inputVocationalname_Array = sliceinputVocationalname.split(" |:| ");
    setVocationalName(inputVocationalname_Array);
  };
  const [VocationalAttain, setVocationalAttain] = useState([]);
  const loadVocationalAttain = async () => {
    var inputVocationalAttain = document.getElementById("vocAttain").value;
    var sliceinputVocationalAttain = inputVocationalAttain.slice(0, -5);
    const inputVocationalAttain_Array =
      sliceinputVocationalAttain.split(" |:| ");
    setVocationalAttain(inputVocationalAttain_Array);
  };
  const [VocationalFrom, setVocationalFrom] = useState([]);
  const loadVocationalFrom = async () => {
    var inputVocationalFrom = document.getElementById("vocFrom").value;
    var replaceFrom = inputVocationalFrom.replace(/-/g, "/");
    var sliceinputVocationalFrom = replaceFrom.slice(0, -5);
    const inputVocationalFrom_Array = sliceinputVocationalFrom.split(" |:| ");
    setVocationalFrom(inputVocationalFrom_Array);
  };
  const [VocationalTo, setVocationalTo] = useState([]);
  const loadVocationalTo = async () => {
    var inputVocationalTo = document.getElementById("vocTo").value;
    var replaceTo = inputVocationalTo.replace(/-/g, "/");
    var sliceinputVocationalTo = replaceTo.slice(0, -5);
    const inputVocationalTo_Array = sliceinputVocationalTo.split(" |:| ");
    setVocationalTo(inputVocationalTo_Array);
  };
  const [VocationalUnit, setVocationalUnit] = useState([]);
  const loadVocationalUnit = async () => {
    var inputVocationalUnit = document.getElementById("vocUnit").value;
    var sliceinputVocationalUnit = inputVocationalUnit.slice(0, -5);
    const inputVocationalUnit_Array = sliceinputVocationalUnit.split(" |:| ");
    setVocationalUnit(inputVocationalUnit_Array);
  };
  const [VocationalYear, setVocationalYear] = useState([]);
  const loadVocationalYear = async () => {
    var inputVocationalYear = document.getElementById("vocYear").value;
    var sliceinputVocationalYear = inputVocationalYear.slice(0, -5);
    const inputVocationalYear_Array = sliceinputVocationalYear.split(" |:| ");
    setVocationalYear(inputVocationalYear_Array);
  };
  const [VocationalAward, setVocationalAward] = useState([]);
  const loadVocationalAward = async () => {
    var inputVocationalAward = document.getElementById("vocAward").value;
    var sliceinputVocationalAward = inputVocationalAward.slice(0, -5);
    const inputVocationalAward_Array = sliceinputVocationalAward.split(" |:| ");
    setVocationalAward(inputVocationalAward_Array);
  };

  //Hook for getting College
  const [CollegeName, setCollegeName] = useState([]);
  const loadCollegeName = async () => {
    var inputCollegename = document.getElementById("colName").value;
    var sliceinputCollegename = inputCollegename.slice(0, -5);
    const inputCollegename_Array = sliceinputCollegename.split(" |:| ");
    setCollegeName(inputCollegename_Array);
  };
  const [CollegeAttain, setCollegeAttain] = useState([]);
  const loadCollegeAttain = async () => {
    var inputCollegeAttain = document.getElementById("colAttain").value;
    var sliceinputCollegeAttain = inputCollegeAttain.slice(0, -5);
    const inputCollegeAttain_Array = sliceinputCollegeAttain.split(" |:| ");
    setCollegeAttain(inputCollegeAttain_Array);
  };
  const [CollegeFrom, setCollegeFrom] = useState([]);
  const loadCollegeFrom = async () => {
    var inputCollegeFrom = document.getElementById("colFrom").value;
    var replaceFrom = inputCollegeFrom.replace(/-/g, "/");
    var sliceinputCollegeFrom = replaceFrom.slice(0, -5);
    const inputCollegeFrom_Array = sliceinputCollegeFrom.split(" |:| ");
    setCollegeFrom(inputCollegeFrom_Array);
  };
  const [CollegeTo, setCollegeTo] = useState([]);
  const loadCollegeTo = async () => {
    var inputCollegeTo = document.getElementById("colTo").value;
    var replaceTo = inputCollegeTo.replace(/-/g, "/");
    var sliceinputCollegeTo = replaceTo.slice(0, -5);
    const inputCollegeTo_Array = sliceinputCollegeTo.split(" |:| ");
    setCollegeTo(inputCollegeTo_Array);
  };
  const [CollegeUnit, setCollegeUnit] = useState([]);
  const loadCollegeUnit = async () => {
    var inputCollegeUnit = document.getElementById("colUnit").value;
    var sliceinputCollegeUnit = inputCollegeUnit.slice(0, -5);
    const inputCollegeUnit_Array = sliceinputCollegeUnit.split(" |:| ");
    setCollegeUnit(inputCollegeUnit_Array);
  };
  const [CollegeYear, setCollegeYear] = useState([]);
  const loadCollegeYear = async () => {
    var inputCollegeYear = document.getElementById("colYear").value;
    var sliceinputCollegeYear = inputCollegeYear.slice(0, -5);
    const inputCollegeYear_Array = sliceinputCollegeYear.split(" |:| ");
    setCollegeYear(inputCollegeYear_Array);
  };
  const [CollegeAward, setCollegeAward] = useState([]);
  const loadCollegeAward = async () => {
    var inputCollegeAward = document.getElementById("colAward").value;
    var sliceinputCollegeAward = inputCollegeAward.slice(0, -5);
    const inputCollegeAward_Array = sliceinputCollegeAward.split(" |:| ");
    setCollegeAward(inputCollegeAward_Array);
  };

  //Hook for getting Graduate Studies
  const [GraduateName, setGraduateName] = useState([]);
  const loadGraduateName = async () => {
    var inputGraduatename = document.getElementById("gradName").value;
    var sliceinputGraduatename = inputGraduatename.slice(0, -5);
    const inputGraduatename_Array = sliceinputGraduatename.split(" |:| ");
    setGraduateName(inputGraduatename_Array);
  };
  const [GraduateAttain, setGraduateAttain] = useState([]);
  const loadGraduateAttain = async () => {
    var inputGraduateAttain = document.getElementById("gradAttain").value;
    var sliceinputGraduateAttain = inputGraduateAttain.slice(0, -5);
    const inputGraduateAttain_Array = sliceinputGraduateAttain.split(" |:| ");
    setGraduateAttain(inputGraduateAttain_Array);
  };
  const [GraduateFrom, setGraduateFrom] = useState([]);
  const loadGraduateFrom = async () => {
    var inputGraduateFrom = document.getElementById("gradFrom").value;
    var replaceFrom = inputGraduateFrom.replace(/-/g, "/");
    var sliceinputGraduateFrom = replaceFrom.slice(0, -5);
    const inputGraduateFrom_Array = sliceinputGraduateFrom.split(" |:| ");
    setGraduateFrom(inputGraduateFrom_Array);
  };
  const [GraduateTo, setGraduateTo] = useState([]);
  const loadGraduateTo = async () => {
    var inputGraduateTo = document.getElementById("gradTo").value;
    var replaceTo = inputGraduateTo.replace(/-/g, "/");
    var sliceinputGraduateTo = replaceTo.slice(0, -5);
    const inputGraduateTo_Array = sliceinputGraduateTo.split(" |:| ");
    setGraduateTo(inputGraduateTo_Array);
  };
  const [GraduateUnit, setGraduateUnit] = useState([]);
  const loadGraduateUnit = async () => {
    var inputGraduateUnit = document.getElementById("gradUnit").value;
    var sliceinputGraduateUnit = inputGraduateUnit.slice(0, -5);
    const inputGraduateUnit_Array = sliceinputGraduateUnit.split(" |:| ");
    setGraduateUnit(inputGraduateUnit_Array);
  };
  const [GraduateYear, setGraduateYear] = useState([]);
  const loadGraduateYear = async () => {
    var inputGraduateYear = document.getElementById("gradYear").value;
    var sliceinputGraduateYear = inputGraduateYear.slice(0, -5);
    const inputGraduateYear_Array = sliceinputGraduateYear.split(" |:| ");
    setGraduateYear(inputGraduateYear_Array);
  };
  const [GraduateAward, setGraduateAward] = useState([]);
  const loadGraduateAward = async () => {
    var inputGraduateAward = document.getElementById("gradAward").value;
    var sliceinputGraduateAward = inputGraduateAward.slice(0, -5);
    const inputGraduateAward_Array = sliceinputGraduateAward.split(" |:| ");
    setGraduateAward(inputGraduateAward_Array);
  };

  useEffect(() => {
    setTimeout(function () {
      loadElemName();
      loadElemfrom();
      loadElemTO();
      loadElemUNITS();
      loadElemYEAR();
      loadElemAWARD();

      loadSecondName();
      loadSecondAttain();
      loadSecondFrom();
      loadSecondTo();
      loadSecondUnit();
      loadSecondYear();
      loadSecondAward();

      loadVocationalName();
      loadVocationalAttain();
      loadVocationalFrom();
      loadVocationalTo();
      loadVocationalUnit();
      loadVocationalYear();
      loadVocationalAward();

      loadCollegeName();
      loadCollegeAttain();
      loadCollegeFrom();
      loadCollegeTo();
      loadCollegeUnit();
      loadCollegeYear();
      loadCollegeAward();

      loadGraduateName();
      loadGraduateAttain();
      loadGraduateFrom();
      loadGraduateTo();
      loadGraduateUnit();
      loadGraduateYear();
      loadGraduateAward();
    }, 1000);
  }, []);

  //Elementary Content
  let elem_ctr = -1;
  const ElementaryContent = elemName.map(() => {
    elem_ctr++;
    return (
      <div key={elemName + elem_ctr}>
        <p
          style={{
            fontWeight: "bold",
            color: "#FFAA28",
            fontSize: "1.4rem",
            marginLeft: "10%",
            marginTop: "10px",
          }}
        >
          Elementary
        </p>
        <div className="content">
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Name of School</span>
              <span>
                {elemName[elem_ctr] == "" ? "N/A" : elemName[elem_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Basic education/ Degree/ Course</span>
              <span>Elementary</span>
            </div>
            <div className="span_cont">
              <span>Highest Level/ Units Earned</span>
              <span>
                {elemUNITS[elem_ctr] == "" ? "N/A" : elemUNITS[elem_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>SCHOLARSHIP / ACADEMIC HONORS RECEIVED</span>
              <span>
                {elemAWARD[elem_ctr] == "" ? "N/A" : elemAWARD[elem_ctr]}
              </span>
            </div>
          </div>
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Period of Attendance (From)</span>
              <span>
                {elemfrom[elem_ctr] == "" ? "N/A" : elemfrom[elem_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Period of Attendance (To)</span>
              <span>{elemTO[elem_ctr] == "" ? "N/A" : elemTO[elem_ctr]}</span>
            </div>
            <div className="span_cont">
              <span>Year Graduate</span>
              <span>
                {elemYEAR[elem_ctr] == "" ? "N/A" : elemYEAR[elem_ctr]}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  //Secondary Content
  let sec_ctr = -1;
  const SecondaryContent = SecondName.map(() => {
    sec_ctr++;
    return (
      <div key={SecondName + sec_ctr}>
        <p
          style={{
            fontWeight: "bold",
            color: "#FFAA28",
            fontSize: "1.4rem",
            marginLeft: "10%",
            marginTop: "10px",
          }}
        >
          Secondary
        </p>
        <div className="content">
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Name of School</span>
              <span>
                {SecondName[sec_ctr] == "" ? "N/A" : SecondName[sec_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Basic education/ Degree/ Course</span>
              <span>
                {SecondAttain[sec_ctr] == "" ? "N/A" : SecondAttain[sec_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Highest Level/ Units Earned</span>
              <span>
                {SecondUnit[sec_ctr] == "" ? "N/A" : SecondUnit[sec_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>SCHOLARSHIP / ACADEMIC HONORS RECEIVED</span>
              <span>
                {SecondAward[sec_ctr] == "" ? "N/A" : SecondAward[sec_ctr]}
              </span>
            </div>
          </div>
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Period of Attendance (From)</span>
              <span>
                {SecondFrom[sec_ctr] == "" ? "N/A" : SecondFrom[sec_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Period of Attendance (To)</span>
              <span>{SecondTo[sec_ctr] == "" ? "N/A" : SecondTo[sec_ctr]}</span>
            </div>
            <div className="span_cont">
              <span>Year Graduate</span>
              <span>
                {SecondYear[sec_ctr] == "" ? "N/A" : SecondYear[sec_ctr]}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  //Vocational Content
  let voc_ctr = -1;
  const VocationalContent = VocationalName.map(() => {
    voc_ctr++;
    return (
      <div key={voc_ctr}>
        <p
          style={{
            fontWeight: "bold",
            color: "#FFAA28",
            fontSize: "1.4rem",
            marginLeft: "10%",
            marginTop: "10px",
          }}
        >
          Vocational
        </p>
        <div className="content">
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Name of School</span>
              <span>
                {VocationalName[voc_ctr] == ""
                  ? "N/A"
                  : VocationalName[voc_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Basic education/ Degree/ Course</span>
              <span>
                {VocationalAttain[voc_ctr] == ""
                  ? "N/A"
                  : VocationalAttain[voc_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Highest Level/ Units Earned</span>
              <span>
                {VocationalUnit[voc_ctr] == ""
                  ? "N/A"
                  : VocationalUnit[voc_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>SCHOLARSHIP / ACADEMIC HONORS RECEIVED</span>
              <span>
                {VocationalAward[voc_ctr] == ""
                  ? "N/A"
                  : VocationalAward[voc_ctr]}
              </span>
            </div>
          </div>
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Period of Attendance (From)</span>
              <span>
                {VocationalFrom[voc_ctr] == ""
                  ? "N/A"
                  : VocationalFrom[voc_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Period of Attendance (To)</span>
              <span>
                {VocationalTo[voc_ctr] == "" ? "N/A" : VocationalTo[voc_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Year Graduate</span>
              <span>
                {VocationalYear[voc_ctr] == ""
                  ? "N/A"
                  : VocationalYear[voc_ctr]}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  //College Content
  let col_ctr = -1;
  const CollegeContent = CollegeName.map(() => {
    col_ctr++;
    return (
      <div key={col_ctr}>
        <p
          style={{
            fontWeight: "bold",
            color: "#FFAA28",
            fontSize: "1.4rem",
            marginLeft: "10%",
            marginTop: "10px",
          }}
        >
          College
        </p>
        <div className="content">
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Name of School</span>
              <span>
                {CollegeName[col_ctr] == "" ? "N/A" : CollegeName[col_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Basic education/ Degree/ Course</span>
              <span>
                {CollegeAttain[col_ctr] == "" ? "N/A" : CollegeAttain[col_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Highest Level/ Units Earned</span>
              <span>
                {CollegeUnit[col_ctr] == "" ? "N/A" : CollegeUnit[col_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>SCHOLARSHIP / ACADEMIC HONORS RECEIVED</span>
              <span>
                {CollegeAward[col_ctr] == "" ? "N/A" : CollegeAward[col_ctr]}
              </span>
            </div>
          </div>
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Period of Attendance (From)</span>
              <span>
                {CollegeFrom[col_ctr] == "" ? "N/A" : CollegeFrom[col_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Period of Attendance (To)</span>
              <span>
                {CollegeTo[col_ctr] == "" ? "N/A" : CollegeTo[col_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Year Graduate</span>
              <span>
                {CollegeYear[col_ctr] == "" ? "N/A" : CollegeYear[col_ctr]}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  //Graduate Studies Content
  let grad_ctr = -1;
  const GraduateContent = GraduateName.map(() => {
    grad_ctr++;
    return (
      <div key={grad_ctr}>
        <p
          style={{
            fontWeight: "bold",
            color: "#FFAA28",
            fontSize: "1.4rem",
            marginLeft: "10%",
            marginTop: "10px",
          }}
        >
          Graduate Studies
        </p>
        <div className="content">
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Name of School</span>
              <span>
                {GraduateName[grad_ctr] == "" ? "N/A" : GraduateName[grad_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Basic education/ Degree/ Course</span>
              <span>
                {GraduateAttain[grad_ctr] == ""
                  ? "N/A"
                  : GraduateAttain[grad_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Highest Level/ Units Earned</span>
              <span>
                {GraduateUnit[grad_ctr] == "" ? "N/A" : GraduateUnit[grad_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>SCHOLARSHIP / ACADEMIC HONORS RECEIVED</span>
              <span>
                {GraduateAward[grad_ctr] == ""
                  ? "N/A"
                  : GraduateAward[grad_ctr]}
              </span>
            </div>
          </div>
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Period of Attendance (From)</span>
              <span>
                {GraduateFrom[grad_ctr] == "" ? "N/A" : GraduateFrom[grad_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Period of Attendance (To)</span>
              <span>
                {GraduateTo[grad_ctr] == "" ? "N/A" : GraduateTo[grad_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Year Graduate</span>
              <span>
                {GraduateYear[grad_ctr] == "" ? "N/A" : GraduateYear[grad_ctr]}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  //Hook for getting pds3
  const [pdsStep3, setpdsStep3] = useState([]);

  const loadpdsStep3 = async () => {
    const result = await axios.get("http://localhost/fms/pdsStep3.php");
    setpdsStep3(result.data.phpresult);
  };
  useEffect(() => {
    loadpdsStep3();
  }, []);

  var key_pds_D = 0;
  const pds_step3 = pdsStep3.map((res) => {
    key_pds_D++;
    if (res.email_id === email_key) {
      return (
        <div key={key_pds_D}>
          <input type="hidden" id="CSE_career" value={res.CSE_career} />
          <input type="hidden" id="CSE_rating" value={res.CSE_rating} />
          <input type="hidden" id="CSE_dateExam" value={res.CSE_dateExam} />
          <input type="hidden" id="CSE_Place" value={res.CSE_Place} />
          <input type="hidden" id="CSE_license" value={res.CSE_license} />
          <input type="hidden" id="CSE_dateVal" value={res.CSE_dateVal} />
        </div>
      );
    }
  });

  //Hook for getting CSE
  const [CseBoard, setCseBoard] = useState([]);
  const loadCseBoard = async () => {
    var inputCseBoard = document.getElementById("CSE_career").value;
    var sliceinputCseBoard = inputCseBoard.slice(0, -5);
    const inputCseBoard_Array = sliceinputCseBoard.split(" |:| ");
    setCseBoard(inputCseBoard_Array);
  };
  const [CseRating, setCseRating] = useState([]);
  const loadCseRating = async () => {
    var inputCseRating = document.getElementById("CSE_rating").value;
    var sliceinputCseRating = inputCseRating.slice(0, -5);
    const inputCseRating_Array = sliceinputCseRating.split(" |:| ");
    setCseRating(inputCseRating_Array);
  };
  const [CseDateExam, setCseDateExam] = useState([]);
  const loadCseDateExam = async () => {
    var inputCseDateExam = document.getElementById("CSE_dateExam").value;
    var replaceTo = inputCseDateExam.replace(/-/g, "/");
    var sliceCseDateExam = replaceTo.slice(0, -5);
    const CseDateExam_Array = sliceCseDateExam.split(" |:| ");
    setCseDateExam(CseDateExam_Array);
  };
  const [CsePlaceExam, setCsePlaceExam] = useState([]);
  const loadCsePlaceExam = async () => {
    var inputCsePlaceExam = document.getElementById("CSE_Place").value;
    var sliceinputCsePlaceExam = inputCsePlaceExam.slice(0, -5);
    const inputCsePlaceExam_Array = sliceinputCsePlaceExam.split(" |:| ");
    setCsePlaceExam(inputCsePlaceExam_Array);
  };
  const [CseLicense, setCseLicense] = useState([]);
  const loadCseLicense = async () => {
    var inputCseLicense = document.getElementById("CSE_license").value;
    var sliceinputCseLicense = inputCseLicense.slice(0, -5);
    const inputCseLicense_Array = sliceinputCseLicense.split(" |:| ");
    setCseLicense(inputCseLicense_Array);
  };
  const [CseDateVal, setCseDateVal] = useState([]);
  const loadCseDateVal = async () => {
    var inputCseDateVal = document.getElementById("CSE_dateVal").value;
    var replaceTo = inputCseDateVal.replace(/-/g, "/");
    var sliceCseDateVal = replaceTo.slice(0, -5);
    const CseDateVal_Array = sliceCseDateVal.split(" |:| ");
    setCseDateVal(CseDateVal_Array);
  };

  useEffect(() => {
    setTimeout(function () {
      loadCseBoard();
      loadCseRating();
      loadCseDateExam();
      loadCsePlaceExam();
      loadCseLicense();
      loadCseDateVal();
    }, 1000);
  }, []);

  //CIVIL SERVICE ELIGIBILITY
  let cse_ctr = -1;
  const cseContent = CseBoard.map(() => {
    cse_ctr++;
    return (
      <div key={cse_ctr}>
        <p
          style={{
            fontWeight: "bold",
            color: "#FFAA28",
            fontSize: "1.4rem",
            marginLeft: "10%",
            marginTop: "10px",
          }}
        >
          {"Entry #" + (cse_ctr + 1)}
        </p>
        <div className="content">
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>
                Career Service/ RA 1080 (Board/Bar) Under Special Laws/CES/CSEE
              </span>
              <span>{CseBoard[cse_ctr] == "" ? "N/A" : CseBoard[cse_ctr]}</span>
            </div>
            <div className="span_cont">
              <span>Rating</span>
              <span>
                {CseRating[cse_ctr] == "" ? "N/A" : CseRating[cse_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Date of Examination</span>
              <span>
                {CseDateExam[cse_ctr] == "" ? "N/A" : CseDateExam[cse_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Placement of Examination</span>
              <span>
                {CsePlaceExam[cse_ctr] == "" ? "N/A" : CsePlaceExam[cse_ctr]}
              </span>
            </div>
          </div>
          <div className="left">
            <p
              style={{
                marginTop: "-25px",
                fontWeight: "600",
                fontSize: "1.2rem",
                color: "#FFAA28",
                marginBottom: "10px",
              }}
            >
              License (if applicable)
            </p>

            <div className="span_cont" style={{ marginLeft: "15px" }}>
              <span> Number</span>
              <span>
                - {CseLicense[cse_ctr] == "" ? "N/A" : CseLicense[cse_ctr]}
              </span>
            </div>
            <div className="span_cont" style={{ marginLeft: "15px" }}>
              <span>Date of Validity</span>
              <span>
                - {CseDateVal[grad_ctr] == "" ? "N/A" : CseDateVal[cse_ctr]}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  //Hook for getting pds4
  const [pdsStep4, setpdsStep4] = useState([]);

  const loadpdsStep4 = async () => {
    const result = await axios.get("http://localhost/fms/pdsStep4.php");
    setpdsStep4(result.data.phpresult);
  };
  useEffect(() => {
    loadpdsStep4();
  }, []);

  var key_pds_E = 0;
  const pds_step4 = pdsStep4.map((res) => {
    key_pds_E++;
    if (res.email_id === email_key) {
      return (
        <div key={key_pds_E}>
          <input type="hidden" id="WE_dateFrom" value={res.WE_dateFrom} />
          <input type="hidden" id="WE_dateTo" value={res.WE_dateTo} />
          <input type="hidden" id="WE_position" value={res.WE_position} />
          <input type="hidden" id="WE_dept" value={res.WE_dept} />
          <input type="hidden" id="WE_monthly" value={res.WE_monthly} />
          <input type="hidden" id="WE_salary" value={res.WE_salary} />
          <input type="hidden" id="WE_appoint" value={res.WE_appoint} />
          <input type="hidden" id="WE_govt" value={res.WE_govt} />
        </div>
      );
    }
  });

  //Hook for gettin WE
  const [weFrom, setweFrom] = useState([]);
  const loadweFrom = async () => {
    var inputweFrom = document.getElementById("WE_dateFrom").value;
    var replaceTo = inputweFrom.replace(/-/g, "/");
    var sliceweFrom = replaceTo.slice(0, -5);
    const weFrom_Array = sliceweFrom.split(" |:| ");
    setweFrom(weFrom_Array);
  };
  const [weTo, setweTo] = useState([]);
  const loadweTo = async () => {
    var inputweTo = document.getElementById("WE_dateTo").value;
    var replaceTo = inputweTo.replace(/-/g, "/");
    var sliceweTo = replaceTo.slice(0, -5);
    const weTo_Array = sliceweTo.split(" |:| ");
    setweTo(weTo_Array);
  };
  const [wePosition, setwePosition] = useState([]);
  const loadwePosition = async () => {
    var inputwePosition = document.getElementById("WE_position").value;
    var sliceinputwePosition = inputwePosition.slice(0, -5);
    const inputwePosition_Array = sliceinputwePosition.split(" |:| ");
    setwePosition(inputwePosition_Array);
  };
  const [weDepartment, setweDepartment] = useState([]);
  const loadweDepartment = async () => {
    var inputweDepartment = document.getElementById("WE_dept").value;
    var sliceinputweDepartment = inputweDepartment.slice(0, -5);
    const inputweDepartment_Array = sliceinputweDepartment.split(" |:| ");
    setweDepartment(inputweDepartment_Array);
  };
  const [weMonthly, setweMonthly] = useState([]);
  const loadweMonthly = async () => {
    var inputweMonthly = document.getElementById("WE_monthly").value;
    var sliceinputweMonthly = inputweMonthly.slice(0, -5);
    const inputweMonthly_Array = sliceinputweMonthly.split(" |:| ");
    setweMonthly(inputweMonthly_Array);
  };
  const [weSalary, setweSalary] = useState([]);
  const loadweSalary = async () => {
    var inputweSalary = document.getElementById("WE_salary").value;
    var sliceinputweSalary = inputweSalary.slice(0, -5);
    const inputweSalary_Array = sliceinputweSalary.split(" |:| ");
    setweSalary(inputweSalary_Array);
  };
  const [weAppoint, setweAppoint] = useState([]);
  const loadweAppoint = async () => {
    var inputweAppoint = document.getElementById("WE_appoint").value;
    var sliceinputweAppoint = inputweAppoint.slice(0, -5);
    const inputweAppoint_Array = sliceinputweAppoint.split(" |:| ");
    setweAppoint(inputweAppoint_Array);
  };
  const [weGov, setweGov] = useState([]);
  const loadweGov = async () => {
    var inputweGov = document.getElementById("WE_govt").value;
    var sliceinputweGov = inputweGov.slice(0, -5);
    const inputweGov_Array = sliceinputweGov.split(" |:| ");
    setweGov(inputweGov_Array);
  };

  useEffect(() => {
    setTimeout(function () {
      loadweFrom();
      loadweTo();
      loadwePosition();
      loadweDepartment();
      loadweMonthly();
      loadweSalary();
      loadweAppoint();
      loadweGov();
    }, 1000);
  }, []);

  //WORK EXPERIENCE
  let we_ctr = -1;
  const weContent = wePosition.map(() => {
    we_ctr++;
    return (
      <div key={we_ctr}>
        <p
          style={{
            fontWeight: "bold",
            color: "#FFAA28",
            fontSize: "1.4rem",
            marginLeft: "10%",
            marginTop: "10px",
          }}
        >
          {"Entry #" + (we_ctr + 1)}
        </p>
        <div className="content">
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Inclusive dates (from)</span>
              <span>{weFrom[we_ctr] == "" ? "N/A" : weFrom[we_ctr]}</span>
            </div>
            <div className="span_cont">
              <span>Inclusive dates (TO)</span>
              <span>{weTo[we_ctr] == "" ? "N/A" : weTo[we_ctr]}</span>
            </div>
            <div className="span_cont">
              <span>POSITION TITLE</span>
              <span>
                {wePosition[we_ctr] == "" ? "N/A" : wePosition[we_ctr]}
              </span>
            </div>
            <div className="span_cont">
              <span>Department / Agency / Office / Company</span>
              <span>
                {weDepartment[we_ctr] == "" ? "N/A" : weDepartment[we_ctr]}
              </span>
            </div>
          </div>
          <div className="left">
            <div className="span_cont" style={{ marginTop: "-20px" }}>
              <span>Monthly Salary</span>
              <span>{weMonthly[we_ctr] == "" ? "N/A" : weMonthly[we_ctr]}</span>
            </div>
            <div className="span_cont">
              <span>Salary / Job Grade & Step</span>
              <span>{weSalary[we_ctr] == "" ? "N/A" : weSalary[we_ctr]}</span>
            </div>
            <div className="span_cont">
              <span>Status of Appointment </span>
              <span>{weAppoint[we_ctr] == "" ? "N/A" : weAppoint[we_ctr]}</span>
            </div>
            <div className="span_cont">
              <span>Government Service</span>
              <span>{weGov[we_ctr] == "" ? "N/A" : weGov[we_ctr]}</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  //Hook for getting pds5
  const [pdsStep5, setpdsStep5] = useState([]);

  const loadpdsStep5 = async () => {
    const result = await axios.get("http://localhost/fms/pdsStep5.php");
    setpdsStep5(result.data.phpresult);
  };
  useEffect(() => {
    loadpdsStep5();
  }, []);

  var key_pds_F = 0;
  const pds_step5 = pdsStep5.map((res) => {
    key_pds_F++;
    if (res.email_id === email_key) {
      return (
        <div key={key_pds_F}>
          <input type="hidden" id="LD_title" value={res.LD_title} />
          <input type="hidden" id="LD_dateFrom" value={res.LD_dateFrom} />
          <input type="hidden" id="LD_dateTo" value={res.LD_dateTo} />
          <input type="hidden" id="LD_hours" value={res.LD_hours} />
          <input type="hidden" id="LD_type" value={res.LD_type} />
          <input type="hidden" id="LD_sponsored" value={res.LD_sponsored} />
          <input type="hidden" id="LD_coverage" value={res.LD_coverage} />
        </div>
      );
    }
  });

  //Hook for getting LD
  const [ldTitle, setldTitle] = useState([]);
  const loadldTitle = async () => {
    var inputldTitle = document.getElementById("LD_title").value;
    var sliceinputldTitle = inputldTitle.slice(0, -5);
    const inputldTitle_Array = sliceinputldTitle.split(" |:| ");
    setldTitle(inputldTitle_Array);
  };
  const [ldFrom, setldFrom] = useState([]);
  const loadldFrom = async () => {
    var inputldFrom = document.getElementById("LD_dateFrom").value;
    var replaceTo = inputldFrom.replace(/-/g, "/");
    var sliceldFrom = replaceTo.slice(0, -5);
    const ldFrom_Array = sliceldFrom.split(" |:| ");
    setldFrom(ldFrom_Array);
  };
  const [ldTo, setldTo] = useState([]);
  const loadldTo = async () => {
    var inputldTo = document.getElementById("LD_dateTo").value;
    var replaceTo = inputldTo.replace(/-/g, "/");
    var sliceldTo = replaceTo.slice(0, -5);
    const ldTo_Array = sliceldTo.split(" |:| ");
    setldTo(ldTo_Array);
  };

  const [ldHours, setldHours] = useState([]);
  const loadldHours = async () => {
    var inputldHours = document.getElementById("LD_hours").value;
    var sliceinputldHours = inputldHours.slice(0, -5);
    const inputldHours_Array = sliceinputldHours.split(" |:| ");
    setldHours(inputldHours_Array);
  };
  const [ldType, setldType] = useState([]);
  const loadldType = async () => {
    var inputldType = document.getElementById("LD_type").value;
    var sliceinputldType = inputldType.slice(0, -5);
    const inputldType_Array = sliceinputldType.split(" |:| ");
    setldType(inputldType_Array);
  };
  const [ldCoverage, setldCoverage] = useState([]);
  const loadldCoverage = async () => {
    var inputldCoverage = document.getElementById("LD_sponsored").value;
    var sliceinputldCoverage = inputldCoverage.slice(0, -5);
    const inputldCoverage_Array = sliceinputldCoverage.split(" |:| ");
    setldCoverage(inputldCoverage_Array);
  };
  const [ldSponsor, setldSponsor] = useState([]);
  const loadldSponsor = async () => {
    var inputldSponsor = document.getElementById("LD_coverage").value;
    var sliceinputldSponsor = inputldSponsor.slice(0, -5);
    const inputldSponsor_Array = sliceinputldSponsor.split(" |:| ");
    setldSponsor(inputldSponsor_Array);
  };

  useEffect(() => {
    setTimeout(function () {
      loadldTitle();
      loadldFrom();
      loadldTo();
      loadldHours();
      loadldType();
      loadldCoverage();
      loadldSponsor();
    }, 1000);
  }, []);

  //LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS ATTENDED
  let ld_ctr = -1;
  let landCtr = 0;
  const ldContent = ldTo.map(() => {
    ld_ctr++;

    var currentTime = new Date();
    var yearToday = currentTime.getFullYear();
    var dateTo = ldTo[ld_ctr];
    var splitDate = dateTo.split("/");
    var resultYear = yearToday - splitDate[0];

    if (resultYear <= 5) {
      landCtr++;
      return (
        <div key={ld_ctr}>
          <p
            style={{
              fontWeight: "bold",
              color: "#FFAA28",
              fontSize: "1.4rem",
              marginLeft: "10%",
              marginTop: "10px",
            }}
          >
            {"Entry #" + landCtr}
          </p>
          <div className="content">
            <div className="left">
              <div className="span_cont" style={{ marginTop: "-20px" }}>
                <span>
                  Title of learning and development interventions/ training
                  programs
                </span>
                <span>{ldTitle[ld_ctr] == "" ? "N/A" : ldTitle[ld_ctr]}</span>
              </div>
              <div className="span_cont">
                <span>Inclusive dates of attendance (From)</span>
                <span>{ldFrom[ld_ctr] == "" ? "N/A" : ldFrom[ld_ctr]}</span>
              </div>
              <div className="span_cont">
                <span>Inclusive dates of attendance (To)</span>
                <span>{ldTo[ld_ctr] == "" ? "N/A" : ldTo[ld_ctr]}</span>
              </div>
              <div className="span_cont">
                <span>Number of hours</span>
                <span>
                  {ldHours[ld_ctr] == "" ? "N/A" : ldHours[ld_ctr] + " HRS"}
                </span>
              </div>
            </div>
            <div className="left">
              <div className="span_cont" style={{ marginTop: "-20px" }}>
                <span>
                  Type of LD (Managerial/ Supervisory/ Technical / etc)
                </span>
                <span>{ldType[ld_ctr] == "" ? "N/A" : ldType[ld_ctr]}</span>
              </div>
              <div className="span_cont">
                <span>Conducted/ sponsored by</span>
                <span>
                  {ldSponsor[ld_ctr] == "" ? "N/A" : ldSponsor[ld_ctr]}
                </span>
              </div>
              <div className="span_cont">
                <span>
                  Coverage (International / National / Regional / Local)
                </span>
                <span>
                  {ldCoverage[ld_ctr] == "" ? "N/A" : ldCoverage[ld_ctr]}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div key={ld_ctr}>
          <p
            style={{
              fontWeight: "bold",
              color: "#FFAA28",
              fontSize: "1.4rem",
              marginLeft: "10%",
              marginTop: "10px",
            }}
          >
            {"Entry #" + 1}
          </p>
          <div className="content">
            <div className="left">
              <div className="span_cont" style={{ marginTop: "-20px" }}>
                <span>
                  Title of learning and development interventions/ training
                  programs
                </span>
                <span>N/A</span>
              </div>
              <div className="span_cont">
                <span>Inclusive dates of attendance (From)</span>
                <span>N/A</span>
              </div>
              <div className="span_cont">
                <span>Inclusive dates of attendance (To)</span>
                <span>N/A</span>
              </div>
              <div className="span_cont">
                <span>Number of hours</span>
                <span>N/A</span>
              </div>
            </div>
            <div className="left">
              <div className="span_cont" style={{ marginTop: "-20px" }}>
                <span>
                  Type of LD (Managerial/ Supervisory/ Technical / etc)
                </span>
                <span>N/A</span>
              </div>
              <div className="span_cont">
                <span>Conducted/ sponsored by</span>
                <span>N/A</span>
              </div>
              <div className="span_cont">
                <span>
                  Coverage (International / National / Regional / Local)
                </span>
                <span>N/A</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  function pds1_go() {
    document.getElementsByClassName("pds_1")[0].style.display = "block";
    document.getElementsByClassName("pds_2")[0].style.display = "none";
    document.getElementsByClassName("pds_3")[0].style.display = "none";
    document.getElementsByClassName("pds_4")[0].style.display = "none";
    document.getElementsByClassName("pds_5")[0].style.display = "none";

    document.getElementsByClassName("box1go")[0].style.backgroundColor =
      "#fbce8b";
    document.getElementsByClassName("box1go")[0].style.borderLeft =
      "5px solid rgb(254, 138, 60)";

    document.getElementsByClassName("box2go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box2go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box3go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box3go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box4go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box4go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box5go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box5go")[0].style.borderLeft =
      "0px solid #ffff";
  }
  function pds2_go() {
    document.getElementsByClassName("pds_2")[0].style.display = "block";
    document.getElementsByClassName("pds_1")[0].style.display = "none";
    document.getElementsByClassName("pds_3")[0].style.display = "none";
    document.getElementsByClassName("pds_4")[0].style.display = "none";
    document.getElementsByClassName("pds_5")[0].style.display = "none";

    document.getElementsByClassName("box2go")[0].style.backgroundColor =
      "#fbce8b";
    document.getElementsByClassName("box2go")[0].style.borderLeft =
      "5px solid rgb(254, 138, 60)";

    document.getElementsByClassName("box1go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box1go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box3go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box3go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box4go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box4go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box5go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box5go")[0].style.borderLeft =
      "0px solid #ffff";
  }
  function pds3_go() {
    document.getElementsByClassName("pds_3")[0].style.display = "block";
    document.getElementsByClassName("pds_2")[0].style.display = "none";
    document.getElementsByClassName("pds_1")[0].style.display = "none";
    document.getElementsByClassName("pds_4")[0].style.display = "none";
    document.getElementsByClassName("pds_5")[0].style.display = "none";

    document.getElementsByClassName("box3go")[0].style.backgroundColor =
      "#fbce8b";
    document.getElementsByClassName("box3go")[0].style.borderLeft =
      "5px solid rgb(254, 138, 60)";

    document.getElementsByClassName("box2go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box2go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box1go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box1go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box4go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box4go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box5go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box5go")[0].style.borderLeft =
      "0px solid #ffff";
  }
  function pds4_go() {
    document.getElementsByClassName("pds_4")[0].style.display = "block";
    document.getElementsByClassName("pds_2")[0].style.display = "none";
    document.getElementsByClassName("pds_3")[0].style.display = "none";
    document.getElementsByClassName("pds_1")[0].style.display = "none";
    document.getElementsByClassName("pds_5")[0].style.display = "none";

    document.getElementsByClassName("box4go")[0].style.backgroundColor =
      "#fbce8b";
    document.getElementsByClassName("box4go")[0].style.borderLeft =
      "5px solid rgb(254, 138, 60)";

    document.getElementsByClassName("box2go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box2go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box3go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box3go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box1go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box1go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box5go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box5go")[0].style.borderLeft =
      "0px solid #ffff";
  }
  function pds5_go() {
    document.getElementsByClassName("pds_5")[0].style.display = "block";
    document.getElementsByClassName("pds_2")[0].style.display = "none";
    document.getElementsByClassName("pds_3")[0].style.display = "none";
    document.getElementsByClassName("pds_4")[0].style.display = "none";
    document.getElementsByClassName("pds_1")[0].style.display = "none";

    document.getElementsByClassName("box5go")[0].style.backgroundColor =
      "#fbce8b";
    document.getElementsByClassName("box5go")[0].style.borderLeft =
      "5px solid rgb(254, 138, 60)";

    document.getElementsByClassName("box2go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box2go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box3go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box3go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box4go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box4go")[0].style.borderLeft =
      "0px solid #ffff";
    document.getElementsByClassName("box1go")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("box1go")[0].style.borderLeft =
      "0px solid #ffff";
  }

  //Skeleton show
  setTimeout(function () {
    var elements = document.getElementsByClassName("skeleton_done");
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].style.display = "block";
    }
    var elements1 = document.getElementsByClassName("skeleton_show");
    for (var i = 0, len = elements1.length; i < len; i++) {
      elements1[i].style.display = "none";
    }
    document.getElementsByClassName("link_to_show")[0].disabled =false;
  }, 1200);

  function goToWebView() {
    document.getElementsByClassName("view_pdf_container")[0].style.display =
      "none";
    document.getElementsByClassName("view_pds_container")[0].style.display =
      "block";
    document.getElementById("PDFView_PDS").style.borderBottom =
      "0px solid #FFAA28";
    document.getElementById("PDFView_PDS").style.fontWeight = "normal";

    document.getElementById("WebView_PDS").style.borderBottom =
      "5px solid #FFAA28";
    document.getElementById("WebView_PDS").style.fontWeight = "600";
  }
  //function go to pdf view
  function goToPDFView() {
    document.getElementsByClassName("view_pds_container")[0].style.display =
      "none";
    document.getElementById("WebView_PDS").style.borderBottom =
      "0px solid #FFAA28";
    document.getElementById("WebView_PDS").style.fontWeight = "normal";

    document.getElementsByClassName("view_pdf_container")[0].style.display =
      "block";
    document.getElementById("PDFView_PDS").style.borderBottom =
      "5px solid #FFAA28";
    document.getElementById("PDFView_PDS").style.fontWeight = "600";
  }

  function printDocument() {
    html2canvas(document.querySelector("#convertable_pdf_PDS"), {
      useCORS: true,
      allowTaint: true,
      scrollY: 0,
    }).then((canvas) => {
      const image = { type: "png", quality: 0.98 };
      const margin = [0.5, 0.5];
      const filename = "PersonalDataSheet.pdf";
      var imgWidth = 8.5;
      var pageHeight = 11;
      var innerPageWidth = imgWidth - margin[0] * 2;
      var innerPageHeight = pageHeight - margin[1] * 2;
      // Calculate the number of pages.
      var pxFullHeight = canvas.height;
      var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
      var nPages = Math.ceil(pxFullHeight / pxPageHeight);
      // Define pageHeight separately so it can be trimmed on the final page.
      var pageHeight = innerPageHeight;
      // Create a one-page canvas to split up the full image.
      var pageCanvas = document.createElement("canvas");
      var pageCtx = pageCanvas.getContext("2d");
      pageCanvas.width = canvas.width;
      pageCanvas.height = pxPageHeight;
      // Initialize the PDF.
      var pdf = new jsPDF("p", "in", [8.5, 11]);
      for (var page = 0; page < nPages; page++) {
        // Trim the final page to reduce file size.
        if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
          pageCanvas.height = pxFullHeight % pxPageHeight;
          pageHeight = (pageCanvas.height * innerPageWidth) / pageCanvas.width;
        }
        // Display the page.
        var w = pageCanvas.width;
        var h = pageCanvas.height;
        pageCtx.fillStyle = "white";
        pageCtx.fillRect(0, 0, w, h);
        pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);
        // Add the page to the PDF.
        if (page > 0) pdf.addPage();
        debugger;
        var imgData = pageCanvas.toDataURL(
          "image/" + image.type,
          image.quality
        );
        pdf.addImage(
          imgData,
          image.type,
          margin[1],
          margin[0],
          innerPageWidth,
          pageHeight
        );
      }
      pdf.save(filename);
    });
  }

  function printPDShover() {
    document.getElementsByClassName("view_pdf_container")[0].style.display =
      "block";
  }
  function printPDSRemovehover() {
    document.getElementsByClassName("view_pdf_container")[0].style.display =
      "none";
  }

  const downloadProfileForm=(e)=>{
    e.preventDefault();
    //Sending the data request to call it on backend
    const sendData = {
        email:localStorage.getItem('viewFacultyEmail'),
    }
    //Sending the data to my backend
    axios.post('http://localhost/fms/downloadPDS.php',sendData)
    .then((result)=>{})    
  }
  return (
    <div className="dashboard_container">
        <NavbarAdmin/>

      <div className="main_content">
        <NavbarSizer />

        <div className="choices_pds_page" style={{zIndex:"0"}}>
          <div id="WebView_PDS" onClick={goToWebView} style={{zIndex:"0"}}>
            Web View
          </div>
          <div id="PDFView_PDS" onClick={goToPDFView} style={{zIndex:"0"}}>
            PDF View
          </div>
        </div>

        <div style={{ margin: "0 auto", width: "92%" }}>
          <div className="view_pds_container">

            <div
              className="top_cover"
              style={{ backgroundImage: `url(${cover_banner})` }}
            >
              <p>PERSONAL INFORMATION</p>
              <div className="avatar_container">
                <div className="left">
                  <Avatar
                    className="my_avatarbig"
                    src={profile_photo}
                    sx={{
                      bgcolor: deepOrange[600],
                      width: "200px",
                      height: "200px",
                      fontSize: "5rem",
                      border: "2px solid #ffff",
                      borderRadius: "5px",
                    }}
                    variant="square"
                  >
                    {initialName}
                  </Avatar>
                  <div className="pds_contact">
                    <p className="view_pdsName">
                      {localStorage.getItem("viewFacultyName")}
                    </p>
                    <p className="view_pdsEmail">
                      {localStorage.getItem("viewFacultyEmail")}
                    </p>
                  </div>
                </div>
                <div className="right">
                  <div className="cover_button">
                    <form onSubmit={downloadProfileForm}>
                    <button
                      type="submit"
                      onClick={printDocument}
                      onMouseOver={printPDShover}
                      onMouseOut={printPDSRemovehover}
                    >
                      <img src={downloadyellow_icon} />
                      Download as PDF
                    </button>
                    </form>

                    <button id="Edit_profile_btn" className="link_to_show">
                      <img src={certification} />
                      View All certifications
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="web_pds_container">
              <div className="side_tab_container">
                <LightTooltip title="Basic Information" onClick={pds1_go}>
                  <div className="box active box1go">
                    <img src={basic_info} />
                  </div>
                </LightTooltip>

                <LightTooltip title="Educational Background" onClick={pds2_go}>
                  <div className="box box2go">
                    <img src={education_info} />
                  </div>
                </LightTooltip>

                <LightTooltip
                  title="Civil Service Eligibility"
                  onClick={pds3_go}
                >
                  <div className="box box3go">
                    <img src={service_info} />
                  </div>
                </LightTooltip>

                <LightTooltip title="Work Experience" onClick={pds4_go}>
                  <div className="box box4go">
                    <img src={work_info} />
                  </div>
                </LightTooltip>

                <LightTooltip
                  title="Learning and Development (L&D)"
                  onClick={pds5_go}
                >
                  <div className="box box5go">
                    <img src={LandD_info} />
                  </div>
                </LightTooltip>
              </div>

              <div className="right_content">
                <div className="pds_1">
                  {pds_step1}
                  {pds_step1_v2}
                </div>

                <div className="pds_2" style={{ display: "none" }}>
                  <div
                    className="row1"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div
                      className="box row1_content"
                      style={{ width: "100%", marginBottom: "20px" }}
                    >
                      <div className="top">
                        <img src={educationYellow} />
                        Educational Background
                      </div>
                      {ElementaryContent}
                    </div>
                    <div
                      className="box row1_content"
                      style={{ width: "100%", marginBottom: "20px" }}
                    >
                      <div className="top">
                        <img src={educationYellow} />
                        Educational Background
                      </div>
                      {SecondaryContent}
                    </div>
                    <div
                      className="box row1_content"
                      style={{ width: "100%", marginBottom: "20px" }}
                    >
                      <div className="top">
                        <img src={educationYellow} />
                        Educational Background
                      </div>
                      {VocationalContent}
                    </div>
                    <div
                      className="box row1_content"
                      style={{ width: "100%", marginBottom: "20px" }}
                    >
                      <div className="top">
                        <img src={educationYellow} />
                        Educational Background
                      </div>
                      {CollegeContent}
                    </div>
                    <div
                      className="box row1_content"
                      style={{ width: "100%", marginBottom: "20px" }}
                    >
                      <div className="top">
                        <img src={educationYellow} />
                        Educational Background
                      </div>
                      {GraduateContent}
                    </div>
                  </div>
                </div>
                {pds_step2 /* Eto yung mga input*/}

                <div className="pds_3" style={{ display: "none" }}>
                  <div
                    className="row1"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div
                      className="box row1_content"
                      style={{ width: "100%", marginBottom: "20px" }}
                    >
                      <div className="top">
                        <img src={cseYellow} />
                        Civil Service Eligibility
                      </div>
                      {cseContent}
                    </div>
                  </div>
                </div>
                {pds_step3 /* Eto yung mga input*/}

                <div className="pds_4" style={{ display: "none" }}>
                  <div
                    className="row1"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div
                      className="box row1_content"
                      style={{ width: "100%", marginBottom: "20px" }}
                    >
                      <div className="top">
                        <img src={workYellow} />
                        Work Experience
                      </div>
                      {weContent}
                    </div>
                  </div>
                </div>
                {pds_step4 /* Eto yung mga input*/}

                <div className="pds_5" style={{ display: "none" }}>
                  <div
                    className="row1"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div
                      className="box row1_content"
                      style={{ width: "100%", marginBottom: "20px" }}
                    >
                      <div className="top" id="top_phoneLD">
                        <img src={workYellow} />
                        Learning and Development (L&D) Interventions / Training
                        Programs Attended
                      </div>
                      <p
                        style={{
                          fontSize: ".8rem",
                          margin: "10px 5%",
                          fontStyle: "Italic",
                        }}
                      >
                        (Start from the most recent L&D/training program and
                        include only the relevant L&D/training taken for the
                        last five (5) years for Division
                        Chief/Executive/Managerial positions)
                      </p>
                      {ldContent}
                    </div>
                  </div>
                </div>
                {pds_step5 /* Eto yung mga input*/}
              </div>
            </div>
          </div>

          <div className="view_pdf_container">
              <PreviewFacultyPDS/>
          </div>
        </div>
      </div>

        <RightNavbarAdmin/>
    </div>
  );
}
