//Getting all the ELEMENTARY NAME 
function getAllElementaryInput(){
    var inputHandlerName="", inputHandlerDateFrom="", inputHandlerDateTo="", inputHandlerUnit="", inputHandlerYearGrad="", inputHandlerAward="";
    var fieldsName = document.getElementsByName("elem_namePDS[]");
    var fieldDateFrom = document.getElementsByName("elem_dateFromPDS[]");
    var fieldDateTo = document.getElementsByName("elem_dateToPDS[]");
    var fieldUnit = document.getElementsByName("elem_unitPDS[]");
    var fieldYearGrad = document.getElementsByName("elem_yearGradPDS[]");
    var fieldAward = document.getElementsByName("elem_awardsPDS[]");
        
    for(var i = 0; i < fieldsName.length; i++) {
        inputHandlerName+=fieldsName[i].value+" |:| ";
        inputHandlerDateFrom+=fieldDateFrom[i].value+" |:| ";
        inputHandlerDateTo+=fieldDateTo[i].value+" |:| ";
        inputHandlerUnit+=fieldUnit[i].value+" |:| ";
        inputHandlerYearGrad+=fieldYearGrad[i].value+" |:| ";
        inputHandlerAward+=fieldAward[i].value+" |:| ";
    }
    document.getElementById("nameELEM_handler").value = inputHandlerName;
    document.getElementById("dateFromELEM_handler").value = inputHandlerDateFrom;
    document.getElementById("dateToELEM_handler").value = inputHandlerDateTo;
    document.getElementById("unitsELEM_handler").value =  inputHandlerUnit;
    document.getElementById("yearGradELEM_handler").value = inputHandlerYearGrad;
    document.getElementById("awardELEM_handler").value = inputHandlerAward;


    var s_handlerName="", s_handlerAttain="", s_handlerDateFrom="", s_handlerDateTo="", s_handlerUnit="" , s_handlerYearGrad="", s_handlerAward="";
    var s_name = document.getElementsByName("second_namePDS[]");
    var s_attain = document.getElementsByName("second_attainmentPDS[]");
    var s_dateFrom = document.getElementsByName("second_dateFromPDS[]");
    var s_dateTo = document.getElementsByName("second_dateToPDS[]");
    var s_unit = document.getElementsByName("second_unitPDS[]");
    var s_yearGrad = document.getElementsByName("second_yearGradPDS[]");
    var s_award = document.getElementsByName("second_awardsPDS[]");
    for(var x = 0; x < s_name.length; x++) {
        s_handlerName+=s_name[x].value+" |:| ";
        s_handlerAttain+=s_attain[x].value+" |:| ";
        s_handlerDateFrom+=s_dateFrom[x].value+" |:| ";
        s_handlerDateTo+=s_dateTo[x].value+" |:| ";
        s_handlerUnit+=s_unit[x].value+" |:| ";
        s_handlerYearGrad+=s_yearGrad[x].value+" |:| ";
        s_handlerAward+=s_award[x].value+" |:| ";
    }
    document.getElementById("nameSecond_handler").value = s_handlerName;
    document.getElementById("attainSecond_handler").value = s_handlerAttain;
    document.getElementById("dateFromSecond_handler").value = s_handlerDateFrom;
    document.getElementById("dateToSecond_handler").value = s_handlerDateTo;
    document.getElementById("unitsSecond_handler").value = s_handlerUnit;
    document.getElementById("yearGradSecond_handler").value = s_handlerYearGrad;
    document.getElementById("awardSecond_handler").value = s_handlerAward;


    var v_handlerName="", v_handlerAttain="", v_handlerDateFrom="", v_handlerDateTo="",v_handlerUnit="", v_handlerYearGrad="", v_handlerAward="";
    var v_name = document.getElementsByName("vocational_namePDS[]");
    var v_attain = document.getElementsByName("vocational_attainmentPDS[]");
    var v_dateFrom = document.getElementsByName("vocational_dateFromPDS[]");
    var v_dateTo = document.getElementsByName("vocational_dateToPDS[]");
    var v_unit = document.getElementsByName("vocational_unitPDS[]");
    var v_yearGrad = document.getElementsByName("vocational_yearGradPDS[]");
    var v_award = document.getElementsByName("vocational_awardsPDS[]");
    for(var y = 0; y < v_name.length; y++) {
        v_handlerName+=v_name[y].value+" |:| ";
        v_handlerAttain+=v_attain[y].value+" |:| ";
        v_handlerDateFrom+=v_dateFrom[y].value+" |:| ";
        v_handlerDateTo+=v_dateTo[y].value+" |:| ";
        v_handlerUnit+=v_unit[y].value+" |:| ";
        v_handlerYearGrad+=v_yearGrad[y].value+" |:| ";
        v_handlerAward+=v_award[y].value+" |:| ";
    }
    document.getElementById("nameVocational_handler").value = v_handlerName;
    document.getElementById("attainVocational_handler").value = v_handlerAttain;
    document.getElementById("dateFromVocational_handler").value = v_handlerDateFrom;
    document.getElementById("dateToVocational_handler").value = v_handlerDateTo;
    document.getElementById("unitsVocational_handler").value = v_handlerUnit;
    document.getElementById("yearGradVocational_handler").value = v_handlerYearGrad;
    document.getElementById("awardVocational_handler").value = v_handlerAward;


    var c_handlerName="", c_handlerAttain="", c_handlerDateFrom="", c_handlerDateTo="",c_handlerUnit="", c_handlerYearGrad="", c_handlerAward="";
    var c_name = document.getElementsByName("college_namePDS[]");
    var c_attain = document.getElementsByName("college_attainmentPDS[]");
    var c_dateFrom = document.getElementsByName("college_dateFromPDS[]");
    var c_dateTo = document.getElementsByName("college_dateToPDS[]");
    var c_unit = document.getElementsByName("college_unitPDS[]");
    var c_yearGrad = document.getElementsByName("college_yearGradPDS[]");
    var c_award = document.getElementsByName("college_awardsPDS[]");
    for(var z = 0; z < c_name.length; z++) {
        c_handlerName+=c_name[z].value+" |:| ";
        c_handlerAttain+=c_attain[z].value+" |:| ";
        c_handlerDateFrom+=c_dateFrom[z].value+" |:| ";
        c_handlerDateTo+=c_dateTo[z].value+" |:| ";
        c_handlerUnit+=c_unit[z].value+" |:| ";
        c_handlerYearGrad+=c_yearGrad[z].value+" |:| ";
        c_handlerAward+=c_award[z].value+" |:| ";
    }
    document.getElementById("nameCollege_handler").value = c_handlerName;
    document.getElementById("attainCollege_handler").value = c_handlerAttain;
    document.getElementById("dateFromCollege_handler").value = c_handlerDateFrom;
    document.getElementById("dateToCollege_handler").value = c_handlerDateTo;
    document.getElementById("unitsCollege_handler").value = c_handlerUnit;
    document.getElementById("yearGradCollege_handler").value = c_handlerYearGrad;
    document.getElementById("awardCollege_handler").value = c_handlerAward;


    var g_handlerName="", g_handlerAttain="", g_handlerDateFrom="", g_handlerDateTo="", g_handlerUnit="", g_handlerYearGrad="", g_handlerAward="";
    var g_name = document.getElementsByName("graduate_namePDS[]");
    var g_attain = document.getElementsByName("graduate_attainmentPDS[]");
    var g_dateFrom = document.getElementsByName("graduate_dateFromPDS[]");
    var g_dateTo = document.getElementsByName("graduate_dateToPDS[]");
    var g_unit = document.getElementsByName("graduate_unitPDS[]");
    var g_yearGrad = document.getElementsByName("graduate_yearGradPDS[]");
    var g_award = document.getElementsByName("graduate_awardsPDS[]");
    for(var g = 0; g < g_name.length; g++) {
        g_handlerName+=g_name[g].value+" |:| ";
        g_handlerAttain+=g_attain[g].value+" |:| ";
        g_handlerDateFrom+=g_dateFrom[g].value+" |:| ";
        g_handlerDateTo+=g_dateTo[g].value+" |:| ";
        g_handlerUnit+=g_unit[g].value+" |:| ";
        g_handlerYearGrad+=g_yearGrad[g].value+" |:| ";
        g_handlerAward+=g_award[g].value+" |:| ";
    }
    document.getElementById("nameGraduate_handler").value = g_handlerName;
    document.getElementById("attainGraduate_handler").value = g_handlerAttain;
    document.getElementById("dateFromGraduate_handler").value = g_handlerDateFrom;
    document.getElementById("dateToGraduate_handler").value = g_handlerDateTo;
    document.getElementById("unitsGraduate_handler").value = g_handlerUnit;
    document.getElementById("yearGradGraduate_handler").value = g_handlerYearGrad;
    document.getElementById("awardGraduate_handler").value = g_handlerAward;
}

export default getAllElementaryInput;