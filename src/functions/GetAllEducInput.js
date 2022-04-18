//Getting all the ELEMENTARY NAME 
function getAllElementaryInput(){
    var inputHandlerName="", inputHandlerDateFrom="", inputHandlerDateTo="", inputHandlerYearGrad="", inputHandlerAward="";
    var fieldsName = document.getElementsByName("elem_namePDS[]");
    var fieldDateFrom = document.getElementsByName("elem_dateFromPDS[]");
    var fieldDateTo = document.getElementsByName("elem_dateToPDS[]");
    var fieldYearGrad = document.getElementsByName("elem_yearGradPDS[]");
    var fieldAward = document.getElementsByName("elem_awardsPDS[]");
        
    for(var i = 0; i < fieldsName.length; i++) {
        inputHandlerName+=fieldsName[i].value+" |:| ";
        inputHandlerDateFrom+=fieldDateFrom[i].value+" |:| ";
        inputHandlerDateTo+=fieldDateTo[i].value+" |:| ";
        inputHandlerYearGrad+=fieldYearGrad[i].value+" |:| ";
        inputHandlerAward+=fieldAward[i].value+" |:| ";
    }
    document.getElementById("nameELEM_handler").value = inputHandlerName;
    document.getElementById("dateFromELEM_handler").value = inputHandlerDateFrom;
    document.getElementById("dateToELEM_handler").value = inputHandlerDateTo;
    document.getElementById("yearGradELEM_handler").value = inputHandlerYearGrad;
    document.getElementById("awardELEM_handler").value = inputHandlerAward;


    var s_handlerName="", s_handlerAttain="", s_handlerDateFrom="", s_handlerDateTo="", s_handlerYearGrad="", s_handlerAward="";
    var s_name = document.getElementsByName("second_namePDS[]");
    var s_attain = document.getElementsByName("second_attainmentPDS[]");
    var s_dateFrom = document.getElementsByName("second_dateFromPDS[]");
    var s_dateTo = document.getElementsByName("second_dateToPDS[]");
    var s_yearGrad = document.getElementsByName("second_yearGradPDS[]");
    var s_award = document.getElementsByName("second_awardsPDS[]");
    for(var x = 0; x < s_name.length; x++) {
        s_handlerName+=s_name[x].value+" |:| ";
        s_handlerAttain+=s_attain[x].value+" |:| ";
        s_handlerDateFrom+=s_dateFrom[x].value+" |:| ";
        s_handlerDateTo+=s_dateTo[x].value+" |:| ";
        s_handlerYearGrad+=s_yearGrad[x].value+" |:| ";
        s_handlerAward+=s_award[x].value+" |:| ";
    }
    document.getElementById("nameSecond_handler").value = s_handlerName;
    document.getElementById("attainSecond_handler").value = s_handlerAttain;
    document.getElementById("dateFromSecond_handler").value = s_handlerDateFrom;
    document.getElementById("dateToSecond_handler").value = s_handlerDateTo;
    document.getElementById("yearGradSecond_handler").value = s_handlerYearGrad;
    document.getElementById("awardSecond_handler").value = s_handlerAward;

    document.getElementById("test_menu").style.display="none"
}

export default getAllElementaryInput;