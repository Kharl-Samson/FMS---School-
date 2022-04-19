function validatorPDS3(){
    document.getElementsByClassName("pds_validator")[0].style.display = "block";
    var list_of_errors = "";

    //CSE---------------------------------------------
    const boardCSE = document.getElementsByName("boardCSE[]");
    const boardCSE1 = Array.from(boardCSE).filter( input => input.value !== "");
    boardCSE1.length != boardCSE.length ? list_of_errors += "- Career Service/ RA 1080 (BOARD/ BAR) Under Special Laws/ CES/ CSEE Barangay Eligibility / Driver's License cannot be blank. <br/>" : list_of_errors += ""

    const ratingCSE = document.getElementsByName("ratingCSE[]");
    const ratingCSE1 = Array.from(ratingCSE).filter( input => input.value !== "");
    ratingCSE1.length != ratingCSE.length ? list_of_errors += "- Rating cannot be blank. <br/>" : list_of_errors += ""

    const placeExamCSE = document.getElementsByName("placeExamCSE[]");
    const placeExamCSE1 = Array.from(placeExamCSE).filter( input => input.value !== "");
    placeExamCSE1.length != placeExamCSE.length ? list_of_errors += "- Place of Examination/Conferment cannot be blank. <br/>" : list_of_errors += ""
    const licenseCSE = document.getElementsByName("licenseCSE[]");
    const licenseCSE1 = Array.from(licenseCSE).filter( input => input.value !== "");
    licenseCSE1.length != licenseCSE.length ? list_of_errors += "- License number cannot be blank. <br/>" : list_of_errors += ""
  
  

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

        document.getElementsByClassName("step3_content")[0].style.display = "none";
        document.getElementsByClassName("back_stepper3")[0].style.display = "none";
        document.getElementsByClassName("next_stepper3")[0].style.display = "none";

        document.getElementsByClassName("stepper3")[0].style.borderBottomRightRadius = "0px";
        document.getElementsByClassName("stepper3")[0].style.borderTopRightRadius = "0px";
     
        document.getElementsByClassName("stepper4")[0].style.backgroundColor = "#FFAA28";
        document.getElementsByClassName("stepper4")[0].style.borderBottomRightRadius = "50px";
        document.getElementsByClassName("stepper4")[0].style.borderTopRightRadius = "50px";
        document.getElementsByClassName("circle4")[0].style.backgroundColor = "#ffff";
        document.getElementsByClassName("circle4")[0].style.color = "#FFAA28";
        document.getElementsByClassName("stepper_text4")[0].style.color = "#ffff";

        document.getElementsByClassName("back_stepper4")[0].style.display = "block";
        document.getElementsByClassName("next_stepper4")[0].style.display = "block";
        document.getElementsByClassName("step4_content")[0].style.display = "block";      
    }    

}
export default validatorPDS3;