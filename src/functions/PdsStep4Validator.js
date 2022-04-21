function validatorPDS4(){
    document.getElementsByClassName("pds_validator")[0].style.display = "block";
    var list_of_errors = "";

    //CSE---------------------------------------------
    const dateFromWE = document.getElementsByName("dateFromWE[]");
    const dateToWE = document.getElementsByName("dateToWE[]");
    for(var z = 0; z < dateFromWE.length; z++) {
        if(dateFromWE[z].value >= dateToWE[z].value && dateFromWE[z].value !=="" && dateToWE[z].value !==""){
            list_of_errors +="- Entry("+(z+1)+") Date From and To are invalid range. <br/>";
        }
        else{
            list_of_errors += "";
        }
    }
  
    const positionWE = document.getElementsByName("positionWE[]");
    const positionWE1 = Array.from(positionWE).filter( input => input.value !== "");
    positionWE1.length != positionWE.length ? list_of_errors += "- Position Title cannot be blank. <br/>" : list_of_errors += ""

    const deptWE = document.getElementsByName("placeExamCSE[]");
    const deptWE1 = Array.from(deptWE).filter( input => input.value !== "");
    deptWE1.length != deptWE.length ? list_of_errors += "- Department / Agency / Office / Company cannot be blank. <br/>" : list_of_errors += ""

    const monthlyWE = document.getElementsByName("monthlyWE[]");
    const monthlyWE1 = Array.from(monthlyWE).filter( input => input.value !== "");
    monthlyWE1.length != monthlyWE.length ? list_of_errors += "- Monthly salary cannot be blank. <br/>" : list_of_errors += ""

    const salaryWE = document.getElementsByName("salaryWE[]");
    const salaryWE1 = Array.from(salaryWE).filter( input => input.value !== "");
    salaryWE1.length != salaryWE.length ? list_of_errors += "- Salary/ Job/ Pay Grade cannot be blank. <br/>" : list_of_errors += ""
  
    const appointWE = document.getElementsByName("appointWE[]");
    const appointWE1 = Array.from(appointWE).filter( input => input.value !== "");
    appointWE1.length != appointWE.length ? list_of_errors += "-Status of appointment cannot be blank. <br/>" : list_of_errors += ""

    const govtWE = document.getElementsByName("govtWE[]");
    const govtWE1 = Array.from(govtWE).filter( input => input.value !== "");
    govtWE1.length != govtWE.length ? list_of_errors += "- GOV'T SERVICE cannot be blank. <br/>" : list_of_errors += ""
    
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

        document.getElementsByClassName("step4_content")[0].style.display = "none";
        document.getElementsByClassName("back_stepper4")[0].style.display = "none";
        document.getElementsByClassName("next_stepper4")[0].style.display = "none";

        document.getElementsByClassName("stepper4")[0].style.borderBottomRightRadius = "0px";
        document.getElementsByClassName("stepper4")[0].style.borderTopRightRadius = "0px";
     
        document.getElementsByClassName("stepper5")[0].style.backgroundColor = "#FFAA28";
        document.getElementsByClassName("stepper5")[0].style.borderBottomRightRadius = "50px";
        document.getElementsByClassName("stepper5")[0].style.borderTopRightRadius = "50px";
        document.getElementsByClassName("circle5")[0].style.backgroundColor = "#ffff";
        document.getElementsByClassName("circle5")[0].style.color = "#FFAA28";
        document.getElementsByClassName("stepper_text5")[0].style.color = "#ffff";

        document.getElementsByClassName("back_stepper5")[0].style.display = "block";
        document.getElementsByClassName("next_stepper5")[0].style.display = "block";
        document.getElementsByClassName("step5_content")[0].style.display = "block";      
    }    

}
export default validatorPDS4;