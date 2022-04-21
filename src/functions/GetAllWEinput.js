function getAllWEinput(){
    var WE_dateFrom_handler="", WE_dateTo_handler="", WE_position_handler="", WE_dept_handler="", WE_monthly_handler="", WE_salary_handler="",
    WE_appoint_handler="",WE_govt_handler="";

    var dateFromWE = document.getElementsByName("dateFromWE[]");
    var dateToWE = document.getElementsByName("dateToWE[]");
    var positionWE = document.getElementsByName("positionWE[]");
    var deptWE = document.getElementsByName("deptWE[]");
    var monthlyWE = document.getElementsByName("monthlyWE[]");
    var salaryWE = document.getElementsByName("salaryWE[]");
    var appointWE = document.getElementsByName("appointWE[]");
    var govtWE = document.getElementsByName("govtWE[]");
        
    for(var i = 0; i < dateFromWE.length; i++) {
        WE_dateFrom_handler+=dateFromWE[i].value+" |:| ";
        WE_dateTo_handler+=dateToWE[i].value+" |:| ";
        WE_position_handler+= positionWE[i].value+" |:| ";
        WE_dept_handler+=deptWE[i].value+" |:| ";
        WE_monthly_handler+=monthlyWE[i].value+" |:| ";
        WE_salary_handler+=salaryWE[i].value+" |:| ";
        WE_appoint_handler+=appointWE[i].value+" |:| ";
        WE_govt_handler+=govtWE[i].value+" |:| ";
    }
    document.getElementById("WE_dateFrom_handler").value = WE_dateFrom_handler;
    document.getElementById("WE_dateTo_handler").value = WE_dateTo_handler;
    document.getElementById("WE_position_handler").value = WE_position_handler;
    document.getElementById("WE_dept_handler").value = WE_dept_handler;
    document.getElementById("WE_monthly_handler").value = WE_monthly_handler;
    document.getElementById("WE_salary_handler").value = WE_salary_handler;
    document.getElementById("WE_appoint_handler").value = WE_appoint_handler;
    document.getElementById("WE_govt_handler").value = WE_govt_handler;
}

export default getAllWEinput;