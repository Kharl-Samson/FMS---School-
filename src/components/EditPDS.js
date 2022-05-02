import * as React from "react";
import "../css/createPDS.css";
import TextField from "@mui/material/TextField";
import basic_info from "../images/icons/basic_info.svg";
import address_info from "../images/icons/address_info.svg";
import conctact_info from "../images/icons/conctact_info.svg";
import service_info from "../images/icons/service_info.svg";
import work_info from "../images/icons/work_info.svg";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import {regions,provinces,cities,barangays,} from "select-philippines-address";
import { useEffect, useState } from "react";
import PdsFormStepModal from "../modalsUi/PdsFormModal";
import education_info from "../images/icons/education_info.svg";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import getAllElementaryInput from "../functions/GetAllEducInput";
import getAllCSEinput from "../functions/GetAllCSEinput";

import validatorPDS1V1 from "../functions/PdsStep1ValidatorVersion1";
import validatorPDS2 from "../functions/PdsStep2Validator";
import validatorPDS3 from "../functions/PdsStep3Validator";
import getAllWEinput from "../functions/GetAllWEinput";
import { Link } from "react-router-dom";
import axios from "axios";
import SuccessIcon from "../images/icons/success_modal.svg";
import CICT_Logo from "../images/login/cict_logo.png";

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



