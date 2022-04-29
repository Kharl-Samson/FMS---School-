import * as React from "react";
import "../css/createPDS.css";
import LeftNavbarFaculty from "../navbarsUI/LeftNavbarFaculty";
import TextField from "@mui/material/TextField";
import basic_info from "../images/icons/basic_info.svg";
import address_info from "../images/icons/address_info.svg";
import conctact_info from "../images/icons/conctact_info.svg";
import service_info from "../images/icons/service_info.svg";
import work_info from "../images/icons/work_info.svg";
import LandD_info from "../images/icons/LandD_info.svg";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import {
  regions,
  provinces,
  cities,
  barangays,
} from "select-philippines-address";
import { useEffect, useState } from "react";
import { orange } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import PdsFormStepModal from "../modalsUi/PdsFormModal";
import education_info from "../images/icons/education_info.svg";
import form_info from "../images/icons/form_info.svg";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import getAllElementaryInput from "../functions/GetAllEducInput";
import getAllCSEinput from "../functions/GetAllCSEinput";
import validatorPDS0 from "../functions/PdsStep0Validator";
import validatorPDS1 from "../functions/PdsStep1Validator";
import validatorPDS2 from "../functions/PdsStep2Validator";
import validatorPDS3 from "../functions/PdsStep3Validator";
import validatorPDS4 from "../functions/PdsStep4Validator";
import getAllWEinput from "../functions/GetAllWEinput";
import getAllLDinput from "../functions/GetAllLDinput";
import { Link } from "react-router-dom";
import axios from "axios";
import SuccessIcon from "../images/icons/success_modal.svg";
import CICT_Logo from "../images/login/cict_logo.png";
import datasheet_info from "../images/icons/datasheet_info.svg";

