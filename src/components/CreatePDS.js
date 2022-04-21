import * as React from 'react';
import '../css/createPDS.css';
import LeftNavbarFaculty from '../navbarsUI/LeftNavbarFaculty';
import TextField from '@mui/material/TextField';
import basic_info from '../images/icons/basic_info.svg';
import address_info from '../images/icons/address_info.svg';
import conctact_info from '../images/icons/conctact_info.svg'
import service_info from '../images/icons/service_info.svg'
import work_info from '../images/icons/work_info.svg';
import LandD_info from '../images/icons/LandD_info.svg'
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import {regions, provinces, cities, barangays} from 'select-philippines-address';
import {useEffect, useState} from "react";
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import PdsFormStepModal from '../modalsUi/PdsFormModal';
import education_info from '../images/icons/education_info.svg'
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import getAllElementaryInput from '../functions/GetAllEducInput';
import getAllCSEinput from '../functions/GetAllCSEinput';
import validatorPDS1 from '../functions/PdsStep1Validator';
import validatorPDS2 from '../functions/PdsStep2Validator';
import validatorPDS3 from '../functions/PdsStep3Validator';
import validatorPDS4 from '../functions/PdsStep4Validator';
import getAllWEinput from '../functions/GetAllWEinput';
import getAllLDinput from '../functions/GetAllLDinput';
import { Link } from "react-router-dom";
import axios from 'axios';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CreatePersonalDataSheet(){

    document.title = "CICT | Create Personal Data Sheet";
    setTimeout(function(){
        document.getElementById("pds_link").classList.add('nav_active');
        var left_nav_minimize = document.getElementsByClassName('left_nav_minimize');
        for(var i=0; i< left_nav_minimize.length; i++){
            left_nav_minimize[i].style.display = "none";
        }
        var navlink_container = document.getElementsByClassName('navlink_container');
        for(var i=0; i< navlink_container.length; i++){
            navlink_container[i].style.justifyContent = "center";
        }
        var left_nav_minimize_img = document.getElementsByClassName('left_nav_minimize_img');
        for(var i=0; i< left_nav_minimize_img.length; i++){
            left_nav_minimize_img[i].style.marginLeft = "0%";
        }

        document.getElementById("leftnav_drawerBTN").style.display="none"
    },10);

    var today = moment().format('L'); 
    today = today.split('/');
    var maxDateInput = today[2]+"-"+today[0]+"-"+today[1];

    //Validate Phone number
    function phonenumber(){
        var phone = document.getElementById("input_phone").value;
        var phoneno = /^(09|\+639)\d{9}$/;
        if( phone.length !==0 && phone.length !== 11){
              document.getElementById("contact_validator").style.visibility = "visible";      
        }
        else if( phone.length === 0 ){
          document.getElementById("contact_validator").style.visibility = "hidden";    
        }
        else if(!phone.match(phoneno)){
            document.getElementById("contact_validator").style.visibility = "visible";      
        }
        else{
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
        regions().then(response => {
            setRegion(response);
            sameAddressFunction();
        });
    }
    const province = (e) => {
        setRegionAddr(e.target.selectedOptions[0].text);
        provinces(e.target.value).then(response => {
            setProvince(response);
            setCity([]);
            setBarangay([]);
            sameAddressFunction()
        });
    }
    const city = (e) => {
        setProvinceAddr(e.target.selectedOptions[0].text);
        cities(e.target.value).then(response => {
            setCity(response);
            sameAddressFunction()
        });
    }
    const barangay = (e) => {
        setCityAddr(e.target.selectedOptions[0].text);
        barangays(e.target.value).then(response => {
            setBarangay(response);
            sameAddressFunction()
        });
    }
    const brgy = (e) => {
        setBarangayAddr(e.target.selectedOptions[0].text);
        sameAddressFunction()
    }

    useEffect(() => {
        region();
        sameAddressFunction();
    }, [])

    const region1 = () => {
        regions().then(response => {
            setRegion1(response);
        });
    }
    const province1 = (e) => {
        setRegionAddr1(e.target.selectedOptions[0].text);
        provinces(e.target.value).then(response => {
            setProvince1(response);
            setCity1([]);
            setBarangay1([]);
            sameAddressFunction();
        });
    }
    const city1 = (e) => {
        setProvinceAddr1(e.target.selectedOptions[0].text);
        cities(e.target.value).then(response => {
            setCity1(response);
            sameAddressFunction();
        });
    }
    const barangay1 = (e) => {
        setCityAddr1(e.target.selectedOptions[0].text);
        barangays(e.target.value).then(response => {
            setBarangay1(response);
            sameAddressFunction();
        });
    }
    const brgy1 = (e) => {
        setBarangayAddr1(e.target.selectedOptions[0].text);
        sameAddressFunction();
    }

    useEffect(() => {
        region1()
        sameAddressFunction();
    }, [])


    //If resident and present address are same
    function sameAddressFunction(){    
       var checkBox = document.getElementById("address_checkbox");
       var notCheck = document.getElementsByClassName('address_notcheck');
       var check = document.getElementsByClassName('address_check');
       if (checkBox.checked == true){
          for(var i=0; i< notCheck.length; i++){
              notCheck[i].style.display = "none";
              check[i].style.display = "block";
          }
          var inp1 = document.getElementsByClassName("add_inp1")[0].value;
          var inp2 = document.getElementsByClassName("add_inp2")[0].value;
          var inp3 = document.getElementsByClassName("add_inp3")[0].value;
          var inp8 = document.getElementsByClassName("add_inp8")[0].value;
          document.getElementsByClassName('add1_inp1')[1].value = inp1;
          document.getElementsByClassName('add2_inp2')[1].value = inp2;
          document.getElementsByClassName('add3_inp3')[1].value = inp3;
          document.getElementsByClassName('add4_inp4')[1].value = regionAddr;
          document.getElementsByClassName('add5_inp5')[1].value = provinceAddr;
          document.getElementsByClassName('add6_inp6')[1].value = cityAddr;
          document.getElementsByClassName('add7_inp7')[1].value = barangayAddr;
          document.getElementsByClassName('add8_inp8')[1].value = inp8;
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
          for(var i=0; i< notCheck.length; i++){
            notCheck[i].style.display = "block";
            check[i].style.display = "none";
          }
          var inp1 = document.getElementsByClassName("add_inp1")[0].value;
          var inp2 = document.getElementsByClassName("add_inp2")[0].value;
          var inp3 = document.getElementsByClassName("add_inp3")[0].value;
          var inp8 = document.getElementsByClassName("add_inp8")[0].value;
          document.getElementsByClassName('add1_inp1')[1].value = inp1;
          document.getElementsByClassName('add2_inp2')[1].value = inp2;
          document.getElementsByClassName('add3_inp3')[1].value = inp3;
          document.getElementsByClassName('add4_inp4')[1].value = regionAddr;
          document.getElementsByClassName('add5_inp5')[1].value = provinceAddr;
          document.getElementsByClassName('add6_inp6')[1].value = cityAddr;
          document.getElementsByClassName('add7_inp7')[1].value = barangayAddr;
          document.getElementsByClassName('add8_inp8')[1].value = inp8;
          document.getElementsByClassName('add8_inp8')[1].value = inp8;
          document.getElementById("add_handler1").value = inp1;
          document.getElementById("add_handler2").value = inp2;
          document.getElementById("add_handler3").value = inp3;
          document.getElementById("add_handler4").value = regionAddr;
          document.getElementById("add_handler5").value = provinceAddr;
          document.getElementById("add_handler6").value = cityAddr;
          document.getElementById("add_handler7").value = barangayAddr;
          document.getElementById("add_handler8").value = inp8;
          document.getElementById("add_handler9").value = document.getElementsByClassName('add1_inp1')[0].value;
          document.getElementById("add_handler10").value = document.getElementsByClassName('add2_inp2')[0].value;
          document.getElementById("add_handler11").value = document.getElementsByClassName('add3_inp3')[0].value;
          document.getElementById("add_handler12").value = regionAddr1;
          document.getElementById("add_handler13").value = provinceAddr1;
          document.getElementById("add_handler14").value = cityAddr1;
          document.getElementById("add_handler15").value = barangayAddr1;
          document.getElementById("add_handler16").value = document.getElementsByClassName('add8_inp8')[0].value;
      }
    }


    //Getting users age in input
    function getAge(){
        var bdate_input = document.getElementById("bdate_input").value;  
        var dob = new Date(bdate_input);  
        var month_diff = Date.now() - dob.getTime();  //calculate month difference from current date in time    
        var age_dt = new Date(month_diff);            //convert the calculated difference in date format  
        var year = age_dt.getUTCFullYear();           //extract year from date  
        var age = Math.abs(year - 1970);              //now calculate the age of the user   
        document.getElementById("age_input").innerHTML =  age; 
    }

    //Add elementary entry
    const [elemEntry, setElemEntry] = useState([
      {id: uuidv4()}
    ])
    const handleAddElemEntry = () => {
      setElemEntry([...elemEntry, {  id: uuidv4() }])
    }
    const handleRemoveElemEntry = id => {
      const values  = [...elemEntry];
      values.splice(values.findIndex(value => value.id === id), 1);
      setElemEntry(values);
    }

    //Add secondary entry
    const [secondaryEntry, setSecondaryEntry] = useState([
      {id: uuidv4()}
    ])
    const handleAddSecondaryEntry = () => {
      setSecondaryEntry([...secondaryEntry, {  id: uuidv4() }])
    }
    const handleRemoveSecondaryEntry = id => {
      const values  = [...secondaryEntry];
      values.splice(values.findIndex(value => value.id === id), 1);
      setSecondaryEntry(values);
    }    

    //Add vocational/trade course entry
    const [vocationalEntry, setVocationalEntry] = useState([
      {id: uuidv4()}
    ])
    const handleAddVocationalEntry = () => {
      setVocationalEntry([...vocationalEntry, {  id: uuidv4() }])
    }
    const handleRemoveVocationalEntry = id => {
      const values  = [...vocationalEntry];
      values.splice(values.findIndex(value => value.id === id), 1);
      setVocationalEntry(values);
    }    

    //Add college entry
    const [collegeEntry, setCollegeEntry] = useState([
      {id: uuidv4()}
    ])
    const handleAddCollegeEntry = () => {
      setCollegeEntry([...collegeEntry, {  id: uuidv4() }])
    }
    const handleRemoveCollegeEntry = id => {
      const values  = [...collegeEntry];
      values.splice(values.findIndex(value => value.id === id), 1);
      setCollegeEntry(values);
    }       
    
    //Add graduate studies entry
    const [graduateEntry, setGraduateEntry] = useState([
      {id: uuidv4()}
    ])
    const handleAddGraduateEntry = () => {
      setGraduateEntry([...graduateEntry, {  id: uuidv4() }])
    }
    const handleRemoveGraduateEntry = id => {
      const values  = [...graduateEntry];
      values.splice(values.findIndex(value => value.id === id), 1);
      setGraduateEntry(values);
    }  

    //Add civil service eligibility entry
    const [civilEntry, setCivilEntry] = useState([
      {id: uuidv4()}
    ])
    const handleAddCivilEntry = () => {
      setCivilEntry([...civilEntry, {  id: uuidv4() }])
    }
    const handleRemoveCivilEntry = id => {
      const values  = [...civilEntry];
      values.splice(values.findIndex(value => value.id === id), 1);
      setCivilEntry(values);
    }    
    
    //Add work experience entry
    const [workEntry, setWorkEntry] = useState([
      {id: uuidv4()}
    ])
    const handleAddWorkEntry = () => {
      setWorkEntry([...workEntry, {  id: uuidv4() }])
    }
    const handleRemoveWorkEntry = id => {
      const values  = [...workEntry];
      values.splice(values.findIndex(value => value.id === id), 1);
      setWorkEntry(values);
    }         

    //Add learn and development entry
    const [ldEntry, setldEntry] = useState([
      {id: uuidv4()}
    ])
    const handleAddldEntry = () => {
      setldEntry([...ldEntry, {  id: uuidv4() }])
    }
    const handleRemoveldEntry = id => {
      const values  = [...ldEntry];
      values.splice(values.findIndex(value => value.id === id), 1);
      setldEntry(values);
    }       

    //back stepper function
    function back2_stepper(){   
      document.getElementsByClassName("form_container")[0].scrollTop = 0
      document.getElementsByClassName("step1_content")[0].style.display = "block";
      document.getElementsByClassName("back_stepper1")[0].style.display = "block";
      document.getElementsByClassName("next_stepper1")[0].style.display = "block";
      document.getElementsByClassName("stepper1")[0].style.borderBottomRightRadius = "50px";
      document.getElementsByClassName("stepper1")[0].style.borderTopRightRadius = "50px";
      document.getElementsByClassName("stepper2")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("stepper2")[0].style.borderBottomRightRadius = "0px";
      document.getElementsByClassName("stepper2")[0].style.borderTopRightRadius = "0px";
      document.getElementsByClassName("circle2")[0].style.backgroundColor = "#C2C9CB";
      document.getElementsByClassName("circle2")[0].style.color = "#ffff";
      document.getElementsByClassName("stepper_text2")[0].style.color = "#C2C9CB";
      document.getElementsByClassName("back_stepper2")[0].style.display = "none";
      document.getElementsByClassName("next_stepper2")[0].style.display = "none";
      document.getElementsByClassName("step2_content")[0].style.display = "none";
    }
    function back3_stepper(){   
      document.getElementsByClassName("form_container")[0].scrollTop = 0
      document.getElementsByClassName("step2_content")[0].style.display = "block";
      document.getElementsByClassName("back_stepper2")[0].style.display = "block";
      document.getElementsByClassName("next_stepper2")[0].style.display = "block";
      document.getElementsByClassName("stepper2")[0].style.borderBottomRightRadius = "50px";
      document.getElementsByClassName("stepper2")[0].style.borderTopRightRadius = "50px";
      document.getElementsByClassName("stepper3")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("stepper3")[0].style.borderBottomRightRadius = "0px";
      document.getElementsByClassName("stepper3")[0].style.borderTopRightRadius = "0px";
      document.getElementsByClassName("circle3")[0].style.backgroundColor = "#C2C9CB";
      document.getElementsByClassName("circle3")[0].style.color = "#ffff";
      document.getElementsByClassName("stepper_text3")[0].style.color = "#C2C9CB";
      document.getElementsByClassName("back_stepper3")[0].style.display = "none";
      document.getElementsByClassName("next_stepper3")[0].style.display = "none";
      document.getElementsByClassName("step3_content")[0].style.display = "none";
    }
    function back4_stepper(){   
      document.getElementsByClassName("form_container")[0].scrollTop = 0
      document.getElementsByClassName("step3_content")[0].style.display = "block";
      document.getElementsByClassName("back_stepper3")[0].style.display = "block";
      document.getElementsByClassName("next_stepper3")[0].style.display = "block";
      document.getElementsByClassName("stepper3")[0].style.borderBottomRightRadius = "50px";
      document.getElementsByClassName("stepper3")[0].style.borderTopRightRadius = "50px";
      document.getElementsByClassName("stepper4")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("stepper4")[0].style.borderBottomRightRadius = "0px";
      document.getElementsByClassName("stepper4")[0].style.borderTopRightRadius = "0px";
      document.getElementsByClassName("circle4")[0].style.backgroundColor = "#C2C9CB";
      document.getElementsByClassName("circle4")[0].style.color = "#ffff";
      document.getElementsByClassName("stepper_text4")[0].style.color = "#C2C9CB";
      document.getElementsByClassName("back_stepper4")[0].style.display = "none";
      document.getElementsByClassName("next_stepper4")[0].style.display = "none";
      document.getElementsByClassName("step4_content")[0].style.display = "none";
    }
    function back5_stepper(){   
      document.getElementsByClassName("form_container")[0].scrollTop = 0
      document.getElementsByClassName("step4_content")[0].style.display = "block";
      document.getElementsByClassName("back_stepper4")[0].style.display = "block";
      document.getElementsByClassName("next_stepper4")[0].style.display = "block";
      document.getElementsByClassName("stepper4")[0].style.borderBottomRightRadius = "50px";
      document.getElementsByClassName("stepper4")[0].style.borderTopRightRadius = "50px";
      document.getElementsByClassName("stepper5")[0].style.backgroundColor = "transparent";
      document.getElementsByClassName("stepper5")[0].style.borderBottomRightRadius = "0px";
      document.getElementsByClassName("stepper5")[0].style.borderTopRightRadius = "0px";
      document.getElementsByClassName("circle5")[0].style.backgroundColor = "#C2C9CB";
      document.getElementsByClassName("circle5")[0].style.color = "#ffff";
      document.getElementsByClassName("stepper_text5")[0].style.color = "#C2C9CB";
      document.getElementsByClassName("back_stepper5")[0].style.display = "none";
      document.getElementsByClassName("next_stepper5")[0].style.display = "none";
      document.getElementsByClassName("step5_content")[0].style.display = "none";
    }

    //Submit PDS
    const submitPDSTaskForm=(e)=>{
      e.preventDefault();
      const data = new FormData() 
      
      //Step1
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
        tin_pds: document.getElementById("tin_pds").textContent.toUpperCase(),
        citizenship_pds: document.getElementById("citizenship_pds").value.toUpperCase(),
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
        add_handler10: document.getElementById("add_handler10").value.toUpperCase(),
        add_handler11: document.getElementById("add_handler11").value.toUpperCase(),
        add_handler12: document.getElementById("add_handler12").value.toUpperCase(),
        add_handler13: document.getElementById("add_handler13").value.toUpperCase(),
        add_handler14: document.getElementById("add_handler14").value.toUpperCase(),
        add_handler15: document.getElementById("add_handler15").value.toUpperCase(),
        add_handler16: document.getElementById("add_handler16").value.toUpperCase(),
        input_phone: document.getElementById("input_phone").value,
        tele_pds: document.getElementById("tele_pds").value,
      }
      //Sending the data to my backend
      axios.post('http://localhost/fms/createPDS.php',sendDataPDS)
        .then((result)=>{                   
            console.log(result.data.status)
      })//End of axios

      //for (let i = 0; i < document.getElementsByName("imgLD[]").length; i++) {
        //data.append("file[]", document.getElementsByName("imgLD[]")[i].files[0]);
      //}
      //data.append('file', imgURL)
      //let url = "http://localhost/fms/createPDS.php";
      //axios.post(url, data, {}).then(res => { 
        //console.log(res);
      //})


    }

    return (
        <div className="dashboard_container" style={{ backgroundColor: "#FFAA28"}}>
            <LeftNavbarFaculty/>  

            <form onSubmit={submitPDSTaskForm}>
            <div className="main_content" style={{ backgroundColor: "#EFF4F9"}}>
                <div className='stepper_container'>

                    <div className='stepper stepper1'>
                        <div className='circle circle1'><span className='circle_text1'>1</span></div>
                        <p  className='stepper_text1'>Personal Information</p>
                    </div>
                    <div className='stepper stepper2'>
                        <div className='circle circle2'><span className='circle_text2'>2</span></div>
                        <p className='stepper_text2'>Educational Background</p>
                    </div>
                    <div className='stepper stepper3'>
                        <div className='circle circle3'><span className='circle_text3'>3</span></div>
                        <p className='stepper_text3'>Civil Eligibility</p>
                    </div>
                    <div className='stepper stepper4'>
                        <div className='circle circle4'><span className='circle_text4'>4</span></div>
                        <p className='stepper_text4'>Work Experience</p>
                    </div>
                    <div className='stepper stepper5'>
                        <div className='circle circle5'><span className='circle_text5'>5</span></div>
                        <p className='stepper_text5'>Learning &#38; Development</p>
                    </div>

                </div>

                <div className='form_container'>
                    <div className='step_content step1_content' style={{display:"block"}}>
                            <p className='step_text'>Step 1</p>
                            <p className='step_desc'>Enter your Personal Information</p>
                           
                           <div className='info_div'>
                               <img src={basic_info}/>
                               Basic Information
                           </div>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <TextField label="First Name" variant="outlined" color="warning"  className='pds_input' placeholder='Fields with * are required' id="fname_pds" required inputProps={{style:{textTransform: "capitalize"}}}/>
                                    <TextField label="Middle Name" variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} id="mname_pds"/>
                                    <TextField label="Last Name" variant="outlined" color="warning"  className='pds_input' placeholder='Fields with * are required'  id="lname_pds" required inputProps={{style:{textTransform: "capitalize"}}}/>
                                    <TextField label="Name Extension (Optional)" variant="outlined" color="warning"  className='pds_input' placeholder='(ex. Jr., Sr., III)  Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} id="nameextension_pds"/>
                                    <TextField
                                        onChange={getAge}
                                        required
                                        id="bdate_input"
                                        className='pds_input' 
                                        label="Birthday"
                                        color="warning"
                                        type="date"
                                        defaultValue="2000-01-01"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                    />

                                    <div className='pds_inputAGE'>
                                      <p>Age : <span id="age_input">0</span> years old</p>
                                    </div>
                 
                                    <Autocomplete             
                                      className='pds_input'
                                      id="cob_pds"
                                      sx={{ width: "350px"}}
                                      options={countries}
                                      autoHighlight
                                      getOptionLabel={(option) => option.label}
                                      renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
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
                                            placeholder='Fields with * are required'
                                            required
                                            {...params}
                                            style={{width: "100%"}}
                                            color="warning"
                                            label="Country of Birth"
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            }}
                                
                                            />
                                         )}
                                    />

                                    <TextField label="Place of Birth" variant="outlined" color="warning"  className='pds_input' placeholder='(ex. Bulacan) Fields with * are required' id="cityOfBirth_pds" required inputProps={{style:{textTransform: "capitalize"}}}/>

                                    <Autocomplete
                                        id="gender_pds"
                                        options={gender}
                                        className='pds_input'
                                        sx={{ width: "350px"}}
                                        renderInput={(params) => <TextField color="warning" placeholder='Fields with * are required'
                                        required {...params} label="Gender" />}
                                    />

                                     <Autocomplete
                                        id="civil_pds"
                                        options={civil_status}
                                        className='pds_input'
                                        sx={{ width: "350px"}}
                                        renderInput={(params) => <TextField color="warning" placeholder='Fields with * are required'
                                        required {...params} label="Civil Status" />}
                                    />

                                    <TextField label="Height" variant="outlined" color="warning"  className='pds_input' placeholder='(cm) Fields with * are required' id="height_pds" required/>
                                    <TextField label="Weight" variant="outlined" color="warning"  className='pds_input' placeholder='(kg) Fields with * are required' id="weight_pds" required/>
                                    <TextField label="Blood Type" variant="outlined" color="warning"  className='pds_input' placeholder='Fields with * are required' id="blood_pds" required/>
                                    <TextField label="GSIS ID No." variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable' id="gsis_pds"/>
                                    <TextField label="PAG-IBIG ID No." variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable' id="pagibig_pds"/>
                                    <TextField label="PHILHEALTH No." variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable'  id="philhealth_pds"/>
                                    <TextField label="SSS No." variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable' id="sss_pds"/>
                                    <TextField label="TIN No." variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable' id="tin_pds"/>
                                    <Autocomplete
                                        id="citizenship_pds"
                                        options={nationality}
                                        className='pds_input'
                                        sx={{ width: "350px"}}
                                        renderInput={(params) => <TextField color="warning" placeholder='Fields with * are required'
                                        required {...params} label="Citizenship" />}
                                    />
                                    <TextField label="Email Address" variant="outlined" color="warning"  className='pds_input' placeholder='Fields with * are required' id="email_pds" value={localStorage.getItem('email')} disabled/>
                                    <TextField label="Alternate Email Address" variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable'  id="al_email_pds"/>
                                </Grid>

                                <div className='info_div'>
                                    <img src={address_info}/>
                                    Resident Address
                                </div>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >

                                            <div className='address_input'>
                                                <label>House / Block / Lot No. :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add_inp1" onKeyUp={sameAddressFunction} id="House_pds"/>
                                            </div>

                                            <div className='address_input'>
                                                <label>Street :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add_inp2" onKeyUp={sameAddressFunction} id="street_pds"/>
                                            </div>
                         
                                            <div className='address_input'>
                                                <label>Subdivision / Village :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add_inp3" onKeyUp={sameAddressFunction} id="subdi_pds"/>
                                            </div>             
                 
                                            <div className='address_input'>
                                            <label>Region (Required) :</label>
                                            <select onChange={province} onSelect={region} className="add_inp4">
                                                    <option disabled>Select Region</option>
                                                    {regionData && regionData.length > 0 && regionData.map((item) => <option
                                                    key={item.region_code} value={item.region_code}>{item.region_name}</option>)}
                                            </select>
                                            </div>

                                            <div className='address_input'>
                                            <label>Province (Required) :</label>
                                            <select onChange={city} className="add_inp5" id="province1_pds">
                                                    <option value="" hidden>Select a Region first</option>
                                                    {provinceData && provinceData.length > 0 && provinceData.map((item) => <option
                                                    key={item.province_code} value={item.province_code}>{item.province_name}</option>)}
                                            </select>
                                            </div>

                                            <div className='address_input'>
                                            <label>City / Municipality (Required) :</label>
                                            <select onChange={barangay} className="add_inp6" id="city1_pds">
                                                    <option value="" hidden>Select a Province first</option>
                                                    {cityData && cityData.length > 0 && cityData.map((item) => <option
                                                    key={item.city_code} value={item.city_code}>{item.city_name}</option>)}
                                            </select>
                                            </div>
                             
                                            <div className='address_input'>
                                            <label>Barangay (Required) :</label>
                                            <select onChange={brgy} className="add_inp7"  id="barangay1_pds">
                                                    <option value="" hidden>Select a City first</option>
                                                    {barangayData && barangayData.length > 0 && barangayData.map((item) => <option
                                                    key={item.brgy_code} value={item.brgy_code}>{item.brgy_name}</option>)}
                                            </select>
                                            </div>

                                            <div className='address_input'>
                                                <label>ZIP Code (Required) :</label>
                                                <input type="number" placeholder='ex. 3003' className="add_inp8" onKeyUp={sameAddressFunction} id="zip1_pds"/>
                                            </div>

                                            <div style={{width:"100%",display:"flex",alignItems:"center",marginBottom:"1rem"}}>
                                            <Checkbox
                                                onClick={ sameAddressFunction}
                                                {...label}
                                                id="address_checkbox"
                                                sx={{
                                                    color: orange[400],
                                                    '&.Mui-checked': {
                                                    color: orange[600],
                                                    },
                                                    padding: 0,
                                                    margin: 0,
                                                    marginRight:"7px"
                                                    }}
                                            />
                                            Resident Address is the same as Permanent Address
                                            </div>

                                    </Grid>

                                <div className='info_div'>
                                    <img src={address_info}/>
                                    Permanent Address
                                </div>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="center"
                                        alignItems="center"
                                    >

                                            {/*Pag nahindi naka check yung checkbox */}
                                            <div className='address_input address_notcheck'>
                                                <label>House / Block / Lot No. :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add1_inp1" onKeyUp={sameAddressFunction} id="House1_pds"/>
                                            </div>
                                            <div className='address_input address_notcheck'>
                                                <label>Street :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add2_inp2" onKeyUp={sameAddressFunction} id="street1_pds"/>
                                            </div>                        
                                            <div className='address_input address_notcheck'>
                                                <label>Subdivision / Village :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add3_inp3" onKeyUp={sameAddressFunction}  id="subdi1_pds"/>
                                            </div>                                                                      
                                            <div className='address_input address_notcheck'>
                                            <label>Region (Required) :</label>
                                            <select onChange={province1} onSelect={region1} className="add4_inp4">
                                                    <option disabled>Select Region</option>
                                                    {regionData1 && regionData1.length > 0 && regionData1.map((item) => <option
                                                    key={item.region_code} value={item.region_code}>{item.region_name}</option>)}
                                            </select>
                                            </div>
                                            <div className='address_input address_notcheck'>
                                            <label>Province (Required) :</label>
                                            <select onChange={city1} className="add5_inp5" id="province2_pds">
                                                    <option value="" hidden>Select a Region first</option>
                                                    {provinceData1 && provinceData1.length > 0 && provinceData1.map((item) => <option
                                                    key={item.province_code} value={item.province_code}>{item.province_name}</option>)}
                                            </select>
                                            </div>
                                            <div className='address_input address_notcheck'>
                                            <label>City (Required) :</label>
                                            <select onChange={barangay1} className="add6_inp6" id="city2_pds">
                                                    <option value="" hidden>Select a Province first</option>
                                                    {cityData1 && cityData1.length > 0 && cityData1.map((item) => <option
                                                    key={item.city_code} value={item.city_code}>{item.city_name}</option>)}
                                            </select>
                                            </div>                             
                                            <div className='address_input address_notcheck'>
                                            <label>Barangay (Required) :</label>
                                            <select onChange={brgy1} className="add7_inp7" id="barangay2_pds">
                                                    <option value="" hidden>Select a City first</option>
                                                    {barangayData1 && barangayData1.length > 0 && barangayData1.map((item) => <option
                                                    key={item.brgy_code} value={item.brgy_code}>{item.brgy_name}</option>)}
                                            </select>
                                            </div>
                                            <div className='address_input address_notcheck'>
                                                <label>ZIP Code (Required) :</label>
                                                <input type="number" placeholder='ex. 3003' className="add8_inp8" onKeyUp={sameAddressFunction} id="zip2_pds"/>
                                            </div>

                                            {/*Pag naka check yung checkbox */}
                                            <div className='address_input address_check'>
                                                <label>House / Block / Lot No. :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add1_inp1" readOnly/>
                                            </div>
                                            <div className='address_input address_check'>
                                                <label>Street :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add2_inp2" readOnly/>
                                            </div>                      
                                            <div className='address_input address_check'>
                                                <label>Subdivision / Village :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add3_inp3" readOnly/>
                                            </div>
                                            <div className='address_input address_check'>
                                                <label>Region (Required) :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add4_inp4" readOnly/>
                                            </div>
                                            <div className='address_input address_check'>
                                                <label>Province (Required) :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add5_inp5"  readOnly/>
                                            </div>
                                            <div className='address_input address_check'>
                                                <label>City (Required) :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add6_inp6"  readOnly/>
                                            </div>
                                            <div className='address_input address_check'>
                                                <label>Barangay (Required) :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' className="add7_inp7"  readOnly/>
                                            </div>
                                            <div className='address_input address_check'>
                                                <label>ZIP Code (Required) :</label>
                                                <input type="number" placeholder='ex. 3003' className="add8_inp8"  readOnly/>
                                            </div>

                                            {/*Address input handler*/}
                                            <input type="hidden" id="add_handler1"/>
                                            <input type="hidden" id="add_handler2"/>
                                            <input type="hidden" id="add_handler3"/>
                                            <input type="hidden" id="add_handler4"/>
                                            <input type="hidden" id="add_handler5"/>
                                            <input type="hidden" id="add_handler6"/>
                                            <input type="hidden" id="add_handler7"/>
                                            <input type="hidden" id="add_handler8"/>
                                            <input type="hidden" id="add_handler9"/>
                                            <input type="hidden" id="add_handler10"/>
                                            <input type="hidden" id="add_handler11"/>
                                            <input type="hidden" id="add_handler12"/>
                                            <input type="hidden" id="add_handler13"/>
                                            <input type="hidden" id="add_handler14"/>
                                            <input type="hidden" id="add_handler15"/>
                                            <input type="hidden" id="add_handler16"/>
                                    </Grid>

                                <div className='info_div'>
                                    <img src={conctact_info}/>
                                    Contact Number(s)
                                </div>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <div style={{display:"flex", flexDirection :"column",margin:"0 10px"}} className='pds_input'>
                                    <TextField label="Mobile No." variant="outlined" color="warning"  placeholder='(093961XXXX6) Fields with * are required' type="number" required  style={{margin:"0", width:"100%"}} id="input_phone" onKeyUp={() => { phonenumber(); sameAddressFunction();}}/>
                                    <span id="contact_validator">Mobile No. is an invalid format.</span>
                                    </div>
                                    <div style={{display:"flex", flexDirection :"column",margin:"0 10px"}} className='pds_input'>
                                    <TextField label="Telephone No." variant="outlined" color="warning" style={{margin:"0", width:"100%"}} placeholder='Type N/A if Not Applicable' id="tele_pds"/>
                                    <span style={{fontSize:".9rem",visibility:"hidden"}}>Mobile No. is an invalid format.</span>
                                    </div>
                                </Grid>

                    </div>

                    <div className='step_content step2_content'>
                            <p className='step_text'>Step 2</p>
                            <p className='step_desc'>Enter your Educational Background</p>

                            <div className='info_div'>
                                <img src={education_info}/>
                                Elementary
                            </div>

                            { elemEntry.map(index => (
                            <div id='for_append_elem'>
                                  <TextField label="Name of Elementary School" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Fields with * are required' required inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="elem_namePDS[]"/>
                                  
                                  <TextField label="Basic Education/Degree/Course" variant="outlined" color="warning" className='pds_inputEduc'  required value="Elementary" disabled/>
                                  <TextField
                                        required
                                        onChange={getAllElementaryInput}
                                        name="elem_dateFromPDS[]"
                                        className='pds_inputEducSemi'
                                        label="Date Attended (From)"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <TextField
                                        required
                                        onChange={getAllElementaryInput}
                                        name="elem_dateToPDS[]"
                                        className='pds_inputEducSemi'
                                        label="Date Attended (To) [Leave blank if date is up to present]"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <Autocomplete
                                        options={listYear}
                                        className='pds_inputEducSemi'
                                        renderInput={(params) => <TextField color="warning" placeholder='Choose N/A if Not Applicable'
                                        {...params} label="Year Graduate" name="elem_yearGradPDS[]"/>}
                                  />
                                  <TextField label="Scholarships/Academic Honors Received" variant="outlined" color="warning" className='pds_inputEduc' placeholder='(ex. 1st honorable mention) Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="elem_awardsPDS[]"/>
                              <div className='line_educ'></div>       
                            </div>
                            )) }

                            <input type="hidden" id='nameELEM_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='attainELEM_handler'value="Elementary"/>
                            <input type="hidden" id='dateFromELEM_handler' value=" |:| "/>
                            <input type="hidden" id='dateToELEM_handler' value=" |:| "/>
                            <input type="hidden" id='yearGradELEM_handler' value=" |:| "/>
                            <input type="hidden" id='awardELEM_handler' value=" |:| " style={{textTransform:"capitalize"}}/>

                            <div className='entry_button'>
                              <button type="button" 
                                disabled={elemEntry.length === 1} 
                                onClick={() => handleRemoveElemEntry(elemEntry.id)}
                              >
                                  Remove
                              </button>   
                              <button type='button' onClick={handleAddElemEntry}>Add another entry</button>
                            </div>



                            {/*---------------------------------------------------------------------------------- */}
                            <div className='info_div'>
                                <img src={education_info}/>
                                Secondary
                            </div>

                            {secondaryEntry.map(index => (
                            <div id='for_append_elem'>
                                  <TextField label="Name of School" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Fields with * are required' required inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="second_namePDS[]"/>    
                                  <Autocomplete
                                        required
                                        options={secondaryAttainment}
                                        className='pds_inputEduc'
                                        renderInput={(params) => <TextField color="warning" placeholder='Fields with * are required'
                                        {...params} label="Basic Education/Degree/Course" name="second_attainmentPDS[]"/>}
                                  />
                                  <TextField
                                        required
                                        onChange={getAllElementaryInput}
                                        name="second_dateFromPDS[]"
                                        className='pds_inputEducSemi'
                                        label="Date Attended (From)"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <TextField
                                        required
                                        onChange={getAllElementaryInput}
                                        name="second_dateToPDS[]"
                                        className='pds_inputEducSemi'
                                        label="Date Attended (To) [Leave blank if date is up to present]"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <Autocomplete
                                        options={listYear}
                                        className='pds_inputEducSemi'
                                        renderInput={(params) => <TextField color="warning" placeholder='Choose N/A if Not Applicable'
                                        {...params} label="Year Graduate" name="second_yearGradPDS[]"/>}
                                  />
                                  <TextField label="Scholarships/Academic Honors Received" variant="outlined" color="warning" className='pds_inputEduc' placeholder='(ex. 1st honorable mention) Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="second_awardsPDS[]"/>
                                  <div className='line_educ'></div>       
                            </div>
                            )) }

                            <input type="hidden" id='nameSecond_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='attainSecond_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='dateFromSecond_handler' value=" |:| "/>
                            <input type="hidden" id='dateToSecond_handler' value=" |:| "/>
                            <input type="hidden" id='yearGradSecond_handler' value=" |:| "/>
                            <input type="hidden" id='awardSecond_handler' value=" |:| " style={{textTransform:"capitalize"}}/>


                            <div className='entry_button'>
                              <button type="button" 
                                disabled={secondaryEntry.length === 1} 
                                onClick={() => handleRemoveSecondaryEntry(secondaryEntry.id)}
                              >
                                  Remove
                              </button>   
                              <button type='button' onClick={handleAddSecondaryEntry}>Add another entry</button>
                            </div>

                        
                            {/*---------------------------------------------------------------------------------- */}
                            <div className='info_div'>
                                <img src={education_info}/>
                                Vocational / Trade Course
                            </div>

                            {vocationalEntry.map(index => (
                            <div id='for_append_elem'>
                                  <TextField label="Name of School" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="vocational_namePDS[]"/>    
                                  <TextField label="Basic Education/Degree/Course" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="vocational_attainmentPDS[]"/>    

                                  <TextField
                                        onChange={getAllElementaryInput}
                                        name="vocational_dateFromPDS[]"
                                        className='pds_inputEducSemi'
                                        label="Date Attended (From)"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <TextField
                                        onChange={getAllElementaryInput}
                                        name="vocational_dateToPDS[]"
                                        className='pds_inputEducSemi'
                                        label="Date Attended (To) [Leave blank if date is up to present]"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <Autocomplete
                                        options={listYear}
                                        onChange={getAllElementaryInput}
                                        className='pds_inputEducSemi'
                                        renderInput={(params) => <TextField color="warning" placeholder='Choose N/A if Not Applicable'
                                        {...params} label="Year Graduate" name="vocational_yearGradPDS[]"/>}
                                  />
                                  <TextField label="Scholarships/Academic Honors Received" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="vocational_awardsPDS[]"/>
                                  <div className='line_educ'></div>       
                            </div>
                            )) }

                            <input type="hidden" id='nameVocational_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='attainVocational_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='dateFromVocational_handler' value=" |:| "/>
                            <input type="hidden" id='dateToVocational_handler' value=" |:| "/>
                            <input type="hidden" id='yearGradVocational_handler' value=" |:| "/>
                            <input type="hidden" id='awardVocational_handler' value=" |:| " style={{textTransform:"capitalize"}}/>


                            <div className='entry_button'>
                              <button type="button" 
                                disabled={vocationalEntry.length === 1} 
                                onClick={() => handleRemoveVocationalEntry(vocationalEntry.id)}
                              >
                                  Remove
                              </button>   
                              <button type='button' onClick={handleAddVocationalEntry}>Add another entry</button>
                            </div>

                            {/*---------------------------------------------------------------------------------- */}
                            <div className='info_div'>
                                <img src={education_info}/>
                                College
                            </div>

                            {collegeEntry.map(index => (
                            <div id='for_append_elem'>
                                <TextField label="Name of School" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Fields with * are required' required inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="college_namePDS[]"/>    
                                <TextField label="Basic Education/Degree/Course" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Fields with * are required' inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="college_attainmentPDS[]" required/>    
                                <TextField
                                    required
                                    onChange={getAllElementaryInput}
                                    name="college_dateFromPDS[]"
                                    className='pds_inputEducSemi'
                                    label="Date Attended (From)"
                                    color="warning"
                                    type="date"
                                    inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                    InputLabelProps={{shrink: true,}}
                                />
                                <TextField
                                    required
                                    onChange={getAllElementaryInput}
                                    name="college_dateToPDS[]"
                                    className='pds_inputEducSemi'
                                    label="Date Attended (To) [Leave blank if date is up to present]"
                                    color="warning"
                                    type="date"
                                    inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                    InputLabelProps={{shrink: true,}}
                                />
                                <Autocomplete
                                    options={listYear}
                                    className='pds_inputEducSemi'
                                    renderInput={(params) => <TextField color="warning" placeholder='Choose N/A if Not Applicable'
                                    {...params} label="Year Graduate" name="college_yearGradPDS[]"/>}
                                />
                                <TextField label="Scholarships/Academic Honors Received" variant="outlined" color="warning" className='pds_inputEduc' placeholder='(ex. 1st honorable mention) Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="college_awardsPDS[]"/>
                                <div className='line_educ'></div>       
                            </div>
                            )) }

                            <input type="hidden" id='nameCollege_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='attainCollege_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='dateFromCollege_handler' value=" |:| "/>
                            <input type="hidden" id='dateToCollege_handler' value=" |:| "/>
                            <input type="hidden" id='yearGradCollege_handler' value=" |:| "/>
                            <input type="hidden" id='awardCollege_handler' value=" |:| " style={{textTransform:"capitalize"}}/>


                            <div className='entry_button'>
                              <button type="button" 
                                disabled={collegeEntry.length === 1} 
                                onClick={() => handleRemoveCollegeEntry(collegeEntry.id)}
                              >
                                  Remove
                              </button>   
                              <button type='button' onClick={handleAddCollegeEntry}>Add another entry</button>
                            </div>

                            {/*---------------------------------------------------------------------------------- */}
                            <div className='info_div'>
                                <img src={education_info}/>
                                Graduate Studies
                            </div>

                            {graduateEntry.map(index => (
                            <div id='for_append_elem'>
                                  <TextField label="Name of School" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="graduate_namePDS[]"/>    
                                  <TextField label="Basic Education/Degree/Course" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="graduate_attainmentPDS[]"/>    

                                  <TextField
                                        onChange={getAllElementaryInput}
                                        name="graduate_dateFromPDS[]"
                                        className='pds_inputEducSemi'
                                        label="Date Attended (From)"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <TextField
                                        onChange={getAllElementaryInput}
                                        name="graduate_dateToPDS[]"
                                        className='pds_inputEducSemi'
                                        label="Date Attended (To) [Leave blank if date is up to present]"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <Autocomplete
                                        options={listYear}
                                        onChange={getAllElementaryInput}
                                        className='pds_inputEducSemi'
                                        renderInput={(params) => <TextField color="warning" placeholder='Choose N/A if Not Applicable'
                                        {...params} label="Year Graduate" name="graduate_yearGradPDS[]"/>}
                                  />
                                  <TextField label="Scholarships/Academic Honors Received" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} onChange={getAllElementaryInput} name="graduate_awardsPDS[]"/>
                                  <div className='line_educ'></div>       
                            </div>
                            )) }

                            <input type="hidden" id='nameGraduate_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='attainGraduate_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='dateFromGraduate_handler' value=" |:| "/>
                            <input type="hidden" id='dateToGraduate_handler' value=" |:| "/>
                            <input type="hidden" id='yearGradGraduate_handler' value=" |:| "/>
                            <input type="hidden" id='awardGraduate_handler' value=" |:| " style={{textTransform:"capitalize"}}/>


                            <div className='entry_button'>
                              <button type="button" 
                                disabled={graduateEntry.length === 1} 
                                onClick={() => handleRemoveGraduateEntry(graduateEntry.id)}
                              >
                                  Remove
                              </button>   
                              <button type='button' onClick={handleAddGraduateEntry}>Add another entry</button>
                            </div>                            
                
                    </div>

                    <div className='step_content step3_content'>
                            <p className='step_text'>Step 3</p>
                            <p className='step_desc'>Enter your Civil Service Eligibility</p>

                            <div className='info_div'>
                                <img src={service_info}/>
                                Civil Service Eligibility
                            </div>

                            {civilEntry.map(index => (
                            <Grid
                              container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                            >
                                <TextField label="Career Service/ RA 1080 (BOARD/ BAR) Under Special Laws/ CES/ CSEE Barangay Eligibility / Driver's License" variant="outlined" color="warning" className='pds_inputEducSemi' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} name="boardCSE[]" onChange={getAllCSEinput}/>    

                                <TextField label="Rating (If applicable)" variant="outlined" color="warning" className='pds_inputEducSemi' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} name="ratingCSE[]" onChange={getAllCSEinput}/>    
                                <TextField
                                    onChange={getAllCSEinput}
                                    name="dateExamCSE[]"
                                    className='pds_inputEducSemi'
                                    label="Date of Examination / Conferment (Leave blank if N/A)"
                                    color="warning"
                                    type="date"
                                    inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                    InputLabelProps={{shrink: true,}}
                                  />
                                 <TextField label="Place of Examination / Conferment" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} name="placeExamCSE[]" onChange={getAllCSEinput}/>   

                                 <div className='civil_license'>
                                   <h3>License (If applicable) : </h3>
                                   <TextField label="Number" variant="outlined" color="warning" className='pds_inputEducSemi1' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} name="licenseCSE[]" onChange={getAllCSEinput}/> 
                                   <TextField
                                    onChange={getAllCSEinput}
                                    name="dateValidityCSE[]"
                                    className='pds_inputEducSemi1'
                                    label="Date of Validity (Leave blank if N/A)"
                                    color="warning"
                                    type="date"
                                    inputProps={{ min: "1950-01-01"}} 
                                    InputLabelProps={{shrink: true,}}
                                  />
                                 </div>

                                <div className='line_educ'></div>     
                            </Grid>
                            )) }

                            <input type="hidden" id='CSE_board_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='CSE_rating_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='CSE_dateExam_handler' value=" |:| "/>
                            <input type="hidden" id='CSE_placeExam_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='CSE_licenseNo_handler' value=" |:| "/>
                            <input type="hidden" id='CSE_dateValidity_handler' value=" |:| "/>

                            <div className='entry_button'>
                              <button type="button" 
                                disabled={civilEntry.length === 1} 
                                onClick={() => handleRemoveCivilEntry(civilEntry.id)}
                              >
                                  Remove
                              </button>   
                              <button type='button' onClick={handleAddCivilEntry}>Add another entry</button>
                            </div>
                    </div>

                    <div className='step_content step4_content'>
                            <p className='step_text'>Step 4</p>
                            <p className='step_desc'>Enter your Work Experience</p>

                            <div className='info_div'>
                                <img src={work_info}/>
                                Work Experience
                            </div>

                            {workEntry.map(index => (
                            <Grid
                              container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                            >
                                  <TextField
                                        onChange={getAllWEinput}
                                        name="dateFromWE[]"
                                        className='pds_inputEducSemi'
                                        label="Inclusive Dates (From) [Leave blank if N/A]"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <TextField
                                        onChange={getAllWEinput}
                                        name="dateToWE[]"
                                        className='pds_inputEducSemi'
                                        label="Inclusive Dates (To) [Leave blank if N/A]"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <TextField label="Position Title (Write in full / Do not abbreviate)" variant="outlined" color="warning" className='pds_inputEducSemi' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} name="positionWE[]" onChange={getAllWEinput}/>    

                                  <TextField label="Department / Agency / Office / Company (Write in full / Do not abbreviate)" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} name="deptWE[]" onChange={getAllWEinput}/>    

                                  <TextField label="Monthly Salary" variant="outlined" color="warning" className='pds_inputEducSemi2' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "uppercase"}}} name="monthlyWE[]" onChange={getAllWEinput}/>    

                                  <TextField label='Salary/ Job/ Pay Grade (if applicable) & Step  (Format "00-0")/ Increment' variant="outlined" color="warning" className='pds_inputEducSemi2' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} name="salaryWE[]" onChange={getAllWEinput}/>

                                  <Autocomplete
                                        onChange={getAllWEinput}
                                        options={statusAppointment}
                                        className='pds_inputEducSemi2'
                                        renderInput={(params) => <TextField color="warning" placeholder='Choose N/A if Not Applicable'
                                        {...params} label="Status of Appointment" name="appointWE[]" />}
                                    />

                                    <Autocomplete
                                        onChange={getAllWEinput}
                                        options={yn}
                                        className='pds_inputEducSemi2'
                                        renderInput={(params) => <TextField color="warning" placeholder='Choose N/A if Not Applicable'
                                        {...params} label="GOV'T SERVICE (Y/ N)" name="govtWE[]"/>}
                                    />

                                <div className='line_educ'></div>     
                            </Grid>
                            )) }

                            <input type="hidden" id='WE_dateFrom_handler' value=" |:| "/>
                            <input type="hidden" id='WE_dateTo_handler' value=" |:| "/>
                            <input type="hidden" id='WE_position_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='WE_dept_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='WE_monthly_handler' value=" |:| " style={{textTransform:"uppercase"}}/>
                            <input type="hidden" id='WE_salary_handler' value=" |:| " style={{textTransform:"uppercase"}}/>
                            <input type="hidden" id='WE_appoint_handler' value=" |:| " style={{textTransform:"uppercase"}}/>
                            <input type="hidden" id='WE_govt_handler' value=" |:| " style={{textTransform:"uppercase"}}/>

                            <div className='entry_button'>
                              <button type="button" 
                                disabled={workEntry.length === 1} 
                                onClick={() => handleRemoveWorkEntry(workEntry.id)}
                              >
                                  Remove
                              </button>   
                              <button type='button' onClick={handleAddWorkEntry}>Add another entry</button>
                            </div>

                     </div>     

                     <div className='step_content step5_content'>
                            <p className='step_text'>Step 5</p>
                            <p className='step_desc'>Learning & Development</p>

                            <div className='info_div' style={{fontSize:"1rem"}}>
                                <img src={LandD_info}/>
                                Learning and Development (L&D) Interventions/Training Programs Attended
                            </div>  

                            {ldEntry.map(index => (
                            <Grid
                              container
                              direction="row"
                              justifyContent="flex-start"
                              alignItems="center"
                            >             
                                  <div className='file_input'>
                                      <label>Upload Image (JPG or PNG only) [Leave blank if Not Applicable]:</label>
                                      <input type="file" onChange={getAllLDinput} name="imgLD[]" />
                                  </div>     

                                  <TextField label="Title of Learning and Development Interventions/Training Programs (Write in full)" variant="outlined" color="warning" className='pds_inputEduc' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} name="titleLD[]" onChange={getAllLDinput}/>  

                                  <TextField
                                        onChange={getAllLDinput}
                                        name="dateFromLD[]"
                                        className='pds_inputEducSemi'
                                        label="Inclusive Dates of attendance (From) [Leave blank if N/A]"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <TextField
                                        onChange={getAllLDinput}
                                        name="dateToLD[]"
                                        className='pds_inputEducSemi'
                                        label="Inclusive Dates of attendance (To) [Leave blank if N/A]"
                                        color="warning"
                                        type="date"
                                        inputProps={{ min: "1950-01-01", max: maxDateInput }} 
                                        InputLabelProps={{shrink: true,}}
                                  />
                                  <TextField label="Number of hours" variant="outlined" color="warning" className='pds_inputEducSemi' placeholder='(ex. 8 HRS)Type N/A if Not Applicable' inputProps={{style:{textTransform: "uppercase"}}} name="hoursLD[]" onChange={getAllLDinput}/>      

                                  <TextField label="Type of LD (Managerial/ Supervisory/ Technical/ etc)" variant="outlined" color="warning" className='pds_inputEducSemi2' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "uppercase"}}} name="typeLD[]" onChange={getAllLDinput}/>    

                                  <TextField label='Conducted/ Sponsored By (Write in full)' variant="outlined" color="warning" className='pds_inputEducSemi2' placeholder='Type N/A if Not Applicable' inputProps={{style:{textTransform: "capitalize"}}} name="sponsoredLD[]" onChange={getAllLDinput}/>

                                  <Autocomplete
                                        onChange={getAllLDinput}
                                        options={LandDCoverage}
                                        className='pds_inputEducSemi2'
                                        renderInput={(params) => <TextField color="warning" placeholder='Choose N/A if Not Applicable'
                                        {...params} label="Coverage" name="coverageLD[]" />}
                                    />

                                    <Autocomplete
                                        onChange={getAllLDinput}
                                        options={LandDCategory}
                                        className='pds_inputEducSemi2'
                                        renderInput={(params) => <TextField color="warning" placeholder='Choose N/A if Not Applicable'
                                        {...params} label="Category" name="categoryLD[]"/>}
                                    />

                                  <div className='line_educ'></div>     
                            </Grid>
                            )) }

                            <input type="hidden" id='LD_title_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='LD_dateFrom_handler' value=" |:| "/>
                            <input type="hidden" id='LD_dateTo_handler' value=" |:| "/>
                            <input type="hidden" id='LD_hours_handler' value=" |:| " style={{textTransform:"uppercase"}}/>
                            <input type="hidden" id='LD_type_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='LD_sponsored_handler' value=" |:| " style={{textTransform:"capitalize"}}/>
                            <input type="hidden" id='LD_coverage_handler' value=" |:| " style={{textTransform:"uppercase"}}/>
                            <input type="hidden" id='LD_category_handler' value=" |:| " style={{textTransform:"uppercase"}}/>
                            <input type="hidden" id='LD_img_handler' value=" |:| " />

                            <div className='entry_button'>
                              <button type="button" 
                                disabled={ldEntry.length === 1} 
                                onClick={() => handleRemoveldEntry(ldEntry.id)}
                              >
                                  Remove
                              </button>   
                              <button type='button' onClick={handleAddldEntry}>Add another entry</button>
                            </div>

                      </div>

                    <div className="pds_validator">
                      <PdsFormStepModal/>
                    </div>
                </div>

                <div className='stepper_container'>
                       <Link to="/FacultyDashboard" style={{ textDecoration: 'none',marginLeft:"5%"}} className="back_stepper1">
                        <button className='back_stepper' style={{whiteSpace:"nowrap"}}>&#8592; &nbsp;&nbsp;&nbsp; Go to Dashboard</button>
                      </Link>  

                        <button type='button' className='back_stepper back_stepper2' style={{display:"none"}} onClick={back2_stepper}>&#8592; &nbsp;&nbsp;&nbsp; Back</button>
                        <button type='button' className='back_stepper back_stepper3' style={{display:"none"}} onClick={back3_stepper}>&#8592; &nbsp;&nbsp;&nbsp; Back</button>
                        <button type='button' className='back_stepper back_stepper4' style={{display:"none"}} onClick={back4_stepper}>&#8592; &nbsp;&nbsp;&nbsp; Back</button>
                        <button type='button' className='back_stepper back_stepper5' style={{display:"none"}}  onClick={back5_stepper}>&#8592; &nbsp;&nbsp;&nbsp; Back5</button>

                        <button type='button' className='next_stepper next_stepper1'  onMouseOver={sameAddressFunction} onClick={validatorPDS1}>Next &nbsp;&nbsp;&nbsp; &#8594;</button>
                        <button type='button' className='next_stepper next_stepper2' style={{display:"none"}} onMouseOver={getAllElementaryInput} onClick={validatorPDS2}>Next &nbsp;&nbsp;&nbsp; &#8594;</button>
                        <button type='button' className='next_stepper next_stepper3' style={{display:"none"}} onMouseOver={getAllCSEinput} onClick={validatorPDS3}>Next &nbsp;&nbsp;&nbsp; &#8594;</button>
                        <button type='button' className='next_stepper next_stepper4' style={{display:"none"}} onMouseOver={getAllWEinput} onClick={validatorPDS4}>Next &nbsp;&nbsp;&nbsp; &#8594;</button>
                        <button type='button' className='next_stepper next_stepper5' style={{display:"none"}} onMouseOver={getAllLDinput} >Next5 &nbsp;&nbsp;&nbsp; &#8594;</button>
                        <button type='submit' className='next_stepper' style={{display:"none"}} >Submit &nbsp;&nbsp;&nbsp; &#8594;</button>
                </div>
           
            </div> 
            </form>

        </div>
    )
}

