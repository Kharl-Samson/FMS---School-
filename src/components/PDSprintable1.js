import React, { useEffect } from "react";
import datasheet_info from "../images/icons/datasheet_info.svg";
import { useState } from "react";
import axios from "axios";
import '../css/previewPDS.css';
import moment from 'moment';

export default function PDSprintable1() {
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

  var key_A = 0;
  const pds_step1 = pdsStep1.map((res) => {
    key_A++;
    if (res.email_id === email_key) {
      return (
        <div key={key_A}> 
        <div className="pds_row">
            <div className="left">
                <div className="cont"><span>2. SURNAME</span></div>
                <div className="cont"><span>&nbsp;&nbsp;&nbsp;&nbsp;FIRST NAME</span></div>
                <div className="cont"><span>&nbsp;&nbsp;&nbsp;&nbsp;MIDDLE NAME</span></div>
            </div>
            <div className="right">
                <div className="cont"><span>{res.lname}</span></div>
                <div className="cont">
                    <div><span>{res.fname}</span></div>
                    <div className="name_ex">
                        <span>NAME EXTENSION (JR., SR)</span>
                        <span>{res.nameExtension}</span>
                    </div>
                </div>
                <div className="cont"><span>{res.mname}</span></div>
            </div>
        </div>

        <div className="pds_row1">
            <div className="row1">
                <div className="cont">
                    <span>3. DATE OF BIRTH</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;(mm/dd/yyyy)</span>
                </div>
                <div className="cont"><span>4. PLACE OF BIRTH</span></div>
                <div className="cont"><span>5. SEX</span></div>
            </div>
            <div className="row2">
                <div className="cont"><span>{moment(res.bday).format('L')}</span></div>
                <div className="cont"><span>{res.cob + ", " + res.pob}</span></div>
                <div className="cont"><span>{res.gender}</span></div>
            </div>
            <div className="row3">
                 <span>16. CITIZENSHIP</span>
                 <span>If holder of  dual citizenship, please indicate the details.</span>
            </div>
            <div className="row4">
                {res.citizenship}
            </div>
        </div>

        <div className="pds_row2">
            <div className="row1">
                <div className="cont"><span>6. CIVIL STATUS</span></div>
                <div className="cont"><span>7. HEIGHT (m)</span></div>
                <div className="cont"><span>8. WEIGHT (kg)</span></div>
            </div>
            <div className="row2">
                <div className="cont"><span>{res.civil}</span></div>
                <div className="cont"><span>{res.height + " m"}</span></div>
                <div className="cont"><span>{res.weight + "kg"}</span></div>
            </div>
            <div className="row3">
                <div className="cont"><span>17. RESIDENTIAL ADDRESS</span></div>
                <div className="cont"><span>ZIP CODE</span></div>
            </div>
            <div className="row4">
                <div className="cont">
                    <div className="left_right">
                        <div>{res.r_house}</div>
                        <div>House/Block/Lot No.</div>
                    </div>
                    <div className="left_right">
                        <div>{res.r_street}</div>
                        <div>Street</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="left_right">
                        <div>{res.r_subdi}</div>
                        <div>Subdivision/Village</div>
                    </div>
                    <div className="left_right">
                        <div>{res.r_barangay}</div>
                        <div>Barangay</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="left_right">
                        <div>{res.r_city}</div>
                        <div>City/Municipality</div>
                    </div>
                    <div className="left_right">
                        <div>{res.r_province}</div>
                        <div>Province</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="zip_code">{res.r_zip}</div>
                </div>
            </div>
        </div>

        <div className="pds_row3">
            <div className="row1">
                <div className="cont"><span>9. BLOOD TYPE</span></div>
                <div className="cont"><span>10. GSIS ID NO.</span></div>
                <div className="cont"><span>11. PAG-IBIG ID NO.</span></div>
                <div className="cont"><span>12. PHILHEALTH NO.</span></div>
            </div>
            <div className="row2">
                <div className="cont"><span>{res.blood}</span></div>
                <div className="cont"><span>{res.gsis}</span></div>
                <div className="cont"><span>{res.pagibig}</span></div>
                <div className="cont"><span>{res.philhealth}</span></div>
            </div>
            <div className="row3">
                <div className="cont"><span>18. PERMANENT ADDRESS</span></div>
                <div className="cont"><span>ZIP CODE</span></div>
            </div>

            <div className="row4">
                <div className="cont">
                    <div className="left_right">
                        <div>{res.p_house}</div>
                        <div>House/Block/Lot No.</div>
                    </div>
                    <div className="left_right">
                        <div>{res.p_street}</div>
                        <div>Street</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="left_right">
                        <div>{res.p_subdi}</div>
                        <div>Subdivision/Village</div>
                    </div>
                    <div className="left_right">
                        <div>{res.p_barangay}</div>
                        <div>Barangay</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="left_right">
                        <div>{res.p_city}</div>
                        <div>City/Municipality</div>
                    </div>
                    <div className="left_right">
                        <div>{res.p_province}</div>
                        <div>Province</div>
                    </div>
                </div>
                <div className="cont">
                    <div className="zip_code">{res.p_zip}</div>
                </div>
            </div>
        </div>

        <div className="pds_row4">
            <div className="row1">
                <div className="cont"><span>13. SSS NO.</span></div>
                <div className="cont"><span>14. TIN NO.</span></div>
                <div className="cont"><span style={{fontSize:".75rem"}}>15. AGENCY EMPLOYEE NO.</span></div>
            </div>
            <div className="row2">
                <div className="cont"><span>{res.sss}</span></div>
                <div className="cont"><span>{res.tin}</span></div>
                <div className="cont"><span>{res.employeNo}</span></div>
            </div>
            <div className="row3">
                <div className="cont"><span>19. TELEPHONE NO.</span></div>
                <div className="cont"><span>20. MOBILE NO.</span></div>
                <div className="cont"><span>21. E-MAIL ADDRESS</span></div>
            </div>
            <div className="row4">
                <div className="cont"><span style={{textTransform:"uppercase",fontWeight:"600"}}>{res.tele}</span></div>
                <div className="cont"><span style={{textTransform:"uppercase"}}>{res.mobile}</span></div>
                <div className="cont"><span><a href={`mailto:'${res.email_id}`}>{res.email_id}</a></span></div>
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

  var key_B = 0;
  const pds_step2 = pdsStep2.map((res) => {
    key_B++;
    if (res.email_id === email_key) {
      return (
        <div key={key_B}>
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
    <div className="educ_secRow" key={elemName + elem_ctr}>
      <div className="row2">
          <span>{elemName[elem_ctr]}</span>
      </div>
      <div className="row3">
          <span>PRIMARY EDUCATION</span>
      </div>
      <div className="row4">
          <div className="bot">
              <div className="from"><span>{elemfrom[elem_ctr]}</span></div>
              <div className="to"><span>{elemTO[elem_ctr]}</span></div>
          </div>
      </div>
      <div className="row5">
          <span>{elemUNITS[elem_ctr]}</span>
      </div>
      <div className="row6">
          <span>{elemYEAR[elem_ctr]}</span>
      </div>
      <div className="row7">
          <span>{elemAWARD[elem_ctr]}</span>
      </div>
  </div> 
    );
  });

  //Secondary Content
  let sec_ctr = -1;
  const SecondaryContent = SecondName.map(() => {
    sec_ctr++;
    return (
    <div className="educ_secRow" key={SecondName + sec_ctr}>
      <div className="row2">
          <span>{SecondName[sec_ctr]}</span>
      </div>
      <div className="row3">
          <span>{SecondAttain[sec_ctr]}</span>
      </div>
      <div className="row4">
          <div className="bot">
          <div className="from"><span>{SecondFrom[sec_ctr]}</span></div>
              <div className="to"><span>{SecondTo[sec_ctr]}</span></div>
          </div>
      </div>
      <div className="row5">
          <span>{SecondUnit[sec_ctr]}</span>
      </div>
      <div className="row6">
          <span>{SecondYear[sec_ctr]}</span>
      </div>
      <div className="row7">
          <span>{SecondAward[sec_ctr]}</span>
      </div>
  </div> 
    );
  });

  //Vocational Content
  let voc_ctr = -1;
  const VocationalContent = VocationalName.map(() => {
    voc_ctr++;
    return (
    <div className="educ_secRow" key={VocationalName + voc_ctr}>
      <div className="row2">
          <span>{VocationalName[voc_ctr]}</span>
      </div>
      <div className="row3">
          <span>{VocationalAttain[voc_ctr]}</span>
      </div>
      <div className="row4">
          <div className="bot">
          <div className="from"><span>{VocationalFrom[voc_ctr] == "" ? "N/A" : VocationalFrom[voc_ctr]}</span></div>
              <div className="to"><span>{VocationalTo[voc_ctr] == "" ? "N/A" : VocationalTo[voc_ctr]}</span></div>
          </div>
      </div>
      <div className="row5">
          <span>{VocationalUnit[voc_ctr]}</span>
      </div>
      <div className="row6">
          <span>{VocationalYear[voc_ctr]}</span>
      </div>
      <div className="row7">
          <span>{VocationalAward[voc_ctr]}</span>
      </div>
  </div> 
    );
  });

  //College Content
  let col_ctr = -1;
  const CollegeContent = CollegeName.map(() => {
    col_ctr++;
    return (
    <div className="educ_secRow" key={CollegeName + col_ctr}>
      <div className="row2">
          <span>{CollegeName[col_ctr]}</span>
      </div>
      <div className="row3">
          <span>{CollegeAttain[col_ctr]}</span>
      </div>
      <div className="row4">
          <div className="bot">
          <div className="from"><span>{CollegeFrom[col_ctr] == "" ? "N/A" : CollegeFrom[col_ctr]}</span></div>
              <div className="to"><span>{CollegeTo[col_ctr] == "" ? "UP TO PRESENT" : CollegeTo[col_ctr]}</span></div>
          </div>
      </div>
      <div className="row5">
          <span>{CollegeUnit[col_ctr]}</span>
      </div>
      <div className="row6">
          <span>{CollegeYear[col_ctr]}</span>
      </div>
      <div className="row7">
          <span>{CollegeAward[col_ctr]}</span>
      </div>
    </div> 
    );
  });

  //Graduate Studies Content
  let grad_ctr = -1;
  const GraduateContent = GraduateName.map(() => {
    grad_ctr++;
    return (
    <div className="educ_secRow" key={GraduateName + grad_ctr}>
      <div className="row2">
          <span>{GraduateName[grad_ctr]}</span>
      </div>
      <div className="row3">
          <span>{GraduateAttain[grad_ctr]}</span>
      </div>
      <div className="row4">
          <div className="bot">
          <div className="from"><span>{GraduateFrom[grad_ctr] == "" ? "N/A" : GraduateFrom[grad_ctr]}</span></div>
              <div className="to"><span>{GraduateTo[grad_ctr] == "" ? "N/A" : GraduateTo[grad_ctr]}</span></div>
          </div>
      </div>
      <div className="row5">
          <span>{GraduateUnit[grad_ctr]}</span>
      </div>
      <div className="row6">
          <span>{GraduateYear[grad_ctr]}</span>
      </div>
      <div className="row7">
          <span>{GraduateAward[grad_ctr]}</span>
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

  var key_C = 0;
  const pds_step3 = pdsStep3.map((res) => {
    key_C++;
    if (res.email_id === email_key) {
      return (
        <div key={key_C}>
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
    <div className="pds_cse_row pds_cse_row1 cse_counter" key={cse_ctr}>
      <div className="row1">
          <span>{CseBoard[cse_ctr]}</span>
      </div>
      <div className="row2">
          <span>{CseRating[cse_ctr]}</span>
      </div>
      <div className="row3">
          <span>{CseDateExam[cse_ctr] == "" ? "N/A" : CseDateExam[cse_ctr]}</span>
      </div>
      <div className="row4">
          <span>{CsePlaceExam[cse_ctr]}</span>
      </div>
      <div className="row5">
          <div className="bot_cse">
              <div className="lr_cse"><span>{CseLicense[cse_ctr]}</span></div>
              <div className="lr_cse"><span>{CseDateVal[cse_ctr] == "" ? "N/A" : CseDateVal[cse_ctr]}</span></div>
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

  var key_D = 0;
  const pds_step4 = pdsStep4.map((res) => {
    key_D++;
    if (res.email_id === email_key) {
      return (
        <div key={key_D}>
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
    <div className="pds_we_row pds_we_row1 we_counter" key={we_ctr}>
      <div className="row1">
          <div className="bot bot1">
              <div className="from"><span>{weFrom[we_ctr] == "" ? "N/A" : moment(weFrom[we_ctr]).format('L')}</span></div>
              <div className="to"><span>{weTo[we_ctr] == "" ? "N/A" : moment(weTo[we_ctr]).format('L')}</span></div>
          </div>
      </div>
      <div className="row2">
          <span>{wePosition[we_ctr]}</span>
      </div>
      <div className="row3">
          <span>{weDepartment[we_ctr]}</span>
      </div>
      <div className="row4">
          <span>{weMonthly[we_ctr]}</span>
      </div>
      <div className="row5">
          <span>{weSalary[we_ctr]}</span>
      </div>
      <div className="row6">
          <span>{weAppoint[we_ctr]}</span>
      </div>
      <div className="row7">
          <span>{weGov[we_ctr]}</span>
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

  var key_E = 0;
  const pds_step5 = pdsStep5.map((res) => {
    key_E++;
    if (res.email_id === email_key) {
      return (
        <div key={key_E }>
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
        <div className="pds_cert_row pds_cert_row1 ld_counter" key={ld_ctr}>
            <div className="row1">
                <span>{ldTitle[ld_ctr]}</span>
            </div>
            <div className="row2">
                <div className="bot">
                    <div className="from"><span>{ldFrom[ld_ctr] == "" ? "N/A" : moment(ldFrom[ld_ctr]).format('L')}</span></div>
                    <div className="to"><span>{ldTo[ld_ctr] == "" ? "N/A" : moment(ldTo[ld_ctr]).format('L')}</span></div>
                </div>
            </div>
            <div className="row3">
                <span>{ldHours[ld_ctr] == "" ? "N/A" : ldHours[ld_ctr] + " HR/S"}</span>
            </div>
            <div className="row4">
                <span>{ldType[ld_ctr]}</span>
            </div>
            <div className="row5">
                <span>{ldCoverage[ld_ctr]}</span>
            </div>
        </div>
      );
    } else {
      return (
        <div className="pds_cert_row pds_cert_row1 ld_counter" key={ld_ctr}>
            <div className="row1">
                <span>N/A</span>
            </div>
            <div className="row2">
                <div className="bot">
                    <div className="from"><span>N/A</span></div>
                    <div className="to"><span>N/A</span></div>
                </div>
            </div>
            <div className="row3">
                <span>N/A</span>
            </div>
            <div className="row4">
                <span>N/A</span>
            </div>
            <div className="row5">
                <span>N/A</span>
            </div>
        </div>
      );
    }
  });

  setTimeout(function () {
    var cse_len = document.getElementsByClassName("cse_counter").length;
    var we_len = document.getElementsByClassName("we_counter").length;
    var ld_len = document.getElementsByClassName("ld_counter").length;
    if(cse_len <= 10){
      for(var i = cse_len ; i < 10 ; i++){
        document.getElementById("cse_empty"+i).style.display="flex";
      }
    }
    if(we_len <= 15 ){
      for(var x = we_len ; x < 15 ; x++){
        document.getElementById("we_empty"+x).style.display="flex";
      }
    }
    if(ld_len <= 22 ){
      for(var y = ld_len ; y < 22 ; y++){
        document.getElementById("ld_empty"+y).style.display="flex";
      }
    }
}, 1000);


  return (
    <div className="step_content preview_pds">
    <div className="info_div" style={{ fontSize: "1.5rem" }}>
      <img src={datasheet_info} />
      Personal Information
    </div>

    <div className="pds_review_container">
      <div className="pds_preview" id="convertable_pdf_PDS1" > 


<div id="page_Separator1" className="page_Separator">   
      <div className="pds_header">
          <p className="pds_header_p">CS Form No. 212</p>
          <p className="pds_header_p">Revised 2017</p>
          <div className="pds_text">PERSONAL DATA SHEET</div>
          <p className="pds_warning">WARNING: Any misrepresentation made in the Personal Data Sheet and the Work Experience Sheet shall cause the filing of administrative/criminal case/s against the person concerned.</p>
          <p className="pds_warning">READ THE ATTACHED GUIDE TO FILLING OUT THE PERSONAL DATA SHEET (PDS) BEFORE ACCOMPLISHING THE PDS FORM.</p>

          <div className="pds_trip">
            <div className="pds_warning1">Print legibly.&nbsp;&nbsp;Tick appropriate boxes&nbsp;(&nbsp;<div id="box"></div>&nbsp;with "<b>&#10003;</b>" and use separate sheet if necessary. Indicate N/A if not applicable.)</div>

            <div className="pds_warning2">
              <div className="left">&nbsp;1. CS ID No.</div>
              <div className="right">(Do not fill up. For CSC use only)&nbsp;</div>
            </div>

          </div>
      </div>

      <div className="pds_th">
          <span>I. PERSONAL INFORMATION</span>
      </div>

        {/*Step 1*/}
        {pds_step1}

      <div className="pds_th">
          <span>II. EDUCATIONAL BACKGROUND</span>
      </div>

      <div className="pds_educatiion_row">
          <div className="row1">
            <div style={{fontSize:".8rem",marginTop:"-50px",marginLeft:"-80px",position:"absolute"}}>22.</div>
            <span>LEVEL</span></div>
          <div className="row2">
              <span>NAME OF SCHOOL</span>
              <span>(Write in full)</span>
          </div>
          <div className="row3">
              <span>BASIC EDUCATION / DEGREE / COURSE</span>
              <span>(Write in full)</span>
          </div>
          <div className="row4">
              <div className="top1"><span>PERIOD OF ATTENDANCE</span></div>
              <div className="bot">
                  <div className="from">From</div>
                  <div className="to">To</div>
              </div>
          </div>
          <div className="row5">
              <span>HIGHEST LEVEL / UNITS EARNED</span>
              <span>(If not graduated)</span>
          </div>
          <div className="row6">
              <span>YEAR GRADUATED</span>
          </div>
          <div className="row7">
              <span>SCHOLARSHIP / ACADEMIC HONORS RECEIVED</span>
          </div>
      </div>

      {/*Step 2*/}

      {/*ELEMENTARY*/}
      <div className="pds_educatiion_row pds_educatiion_row1">
          <div className="left">
              <div className="row1" style={{borderRight:"none"}}>
                  <span>ELEMENTARY</span>
              </div>
          </div>
          <div className="right">
              {ElementaryContent}
          </div>
      </div>
      {/*SECONDARY*/}
      <div className="pds_educatiion_row pds_educatiion_row1">
          <div className="left">
              <div className="row1" style={{borderRight:"none"}}>
                  <span>SECONDARY</span>
              </div>
          </div>
          <div className="right">
              {SecondaryContent}
          </div>
      </div>
      {/*VOCATIONAL*/}
      <div className="pds_educatiion_row pds_educatiion_row1">
          <div className="left">
              <div className="row1" style={{borderRight:"none"}}>
                  <span>VOCATIONAL / TRADE COURSE</span>
              </div>
          </div>
          <div className="right">
              {VocationalContent}
          </div>
      </div>
      {/*COLLEGE*/}
      <div className="pds_educatiion_row pds_educatiion_row1">
          <div className="left">
              <div className="row1" style={{borderRight:"none"}}>
                  <span>COLLEGE</span>
              </div>
          </div>
          <div className="right">
              {CollegeContent}
          </div>
      </div>
      {/*GRADUATE STUDIES*/}
      <div className="pds_educatiion_row pds_educatiion_row1">
          <div className="left">
              <div className="row1" style={{borderRight:"none"}}>
                  <span>GRADUATE STUDIES</span>
              </div>
          </div>
          <div className="right">
              {GraduateContent}
          </div>
      </div>

      <div className="separate_sheet">
        (Continue on separate sheet if necessary)
      </div>
      <div className="separate_sheet1">
        <div className="row1">SIGNATURE</div>
        <div className="row2"></div>
        <div className="row3">DATE</div>
        <div className="row4">{moment().format('LL')}</div>
      </div>

      <div className="pds_footer">
        CS FORM 212 (Revised 2017), Page 1 of 3
      </div>

        {pds_step2 /* Eto yung mga input*/}
</div>

<div id="page_Separator2" className="page_Separator"> 
      {/*Step 3*/}
      <div className="pds_th" style={{borderTop:"2px solid black"}}>
          <span>III. CIVIL SERVICE ELIGIBILITY</span>
      </div>

      <div className="pds_cse_row">
          <div className="row1">
              <div style={{fontSize:".8rem",marginTop:"-60px",marginLeft:"-190px",position:"absolute"}}>23.</div>
              <span>CAREER SERVICE/ RA 1080 (BOARD/ BAR) UNDER SPECIAL LAWS/ CES/ CSEE BARANGAY ELIGIBILITY / DRIVER'S LICENSE</span>
          </div>
          <div className="row2">
              <span>RATING</span>
              <span>(If Applicable)</span>
          </div>
          <div className="row3">
              <span>DATE OF EXAMINATION / CONFERMENT</span>
          </div>
          <div className="row4">
              <span>PLACE OF EXAMINATION / CONFERMENT</span>
          </div>
          <div className="row5">
              <div className="top_cse">
                  <span>LICENSE (if applicable)</span>
              </div>
              <div className="bot_cse">
                  <div className="lr_cse"><span>NUMBER</span></div>
                  <div className="lr_cse"><span>Date of Validity</span></div>
              </div>
          </div>
      </div>

        {cseContent}

        <div className="pds_cse_row pds_cse_row1 pds_empty" id="cse_empty1">
          <div className="row1"><span style={{visibility:"hidden"}}>N/A</span></div>
          <div className="row2"></div>
          <div className="row3"></div>
          <div className="row4"></div>
          <div className="row5"></div>
        </div>
        <div className="pds_cse_row pds_cse_row1 pds_empty" id="cse_empty2">
          <div className="row1"><span style={{visibility:"hidden"}}>N/A</span></div>
          <div className="row2"></div>
          <div className="row3"></div>
          <div className="row4"></div>
          <div className="row5"></div>
        </div>
        <div className="pds_cse_row pds_cse_row1 pds_empty" id="cse_empty3">
          <div className="row1"><span style={{visibility:"hidden"}}>N/A</span></div>
          <div className="row2"></div>
          <div className="row3"></div>
          <div className="row4"></div>
          <div className="row5"></div>
        </div>
        <div className="pds_cse_row pds_cse_row1 pds_empty" id="cse_empty4">
          <div className="row1"><span style={{visibility:"hidden"}}>N/A</span></div>
          <div className="row2"></div>
          <div className="row3"></div>
          <div className="row4"></div>
          <div className="row5"></div>
        </div>
        <div className="pds_cse_row pds_cse_row1 pds_empty" id="cse_empty5">
          <div className="row1"><span style={{visibility:"hidden"}}>N/A</span></div>
          <div className="row2"></div>
          <div className="row3"></div>
          <div className="row4"></div>
          <div className="row5"></div>
        </div>
        <div className="pds_cse_row pds_cse_row1 pds_empty" id="cse_empty6">
          <div className="row1"><span style={{visibility:"hidden"}}>N/A</span></div>
          <div className="row2"></div>
          <div className="row3"></div>
          <div className="row4"></div>
          <div className="row5"></div>
        </div>
        <div className="pds_cse_row pds_cse_row1 pds_empty" id="cse_empty7">
          <div className="row1"><span style={{visibility:"hidden"}}>N/A</span></div>
          <div className="row2"></div>
          <div className="row3"></div>
          <div className="row4"></div>
          <div className="row5"></div>
        </div>
        <div className="pds_cse_row pds_cse_row1 pds_empty" id="cse_empty8">
          <div className="row1"><span style={{visibility:"hidden"}}>N/A</span></div>
          <div className="row2"></div>
          <div className="row3"></div>
          <div className="row4"></div>
          <div className="row5"></div>
        </div>
        <div className="pds_cse_row pds_cse_row1 pds_empty" id="cse_empty9">
          <div className="row1"><span style={{visibility:"hidden"}}>N/A</span></div>
          <div className="row2"></div>
          <div className="row3"></div>
          <div className="row4"></div>
          <div className="row5"></div>
        </div>
        <div className="pds_cse_row pds_cse_row1 pds_empty" id="cse_empty10">
          <div className="row1"><span style={{visibility:"hidden"}}>N/A</span></div>
          <div className="row2"></div>
          <div className="row3"></div>
          <div className="row4"></div>
          <div className="row5"></div>
        </div>


        {pds_step3 /*Eto yung mga input*/}

      {/*Step 4*/}
      <div className="pds_th">
          <span>IV. WORK EXPERIENCE</span>
          <span style={{fontSize:".8rem",marginTop:"5px"}}>(Include private employment. Start from your recent work) Description of duties should be indicated in the attached Work Experience sheet.</span>
      </div>

      <div className="pds_we_row">
          <div className="row1">
              <div style={{fontSize:".8rem",marginTop:"5px",marginLeft:"-95px",position:"absolute"}}>24.</div>
              <div className="top1"><span>INCLUSIVE DATES  (mm/dd/yyyy)</span></div>
              <div className="bot">
                  <div className="from"><span>From</span></div>
                  <div className="to"><span>To</span></div>
              </div>
          </div>
          <div className="row2">
              <span>POSITION TITLE</span>
              <span>(Write in full / Do not abbreviate)</span>
          </div>
          <div className="row3">
              <span>DEPARTMENT / AGENCY / OFFICE / COMPANY</span>
              <span>(Write in full / Do not abbreviate)</span>
          </div>
          <div className="row4">
              <span>MONTHLY SALARY</span>
          </div>
          <div className="row5">
              <span>SALARY/ JOB/ PAY GRADE (if applicable) & STEP  (Format "00-0")/ INCREMENT</span>
          </div>
          <div className="row6">
              <span>STATUS OF APPOINTMENT</span>
          </div>
          <div className="row7">
              <span>GOV'T SERVICE</span>
              <span>(Y/ N)</span>
          </div>
      </div>

        {weContent}
        {pds_step4 /*Eto yung mga input*/}
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty1">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty2">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty3">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty4">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty5">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty6">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty7">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty8">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty9">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty10">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty11">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty12">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty13">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty14">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>
    <div className="pds_we_row pds_we_row1 pds_empty" id="we_empty15">
      <div className="row1"></div>
      <div className="row2"><span style={{visibility:"hidden"}}>N/A</span></div>
      <div className="row3"></div>
      <div className="row4"></div>
      <div className="row5"> </div>
      <div className="row6"></div>
      <div className="row7"></div>
    </div>

      <div className="separate_sheet">
        (Continue on separate sheet if necessary)
      </div>
      <div className="separate_sheet1">
        <div className="row1" style={{width:"130px"}}>SIGNATURE</div>
        <div className="row2"></div>
        <div className="row3">DATE</div>
        <div className="row4" style={{width:"322px"}}>{moment().format('LL')}</div>
      </div>

      <div className="pds_footer">
        CS FORM 212 (Revised 2017), Page 2 of 3
      </div>
</div>     

<div id="page_Separator3" className="page_Separator"> 
      {/*Step 5*/}
      <div className="pds_th" style={{borderTop:"2px solid black"}}>
          <span>V. LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS ATTENDED</span>
          <span style={{fontSize:".75rem",marginTop:"5px",marginBottom:"5px"}}>(Start from the most recent L&D/training program and include only the relevant L&D/training taken for the last five (5) years for Division Chief/Executive/Managerial positions)</span>
      </div>

      <div className="pds_cert_row">
          <div className="row1">
              <div style={{fontSize:".8rem",marginTop:"-60px",marginLeft:"-190px",position:"absolute"}}>25.</div>
              <span>TITLE OF LEARNING AND DEVELOPMENT INTERVENTIONS / TRAINING PROGRAMS</span>
              <span>(Write in full)</span>
          </div>
          <div className="row2">
              <div className="top1"><span>INCLUSIVE DATES OF ATTENDANCE  (mm/dd/yyyy)</span></div>
              <div className="bot">
                  <div className="from"><span>From</span></div>
                  <div className="to"><span>To</span></div>
              </div>
          </div>
          <div className="row3">
              <span>NUMBER OF HOURS</span>
          </div>
          <div className="row4">
              <span>Type of LD (Managerial / Supervisory / Technical / etc)</span>
          </div>
          <div className="row5">
              <span>CONDUCTED/ SPONSORED BY</span>
              <span>(Write in full)</span>
          </div>
      </div>

        {ldContent}
        {pds_step5 /*Eto yung mga input*/}

        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty1">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty2">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty3">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty4">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty5">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty6">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty7">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty8">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty9">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty10">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty11">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty12">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty13">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty14">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty15">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty16">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty17">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty18">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty19">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty20">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty21">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>
        <div className="pds_cert_row pds_cert_row1 pds_empty" id="ld_empty22">
            <div className="row1"><span style={{visibility:"hidden"}}>N/a</span></div>
            <div className="row2"></div>
            <div className="row3"></div>
            <div className="row4"></div>
            <div className="row5"></div>
        </div>

      <div className="pds_end">       
          SUBSCRIBED AND SWORN to before me this&nbsp;&nbsp;&nbsp; <span></span>&nbsp;&nbsp;, affiant exhibiting his/her validly issued government ID as indicated above.
      </div>  
      <div className="pds_end1">       
          <div className="box">
              <div className="bot">Person Administering Oath</div>
          </div>
      </div>  


      <div className="pds_footer">
        CS FORM 212 (Revised 2017), Page 3 of 3
      </div>
  </div>   

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
