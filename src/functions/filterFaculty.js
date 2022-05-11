import $ from "jquery";
export default function filterFaculty() {
    var div = document.getElementsByClassName("faculty_desktop");
    for (var i = 0; i < div.length; i++) {
      if (document.getElementById("Regular").checked) {
        div[i].textContent.includes("REGULAR") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("BSIT").checked) {
        div[i].textContent.includes("BSIT") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("PartTime").checked) {
        div[i].textContent.includes("PART TIME") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("BLIS").checked) {
        div[i].textContent.includes("BLIS") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("Temporary").checked) {
        div[i].textContent.includes("TEMPORARY") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
    }


    var div1 = document.getElementsByClassName("facultyRow_desktop");
    for (var i = 0; i < div1.length; i++) {
      if (document.getElementById("Regular").checked) {
        div1[i].textContent.includes("REGULAR") ? (div1[i].style.display = "flex") : (div1[i].style.display = "none");
      }
      if (document.getElementById("BSIT").checked) {
        div1[i].textContent.includes("BSIT") ? (div1[i].style.display = "flex") : (div1[i].style.display = "none");
      }
      if (document.getElementById("PartTime").checked) {
        div1[i].textContent.includes("PART TIME") ? (div1[i].style.display = "flex") : (div1[i].style.display = "none");
      }
      if (document.getElementById("BLIS").checked) {
        div1[i].textContent.includes("BLIS") ? (div1[i].style.display = "flex") : (div1[i].style.display = "none");
      }
      if (document.getElementById("Temporary").checked) {
        div1[i].textContent.includes("TEMPORARY") ? (div1[i].style.display = "flex") : (div1[i].style.display = "none");
      }
    }


    if ($("#gridTable_forSearch #faculty_desktop:visible").length === 0) {
        document.getElementsByClassName("no_searchFound6")[0].style.display ="flex";
    }
    else if ($("#gridTable_forSearch #faculty_desktop:visible").length != 0) {
        document.getElementsByClassName("no_searchFound6")[0].style.display ="none";
    }
 
    if ($("#rowTable_forSearch #facultyRow_desktop:visible").length === 0) {
      document.getElementsByClassName("no_searchFound7")[0].style.display ="flex";
    }
    else if ($("#rowTable_forSearch #facultyRow_desktop:visible").length != 0) {
      document.getElementsByClassName("no_searchFound7")[0].style.display ="none";
    }

  }