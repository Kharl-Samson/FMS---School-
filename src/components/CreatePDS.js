import * as React from 'react';
import '../css/createPDS.css';
import LeftNavbarFaculty from '../navbarsUI/LeftNavbarFaculty';
import TextField from '@mui/material/TextField';
import basic_info from '../images/icons/basic_info.svg';
import address_info from '../images/icons/address_info.svg';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import {regions, provinces, cities, barangays} from 'select-philippines-address';
import {useEffect, useState} from "react";
import { orange } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

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
    },10);


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
        });
    }
    const province = (e) => {
        setRegionAddr(e.target.selectedOptions[0].text);
        provinces(e.target.value).then(response => {
            setProvince(response);
            setCity([]);
            setBarangay([]);
        });
    }
    const city = (e) => {
        setProvinceAddr(e.target.selectedOptions[0].text);
        cities(e.target.value).then(response => {
            setCity(response);
        });
    }
    const barangay = (e) => {
        setCityAddr(e.target.selectedOptions[0].text);
        barangays(e.target.value).then(response => {
            setBarangay(response);
        });
    }
    const brgy = (e) => {
        setBarangayAddr(e.target.selectedOptions[0].text);
    }

    useEffect(() => {
        region()
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
        });
    }
    const city1 = (e) => {
        setProvinceAddr1(e.target.selectedOptions[0].text);
        cities(e.target.value).then(response => {
            setCity1(response);
        });
    }
    const barangay1 = (e) => {
        setCityAddr1(e.target.selectedOptions[0].text);
        barangays(e.target.value).then(response => {
            setBarangay1(response);
        });
    }
    const brgy1 = (e) => {
        setBarangayAddr1(e.target.selectedOptions[0].text);
    }

    useEffect(() => {
        region1()
    }, [])


    //If resident and present address are same
    function sameAddressFunction(){
       var inp1 = document.getElementById("add_inp1").value;
       var inp2 = document.getElementById("add_inp2").value;
       var inp3 = document.getElementById("add_inp3").value;
       var inp4 = document.getElementById("add_inp4").value;
       var inp5 = document.getElementById("add_inp5").value;
       var inp6 = document.getElementById("add_inp6").value;
       var inp7 = document.getElementById("add_inp7").value;
       var inp8 = document.getElementById("add_inp8").value;
    
       var e =document.getElementById("add_inp4");
       var result = e.options[e.selectedIndex].text;


       var checkBox = document.getElementById("address_checkbox");
       if (checkBox.checked == true){
         document.getElementById("add1_inp1").value = inp1;
         document.getElementById("add2_inp2").value = inp2;
         document.getElementById("add3_inp3").value = inp3;
         document.getElementById("add4_inp4").value = inp4;
         document.getElementById("add5_inp5").value = result
         document.getElementById("add6_inp6").value = inp6;
         document.getElementById("add7_inp7").value = inp7;
         document.getElementById("add8_inp8").value = inp8;


      } else {
        document.getElementById("add1_inp1").value = "";
        document.getElementById("add2_inp2").value = "";
        document.getElementById("add3_inp3").value = "";
        document.getElementById("add4_inp4").value = "";
        document.getElementById("add5_inp5").value = "";
        document.getElementById("add6_inp6").value = "";
        document.getElementById("add7_inp7").value = "";
        document.getElementById("add8_inp8").value = "";
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
        document.getElementById("age_input").value = age +" years old";   
      
    }

    return (
        <div className="dashboard_container" style={{ backgroundColor: "#FFAA28"}}>
            <LeftNavbarFaculty/>  

            <div className="main_content" style={{ backgroundColor: "#EFF4F9"}}>
                <div className='stepper_container'>

                    <div className='stepper stepper1'>
                        <div className='circle'><span>1</span></div>
                        <p>Personal Information</p>
                    </div>
                    <div className='stepper stepper2'>
                        <div className='circle'><span>2</span></div>
                        <p>Educational Background</p>
                    </div>
                    <div className='stepper stepper3'>
                        <div className='circle'><span>3</span></div>
                        <p>Civil Eligibility</p>
                    </div>
                    <div className='stepper stepper4'>
                        <div className='circle'><span>4</span></div>
                        <p>Work Experience</p>
                    </div>
                    <div className='stepper stepper5'>
                        <div className='circle'><span>5</span></div>
                        <p>Learning &#38; Development</p>
                    </div>

                </div>

                <div className='form_container'>
                <form>

                    <div className='step_content step1_content'>
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
                                    <TextField label="First Name" variant="outlined" color="warning"  className='pds_input' placeholder='Fields with * are required' required/>
                                    <TextField label="Middle Name" variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable'/>
                                    <TextField label="Last Name" variant="outlined" color="warning"  className='pds_input' placeholder='Fields with * are required' required/>
                                    <TextField label="Name Extension (Optional)" variant="outlined" color="warning"  className='pds_input' placeholder='(ex. Jr., Sr., III)  Type N/A if Not Applicable'/>
                                    <TextField
                                        onChange={getAge}
                                        required
                                        id="bdate_input"
                                        className='pds_input' 
                                        label="Birthday"
                                        color="warning"
                                        type="date"
                                        value="2000-01-01"
                                        InputLabelProps={{shrink: true,}}
                                    />
                                    <TextField label="Age" id="age_input" variant="outlined" color="warning"  className='pds_input' value="0" disabled style={{color: "red"}} required/>

                                    <Autocomplete             
                                      className='pds_input'
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

                                    <TextField label="City of Birth" variant="outlined" color="warning"  className='pds_input' placeholder='Fields with * are required' required/>

                                    <Autocomplete
                                        options={gender}
                                        className='pds_input'
                                        sx={{ width: "350px"}}
                                        renderInput={(params) => <TextField color="warning" placeholder='Fields with * are required'
                                        required {...params} label="Gender" />}
                                    />

                                     <Autocomplete
                                        options={civil_status}
                                        className='pds_input'
                                        sx={{ width: "350px"}}
                                        renderInput={(params) => <TextField color="warning" placeholder='Fields with * are required'
                                        required {...params} label="Civil Status" />}
                                    />

                                    <TextField label="Height" variant="outlined" color="warning"  className='pds_input' placeholder='(cm) Fields with * are required' required/>
                                    <TextField label="Weight" variant="outlined" color="warning"  className='pds_input' placeholder='(Kg) Fields with * are required' required/>
                                    <TextField label="Blood Type" variant="outlined" color="warning"  className='pds_input' placeholder='Fields with * are required' required/>
                                    <TextField label="GSIS ID No." variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable'/>
                                    <TextField label="PAG-IBIG ID No." variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable'/>
                                    <TextField label="PHILHEALTH No." variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable'/>
                                    <TextField label="SSS No." variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable'/>
                                    <TextField label="TIN No." variant="outlined" color="warning"  className='pds_input' placeholder='Type N/A if Not Applicable'/>

                                    <Autocomplete
                                        options={nationality}
                                        className='pds_input'
                                        sx={{ width: "350px"}}
                                        renderInput={(params) => <TextField color="warning" placeholder='Fields with * are required'
                                        required {...params} label="Citizenship" />}
                                    />
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
                                                <input type="text" placeholder='Type N/A if Not Applicable' id="add_inp1" required onKeyUp={sameAddressFunction}/>
                                            </div>

                                            <div className='address_input'>
                                                <label>Street :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' id="add_inp2" required onKeyUp={sameAddressFunction}/>
                                            </div>
                         
                                            <div className='address_input'>
                                                <label>Subdivision / Village :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' id="add_inp3" required onKeyUp={sameAddressFunction}/>
                                            </div>             
                 
                                            <div className='address_input'>
                                            <label>Region (Required) :</label>
                                            <select onChange={province} onSelect={region} onMouseDown={sameAddressFunction} id="add_inp4" >
                                                    <option disabled>Select Region</option>
                                                    {regionData && regionData.length > 0 && regionData.map((item) => <option
                                                    key={item.region_code} value={item.region_code}>{item.region_name}</option>)}
                                            </select>
                                            </div>

                                            <div className='address_input'>
                                            <label>Province (Required) :</label>
                                            <select onChange={city} onMouseDown={sameAddressFunction} id="add_inp5">
                                                    <option disabled>Select Province</option>
                                                    {provinceData && provinceData.length > 0 && provinceData.map((item) => <option
                                                    key={item.province_code} value={item.province_code}>{item.province_name}</option>)}
                                            </select>
                                            </div>

                                            <div className='address_input'>
                                            <label>City (Required) :</label>
                                            <select onChange={barangay} onMouseDown={sameAddressFunction} id="add_inp6">
                                                    <option disabled>Select City</option>
                                                    {cityData && cityData.length > 0 && cityData.map((item) => <option
                                                    key={item.city_code} value={item.city_code}>{item.city_name}</option>)}
                                            </select>
                                            </div>
                             
                                            <div className='address_input'>
                                            <label>Barangay (Required) :</label>
                                            <select onChange={brgy} onMouseDown={sameAddressFunction} id="add_inp7">
                                                    <option disabled>Select Barangay</option>
                                                    {barangayData && barangayData.length > 0 && barangayData.map((item) => <option
                                                    key={item.brgy_code} value={item.brgy_code}>{item.brgy_name}</option>)}
                                            </select>
                                            </div>

                                            <div className='address_input'>
                                                <label>ZIP Code (Required) :</label>
                                                <input type="number" placeholder='ex. 3003'  id="add_inp8" required onKeyUp={sameAddressFunction}/>
                                            </div>

                                            <div style={{width:"100%",display:"flex",alignItems:"center",marginBottom:"1rem"}}>
                                            <Checkbox
                                                onClick={sameAddressFunction}
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

                                            <div className='address_input'>
                                                <label>House / Block / Lot No. :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' id="add1_inp1" required/>
                                            </div>

                                            <div className='address_input'>
                                                <label>Street :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' id="add2_inp2" required/>
                                            </div>
                         
                                            <div className='address_input'>
                                                <label>Subdivision / Village :</label>
                                                <input type="text" placeholder='Type N/A if Not Applicable' id="add3_inp3" required/>
                                            </div>
                                            
                                            <div className='address_input'>
                                            <label>Region (Required) :</label>
                                            <select onChange={province1} onSelect={region1}>
                                                    <option disabled>Select Region</option>
                                                    {regionData1 && regionData1.length > 0 && regionData1.map((item) => <option
                                                    key={item.region_code} value={item.region_code}>{item.region_name}</option>)}
                                            </select>
                                            </div>

                                            <div className='address_input'>
                                            <label>Province (Required) :</label>
                                            <select onChange={city1} id="add5_inp5">
                                                    <option disabled>Select Province</option>
                                                    {provinceData1 && provinceData1.length > 0 && provinceData1.map((item) => <option
                                                    key={item.province_code} value={item.province_code}>{item.province_name}</option>)}
                                            </select>
                                            </div>

                                            <div className='address_input'>
                                            <label>City (Required) :</label>
                                            <select onChange={barangay1} id="add6_inp6">
                                                    <option disabled>Select City</option>
                                                    {cityData1 && cityData1.length > 0 && cityData1.map((item) => <option
                                                    key={item.city_code} value={item.city_code}>{item.city_name}</option>)}
                                            </select>
                                            </div>
                             
                                            <div className='address_input'>
                                            <label>Barangay (Required) :</label>
                                            <select onChange={brgy1} id="add7_inp7">
                                                    <option disabled>Select Barangay</option>
                                                    {barangayData1 && barangayData1.length > 0 && barangayData1.map((item) => <option
                                                    key={item.brgy_code} value={item.brgy_code}>{item.brgy_name}</option>)}
                                            </select>
                                            </div>

                                            <div className='address_input'>
                                                <label>ZIP Code (Required) :</label>
                                                <input type="number" placeholder='ex. 3003' id="add8_inp8" required/>
                                            </div>
                                    </Grid>

                    </div>

                </form>
                </div>

                <div className='stepper_container'>
                        <button>&#8592; &nbsp;&nbsp;&nbsp; Back</button>
                        <button>Next &nbsp;&nbsp;&nbsp; &#8594;</button>
                </div>
            </div> 
        </div>
    )
}


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