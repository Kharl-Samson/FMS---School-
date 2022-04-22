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
        if(dateFromLD[z].value >= dateToLD[z].value && dateToLD[z].value !=="" && dateToLD[z].value !==""){
            list_of_errors +="- Entry("+(z+1)+") Date From and To are invalid range (Secondary). <br/>";
        }
        else{
            list_of_errors += "";
        }
    }
    
    const hoursLD = document.getElementsByName("titleLD[]");
    const hoursLD1 = Array.from(hoursLD).filter( input => input.value !== "");
    hoursLD1.length != hoursLD.length ? list_of_errors += "- Number of hours cannot be blank. <br/>" : list_of_errors += ""

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
     
     

        document.getElementsByClassName("back_stepper6")[0].style.display = "block";
        document.getElementsByClassName("next_stepper6")[0].style.display = "block";
        document.getElementsByClassName("preview_pds")[0].style.display = "block";    
        
        document.getElementById("preview_fname").textContent = document.getElementById("fname_pds").value.toUpperCase();
        document.getElementById("preview_mname").textContent = document.getElementById("mname_pds").value.toUpperCase();
        document.getElementById("preview_lname").textContent = document.getElementById("lname_pds").value.toUpperCase();
      
    }    

}
export default validatorPDS5;