//LandD Category
const LandDCategory = [
  { label: 'N/A' },
  { label: 'TRAINING' },
  { label: 'SEMINAR' },
  { label: 'WORKSHOP'},
];
//LandD Coverage
const LandDCoverage = [
  { label: 'N/A' },
  { label: 'INTERNATIONAL' },
  { label: 'NATIOANAL' },
  { label: 'REGIONAL'},
  { label: 'LOCAL'},
];
//Govt service Y/N
const yn = [{label: "N/A"},{label: "Y"}, {label:"N"}]
//Status of Appointment
const statusAppointment = [
  { label: 'N/A' },
  { label: 'PERMANENT' },
  { label: 'TEMPORARY'},
  { label: 'PART TIME'},
];
//Year List
var today = moment().format('L'); 
today = today.split('/');
var listYear = ["N/A","To Date"];
for (let i=today[2]; i >= 1950; i--) {
    listYear.push( i.toString());
}
//Secondary Attainment
const secondaryAttainment = [
  { label: 'Junior High School' },
  { label: 'Senior High School'},
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
    "Zimbabwean"
]
//Civil Status
const civil_status = [
    { label: 'Married' },
    { label: 'Single'},
    { label: 'Divorced' },
    { label: 'Widowed'},
];
//Gender
const gender = [
    { label: 'Male' },
    { label: 'Female'},
];
//Counntries
const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
      code: 'AU',
      label: 'Australia',
      phone: '61',
      suggested: true,
    },
    { code: 'AW', label: 'Aruba', phone: '297' },
    { code: 'AX', label: 'Alland Islands', phone: '358' },
    { code: 'AZ', label: 'Azerbaijan', phone: '994' },
    {
      code: 'BA',
      label: 'Bosnia and Herzegovina',
      phone: '387',
    },
    { code: 'BB', label: 'Barbados', phone: '1-246' },
    { code: 'BD', label: 'Bangladesh', phone: '880' },
    { code: 'BE', label: 'Belgium', phone: '32' },
    { code: 'BF', label: 'Burkina Faso', phone: '226' },
    { code: 'BG', label: 'Bulgaria', phone: '359' },
    { code: 'BH', label: 'Bahrain', phone: '973' },
    { code: 'BI', label: 'Burundi', phone: '257' },
    { code: 'BJ', label: 'Benin', phone: '229' },
    { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
    { code: 'BM', label: 'Bermuda', phone: '1-441' },
    { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
    { code: 'BO', label: 'Bolivia', phone: '591' },
    { code: 'BR', label: 'Brazil', phone: '55' },
    { code: 'BS', label: 'Bahamas', phone: '1-242' },
    { code: 'BT', label: 'Bhutan', phone: '975' },
    { code: 'BV', label: 'Bouvet Island', phone: '47' },
    { code: 'BW', label: 'Botswana', phone: '267' },
    { code: 'BY', label: 'Belarus', phone: '375' },
    { code: 'BZ', label: 'Belize', phone: '501' },
    {
      code: 'CA',
      label: 'Canada',
      phone: '1',
      suggested: true,
    },
    {
      code: 'CC',
      label: 'Cocos (Keeling) Islands',
      phone: '61',
    },
    {
      code: 'CD',
      label: 'Congo, Democratic Republic of the',
      phone: '243',
    },
    {
      code: 'CF',
      label: 'Central African Republic',
      phone: '236',
    },
    {
      code: 'CG',
      label: 'Congo, Republic of the',
      phone: '242',
    },
    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
    { code: 'CK', label: 'Cook Islands', phone: '682' },
    { code: 'CL', label: 'Chile', phone: '56' },
    { code: 'CM', label: 'Cameroon', phone: '237' },
    { code: 'CN', label: 'China', phone: '86' },
    { code: 'CO', label: 'Colombia', phone: '57' },
    { code: 'CR', label: 'Costa Rica', phone: '506' },
    { code: 'CU', label: 'Cuba', phone: '53' },
    { code: 'CV', label: 'Cape Verde', phone: '238' },
    { code: 'CW', label: 'Curacao', phone: '599' },
    { code: 'CX', label: 'Christmas Island', phone: '61' },
    { code: 'CY', label: 'Cyprus', phone: '357' },
    { code: 'CZ', label: 'Czech Republic', phone: '420' },
    {
      code: 'DE',
      label: 'Germany',
      phone: '49',
      suggested: true,
    },
    { code: 'DJ', label: 'Djibouti', phone: '253' },
    { code: 'DK', label: 'Denmark', phone: '45' },
    { code: 'DM', label: 'Dominica', phone: '1-767' },
    {
      code: 'DO',
      label: 'Dominican Republic',
      phone: '1-809',
    },
    { code: 'DZ', label: 'Algeria', phone: '213' },
    { code: 'EC', label: 'Ecuador', phone: '593' },
    { code: 'EE', label: 'Estonia', phone: '372' },
    { code: 'EG', label: 'Egypt', phone: '20' },
    { code: 'EH', label: 'Western Sahara', phone: '212' },
    { code: 'ER', label: 'Eritrea', phone: '291' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'ET', label: 'Ethiopia', phone: '251' },
    { code: 'FI', label: 'Finland', phone: '358' },
    { code: 'FJ', label: 'Fiji', phone: '679' },
    {
      code: 'FK',
      label: 'Falkland Islands (Malvinas)',
      phone: '500',
    },
    {
      code: 'FM',
      label: 'Micronesia, Federated States of',
      phone: '691',
    },
    { code: 'FO', label: 'Faroe Islands', phone: '298' },
    {
      code: 'FR',
      label: 'France',
      phone: '33',
      suggested: true,
    },
    { code: 'GA', label: 'Gabon', phone: '241' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'GD', label: 'Grenada', phone: '1-473' },
    { code: 'GE', label: 'Georgia', phone: '995' },
    { code: 'GF', label: 'French Guiana', phone: '594' },
    { code: 'GG', label: 'Guernsey', phone: '44' },
    { code: 'GH', label: 'Ghana', phone: '233' },
    { code: 'GI', label: 'Gibraltar', phone: '350' },
    { code: 'GL', label: 'Greenland', phone: '299' },
    { code: 'GM', label: 'Gambia', phone: '220' },
    { code: 'GN', label: 'Guinea', phone: '224' },
    { code: 'GP', label: 'Guadeloupe', phone: '590' },
    { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
    { code: 'GR', label: 'Greece', phone: '30' },
    {
      code: 'GS',
      label: 'South Georgia and the South Sandwich Islands',
      phone: '500',
    },
    { code: 'GT', label: 'Guatemala', phone: '502' },
    { code: 'GU', label: 'Guam', phone: '1-671' },
    { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
    { code: 'GY', label: 'Guyana', phone: '592' },
    { code: 'HK', label: 'Hong Kong', phone: '852' },
    {
      code: 'HM',
      label: 'Heard Island and McDonald Islands',
      phone: '672',
    },
    { code: 'HN', label: 'Honduras', phone: '504' },
    { code: 'HR', label: 'Croatia', phone: '385' },
    { code: 'HT', label: 'Haiti', phone: '509' },
    { code: 'HU', label: 'Hungary', phone: '36' },
    { code: 'ID', label: 'Indonesia', phone: '62' },
    { code: 'IE', label: 'Ireland', phone: '353' },
    { code: 'IL', label: 'Israel', phone: '972' },
    { code: 'IM', label: 'Isle of Man', phone: '44' },
    { code: 'IN', label: 'India', phone: '91' },
    {
      code: 'IO',
      label: 'British Indian Ocean Territory',
      phone: '246',
    },
    { code: 'IQ', label: 'Iraq', phone: '964' },
    {
      code: 'IR',
      label: 'Iran, Islamic Republic of',
      phone: '98',
    },
    { code: 'IS', label: 'Iceland', phone: '354' },
    { code: 'IT', label: 'Italy', phone: '39' },
    { code: 'JE', label: 'Jersey', phone: '44' },
    { code: 'JM', label: 'Jamaica', phone: '1-876' },
    { code: 'JO', label: 'Jordan', phone: '962' },
    {
      code: 'JP',
      label: 'Japan',
      phone: '81',
      suggested: true,
    },
    { code: 'KE', label: 'Kenya', phone: '254' },
    { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
    { code: 'KH', label: 'Cambodia', phone: '855' },
    { code: 'KI', label: 'Kiribati', phone: '686' },
    { code: 'KM', label: 'Comoros', phone: '269' },
    {
      code: 'KN',
      label: 'Saint Kitts and Nevis',
      phone: '1-869',
    },
    {
      code: 'KP',
      label: "Korea, Democratic People's Republic of",
      phone: '850',
    },
    { code: 'KR', label: 'Korea, Republic of', phone: '82' },
    { code: 'KW', label: 'Kuwait', phone: '965' },
    { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
    { code: 'KZ', label: 'Kazakhstan', phone: '7' },
    {
      code: 'LA',
      label: "Lao People's Democratic Republic",
      phone: '856',
    },
    { code: 'LB', label: 'Lebanon', phone: '961' },
    { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
    { code: 'LI', label: 'Liechtenstein', phone: '423' },
    { code: 'LK', label: 'Sri Lanka', phone: '94' },
    { code: 'LR', label: 'Liberia', phone: '231' },
    { code: 'LS', label: 'Lesotho', phone: '266' },
    { code: 'LT', label: 'Lithuania', phone: '370' },
    { code: 'LU', label: 'Luxembourg', phone: '352' },
    { code: 'LV', label: 'Latvia', phone: '371' },
    { code: 'LY', label: 'Libya', phone: '218' },
    { code: 'MA', label: 'Morocco', phone: '212' },
    { code: 'MC', label: 'Monaco', phone: '377' },
    {
      code: 'MD',
      label: 'Moldova, Republic of',
      phone: '373',
    },
    { code: 'ME', label: 'Montenegro', phone: '382' },
    {
      code: 'MF',
      label: 'Saint Martin (French part)',
      phone: '590',
    },
    { code: 'MG', label: 'Madagascar', phone: '261' },
    { code: 'MH', label: 'Marshall Islands', phone: '692' },
    {
      code: 'MK',
      label: 'Macedonia, the Former Yugoslav Republic of',
      phone: '389',
    },
    { code: 'ML', label: 'Mali', phone: '223' },
    { code: 'MM', label: 'Myanmar', phone: '95' },
    { code: 'MN', label: 'Mongolia', phone: '976' },
    { code: 'MO', label: 'Macao', phone: '853' },
    {
      code: 'MP',
      label: 'Northern Mariana Islands',
      phone: '1-670',
    },
    { code: 'MQ', label: 'Martinique', phone: '596' },
    { code: 'MR', label: 'Mauritania', phone: '222' },
    { code: 'MS', label: 'Montserrat', phone: '1-664' },
    { code: 'MT', label: 'Malta', phone: '356' },
    { code: 'MU', label: 'Mauritius', phone: '230' },
    { code: 'MV', label: 'Maldives', phone: '960' },
    { code: 'MW', label: 'Malawi', phone: '265' },
    { code: 'MX', label: 'Mexico', phone: '52' },
    { code: 'MY', label: 'Malaysia', phone: '60' },
    { code: 'MZ', label: 'Mozambique', phone: '258' },
    { code: 'NA', label: 'Namibia', phone: '264' },
    { code: 'NC', label: 'New Caledonia', phone: '687' },
    { code: 'NE', label: 'Niger', phone: '227' },
    { code: 'NF', label: 'Norfolk Island', phone: '672' },
    { code: 'NG', label: 'Nigeria', phone: '234' },
    { code: 'NI', label: 'Nicaragua', phone: '505' },
    { code: 'NL', label: 'Netherlands', phone: '31' },
    { code: 'NO', label: 'Norway', phone: '47' },
    { code: 'NP', label: 'Nepal', phone: '977' },
    { code: 'NR', label: 'Nauru', phone: '674' },
    { code: 'NU', label: 'Niue', phone: '683' },
    { code: 'NZ', label: 'New Zealand', phone: '64' },
    { code: 'OM', label: 'Oman', phone: '968' },
    { code: 'PA', label: 'Panama', phone: '507' },
    { code: 'PE', label: 'Peru', phone: '51' },
    { code: 'PF', label: 'French Polynesia', phone: '689' },
    { code: 'PG', label: 'Papua New Guinea', phone: '675' },
    { code: 'PH', label: 'Philippines', phone: '63' },
    { code: 'PK', label: 'Pakistan', phone: '92' },
    { code: 'PL', label: 'Poland', phone: '48' },
    {
      code: 'PM',
      label: 'Saint Pierre and Miquelon',
      phone: '508',
    },
    { code: 'PN', label: 'Pitcairn', phone: '870' },
    { code: 'PR', label: 'Puerto Rico', phone: '1' },
    {
      code: 'PS',
      label: 'Palestine, State of',
      phone: '970',
    },
    { code: 'PT', label: 'Portugal', phone: '351' },
    { code: 'PW', label: 'Palau', phone: '680' },
    { code: 'PY', label: 'Paraguay', phone: '595' },
    { code: 'QA', label: 'Qatar', phone: '974' },
    { code: 'RE', label: 'Reunion', phone: '262' },
    { code: 'RO', label: 'Romania', phone: '40' },
    { code: 'RS', label: 'Serbia', phone: '381' },
    { code: 'RU', label: 'Russian Federation', phone: '7' },
    { code: 'RW', label: 'Rwanda', phone: '250' },
    { code: 'SA', label: 'Saudi Arabia', phone: '966' },
    { code: 'SB', label: 'Solomon Islands', phone: '677' },
    { code: 'SC', label: 'Seychelles', phone: '248' },
    { code: 'SD', label: 'Sudan', phone: '249' },
    { code: 'SE', label: 'Sweden', phone: '46' },
    { code: 'SG', label: 'Singapore', phone: '65' },
    { code: 'SH', label: 'Saint Helena', phone: '290' },
    { code: 'SI', label: 'Slovenia', phone: '386' },
    {
      code: 'SJ',
      label: 'Svalbard and Jan Mayen',
      phone: '47',
    },
    { code: 'SK', label: 'Slovakia', phone: '421' },
    { code: 'SL', label: 'Sierra Leone', phone: '232' },
    { code: 'SM', label: 'San Marino', phone: '378' },
    { code: 'SN', label: 'Senegal', phone: '221' },
    { code: 'SO', label: 'Somalia', phone: '252' },
    { code: 'SR', label: 'Suriname', phone: '597' },
    { code: 'SS', label: 'South Sudan', phone: '211' },
    {
      code: 'ST',
      label: 'Sao Tome and Principe',
      phone: '239',
    },
    { code: 'SV', label: 'El Salvador', phone: '503' },
    {
      code: 'SX',
      label: 'Sint Maarten (Dutch part)',
      phone: '1-721',
    },
    {
      code: 'SY',
      label: 'Syrian Arab Republic',
      phone: '963',
    },
    { code: 'SZ', label: 'Swaziland', phone: '268' },
    {
      code: 'TC',
      label: 'Turks and Caicos Islands',
      phone: '1-649',
    },
    { code: 'TD', label: 'Chad', phone: '235' },
    {
      code: 'TF',
      label: 'French Southern Territories',
      phone: '262',
    },
    { code: 'TG', label: 'Togo', phone: '228' },
    { code: 'TH', label: 'Thailand', phone: '66' },
    { code: 'TJ', label: 'Tajikistan', phone: '992' },
    { code: 'TK', label: 'Tokelau', phone: '690' },
    { code: 'TL', label: 'Timor-Leste', phone: '670' },
    { code: 'TM', label: 'Turkmenistan', phone: '993' },
    { code: 'TN', label: 'Tunisia', phone: '216' },
    { code: 'TO', label: 'Tonga', phone: '676' },
    { code: 'TR', label: 'Turkey', phone: '90' },
    {
      code: 'TT',
      label: 'Trinidad and Tobago',
      phone: '1-868',
    },
    { code: 'TV', label: 'Tuvalu', phone: '688' },
    {
      code: 'TW',
      label: 'Taiwan, Province of China',
      phone: '886',
    },
    {
      code: 'TZ',
      label: 'United Republic of Tanzania',
      phone: '255',
    },
    { code: 'UA', label: 'Ukraine', phone: '380' },
    { code: 'UG', label: 'Uganda', phone: '256' },
    {
      code: 'US',
      label: 'United States',
      phone: '1',
      suggested: true,
    },
    { code: 'UY', label: 'Uruguay', phone: '598' },
    { code: 'UZ', label: 'Uzbekistan', phone: '998' },
    {
      code: 'VA',
      label: 'Holy See (Vatican City State)',
      phone: '379',
    },
    {
      code: 'VC',
      label: 'Saint Vincent and the Grenadines',
      phone: '1-784',
    },
    { code: 'VE', label: 'Venezuela', phone: '58' },
    {
      code: 'VG',
      label: 'British Virgin Islands',
      phone: '1-284',
    },
    {
      code: 'VI',
      label: 'US Virgin Islands',
      phone: '1-340',
    },
    { code: 'VN', label: 'Vietnam', phone: '84' },
    { code: 'VU', label: 'Vanuatu', phone: '678' },
    { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
    { code: 'WS', label: 'Samoa', phone: '685' },
    { code: 'XK', label: 'Kosovo', phone: '383' },
    { code: 'YE', label: 'Yemen', phone: '967' },
    { code: 'YT', label: 'Mayotte', phone: '262' },
    { code: 'ZA', label: 'South Africa', phone: '27' },
    { code: 'ZM', label: 'Zambia', phone: '260' },
    { code: 'ZW', label: 'Zimbabwe', phone: '263' },
  ];