import { useNavigate } from "react-router-dom";
import OpenRightNavbar from "../functions/OpenRightNavbar";
import Menu_icon from "../images/icons/menu.svg";
import Dashboard_icon from "../images/icons/dashboard.svg";
import Profile_icon from "../images/icons/profile.svg";
import account_setting from "../images/icons/account_setting.svg";
import Certificate_icon from "../images/icons/certificate.svg";
import Logout_icon from "../images/icons/logout.svg";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Skeleton from "@mui/material/Skeleton";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CreatePersonalDataSheet() {
  document.title = "CICT | Personal Information";
  setTimeout(function () {
    document.getElementById("pds_link").classList.add("nav_active");
    var left_nav_minimize =
      document.getElementsByClassName("left_nav_minimize");
    for (var i = 0; i < left_nav_minimize.length; i++) {
      left_nav_minimize[i].style.display = "none";
    }
    var navlink_container =
      document.getElementsByClassName("navlink_container");
    for (var i = 0; i < navlink_container.length; i++) {
      navlink_container[i].style.justifyContent = "center";
    }
    var left_nav_minimize_img = document.getElementsByClassName(
      "left_nav_minimize_img"
    );
    for (var i = 0; i < left_nav_minimize_img.length; i++) {
      left_nav_minimize_img[i].style.marginLeft = "0%";
    }

    document.getElementById("leftnav_drawerBTN").style.display = "none";
  }, 10);

  var today = moment().format("L");
  today = today.split("/");
  var maxDateInput = today[2] + "-" + today[0] + "-" + today[1];

  //Validate Phone number
  function phonenumber() {
    var phone = document.getElementById("input_phone").value;
    var phoneno = /^(09|\+639)\d{9}$/;
    if (phone.length !== 0 && phone.length !== 11) {
      document.getElementById("contact_validator").style.visibility = "visible";
    } else if (phone.length === 0) {
      document.getElementById("contact_validator").style.visibility = "hidden";
    } else if (!phone.match(phoneno)) {
      document.getElementById("contact_validator").style.visibility = "visible";
    } else {
      document.getElementById("contact_validator").style.visibility = "hidden";
    }
  }

  const [regionData, setRegion] = useState([]);
  const [provinceData, setProvince] = useState([]);
  const [cityData, setCity] = useState([]);
  const [barangayData, setBarangay] = useState([]);
  const [regionAddr, setRegionAddr] = useState("");
  const [provinceAddr, setProvinceAddr] = useState("");
  const [cityAddr, setCityAddr] = useState("");
  const [barangayAddr, setBarangayAddr] = useState("");

  const [regionData1, setRegion1] = useState([]);
  const [provinceData1, setProvince1] = useState([]);
  const [cityData1, setCity1] = useState([]);
  const [barangayData1, setBarangay1] = useState([]);
  const [regionAddr1, setRegionAddr1] = useState("");
  const [provinceAddr1, setProvinceAddr1] = useState("");
  const [cityAddr1, setCityAddr1] = useState("");
  const [barangayAddr1, setBarangayAddr1] = useState("");

  const region = () => {
    regions().then((response) => {
      setRegion(response);
      sameAddressFunction();
    });
  };
  const province = (e) => {
    setRegionAddr(e.target.selectedOptions[0].text);
    provinces(e.target.value).then((response) => {
      setProvince(response);
      setCity([]);
      setBarangay([]);
      sameAddressFunction();
    });
  };
  const city = (e) => {
    setProvinceAddr(e.target.selectedOptions[0].text);
    cities(e.target.value).then((response) => {
      setCity(response);
      sameAddressFunction();
    });
  };
  const barangay = (e) => {
    setCityAddr(e.target.selectedOptions[0].text);
    barangays(e.target.value).then((response) => {
      setBarangay(response);
      sameAddressFunction();
    });
  };
  const brgy = (e) => {
    setBarangayAddr(e.target.selectedOptions[0].text);
    sameAddressFunction();
  };

  useEffect(() => {
    region();
    sameAddressFunction();
  }, []);

  const region1 = () => {
    regions().then((response) => {
      setRegion1(response);
    });
  };
  const province1 = (e) => {
    setRegionAddr1(e.target.selectedOptions[0].text);
    provinces(e.target.value).then((response) => {
      setProvince1(response);
      setCity1([]);
      setBarangay1([]);
      sameAddressFunction();
    });
  };
  const city1 = (e) => {
    setProvinceAddr1(e.target.selectedOptions[0].text);
    cities(e.target.value).then((response) => {
      setCity1(response);
      sameAddressFunction();
    });
  };
  const barangay1 = (e) => {
    setCityAddr1(e.target.selectedOptions[0].text);
    barangays(e.target.value).then((response) => {
      setBarangay1(response);
      sameAddressFunction();
    });
  };
  const brgy1 = (e) => {
    setBarangayAddr1(e.target.selectedOptions[0].text);
    sameAddressFunction();
  };

  useEffect(() => {
    region1();
    sameAddressFunction();
  }, []);

  //If resident and present address are same
  function sameAddressFunction() {
    var checkBox = document.getElementById("address_checkbox");
    var notCheck = document.getElementsByClassName("address_notcheck");
    var check = document.getElementsByClassName("address_check");
    if (checkBox.checked == true) {
      for (var i = 0; i < notCheck.length; i++) {
        notCheck[i].style.display = "none";
        check[i].style.display = "block";
      }
      var inp1 = document.getElementsByClassName("add_inp1")[0].value;
      var inp2 = document.getElementsByClassName("add_inp2")[0].value;
      var inp3 = document.getElementsByClassName("add_inp3")[0].value;
      var inp8 = document.getElementsByClassName("add_inp8")[0].value;
      document.getElementsByClassName("add1_inp1")[1].value = inp1;
      document.getElementsByClassName("add2_inp2")[1].value = inp2;
      document.getElementsByClassName("add3_inp3")[1].value = inp3;
      document.getElementsByClassName("add4_inp4")[1].value = regionAddr;
      document.getElementsByClassName("add5_inp5")[1].value = provinceAddr;
      document.getElementsByClassName("add6_inp6")[1].value = cityAddr;
      document.getElementsByClassName("add7_inp7")[1].value = barangayAddr;
      document.getElementsByClassName("add8_inp8")[1].value = inp8;
      document.getElementById("add_handler1").value = inp1;
      document.getElementById("add_handler2").value = inp2;
      document.getElementById("add_handler3").value = inp3;
      document.getElementById("add_handler4").value = regionAddr;
      document.getElementById("add_handler5").value = provinceAddr;
      document.getElementById("add_handler6").value = cityAddr;
      document.getElementById("add_handler7").value = barangayAddr;
      document.getElementById("add_handler8").value = inp8;
      document.getElementById("add_handler9").value = inp1;
      document.getElementById("add_handler10").value = inp2;
      document.getElementById("add_handler11").value = inp3;
      document.getElementById("add_handler12").value = regionAddr;
      document.getElementById("add_handler13").value = provinceAddr;
      document.getElementById("add_handler14").value = cityAddr;
      document.getElementById("add_handler15").value = barangayAddr;
      document.getElementById("add_handler16").value = inp8;
    } else {
      for (var i = 0; i < notCheck.length; i++) {
        notCheck[i].style.display = "block";
        check[i].style.display = "none";
      }
      var inp1 = document.getElementsByClassName("add_inp1")[0].value;
      var inp2 = document.getElementsByClassName("add_inp2")[0].value;
      var inp3 = document.getElementsByClassName("add_inp3")[0].value;
      var inp8 = document.getElementsByClassName("add_inp8")[0].value;
      document.getElementsByClassName("add1_inp1")[1].value = inp1;
      document.getElementsByClassName("add2_inp2")[1].value = inp2;
      document.getElementsByClassName("add3_inp3")[1].value = inp3;
      document.getElementsByClassName("add4_inp4")[1].value = regionAddr;
      document.getElementsByClassName("add5_inp5")[1].value = provinceAddr;
      document.getElementsByClassName("add6_inp6")[1].value = cityAddr;
      document.getElementsByClassName("add7_inp7")[1].value = barangayAddr;
      document.getElementsByClassName("add8_inp8")[1].value = inp8;
      document.getElementsByClassName("add8_inp8")[1].value = inp8;
      document.getElementById("add_handler1").value = inp1;
      document.getElementById("add_handler2").value = inp2;
      document.getElementById("add_handler3").value = inp3;
      document.getElementById("add_handler4").value = regionAddr;
      document.getElementById("add_handler5").value = provinceAddr;
      document.getElementById("add_handler6").value = cityAddr;
      document.getElementById("add_handler7").value = barangayAddr;
      document.getElementById("add_handler8").value = inp8;
      document.getElementById("add_handler9").value =
        document.getElementsByClassName("add1_inp1")[0].value;
      document.getElementById("add_handler10").value =
        document.getElementsByClassName("add2_inp2")[0].value;
      document.getElementById("add_handler11").value =
        document.getElementsByClassName("add3_inp3")[0].value;
      document.getElementById("add_handler12").value = regionAddr1;
      document.getElementById("add_handler13").value = provinceAddr1;
      document.getElementById("add_handler14").value = cityAddr1;
      document.getElementById("add_handler15").value = barangayAddr1;
      document.getElementById("add_handler16").value =
        document.getElementsByClassName("add8_inp8")[0].value;
    }
  }

  //Getting users age in input
  function getAge() {
    var bdate_input = document.getElementById("bdate_input").value;
    var dob = new Date(bdate_input);
    var month_diff = Date.now() - dob.getTime(); //calculate month difference from current date in time
    var age_dt = new Date(month_diff); //convert the calculated difference in date format
    var year = age_dt.getUTCFullYear(); //extract year from date
    var age = Math.abs(year - 1970); //now calculate the age of the user
    document.getElementById("age_input").innerHTML = age;
  }

  //Add elementary entry
  const [elemEntry, setElemEntry] = useState([{ id: uuidv4() }]);
  const handleAddElemEntry = () => {
    setElemEntry([...elemEntry, { id: uuidv4() }]);
  };
  const handleRemoveElemEntry = (id) => {
    const values = [...elemEntry];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setElemEntry(values);
  };

  //Add secondary entry
  const [secondaryEntry, setSecondaryEntry] = useState([{ id: uuidv4() }]);
  const handleAddSecondaryEntry = () => {
    setSecondaryEntry([...secondaryEntry, { id: uuidv4() }]);
  };
  const handleRemoveSecondaryEntry = (id) => {
    const values = [...secondaryEntry];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setSecondaryEntry(values);
  };

  //Add vocational/trade course entry
  const [vocationalEntry, setVocationalEntry] = useState([{ id: uuidv4() }]);
  const handleAddVocationalEntry = () => {
    setVocationalEntry([...vocationalEntry, { id: uuidv4() }]);
  };
  const handleRemoveVocationalEntry = (id) => {
    const values = [...vocationalEntry];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setVocationalEntry(values);
  };

  //Add college entry
  const [collegeEntry, setCollegeEntry] = useState([{ id: uuidv4() }]);
  const handleAddCollegeEntry = () => {
    setCollegeEntry([...collegeEntry, { id: uuidv4() }]);
  };
  const handleRemoveCollegeEntry = (id) => {
    const values = [...collegeEntry];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setCollegeEntry(values);
  };

  //Add graduate studies entry
  const [graduateEntry, setGraduateEntry] = useState([{ id: uuidv4() }]);
  const handleAddGraduateEntry = () => {
    setGraduateEntry([...graduateEntry, { id: uuidv4() }]);
  };
  const handleRemoveGraduateEntry = (id) => {
    const values = [...graduateEntry];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setGraduateEntry(values);
  };

  //Add civil service eligibility entry
  const [civilEntry, setCivilEntry] = useState([{ id: uuidv4() }]);
  const handleAddCivilEntry = () => {
    setCivilEntry([...civilEntry, { id: uuidv4() }]);
  };
  const handleRemoveCivilEntry = (id) => {
    const values = [...civilEntry];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setCivilEntry(values);
  };

  //Add work experience entry
  const [workEntry, setWorkEntry] = useState([{ id: uuidv4() }]);
  const handleAddWorkEntry = () => {
    setWorkEntry([...workEntry, { id: uuidv4() }]);
  };
  const handleRemoveWorkEntry = (id) => {
    const values = [...workEntry];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setWorkEntry(values);
  };

  //Add learn and development entry
  const [ldEntry, setldEntry] = useState([{ id: uuidv4() }]);
  const handleAddldEntry = () => {
    setldEntry([...ldEntry, { id: uuidv4() }]);
  };
  const handleRemoveldEntry = (id) => {
    const values = [...ldEntry];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setldEntry(values);
  };

  //back stepper function
  function back1_stepper() {
    document.getElementsByClassName("pds_validator")[0].style.display = "none";
    document.getElementsByClassName("consent_form")[0].style.display = "block";
    document.getElementsByClassName("step1_content")[0].style.display = "none";
    document.getElementsByClassName("back_stepper0")[0].style.display = "block";
    document.getElementsByClassName("back_stepper1")[0].style.display = "none";

    document.getElementsByClassName("next_stepper0")[0].style.display = "block";
    document.getElementsByClassName("next_stepper1")[0].style.display = "none";
  }
  function back2_stepper() {
    document.getElementsByClassName("form_container")[0].scrollTop = 0;
    document.getElementsByClassName("step1_content")[0].style.display = "block";
    document.getElementsByClassName("back_stepper1")[0].style.display = "block";
    document.getElementsByClassName("next_stepper1")[0].style.display = "block";
    document.getElementsByClassName(
      "stepper1"
    )[0].style.borderBottomRightRadius = "50px";
    document.getElementsByClassName("stepper1")[0].style.borderTopRightRadius =
      "50px";
    document.getElementsByClassName("stepper2")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName(
      "stepper2"
    )[0].style.borderBottomRightRadius = "0px";
    document.getElementsByClassName("stepper2")[0].style.borderTopRightRadius =
      "0px";
    document.getElementsByClassName("circle2")[0].style.backgroundColor =
      "#C2C9CB";
    document.getElementsByClassName("circle2")[0].style.color = "#ffff";
    document.getElementsByClassName("stepper_text2")[0].style.color = "#C2C9CB";
    document.getElementsByClassName("back_stepper2")[0].style.display = "none";
    document.getElementsByClassName("next_stepper2")[0].style.display = "none";
    document.getElementsByClassName("step2_content")[0].style.display = "none";
  }
  function back3_stepper() {
    document.getElementsByClassName("form_container")[0].scrollTop = 0;
    document.getElementsByClassName("step2_content")[0].style.display = "block";
    document.getElementsByClassName("back_stepper2")[0].style.display = "block";
    document.getElementsByClassName("next_stepper2")[0].style.display = "block";
    document.getElementsByClassName(
      "stepper2"
    )[0].style.borderBottomRightRadius = "50px";
    document.getElementsByClassName("stepper2")[0].style.borderTopRightRadius =
      "50px";
    document.getElementsByClassName("stepper3")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName(
      "stepper3"
    )[0].style.borderBottomRightRadius = "0px";
    document.getElementsByClassName("stepper3")[0].style.borderTopRightRadius =
      "0px";
    document.getElementsByClassName("circle3")[0].style.backgroundColor =
      "#C2C9CB";
    document.getElementsByClassName("circle3")[0].style.color = "#ffff";
    document.getElementsByClassName("stepper_text3")[0].style.color = "#C2C9CB";
    document.getElementsByClassName("back_stepper3")[0].style.display = "none";
    document.getElementsByClassName("next_stepper3")[0].style.display = "none";
    document.getElementsByClassName("step3_content")[0].style.display = "none";
  }
  function back4_stepper() {
    document.getElementsByClassName("form_container")[0].scrollTop = 0;
    document.getElementsByClassName("step3_content")[0].style.display = "block";
    document.getElementsByClassName("back_stepper3")[0].style.display = "block";
    document.getElementsByClassName("next_stepper3")[0].style.display = "block";
    document.getElementsByClassName(
      "stepper3"
    )[0].style.borderBottomRightRadius = "50px";
    document.getElementsByClassName("stepper3")[0].style.borderTopRightRadius =
      "50px";
    document.getElementsByClassName("stepper4")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName(
      "stepper4"
    )[0].style.borderBottomRightRadius = "0px";
    document.getElementsByClassName("stepper4")[0].style.borderTopRightRadius =
      "0px";
    document.getElementsByClassName("circle4")[0].style.backgroundColor =
      "#C2C9CB";
    document.getElementsByClassName("circle4")[0].style.color = "#ffff";
    document.getElementsByClassName("stepper_text4")[0].style.color = "#C2C9CB";
    document.getElementsByClassName("back_stepper4")[0].style.display = "none";
    document.getElementsByClassName("next_stepper4")[0].style.display = "none";
    document.getElementsByClassName("step4_content")[0].style.display = "none";
  }
  function back5_stepper() {
    document.getElementsByClassName("form_container")[0].scrollTop = 0;
    document.getElementsByClassName("step4_content")[0].style.display = "block";
    document.getElementsByClassName("back_stepper4")[0].style.display = "block";
    document.getElementsByClassName("next_stepper4")[0].style.display = "block";
    document.getElementsByClassName(
      "stepper4"
    )[0].style.borderBottomRightRadius = "50px";
    document.getElementsByClassName("stepper4")[0].style.borderTopRightRadius =
      "50px";
    document.getElementsByClassName("stepper5")[0].style.backgroundColor =
      "transparent";
    document.getElementsByClassName(
      "stepper5"
    )[0].style.borderBottomRightRadius = "0px";
    document.getElementsByClassName("stepper5")[0].style.borderTopRightRadius =
      "0px";
    document.getElementsByClassName("circle5")[0].style.backgroundColor =
      "#C2C9CB";
    document.getElementsByClassName("circle5")[0].style.color = "#ffff";
    document.getElementsByClassName("stepper_text5")[0].style.color = "#C2C9CB";
    document.getElementsByClassName("back_stepper5")[0].style.display = "none";
    document.getElementsByClassName("next_stepper5")[0].style.display = "none";
    document.getElementsByClassName("step5_content")[0].style.display = "none";
  }
  function back6_stepper() {
    document.getElementsByClassName("form_container")[0].scrollTop = 0;
    document.getElementsByClassName("step5_content")[0].style.display = "block";
    document.getElementsByClassName("back_stepper5")[0].style.display = "block";
    document.getElementsByClassName("next_stepper5")[0].style.display = "block";
    document.getElementsByClassName(
      "stepper5"
    )[0].style.borderBottomRightRadius = "50px";
    document.getElementsByClassName("stepper5")[0].style.borderTopRightRadius =
      "50px";

    document.getElementsByClassName("back_stepper6")[0].style.display = "none";
    document.getElementsByClassName("next_stepper6")[0].style.display = "none";
    document.getElementsByClassName("preview_pds")[0].style.display = "none";
  }

  //Submit PDS
  const submitPDSTaskForm = (e) => {
    e.preventDefault();
    const data = new FormData();

    //Sending the data request to call it on backend
    const sendDataPDS = {
      fname_pds: document.getElementById("fname_pds").value.toUpperCase(),
      mname_pds: document.getElementById("mname_pds").value.toUpperCase(),
      lname_pds: document.getElementById("lname_pds").value.toUpperCase(),
      nameextension_pds: document
        .getElementById("nameextension_pds")
        .value.toUpperCase(),
      bdate_input: document.getElementById("bdate_input").value,
      age_input: document.getElementById("age_input").textContent,
      cob_pds: document.getElementById("cob_pds").value.toUpperCase(),
      cityOfBirth_pds: document
        .getElementById("cityOfBirth_pds")
        .value.toUpperCase(),
      gender_pds: document.getElementById("gender_pds").value.toUpperCase(),
      civil_pds: document.getElementById("civil_pds").value.toUpperCase(),
      height_pds: document.getElementById("height_pds").value.toUpperCase(),
      weight_pds: document.getElementById("weight_pds").value.toUpperCase(),
      blood_pds: document.getElementById("blood_pds").value.toUpperCase(),
      gsis_pds: document.getElementById("gsis_pds").value.toUpperCase(),
      pagibig_pds: document.getElementById("pagibig_pds").value.toUpperCase(),
      philhealth_pds: document
        .getElementById("philhealth_pds")
        .value.toUpperCase(),
      sss_pds: document.getElementById("sss_pds").value.toUpperCase(),
      tin_pds: document.getElementById("tin_pds").value.toUpperCase(),
      employee_pds: document.getElementById("employee_pds").value.toUpperCase(),
      citizenship_pds: document
        .getElementById("citizenship_pds")
        .value.toUpperCase(),
      email_pds: document.getElementById("email_pds").value,
      al_email_pds: document.getElementById("al_email_pds").value,
      add_handler1: document.getElementById("add_handler1").value.toUpperCase(),
      add_handler2: document.getElementById("add_handler2").value.toUpperCase(),
      add_handler3: document.getElementById("add_handler3").value.toUpperCase(),
      add_handler4: document.getElementById("add_handler4").value.toUpperCase(),
      add_handler5: document.getElementById("add_handler5").value.toUpperCase(),
      add_handler6: document.getElementById("add_handler6").value.toUpperCase(),
      add_handler7: document.getElementById("add_handler7").value.toUpperCase(),
      add_handler8: document.getElementById("add_handler8").value.toUpperCase(),
      add_handler9: document.getElementById("add_handler9").value.toUpperCase(),
      add_handler10: document
        .getElementById("add_handler10")
        .value.toUpperCase(),
      add_handler11: document
        .getElementById("add_handler11")
        .value.toUpperCase(),
      add_handler12: document
        .getElementById("add_handler12")
        .value.toUpperCase(),
      add_handler13: document
        .getElementById("add_handler13")
        .value.toUpperCase(),
      add_handler14: document
        .getElementById("add_handler14")
        .value.toUpperCase(),
      add_handler15: document
        .getElementById("add_handler15")
        .value.toUpperCase(),
      add_handler16: document
        .getElementById("add_handler16")
        .value.toUpperCase(),
      input_phone: document.getElementById("input_phone").value,
      tele_pds: document.getElementById("tele_pds").value,
      nameELEM_handler: document
        .getElementById("nameELEM_handler")
        .value.toUpperCase(),
      attainELEM_handler: document
        .getElementById("attainELEM_handler")
        .value.toUpperCase(),
      dateFromELEM_handler: document.getElementById("dateFromELEM_handler")
        .value,
      dateToELEM_handler: document.getElementById("dateToELEM_handler").value,
      unitsELEM_handler: document
        .getElementById("unitsELEM_handler")
        .value.toUpperCase(),
      yearGradELEM_handler: document
        .getElementById("yearGradELEM_handler")
        .value.toUpperCase(),
      awardELEM_handler: document
        .getElementById("awardELEM_handler")
        .value.toUpperCase(),
      nameSecond_handler: document
        .getElementById("nameSecond_handler")
        .value.toUpperCase(),
      attainSecond_handler: document
        .getElementById("attainSecond_handler")
        .value.toUpperCase(),
      dateFromSecond_handler: document.getElementById("dateFromSecond_handler")
        .value,
      dateToSecond_handler: document.getElementById("dateToSecond_handler")
        .value,
      unitsSecond_handler: document
        .getElementById("unitsSecond_handler")
        .value.toUpperCase(),
      yearGradSecond_handler: document
        .getElementById("yearGradSecond_handler")
        .value.toUpperCase(),
      awardSecond_handler: document
        .getElementById("awardSecond_handler")
        .value.toUpperCase(),
      nameVocational_handler: document
        .getElementById("nameVocational_handler")
        .value.toUpperCase(),
      attainVocational_handler: document
        .getElementById("attainVocational_handler")
        .value.toUpperCase(),
      dateFromVocational_handler: document.getElementById(
        "dateFromVocational_handler"
      ).value,
      dateToVocational_handler: document.getElementById(
        "dateToVocational_handler"
      ).value,
      unitsVocational_handler: document
        .getElementById("unitsVocational_handler")
        .value.toUpperCase(),
      yearGradVocational_handler: document
        .getElementById("yearGradVocational_handler")
        .value.toUpperCase(),
      awardVocational_handler: document
        .getElementById("awardVocational_handler")
        .value.toUpperCase(),
      nameCollege_handler: document
        .getElementById("nameCollege_handler")
        .value.toUpperCase(),
      attainCollege_handler: document
        .getElementById("attainCollege_handler")
        .value.toUpperCase(),
      dateFromCollege_handler: document.getElementById(
        "dateFromCollege_handler"
      ).value,
      dateToCollege_handler: document.getElementById("dateToCollege_handler")
        .value,
      unitsCollege_handler: document
        .getElementById("unitsCollege_handler")
        .value.toUpperCase(),
      yearGradCollege_handler: document
        .getElementById("yearGradCollege_handler")
        .value.toUpperCase(),
      awardCollege_handler: document
        .getElementById("awardCollege_handler")
        .value.toUpperCase(),
      nameGraduate_handler: document
        .getElementById("nameGraduate_handler")
        .value.toUpperCase(),
      attainGraduate_handler: document
        .getElementById("attainGraduate_handler")
        .value.toUpperCase(),
      dateFromGraduate_handler: document.getElementById(
        "dateFromGraduate_handler"
      ).value,
      dateToGraduate_handler: document.getElementById("dateToGraduate_handler")
        .value,
      unitsGraduate_handler: document
        .getElementById("unitsGraduate_handler")
        .value.toUpperCase(),
      yearGradGraduate_handler: document
        .getElementById("yearGradGraduate_handler")
        .value.toUpperCase(),
      awardGraduate_handler: document
        .getElementById("awardGraduate_handler")
        .value.toUpperCase(),
      CSE_board_handler: document
        .getElementById("CSE_board_handler")
        .value.toUpperCase(),
      CSE_rating_handler: document
        .getElementById("CSE_rating_handler")
        .value.toUpperCase(),
      CSE_dateExam_handler: document.getElementById("CSE_dateExam_handler")
        .value,
      CSE_placeExam_handler: document
        .getElementById("CSE_placeExam_handler")
        .value.toUpperCase(),
      CSE_licenseNo_handler: document
        .getElementById("CSE_licenseNo_handler")
        .value.toUpperCase(),
      CSE_dateValidity_handler: document.getElementById(
        "CSE_dateValidity_handler"
      ).value,
      WE_dateFrom_handler: document.getElementById("WE_dateFrom_handler").value,
      WE_dateTo_handler: document.getElementById("WE_dateTo_handler").value,
      WE_position_handler: document
        .getElementById("WE_position_handler")
        .value.toUpperCase(),
      WE_dept_handler: document
        .getElementById("WE_dept_handler")
        .value.toUpperCase(),
      WE_monthly_handler: document
        .getElementById("WE_monthly_handler")
        .value.toUpperCase(),
      WE_salary_handler: document
        .getElementById("WE_salary_handler")
        .value.toUpperCase(),
      WE_appoint_handler: document
        .getElementById("WE_appoint_handler")
        .value.toUpperCase(),
      WE_govt_handler: document
        .getElementById("WE_govt_handler")
        .value.toUpperCase(),
      LD_img_handler: document.getElementById("LD_img_handler").value,
      LD_title_handler: document
        .getElementById("LD_title_handler")
        .value.toUpperCase(),
      LD_dateFrom_handler: document
        .getElementById("LD_dateFrom_handler")
        .value.toUpperCase(),
      LD_dateTo_handler: document
        .getElementById("LD_dateTo_handler")
        .value.toUpperCase(),
      LD_hours_handler: document
        .getElementById("LD_hours_handler")
        .value.toUpperCase(),
      LD_type_handler: document
        .getElementById("LD_type_handler")
        .value.toUpperCase(),
      LD_sponsored_handler: document
        .getElementById("LD_sponsored_handler")
        .value.toUpperCase(),
      LD_coverage_handler: document
        .getElementById("LD_coverage_handler")
        .value.toUpperCase(),
      LD_category_handler: document
        .getElementById("LD_category_handler")
        .value.toUpperCase(),
    };
    //Sending the data to my backend
    axios
      .post("http://localhost/fms/createPDS.php", sendDataPDS)
      .then((result) => {
        document.getElementsByClassName(
          "success_modal_PDS_container"
        )[0].style.display = "flex";
      }); //End of axios
    for (let i = 0; i < document.getElementsByName("imgLD[]").length; i++) {
      data.append("file[]", document.getElementsByName("imgLD[]")[i].files[0]);
    }
    let url = "http://localhost/fms/createPDS.php";
    axios.post(url, data, {}).then((res) => {});
  };

  //Closing success modal create pds
  function closeSuccessCreatePDSmodal() {
    window.localStorage.setItem("pds_status", "Approved");
    // window.localStorage.setItem('pds_ctr', "off");
  }

  //-------------------------------------------------

  //Hook for getting Elementary
  const [elemName, setElemName] = useState([]);
  const loadElemName = async () => {
    var inputELEMname = document.getElementById("elemName_Input").value;
    var sliceinputELEMname = inputELEMname.slice(0, -5);
    const inputELEMname_Array = sliceinputELEMname.split(" |:| ");
    setElemName(inputELEMname_Array);
  };
  const [elemfrom, setElemfrom] = useState([]);
  const loadElemfrom = async () => {
    var inputELEMfrom = document.getElementById("elemDateFrom_Input").value;
    var replaceFrom = inputELEMfrom.replace(/-/g, "/");
    var sliceinputELEMfrom = replaceFrom.slice(0, -5);
    const inputELEMfrom_Array = sliceinputELEMfrom.split(" |:| ");
    setElemfrom(inputELEMfrom_Array);
  };
  const [elemTO, setElemTO] = useState([]);
  const loadElemTO = async () => {
    var inputELEMTO = document.getElementById("elemDateTo_Input").value;
    var replaceTO = inputELEMTO.replace(/-/g, "/");
    var sliceinputELEMTO = replaceTO.slice(0, -5);
    const inputELEMTO_Array = sliceinputELEMTO.split(" |:| ");
    setElemTO(inputELEMTO_Array);
  };
  const [elemUNITS, setElemUNITS] = useState([]);
  const loadElemUNITS = async () => {
    var inputELEMUNITS = document.getElementById("elemUnit_Input").value;
    var sliceinputELEMUNITS = inputELEMUNITS.slice(0, -5);
    const inputELEMUNITS_Array = sliceinputELEMUNITS.split(" |:| ");
    setElemUNITS(inputELEMUNITS_Array);
  };
  const [elemYEAR, setElemYEAR] = useState([]);
  const loadElemYEAR = async () => {
    var inputELEMYEAR = document.getElementById("elemYear_Input").value;
    var sliceinputELEMYEAR = inputELEMYEAR.slice(0, -5);
    const inputELEMYEAR_Array = sliceinputELEMYEAR.split(" |:| ");
    setElemYEAR(inputELEMYEAR_Array);
  };
  const [elemAWARD, setElemAWARD] = useState([]);
  const loadElemAWARD = async () => {
    var inputELEMAWARD = document.getElementById("elemAward_Input").value;
    var sliceinputELEMAWARD = inputELEMAWARD.slice(0, -5);
    const inputELEMAWARD_Array = sliceinputELEMAWARD.split(" |:| ");
    setElemAWARD(inputELEMAWARD_Array);
  };

  //Hook for getting Secondary
  const [SecondName, setSecondName] = useState([]);
  const loadSecondName = async () => {
    var inputSecondname = document.getElementById("secName_Input").value;
    var sliceinputSecondname = inputSecondname.slice(0, -5);
    const inputSecondname_Array = sliceinputSecondname.split(" |:| ");
    setSecondName(inputSecondname_Array);
  };
  const [SecondAttain, setSecondAttain] = useState([]);
  const loadSecondAttain = async () => {
    var inputSecondAttain = document.getElementById("secAttain_Input").value;
    var sliceinputSecondAttain = inputSecondAttain.slice(0, -5);
    const inputSecondAttain_Array = sliceinputSecondAttain.split(" |:| ");
    setSecondAttain(inputSecondAttain_Array);
  };
  const [SecondFrom, setSecondFrom] = useState([]);
  const loadSecondFrom = async () => {
    var inputSecondFrom = document.getElementById("secDateFrom_Input").value;
    var replaceFrom = inputSecondFrom.replace(/-/g, "/");
    var sliceinputSecondFrom = replaceFrom.slice(0, -5);
    const inputSecondFrom_Array = sliceinputSecondFrom.split(" |:| ");
    setSecondFrom(inputSecondFrom_Array);
  };
  const [SecondTo, setSecondTo] = useState([]);
  const loadSecondTo = async () => {
    var inputSecondTo = document.getElementById("secDateTo_Input").value;
    var replaceTo = inputSecondTo.replace(/-/g, "/");
    var sliceinputSecondTo = replaceTo.slice(0, -5);
    const inputSecondTo_Array = sliceinputSecondTo.split(" |:| ");
    setSecondTo(inputSecondTo_Array);
  };
  const [SecondUnit, setSecondUnit] = useState([]);
  const loadSecondUnit = async () => {
    var inputSecondUnit = document.getElementById("secUnit_Input").value;
    var sliceinputSecondUnit = inputSecondUnit.slice(0, -5);
    const inputSecondUnit_Array = sliceinputSecondUnit.split(" |:| ");
    setSecondUnit(inputSecondUnit_Array);
  };
  const [SecondYear, setSecondYear] = useState([]);
  const loadSecondYear = async () => {
    var inputSecondYear = document.getElementById("secYear_Input").value;
    var sliceinputSecondYear = inputSecondYear.slice(0, -5);
    const inputSecondYear_Array = sliceinputSecondYear.split(" |:| ");
    setSecondYear(inputSecondYear_Array);
  };
  const [SecondAward, setSecondAward] = useState([]);
  const loadSecondAward = async () => {
    var inputSecondAward = document.getElementById("secAward_Input").value;
    var sliceinputSecondAward = inputSecondAward.slice(0, -5);
    const inputSecondAward_Array = sliceinputSecondAward.split(" |:| ");
    setSecondAward(inputSecondAward_Array);
  };

  //Hook for getting Vocational
  const [VocationalName, setVocationalName] = useState([]);
  const loadVocationalName = async () => {
    var inputVocationalname = document.getElementById("vocName_Input").value;
    var sliceinputVocationalname = inputVocationalname.slice(0, -5);
    const inputVocationalname_Array = sliceinputVocationalname.split(" |:| ");
    setVocationalName(inputVocationalname_Array);
  };
  const [VocationalAttain, setVocationalAttain] = useState([]);
  const loadVocationalAttain = async () => {
    var inputVocationalAttain =
      document.getElementById("vocAttain_Input").value;
    var sliceinputVocationalAttain = inputVocationalAttain.slice(0, -5);
    const inputVocationalAttain_Array =
      sliceinputVocationalAttain.split(" |:| ");
    setVocationalAttain(inputVocationalAttain_Array);
  };
  const [VocationalFrom, setVocationalFrom] = useState([]);
  const loadVocationalFrom = async () => {
    var inputVocationalFrom =
      document.getElementById("vocDateFrom_Input").value;
    var replaceFrom = inputVocationalFrom.replace(/-/g, "/");
    var sliceinputVocationalFrom = replaceFrom.slice(0, -5);
    const inputVocationalFrom_Array = sliceinputVocationalFrom.split(" |:| ");
    setVocationalFrom(inputVocationalFrom_Array);
  };
  const [VocationalTo, setVocationalTo] = useState([]);
  const loadVocationalTo = async () => {
    var inputVocationalTo = document.getElementById("vocDateTo_Input").value;
    var replaceTo = inputVocationalTo.replace(/-/g, "/");
    var sliceinputVocationalTo = replaceTo.slice(0, -5);
    const inputVocationalTo_Array = sliceinputVocationalTo.split(" |:| ");
    setVocationalTo(inputVocationalTo_Array);
  };
  const [VocationalUnit, setVocationalUnit] = useState([]);
  const loadVocationalUnit = async () => {
    var inputVocationalUnit = document.getElementById("vocUnit_Input").value;
    var sliceinputVocationalUnit = inputVocationalUnit.slice(0, -5);
    const inputVocationalUnit_Array = sliceinputVocationalUnit.split(" |:| ");
    setVocationalUnit(inputVocationalUnit_Array);
  };
  const [VocationalYear, setVocationalYear] = useState([]);
  const loadVocationalYear = async () => {
    var inputVocationalYear = document.getElementById("vocYear_Input").value;
    var sliceinputVocationalYear = inputVocationalYear.slice(0, -5);
    const inputVocationalYear_Array = sliceinputVocationalYear.split(" |:| ");
    setVocationalYear(inputVocationalYear_Array);
  };
  const [VocationalAward, setVocationalAward] = useState([]);
  const loadVocationalAward = async () => {
    var inputVocationalAward = document.getElementById("vocAward_Input").value;
    var sliceinputVocationalAward = inputVocationalAward.slice(0, -5);
    const inputVocationalAward_Array = sliceinputVocationalAward.split(" |:| ");
    setVocationalAward(inputVocationalAward_Array);
  };

  //Hook for getting College
  const [CollegeName, setCollegeName] = useState([]);
  const loadCollegeName = async () => {
    var inputCollegename = document.getElementById("colName_Input").value;
    var sliceinputCollegename = inputCollegename.slice(0, -5);
    const inputCollegename_Array = sliceinputCollegename.split(" |:| ");
    setCollegeName(inputCollegename_Array);
  };
  const [CollegeAttain, setCollegeAttain] = useState([]);
  const loadCollegeAttain = async () => {
    var inputCollegeAttain = document.getElementById("colAttain_Input").value;
    var sliceinputCollegeAttain = inputCollegeAttain.slice(0, -5);
    const inputCollegeAttain_Array = sliceinputCollegeAttain.split(" |:| ");
    setCollegeAttain(inputCollegeAttain_Array);
  };
  const [CollegeFrom, setCollegeFrom] = useState([]);
  const loadCollegeFrom = async () => {
    var inputCollegeFrom = document.getElementById("colDateFrom_Input").value;
    var replaceFrom = inputCollegeFrom.replace(/-/g, "/");
    var sliceinputCollegeFrom = replaceFrom.slice(0, -5);
    const inputCollegeFrom_Array = sliceinputCollegeFrom.split(" |:| ");
    setCollegeFrom(inputCollegeFrom_Array);
  };
  const [CollegeTo, setCollegeTo] = useState([]);
  const loadCollegeTo = async () => {
    var inputCollegeTo = document.getElementById("colDateTo_Input").value;
    var replaceTo = inputCollegeTo.replace(/-/g, "/");
    var sliceinputCollegeTo = replaceTo.slice(0, -5);
    const inputCollegeTo_Array = sliceinputCollegeTo.split(" |:| ");
    setCollegeTo(inputCollegeTo_Array);
  };
  const [CollegeUnit, setCollegeUnit] = useState([]);
  const loadCollegeUnit = async () => {
    var inputCollegeUnit = document.getElementById("colUnit_Input").value;
    var sliceinputCollegeUnit = inputCollegeUnit.slice(0, -5);
    const inputCollegeUnit_Array = sliceinputCollegeUnit.split(" |:| ");
    setCollegeUnit(inputCollegeUnit_Array);
  };
  const [CollegeYear, setCollegeYear] = useState([]);
  const loadCollegeYear = async () => {
    var inputCollegeYear = document.getElementById("colYear_Input").value;
    var sliceinputCollegeYear = inputCollegeYear.slice(0, -5);
    const inputCollegeYear_Array = sliceinputCollegeYear.split(" |:| ");
    setCollegeYear(inputCollegeYear_Array);
  };
  const [CollegeAward, setCollegeAward] = useState([]);
  const loadCollegeAward = async () => {
    var inputCollegeAward = document.getElementById("colAward_Input").value;
    var sliceinputCollegeAward = inputCollegeAward.slice(0, -5);
    const inputCollegeAward_Array = sliceinputCollegeAward.split(" |:| ");
    setCollegeAward(inputCollegeAward_Array);
  };

  //Hook for getting Graduate Studies
  const [GraduateName, setGraduateName] = useState([]);
  const loadGraduateName = async () => {
    var inputGraduatename = document.getElementById("gradName_Input").value;
    var sliceinputGraduatename = inputGraduatename.slice(0, -5);
    const inputGraduatename_Array = sliceinputGraduatename.split(" |:| ");
    setGraduateName(inputGraduatename_Array);
  };
  const [GraduateAttain, setGraduateAttain] = useState([]);
  const loadGraduateAttain = async () => {
    var inputGraduateAttain = document.getElementById("gradAttain_Input").value;
    var sliceinputGraduateAttain = inputGraduateAttain.slice(0, -5);
    const inputGraduateAttain_Array = sliceinputGraduateAttain.split(" |:| ");
    setGraduateAttain(inputGraduateAttain_Array);
  };
  const [GraduateFrom, setGraduateFrom] = useState([]);
  const loadGraduateFrom = async () => {
    var inputGraduateFrom = document.getElementById("gradDateFrom_Input").value;
    var replaceFrom = inputGraduateFrom.replace(/-/g, "/");
    var sliceinputGraduateFrom = replaceFrom.slice(0, -5);
    const inputGraduateFrom_Array = sliceinputGraduateFrom.split(" |:| ");
    setGraduateFrom(inputGraduateFrom_Array);
  };
  const [GraduateTo, setGraduateTo] = useState([]);
  const loadGraduateTo = async () => {
    var inputGraduateTo = document.getElementById("gradDateTo_Input").value;
    var replaceTo = inputGraduateTo.replace(/-/g, "/");
    var sliceinputGraduateTo = replaceTo.slice(0, -5);
    const inputGraduateTo_Array = sliceinputGraduateTo.split(" |:| ");
    setGraduateTo(inputGraduateTo_Array);
  };
  const [GraduateUnit, setGraduateUnit] = useState([]);
  const loadGraduateUnit = async () => {
    var inputGraduateUnit = document.getElementById("gradUnit_Input").value;
    var sliceinputGraduateUnit = inputGraduateUnit.slice(0, -5);
    const inputGraduateUnit_Array = sliceinputGraduateUnit.split(" |:| ");
    setGraduateUnit(inputGraduateUnit_Array);
  };
  const [GraduateYear, setGraduateYear] = useState([]);
  const loadGraduateYear = async () => {
    var inputGraduateYear = document.getElementById("gradYear_Input").value;
    var sliceinputGraduateYear = inputGraduateYear.slice(0, -5);
    const inputGraduateYear_Array = sliceinputGraduateYear.split(" |:| ");
    setGraduateYear(inputGraduateYear_Array);
  };
  const [GraduateAward, setGraduateAward] = useState([]);
  const loadGraduateAward = async () => {
    var inputGraduateAward = document.getElementById("gradAward_Input").value;
    var sliceinputGraduateAward = inputGraduateAward.slice(0, -5);
    const inputGraduateAward_Array = sliceinputGraduateAward.split(" |:| ");
    setGraduateAward(inputGraduateAward_Array);
  };

  //Hook for getting CSE
  const [CseBoard, setCseBoard] = useState([]);
  const loadCseBoard = async () => {
    var inputCseBoard = document.getElementById("cseBoard_Input").value;
    var sliceinputCseBoard = inputCseBoard.slice(0, -5);
    const inputCseBoard_Array = sliceinputCseBoard.split(" |:| ");
    setCseBoard(inputCseBoard_Array);
  };
  const [CseRating, setCseRating] = useState([]);
  const loadCseRating = async () => {
    var inputCseRating = document.getElementById("cseRating_Input").value;
    var sliceinputCseRating = inputCseRating.slice(0, -5);
    const inputCseRating_Array = sliceinputCseRating.split(" |:| ");
    setCseRating(inputCseRating_Array);
  };
  const [CseDateExam, setCseDateExam] = useState([]);
  const loadCseDateExam = async () => {
    var inputCseDateExam = document.getElementById("cseDateExam_Input").value;
    var replaceTo = inputCseDateExam.replace(/-/g, "/");
    var sliceCseDateExam = replaceTo.slice(0, -5);
    const CseDateExam_Array = sliceCseDateExam.split(" |:| ");
    setCseDateExam(CseDateExam_Array);
  };
  const [CsePlaceExam, setCsePlaceExam] = useState([]);
  const loadCsePlaceExam = async () => {
    var inputCsePlaceExam = document.getElementById("csePlaceExam_Input").value;
    var sliceinputCsePlaceExam = inputCsePlaceExam.slice(0, -5);
    const inputCsePlaceExam_Array = sliceinputCsePlaceExam.split(" |:| ");
    setCsePlaceExam(inputCsePlaceExam_Array);
  };
  const [CseLicense, setCseLicense] = useState([]);
  const loadCseLicense = async () => {
    var inputCseLicense = document.getElementById("cseLicense_Input").value;
    var sliceinputCseLicense = inputCseLicense.slice(0, -5);
    const inputCseLicense_Array = sliceinputCseLicense.split(" |:| ");
    setCseLicense(inputCseLicense_Array);
  };
  const [CseDateVal, setCseDateVal] = useState([]);
  const loadCseDateVal = async () => {
    var inputCseDateVal = document.getElementById("cseDateVal_Input").value;
    var replaceTo = inputCseDateVal.replace(/-/g, "/");
    var sliceCseDateVal = replaceTo.slice(0, -5);
    const CseDateVal_Array = sliceCseDateVal.split(" |:| ");
    setCseDateVal(CseDateVal_Array);
  };

  //Hook for gettin WE
  const [weFrom, setweFrom] = useState([]);
  const loadweFrom = async () => {
    var inputweFrom = document.getElementById("weFrom_Input").value;
    var replaceTo = inputweFrom.replace(/-/g, "/");
    var sliceweFrom = replaceTo.slice(0, -5);
    const weFrom_Array = sliceweFrom.split(" |:| ");
    setweFrom(weFrom_Array);
  };
  const [weTo, setweTo] = useState([]);
  const loadweTo = async () => {
    var inputweTo = document.getElementById("weTo_Input").value;
    var replaceTo = inputweTo.replace(/-/g, "/");
    var sliceweTo = replaceTo.slice(0, -5);
    const weTo_Array = sliceweTo.split(" |:| ");
    setweTo(weTo_Array);
  };
  const [wePosition, setwePosition] = useState([]);
  const loadwePosition = async () => {
    var inputwePosition = document.getElementById("wePosition_Input").value;
    var sliceinputwePosition = inputwePosition.slice(0, -5);
    const inputwePosition_Array = sliceinputwePosition.split(" |:| ");
    setwePosition(inputwePosition_Array);
  };
  const [weDepartment, setweDepartment] = useState([]);
  const loadweDepartment = async () => {
    var inputweDepartment = document.getElementById("weDepartment_Input").value;
    var sliceinputweDepartment = inputweDepartment.slice(0, -5);
    const inputweDepartment_Array = sliceinputweDepartment.split(" |:| ");
    setweDepartment(inputweDepartment_Array);
  };
  const [weMonthly, setweMonthly] = useState([]);
  const loadweMonthly = async () => {
    var inputweMonthly = document.getElementById("weMonthly_Input").value;
    var sliceinputweMonthly = inputweMonthly.slice(0, -5);
    const inputweMonthly_Array = sliceinputweMonthly.split(" |:| ");
    setweMonthly(inputweMonthly_Array);
  };
  const [weSalary, setweSalary] = useState([]);
  const loadweSalary = async () => {
    var inputweSalary = document.getElementById("weSalary_Input").value;
    var sliceinputweSalary = inputweSalary.slice(0, -5);
    const inputweSalary_Array = sliceinputweSalary.split(" |:| ");
    setweSalary(inputweSalary_Array);
  };
  const [weAppoint, setweAppoint] = useState([]);
  const loadweAppoint = async () => {
    var inputweAppoint = document.getElementById("weAppoint_Input").value;
    var sliceinputweAppoint = inputweAppoint.slice(0, -5);
    const inputweAppoint_Array = sliceinputweAppoint.split(" |:| ");
    setweAppoint(inputweAppoint_Array);
  };
  const [weGov, setweGov] = useState([]);
  const loadweGov = async () => {
    var inputweGov = document.getElementById("weGov_Input").value;
    var sliceinputweGov = inputweGov.slice(0, -5);
    const inputweGov_Array = sliceinputweGov.split(" |:| ");
    setweGov(inputweGov_Array);
  };

  //Hook for getting LD
  const [ldTitle, setldTitle] = useState([]);
  const loadldTitle = async () => {
    var inputldTitle = document.getElementById("ldTitle_Input").value;
    var sliceinputldTitle = inputldTitle.slice(0, -5);
    const inputldTitle_Array = sliceinputldTitle.split(" |:| ");
    setldTitle(inputldTitle_Array);
  };
  const [ldFrom, setldFrom] = useState([]);
  const loadldFrom = async () => {
    var inputldFrom = document.getElementById("ldFrom_Input").value;
    var replaceTo = inputldFrom.replace(/-/g, "/");
    var sliceldFrom = replaceTo.slice(0, -5);
    const ldFrom_Array = sliceldFrom.split(" |:| ");
    setldFrom(ldFrom_Array);
  };
  const [ldTo, setldTo] = useState([]);
  const loadldTo = async () => {
    var inputldTo = document.getElementById("ldTo_Input").value;
    var replaceTo = inputldTo.replace(/-/g, "/");
    var sliceldTo = replaceTo.slice(0, -5);
    const ldTo_Array = sliceldTo.split(" |:| ");
    setldTo(ldTo_Array);
  };
  const [ldHours, setldHours] = useState([]);
  const loadldHours = async () => {
    var inputldHours = document.getElementById("ldHours_Input").value;
    var sliceinputldHours = inputldHours.slice(0, -5);
    const inputldHours_Array = sliceinputldHours.split(" |:| ");
    setldHours(inputldHours_Array);
  };
  const [ldType, setldType] = useState([]);
  const loadldType = async () => {
    var inputldType = document.getElementById("ldType_Input").value;
    var sliceinputldType = inputldType.slice(0, -5);
    const inputldType_Array = sliceinputldType.split(" |:| ");
    setldType(inputldType_Array);
  };
  const [ldCoverage, setldCoverage] = useState([]);
  const loadldCoverage = async () => {
    var inputldCoverage = document.getElementById("ldCoverage_Input").value;
    var sliceinputldCoverage = inputldCoverage.slice(0, -5);
    const inputldCoverage_Array = sliceinputldCoverage.split(" |:| ");
    setldCoverage(inputldCoverage_Array);
  };
  const [ldSponsor, setldSponsor] = useState([]);
  const loadldSponsor = async () => {
    var inputldSponsor = document.getElementById("ldSponsor_Input").value;
    var sliceinputldSponsor = inputldSponsor.slice(0, -5);
    const inputldSponsor_Array = sliceinputldSponsor.split(" |:| ");
    setldSponsor(inputldSponsor_Array);
  };

  useEffect(() => {
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

    loadCseBoard();
    loadCseRating();
    loadCseDateExam();
    loadCsePlaceExam();
    loadCseLicense();
    loadCseDateVal();

    loadweFrom();
    loadweTo();
    loadwePosition();
    loadweDepartment();
    loadweMonthly();
    loadweSalary();
    loadweAppoint();
    loadweGov();

    loadldTitle();
    loadldFrom();
    loadldTo();
    loadldHours();
    loadldType();
    loadldCoverage();
    loadldSponsor();
  }, []);

  function validatorPDS5() {
    document.getElementsByClassName("pds_validator")[0].style.display = "block";
    var list_of_errors = "";

    //CSE---------------------------------------------
    const titleLD = document.getElementsByName("titleLD[]");
    const titleLD1 = Array.from(titleLD).filter((input) => input.value !== "");
    titleLD1.length != titleLD.length
      ? (list_of_errors +=
          "- Title of Learning and Development Interventions/Training Programs cannot be blank. <br/>")
      : (list_of_errors += "");

    const dateFromLD = document.getElementsByName("dateFromLD[]");
    const dateToLD = document.getElementsByName("dateToLD[]");
    for (var z = 0; z < dateFromLD.length; z++) {
      if (
        dateFromLD[z].value > dateToLD[z].value &&
        dateToLD[z].value !== "" &&
        dateToLD[z].value !== ""
      ) {
        list_of_errors +=
          "- Entry(" +
          (z + 1) +
          ") Date From and To are invalid range (Secondary). <br/>";
      } else {
        list_of_errors += "";
      }
    }

    const hoursLD = document.getElementsByName("hoursLD[]");
    //const hoursLD1 = Array.from(hoursLD).filter( input => input.value !== "");
    //hoursLD1.length != hoursLD.length ? list_of_errors += "- Number of hours cannot be blank. <br/>" : list_of_errors += ""

    const typeLD = document.getElementsByName("typeLD[]");
    const typeLD1 = Array.from(typeLD).filter((input) => input.value !== "");
    typeLD1.length != typeLD.length
      ? (list_of_errors +=
          "- Type of LD (Managerial/ Supervisory/ Technical/ etc) cannot be blank. <br/>")
      : (list_of_errors += "");

    const sponsoredLD = document.getElementsByName("sponsoredLD[]");
    const sponsoredLD1 = Array.from(sponsoredLD).filter(
      (input) => input.value !== ""
    );
    sponsoredLD1.length != sponsoredLD.length
      ? (list_of_errors += "- Conducted/ Sponsored By cannot be blank. <br/>")
      : (list_of_errors += "");

    const coverageLD = document.getElementsByName("coverageLD[]");
    const coverageLD1 = Array.from(coverageLD).filter(
      (input) => input.value !== ""
    );
    coverageLD1.length != coverageLD.length
      ? (list_of_errors += "- Coverage cannot be blank. <br/>")
      : (list_of_errors += "");

    const categoryLD = document.getElementsByName("categoryLD[]");
    const categoryLD1 = Array.from(categoryLD).filter(
      (input) => input.value !== ""
    );
    categoryLD1.length != categoryLD.length
      ? (list_of_errors += "- Category cannot be blank. <br/>")
      : (list_of_errors += "");
    //------------------------------------------------------------------------

    document.getElementById("list_of_errors").innerHTML = list_of_errors;
    if (list_of_errors.length !== 0) {
      setTimeout(() => {
        var objDiv = document.getElementsByClassName("form_container")[0];
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 50);
    }

    if (list_of_errors.length === 0) {
      document.getElementsByClassName("pds_validator")[0].style.display =
        "none";
      document.getElementsByClassName("form_container")[0].scrollTop = 0;

      document.getElementsByClassName("step5_content")[0].style.display =
        "none";
      document.getElementsByClassName("back_stepper5")[0].style.display =
        "none";
      document.getElementsByClassName("next_stepper5")[0].style.display =
        "none";

      document.getElementsByClassName(
        "stepper5"
      )[0].style.borderBottomRightRadius = "0px";
      document.getElementsByClassName(
        "stepper5"
      )[0].style.borderTopRightRadius = "0px";

      document.getElementsByClassName("back_stepper6")[0].style.display =
        "block";
      document.getElementsByClassName("next_stepper6")[0].style.display =
        "block";
      document.getElementsByClassName("preview_pds")[0].style.display = "block";

      //VIEWING IN PDF FORMAT
      document.getElementById("preview_fname").textContent = document
        .getElementById("fname_pds")
        .value.toUpperCase();
      document.getElementById("preview_mname").textContent = document
        .getElementById("mname_pds")
        .value.toUpperCase();
      document.getElementById("preview_lname").textContent = document
        .getElementById("lname_pds")
        .value.toUpperCase();
      document.getElementById("preview_extension").textContent = document
        .getElementById("nameextension_pds")
        .value.toUpperCase();
      document.getElementById("preview_bday").textContent =
        document.getElementById("bdate_input").value;
      document.getElementById("preview_age").textContent =
        document.getElementById("age_input").textContent + " YEARS OLD";
      document.getElementById("preview_pob").textContent =
        document.getElementById("cob_pds").value.toUpperCase() +
        " , " +
        document.getElementById("cityOfBirth_pds").value.toUpperCase();
      document.getElementById("preview_gender").textContent = document
        .getElementById("gender_pds")
        .value.toUpperCase();
      document.getElementById("preview_civil").textContent = document
        .getElementById("civil_pds")
        .value.toUpperCase();
      document.getElementById("preview_height").textContent =
        document.getElementById("height_pds").value.toUpperCase() + " CM";
      document.getElementById("preview_weight").textContent =
        document.getElementById("weight_pds").value.toUpperCase() + " KG";
      document.getElementById("preview_blood").textContent = document
        .getElementById("blood_pds")
        .value.toUpperCase();
      document.getElementById("preview_gsis").textContent = document
        .getElementById("gsis_pds")
        .value.toUpperCase();
      document.getElementById("preview_pagibig").textContent = document
        .getElementById("pagibig_pds")
        .value.toUpperCase();
      document.getElementById("preview_philhealth").textContent = document
        .getElementById("philhealth_pds")
        .value.toUpperCase();
      document.getElementById("preview_sss").textContent = document
        .getElementById("sss_pds")
        .value.toUpperCase();
      document.getElementById("preview_tin").textContent = document
        .getElementById("tin_pds")
        .value.toUpperCase();
      document.getElementById("preview_empNo").textContent = document
        .getElementById("employee_pds")
        .value.toUpperCase();
      document.getElementById("preview_citizenship").textContent = document
        .getElementById("citizenship_pds")
        .value.toUpperCase();
      document.getElementById("preview_email").textContent =
        document.getElementById("email_pds").value;
      document.getElementById("preview_alEmail").textContent =
        document.getElementById("al_email_pds").value;

      document.getElementById("preview_house").textContent = document
        .getElementById("add_handler1")
        .value.toUpperCase();
      document.getElementById("preview_street").textContent = document
        .getElementById("add_handler2")
        .value.toUpperCase();
      document.getElementById("preview_subdi").textContent = document
        .getElementById("add_handler3")
        .value.toUpperCase();
      document.getElementById("preview_barangay").textContent = document
        .getElementById("add_handler7")
        .value.toUpperCase();
      document.getElementById("preview_city").textContent = document
        .getElementById("add_handler6")
        .value.toUpperCase();
      document.getElementById("preview_province").textContent = document
        .getElementById("add_handler5")
        .value.toUpperCase();
      document.getElementById("preview_zip").textContent = document
        .getElementById("add_handler8")
        .value.toUpperCase();

      document.getElementById("preview_house1").textContent = document
        .getElementById("add_handler9")
        .value.toUpperCase();
      document.getElementById("preview_street1").textContent = document
        .getElementById("add_handler10")
        .value.toUpperCase();
      document.getElementById("preview_subdi1").textContent = document
        .getElementById("add_handler11")
        .value.toUpperCase();
      document.getElementById("preview_barangay1").textContent = document
        .getElementById("add_handler15")
        .value.toUpperCase();
      document.getElementById("preview_city1").textContent = document
        .getElementById("add_handler14")
        .value.toUpperCase();
      document.getElementById("preview_province1").textContent = document
        .getElementById("add_handler13")
        .value.toUpperCase();
      document.getElementById("preview_zip1").textContent = document
        .getElementById("add_handler16")
        .value.toUpperCase();

      document.getElementById("preview_mobile").textContent =
        document.getElementById("input_phone").value;
      document.getElementById("preview_tele").textContent =
        document.getElementById("tele_pds").value;

      //Educational Background
      document.getElementById("elemName_Input").value = document
        .getElementById("nameELEM_handler")
        .value.toUpperCase();
      document.getElementById("elemDateFrom_Input").value =
        document.getElementById("dateFromELEM_handler").value;
      document.getElementById("elemDateTo_Input").value =
        document.getElementById("dateToELEM_handler").value;
      document.getElementById("elemUnit_Input").value = document
        .getElementById("unitsELEM_handler")
        .value.toUpperCase();
      document.getElementById("elemYear_Input").value = document
        .getElementById("yearGradELEM_handler")
        .value.toUpperCase();
      document.getElementById("elemAward_Input").value = document
        .getElementById("awardELEM_handler")
        .value.toUpperCase();

      document.getElementById("secName_Input").value = document
        .getElementById("nameSecond_handler")
        .value.toUpperCase();
      document.getElementById("secAttain_Input").value = document
        .getElementById("attainSecond_handler")
        .value.toUpperCase();
      document.getElementById("secDateFrom_Input").value =
        document.getElementById("dateFromSecond_handler").value;
      document.getElementById("secDateTo_Input").value =
        document.getElementById("dateToSecond_handler").value;
      document.getElementById("secUnit_Input").value = document
        .getElementById("unitsSecond_handler")
        .value.toUpperCase();
      document.getElementById("secYear_Input").value = document
        .getElementById("yearGradSecond_handler")
        .value.toUpperCase();
      document.getElementById("secAward_Input").value = document
        .getElementById("awardSecond_handler")
        .value.toUpperCase();

      document.getElementById("vocName_Input").value = document
        .getElementById("nameVocational_handler")
        .value.toUpperCase();
      document.getElementById("vocAttain_Input").value = document
        .getElementById("attainVocational_handler")
        .value.toUpperCase();
      document.getElementById("vocDateFrom_Input").value =
        document.getElementById("dateFromVocational_handler").value;
      document.getElementById("vocDateTo_Input").value =
        document.getElementById("dateToVocational_handler").value;
      document.getElementById("vocUnit_Input").value = document
        .getElementById("unitsVocational_handler")
        .value.toUpperCase();
      document.getElementById("vocYear_Input").value = document
        .getElementById("yearGradVocational_handler")
        .value.toUpperCase();
      document.getElementById("vocAward_Input").value = document
        .getElementById("awardVocational_handler")
        .value.toUpperCase();

      document.getElementById("colName_Input").value = document
        .getElementById("nameCollege_handler")
        .value.toUpperCase();
      document.getElementById("colAttain_Input").value = document
        .getElementById("attainCollege_handler")
        .value.toUpperCase();
      document.getElementById("colDateFrom_Input").value =
        document.getElementById("dateFromCollege_handler").value;
      document.getElementById("colDateTo_Input").value =
        document.getElementById("dateToCollege_handler").value;
      document.getElementById("colUnit_Input").value = document
        .getElementById("unitsCollege_handler")
        .value.toUpperCase();
      document.getElementById("colYear_Input").value = document
        .getElementById("yearGradCollege_handler")
        .value.toUpperCase();
      document.getElementById("colAward_Input").value = document
        .getElementById("awardCollege_handler")
        .value.toUpperCase();

      document.getElementById("gradName_Input").value = document
        .getElementById("nameGraduate_handler")
        .value.toUpperCase();
      document.getElementById("gradAttain_Input").value = document
        .getElementById("attainGraduate_handler")
        .value.toUpperCase();
      document.getElementById("gradDateFrom_Input").value =
        document.getElementById("dateFromGraduate_handler").value;
      document.getElementById("gradDateTo_Input").value =
        document.getElementById("dateToGraduate_handler").value;
      document.getElementById("gradUnit_Input").value = document
        .getElementById("unitsGraduate_handler")
        .value.toUpperCase();
      document.getElementById("gradYear_Input").value = document
        .getElementById("yearGradGraduate_handler")
        .value.toUpperCase();
      document.getElementById("gradAward_Input").value = document
        .getElementById("awardGraduate_handler")
        .value.toUpperCase();

      //CSE
      document.getElementById("cseBoard_Input").value = document
        .getElementById("CSE_board_handler")
        .value.toUpperCase();
      document.getElementById("cseRating_Input").value = document
        .getElementById("CSE_rating_handler")
        .value.toUpperCase();
      document.getElementById("cseDateExam_Input").value = document
        .getElementById("CSE_dateExam_handler")
        .value.toUpperCase();
      document.getElementById("csePlaceExam_Input").value = document
        .getElementById("CSE_placeExam_handler")
        .value.toUpperCase();
      document.getElementById("cseLicense_Input").value = document
        .getElementById("CSE_licenseNo_handler")
        .value.toUpperCase();
      document.getElementById("cseDateVal_Input").value = document
        .getElementById("CSE_dateValidity_handler")
        .value.toUpperCase();

      //WE
      document.getElementById("weFrom_Input").value = document
        .getElementById("WE_dateFrom_handler")
        .value.toUpperCase();
      document.getElementById("weTo_Input").value = document
        .getElementById("WE_dateTo_handler")
        .value.toUpperCase();
      document.getElementById("wePosition_Input").value = document
        .getElementById("WE_position_handler")
        .value.toUpperCase();
      document.getElementById("weDepartment_Input").value = document
        .getElementById("WE_dept_handler")
        .value.toUpperCase();
      document.getElementById("weMonthly_Input").value = document
        .getElementById("WE_monthly_handler")
        .value.toUpperCase();
      document.getElementById("weSalary_Input").value = document
        .getElementById("WE_salary_handler")
        .value.toUpperCase();
      document.getElementById("weAppoint_Input").value = document
        .getElementById("WE_appoint_handler")
        .value.toUpperCase();
      document.getElementById("weGov_Input").value = document
        .getElementById("WE_govt_handler")
        .value.toUpperCase();

      //LD
      document.getElementById("ldTitle_Input").value = document
        .getElementById("LD_title_handler")
        .value.toUpperCase();
      document.getElementById("ldFrom_Input").value = document
        .getElementById("LD_dateFrom_handler")
        .value.toUpperCase();
      document.getElementById("ldTo_Input").value = document
        .getElementById("LD_dateTo_handler")
        .value.toUpperCase();
      document.getElementById("ldHours_Input").value = document
        .getElementById("LD_hours_handler")
        .value.toUpperCase();
      document.getElementById("ldType_Input").value = document
        .getElementById("LD_type_handler")
        .value.toUpperCase();
      document.getElementById("ldCoverage_Input").value = document
        .getElementById("LD_coverage_handler")
        .value.toUpperCase();
      document.getElementById("ldSponsor_Input").value = document
        .getElementById("LD_sponsored_handler")
        .value.toUpperCase();

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

      loadCseBoard();
      loadCseRating();
      loadCseDateExam();
      loadCsePlaceExam();
      loadCseLicense();
      loadCseDateVal();

      loadweFrom();
      loadweTo();
      loadwePosition();
      loadweDepartment();
      loadweMonthly();
      loadweSalary();
      loadweAppoint();
      loadweGov();

      loadldTitle();
      loadldFrom();
      loadldTo();
      loadldHours();
      loadldType();
      loadldCoverage();
      loadldSponsor();
    }
  }

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

  //LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS ATTENDED
  let ld_ctr = -1;
  const ldContent = ldTitle.map(() => {
    ld_ctr++;
    return (
      <div className="LD_content" key="{key4}">
        <div className="LD_box" style={{ width: "20%" }}>
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
  });

  //-------------------------------------------------
  //If wala laman yung local storage di makaka access sa loob
  const [auth, setAuth] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    var auth = localStorage.getItem("email");
    if (auth === null) {
      navigate(`/`);
    }
    setAuth(auth);
  }, []);

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

  const mq = window.matchMedia("(max-width: 850px)");
  //Skeleton show
  setTimeout(function () {
    if (mq.matches) {
      var elements11 = document.getElementsByClassName("left_nav_minimize_img");
      for (var i = 0, len = elements11.length; i < len; i++) {
        elements11[i].style.display = "block";
      }
    } else {
      var elements11 = document.getElementsByClassName("skeleton_done1");
      for (var i = 0, len = elements11.length; i < len; i++) {
        elements11[i].style.display = "block";
      }
      var elements12 = document.getElementsByClassName("skeleton_show1");
      for (var i = 0, len = elements12.length; i < len; i++) {
        elements12[i].style.display = "none";
      }
    }
  }, 1200);

  return (
    <div className="dashboard_container" style={{ backgroundColor: "#FFAA28" }}>
      <div className="navbar_account_container">
        <div>
          <div className="navbar_logo_container nav_part1">
            <img src={CICT_Logo} className="cict_logo" />
            <div className="cict_text left_nav_minimize">
              <span>CICT</span>
            </div>
          </div>
          <div className="nav_line nav_part1"></div>

          <div className="nav_part2">
            <div id="link_dashboard" className="link_disabler">
              <Link
                to="/FacultyDashboard"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <div className="navlink_container" id="dashboard_link">
                  <Skeleton
                    animation="wave"
                    className="skeleton_show1"
                    height={"22px"}
                    width={"22px"}
                    sx={{ margin: "3vh 1rem" }}
                  />
                  <LightTooltip title="Dashboard">
                    <img
                      src={Dashboard_icon}
                      className="left_nav_minimize_img skeleton_done1"
                    />
                  </LightTooltip>
                </div>
              </Link>
            </div>

            <div id="link_profile" className="link_disabler">
              <Link
                to="/PersonalInformation"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <div className="navlink_container" id="pds_link">
                  <Skeleton
                    animation="wave"
                    className="skeleton_show1"
                    height={"22px"}
                    width={"22px"}
                    sx={{ margin: "3vh 1rem" }}
                  />
                  <LightTooltip title="My Profile">
                    <img
                      src={Profile_icon}
                      className="left_nav_minimize_img skeleton_done1"
                    />
                  </LightTooltip>
                </div>
              </Link>
            </div>

            <div className="link_disabler">
              <Link to="/Certificates" style={{ textDecoration: "none", width: "100%" }}>
                <div
                  className="navlink_container nav_part3"
                  id="certificate_link"
                >
                  <Skeleton
                    animation="wave"
                    className="skeleton_show1"
                    height={"22px"}
                    width={"22px"}
                    sx={{ margin: "3vh 1rem" }}
                  />
                  <LightTooltip title="Certificates">
                    <img
                      src={Certificate_icon}
                      className="left_nav_minimize_img skeleton_done1"
                    />
                  </LightTooltip>
                </div>
              </Link>
            </div>

            <div className="link_disabler">
              <Link to="" style={{ textDecoration: "none", width: "100%" }}>
                <div className="navlink_container" id="profile_link">
                  <Skeleton
                    animation="wave"
                    className="skeleton_show1"
                    height={"22px"}
                    width={"22px"}
                    sx={{ margin: "3vh 1rem" }}
                  />
                  <LightTooltip title="Account Setting">
                    <img
                      src={account_setting}
                      className="left_nav_minimize_img skeleton_done1"
                    />
                  </LightTooltip>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logout_container navlink_container">
            <Skeleton
              animation="wave"
              className="skeleton_show1"
              height={"22px"}
              width={"22px"}
              sx={{ margin: "3vh 1rem" }}
            />
            <LightTooltip title="Sign Out">
              <img
                src={Logout_icon}
                className="left_nav_minimize_img skeleton_done1"
              />
            </LightTooltip>
          </div>
        </Link>

        {/* Nav drawer fo smaller device */}
        <div
          className="drawer_btn"
          onClick={OpenRightNavbar}
          id="leftnav_drawerBTN"
        >
          <img src={Menu_icon} />
        </div>
      </div>

      <form onSubmit={submitPDSTaskForm}>
        <div className="main_content" style={{ backgroundColor: "#EFF4F9" }}>
          <div className="stepper_container">
            <div className="stepper stepper1">
              <div className="circle circle1">
                <span className="circle_text1">1</span>
              </div>
              <p className="stepper_text1">Personal Information</p>
            </div>
            <div className="stepper stepper2">
              <div className="circle circle2">
                <span className="circle_text2">2</span>
              </div>
              <p className="stepper_text2">Educational Background</p>
            </div>
            <div className="stepper stepper3">
              <div className="circle circle3">
                <span className="circle_text3">3</span>
              </div>
              <p className="stepper_text3">Civil Eligibility</p>
            </div>
            <div className="stepper stepper4">
              <div className="circle circle4">
                <span className="circle_text4">4</span>
              </div>
              <p className="stepper_text4">Work Experience</p>
            </div>
            <div className="stepper stepper5">
              <div className="circle circle5">
                <span className="circle_text5">5</span>
              </div>
              <p className="stepper_text5">Learning &#38; Development</p>
            </div>
          </div>

          <div className="form_container">
            <div
              className="step_content consent_form"
              style={{ display: "block" }}
            >
              <div className="info_div">
                <img src={form_info} />
                Consent Form
              </div>
              <p className="p_consent">
                We at the Bulacan State University (Main Campus) and the College
                of Information and Communications technology are committed to
                valuing the privacy and security of personal data entrusted by
                its employees.
              </p>
              <br />
              <p className="p_consent">
                The personal information being collected includes your sensitive
                personal information, educational background, and other personal
                records. Bulacan State University will only process this
                information to create a personal data sheet (PDS) for
                evaluation, management and automated profiling.
              </p>
              <br />
              <p className="p_consent">
                Your approval of this consent form does not prohibit the
                existence of other conditions for permissible personal data
                processing, and it does not renounce any of your rights under
                the Data Privacy Act of 2012 and other applicable laws. We aim
                to abide by the Data Privacy Act of 2012 (DPA) and to fully
                collaborate with the National Privacy Commission (NPC).
              </p>
              <br />
              <p className="p_consent">
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the
                security of any personal information we process. We regard your
                privacy with utmost importance.{" "}
              </p>
              <br />
              <p className="p_consent">
                By accepting, you acknowledge that you have read this form,
                understood its contents, and consent to the processing of your
                data for the purposes indicated in this Consent Form. If not,
                your data will not be used by Bulacan State University as long
                as your authorization to deny access has not been reversed.
              </p>
              <br />
              <p className="p_consent">
                By clicking next, I authorize Bulacan State University to
                collect and use my personal information.
              </p>
            </div>

            <div className="step_content step1_content">
              <p className="step_text">Step 1</p>
              <p className="step_desc">Enter your Personal Information</p>

              <div className="info_div">
                <img src={basic_info} />
                Basic Information
              </div>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  label="First Name"
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Fields with * are required"
                  id="fname_pds"
                  required
                  inputProps={{ style: { textTransform: "capitalize" } }}
                />
                <TextField
                  label="Middle Name"
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Type N/A if Not Applicable"
                  inputProps={{ style: { textTransform: "capitalize" } }}
                  id="mname_pds"
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Fields with * are required"
                  id="lname_pds"
                  required
                  inputProps={{ style: { textTransform: "capitalize" } }}
                />
                <TextField
                  label="Name Extension (Optional)"
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="(ex. Jr., Sr., III)  Type N/A if Not Applicable"
                  inputProps={{ style: { textTransform: "capitalize" } }}
                  id="nameextension_pds"
                />
                <TextField
                  onChange={getAge}
                  required
                  id="bdate_input"
                  className="pds_input"
                  label="Birthday"
                  color="warning"
                  type="date"
                  defaultValue="2000-01-01"
                  inputProps={{ min: "1950-01-01", max: maxDateInput }}
                  InputLabelProps={{ shrink: true }}
                />

                <div className="pds_inputAGE">
                  <p>
                    Age : <span id="age_input">0</span> years old
                  </p>
                </div>

                <Autocomplete
                  className="pds_input"
                  id="cob_pds"
                  sx={{ width: "350px" }}
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      {option.label} ({option.code})
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      placeholder="Fields with * are required"
                      required
                      {...params}
                      style={{ width: "100%" }}
                      color="warning"
                      label="Country of Birth"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />

                <TextField
                  label="Place of Birth"
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="(ex. Bulacan) Fields with * are required"
                  id="cityOfBirth_pds"
                  required
                  inputProps={{ style: { textTransform: "capitalize" } }}
                />

                <Autocomplete
                  id="gender_pds"
                  options={gender}
                  className="pds_input"
                  sx={{ width: "350px" }}
                  renderInput={(params) => (
                    <TextField
                      color="warning"
                      placeholder="Fields with * are required"
                      required
                      {...params}
                      label="Gender"
                    />
                  )}
                />

                <Autocomplete
                  id="civil_pds"
                  options={civil_status}
                  className="pds_input"
                  sx={{ width: "350px" }}
                  renderInput={(params) => (
                    <TextField
                      color="warning"
                      placeholder="Fields with * are required"
                      required
                      {...params}
                      label="Civil Status"
                    />
                  )}
                />

                <TextField
                  label="Height"
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="(cm) Fields with * are required"
                  id="height_pds"
                  required
                  type="number"
                />
                <TextField
                  label="Weight"
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="(kg) Fields with * are required"
                  id="weight_pds"
                  required
                  type="number"
                />
                <TextField
                  label="Blood Type"
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Fields with * are required"
                  id="blood_pds"
                  required
                />
                <TextField
                  label="GSIS ID No."
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Type N/A if Not Applicable"
                  id="gsis_pds"
                />
                <TextField
                  label="PAG-IBIG ID No."
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Type N/A if Not Applicable"
                  id="pagibig_pds"
                />
                <TextField
                  label="PHILHEALTH No."
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Type N/A if Not Applicable"
                  id="philhealth_pds"
                />
                <TextField
                  label="SSS No."
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Type N/A if Not Applicable"
                  id="sss_pds"
                />
                <TextField
                  label="TIN No."
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Type N/A if Not Applicable"
                  id="tin_pds"
                />
                <TextField
                  label="EMPLOYEE No."
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Fields with * are required"
                  id="employee_pds"
                  required
                  type="number"
                />
                <Autocomplete
                  id="citizenship_pds"
                  options={nationality}
                  className="pds_input"
                  sx={{ width: "350px" }}
                  renderInput={(params) => (
                    <TextField
                      color="warning"
                      placeholder="Fields with * are required"
                      required
                      {...params}
                      label="Citizenship"
                    />
                  )}
                />
                <TextField
                  label="Email Address *"
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Fields with * are required"
                  id="email_pds"
                  value={localStorage.getItem("email")}
                  disabled
                />
                <TextField
                  label="Alternate Email Address"
                  variant="outlined"
                  color="warning"
                  className="pds_input"
                  placeholder="Type N/A if Not Applicable"
                  id="al_email_pds"
                />
              </Grid>

              <div className="info_div">
                <img src={address_info} />
                Resident Address
              </div>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <div className="address_input">
                  <label>House / Block / Lot No. :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add_inp1"
                    onKeyUp={sameAddressFunction}
                    id="House_pds"
                  />
                </div>

                <div className="address_input">
                  <label>Street :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add_inp2"
                    onKeyUp={sameAddressFunction}
                    id="street_pds"
                  />
                </div>

                <div className="address_input">
                  <label>Subdivision / Village :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add_inp3"
                    onKeyUp={sameAddressFunction}
                    id="subdi_pds"
                  />
                </div>

                <div className="address_input">
                  <label>Region (Required) :</label>
                  <select
                    onChange={province}
                    onSelect={region}
                    className="add_inp4"
                  >
                    <option disabled>Select Region</option>
                    {regionData &&
                      regionData.length > 0 &&
                      regionData.map((item) => (
                        <option key={item.region_code} value={item.region_code}>
                          {item.region_name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="address_input">
                  <label>Province (Required) :</label>
                  <select
                    onChange={city}
                    className="add_inp5"
                    id="province1_pds"
                  >
                    <option value="" hidden>
                      Select a Region first
                    </option>
                    {provinceData &&
                      provinceData.length > 0 &&
                      provinceData.map((item) => (
                        <option
                          key={item.province_code}
                          value={item.province_code}
                        >
                          {item.province_name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="address_input">
                  <label>City / Municipality (Required) :</label>
                  <select
                    onChange={barangay}
                    className="add_inp6"
                    id="city1_pds"
                  >
                    <option value="" hidden>
                      Select a Province first
                    </option>
                    {cityData &&
                      cityData.length > 0 &&
                      cityData.map((item) => (
                        <option key={item.city_code} value={item.city_code}>
                          {item.city_name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="address_input">
                  <label>Barangay (Required) :</label>
                  <select
                    onChange={brgy}
                    className="add_inp7"
                    id="barangay1_pds"
                  >
                    <option value="" hidden>
                      Select a City first
                    </option>
                    {barangayData &&
                      barangayData.length > 0 &&
                      barangayData.map((item) => (
                        <option key={item.brgy_code} value={item.brgy_code}>
                          {item.brgy_name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="address_input">
                  <label>ZIP Code (Required) :</label>
                  <input
                    type="number"
                    placeholder="ex. 3003"
                    className="add_inp8"
                    onKeyUp={sameAddressFunction}
                    id="zip1_pds"
                  />
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Checkbox
                    onClick={sameAddressFunction}
                    {...label}
                    id="address_checkbox"
                    sx={{
                      color: orange[400],
                      "&.Mui-checked": {
                        color: orange[600],
                      },
                      padding: 0,
                      margin: 0,
                      marginRight: "7px",
                    }}
                  />
                  Resident Address is the same as Permanent Address
                </div>
              </Grid>

              <div className="info_div">
                <img src={address_info} />
                Permanent Address
              </div>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {/*Pag nahindi naka check yung checkbox */}
                <div className="address_input address_notcheck">
                  <label>House / Block / Lot No. :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add1_inp1"
                    onKeyUp={sameAddressFunction}
                    id="House1_pds"
                  />
                </div>
                <div className="address_input address_notcheck">
                  <label>Street :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add2_inp2"
                    onKeyUp={sameAddressFunction}
                    id="street1_pds"
                  />
                </div>
                <div className="address_input address_notcheck">
                  <label>Subdivision / Village :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add3_inp3"
                    onKeyUp={sameAddressFunction}
                    id="subdi1_pds"
                  />
                </div>
                <div className="address_input address_notcheck">
                  <label>Region (Required) :</label>
                  <select
                    onChange={province1}
                    onSelect={region1}
                    className="add4_inp4"
                  >
                    <option disabled>Select Region</option>
                    {regionData1 &&
                      regionData1.length > 0 &&
                      regionData1.map((item) => (
                        <option key={item.region_code} value={item.region_code}>
                          {item.region_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="address_input address_notcheck">
                  <label>Province (Required) :</label>
                  <select
                    onChange={city1}
                    className="add5_inp5"
                    id="province2_pds"
                  >
                    <option value="" hidden>
                      Select a Region first
                    </option>
                    {provinceData1 &&
                      provinceData1.length > 0 &&
                      provinceData1.map((item) => (
                        <option
                          key={item.province_code}
                          value={item.province_code}
                        >
                          {item.province_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="address_input address_notcheck">
                  <label>City (Required) :</label>
                  <select
                    onChange={barangay1}
                    className="add6_inp6"
                    id="city2_pds"
                  >
                    <option value="" hidden>
                      Select a Province first
                    </option>
                    {cityData1 &&
                      cityData1.length > 0 &&
                      cityData1.map((item) => (
                        <option key={item.city_code} value={item.city_code}>
                          {item.city_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="address_input address_notcheck">
                  <label>Barangay (Required) :</label>
                  <select
                    onChange={brgy1}
                    className="add7_inp7"
                    id="barangay2_pds"
                  >
                    <option value="" hidden>
                      Select a City first
                    </option>
                    {barangayData1 &&
                      barangayData1.length > 0 &&
                      barangayData1.map((item) => (
                        <option key={item.brgy_code} value={item.brgy_code}>
                          {item.brgy_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="address_input address_notcheck">
                  <label>ZIP Code (Required) :</label>
                  <input
                    type="number"
                    placeholder="ex. 3003"
                    className="add8_inp8"
                    onKeyUp={sameAddressFunction}
                    id="zip2_pds"
                  />
                </div>

                {/*Pag naka check yung checkbox */}
                <div className="address_input address_check">
                  <label>House / Block / Lot No. :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add1_inp1"
                    readOnly
                  />
                </div>
                <div className="address_input address_check">
                  <label>Street :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add2_inp2"
                    readOnly
                  />
                </div>
                <div className="address_input address_check">
                  <label>Subdivision / Village :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add3_inp3"
                    readOnly
                  />
                </div>
                <div className="address_input address_check">
                  <label>Region (Required) :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add4_inp4"
                    readOnly
                  />
                </div>
                <div className="address_input address_check">
                  <label>Province (Required) :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add5_inp5"
                    readOnly
                  />
                </div>
                <div className="address_input address_check">
                  <label>City (Required) :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add6_inp6"
                    readOnly
                  />
                </div>
                <div className="address_input address_check">
                  <label>Barangay (Required) :</label>
                  <input
                    type="text"
                    placeholder="Type N/A if Not Applicable"
                    className="add7_inp7"
                    readOnly
                  />
                </div>
                <div className="address_input address_check">
                  <label>ZIP Code (Required) :</label>
                  <input
                    type="number"
                    placeholder="ex. 3003"
                    className="add8_inp8"
                    readOnly
                  />
                </div>

                {/*Address input handler*/}
                <input type="hidden" id="add_handler1" />
                <input type="hidden" id="add_handler2" />
                <input type="hidden" id="add_handler3" />
                <input type="hidden" id="add_handler4" />
                <input type="hidden" id="add_handler5" />
                <input type="hidden" id="add_handler6" />
                <input type="hidden" id="add_handler7" />
                <input type="hidden" id="add_handler8" />
                <input type="hidden" id="add_handler9" />
                <input type="hidden" id="add_handler10" />
                <input type="hidden" id="add_handler11" />
                <input type="hidden" id="add_handler12" />
                <input type="hidden" id="add_handler13" />
                <input type="hidden" id="add_handler14" />
                <input type="hidden" id="add_handler15" />
                <input type="hidden" id="add_handler16" />
              </Grid>

              <div className="info_div">
                <img src={conctact_info} />
                Contact Number(s)
              </div>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 10px",
                  }}
                  className="pds_input"
                >
                  <TextField
                    label="Mobile No."
                    variant="outlined"
                    color="warning"
                    placeholder="(093961XXXX6) Fields with * are required"
                    type="number"
                    required
                    style={{ margin: "0", width: "100%" }}
                    id="input_phone"
                    onKeyUp={() => {
                      phonenumber();
                      sameAddressFunction();
                    }}
                  />
                  <span id="contact_validator">
                    Mobile No. is an invalid format.
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "0 10px",
                  }}
                  className="pds_input"
                >
                  <TextField
                    label="Telephone No."
                    variant="outlined"
                    color="warning"
                    style={{ margin: "0", width: "100%" }}
                    placeholder="Type N/A if Not Applicable"
                    id="tele_pds"
                  />
                  <span style={{ fontSize: ".9rem", visibility: "hidden" }}>
                    Mobile No. is an invalid format.
                  </span>
                </div>
              </Grid>
            </div>

            <div className="step_content step2_content">
              <p className="step_text">Step 2</p>
              <p className="step_desc">Enter your Educational Background</p>

              <div className="info_div">
                <img src={education_info} />
                Elementary
              </div>

              {elemEntry.map((index) => (
                <div id="for_append_elem" key="{}">
                  <TextField
                    label="Name of Elementary School"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Fields with * are required"
                    required
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="elem_namePDS[]"
                  />

                  <TextField
                    label="Basic Education/Degree/Course"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    required
                    value="Elementary"
                    disabled
                  />
                  <TextField
                    required
                    onChange={getAllElementaryInput}
                    name="elem_dateFromPDS[]"
                    className="pds_inputEducSemi5"
                    label="Date Attended (From)"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    required
                    onChange={getAllElementaryInput}
                    name="elem_dateToPDS[]"
                    className="pds_inputEducSemi5"
                    label="Date Attended (To)"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    onChange={getAllElementaryInput}
                    name="elem_unitPDS[]"
                    className="pds_inputEducSemi5"
                    label="Highest Level / Units Earned (If not graduated)"
                    color="warning"
                    placeholder="Type N/A if Not Applicable"
                  />
                  <Autocomplete
                    options={listYear}
                    className="pds_inputEducSemi5"
                    renderInput={(params) => (
                      <TextField
                        color="warning"
                        placeholder="Choose N/A if Not Applicable"
                        {...params}
                        label="Year Graduate"
                        name="elem_yearGradPDS[]"
                      />
                    )}
                  />
                  <TextField
                    label="Scholarships/Academic Honors Received"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="elem_awardsPDS[]"
                  />
                  <div className="line_educ"></div>
                </div>
              ))}

              <input
                type="hidden"
                id="nameELEM_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input type="hidden" id="attainELEM_handler" value="Elementary" />
              <input type="hidden" id="dateFromELEM_handler" value=" |:| " />
              <input type="hidden" id="dateToELEM_handler" value=" |:| " />
              <input type="hidden" id="unitsELEM_handler" value=" |:| " />
              <input type="hidden" id="yearGradELEM_handler" value=" |:| " />
              <input
                type="hidden"
                id="awardELEM_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />

              <div className="entry_button">
                <button
                  type="button"
                  disabled={elemEntry.length === 1}
                  onClick={() => handleRemoveElemEntry(elemEntry.id)}
                >
                  Remove
                </button>
                <button type="button" onClick={handleAddElemEntry}>
                  Add another entry
                </button>
              </div>

              {/*---------------------------------------------------------------------------------- */}
              <div className="info_div">
                <img src={education_info} />
                Secondary
              </div>

              {secondaryEntry.map((index) => (
                <div id="for_append_elem" key="{}">
                  <TextField
                    label="Name of School"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Fields with * are required"
                    required
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="second_namePDS[]"
                  />
                  <Autocomplete
                    required
                    options={secondaryAttainment}
                    className="pds_inputEduc"
                    renderInput={(params) => (
                      <TextField
                        color="warning"
                        placeholder="Fields with * are required"
                        {...params}
                        label="Basic Education/Degree/Course"
                        name="second_attainmentPDS[]"
                        required
                      />
                    )}
                  />
                  <TextField
                    required
                    onChange={getAllElementaryInput}
                    name="second_dateFromPDS[]"
                    className="pds_inputEducSemi5"
                    label="Date Attended (From)"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    required
                    onChange={getAllElementaryInput}
                    name="second_dateToPDS[]"
                    className="pds_inputEducSemi5"
                    label="Date Attended (To)"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    onChange={getAllElementaryInput}
                    name="second_unitPDS[]"
                    className="pds_inputEducSemi5"
                    label="Highest Level / Units Earned (If not graduated)"
                    color="warning"
                    placeholder="Type N/A if Not Applicable"
                  />
                  <Autocomplete
                    options={listYear}
                    className="pds_inputEducSemi5"
                    renderInput={(params) => (
                      <TextField
                        color="warning"
                        placeholder="Choose N/A if Not Applicable"
                        {...params}
                        label="Year Graduate"
                        name="second_yearGradPDS[]"
                      />
                    )}
                  />
                  <TextField
                    label="Scholarships/Academic Honors Received"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="second_awardsPDS[]"
                  />
                  <div className="line_educ"></div>
                </div>
              ))}

              <input
                type="hidden"
                id="nameSecond_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input
                type="hidden"
                id="attainSecond_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input type="hidden" id="dateFromSecond_handler" value=" |:| " />
              <input type="hidden" id="dateToSecond_handler" value=" |:| " />
              <input type="hidden" id="unitsSecond_handler" value=" |:| " />
              <input type="hidden" id="yearGradSecond_handler" value=" |:| " />
              <input
                type="hidden"
                id="awardSecond_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />

              <div className="entry_button">
                <button
                  type="button"
                  disabled={secondaryEntry.length === 1}
                  onClick={() => handleRemoveSecondaryEntry(secondaryEntry.id)}
                >
                  Remove
                </button>
                <button type="button" onClick={handleAddSecondaryEntry}>
                  Add another entry
                </button>
              </div>

              {/*---------------------------------------------------------------------------------- */}
              <div className="info_div">
                <img src={education_info} />
                Vocational / Trade Course
              </div>

              {vocationalEntry.map((index) => (
                <div id="for_append_elem" key="{}">
                  <TextField
                    label="Name of School"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="vocational_namePDS[]"
                  />
                  <TextField
                    label="Basic Education/Degree/Course"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="vocational_attainmentPDS[]"
                  />

                  <TextField
                    onChange={getAllElementaryInput}
                    name="vocational_dateFromPDS[]"
                    className="pds_inputEducSemi5"
                    label="Date Attended (From) [Leave blank if N/A]"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    onChange={getAllElementaryInput}
                    name="vocational_dateToPDS[]"
                    className="pds_inputEducSemi5"
                    label="Date Attended (To) [Leave blank if N/A]"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    onChange={getAllElementaryInput}
                    name="vocational_unitPDS[]"
                    className="pds_inputEducSemi5"
                    label="Highest Level / Units Earned (If not graduated)"
                    color="warning"
                    placeholder="Type N/A if Not Applicable"
                  />
                  <Autocomplete
                    options={listYear}
                    onChange={getAllElementaryInput}
                    className="pds_inputEducSemi5"
                    renderInput={(params) => (
                      <TextField
                        color="warning"
                        placeholder="Choose N/A if Not Applicable"
                        {...params}
                        label="Year Graduate"
                        name="vocational_yearGradPDS[]"
                      />
                    )}
                  />
                  <TextField
                    label="Scholarships/Academic Honors Received"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="vocational_awardsPDS[]"
                  />
                  <div className="line_educ"></div>
                </div>
              ))}

              <input
                type="hidden"
                id="nameVocational_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input
                type="hidden"
                id="attainVocational_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input
                type="hidden"
                id="dateFromVocational_handler"
                value=" |:| "
              />
              <input
                type="hidden"
                id="dateToVocational_handler"
                value=" |:| "
              />
              <input type="hidden" id="unitsVocational_handler" value=" |:| " />
              <input
                type="hidden"
                id="yearGradVocational_handler"
                value=" |:| "
              />
              <input
                type="hidden"
                id="awardVocational_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />

              <div className="entry_button">
                <button
                  type="button"
                  disabled={vocationalEntry.length === 1}
                  onClick={() =>
                    handleRemoveVocationalEntry(vocationalEntry.id)
                  }
                >
                  Remove
                </button>
                <button type="button" onClick={handleAddVocationalEntry}>
                  Add another entry
                </button>
              </div>

              {/*---------------------------------------------------------------------------------- */}
              <div className="info_div">
                <img src={education_info} />
                College
              </div>

              {collegeEntry.map((index) => (
                <div id="for_append_elem" key="{}">
                  <TextField
                    label="Name of School"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Fields with * are required"
                    required
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="college_namePDS[]"
                  />
                  <TextField
                    label="Basic Education/Degree/Course"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Fields with * are required"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="college_attainmentPDS[]"
                    required
                  />
                  <TextField
                    required
                    onChange={getAllElementaryInput}
                    name="college_dateFromPDS[]"
                    className="pds_inputEducSemi5"
                    label="Date Attended (From)"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    onChange={getAllElementaryInput}
                    name="college_dateToPDS[]"
                    className="pds_inputEducSemi5"
                    label="Date Attended (To) [Leave blank if date is up to present]"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    onChange={getAllElementaryInput}
                    name="college_unitPDS[]"
                    className="pds_inputEducSemi5"
                    label="Highest Level / Units Earned (If not graduated)"
                    color="warning"
                    placeholder="Type N/A if Not Applicable"
                  />
                  <Autocomplete
                    options={listYear}
                    className="pds_inputEducSemi5"
                    renderInput={(params) => (
                      <TextField
                        color="warning"
                        placeholder="Choose N/A if Not Applicable"
                        {...params}
                        label="Year Graduate"
                        name="college_yearGradPDS[]"
                      />
                    )}
                  />
                  <TextField
                    label="Scholarships/Academic Honors Received"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="college_awardsPDS[]"
                  />
                  <div className="line_educ"></div>
                </div>
              ))}

              <input
                type="hidden"
                id="nameCollege_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input
                type="hidden"
                id="attainCollege_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input type="hidden" id="dateFromCollege_handler" value=" |:| " />
              <input type="hidden" id="dateToCollege_handler" value=" |:| " />
              <input type="hidden" id="unitsCollege_handler" value=" |:| " />
              <input type="hidden" id="yearGradCollege_handler" value=" |:| " />
              <input
                type="hidden"
                id="awardCollege_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />

              <div className="entry_button">
                <button
                  type="button"
                  disabled={collegeEntry.length === 1}
                  onClick={() => handleRemoveCollegeEntry(collegeEntry.id)}
                >
                  Remove
                </button>
                <button type="button" onClick={handleAddCollegeEntry}>
                  Add another entry
                </button>
              </div>

              {/*---------------------------------------------------------------------------------- */}
              <div className="info_div">
                <img src={education_info} />
                Graduate Studies
              </div>

              {graduateEntry.map((index) => (
                <div id="for_append_elem" key="{}">
                  <TextField
                    label="Name of School"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="graduate_namePDS[]"
                  />
                  <TextField
                    label="Basic Education/Degree/Course"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="graduate_attainmentPDS[]"
                  />

                  <TextField
                    onChange={getAllElementaryInput}
                    name="graduate_dateFromPDS[]"
                    className="pds_inputEducSemi5"
                    label="Date Attended (From) [Leave blank if N/A]"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    onChange={getAllElementaryInput}
                    name="graduate_dateToPDS[]"
                    className="pds_inputEducSemi5"
                    label="Date Attended (To) [Leave blank if N/A]"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    onChange={getAllElementaryInput}
                    name="graduate_unitPDS[]"
                    className="pds_inputEducSemi5"
                    label="Highest Level / Units Earned (If not graduated)"
                    color="warning"
                    placeholder="Type N/A if Not Applicable"
                  />
                  <Autocomplete
                    options={listYear}
                    onChange={getAllElementaryInput}
                    className="pds_inputEducSemi5"
                    renderInput={(params) => (
                      <TextField
                        color="warning"
                        placeholder="Choose N/A if Not Applicable"
                        {...params}
                        label="Year Graduate"
                        name="graduate_yearGradPDS[]"
                      />
                    )}
                  />
                  <TextField
                    label="Scholarships/Academic Honors Received"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    onChange={getAllElementaryInput}
                    name="graduate_awardsPDS[]"
                  />
                  <div className="line_educ"></div>
                </div>
              ))}

              <input
                type="hidden"
                id="nameGraduate_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input
                type="hidden"
                id="attainGraduate_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input
                type="hidden"
                id="dateFromGraduate_handler"
                value=" |:| "
              />
              <input type="hidden" id="dateToGraduate_handler" value=" |:| " />
              <input type="hidden" id="unitsGraduate_handler" value=" |:| " />
              <input
                type="hidden"
                id="yearGradGraduate_handler"
                value=" |:| "
              />
              <input
                type="hidden"
                id="awardGraduate_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />

              <div className="entry_button">
                <button
                  type="button"
                  disabled={graduateEntry.length === 1}
                  onClick={() => handleRemoveGraduateEntry(graduateEntry.id)}
                >
                  Remove
                </button>
                <button type="button" onClick={handleAddGraduateEntry}>
                  Add another entry
                </button>
              </div>
            </div>

            <div className="step_content step3_content">
              <p className="step_text">Step 3</p>
              <p className="step_desc">Enter your Civil Service Eligibility</p>

              <div className="info_div">
                <img src={service_info} />
                Civil Service Eligibility
              </div>

              {civilEntry.map((index) => (
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  key="{}"
                >
                  <TextField
                    label="Career Service/ RA 1080 (BOARD/ BAR) Under Special Laws/ CES/ CSEE Barangay Eligibility / Driver's License"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEducSemi"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    name="boardCSE[]"
                    onChange={getAllCSEinput}
                  />

                  <TextField
                    label="Rating (If applicable)"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEducSemi"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    name="ratingCSE[]"
                    onChange={getAllCSEinput}
                  />
                  <TextField
                    onChange={getAllCSEinput}
                    name="dateExamCSE[]"
                    className="pds_inputEducSemi"
                    label="Date of Examination / Conferment (Leave blank if N/A)"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    label="Place of Examination / Conferment"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    name="placeExamCSE[]"
                    onChange={getAllCSEinput}
                  />

                  <div className="civil_license">
                    <h3>License (If applicable) : </h3>
                    <TextField
                      label="Number"
                      variant="outlined"
                      color="warning"
                      className="pds_inputEducSemi1"
                      placeholder="Type N/A if Not Applicable"
                      inputProps={{ style: { textTransform: "capitalize" } }}
                      name="licenseCSE[]"
                      onChange={getAllCSEinput}
                    />
                    <TextField
                      onChange={getAllCSEinput}
                      name="dateValidityCSE[]"
                      className="pds_inputEducSemi1"
                      label="Date of Validity (Leave blank if N/A)"
                      color="warning"
                      type="date"
                      inputProps={{ min: "1950-01-01" }}
                      InputLabelProps={{ shrink: true }}
                    />
                  </div>

                  <div className="line_educ"></div>
                </Grid>
              ))}

              <input
                type="hidden"
                id="CSE_board_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input
                type="hidden"
                id="CSE_rating_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input type="hidden" id="CSE_dateExam_handler" value=" |:| " />
              <input
                type="hidden"
                id="CSE_placeExam_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input type="hidden" id="CSE_licenseNo_handler" value=" |:| " />
              <input
                type="hidden"
                id="CSE_dateValidity_handler"
                value=" |:| "
              />

              <div className="entry_button">
                <button
                  type="button"
                  disabled={civilEntry.length === 1}
                  onClick={() => handleRemoveCivilEntry(civilEntry.id)}
                >
                  Remove
                </button>
                <button type="button" onClick={handleAddCivilEntry}>
                  Add another entry
                </button>
              </div>
            </div>

            <div className="step_content step4_content">
              <p className="step_text">Step 4</p>
              <p className="step_desc">Enter your Work Experience</p>

              <div className="info_div">
                <img src={work_info} />
                Work Experience
              </div>

              {workEntry.map((index) => (
                <Grid
                  key="{}"
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <TextField
                    onChange={getAllWEinput}
                    name="dateFromWE[]"
                    className="pds_inputEducSemi"
                    label="Inclusive Dates (From) [Leave blank if N/A]"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    onChange={getAllWEinput}
                    name="dateToWE[]"
                    className="pds_inputEducSemi"
                    label="Inclusive Dates (To) [Leave blank if N/A]"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    label="Position Title (Write in full / Do not abbreviate)"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEducSemi"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    name="positionWE[]"
                    onChange={getAllWEinput}
                  />

                  <TextField
                    label="Department / Agency / Office / Company (Write in full / Do not abbreviate)"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    name="deptWE[]"
                    onChange={getAllWEinput}
                  />

                  <TextField
                    label="Monthly Salary"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEducSemi2"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "uppercase" } }}
                    name="monthlyWE[]"
                    onChange={getAllWEinput}
                  />

                  <TextField
                    label='Salary/ Job/ Pay Grade (if applicable) & Step  (Format "00-0")/ Increment'
                    variant="outlined"
                    color="warning"
                    className="pds_inputEducSemi2"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    name="salaryWE[]"
                    onChange={getAllWEinput}
                  />

                  <Autocomplete
                    onChange={getAllWEinput}
                    options={statusAppointment}
                    className="pds_inputEducSemi2"
                    renderInput={(params) => (
                      <TextField
                        color="warning"
                        placeholder="Choose N/A if Not Applicable"
                        {...params}
                        label="Status of Appointment"
                        name="appointWE[]"
                      />
                    )}
                  />

                  <Autocomplete
                    onChange={getAllWEinput}
                    options={yn}
                    className="pds_inputEducSemi2"
                    renderInput={(params) => (
                      <TextField
                        color="warning"
                        placeholder="Choose N/A if Not Applicable"
                        {...params}
                        label="GOV'T SERVICE (Y/ N)"
                        name="govtWE[]"
                      />
                    )}
                  />

                  <div className="line_educ"></div>
                </Grid>
              ))}

              <input type="hidden" id="WE_dateFrom_handler" value=" |:| " />
              <input type="hidden" id="WE_dateTo_handler" value=" |:| " />
              <input
                type="hidden"
                id="WE_position_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input
                type="hidden"
                id="WE_dept_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input
                type="hidden"
                id="WE_monthly_handler"
                value=" |:| "
                style={{ textTransform: "uppercase" }}
              />
              <input
                type="hidden"
                id="WE_salary_handler"
                value=" |:| "
                style={{ textTransform: "uppercase" }}
              />
              <input
                type="hidden"
                id="WE_appoint_handler"
                value=" |:| "
                style={{ textTransform: "uppercase" }}
              />
              <input
                type="hidden"
                id="WE_govt_handler"
                value=" |:| "
                style={{ textTransform: "uppercase" }}
              />

              <div className="entry_button">
                <button
                  type="button"
                  disabled={workEntry.length === 1}
                  onClick={() => handleRemoveWorkEntry(workEntry.id)}
                >
                  Remove
                </button>
                <button type="button" onClick={handleAddWorkEntry}>
                  Add another entry
                </button>
              </div>
            </div>

            <div className="step_content step5_content">
              <p className="step_text">Step 5</p>
              <p className="step_desc">Learning & Development</p>

              <div className="info_div" style={{ fontSize: "1rem" }}>
                <img src={LandD_info} />
                Learning and Development (L&D) Interventions/Training Programs
                Attended
              </div>

              {ldEntry.map((index) => (
                <Grid
                  key="{}"
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <div className="file_input">
                    <label>
                      Upload Image (JPG or PNG only) [Leave blank if Not
                      Applicable]:
                    </label>
                    <input
                      type="file"
                      onChange={getAllLDinput}
                      name="imgLD[]"
                      accept="image/png, image/jpeg"
                    />
                  </div>

                  <TextField
                    label="Title of Learning and Development Interventions/Training Programs (Write in full)"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEduc"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    name="titleLD[]"
                    onChange={getAllLDinput}
                  />

                  <TextField
                    onChange={getAllLDinput}
                    name="dateFromLD[]"
                    className="pds_inputEducSemi"
                    label="Inclusive Dates of attendance (From) [Leave blank if N/A]"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    onChange={getAllLDinput}
                    name="dateToLD[]"
                    className="pds_inputEducSemi"
                    label="Inclusive Dates of attendance (To) [Leave blank if N/A]"
                    color="warning"
                    type="date"
                    inputProps={{ min: "1950-01-01", max: maxDateInput }}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    label="Number of hours"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEducSemi"
                    placeholder="(ex. 8)Leave blank if Not Applicable"
                    inputProps={{ style: { textTransform: "uppercase" } }}
                    name="hoursLD[]"
                    onChange={getAllLDinput}
                    type="number"
                  />

                  <TextField
                    label="Type of LD (Managerial/ Supervisory/ Technical/ etc)"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEducSemi2"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "uppercase" } }}
                    name="typeLD[]"
                    onChange={getAllLDinput}
                  />

                  <TextField
                    label="Conducted/ Sponsored By (Write in full)"
                    variant="outlined"
                    color="warning"
                    className="pds_inputEducSemi2"
                    placeholder="Type N/A if Not Applicable"
                    inputProps={{ style: { textTransform: "capitalize" } }}
                    name="sponsoredLD[]"
                    onChange={getAllLDinput}
                  />

                  <Autocomplete
                    onChange={getAllLDinput}
                    options={LandDCoverage}
                    className="pds_inputEducSemi2"
                    renderInput={(params) => (
                      <TextField
                        color="warning"
                        placeholder="Choose N/A if Not Applicable"
                        {...params}
                        label="Coverage"
                        name="coverageLD[]"
                      />
                    )}
                  />

                  <Autocomplete
                    onChange={getAllLDinput}
                    options={LandDCategory}
                    className="pds_inputEducSemi2"
                    renderInput={(params) => (
                      <TextField
                        color="warning"
                        placeholder="Choose N/A if Not Applicable"
                        {...params}
                        label="Category"
                        name="categoryLD[]"
                      />
                    )}
                  />

                  <div className="line_educ"></div>
                </Grid>
              ))}

              <input
                type="hidden"
                id="LD_title_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input type="hidden" id="LD_dateFrom_handler" value=" |:| " />
              <input type="hidden" id="LD_dateTo_handler" value=" |:| " />
              <input
                type="hidden"
                id="LD_hours_handler"
                value=" |:| "
                style={{ textTransform: "uppercase" }}
              />
              <input
                type="hidden"
                id="LD_type_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input
                type="hidden"
                id="LD_sponsored_handler"
                value=" |:| "
                style={{ textTransform: "capitalize" }}
              />
              <input
                type="hidden"
                id="LD_coverage_handler"
                value=" |:| "
                style={{ textTransform: "uppercase" }}
              />
              <input
                type="hidden"
                id="LD_category_handler"
                value=" |:| "
                style={{ textTransform: "uppercase" }}
              />
              <input type="hidden" id="LD_img_handler" value=" |:| " />

              <div className="entry_button">
                <button
                  type="button"
                  disabled={ldEntry.length === 1}
                  onClick={() => handleRemoveldEntry(ldEntry.id)}
                >
                  Remove
                </button>
                <button type="button" onClick={handleAddldEntry}>
                  Add another entry
                </button>
              </div>
            </div>

            <div className="step_content preview_pds">
              <input type="hidden" id="elemName_Input" />
              <input type="hidden" id="elemDateFrom_Input" />
              <input type="hidden" id="elemDateTo_Input" />
              <input type="hidden" id="elemUnit_Input" />
              <input type="hidden" id="elemYear_Input" />
              <input type="hidden" id="elemAward_Input" />

              <input type="hidden" id="secName_Input" />
              <input type="hidden" id="secAttain_Input" />
              <input type="hidden" id="secDateFrom_Input" />
              <input type="hidden" id="secDateTo_Input" />
              <input type="hidden" id="secUnit_Input" />
              <input type="hidden" id="secYear_Input" />
              <input type="hidden" id="secAward_Input" />

              <input type="hidden" id="vocName_Input" />
              <input type="hidden" id="vocAttain_Input" />
              <input type="hidden" id="vocDateFrom_Input" />
              <input type="hidden" id="vocDateTo_Input" />
              <input type="hidden" id="vocUnit_Input" />
              <input type="hidden" id="vocYear_Input" />
              <input type="hidden" id="vocAward_Input" />

              <input type="hidden" id="colName_Input" />
              <input type="hidden" id="colAttain_Input" />
              <input type="hidden" id="colDateFrom_Input" />
              <input type="hidden" id="colDateTo_Input" />
              <input type="hidden" id="colUnit_Input" />
              <input type="hidden" id="colYear_Input" />
              <input type="hidden" id="colAward_Input" />

              <input type="hidden" id="gradName_Input" />
              <input type="hidden" id="gradAttain_Input" />
              <input type="hidden" id="gradDateFrom_Input" />
              <input type="hidden" id="gradDateTo_Input" />
              <input type="hidden" id="gradUnit_Input" />
              <input type="hidden" id="gradYear_Input" />
              <input type="hidden" id="gradAward_Input" />

              <input type="hidden" id="cseBoard_Input" />
              <input type="hidden" id="cseRating_Input" />
              <input type="hidden" id="cseDateExam_Input" />
              <input type="hidden" id="csePlaceExam_Input" />
              <input type="hidden" id="cseLicense_Input" />
              <input type="hidden" id="cseDateVal_Input" />

              <input type="hidden" id="weFrom_Input" />
              <input type="hidden" id="weTo_Input" />
              <input type="hidden" id="wePosition_Input" />
              <input type="hidden" id="weDepartment_Input" />
              <input type="hidden" id="weMonthly_Input" />
              <input type="hidden" id="weSalary_Input" />
              <input type="hidden" id="weAppoint_Input" />
              <input type="hidden" id="weGov_Input" />

              <input type="hidden" id="ldTitle_Input" />
              <input type="hidden" id="ldFrom_Input" />
              <input type="hidden" id="ldTo_Input" />
              <input type="hidden" id="ldHours_Input" />
              <input type="hidden" id="ldType_Input" />
              <input type="hidden" id="ldCoverage_Input" />
              <input type="hidden" id="ldSponsor_Input" />

              <p className="step_text">Finalization</p>
              <p className="step_desc">Review your personal information</p>

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
                  <div className="information_content">
                    <div className="header">Personal Information</div>

                    <div className="personal name">
                      <div className="box">
                        <span>First Name</span>
                        <span id="preview_fname"></span>
                      </div>
                      <div className="box">
                        <span>Middle Name</span>
                        <span id="preview_mname"></span>
                      </div>
                      <div className="box">
                        <span>Last Name</span>
                        <span id="preview_lname"></span>
                      </div>
                      <div className="box">
                        <span>Name Extension</span>
                        <span id="preview_extension"></span>
                      </div>
                    </div>

                    <div className="personal other_personal">
                      <div className="left">
                        <div className="box">
                          <span>Date of Birth</span>
                          <span id="preview_bday"></span>
                        </div>
                        <div className="box">
                          <span>Age</span>
                          <span id="preview_age"></span>
                        </div>
                        <div className="box">
                          <span>Place of Birth</span>
                          <span id="preview_pob"></span>
                        </div>
                        <div className="box">
                          <span>Gender</span>
                          <span id="preview_gender"></span>
                        </div>
                        <div className="box">
                          <span>Civil Status</span>
                          <span id="preview_civil"></span>
                        </div>
                        <div className="box">
                          <span>Height</span>
                          <span id="preview_height"></span>
                        </div>
                        <div className="box">
                          <span>Weight</span>
                          <span id="preview_weight"></span>
                        </div>
                        <div className="box">
                          <span>Blood Type</span>
                          <span id="preview_blood"></span>
                        </div>
                        <div className="box">
                          <span>GSIS ID NO.</span>
                          <span id="preview_gsis"></span>
                        </div>
                        <div className="box">
                          <span>PAG-IBIG ID NO.</span>
                          <span id="preview_pagibig"></span>
                        </div>
                        <div className="box">
                          <span>PHILHEALTH NO.</span>
                          <span id="preview_philhealth"></span>
                        </div>
                        <div className="box">
                          <span>SSS NO.</span>
                          <span id="preview_sss"></span>
                        </div>
                        <div className="box">
                          <span>TIN NO.</span>
                          <span id="preview_tin"></span>
                        </div>
                        <div className="box">
                          <span>EMPLOYEE NO.</span>
                          <span id="preview_empNo"></span>
                        </div>
                      </div>

                      <div className="right">
                        <div className="citizenship_preview">
                          <div className="left_citizenship">Citizenship</div>
                          <div
                            className="right_citizenship"
                            id="preview_citizenship"
                          ></div>
                        </div>

                        <div
                          className="address_preview"
                          style={{ marginTop: "2px" }}
                        >
                          <div className="left_address">Resident Address</div>
                          <div className="right_address">
                            <div className="add1">
                              <div className="box">
                                <span>House/Block/Lot No.</span>
                                <span id="preview_house"></span>
                              </div>
                              <div className="box">
                                <span>Street</span>
                                <span id="preview_street"></span>
                              </div>
                            </div>
                            <div className="add1">
                              <div className="box">
                                <span>Subdivision/Village</span>
                                <span id="preview_subdi"></span>
                              </div>
                              <div className="box">
                                <span>Barangay</span>
                                <span id="preview_barangay"></span>
                              </div>
                            </div>
                            <div className="add1">
                              <div className="box">
                                <span>City/Municipality</span>
                                <span id="preview_city"></span>
                              </div>
                              <div className="box">
                                <span>Province</span>
                                <span id="preview_province"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="zip_preview">
                          <div style={{ textTransform: "none" }}>Zip code</div>
                          <div id="preview_zip">3003</div>
                        </div>

                        <div className="address_preview">
                          <div className="left_address">Pemanent Address</div>
                          <div className="right_address">
                            <div className="add1">
                              <div className="box">
                                <span>House/Block/Lot No.</span>
                                <span id="preview_house1"></span>
                              </div>
                              <div className="box">
                                <span>Street</span>
                                <span id="preview_street1"></span>
                              </div>
                            </div>
                            <div className="add1">
                              <div className="box">
                                <span>Subdivision/Village</span>
                                <span id="preview_subdi1"></span>
                              </div>
                              <div className="box">
                                <span>Barangay</span>
                                <span id="preview_barangay1"></span>
                              </div>
                            </div>
                            <div className="add1">
                              <div className="box">
                                <span>City/Municipality</span>
                                <span id="preview_city1"></span>
                              </div>
                              <div className="box">
                                <span>Province</span>
                                <span id="preview_province1"></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="zip_preview">
                          <div style={{ textTransform: "none" }}>Zip code</div>
                          <div id="preview_zip1"></div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", width: "100%" }}>
                      <div className="box" style={{ width: "50%" }}>
                        <span>Mobile No.</span>
                        <span id="preview_mobile"></span>
                      </div>
                      <div className="box" style={{ width: "50%" }}>
                        <span>Email Address</span>
                        <span
                          style={{ textTransform: "none" }}
                          id="preview_email"
                        ></span>
                      </div>
                    </div>

                    <div style={{ display: "flex", width: "100%" }}>
                      <div
                        className="box"
                        style={{
                          width: "50%",
                          borderBottom: "2px solid black",
                        }}
                      >
                        <span>Telephone No.</span>
                        <span id="preview_tele"></span>
                      </div>
                      <div
                        className="box"
                        style={{
                          width: "50%",
                          borderBottom: "2px solid black",
                        }}
                      >
                        <span>Alternate Email Address</span>
                        <span
                          style={{ textTransform: "none" }}
                          id="preview_alEmail"
                        ></span>
                      </div>
                    </div>
                  </div>

                  {/*Step 2*/}
                  <div
                    className="information_content"
                    style={{ marginTop: "3rem" }}
                  >
                    <div className="header">Educational Background</div>

                    <div className="education_content">
                      <div
                        className="educ_level"
                        style={{
                          width: "13%",
                          backgroundColor: "rgb(238, 236, 236)",
                        }}
                      >
                        LEVEL
                      </div>
                      <div
                        className="educ_name"
                        style={{
                          width: "13%",
                          backgroundColor: "rgb(238, 236, 236)",
                        }}
                      >
                        <span>NAME OF SCHOOL</span> <span>(Write in full)</span>
                      </div>
                      <div
                        className="educ_name"
                        style={{
                          width: "13%",
                          backgroundColor: "rgb(238, 236, 236)",
                        }}
                      >
                        <span>BASIC EDUCATION / DEGREE / COURSE</span>{" "}
                        <span>(Write in full)</span>
                      </div>
                      <div
                        className="educ_level"
                        style={{
                          width: "15%",
                          backgroundColor: "rgb(238, 236, 236)",
                        }}
                      >
                        <span>PERIOD OF ATTENDANCE</span>
                        <div className="educ_period">
                          <div style={{ borderRight: "1.5px solid black" }}>
                            From
                          </div>
                          <div>To</div>
                        </div>
                      </div>
                      <div
                        className="educ_name"
                        style={{
                          width: "10%",
                          backgroundColor: "rgb(238, 236, 236)",
                        }}
                      >
                        <span>HIGHEST LEVEL UNIT EARNED</span>{" "}
                        <span>(If not graduated)</span>
                      </div>
                      <div
                        className="educ_year"
                        style={{
                          width: "8%",
                          backgroundColor: "rgb(238, 236, 236)",
                        }}
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
                        style={{
                          width: "13%",
                          backgroundColor: "rgb(238, 236, 236)",
                        }}
                      >
                        ELEMENTARY
                      </div>
                      <div className="educ_name_content">
                        {ElementaryContent}
                      </div>
                    </div>

                    <div className="education_content">
                      <div
                        className="educ_level"
                        style={{
                          width: "13%",
                          backgroundColor: "rgb(238, 236, 236)",
                        }}
                      >
                        SECONDARY
                      </div>
                      <div className="educ_name_content">
                        {SecondaryContent}
                      </div>
                    </div>

                    <div className="education_content">
                      <div
                        className="educ_level"
                        style={{
                          width: "13%",
                          backgroundColor: "rgb(238, 236, 236)",
                        }}
                      >
                        VOCATIONAL / TRADE / COURSE
                      </div>
                      <div className="educ_name_content">
                        {VocationalContent}
                      </div>
                    </div>

                    <div className="education_content">
                      <div
                        className="educ_level"
                        style={{
                          width: "13%",
                          backgroundColor: "rgb(238, 236, 236)",
                        }}
                      >
                        College
                      </div>
                      <div className="educ_name_content">{CollegeContent}</div>
                    </div>

                    <div className="education_content">
                      <div
                        className="educ_level"
                        style={{
                          width: "13%",
                          backgroundColor: "rgb(238, 236, 236)",
                        }}
                      >
                        Graduate Studies
                      </div>
                      <div className="educ_name_content">{GraduateContent}</div>
                    </div>
                  </div>

                  {/*Step 3*/}
                  <div
                    className="information_content"
                    style={{ marginTop: "3rem" }}
                  >
                    <div className="header">Civil Service Eligibility</div>
                  </div>

                  <div className="CSE_content">
                    <div className="headers" style={{ width: "20%" }}>
                      CAREER SERVICE/ RA 1080 (BOARD/ BAR) UNDER SPECIAL LAWS/
                      CES/ CSEE BARANGAY ELIGIBILITY / DRIVER'S LICENSE
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

                  {/*Step 4*/}
                  <div
                    className="information_content"
                    style={{ marginTop: "3rem" }}
                  >
                    <div className="header">Work Experience</div>
                  </div>

                  <div className="WE_content">
                    <div className="headers" style={{ width: "15%" }}>
                      <div>INCLUSIVE DATES (mm/dd/yyyy)</div>
                      <div style={{ display: "flex", marginTop: "20px" }}>
                        <div>From</div>
                        <div style={{ borderLeft: "1.5px solid black" }}>
                          To
                        </div>
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
                      SALARY/ JOB/ PAY GRADE (if applicable)& STEP (Format
                      "00-0")/ INCREMENT
                    </div>
                    <div className="headers" style={{ width: "10%" }}>
                      STATUS OF APPOINTMENT
                    </div>
                    <div className="headers" style={{ width: "6%" }}>
                      GOV'T SERVICE (Y/N)
                    </div>
                  </div>

                  {weContent}

                  {/*Step 5*/}
                  <div
                    className="information_content"
                    style={{ marginTop: "3rem" }}
                  >
                    <div className="header" style={{ fontSize: "1.1rem" }}>
                      LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING
                      PROGRAMS ATTENDED
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
                        <div style={{ borderLeft: "1.5px solid black" }}>
                          To
                        </div>
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
                </div>
              </div>

              <p className="p_consent" style={{ visibility: "hidden" }}>
                By accepting, you acknowledge that you have read this form,
                understood its contents, and consent to the processing of your
                data for the purposes indicated in this Consent Form. If not,
                your data will not be used by Bulacan State University as long
                as your authorization to deny access has not been reversed.
              </p>
            </div>

            <div className="pds_validator">
              <PdsFormStepModal />
            </div>
          </div>

          <div className="stepper_container">
            <Link
              to="/FacultyDashboard"
              style={{ textDecoration: "none", marginLeft: "5%" }}
              className="back_stepper0"
            >
              <button className="back_stepper" style={{ whiteSpace: "nowrap" }}>
                &#8592; &nbsp;&nbsp;&nbsp; Dashboard
              </button>
            </Link>

            <button
              type="button"
              className="back_stepper back_stepper1"
              style={{ display: "none" }}
              onClick={back1_stepper}
            >
              &#8592; &nbsp;&nbsp;&nbsp; Back
            </button>
            <button
              type="button"
              className="back_stepper back_stepper2"
              style={{ display: "none" }}
              onClick={back2_stepper}
            >
              &#8592; &nbsp;&nbsp;&nbsp; Back
            </button>
            <button
              type="button"
              className="back_stepper back_stepper3"
              style={{ display: "none" }}
              onClick={back3_stepper}
            >
              &#8592; &nbsp;&nbsp;&nbsp; Back
            </button>
            <button
              type="button"
              className="back_stepper back_stepper4"
              style={{ display: "none" }}
              onClick={back4_stepper}
            >
              &#8592; &nbsp;&nbsp;&nbsp; Back
            </button>
            <button
              type="button"
              className="back_stepper back_stepper5"
              style={{ display: "none" }}
              onClick={back5_stepper}
            >
              &#8592; &nbsp;&nbsp;&nbsp; Back
            </button>
            <button
              type="button"
              className="back_stepper back_stepper6"
              style={{ display: "none" }}
              onClick={back6_stepper}
            >
              &#8592; &nbsp;&nbsp;&nbsp; Back
            </button>

            <button
              type="button"
              className="next_stepper next_stepper0"
              onClick={validatorPDS0}
            >
              Next &nbsp;&nbsp;&nbsp; &#8594;
            </button>
            <button
              type="button"
              className="next_stepper next_stepper1"
              style={{ display: "none" }}
              onMouseOver={sameAddressFunction}
              onClick={validatorPDS1}
            >
              Next &nbsp;&nbsp;&nbsp; &#8594;
            </button>
            <button
              type="button"
              className="next_stepper next_stepper2"
              style={{ display: "none" }}
              onMouseOver={getAllElementaryInput}
              onClick={validatorPDS2}
            >
              Next &nbsp;&nbsp;&nbsp; &#8594;
            </button>
            <button
              type="button"
              className="next_stepper next_stepper3"
              style={{ display: "none" }}
              onMouseOver={getAllCSEinput}
              onClick={validatorPDS3}
            >
              Next &nbsp;&nbsp;&nbsp; &#8594;
            </button>
            <button
              type="button"
              className="next_stepper next_stepper4"
              style={{ display: "none" }}
              onMouseOver={getAllWEinput}
              onClick={validatorPDS4}
            >
              Next &nbsp;&nbsp;&nbsp; &#8594;
            </button>
            <button
              type="button"
              className="next_stepper next_stepper5"
              style={{ display: "none" }}
              onMouseOver={getAllLDinput}
              onClick={validatorPDS5}
            >
              Next &nbsp;&nbsp;&nbsp; &#8594;
            </button>
            <button
              type="submit"
              className="next_stepper next_stepper6"
              style={{ display: "none" }}
              onMouseOver={() => {
                sameAddressFunction();
                getAllElementaryInput();
                getAllCSEinput();
                getAllWEinput();
                getAllLDinput();
              }}
            >
              Submit &nbsp;&nbsp;&nbsp; &#8594;
            </button>
          </div>
        </div>
      </form>

      {/*Modal When done Creating PDS*/}
      <div className="modal_container success_modal_PDS_container">
        <div className="modal_validation">
          <img
            src={SuccessIcon}
            className="emailVal_img"
            style={{ boxShadow: "none", height: "10vh" }}
          />
          <h1 className="val_header">Congratulations</h1>
          <span className="val_subtext">
            You have successfully completed your personal profile information!
          </span>

          <Link to="/PersonalInformation" style={{ textDecoration: "none" }}>
            <button
              className="modal_close_btn"
              id="success_close_modal"
              style={{ backgroundColor: "#249F5D" }}
              onClick={closeSuccessCreatePDSmodal}
            >
              Close
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

//LandD Category
const LandDCategory = [
  { label: "N/A" },
  { label: "TRAINING" },
  { label: "SEMINAR" },
  { label: "WORKSHOP" },
];
//LandD Coverage
const LandDCoverage = [
  { label: "N/A" },
  { label: "INTERNATIONAL" },
  { label: "NATIOANAL" },
  { label: "REGIONAL" },
  { label: "LOCAL" },
];
//Govt service Y/N
const yn = [{ label: "N/A" }, { label: "YES" }, { label: "NO" }];
//Status of Appointment
const statusAppointment = [
  { label: "N/A" },
  { label: "PERMANENT" },
  { label: "TEMPORARY" },
  { label: "PART TIME" },
];
//Year List
var today = moment().format("L");
today = today.split("/");
var listYear = ["N/A", "To Date"];
for (let i = today[2]; i >= 1950; i--) {
  listYear.push(i.toString());
}
//Secondary Attainment
const secondaryAttainment = [
  { label: "Junior High School" },
  { label: "Senior High School" },
];
//Citizenship
const nationality = [
  "Afghan",
  "Albanian",
  "Algerian",
  "American",
  "Andorran",
  "Angolan",
  "Antiguans",
  "Argentinean",
  "Armenian",
  "Australian",
  "Austrian",
  "Azerbaijani",
  "Bahamian",
  "Bahraini",
  "Bangladeshi",
  "Barbadian",
  "Barbudans",
  "Batswana",
  "Belarusian",
  "Belgian",
  "Belizean",
  "Beninese",
  "Bhutanese",
  "Bolivian",
  "Bosnian",
  "Brazilian",
  "British",
  "Bruneian",
  "Bulgarian",
  "Burkinabe",
  "Burmese",
  "Burundian",
  "Cambodian",
  "Cameroonian",
  "Canadian",
  "Cape Verdean",
  "Central African",
  "Chadian",
  "Chilean",
  "Chinese",
  "Colombian",
  "Comoran",
  "Congolese",
  "Costa Rican",
  "Croatian",
  "Cuban",
  "Cypriot",
  "Czech",
  "Danish",
  "Djibouti",
  "Dominican",
  "Dutch",
  "East Timorese",
  "Ecuadorean",
  "Egyptian",
  "Emirian",
  "Equatorial Guinean",
  "Eritrean",
  "Estonian",
  "Ethiopian",
  "Fijian",
  "Filipino",
  "Finnish",
  "French",
  "Gabonese",
  "Gambian",
  "Georgian",
  "German",
  "Ghanaian",
  "Greek",
  "Grenadian",
  "Guatemalan",
  "Guinea-Bissauan",
  "Guinean",
  "Guyanese",
  "Haitian",
  "Herzegovinian",
  "Honduran",
  "Hungarian",
  "I-Kiribati",
  "Icelander",
  "Indian",
  "Indonesian",
  "Iranian",
  "Iraqi",
  "Irish",
  "Israeli",
  "Italian",
  "Ivorian",
  "Jamaican",
  "Japanese",
  "Jordanian",
  "Kazakhstani",
  "Kenyan",
  "Kittian and Nevisian",
  "Kuwaiti",
  "Kyrgyz",
  "Laotian",
  "Latvian",
  "Lebanese",
  "Liberian",
  "Libyan",
  "Liechtensteiner",
  "Lithuanian",
  "Luxembourger",
  "Macedonian",
  "Malagasy",
  "Malawian",
  "Malaysian",
  "Maldivan",
  "Malian",
  "Maltese",
  "Marshallese",
  "Mauritanian",
  "Mauritian",
  "Mexican",
  "Micronesian",
  "Moldovan",
  "Monacan",
  "Mongolian",
  "Moroccan",
  "Mosotho",
  "Motswana",
  "Mozambican",
  "Namibian",
  "Nauruan",
  "Nepalese",
  "New Zealander",
  "Nicaraguan",
  "Nigerian",
  "Nigerien",
  "North Korean",
  "Northern Irish",
  "Norwegian",
  "Omani",
  "Pakistani",
  "Palauan",
  "Panamanian",
  "Papua New Guinean",
  "Paraguayan",
  "Peruvian",
  "Polish",
  "Portuguese",
  "Qatari",
  "Romanian",
  "Russian",
  "Rwandan",
  "Saint Lucian",
  "Salvadoran",
  "Samoan",
  "San Marinese",
  "Sao Tomean",
  "Saudi",
  "Scottish",
  "Senegalese",
  "Serbian",
  "Seychellois",
  "Sierra Leonean",
  "Singaporean",
  "Slovakian",
  "Slovenian",
  "Solomon Islander",
  "Somali",
  "South African",
  "South Korean",
  "Spanish",
  "Sri Lankan",
  "Sudanese",
  "Surinamer",
  "Swazi",
  "Swedish",
  "Swiss",
  "Syrian",
  "Taiwanese",
  "Tajik",
  "Tanzanian",
  "Thai",
  "Togolese",
  "Tongan",
  "Trinidadian or Tobagonian",
  "Tunisian",
  "Turkish",
  "Tuvaluan",
  "Ugandan",
  "Ukrainian",
  "Uruguayan",
  "Uzbekistani",
  "Venezuelan",
  "Vietnamese",
  "Welsh",
  "Yemenite",
  "Zambian",
  "Zimbabwean",
];
//Civil Status
const civil_status = [
  { label: "Married" },
  { label: "Single" },
  { label: "Divorced" },
  { label: "Widowed" },
];
//Gender
const gender = [{ label: "Male" }, { label: "Female" }];
//Counntries
const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan, Province of China",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];
