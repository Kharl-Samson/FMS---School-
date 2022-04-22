function validatorPDS0(){
    document.getElementsByClassName("pds_validator")[0].style.display = "none";

     document.getElementsByClassName("consent_form")[0].style.display="none";
     document.getElementsByClassName("step1_content")[0].style.display="block";

     document.getElementsByClassName("back_stepper0")[0].style.display="none";
     document.getElementsByClassName("back_stepper1")[0].style.display="block";

     document.getElementsByClassName("next_stepper0")[0].style.display="none";
     document.getElementsByClassName("next_stepper1")[0].style.display="block";
     
}

export default validatorPDS0;