export default function EditPersonalDataSheet() {
  document.title = "CICT | Edit Personal Information";
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
    });
  };
  const province = (e) => {
    setRegionAddr(e.target.selectedOptions[0].text);
    provinces(e.target.value).then((response) => {
      setProvince(response);
      setCity([]);
      setBarangay([]);
    });
  };
  const city = (e) => {
    setProvinceAddr(e.target.selectedOptions[0].text);
    cities(e.target.value).then((response) => {
      setCity(response);
    });
  };
  const barangay = (e) => {
    setCityAddr(e.target.selectedOptions[0].text);
    barangays(e.target.value).then((response) => {
      setBarangay(response);
    });
  };
  const brgy = (e) => {
    setBarangayAddr(e.target.selectedOptions[0].text);
  };

  useEffect(() => {
    region();
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
    });
  };
  const city1 = (e) => {
    setProvinceAddr1(e.target.selectedOptions[0].text);
    cities(e.target.value).then((response) => {
      setCity1(response);
    });
  };
  const barangay1 = (e) => {
    setCityAddr1(e.target.selectedOptions[0].text);
    barangays(e.target.value).then((response) => {
      setBarangay1(response);
    });
  };
  const brgy1 = (e) => {
    setBarangayAddr1(e.target.selectedOptions[0].text);
  };

  useEffect(() => {
    region1();
  }, []);

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

  //Submit PDS
  const submitPDSTaskForm = (e) => {
    e.preventDefault();
    //Sending the data request to call it on backend
    const sendDataPDS = {
      fname_pds: document.getElementById("fname_pds").value.toUpperCase(),
      mname_pds: document.getElementById("mname_pds").value.toUpperCase(),
      lname_pds: document.getElementById("lname_pds").value.toUpperCase(),
      nameextension_pds: document.getElementById("nameextension_pds").value.toUpperCase(),
      bdate_input: document.getElementById("bdate_input").value,
      age_input: document.getElementById("age_input").textContent,
      cob_pds: document.getElementById("cob_pds").value.toUpperCase(),
      cityOfBirth_pds: document.getElementById("cityOfBirth_pds").value.toUpperCase(),
      gender_pds: document.getElementById("gender_pds").value.toUpperCase(),
      civil_pds: document.getElementById("civil_pds").value.toUpperCase(),
      height_pds: document.getElementById("height_pds").value.toUpperCase(),
      weight_pds: document.getElementById("weight_pds").value.toUpperCase(),
      blood_pds: document.getElementById("blood_pds").value.toUpperCase(),
      gsis_pds: document.getElementById("gsis_pds").value.toUpperCase(),
      pagibig_pds: document.getElementById("pagibig_pds").value.toUpperCase(),
      philhealth_pds: document.getElementById("philhealth_pds").value.toUpperCase(),
      sss_pds: document.getElementById("sss_pds").value.toUpperCase(),
      tin_pds: document.getElementById("tin_pds").value.toUpperCase(),
      employee_pds: document.getElementById("employee_pds").value.toUpperCase(),
      citizenship_pds: document.getElementById("citizenship_pds").value.toUpperCase(),
      email_pds: document.getElementById("email_pds").value,
      al_email_pds: document.getElementById("al_email_pds").value,
      add_handler1: document.getElementById("House_pds").value.toUpperCase(),
      add_handler2: document.getElementById("street_pds").value.toUpperCase(),
      add_handler3: document.getElementById("subdi_pds").value.toUpperCase(),
      add_handler4: document.getElementById("region_pds").value.toUpperCase(),
      add_handler5: document.getElementById("province1_pds").value.toUpperCase(),
      add_handler6: document.getElementById("city1_pds").value.toUpperCase(),
      add_handler7: document.getElementById("barangay1_pds").value.toUpperCase(),
      add_handler8: document.getElementById("zip1_pds").value.toUpperCase(),
      add_handler9: document.getElementById("House1_pds").value.toUpperCase(),
      add_handler10: document.getElementById("street1_pds").value.toUpperCase(),
      add_handler11: document.getElementById("subdi1_pds").value.toUpperCase(),
      add_handler12: document.getElementById("region1_pds").value.toUpperCase(),
      add_handler13: document.getElementById("province2_pds").value.toUpperCase(),
      add_handler14: document.getElementById("city2_pds").value.toUpperCase(),
      add_handler15: document.getElementById("barangay2_pds").value.toUpperCase(),
      add_handler16: document.getElementById("zip2_pds").value.toUpperCase(),
      input_phone: document.getElementById("input_phone").value,
      tele_pds: document.getElementById("tele_pds").value,
      nameELEM_handler: document.getElementById("nameELEM_handler").value.toUpperCase(),
      attainELEM_handler: document.getElementById("attainELEM_handler").value.toUpperCase(),
      dateFromELEM_handler: document.getElementById("dateFromELEM_handler").value,
      dateToELEM_handler: document.getElementById("dateToELEM_handler").value,
      unitsELEM_handler: document.getElementById("unitsELEM_handler").value.toUpperCase(),
      yearGradELEM_handler: document.getElementById("yearGradELEM_handler").value.toUpperCase(),
      awardELEM_handler: document.getElementById("awardELEM_handler").value.toUpperCase(),
      nameSecond_handler: document.getElementById("nameSecond_handler").value.toUpperCase(),
      attainSecond_handler: document.getElementById("attainSecond_handler").value.toUpperCase(),
      dateFromSecond_handler: document.getElementById("dateFromSecond_handler").value,
      dateToSecond_handler: document.getElementById("dateToSecond_handler").value,
      unitsSecond_handler: document.getElementById("unitsSecond_handler").value.toUpperCase(),
      yearGradSecond_handler: document.getElementById("yearGradSecond_handler").value.toUpperCase(),
      awardSecond_handler: document.getElementById("awardSecond_handler").value.toUpperCase(),
      nameVocational_handler: document.getElementById("nameVocational_handler").value.toUpperCase(),
      attainVocational_handler: document.getElementById("attainVocational_handler").value.toUpperCase(),
      dateFromVocational_handler: document.getElementById("dateFromVocational_handler").value,
      dateToVocational_handler: document.getElementById("dateToVocational_handler").value,
      unitsVocational_handler: document.getElementById("unitsVocational_handler").value.toUpperCase(),
      yearGradVocational_handler: document.getElementById("yearGradVocational_handler").value.toUpperCase(),
      awardVocational_handler: document.getElementById("awardVocational_handler").value.toUpperCase(),
      nameCollege_handler: document.getElementById("nameCollege_handler").value.toUpperCase(),
      attainCollege_handler: document.getElementById("attainCollege_handler").value.toUpperCase(),
      dateFromCollege_handler: document.getElementById("dateFromCollege_handler").value,
      dateToCollege_handler: document.getElementById("dateToCollege_handler").value,
      unitsCollege_handler: document.getElementById("unitsCollege_handler").value.toUpperCase(),
      yearGradCollege_handler: document.getElementById("yearGradCollege_handler").value.toUpperCase(),
      awardCollege_handler: document.getElementById("awardCollege_handler").value.toUpperCase(),
      nameGraduate_handler: document.getElementById("nameGraduate_handler").value.toUpperCase(),
      attainGraduate_handler: document.getElementById("attainGraduate_handler").value.toUpperCase(),
      dateFromGraduate_handler: document.getElementById("dateFromGraduate_handler").value,
      dateToGraduate_handler: document.getElementById("dateToGraduate_handler").value,
      unitsGraduate_handler: document.getElementById("unitsGraduate_handler").value.toUpperCase(),
      yearGradGraduate_handler: document.getElementById("yearGradGraduate_handler").value.toUpperCase(),
      awardGraduate_handler: document.getElementById("awardGraduate_handler").value.toUpperCase(),
      CSE_board_handler: document.getElementById("CSE_board_handler").value.toUpperCase(),
      CSE_rating_handler: document.getElementById("CSE_rating_handler").value.toUpperCase(),
      CSE_dateExam_handler: document.getElementById("CSE_dateExam_handler").value,
      CSE_placeExam_handler: document.getElementById("CSE_placeExam_handler").value.toUpperCase(),
      CSE_licenseNo_handler: document.getElementById("CSE_licenseNo_handler").value.toUpperCase(),
      CSE_dateValidity_handler: document.getElementById("CSE_dateValidity_handler").value,
      WE_dateFrom_handler: document.getElementById("WE_dateFrom_handler").value,
      WE_dateTo_handler: document.getElementById("WE_dateTo_handler").value,
      WE_position_handler: document.getElementById("WE_position_handler").value.toUpperCase(),
      WE_dept_handler: document.getElementById("WE_dept_handler").value.toUpperCase(),
      WE_monthly_handler: document.getElementById("WE_monthly_handler").value.toUpperCase(),
      WE_salary_handler: document.getElementById("WE_salary_handler").value.toUpperCase(),
      WE_appoint_handler: document.getElementById("WE_appoint_handler").value.toUpperCase(),
      WE_govt_handler: document.getElementById("WE_govt_handler").value.toUpperCase(),
    };
    //Sending the data to my backend
    axios.post("http://localhost/fms/editPDS.php", sendDataPDS).then((result) => {
        document.getElementsByClassName("success_modal_PDS_container")[0].style.display = "flex";
      }); //End of axios
  };

  //Closing success modal create pds
  function closeSuccessCreatePDSmodal() {
    window.localStorage.setItem("pds_status", "Approved");
    // window.localStorage.setItem('pds_ctr', "off");
  }

  //-------------------------------------------------

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
        <div
          className="step_content step1_content"
          style={{ display: "block" }}
        >
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
              defaultValue={res.fname}
              inputProps={{ style: { textTransform: "capitalize" } }}
            />
            <TextField
              label="Middle Name"
              variant="outlined"
              color="warning"
              className="pds_input"
              placeholder="Type N/A if Not Applicable"
              defaultValue={res.mname}
              inputProps={{ style: { textTransform: "capitalize" } }}
              id="mname_pds"
            />
            <TextField
              label="Last Name"
              variant="outlined"
              color="warning"
              className="pds_input"
              defaultValue={res.lname}
              placeholder="Fields with * are required"
              id="lname_pds"
              inputProps={{ style: { textTransform: "capitalize" } }}
            />
            <TextField
              label="Name Extension (Optional)"
              variant="outlined"
              color="warning"
              className="pds_input"
              defaultValue={res.nameExtension}
              placeholder="(ex. Jr., Sr., III)  Type N/A if Not Applicable"
              inputProps={{ style: { textTransform: "capitalize" } }}
              id="nameextension_pds"
            />
            <TextField
              onChange={getAge}
              id="bdate_input"
              className="pds_input"
              label="Birthday"
              color="warning"
              type="date"
              defaultValue={res.bday}
              inputProps={{ min: "1950-01-01", max: maxDateInput }}
              InputLabelProps={{ shrink: true }}
            />

            <div className="pds_inputAGE">
              <p>
                Age : <span id="age_input">{res.age}</span> years old
              </p>
            </div>

            <Autocomplete
              className="pds_input"
              id="cob_pds"
              sx={{ width: "350px" }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              defaultValue={{ label: res.cob }}
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
              defaultValue={res.pob}
              className="pds_input"
              placeholder="(ex. Bulacan) Fields with * are required"
              id="cityOfBirth_pds"
              inputProps={{ style: { textTransform: "capitalize" } }}
            />

            <Autocomplete
              id="gender_pds"
              options={gender}
              className="pds_input"
              sx={{ width: "350px" }}
              defaultValue={res.gender}
              renderInput={(params) => (
                <TextField
                  color="warning"
                  placeholder="Fields with * are required"
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
              defaultValue={res.civil}
              renderInput={(params) => (
                <TextField
                  color="warning"
                  placeholder="Fields with * are required"
                  {...params}
                  label="Civil Status"
                />
              )}
            />

            <TextField
              label="Height"
              variant="outlined"
              color="warning"
              defaultValue={res.height}
              className="pds_input"
              placeholder="(cm) Fields with * are required"
              id="height_pds"
              type="number"
            />
            <TextField
              label="Weight"
              defaultValue={res.weight}
              variant="outlined"
              color="warning"
              className="pds_input"
              placeholder="(kg) Fields with * are required"
              id="weight_pds"
              type="number"
            />
            <TextField
              label="Blood Type"
              defaultValue={res.blood}
              variant="outlined"
              color="warning"
              className="pds_input"
              placeholder="Fields with * are required"
              id="blood_pds"
            />
            <TextField
              label="GSIS ID No."
              defaultValue={res.gsis}
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
              defaultValue={res.pagibig}
              className="pds_input"
              placeholder="Type N/A if Not Applicable"
              id="pagibig_pds"
            />
            <TextField
              label="PHILHEALTH No."
              variant="outlined"
              defaultValue={res.philhealth}
              color="warning"
              className="pds_input"
              placeholder="Type N/A if Not Applicable"
              id="philhealth_pds"
            />
            <TextField
              label="SSS No."
              variant="outlined"
              color="warning"
              defaultValue={res.sss}
              className="pds_input"
              placeholder="Type N/A if Not Applicable"
              id="sss_pds"
            />
            <TextField
              label="TIN No."
              variant="outlined"
              color="warning"
              defaultValue={res.tin}
              className="pds_input"
              placeholder="Type N/A if Not Applicable"
              id="tin_pds"
            />
            <TextField
              label="EMPLOYEE No."
              variant="outlined"
              defaultValue={res.employeNo}
              color="warning"
              className="pds_input"
              placeholder="Fields with * are required"
              id="employee_pds"
              type="number"
            />
            <Autocomplete
              id="citizenship_pds"
              options={nationality}
              className="pds_input"
              defaultValue={res.citizenship}
              sx={{ width: "350px" }}
              renderInput={(params) => (
                <TextField
                  color="warning"
                  placeholder="Fields with * are required"
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
              defaultValue={localStorage.getItem("email")}
              disabled
            />
            <TextField
              label="Alternate Email Address"
              variant="outlined"
              color="warning"
              defaultValue={res.alEmail}
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
                id="House_pds"
                defaultValue={res.r_house}
              />
            </div>

            <div className="address_input">
              <label>Street :</label>
              <input
                type="text"
                placeholder="Type N/A if Not Applicable"
                className="add_inp2"
                id="street_pds"
                defaultValue={res.r_street}
              />
            </div>

            <div className="address_input">
              <label>Subdivision / Village :</label>
              <input
                type="text"
                placeholder="Type N/A if Not Applicable"
                className="add_inp3"
                id="subdi_pds"
                defaultValue={res.r_subdi}
              />
            </div>

            <div className="address_input">
              <label>Region (Required) :</label>
              <select
                id="region_pds"
                onChange={province}
                onSelect={region}
                className="add_inp4"
              >
                <option disabled>Select Region</option>
                <option value={res.r_region} hidden>
                  {res.r_region}
                </option>
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
              <select onChange={city} className="add_inp5" id="province1_pds">
                <option value={res.r_province} hidden>
                  {res.r_province}
                </option>
                <option disabled>Select Region First</option>
                {provinceData &&
                  provinceData.length > 0 &&
                  provinceData.map((item) => (
                    <option key={item.province_code} value={item.province_code}>
                      {item.province_name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="address_input">
              <label>City / Municipality (Required) :</label>
              <select onChange={barangay} className="add_inp6" id="city1_pds">
                <option value={res.r_city} hidden>
                  {res.r_city}
                </option>
                <option disabled>Select Province First</option>
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
              <select onChange={brgy} className="add_inp7" id="barangay1_pds">
                <option value={res.r_barangay} hidden>
                  {res.r_barangay}
                </option>
                <option disabled>Select City First</option>
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
                id="zip1_pds"
                defaultValue={res.r_zip}
              />
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
            <div className="address_input address_notcheck">
              <label>House / Block / Lot No. :</label>
              <input
                type="text"
                placeholder="Type N/A if Not Applicable"
                className="add1_inp1"
                id="House1_pds"
                defaultValue={res.p_house}
              />
            </div>
            <div className="address_input address_notcheck">
              <label>Street :</label>
              <input
                type="text"
                placeholder="Type N/A if Not Applicable"
                className="add2_inp2"
                id="street1_pds"
                defaultValue={res.p_street}
              />
            </div>
            <div className="address_input address_notcheck">
              <label>Subdivision / Village :</label>
              <input
                type="text"
                placeholder="Type N/A if Not Applicable"
                className="add3_inp3"
                id="subdi1_pds"
                defaultValue={res.p_subdi}
              />
            </div>
            <div className="address_input address_notcheck">
              <label>Region (Required) :</label>
              <select
                onChange={province1}
                onSelect={region1}
                className="add4_inp4"
                id="region1_pds"
              >
                <option disabled>Select Region</option>
                <option value={res.p_region} hidden>
                  {res.p_region}
                </option>
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
              <select onChange={city1} className="add5_inp5" id="province2_pds">
                <option value={res.p_province} hidden>
                  {res.p_province}
                </option>
                <option disabled>Select Region First</option>
                {provinceData1 &&
                  provinceData1.length > 0 &&
                  provinceData1.map((item) => (
                    <option key={item.province_code} value={item.province_code}>
                      {item.province_name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="address_input address_notcheck">
              <label>City (Required) :</label>
              <select onChange={barangay1} className="add6_inp6" id="city2_pds">
                <option value={res.p_city} hidden>
                  {res.p_city}
                </option>
                <option disabled>Select Province First</option>
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
              <select onChange={brgy1} className="add7_inp7" id="barangay2_pds">
                <option value={res.p_barangay} hidden>
                  {res.p_barangay}
                </option>
                <option disabled>Select City First</option>
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
                id="zip2_pds"
                defaultValue={res.p_zip}
              />
            </div>
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
                defaultValue={res.mobile}
                style={{ margin: "0", width: "100%" }}
                id="input_phone"
                onKeyUp={() => {
                  phonenumber();
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
                defaultValue={res.tele}
              />
              <span style={{ fontSize: ".9rem", visibility: "hidden" }}>
                Mobile No. is an invalid format.
              </span>
            </div>
          </Grid>
        </div>
      );
    }
  });

  //Hook for getting pds2

  //Add elementary entry
  const [elemEntry, setElemEntry] = useState([{ id: uuidv4() }]);
  const handleAddElemEntry = () => {
    setElemEntry([...elemEntry, { id: uuidv4() }]);
  };
  const elemEntrySize = elemEntry.length - 1;
  const sliceElemEntry = elemEntry.slice(0, elemEntrySize);

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
  const SecondEntrySize = secondaryEntry.length - 1;
  const sliceSecondEntry = secondaryEntry.slice(0, SecondEntrySize);
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
  const VocationalEntrySize = vocationalEntry.length - 1;
  const sliceVocationalEntry = vocationalEntry.slice(0, VocationalEntrySize);
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
  const CollegeEntrySize = collegeEntry.length - 1;
  const sliceCollegeEntry = collegeEntry.slice(0, CollegeEntrySize);
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
  const GraduateEntrySize = graduateEntry.length - 1;
  const sliceGraduateEntry = graduateEntry.slice(0, GraduateEntrySize);
  const handleRemoveGraduateEntry = (id) => {
    const values = [...graduateEntry];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setGraduateEntry(values);
  };

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
    var sliceinputELEMfrom = inputELEMfrom.slice(0, -5);
    const inputELEMfrom_Array = sliceinputELEMfrom.split(" |:| ");
    setElemfrom(inputELEMfrom_Array);
  };
  const [elemTO, setElemTO] = useState([]);
  const loadElemTO = async () => {
    var inputELEMTO = document.getElementById("elemTo").value;
    var sliceinputELEMTO = inputELEMTO.slice(0, -5);
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
    var sliceinputSecondFrom = inputSecondFrom.slice(0, -5);
    const inputSecondFrom_Array = sliceinputSecondFrom.split(" |:| ");
    setSecondFrom(inputSecondFrom_Array);
  };
  const [SecondTo, setSecondTo] = useState([]);
  const loadSecondTo = async () => {
    var inputSecondTo = document.getElementById("secTo").value;
    var sliceinputSecondTo = inputSecondTo.slice(0, -5);
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
    var sliceinputVocationalFrom = inputVocationalFrom.slice(0, -5);
    const inputVocationalFrom_Array = sliceinputVocationalFrom.split(" |:| ");
    setVocationalFrom(inputVocationalFrom_Array);
  };
  const [VocationalTo, setVocationalTo] = useState([]);
  const loadVocationalTo = async () => {
    var inputVocationalTo = document.getElementById("vocTo").value;
    var sliceinputVocationalTo = inputVocationalTo.slice(0, -5);
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
    var sliceinputCollegeFrom = inputCollegeFrom.slice(0, -5);
    const inputCollegeFrom_Array = sliceinputCollegeFrom.split(" |:| ");
    setCollegeFrom(inputCollegeFrom_Array);
  };
  const [CollegeTo, setCollegeTo] = useState([]);
  const loadCollegeTo = async () => {
    var inputCollegeTo = document.getElementById("colTo").value;
    var sliceinputCollegeTo = inputCollegeTo.slice(0, -5);
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
      <div id="for_append_elem" key={elem_ctr}>
        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Name of Elementary School *</label>
          <input
            type="text"
            placeholder="Fields with * are required"
            defaultValue={elemName[elem_ctr]}
            name="elem_namePDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
          />
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Basic Education/Degree/Course *</label>
          <input
            type="text"
            placeholder="Fields with * are required"
            value="Elementary"
            className="add_inp11"
            disabled
          />
        </div>

        <div className="dateSchool_input">
          <label>Date Attended (From) *</label>
          <input
            type="date"
            defaultValue={elemfrom[elem_ctr]}
            name="elem_dateFromPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input">
          <label>Date Attended (To) *</label>
          <input
            type="date"
            defaultValue={elemTO[elem_ctr]}
            name="elem_dateToPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input">
          <label>Highest Level / Units Earned (If not graduated)</label>
          <input
            type="text"
            placeholder="Type N/A if Not Applicable"
            name="elem_unitPDS[]"
            className="add_inp11"
            onChange={getAllElementaryInput}
            defaultValue={elemUNITS[elem_ctr]}
          />
        </div>

        <div className="dateSchool_input">
          <label>Year Graduate *</label>
          <select
            className="add_inp11"
            name="elem_yearGradPDS[]"
            onChange={getAllElementaryInput}
          >
            {listYear &&
              listYear.length > 0 &&
              listYear.map((item) =>
                item == elemYEAR[elem_ctr] ? (
                  <option key={item} value={item} selected>
                    {item}
                  </option>
                ) : (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
          </select>
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Scholarships/Academic Honors Received</label>
          <input
            type="text"
            placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
            defaultValue={elemAWARD[elem_ctr]}
            name="elem_awardsPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
          />
        </div>
        <div className="line_educ" style={{ clear: "both" }}></div>
      </div>
    );
  });

  //Secondary Content
  let sec_ctr = -1;
  const SecondaryContent = SecondName.map(() => {
    sec_ctr++;
    return (
      <div id="for_append_elem" key={sec_ctr}>
        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Name of School *</label>
          <input
            type="text"
            placeholder="Fields with * are required"
            defaultValue={SecondName[sec_ctr]}
            name="second_namePDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
          />
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Basic Education/Degree/Course *</label>
          <select
            className="add_inp11"
            name="second_attainmentPDS[]"
            onChange={getAllElementaryInput}
          >
            {secondaryAttainment &&
              secondaryAttainment.length > 0 &&
              secondaryAttainment.map((item) =>
                item.label === SecondAttain[sec_ctr] ? (
                  <option key={item.label} value={item.label} selected>
                    {item.label}
                  </option>
                ) : (
                  <option key={item.label} value={item.label}>
                    {item.label}
                  </option>
                )
              )}
          </select>
        </div>

        <div className="dateSchool_input">
          <label>Date Attended (From) *</label>
          <input
            type="date"
            defaultValue={SecondFrom[sec_ctr]}
            name="second_dateFromPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input">
          <label>Date Attended (To) *</label>
          <input
            type="date"
            defaultValue={SecondTo[sec_ctr]}
            name="second_dateToPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input">
          <label>Highest Level / Units Earned (If not graduated)</label>
          <input
            type="text"
            placeholder="Type N/A if Not Applicable"
            name="second_unitPDS[]"
            className="add_inp11"
            onChange={getAllElementaryInput}
            defaultValue={SecondUnit[sec_ctr]}
          />
        </div>

        <div className="dateSchool_input">
          <label>Year Graduate *</label>
          <select
            className="add_inp11"
            name="second_yearGradPDS[]"
            onChange={getAllElementaryInput}
          >
            {listYear &&
              listYear.length > 0 &&
              listYear.map((item) =>
                item === SecondYear[sec_ctr] ? (
                  <option key={item} value={item} selected>
                    {item}
                  </option>
                ) : (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
          </select>
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Scholarships/Academic Honors Received</label>
          <input
            type="text"
            placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
            defaultValue={SecondAward[sec_ctr]}
            name="second_awardsPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
          />
        </div>
        <div className="line_educ" style={{ clear: "both" }}></div>
      </div>
    );
  });

  //Vocational Content
  let voc_ctr = -1;
  const VocationalContent = VocationalName.map(() => {
    voc_ctr++;
    return (
      <div id="for_append_elem" key={voc_ctr}>
        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Name of School</label>
          <input
            type="text"
            placeholder="Type N/A if Not Applicable"
            defaultValue={VocationalName[voc_ctr]}
            name="vocational_namePDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
          />
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Basic Education/Degree/Course</label>
          <input
            type="text"
            placeholder="Type N/A if Not Applicable"
            className="add_inp11"
            name="vocational_attainmentPDS[]"
            onChange={getAllElementaryInput}
            defaultValue={VocationalAttain[voc_ctr]}
          />
        </div>

        <div className="dateSchool_input">
          <label>Date Attended (From)</label>
          <input
            type="date"
            defaultValue={VocationalFrom[voc_ctr]}
            name="vocational_dateFromPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input">
          <label>Date Attended (To)</label>
          <input
            type="date"
            defaultValue={VocationalTo[voc_ctr]}
            name="vocational_dateToPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input">
          <label>Highest Level / Units Earned (If not graduated)</label>
          <input
            type="text"
            placeholder="Type N/A if Not Applicable"
            name="vocational_unitPDS[]"
            className="add_inp11"
            onChange={getAllElementaryInput}
            defaultValue={VocationalUnit[voc_ctr]}
          />
        </div>

        <div className="dateSchool_input">
          <label>Year Graduate</label>
          <select
            className="add_inp11"
            name="vocational_yearGradPDS[]"
            onChange={getAllElementaryInput}
          >
            {listYear &&
              listYear.length > 0 &&
              listYear.map((item) =>
                item === VocationalYear[voc_ctr] ? (
                  <option key={item} value={item} selected>
                    {item}
                  </option>
                ) : (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
          </select>
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Scholarships/Academic Honors Received</label>
          <input
            type="text"
            placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
            defaultValue={VocationalAward[voc_ctr]}
            name="vocational_awardsPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
          />
        </div>
        <div className="line_educ" style={{ clear: "both" }}></div>
      </div>
    );
  });

  //College Content
  let col_ctr = -1;
  const CollegeContent = CollegeName.map(() => {
    col_ctr++;
    return (
      <div id="for_append_elem" key={col_ctr}>
        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Name of School *</label>
          <input
            type="text"
            placeholder="Type N/A if Not Applicable"
            defaultValue={CollegeName[col_ctr]}
            name="college_namePDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
          />
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Basic Education/Degree/Course *</label>
          <input
            type="text"
            placeholder="Type N/A if Not Applicable"
            className="add_inp11"
            name="college_attainmentPDS[]"
            onChange={getAllElementaryInput}
            defaultValue={CollegeAttain[col_ctr]}
          />
        </div>

        <div className="dateSchool_input">
          <label>Date Attended (From) *</label>
          <input
            type="date"
            defaultValue={CollegeFrom[col_ctr]}
            name="college_dateFromPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input">
          <label>
            Date Attended (To) [Leave blank if date is up to present]
          </label>
          <input
            type="date"
            defaultValue={CollegeTo[col_ctr]}
            name="college_dateToPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input">
          <label>Highest Level / Units Earned (If not graduated) *</label>
          <input
            type="text"
            placeholder="Type N/A if Not Applicable"
            name="college_unitPDS[]"
            className="add_inp11"
            onChange={getAllElementaryInput}
            defaultValue={CollegeUnit[col_ctr]}
          />
        </div>

        <div className="dateSchool_input">
          <label>Year Graduate *</label>
          <select
            className="add_inp11"
            name="college_yearGradPDS[]"
            onChange={getAllElementaryInput}
          >
            {listYear &&
              listYear.length > 0 &&
              listYear.map((item) =>
                item === CollegeYear[col_ctr] ? (
                  <option key={item} value={item} selected>
                    {item}
                  </option>
                ) : (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
          </select>
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Scholarships/Academic Honors Received *</label>
          <input
            type="text"
            placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
            defaultValue={CollegeAward[col_ctr]}
            name="college_awardsPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
          />
        </div>
        <div className="line_educ" style={{ clear: "both" }}></div>
      </div>
    );
  });

  //Graduate Studies Content
  let grad_ctr = -1;
  const GraduateContent = GraduateName.map(() => {
    grad_ctr++;
    return (
      <div id="for_append_elem" key={grad_ctr}>
        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Name of School</label>
          <input
            type="text"
            placeholder="Type N/A if Not Applicable"
            defaultValue={GraduateName[grad_ctr]}
            name="graduate_namePDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
          />
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Basic Education/Degree/Course</label>
          <input
            type="text"
            placeholder="Type N/A if Not Applicable"
            className="add_inp11"
            name="graduate_attainmentPDS[]"
            onChange={getAllElementaryInput}
            defaultValue={GraduateAttain[grad_ctr]}
          />
        </div>

        <div className="dateSchool_input">
          <label>Date Attended (From)</label>
          <input
            type="date"
            defaultValue={GraduateFrom[grad_ctr]}
            name="graduate_dateFromPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input">
          <label>
            Date Attended (To) [Leave blank if date is up to present]
          </label>
          <input
            type="date"
            defaultValue={GraduateTo[grad_ctr]}
            name="graduate_dateToPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input">
          <label>Highest Level / Units Earned (If not graduated)</label>
          <input
            type="text"
            placeholder="Type N/A if Not Applicable"
            name="graduate_unitPDS[]"
            className="add_inp11"
            onChange={getAllElementaryInput}
            defaultValue={GraduateUnit[grad_ctr]}
          />
        </div>

        <div className="dateSchool_input">
          <label>Year Graduate</label>
          <select
            className="add_inp11"
            name="graduate_yearGradPDS[]"
            onChange={getAllElementaryInput}
          >
            {listYear &&
              listYear.length > 0 &&
              listYear.map((item) =>
                item === GraduateYear[grad_ctr] ? (
                  <option key={item} value={item} selected>
                    {item}
                  </option>
                ) : (
                  <option key={item} value={item}>
                    {item}
                  </option>
                )
              )}
          </select>
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Scholarships/Academic Honors Received</label>
          <input
            type="text"
            placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
            defaultValue={GraduateAward[grad_ctr]}
            name="graduate_awardsPDS[]"
            onChange={getAllElementaryInput}
            className="add_inp11"
          />
        </div>
        <div className="line_educ" style={{ clear: "both" }}></div>
      </div>
    );
  });

  //Add civil service eligibility entry
  const [civilEntry, setCivilEntry] = useState([{ id: uuidv4() }]);
  const handleAddCivilEntry = () => {
    setCivilEntry([...civilEntry, { id: uuidv4() }]);
  };
  const CivilEntrySize = civilEntry.length - 1;
  const sliceCivilEntry = civilEntry.slice(0, CivilEntrySize);
  const handleRemoveCivilEntry = (id) => {
    const values = [...civilEntry];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setCivilEntry(values);
  };

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
    var sliceCseDateExam = inputCseDateExam.slice(0, -5);
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
    var sliceCseDateVal = inputCseDateVal.slice(0, -5);
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
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        key={cse_ctr}
      >
        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>
            Career Service/ RA 1080 (BOARD/ BAR) Under Special Laws/ CES/ CSEE
            Barangay Eligibility / Driver's License
          </label>
          <input
            style={{ textTransform: "capitalize" }}
            type="text"
            placeholder="Type N/A if Not Applicable"
            defaultValue={CseBoard[cse_ctr]}
            name="boardCSE[]"
            onChange={getAllCSEinput}
            className="add_inp11"
          />
        </div>

        <div className="dateSchool_input">
          <label>Rating (If applicable)</label>
          <input
            style={{ textTransform: "capitalize" }}
            type="text"
            placeholder="Type N/A if Not Applicable"
            defaultValue={CseRating[cse_ctr]}
            name="ratingCSE[]"
            onChange={getAllCSEinput}
            className="add_inp11"
          />
        </div>

        <div className="dateSchool_input">
          <label>Date of Examination / Conferment (Leave blank if N/A)</label>
          <input
            style={{ textTransform: "uppercase" }}
            type="date"
            placeholder="Type N/A if Not Applicable"
            defaultValue={CseDateExam[cse_ctr]}
            name="dateExamCSE[]"
            onChange={getAllCSEinput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>Place of Examination / Conferment</label>
          <input
            style={{ textTransform: "capitalize" }}
            type="text"
            placeholder="Type N/A if Not Applicable"
            defaultValue={CsePlaceExam[cse_ctr]}
            name="placeExamCSE[]"
            onChange={getAllCSEinput}
            className="add_inp11"
          />
        </div>

        <div className="civil_license">
          <h3>License (If applicable) : </h3>

          <div className="dateSchool_input">
            <label>Number</label>
            <input
              style={{ textTransform: "Uppercase" }}
              type="text"
              placeholder="Type N/A if Not Applicable"
              defaultValue={CseLicense[cse_ctr]}
              name="licenseCSE[]"
              onChange={getAllCSEinput}
              className="add_inp11"
            />
          </div>
          <div className="dateSchool_input11">
            <label>Date of Validity (Leave blank if N/A)</label>
            <input
              style={{ textTransform: "uppercase" }}
              type="date"
              placeholder="Type N/A if Not Applicable"
              defaultValue={CseDateVal[cse_ctr]}
              name="dateValidityCSE[]"
              onChange={getAllCSEinput}
              className="add_inp11"
              min="1950-01-01"
          />
          </div>
        </div>
        <div className="line_educ"></div>
      </Grid>
    );
  });

  //Hook for getting pds4
  //Add work experience entry
  const [workEntry, setWorkEntry] = useState([{ id: uuidv4() }]);
  const handleAddWorkEntry = () => {
    setWorkEntry([...workEntry, { id: uuidv4() }]);
  };
  const WorkEntrySize = workEntry.length - 1;
  const sliceWorkEntry = workEntry.slice(0, WorkEntrySize);
  const handleRemoveWorkEntry = (id) => {
    const values = [...workEntry];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setWorkEntry(values);
  };

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
    var sliceweFrom = inputweFrom.slice(0, -5);
    const weFrom_Array = sliceweFrom.split(" |:| ");
    setweFrom(weFrom_Array);
  };
  const [weTo, setweTo] = useState([]);
  const loadweTo = async () => {
    var inputweTo = document.getElementById("WE_dateTo").value;
    var sliceweTo = inputweTo.slice(0, -5);
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
      <Grid
        key={we_ctr}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <div className="dateSchool_input11">
          <label>Inclusive Dates (From) [Leave blank if N/A]</label>
          <input
            style={{ textTransform: "Uppercase" }}
            type="date"
            defaultValue={weFrom[we_ctr]}
            name="dateFromWE[]"
            onChange={getAllWEinput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input11">
          <label>Inclusive Dates (To) [Leave blank if N/A]</label>
          <input
            style={{ textTransform: "Uppercase" }}
            type="date"
            defaultValue={weTo[we_ctr]}
            name="dateToWE[]"
            onChange={getAllWEinput}
            className="add_inp11"
            min="1950-01-01"
            max={maxDateInput}
          />
        </div>

        <div className="dateSchool_input11">
          <label>Position Title (Write in full / Do not abbreviate)</label>
          <input
            style={{ textTransform: "capitalize" }}
            type="text"
            placeholder="Type N/A if Not Applicable"
            defaultValue={wePosition[we_ctr]}
            name="positionWE[]"
            onChange={getAllWEinput}
            className="add_inp11"
          />
        </div>

        <div className="dateSchool_input" style={{ width: "100%" }}>
          <label>
            Department / Agency / Office / Company (Write in full / Do not
            abbreviate)
          </label>
          <input
            style={{ textTransform: "capitalize" }}
            type="text"
            className="add_inp11"
            placeholder="Type N/A if Not Applicable"
            defaultValue={weDepartment[we_ctr]}
            name="deptWE[]"
            onChange={getAllWEinput}
          />
        </div>

        <div className="dateSchool_input">
          <label>Monthly Salary</label>
          <input
            style={{ textTransform: "uppercase" }}
            type="text"
            className="add_inp11"
            placeholder="Type N/A if Not Applicable"
            defaultValue={weMonthly[we_ctr]}
            name="monthlyWE[]"
            onChange={getAllWEinput}
          />
        </div>

        <div className="dateSchool_input22">
          <label>
            Salary/ Job/ Pay Grade (if applicable) & Step (Format "00-0")/
            Increment
          </label>
          <input
            style={{ textTransform: "capitalize" }}
            type="text"
            className="add_inp11"
            placeholder="Type N/A if Not Applicable"
            defaultValue={weSalary[we_ctr]}
            name="salaryWE[]"
            onChange={getAllWEinput}
          />
        </div>

        <div className="dateSchool_input">
          <label>Status of Appointment</label>
          <select
            className="add_inp11"
            name="appointWE[]"
            onChange={getAllWEinput}
          >
            <option disabled>-Select N/A if not applicable-</option>
            {statusAppointment &&
              statusAppointment.length > 0 &&
              statusAppointment.map((item) =>
                item.label === weAppoint[we_ctr] ? (
                  <option key={item.label} value={item.label} selected>
                    {item.label}
                  </option>
                ) : (
                  <option key={item.label} value={item.label}>
                    {item.label}
                  </option>
                )
              )}
          </select>
        </div>

        <div className="dateSchool_input">
          <label>GOV'T SERVICE (Y/ N)</label>
          <select
            className="add_inp11"
            name="govtWE[]"
            onChange={getAllWEinput}
          >
            <option disabled>-Select N/A if not applicable-</option>
            {yn &&
              yn.length > 0 &&
              yn.map((item) =>
                item.label === weGov[we_ctr] ? (
                  <option key={item.label} value={item.label} selected>
                    {item.label}
                  </option>
                ) : (
                  <option key={item.label} value={item.label}>
                    {item.label}
                  </option>
                )
              )}
          </select>
        </div>
        <div className="line_educ"></div>
      </Grid>
    );
  });


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
                  <LightTooltip title="Dashboard">
                    <img
                      src={Dashboard_icon}
                      className="left_nav_minimize_img"
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
                  <LightTooltip title="My Profile">
                    <img
                      src={Profile_icon}
                      className="left_nav_minimize_img"
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
                  <LightTooltip title="Certificates">
                    <img
                      src={Certificate_icon}
                      className="left_nav_minimize_img"
                    />
                  </LightTooltip>
                </div>
              </Link>
            </div>

            <div className="link_disabler">
              <Link to="" style={{ textDecoration: "none", width: "100%" }}>
                <div className="navlink_container" id="profile_link">
                  <LightTooltip title="Account Setting">
                    <img
                      src={account_setting}
                      className="left_nav_minimize_img"
                    />
                  </LightTooltip>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logout_container navlink_container">
            <LightTooltip title="Sign Out">
              <img
                src={Logout_icon}
                className="left_nav_minimize_img"
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
          </div>

          <div className="form_container">
            <div
              className="step_content consent_form"
              style={{ display: "block" }}
            >
              {/*STEP1 --------------------------------------------------------------------------------------*/}
              {pds_step1}

              {/*STEP2 --------------------------------------------------------------------------------------*/}
              <div className="step_content step2_content">
                <p className="step_text">Step 2</p>
                <p className="step_desc">Enter your Educational Background</p>

                {/*ELEMENTARY --------------------------------------------------------------------------------------*/}
                <div className="info_div">
                  <img src={education_info} />
                  Elementary
                </div>
                {ElementaryContent}
                {sliceElemEntry.map((index) => (
                  <div id="for_append_elem" key={elem_ctr}>
                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Name of Elementary School *</label>
                      <input
                        type="text"
                        placeholder="Fields with * are required"
                        name="elem_namePDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Basic Education/Degree/Course *</label>
                      <input
                        type="text"
                        placeholder="Fields with * are required"
                        value="Elementary"
                        className="add_inp11"
                        disabled
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Date Attended (From) *</label>
                      <input
                        type="date"
                        name="elem_dateFromPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Date Attended (To) *</label>
                      <input
                        type="date"
                        name="elem_dateToPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>
                        Highest Level / Units Earned (If not graduated)
                      </label>
                      <input
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="elem_unitPDS[]"
                        className="add_inp11"
                        onChange={getAllElementaryInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Year Graduate *</label>
                      <select className="add_inp11" name="elem_yearGradPDS[]">
                        {listYear &&
                          listYear.length > 0 &&
                          listYear.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Scholarships/Academic Honors Received</label>
                      <input
                        type="text"
                        placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
                        name="elem_awardsPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>
                    <div className="line_educ" style={{ clear: "both" }}></div>
                  </div>
                ))}

                <input
                  type="hidden"
                  id="nameELEM_handler"
                  value=" |:| "
                  style={{ textTransform: "capitalize" }}
                />
                <input
                  type="hidden"
                  id="attainELEM_handler"
                  value="Elementary"
                />
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

                {/*SECONDARY --------------------------------------------------------------------------------------*/}
                <div className="info_div">
                  <img src={education_info} />
                  Secondary
                </div>
                {SecondaryContent}

                {sliceSecondEntry.map((index) => (
                  <div id="for_append_elem" key={sec_ctr}>
                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Name of School *</label>
                      <input
                        type="text"
                        placeholder="Fields with * are required"
                        name="second_namePDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Basic Education/Degree/Course *</label>
                      <select
                        className="add_inp11"
                        name="second_attainmentPDS[]"
                        onChange={getAllElementaryInput}
                      >
                        {secondaryAttainment &&
                          secondaryAttainment.length > 0 &&
                          secondaryAttainment.map((item) => (
                            <option key={item.label} value={item.label}>
                              {item.label}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="dateSchool_input">
                      <label>Date Attended (From) *</label>
                      <input
                        type="date"
                        name="second_dateFromPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                        min="1950-01-01"
                        max={maxDateInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Date Attended (To) *</label>
                      <input
                        type="date"
                        name="second_dateToPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                        min="1950-01-01"
                        max={maxDateInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>
                        Highest Level / Units Earned (If not graduated)
                      </label>
                      <input
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="second_unitPDS[]"
                        className="add_inp11"
                        onChange={getAllElementaryInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Year Graduate *</label>
                      <select
                        className="add_inp11"
                        name="second_yearGradPDS[]"
                        onChange={getAllElementaryInput}
                      >
                        {listYear &&
                          listYear.length > 0 &&
                          listYear.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Scholarships/Academic Honors Received</label>
                      <input
                        type="text"
                        placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
                        name="second_awardsPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>
                    <div className="line_educ" style={{ clear: "both" }}></div>
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
                <input
                  type="hidden"
                  id="dateFromSecond_handler"
                  value=" |:| "
                />
                <input type="hidden" id="dateToSecond_handler" value=" |:| " />
                <input type="hidden" id="unitsSecond_handler" value=" |:| " />
                <input
                  type="hidden"
                  id="yearGradSecond_handler"
                  value=" |:| "
                />
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
                    onClick={() =>
                      handleRemoveSecondaryEntry(secondaryEntry.id)
                    }
                  >
                    Remove
                  </button>
                  <button type="button" onClick={handleAddSecondaryEntry}>
                    Add another entry
                  </button>
                </div>

                {/*VOCATIONAL --------------------------------------------------------------------------------------*/}
                <div className="info_div">
                  <img src={education_info} />
                  Vocational/Trade Course
                </div>
                {VocationalContent}

                {sliceVocationalEntry.map((index) => (
                  <div id="for_append_elem" key={voc_ctr}>
                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Name of School </label>
                      <input
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="vocational_namePDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Basic Education/Degree/Course</label>
                      <input
                        type="text"
                        className="add_inp11"
                        placeholder="Type N/A if Not Applicable"
                        name="vocational_attainmentPDS[]"
                        onChange={getAllElementaryInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Date Attended (From)</label>
                      <input
                        type="date"
                        name="vocational_dateFromPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                        min="1950-01-01"
                        max={maxDateInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Date Attended (To)</label>
                      <input
                        type="date"
                        name="vocational_dateToPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                        min="1950-01-01"
                        max={maxDateInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>
                        Highest Level / Units Earned (If not graduated)
                      </label>
                      <input
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="vocational_unitPDS[]"
                        className="add_inp11"
                        onChange={getAllElementaryInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Year Graduate</label>
                      <select
                        className="add_inp11"
                        name="vocational_yearGradPDS[]"
                        onChange={getAllElementaryInput}
                      >
                        {listYear &&
                          listYear.length > 0 &&
                          listYear.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Scholarships/Academic Honors Received</label>
                      <input
                        type="hidden"
                        placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
                        name="vocational_awardsPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>
                    <div className="line_educ" style={{ clear: "both" }}></div>
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
                <input
                  type="hidden"
                  id="unitsVocational_handler"
                  value=" |:| "
                />
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

                {/*COLLEGE --------------------------------------------------------------------------------------*/}
                <div className="info_div">
                  <img src={education_info} />
                  College
                </div>
                {CollegeContent}
                {sliceCollegeEntry.map((index) => (
                  <div id="for_append_elem" key={col_ctr}>
                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Name of School *</label>
                      <input
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="college_namePDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Basic Education/Degree/Course *</label>
                      <input
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        className="add_inp11"
                        name="college_attainmentPDS[]"
                        onChange={getAllElementaryInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Date Attended (From) *</label>
                      <input
                        type="date"
                        name="college_dateFromPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                        min="1950-01-01"
                        max={maxDateInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>
                        Date Attended (To) [Leave blank if date is up to
                        present]
                      </label>
                      <input
                        type="date"
                        name="college_dateToPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                        min="1950-01-01"
                        max={maxDateInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>
                        Highest Level / Units Earned (If not graduated) *
                      </label>
                      <input
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="college_unitPDS[]"
                        className="add_inp11"
                        onChange={getAllElementaryInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Year Graduate *</label>
                      <select
                        className="add_inp11"
                        name="college_yearGradPDS[]"
                        onChange={getAllElementaryInput}
                      >
                        {listYear &&
                          listYear.length > 0 &&
                          listYear.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Scholarships/Academic Honors Received *</label>
                      <input
                        type="text"
                        placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
                        name="college_awardsPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>
                    <div className="line_educ" style={{ clear: "both" }}></div>
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
                <input
                  type="hidden"
                  id="dateFromCollege_handler"
                  value=" |:| "
                />
                <input type="hidden" id="dateToCollege_handler" value=" |:| " />
                <input type="hidden" id="unitsCollege_handler" value=" |:| " />
                <input
                  type="hidden"
                  id="yearGradCollege_handler"
                  value=" |:| "
                />
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

                {/*GRADUATE STUDIES --------------------------------------------------------------------------------------*/}
                <div className="info_div">
                  <img src={education_info} />
                  Graduate Studies
                </div>
                {GraduateContent}
                {sliceGraduateEntry.map((index) => (
                  <div id="for_append_elem" key={grad_ctr}>
                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Name of School</label>
                      <input
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="graduate_namePDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Basic Education/Degree/Course</label>
                      <input
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        className="add_inp11"
                        name="graduate_attainmentPDS[]"
                        onChange={getAllElementaryInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Date Attended (From)</label>
                      <input
                        type="date"
                        name="graduate_dateFromPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                        min="1950-01-01"
                        max={maxDateInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>
                        Date Attended (To) [Leave blank if date is up to
                        present]
                      </label>
                      <input
                        type="date"
                        name="graduate_dateToPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                        min="1950-01-01"
                        max={maxDateInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>
                        Highest Level / Units Earned (If not graduated)
                      </label>
                      <input
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="graduate_unitPDS[]"
                        className="add_inp11"
                        onChange={getAllElementaryInput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Year Graduate</label>
                      <select
                        className="add_inp11"
                        name="graduate_yearGradPDS[]"
                        onChange={getAllElementaryInput}
                      >
                        {listYear &&
                          listYear.length > 0 &&
                          listYear.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Scholarships/Academic Honors Received</label>
                      <input
                        type="text"
                        placeholder="(ex. 1st honorable mention) Type N/A if Not Applicable"
                        name="graduate_awardsPDS[]"
                        onChange={getAllElementaryInput}
                        className="add_inp11"
                      />
                    </div>
                    <div className="line_educ" style={{ clear: "both" }}></div>
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
                <input
                  type="hidden"
                  id="dateToGraduate_handler"
                  value=" |:| "
                />
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

                {pds_step2}
              </div>

              {/*STEP 3 --------------------------------------------------------------------------------------*/}
              <div className="step_content step3_content">
                <p className="step_text">Step 3</p>
                <p className="step_desc">
                  Enter your Civil Service Eligibility
                </p>

                <div className="info_div">
                  <img src={service_info} />
                  Civil Service Eligibility
                </div>

                {cseContent}
                {sliceCivilEntry.map((index) => (
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    key={cse_ctr}
                  >
                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>
                        Career Service/ RA 1080 (BOARD/ BAR) Under Special Laws/
                        CES/ CSEE Barangay Eligibility / Driver's License
                      </label>
                      <input
                        style={{ textTransform: "capitalize" }}
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="boardCSE[]"
                        onChange={getAllCSEinput}
                        className="add_inp11"
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Rating (If applicable)</label>
                      <input
                        style={{ textTransform: "capitalize" }}
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="ratingCSE[]"
                        onChange={getAllCSEinput}
                        className="add_inp11"
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>
                        Date of Examination / Conferment (Leave blank if N/A)
                      </label>
                      <input
                        style={{ textTransform: "Uppercase" }}
                        type="date"
                        placeholder="Type N/A if Not Applicable"
                        name="dateExamCSE[]"
                        onChange={getAllCSEinput}
                        className="add_inp11"
                        min="1950-01-01"
                        max={maxDateInput}
                      />
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>Place of Examination / Conferment</label>
                      <input
                        style={{ textTransform: "capitalize" }}
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="placeExamCSE[]"
                        onChange={getAllCSEinput}
                        className="add_inp11"
                      />
                    </div>

                    <div className="civil_license">
                      <h3>License (If applicable) : </h3>

                      <div className="dateSchool_input">
                        <label>Number</label>
                        <input
                          style={{ textTransform: "Uppercase" }}
                          type="text"
                          placeholder="Type N/A if Not Applicable"
                          name="licenseCSE[]"
                          onChange={getAllCSEinput}
                          className="add_inp11"
                        />
                      </div>
                      <div className="dateSchool_input11">
                        <label>Date of Validity (Leave blank if N/A)</label>
                        <input
                          style={{ textTransform: "Uppercase" }}
                          type="date"
                          name="dateValidityCSE[]"
                          onChange={getAllCSEinput}
                          className="add_inp11"
                          min="1950-01-01"
                        />
                      </div>
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
                {pds_step3}
              </div>

              {/*STEP 4 --------------------------------------------------------------------------------------*/}
              <div className="step_content step4_content">
                <p className="step_text">Step 4</p>
                <p className="step_desc">Enter your Work Experience</p>

                <div className="info_div">
                  <img src={work_info} />
                  Work Experience
                </div>

                {weContent}
                {sliceWorkEntry.map((index) => (
                  <Grid
                    key={we_ctr}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <div className="dateSchool_input11">
                      <label>Inclusive Dates (From) [Leave blank if N/A]</label>
                      <input
                        style={{ textTransform: "Uppercase" }}
                        type="date"
                        name="dateFromWE[]"
                        onChange={getAllWEinput}
                        className="add_inp11"
                        min="1950-01-01"
                        max={maxDateInput}
                      />
                    </div>

                    <div className="dateSchool_input11">
                      <label>Inclusive Dates (To) [Leave blank if N/A]</label>
                      <input
                        style={{ textTransform: "Uppercase" }}
                        type="date"
                        name="dateToWE[]"
                        onChange={getAllWEinput}
                        className="add_inp11"
                        min="1950-01-01"
                        max={maxDateInput}
                      />
                    </div>

                    <div className="dateSchool_input11">
                      <label>
                        Position Title (Write in full / Do not abbreviate)
                      </label>
                      <input
                        style={{ textTransform: "capitalize" }}
                        type="text"
                        placeholder="Type N/A if Not Applicable"
                        name="positionWE[]"
                        onChange={getAllWEinput}
                        className="add_inp11"
                      />
                    </div>

                    <div className="dateSchool_input" style={{ width: "100%" }}>
                      <label>
                        Department / Agency / Office / Company (Write in full /
                        Do not abbreviate)
                      </label>
                      <input
                        style={{ textTransform: "capitalize" }}
                        type="text"
                        className="add_inp11"
                        placeholder="Type N/A if Not Applicable"
                        name="deptWE[]"
                        onChange={getAllWEinput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Monthly Salary</label>
                      <input
                        style={{ textTransform: "uppercase" }}
                        type="text"
                        className="add_inp11"
                        placeholder="Type N/A if Not Applicable"
                        name="monthlyWE[]"
                        onChange={getAllWEinput}
                      />
                    </div>

                    <div className="dateSchool_input22">
                      <label>
                        Salary/ Job/ Pay Grade (if applicable) & Step (Format
                        "00-0")/ Increment
                      </label>
                      <input
                        style={{ textTransform: "capitalize" }}
                        type="text"
                        className="add_inp11"
                        placeholder="Type N/A if Not Applicable"
                        name="salaryWE[]"
                        onChange={getAllWEinput}
                      />
                    </div>

                    <div className="dateSchool_input">
                      <label>Status of Appointment</label>
                      <select
                        className="add_inp11"
                        name="appointWE[]"
                        onChange={getAllWEinput}
                      >
                        <option disabled>-Select N/A if not applicable-</option>
                        {statusAppointment &&
                          statusAppointment.length > 0 &&
                          statusAppointment.map((item) => (
                            <option key={item.label} value={item.label}>
                              {item.label}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="dateSchool_input">
                      <label>GOV'T SERVICE (Y/ N)</label>
                      <select
                        className="add_inp11"
                        name="govtWE[]"
                        onChange={getAllWEinput}
                      >
                        <option disabled>-Select N/A if not applicable-</option>
                        {yn &&
                          yn.length > 0 &&
                          yn.map((item) => (
                            <option key={item.label} value={item.label}>
                              {item.label}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="line_educ"></div>
                  </Grid>
                ))}
                {pds_step4}
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

            <button type="button" className="back_stepper back_stepper1" style={{ whiteSpace: "nowrap" }} onClick={() =>window.location.replace("http://localhost:3000/PersonalInformation")} >
               &#8592; &nbsp;&nbsp;&nbsp; My Profile
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
              className="next_stepper next_stepper1"
              onClick={validatorPDS1V1}
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
              type="submit"
              className="next_stepper next_stepper4"
              style={{ display: "none" }}
              onMouseOver={() => {
                getAllElementaryInput();
                getAllCSEinput();
                getAllWEinput();
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
            You have successfully updated your personal profile information!
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
var listYear = ["N/A", "TO DATE"];
for (let i = today[2]; i >= 1950; i--) {
  listYear.push(i.toString());
}
//Secondary Attainment
const secondaryAttainment = [
  { label: "N/A" },
  { label: "JUNIOR HIGH SCHOOL" },
  { label: "SENIOR HIGH SCHOOL" },
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
