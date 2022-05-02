function validatorPDS5(){
    document.getElementsByClassName("pds_validator")[0].style.display = "block";
    var list_of_errors = "";

    //CSE---------------------------------------------
    const titleLD = document.getElementsByName("titleLD[]");
    const titleLD1 = Array.from(titleLD).filter( input => input.value !== "");
    titleLD1.length != titleLD.length ? list_of_errors += "- Title of Learning and Development Interventions/Training Programs cannot be blank. <br/>" : list_of_errors += ""

    const dateFromLD = document.getElementsByName("dateFromLD[]");
    const dateToLD = document.getElementsByName("dateToLD[]");
    for(var z = 0; z < dateFromLD.length; z++) {
        if(dateFromLD[z].value > dateToLD[z].value && dateFromLD[z].value !=="" && dateToLD[z].value !==""){
            list_of_errors +="- Entry("+(z+1)+") Date From and To are invalid range (Secondary). <br/>";
        }
        else{
            list_of_errors += "";
        }
    }
    
    const hoursLD = document.getElementsByName("hoursLD[]");
    //const hoursLD1 = Array.from(hoursLD).filter( input => input.value !== "");
    //hoursLD1.length != hoursLD.length ? list_of_errors += "- Number of hours cannot be blank. <br/>" : list_of_errors += ""

    const typeLD = document.getElementsByName("typeLD[]");
    const typeLD1 = Array.from(typeLD).filter( input => input.value !== "");
    typeLD1.length != typeLD.length ? list_of_errors += "- Type of LD (Managerial/ Supervisory/ Technical/ etc) cannot be blank. <br/>" : list_of_errors += ""

    const sponsoredLD = document.getElementsByName("sponsoredLD[]");
    const sponsoredLD1 = Array.from(sponsoredLD).filter( input => input.value !== "");
    sponsoredLD1.length != sponsoredLD.length ? list_of_errors += "- Conducted/ Sponsored By cannot be blank. <br/>" : list_of_errors += ""

    const coverageLD = document.getElementsByName("coverageLD[]");
    const coverageLD1 = Array.from(coverageLD).filter( input => input.value !== "");
    coverageLD1.length != coverageLD.length ? list_of_errors += "- Coverage cannot be blank. <br/>" : list_of_errors += ""

    const categoryLD = document.getElementsByName("categoryLD[]");
    const categoryLD1 = Array.from(categoryLD).filter( input => input.value !== "");
    categoryLD1.length != categoryLD.length ? list_of_errors += "- Category cannot be blank. <br/>" : list_of_errors += ""
    //------------------------------------------------------------------------

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

        document.getElementsByClassName("step5_content")[0].style.display = "none";
        document.getElementsByClassName("back_stepper5")[0].style.display = "none";
        document.getElementsByClassName("next_stepper5")[0].style.display = "none";

        document.getElementsByClassName("stepper5")[0].style.borderBottomRightRadius = "0px";
        document.getElementsByClassName("stepper5")[0].style.borderTopRightRadius = "0px";
     
     

 
        document.getElementsByClassName("next_stepper6")[0].style.display = "block";
        document.getElementsByClassName("preview_pds")[0].style.display = "block";    
        
        //VIEWING IN PDF FORMAT 
        document.getElementById("preview_fname").textContent = document.getElementById("fname_pds").value.toUpperCase();
        document.getElementById("preview_mname").textContent = document.getElementById("mname_pds").value.toUpperCase();
        document.getElementById("preview_lname").textContent = document.getElementById("lname_pds").value.toUpperCase();
        document.getElementById("preview_extension").textContent = document.getElementById("nameextension_pds").value.toUpperCase();
        document.getElementById("preview_bday").textContent = document.getElementById("bdate_input").value;
        document.getElementById("preview_age").textContent = document.getElementById("age_input").textContent+" YEARS OLD";
        document.getElementById("preview_pob").textContent = document.getElementById("cob_pds").value.toUpperCase()+" , "+document.getElementById("cityOfBirth_pds").value.toUpperCase();
        document.getElementById("preview_gender").textContent = document.getElementById("gender_pds").value.toUpperCase();
        document.getElementById("preview_civil").textContent = document.getElementById("civil_pds").value.toUpperCase();
        document.getElementById("preview_height").textContent = document.getElementById("height_pds").value.toUpperCase()+" CM"
        document.getElementById("preview_weight").textContent = document.getElementById("weight_pds").value.toUpperCase()+" KG"
        document.getElementById("preview_blood").textContent = document.getElementById("blood_pds").value.toUpperCase();
        document.getElementById("preview_gsis").textContent = document.getElementById("gsis_pds").value.toUpperCase();
        document.getElementById("preview_pagibig").textContent = document.getElementById("pagibig_pds").value.toUpperCase();
        document.getElementById("preview_philhealth").textContent = document.getElementById("philhealth_pds").value.toUpperCase();
        document.getElementById("preview_sss").textContent = document.getElementById("sss_pds").value.toUpperCase();
        document.getElementById("preview_tin").textContent = document.getElementById("tin_pds").value.toUpperCase();
        document.getElementById("preview_empNo").textContent = document.getElementById("employee_pds").value.toUpperCase();
        document.getElementById("preview_citizenship").textContent = document.getElementById("citizenship_pds").value.toUpperCase();
        document.getElementById("preview_email").textContent = document.getElementById("email_pds").value;
        document.getElementById("preview_alEmail").textContent = document.getElementById("al_email_pds").value;

        document.getElementById("preview_house").textContent = document.getElementById("add_handler1").value.toUpperCase();
        document.getElementById("preview_street").textContent = document.getElementById("add_handler2").value.toUpperCase();
        document.getElementById("preview_subdi").textContent = document.getElementById("add_handler3").value.toUpperCase();
        document.getElementById("preview_barangay").textContent = document.getElementById("add_handler7").value.toUpperCase();
        document.getElementById("preview_city").textContent =  document.getElementById("add_handler6").value.toUpperCase();
        document.getElementById("preview_province").textContent = document.getElementById("add_handler5").value.toUpperCase();
        document.getElementById("preview_zip").textContent =  document.getElementById("add_handler8").value.toUpperCase();
        
        document.getElementById("preview_house1").textContent = document.getElementById("add_handler9").value.toUpperCase();
        document.getElementById("preview_street1").textContent = document.getElementById("add_handler10").value.toUpperCase();
        document.getElementById("preview_subdi1").textContent = document.getElementById("add_handler11").value.toUpperCase();
        document.getElementById("preview_barangay1").textContent = document.getElementById("add_handler15").value.toUpperCase();
        document.getElementById("preview_city1").textContent =  document.getElementById("add_handler14").value.toUpperCase();
        document.getElementById("preview_province1").textContent = document.getElementById("add_handler13").value.toUpperCase();
        document.getElementById("preview_zip1").textContent =  document.getElementById("add_handler16").value.toUpperCase();
        
        document.getElementById("preview_mobile").textContent = document.getElementById("input_phone").value;
        document.getElementById("preview_tele").textContent =  document.getElementById("tele_pds").value;

        //Educational Background
        document.getElementById("elemName_Input").value = document.getElementById("nameELEM_handler").value.toUpperCase();
        document.getElementById("elemDateFrom_Input").value = document.getElementById("dateFromELEM_handler").value;
        document.getElementById("elemDateTo_Input").value = document.getElementById("dateToELEM_handler").value;
        document.getElementById("elemUnit_Input").value =  document.getElementById("unitsELEM_handler").value.toUpperCase();
        document.getElementById("elemYear_Input").value = document.getElementById("yearGradELEM_handler").value.toUpperCase();
        document.getElementById("elemAward_Input").value = document.getElementById("awardELEM_handler").value.toUpperCase();  
        
        document.getElementById("secName_Input").value = document.getElementById("nameSecond_handler").value.toUpperCase();
        document.getElementById("secAttain_Input").value = document.getElementById("attainSecond_handler").value.toUpperCase();
        document.getElementById("secDateFrom_Input").value = document.getElementById("dateFromSecond_handler").value;
        document.getElementById("secDateTo_Input").value = document.getElementById("dateToSecond_handler").value;
        document.getElementById("secUnit_Input").value =  document.getElementById("unitsSecond_handler").value.toUpperCase();
        document.getElementById("secYear_Input").value = document.getElementById("yearGradSecond_handler").value.toUpperCase();
        document.getElementById("secAward_Input").value = document.getElementById("awardSecond_handler").value.toUpperCase();  

        document.getElementById("vocName_Input").value = document.getElementById("nameVocational_handler").value.toUpperCase();
        document.getElementById("vocAttain_Input").value = document.getElementById("attainVocational_handler").value.toUpperCase();
        document.getElementById("vocDateFrom_Input").value = document.getElementById("dateFromVocational_handler").value;
        document.getElementById("vocDateTo_Input").value = document.getElementById("dateToVocational_handler").value;
        document.getElementById("vocUnit_Input").value =  document.getElementById("unitsVocational_handler").value.toUpperCase();
        document.getElementById("vocYear_Input").value = document.getElementById("yearGradVocational_handler").value.toUpperCase();
        document.getElementById("vocAward_Input").value = document.getElementById("awardVocational_handler").value.toUpperCase();  
        
        document.getElementById("colName_Input").value = document.getElementById("nameCollege_handler").value.toUpperCase();
        document.getElementById("colAttain_Input").value = document.getElementById("attainCollege_handler").value.toUpperCase();
        document.getElementById("colDateFrom_Input").value = document.getElementById("dateFromCollege_handler").value;
        document.getElementById("colDateTo_Input").value = document.getElementById("dateToCollege_handler").value;
        document.getElementById("colUnit_Input").value =  document.getElementById("unitsCollege_handler").value.toUpperCase();
        document.getElementById("colYear_Input").value = document.getElementById("yearGradCollege_handler").value.toUpperCase();
        document.getElementById("colAward_Input").value = document.getElementById("awardCollege_handler").value.toUpperCase();  

        document.getElementById("gradName_Input").value = document.getElementById("nameGraduate_handler").value.toUpperCase();
        document.getElementById("gradAttain_Input").value = document.getElementById("attainGraduate_handler").value.toUpperCase();
        document.getElementById("gradDateFrom_Input").value = document.getElementById("dateFromGraduate_handler").value;
        document.getElementById("gradDateTo_Input").value = document.getElementById("dateToGraduate_handler").value;
        document.getElementById("gradUnit_Input").value =  document.getElementById("unitsGraduate_handler").value.toUpperCase();
        document.getElementById("gradYear_Input").value = document.getElementById("yearGradGraduate_handler").value.toUpperCase();
        document.getElementById("gradAward_Input").value = document.getElementById("awardGraduate_handler").value.toUpperCase();  

        //CSE
        document.getElementById("cseBoard_Input").value = document.getElementById("CSE_board_handler").value.toUpperCase();
        document.getElementById("cseRating_Input").value = document.getElementById("CSE_rating_handler").value.toUpperCase();
        document.getElementById("cseDateExam_Input").value = document.getElementById("CSE_dateExam_handler").value.toUpperCase();
        document.getElementById("csePlaceExam_Input").value = document.getElementById("CSE_placeExam_handler").value.toUpperCase();
        document.getElementById("cseLicense_Input").value = document.getElementById("CSE_licenseNo_handler").value.toUpperCase();
        document.getElementById("cseDateVal_Input").value = document.getElementById("CSE_dateValidity_handler").value.toUpperCase();

        //WE
        document.getElementById("weFrom_Input").value = document.getElementById("WE_dateFrom_handler").value.toUpperCase();
        document.getElementById("weTo_Input").value = document.getElementById("WE_dateTo_handler").value.toUpperCase();
        document.getElementById("wePosition_Input").value = document.getElementById("WE_position_handler").value.toUpperCase();
        document.getElementById("weDepartment_Input").value = document.getElementById("WE_dept_handler").value.toUpperCase();
        document.getElementById("weMonthly_Input").value = document.getElementById("WE_monthly_handler").value.toUpperCase();
        document.getElementById("weSalary_Input").value = document.getElementById("WE_salary_handler").value.toUpperCase();
        document.getElementById("weAppoint_Input").value = document.getElementById("WE_appoint_handler").value.toUpperCase();
        document.getElementById("weGov_Input").value = document.getElementById("WE_govt_handler").value.toUpperCase();

        //LD
        document.getElementById("ldTitle_Input").value = document.getElementById("LD_title_handler").value.toUpperCase();
        document.getElementById("ldFrom_Input").value = document.getElementById("LD_dateFrom_handler").value.toUpperCase();
        document.getElementById("ldTo_Input").value = document.getElementById("LD_dateTo_handler").value.toUpperCase();
        document.getElementById("ldHours_Input").value = document.getElementById("LD_hours_handler").value.toUpperCase();
        document.getElementById("ldType_Input").value = document.getElementById("LD_type_handler").value.toUpperCase();
        document.getElementById("ldCoverage_Input").value = document.getElementById("LD_coverage_handler").value.toUpperCase();
        document.getElementById("ldSponsor_Input").value = document.getElementById("LD_sponsored_handler").value.toUpperCase();

    
    }    

}
export default validatorPDS5;