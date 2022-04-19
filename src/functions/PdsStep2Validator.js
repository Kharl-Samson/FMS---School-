function validatorPDS2(){
    document.getElementsByClassName("pds_validator")[0].style.display = "block";
    var list_of_errors = "";

    //Elementary---------------------------------------------
    const e_Name = document.getElementsByName("elem_namePDS[]");
    const v_Ename = Array.from(e_Name).filter( input => input.value !== "");
    v_Ename.length != e_Name.length ? list_of_errors += "- School name cannot be blank (Elementary). <br/>" : list_of_errors += ""

    const e_DateFrom = document.getElementsByName("elem_dateFromPDS[]");
    const v_EdateFrom = Array.from(e_DateFrom).filter( input => input.value !== "");
    v_EdateFrom.length != e_DateFrom.length ? list_of_errors += "- Date attended (From) cannot be blank (Elementary). <br/>" : list_of_errors += ""

    const e_DateTo = document.getElementsByName("elem_dateToPDS[]");
    //const v_EdateTo = Array.from(e_DateTo).filter( input => input.value !== "");
    //v_EdateTo.length != e_DateTo.length ? list_of_errors += "- Date attended (To) cannot be blank (Elementary). <br/>" : list_of_errors += ""
    
    for(var z = 0; z < e_DateFrom.length; z++) {
        if(e_DateFrom[z].value >= e_DateTo[z].value && e_DateFrom[z].value !=="" && e_DateTo[z].value !==""){
            list_of_errors +="- Entry("+(z+1)+") Date From and To are invalid range (Elementary). <br/>";
        }
        else{
            list_of_errors += "";
        }
    }

    const e_yearGrad = document.getElementsByName("elem_yearGradPDS[]");
    const v_EyearGrad = Array.from(e_yearGrad).filter( input => input.value !== "");
    v_EyearGrad.length != e_yearGrad.length ? list_of_errors += "- Year graduate cannot be empty (Elementary). <br/>" : list_of_errors += ""

    const e_award = document.getElementsByName("elem_awardsPDS[]");
    const v_Eaward = Array.from(e_award).filter( input => input.value !== "");
    v_Eaward.length != e_award.length ? list_of_errors += "- Write N/A in Scholarships/Academic Honors Received (Elementary). <br/>" : list_of_errors += ""

    //Secondary---------------------------------------------
    const s_Name = document.getElementsByName("second_namePDS[]");
    const v_Sname = Array.from(s_Name).filter( input => input.value !== "");
    v_Sname.length != s_Name.length ? list_of_errors += "- School name cannot be blank (Secondary). <br/>" : list_of_errors += ""

    const s_Attain = document.getElementsByName("second_attainmentPDS[]");
    const v_Sattain = Array.from(s_Attain).filter( input => input.value !== "");
    v_Sattain .length !=s_Attain.length ? list_of_errors += "- Basic Education/Degree/Course cannot be blank (Secondary). <br/>" : list_of_errors += ""

    const s_DateFrom = document.getElementsByName("second_dateFromPDS[]");
    const v_SdateFrom = Array.from(s_DateFrom).filter( input => input.value !== "");
    v_SdateFrom.length != s_DateFrom.length ? list_of_errors += "- Date attended (From) cannot be blank (Secondary). <br/>" : list_of_errors += ""

    const s_DateTo = document.getElementsByName("second_dateToPDS[]");
    //const v_SdateTo = Array.from(s_DateTo).filter( input => input.value !== "");
    //v_SdateTo.length != s_DateTo.length ? list_of_errors += "- Date attended (To) cannot be blank (Secondary). <br/>" : list_of_errors += ""

    for(var z = 0; z < s_DateFrom.length; z++) {
        if(s_DateFrom[z].value >= s_DateTo[z].value && s_DateFrom[z].value !=="" && s_DateTo[z].value !==""){
            list_of_errors +="- Entry("+(z+1)+") Date From and To are invalid range (Secondary). <br/>";
        }
        else{
            list_of_errors += "";
        }
    }

    const s_yearGrad = document.getElementsByName("second_yearGradPDS[]");
    const v_SyearGrad = Array.from(s_yearGrad).filter( input => input.value !== "");
    v_SyearGrad.length != s_yearGrad.length ? list_of_errors += "- Year graduate cannot be empty (Secondary). <br/>" : list_of_errors += ""

    const s_award = document.getElementsByName("second_awardsPDS[]");
    const v_Saward = Array.from(s_award).filter( input => input.value !== "");
    v_Saward.length != s_award.length ? list_of_errors += "- Write N/A in Scholarships/Academic Honors Received (Secondary). <br/>" : list_of_errors += ""


    //Vocational---------------------------------------------
    const v_Name = document.getElementsByName("vocational_namePDS[]");
    const v_Vname = Array.from(v_Name).filter( input => input.value !== "");
    v_Vname.length != v_Name.length ? list_of_errors += "- School name cannot be blank (Vocational). <br/>" : list_of_errors += ""

    const v_Attain = document.getElementsByName("vocational_attainmentPDS[]");
    const v_Vattain = Array.from(v_Attain).filter( input => input.value !== "");
    v_Vattain .length !=v_Attain.length ? list_of_errors += "- Basic Education/Degree/Course cannot be blank (Vocational). <br/>" : list_of_errors += ""

    const v_DateFrom = document.getElementsByName("vocational_dateFromPDS[]");
    //const v_VdateFrom = Array.from(v_DateFrom).filter( input => input.value !== "");
    //v_VdateFrom.length != v_DateFrom.length ? list_of_errors += "- Date attended (From) cannot be blank (Vocational). <br/>" : list_of_errors += ""

    const v_DateTo = document.getElementsByName("vocational_dateToPDS[]");
    //const v_VdateTo = Array.from(v_DateTo).filter( input => input.value !== "");
   // v_VdateTo.length != v_DateTo.length ? list_of_errors += "- Date attended (To) cannot be blank (Vocational). <br/>" : list_of_errors += ""

    for(var z = 0; z < v_DateFrom.length; z++) {
        if(v_DateFrom[z].value >= v_DateTo[z].value && v_DateFrom[z].value !=="" && v_DateTo[z].value !==""){
            list_of_errors +="- Entry("+(z+1)+") Date From and To are invalid range (Vocational). <br/>";
        }
        else{
            list_of_errors += "";
        }
    }

    const v_yearGrad = document.getElementsByName("vocational_yearGradPDS[]");
    const v_VyearGrad = Array.from(v_yearGrad).filter( input => input.value !== "");
    v_VyearGrad.length != v_yearGrad.length ? list_of_errors += "- Year graduate cannot be empty (Vocational). <br/>" : list_of_errors += ""

    const v_award = document.getElementsByName("vocational_awardsPDS[]");
    const v_Vaward = Array.from(v_award).filter( input => input.value !== "");
    v_Vaward.length != v_award.length ? list_of_errors += "- Write N/A in Scholarships/Academic Honors Received (Vocational). <br/>" : list_of_errors += ""


    //College---------------------------------------------
    const c_Name = document.getElementsByName("college_namePDS[]");
    const v_Cname = Array.from(c_Name).filter( input => input.value !== "");
    v_Cname.length != c_Name.length ? list_of_errors += "- School name cannot be blank (College). <br/>" : list_of_errors += ""

    const c_Attain = document.getElementsByName("college_attainmentPDS[]");
    const v_Cattain = Array.from(c_Attain).filter( input => input.value !== "");
    v_Cattain .length !=c_Attain.length ? list_of_errors += "- Basic Education/Degree/Course cannot be blank (College). <br/>" : list_of_errors += ""
    const c_DateFrom = document.getElementsByName("college_dateFromPDS[]");
    const v_CdateFrom = Array.from(c_DateFrom).filter( input => input.value !== "");
    v_CdateFrom.length != c_DateFrom.length ? list_of_errors += "- Date attended (From) cannot be blank (College). <br/>" : list_of_errors += ""

    const c_DateTo = document.getElementsByName("college_dateToPDS[]");
    //const v_CdateTo = Array.from(c_DateTo).filter( input => input.value !== "");
    //v_CdateTo.length != c_DateTo.length ? list_of_errors += "- Date attended (To) cannot be blank (College). <br/>" : list_of_errors += ""

    for(var z = 0; z < c_DateFrom.length; z++) {
        if(c_DateFrom[z].value >= c_DateTo[z].value && c_DateFrom[z].value !=="" && c_DateTo[z].value !==""){
            list_of_errors +="- Entry("+(z+1)+") Date From and To are invalid range (College). <br/>";
        }
        else{
            list_of_errors += "";
        }
    }

    const c_yearGrad = document.getElementsByName("college_yearGradPDS[]");
    const v_CyearGrad = Array.from(c_yearGrad).filter( input => input.value !== "");
    v_CyearGrad.length != c_yearGrad.length ? list_of_errors += "- Year graduate cannot be empty (College). <br/>" : list_of_errors += ""

    const c_award = document.getElementsByName("college_awardsPDS[]");
    const v_Caward = Array.from(c_award).filter( input => input.value !== "");
    v_Caward.length != c_award.length ? list_of_errors += "- Write N/A in Scholarships/Academic Honors Received (College). <br/>" : list_of_errors += ""


    //Graduate studies---------------------------------------------
    const g_Name = document.getElementsByName("graduate_namePDS[]");
    const v_Gname = Array.from(g_Name).filter( input => input.value !== "");
    v_Gname.length != g_Name.length ? list_of_errors += "- School name cannot be blank (Graduate Studies). <br/>" : list_of_errors += ""

    const g_Attain = document.getElementsByName("graduate_attainmentPDS[]");
    const v_Gattain = Array.from(g_Attain).filter( input => input.value !== "");
    v_Gattain .length !=g_Attain.length ? list_of_errors += "- Basic Education/Degree/Course cannot be blank (Graduate Studies). <br/>" : list_of_errors += ""

    const g_DateFrom = document.getElementsByName("graduate_dateFromPDS[]");
    //const v_GdateFrom = Array.from(g_DateFrom).filter( input => input.value !== "");
   //v_GdateFrom.length != g_DateFrom.length ? list_of_errors += "- Date attended (From) cannot be blank (Graduate Studies). <br/>" : list_of_errors += ""

    const g_DateTo = document.getElementsByName("graduate_dateToPDS[]");
    //const v_GdateTo = Array.from(g_DateTo).filter( input => input.value !== "");
    //v_GdateTo.length != g_DateTo.length ? list_of_errors += "- Date attended (To) cannot be blank (Graduate Studies). <br/>" : list_of_errors += ""

    for(var z = 0; z < g_DateFrom.length; z++) {
        if(g_DateFrom[z].value >= g_DateTo[z].value && g_DateFrom[z].value !=="" && g_DateTo[z].value !==""){
            list_of_errors +="- Entry("+(z+1)+") Date From and To are invalid range (Graduate Studies). <br/>";
        }
        else{
            list_of_errors += "";
        }
    }

    const g_yearGrad = document.getElementsByName("graduate_yearGradPDS[]");
    const v_GyearGrad = Array.from(g_yearGrad).filter( input => input.value !== "");
    v_GyearGrad.length != g_yearGrad.length ? list_of_errors += "- Year graduate cannot be empty (Graduate Studies). <br/>" : list_of_errors += ""

    const g_award = document.getElementsByName("graduate_awardsPDS[]");
    const v_Gaward = Array.from(g_award).filter( input => input.value !== "");
    v_Gaward.length != g_award.length ? list_of_errors += "- Write N/A in Scholarships/Academic Honors Received (Graduate Studies). <br/>" : list_of_errors += ""

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

        document.getElementsByClassName("step2_content")[0].style.display = "none";
        document.getElementsByClassName("back_stepper2")[0].style.display = "none";
        document.getElementsByClassName("next_stepper2")[0].style.display = "none";

        document.getElementsByClassName("stepper2")[0].style.borderBottomRightRadius = "0px";
        document.getElementsByClassName("stepper2")[0].style.borderTopRightRadius = "0px";
     
        document.getElementsByClassName("stepper3")[0].style.backgroundColor = "#FFAA28";
        document.getElementsByClassName("stepper3")[0].style.borderBottomRightRadius = "50px";
        document.getElementsByClassName("stepper3")[0].style.borderTopRightRadius = "50px";
        document.getElementsByClassName("circle3")[0].style.backgroundColor = "#ffff";
        document.getElementsByClassName("circle3")[0].style.color = "#FFAA28";
        document.getElementsByClassName("stepper_text3")[0].style.color = "#ffff";

        document.getElementsByClassName("back_stepper3")[0].style.display = "block";
        document.getElementsByClassName("next_stepper3")[0].style.display = "block";
        document.getElementsByClassName("step3_content")[0].style.display = "block";      
    }
}
export default validatorPDS2;