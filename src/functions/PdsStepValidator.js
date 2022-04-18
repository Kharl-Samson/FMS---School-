function validatorPDS1(){
    document.getElementsByClassName("pds_validator")[0].style.display = "block";

    var stepperCounter = "1st";

    var fname_pds =  document.getElementById("fname_pds").value;
    var mname_pds =  document.getElementById("mname_pds").value
    var lname_pds =  document.getElementById("lname_pds").value;
    var nameextension_pds = document.getElementById("nameextension_pds").value;
    var age_input = document.getElementById("age_input").innerHTML;
    var cob_pds = document.getElementById("cob_pds").value;
    var cityOfBirth_pds = document.getElementById("cityOfBirth_pds").value;
    var gender_pds = document.getElementById("gender_pds").value;
    var civil_pds = document.getElementById("civil_pds").value;
    var height_pds = document.getElementById("height_pds").value;
    var weight_pds = document.getElementById("weight_pds").value;
    var blood_pds = document.getElementById("blood_pds").value;
    var gsis_pds = document.getElementById("gsis_pds").value;
    var pagibig_pds = document.getElementById("pagibig_pds").value;
    var philhealth_pds = document.getElementById("philhealth_pds").value;
    var sss_pds = document.getElementById("sss_pds").value;
    var tin_pds = document.getElementById("tin_pds").value;
    var citizenship_pds = document.getElementById("citizenship_pds").value;
    var email_pds = document.getElementById("email_pds").value;
    var al_email_pds = document.getElementById("al_email_pds").value;
    var House_pds = document.getElementById("House_pds").value;
    var street_pds = document.getElementById("street_pds").value;
    var subdi_pds = document.getElementById("subdi_pds").value;
    var province1_pds = document.getElementById("province1_pds").value;
    var city1_pds = document.getElementById("city1_pds").value;
    var barangay1_pds = document.getElementById("barangay1_pds").value;
    var zip1_pds = document.getElementById("zip1_pds").value;
    var House1_pds = document.getElementById("House1_pds").value;
    var street1_pds = document.getElementById("street1_pds").value;
    var subdi1_pds = document.getElementById("subdi1_pds").value;
    var province2_pds = document.getElementById("province2_pds").value;
    var city2_pds = document.getElementById("city2_pds").value;
    var barangay2_pds = document.getElementById("barangay2_pds").value;
    var zip2_pds = document.getElementById("zip2_pds").value;
    var input_phone = document.getElementById("input_phone").value;
    var tele_pds = document.getElementById("tele_pds").value;

    var list_of_errors = "";

    
    function validateEmail(email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email);
    }
    var phoneno = /^(09|\+639)\d{9}$/;

        document.getElementById("fname_pds").value == "" ? list_of_errors += "- First name cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("mname_pds").value == "" ? list_of_errors += "- Write N/A in Middle name. <br/>": list_of_errors += ""
        document.getElementById("lname_pds").value == "" ? list_of_errors += "- Last name cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("nameextension_pds").value == "" ? list_of_errors += "- Write N/A in Name Extension. <br/>": list_of_errors += ""  
        document.getElementById("age_input").innerHTML == "0" ? list_of_errors += "- Age cannot be 0. <br/>": list_of_errors += ""
        document.getElementById("cob_pds").value == "" ? list_of_errors += "- Country of birth cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("cityOfBirth_pds").value == "" ? list_of_errors += "- City of birth cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("gender_pds").value == "" ? list_of_errors += "- Gender cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("civil_pds").value == "" ? list_of_errors += "- Civil Status cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("height_pds").value == "" ? list_of_errors += "- Height cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("weight_pds").value == "" ? list_of_errors += "- Weight cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("blood_pds").value == "" ? list_of_errors += "- Blood Type cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("gsis_pds").value == "" ? list_of_errors += "- Write N/A in GSIS ID No. <br/>": list_of_errors += ""
        document.getElementById("pagibig_pds").value == "" ? list_of_errors += "- Write N/A in PAG-IBIG ID No. <br/>": list_of_errors += ""
        document.getElementById("philhealth_pds").value == "" ? list_of_errors += "- Write N/A in PHILHEALTH No. <br/>": list_of_errors += ""
        document.getElementById("sss_pds").value == "" ? list_of_errors += "- Write N/A in SSS No. <br/>": list_of_errors += ""
        document.getElementById("tin_pds").value == "" ? list_of_errors += "- Write N/A in TIN No. <br/>": list_of_errors += ""
        document.getElementById("citizenship_pds").value == "" ? list_of_errors += "- Citizenship cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("email_pds").value == "" ? list_of_errors += "- Email Address cannot be blank. <br/>": list_of_errors += ""
        //email verifyer
        if( !validateEmail(document.getElementById("email_pds").value)) {    
            list_of_errors += "- Email address is an invalid format. <br/>"
        }
        document.getElementById("al_email_pds").value == "" ? list_of_errors += "- Write N/A in Alternate Email address. <br/>": list_of_errors += ""
        if( !validateEmail(document.getElementById("al_email_pds").value)) {    
            list_of_errors += "- Alternate Email address is an invalid format. <br/>"
        }
        document.getElementById("House_pds").value == "" ? list_of_errors += "- Write N/A in Resident Address(House / Block / Lot No.). <br/>": list_of_errors += ""
        document.getElementById("street_pds").value == "" ? list_of_errors += "- Write N/A in Resident Address(Street). <br/>": list_of_errors += ""
        document.getElementById("subdi_pds").value == "" ? list_of_errors += "- Write N/A in Resident Address(Subdivision / Village). <br/>": list_of_errors += ""
        document.getElementById("province1_pds").value == "" ? list_of_errors += "- Resident Address (Province) cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("city1_pds").value == "" ? list_of_errors += "- Resident Address (City/Municipality) cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("barangay1_pds").value == "" ? list_of_errors += "- Resident Address (Barangay) cannot be blank. <br/>": list_of_errors += ""
        document.getElementById("zip1_pds").value == "" ? list_of_errors += "- Resident Address (ZIP code) cannot be blank. <br/>": list_of_errors += ""
        var checkBox = document.getElementById("address_checkbox");
        if (checkBox.checked == false){
            document.getElementById("House1_pds").value == "" ? list_of_errors += "- Write N/A in Permanent Address(House / Block / Lot No.). <br/>": list_of_errors += ""
            document.getElementById("street1_pds").value == "" ? list_of_errors += "- Write N/A in Permanent Address(Street). <br/>": list_of_errors += ""
            document.getElementById("subdi1_pds").value == "" ? list_of_errors += "- Write N/A in Permanent Address(Subdivision / Village). <br/>": list_of_errors += "" 
            document.getElementById("province2_pds").value == "" ? list_of_errors += "- Permanent Address (Province) cannot be blank. <br/>": list_of_errors += ""
            document.getElementById("city2_pds").value == "" ? list_of_errors += "- Permanent Address (City/Municipality) cannot be blank. <br/>": list_of_errors += ""
            document.getElementById("barangay2_pds").value == "" ? list_of_errors += "- Permanent Address (Barangay) cannot be blank. <br/>": list_of_errors += ""
            document.getElementById("zip2_pds").value == "" ? list_of_errors += "- Permanent Address (ZIP code) cannot be blank. <br/>": list_of_errors += ""
        }
        document.getElementById("input_phone").value == "" ? list_of_errors += "- Mobile No. cannot be blank. <br/>": list_of_errors += ""
        var phone = document.getElementById("input_phone").value;
        if( phone.length !==0 && phone.length !== 11){
            list_of_errors += "- Mobile No. is an invalid format. <br/>"
        }else if( phone.length === 0 ){}
        else if(!phone.match(phoneno)){
            list_of_errors += "- Mobile No. is an invalid format. <br/>"
        }else{}         
        document.getElementById("tele_pds").value == "" ? list_of_errors += "- Write N/A in Telephone No. <br/>": list_of_errors += ""
        document.getElementById("list_of_errors").innerHTML = list_of_errors;

        if(list_of_errors.length !== 0){
            setTimeout(() => {
                var objDiv = document.getElementsByClassName("form_container")[0];
                objDiv.scrollTop = objDiv.scrollHeight;
            }, 50)
        }
    


        
        if(list_of_errors.length === 0){
            document.getElementsByClassName("pds_validator")[0].style.display = "none";
            document.getElementsByClassName("step1_content")[0].style.display = "none";
            document.getElementsByClassName("step2_content")[0].style.display = "block";
            document.getElementsByClassName("form_container")[0].scrollTop = 0

            document.getElementsByClassName("back_stepper1")[0].style.display = "none";
            document.getElementsByClassName("back_stepper2")[0].style.display = "block";
            document.getElementsByClassName("next_stepper1")[0].style.display = "none";
            document.getElementsByClassName("next_stepper2")[0].style.display = "block";

        }

}

export default validatorPDS1;