import React, { useEffect } from "react";
import CICT_Logo from "../images/login/cict_logo.png";
import datasheet_info from "../images/icons/datasheet_info.svg";
import { useState } from "react";
import axios from "axios";

export default function PreviewPDS() {
  //getting the email of user
  let email_key = localStorage.getItem("email");

  //Hook for getting pds1
  const [pdsStep1, setpdsStep1] = useState([]);

  const loadpdsStep1 = async () => {
    const result = await axios.get("http://localhost/fms/pdsStep1.php");
    setpdsStep1(result.data.phpresult);
  };

  useEffect(() => {
    loadpdsStep1();
  }, []);

  const pds_step1 = pdsStep1.map((res) => {
    if (res.email_id === email_key) {
      return (
        <div className="information_content">
          <div className="header">Personal Information</div>

          <div className="personal name">
            <div className="box">
              <span>First Name</span>
              <span id="preview_fname">{res.fname}</span>
            </div>
            <div className="box">
              <span>Middle Name</span>
              <span id="preview_mname">{res.mname}</span>
            </div>
            <div className="box">
              <span>Last Name</span>
              <span id="preview_lname">{res.lname}</span>
            </div>
            <div className="box">
              <span>Name Extension</span>
              <span id="preview_extension">{res.nameExtension}</span>
            </div>
          </div>

          <div className="personal other_personal">
            <div className="left">
              <div className="box">
                <span>Date of Birth</span>
                <span id="preview_bday">{res.bday}</span>
              </div>
              <div className="box">
                <span>Age</span>
                <span id="preview_age">{res.age + " years old"}</span>
              </div>
              <div className="box">
                <span>Place of Birth</span>
                <span id="preview_pob">{res.cob + ", " + res.pob}</span>
              </div>
              <div className="box">
                <span>Gender</span>
                <span id="preview_gender">{res.gender}</span>
              </div>
              <div className="box">
                <span>Civil Status</span>
                <span id="preview_civil">{res.civil}</span>
              </div>
              <div className="box">
                <span>Height</span>
                <span id="preview_height">{res.height + "CM"}</span>
              </div>
              <div className="box">
                <span>Weight</span>
                <span id="preview_weight">{res.weight + "KG"}</span>
              </div>
              <div className="box">
                <span>Blood Type</span>
                <span id="preview_blood">{res.blood}</span>
              </div>
              <div className="box">
                <span>GSIS ID NO.</span>
                <span id="preview_gsis">{res.gsis}</span>
              </div>
              <div className="box">
                <span>PAG-IBIG ID NO.</span>
                <span id="preview_pagibig">{res.pagibig}</span>
              </div>
              <div className="box">
                <span>PHILHEALTH NO.</span>
                <span id="preview_philhealth">{res.philhealth}</span>
              </div>
              <div className="box">
                <span>SSS NO.</span>
                <span id="preview_sss">{res.sss}</span>
              </div>
              <div className="box">
                <span>TIN NO.</span>
                <span id="preview_tin">{res.tin}</span>
              </div>
              <div className="box">
                <span>EMPLOYEE NO.</span>
                <span id="preview_empNo">{res.employeNo}</span>
              </div>
            </div>

            <div className="right">
              <div className="citizenship_preview">
                <div className="left_citizenship">Citizenship</div>
                <div className="right_citizenship" id="preview_citizenship">
                  {res.citizenship}
                </div>
              </div>

              <div className="address_preview" style={{ marginTop: "2px" }}>
                <div className="left_address">Resident Address</div>
                <div className="right_address">
                  <div className="add1">
                    <div className="box">
                      <span>House/Block/Lot No.</span>
                      <span id="preview_house">{res.r_house}</span>
                    </div>
                    <div className="box">
                      <span>Street</span>
                      <span id="preview_street">{res.r_street}</span>
                    </div>
                  </div>
                  <div className="add1">
                    <div className="box">
                      <span>Subdivision/Village</span>
                      <span id="preview_subdi">{res.r_subdi}</span>
                    </div>
                    <div className="box">
                      <span>Barangay</span>
                      <span id="preview_barangay">{res.r_barangay}</span>
                    </div>
                  </div>
                  <div className="add1">
                    <div className="box">
                      <span>City/Municipality</span>
                      <span id="preview_city">{res.r_city}</span>
                    </div>
                    <div className="box">
                      <span>Province</span>
                      <span id="preview_province">{res.r_province}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="zip_preview">
                <div style={{ textTransform: "none" }}>Zip code</div>
                <div id="preview_zip">{res.r_zip}</div>
              </div>

              <div className="address_preview">
                <div className="left_address">Pemanent Address</div>
                <div className="right_address">
                  <div className="add1">
                    <div className="box">
                      <span>House/Block/Lot No.</span>
                      <span id="preview_house1">{res.p_house}</span>
                    </div>
                    <div className="box">
                      <span>Street</span>
                      <span id="preview_street1">{res.p_street}</span>
                    </div>
                  </div>
                  <div className="add1">
                    <div className="box">
                      <span>Subdivision/Village</span>
                      <span id="preview_subdi1">{res.p_subdi}</span>
                    </div>
                    <div className="box">
                      <span>Barangay</span>
                      <span id="preview_barangay1">{res.p_barangay}</span>
                    </div>
                  </div>
                  <div className="add1">
                    <div className="box">
                      <span>City/Municipality</span>
                      <span id="preview_city1">{res.p_city}</span>
                    </div>
                    <div className="box">
                      <span>Province</span>
                      <span id="preview_province1">{res.p_province}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="zip_preview">
                <div style={{ textTransform: "none" }}>Zip code</div>
                <div id="preview_zip1">{res.p_zip}</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", width: "100%" }}>
            <div className="box" style={{ width: "50%" }}>
              <span>Mobile No.</span>
              <span id="preview_mobile">{res.mobile}</span>
            </div>
            <div className="box" style={{ width: "50%" }}>
              <span>Email Address</span>
              <span style={{ textTransform: "none" }} id="preview_email">
                {res.email_id}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", width: "100%" }}>
            <div
              className="box"
              style={{ width: "50%", borderBottom: "2px solid black" }}
            >
              <span>Telephone No.</span>
              <span id="preview_tele">{res.tele}</span>
            </div>
            <div
              className="box"
              style={{ width: "50%", borderBottom: "2px solid black" }}
            >
              <span>Alternate Email Address</span>
              <span style={{ textTransform: "none" }} id="preview_alEmail">
                {res.alEmail}
              </span>
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

  const pds_step2 = pdsStep2.map((res) => {
    if (res.email_id === email_key) {
      return (
        <div>
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
      <div className="name_of_schooldPreview" key={elemName + elem_ctr}>
        <div className="box_name" style={{ width: "15.44%" }}>
          {" "}
          {elemName[elem_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "15.40%" }}>
          {" "}
          Elementary{" "}
        </div>
        <div className="box_name" style={{ width: "17.8%" }}>
          <div style={{ borderRight: "1.5px solid black" }}>
            {elemfrom[elem_ctr]}
          </div>
          <div>{elemTO[elem_ctr]}</div>
        </div>
        <div className="box_name" style={{ width: "11.8%" }}>
          {" "}
          {elemUNITS[elem_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "9.5%" }}>
          {" "}
          {elemYEAR[elem_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "12%" }}>
          {" "}
          {elemAWARD[elem_ctr]}{" "}
        </div>
      </div>
    );
  });

  //Secondary Content
  let sec_ctr = -1;
  const SecondaryContent = SecondName.map(() => {
    sec_ctr++;
    return (
      <div className="name_of_schooldPreview" key={SecondName + sec_ctr}>
        <div className="box_name" style={{ width: "15.44%" }}>
          {" "}
          {SecondName[sec_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "15.40%" }}>
          {" "}
          {SecondAttain[sec_ctr]}
        </div>
        <div className="box_name" style={{ width: "17.8%" }}>
          <div style={{ borderRight: "1.5px solid black" }}>
            {SecondFrom[sec_ctr]}
          </div>
          <div>{SecondTo[sec_ctr]}</div>
        </div>
        <div className="box_name" style={{ width: "11.8%" }}>
          {" "}
          {SecondUnit[sec_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "9.5%" }}>
          {" "}
          {SecondYear[sec_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "12%" }}>
          {" "}
          {SecondAward[sec_ctr]}{" "}
        </div>
      </div>
    );
  });

  //Vocational Content
  let voc_ctr = -1;
  const VocationalContent = VocationalName.map(() => {
    voc_ctr++;
    return (
      <div className="name_of_schooldPreview" key={VocationalName + voc_ctr}>
        <div className="box_name" style={{ width: "15.44%" }}>
          {" "}
          {VocationalName[voc_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "15.40%" }}>
          {" "}
          {VocationalAttain[voc_ctr]}
        </div>
        <div className="box_name" style={{ width: "17.8%" }}>
          <div style={{ borderRight: "1.5px solid black" }}>
            {VocationalFrom[voc_ctr] == "" ? "N/A" : VocationalFrom[voc_ctr]}
          </div>
          <div>
            {VocationalTo[voc_ctr] == "" ? "N/A" : VocationalTo[voc_ctr]}
          </div>
        </div>
        <div className="box_name" style={{ width: "11.8%" }}>
          {" "}
          {VocationalUnit[voc_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "9.5%" }}>
          {" "}
          {VocationalYear[voc_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "12%" }}>
          {" "}
          {VocationalAward[voc_ctr]}{" "}
        </div>
      </div>
    );
  });

  //College Content
  let col_ctr = -1;
  const CollegeContent = CollegeName.map(() => {
    col_ctr++;
    return (
      <div className="name_of_schooldPreview" key={CollegeName + col_ctr}>
        <div className="box_name" style={{ width: "15.44%" }}>
          {" "}
          {CollegeName[col_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "15.40%" }}>
          {" "}
          {CollegeAttain[col_ctr]}
        </div>
        <div className="box_name" style={{ width: "17.8%" }}>
          <div style={{ borderRight: "1.5px solid black" }}>
            {CollegeFrom[col_ctr] == "" ? "N/A" : CollegeFrom[col_ctr]}
          </div>
          <div>
            {CollegeTo[col_ctr] == "" ? "UP TO PRESENT" : CollegeTo[col_ctr]}
          </div>
        </div>
        <div className="box_name" style={{ width: "11.8%" }}>
          {" "}
          {CollegeUnit[col_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "9.5%" }}>
          {" "}
          {CollegeYear[col_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "12%" }}>
          {" "}
          {CollegeAward[col_ctr]}{" "}
        </div>
      </div>
    );
  });

  //Graduate Studies Content
  let grad_ctr = -1;
  const GraduateContent = GraduateName.map(() => {
    grad_ctr++;
    return (
      <div className="name_of_schooldPreview" key={GraduateName + grad_ctr}>
        <div className="box_name" style={{ width: "15.44%" }}>
          {" "}
          {GraduateName[grad_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "15.40%" }}>
          {" "}
          {GraduateAttain[grad_ctr]}
        </div>
        <div className="box_name" style={{ width: "17.8%" }}>
          <div style={{ borderRight: "1.5px solid black" }}>
            {GraduateFrom[grad_ctr] == "" ? "N/A" : GraduateFrom[grad_ctr]}
          </div>
          <div>{GraduateTo[grad_ctr] == "" ? "N/A" : GraduateTo[grad_ctr]}</div>
        </div>
        <div className="box_name" style={{ width: "11.8%" }}>
          {" "}
          {GraduateUnit[grad_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "9.5%" }}>
          {" "}
          {GraduateYear[grad_ctr]}{" "}
        </div>
        <div className="box_name" style={{ width: "12%" }}>
          {" "}
          {GraduateAward[grad_ctr]}{" "}
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

  const pds_step3 = pdsStep3.map((res) => {
    if (res.email_id === email_key) {
      return (
        <div>
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
      <div className="CSE_content" key="{key2}">
        <div className="CSE_box" style={{ width: "20%" }}>
          {CseBoard[cse_ctr]}
        </div>
        <div className="CSE_box" style={{ width: "15%" }}>
          {CseRating[cse_ctr]}
        </div>
        <div className="CSE_box" style={{ width: "15%" }}>
          {CseDateExam[cse_ctr] == "" ? "N/A" : CseDateExam[cse_ctr]}
        </div>
        <div className="CSE_box" style={{ width: "20%" }}>
          {CsePlaceExam[cse_ctr]}
        </div>
        <div className="CSE_box" style={{ width: "17.2%" }}>
          <div>{CseLicense[cse_ctr]}</div>
          <div style={{ borderLeft: "1px solid black" }}>
            {CseDateVal[cse_ctr] == "" ? "N/A" : CseDateVal[cse_ctr]}
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

  const pds_step4 = pdsStep4.map((res) => {
    if (res.email_id === email_key) {
      return (
        <div>
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
      <div className="WE_content" key="{key3}">
        <div className="WE_box" style={{ width: "15%" }}>
          <div style={{ display: "flex" }}>
            <div>{weFrom[we_ctr] == "" ? "N/A" : weFrom[we_ctr]}</div>
            <div style={{ borderLeft: "1.5px solid black" }}>
              {weTo[we_ctr] == "" ? "N/A" : weTo[we_ctr]}
            </div>
          </div>
        </div>
        <div className="WE_box" style={{ width: "15%" }}>
          {wePosition[we_ctr]}
        </div>
        <div className="WE_box" style={{ width: "18.1%" }}>
          {weDepartment[we_ctr]}
        </div>
        <div className="WE_box" style={{ width: "8%" }}>
          {weMonthly[we_ctr]}
        </div>
        <div className="WE_box" style={{ width: "10%" }}>
          {weSalary[we_ctr]}
        </div>
        <div className="WE_box" style={{ width: "10%" }}>
          {weAppoint[we_ctr]}
        </div>
        <div className="WE_box" style={{ width: "6%" }}>
          {weGov[we_ctr]}
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

  const pds_step5 = pdsStep5.map((res) => {
    if (res.email_id === email_key) {
      return (
        <div>
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
  const ldContent = ldTo.map(() => {
    ld_ctr++;

    var currentTime = new Date();
    var yearToday = currentTime.getFullYear();
    var dateTo = ldTo[ld_ctr];
    var splitDate = dateTo.split("/");
    var resultYear = yearToday - splitDate[0];

    if (resultYear <= 5) {
      return (
        <div className="LD_content" key="{key4}">
          <div className="LD_box" style={{ width: "20%",textTransform:"Uppercase" }}>
            {ldTitle[ld_ctr]}
          </div>
          <div className="LD_box" style={{ width: "15%" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  fontSize: ".8rem",
                  wordBreak: "break-all",
                  padding: "0 5px",
                }}
              >
                {ldFrom[ld_ctr] == "" ? "N/A" : ldFrom[ld_ctr]}
              </div>
              <div
                style={{
                  borderLeft: "1.5px solid black",
                  fontSize: ".8rem",
                  wordBreak: "break-all",
                  padding: "0 5px",
                }}
              >
                {ldTo[ld_ctr] == "" ? "N/A" : ldTo[ld_ctr]}
              </div>
            </div>
          </div>
          <div className="LD_box" style={{ width: "8%" }}>
            {" "}
            {ldHours[ld_ctr] == "" ? "N/A" : ldHours[ld_ctr] + " HR/S"}
          </div>
          <div className="LD_box" style={{ width: "13%" }}>
            {ldType[ld_ctr]}
          </div>
          <div className="LD_box" style={{ width: "11.6%" }}>
            {ldCoverage[ld_ctr]}
          </div>
          <div className="LD_box" style={{ width: "17%" }}>
            {ldSponsor[ld_ctr]}
          </div>
        </div>
      );
    } else {
      return (
        <div className="LD_content" key="{key4}">
          <div className="LD_box" style={{ width: "20%" }}>
            N/A
          </div>
          <div className="LD_box" style={{ width: "15%" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  fontSize: ".8rem",
                  wordBreak: "break-all",
                  padding: "0 5px",
                }}
              >
                N/A
              </div>
              <div
                style={{
                  borderLeft: "1.5px solid black",
                  fontSize: ".8rem",
                  wordBreak: "break-all",
                  padding: "0 5px",
                }}
              >
                N/A
              </div>
            </div>
          </div>
          <div className="LD_box" style={{ width: "8%" }}>
            N/A
          </div>
          <div className="LD_box" style={{ width: "13%" }}>
            N/A
          </div>
          <div className="LD_box" style={{ width: "11.6%" }}>
            N/A
          </div>
          <div className="LD_box" style={{ width: "17%" }}>
            {" "}
            N/A
          </div>
        </div>
      );
    }
  });

  return (
    <div className="step_content preview_pds">
      <div className="info_div" style={{ fontSize: "1.5rem" }}>
        <img src={datasheet_info} />
        Personal Information
      </div>

      <div className="pds_review_container">
        <div className="pds_preview" id="convertable_pdf_PDS">
          <div className="top">
            <div className="left">
              <img src={CICT_Logo} />
            </div>
            <div className="right">
              <p>College of Information</p>
              <p>and Communication Technology</p>
            </div>
          </div>

          {/*Step 1*/}
          {pds_step1}

          {/*Step 2*/}
          <div className="information_content" style={{ marginTop: "3rem" }}>
            <div className="header">Educational Background</div>

            <div className="education_content">
              <div
                className="educ_level"
                style={{ width: "13%", backgroundColor: "rgb(238, 236, 236)" }}
              >
                LEVEL
              </div>
              <div
                className="educ_name"
                style={{ width: "13%", backgroundColor: "rgb(238, 236, 236)" }}
              >
                <span>NAME OF SCHOOL</span> <span>(Write in full)</span>
              </div>
              <div
                className="educ_name"
                style={{ width: "13%", backgroundColor: "rgb(238, 236, 236)" }}
              >
                <span>BASIC EDUCATION / DEGREE / COURSE</span>{" "}
                <span>(Write in full)</span>
              </div>
              <div
                className="educ_level"
                style={{ width: "15%", backgroundColor: "rgb(238, 236, 236)" }}
              >
                <span>PERIOD OF ATTENDANCE</span>
                <div className="educ_period">
                  <div style={{ borderRight: "1.5px solid black" }}>From</div>
                  <div>To</div>
                </div>
              </div>
              <div
                className="educ_name"
                style={{ width: "10%", backgroundColor: "rgb(238, 236, 236)" }}
              >
                <span>HIGHEST LEVEL UNIT EARNED</span>{" "}
                <span>(If not graduated)</span>
              </div>
              <div
                className="educ_year"
                style={{ width: "8%", backgroundColor: "rgb(238, 236, 236)" }}
              >
                YEAR GRADUATED
              </div>

              <div
                className="educ_name1"
                style={{
                  width: "10.1%",
                  backgroundColor: "rgb(238, 236, 236)",
                }}
              >
                SCHOLARSHIP / ACADEMIC HONORS RECEIVED
              </div>
            </div>

            <div className="education_content">
              <div
                className="educ_level"
                style={{ width: "13%", backgroundColor: "rgb(238, 236, 236)" }}
              >
                ELEMENTARY
              </div>
              <div className="educ_name_content">{ElementaryContent}</div>
            </div>

            <div className="education_content">
              <div
                className="educ_level"
                style={{ width: "13%", backgroundColor: "rgb(238, 236, 236)" }}
              >
                SECONDARY
              </div>
              <div className="educ_name_content">{SecondaryContent}</div>
            </div>

            <div className="education_content">
              <div
                className="educ_level"
                style={{ width: "13%", backgroundColor: "rgb(238, 236, 236)" }}
              >
                VOCATIONAL / TRADE / COURSE
              </div>
              <div className="educ_name_content">{VocationalContent}</div>
            </div>

            <div className="education_content">
              <div
                className="educ_level"
                style={{ width: "13%", backgroundColor: "rgb(238, 236, 236)" }}
              >
                College
              </div>
              <div className="educ_name_content">{CollegeContent}</div>
            </div>

            <div className="education_content">
              <div
                className="educ_level"
                style={{ width: "13%", backgroundColor: "rgb(238, 236, 236)" }}
              >
                Graduate Studies
              </div>
              <div className="educ_name_content">{GraduateContent}</div>
            </div>
          </div>

          {pds_step2 /* Eto yung mga input*/}

          {/*Step 3*/}
          <div className="information_content" style={{ marginTop: "3rem" }}>
            <div className="header">Civil Service Eligibility</div>
          </div>

          <div className="CSE_content">
            <div className="headers" style={{ width: "20%" }}>
              CAREER SERVICE/ RA 1080 (BOARD/ BAR) UNDER SPECIAL LAWS/ CES/ CSEE
              BARANGAY ELIGIBILITY / DRIVER'S LICENSE
            </div>
            <div className="headers" style={{ width: "15%" }}>
              <span>Rating</span>
              <span>(If Applicable)</span>
            </div>
            <div className="headers" style={{ width: "15%" }}>
              DATE OF EXAMINATION / CONFERMENT
            </div>
            <div className="headers" style={{ width: "20%" }}>
              PLACE OF EXAMINATION / CONFERMENT
            </div>
            <div
              className="headers"
              style={{ width: "17.2%", padding: "0 10px" }}
            >
              <div>LICENSE (if applicable)</div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div>Number</div>
                <div style={{ borderLeft: "1.5px solid black" }}>
                  Date of Validity
                </div>
              </div>
            </div>
          </div>

          {cseContent}
          {pds_step3 /*Eto yung mga input*/}

          {/*Step 4*/}
          <div className="information_content" style={{ marginTop: "3rem" }}>
            <div className="header">Work Experience</div>
          </div>

          <div className="WE_content">
            <div className="headers" style={{ width: "15%" }}>
              <div>INCLUSIVE DATES (mm/dd/yyyy)</div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div>From</div>
                <div style={{ borderLeft: "1.5px solid black" }}>To</div>
              </div>
            </div>
            <div className="headers" style={{ width: "15%" }}>
              POSITION TITLE (Write in full/Do not abbreviate)
            </div>
            <div className="headers" style={{ width: "18.1%" }}>
              <span>DEPARTMENT / AGENCY / OFFICE / COMPANY</span>
              <span>(Write in full/Do not abbreviate)</span>
            </div>
            <div className="headers" style={{ width: "8%" }}>
              MONTHLY SALARY
            </div>
            <div className="headers" style={{ width: "10%" }}>
              SALARY/ JOB/ PAY GRADE (if applicable)& STEP (Format "00-0")/
              INCREMENT
            </div>
            <div className="headers" style={{ width: "10%" }}>
              STATUS OF APPOINTMENT
            </div>
            <div className="headers" style={{ width: "6%" }}>
              GOV'T SERVICE (Y/N)
            </div>
          </div>

          {weContent}
          {pds_step4 /*Eto yung mga input*/}

          {/*Step 5*/}
          <div className="information_content" style={{ marginTop: "3rem" }}>
            <div className="header" style={{ fontSize: "1.1rem" }}>
              LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS
              ATTENDED
              <p
                        style={{
                          fontSize: ".7rem",
                          margin: "5px auto",
                          width:"95%",
                          textIndent:"0",
                          fontWeight:"normal"
                        }}
                      >
                        (Start from the most recent L&D/training program and
                        include only the relevant L&D/training taken for the
                        last five (5) years for Division
                        Chief/ Executive/ Managerial positions)
                      </p>
            </div>
          </div>

          <div className="LD_content">
            <div className="headers" style={{ width: "20%" }}>
              <span>
                TITLE OF LEARNING AND DEVELOPMENT INTERVENTIONS/TRAINING
                PROGRAMS
              </span>
              <span>(Write in full)</span>
            </div>
            <div className="headers" style={{ width: "15%" }}>
              <div>INCLUSIVE DATES OF ATTENDANCE (mm/dd/yyyy)</div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div>From</div>
                <div style={{ borderLeft: "1.5px solid black" }}>To</div>
              </div>
            </div>
            <div className="headers" style={{ width: "8%" }}>
              NUMBER OF HOURS
            </div>
            <div className="headers" style={{ width: "13%" }}>
              TYPE OF LD (Managerial / Supervisory / Technical / Etc)
            </div>
            <div className="headers" style={{ width: "11.6%" }}>
              COVERAGE (International / National / Regional / Local)
            </div>
            <div className="headers" style={{ width: "17%" }}>
              <span>CONDUCTED/ SPONSORED BY</span>
              <span>(Write in full)</span>
            </div>
          </div>

          {ldContent}
          {pds_step5 /*Eto yung mga input*/}
        </div>
      </div>

      <p className="p_consent" style={{ visibility: "hidden" }}>
        By accepting, you acknowledge that you have read this form, understood
        its contents, and consent to the processing of your data for the
        purposes indicated in this Consent Form. If not, your data will not be
        used by Bulacan State University as long as your authorization to deny
        access has not been reversed.
      </p>
    </div>
  );
}
