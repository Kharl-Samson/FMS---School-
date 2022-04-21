function validatorPDS1(){
    document.getElementsByClassName("pds_validator")[0].style.display = "block";
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
        if(document.getElementById("al_email_pds").value == "N/A" || document.getElementById("al_email_pds").value =="N/a" || document.getElementById("al_email_pds").value =="n/A" || document.getElementById("al_email_pds").value =="n/a"){


        }
        else{
            if( !validateEmail(document.getElementById("al_email_pds").value)) {    
                list_of_errors += "- Alternate Email address is an invalid format. <br/>"
            }
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
            document.getElementsByClassName("form_container")[0].scrollTop = 0

            document.getElementsByClassName("step1_content")[0].style.display = "none";
            document.getElementsByClassName("back_stepper1")[0].style.display = "none";
            document.getElementsByClassName("next_stepper1")[0].style.display = "none";

            document.getElementsByClassName("stepper1")[0].style.borderBottomRightRadius = "0px";
            document.getElementsByClassName("stepper1")[0].style.borderTopRightRadius = "0px";
         
            document.getElementsByClassName("stepper2")[0].style.backgroundColor = "#FFAA28";
            document.getElementsByClassName("stepper2")[0].style.borderBottomRightRadius = "50px";
            document.getElementsByClassName("stepper2")[0].style.borderTopRightRadius = "50px";
            document.getElementsByClassName("circle2")[0].style.backgroundColor = "#ffff";
            document.getElementsByClassName("circle2")[0].style.color = "#FFAA28";
            document.getElementsByClassName("stepper_text2")[0].style.color = "#ffff";
   
            document.getElementsByClassName("back_stepper2")[0].style.display = "block";
            document.getElementsByClassName("next_stepper2")[0].style.display = "block";
            document.getElementsByClassName("step2_content")[0].style.display = "block";
        }

}

export default validatorPDS1;