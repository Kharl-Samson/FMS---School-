import $ from "jquery";
export default function filterFacultyArchive() {
    var div = document.getElementsByClassName("facultyRow_archive");
    for (var i = 0; i < div.length; i++) {
      if (document.getElementById("Regular1").checked) {
        div[i].textContent.includes("REGULAR") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("BSIT1").checked) {
        div[i].textContent.includes("BSIT") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("PartTime1").checked) {
        div[i].textContent.includes("PART TIME") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("BLIS1").checked) {
        div[i].textContent.includes("BLIS") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("Temporary1").checked) {
        div[i].textContent.includes("TEMPORARY") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
    }

    if ($("#rowTable_forSearch_archive #facultyRow_archive:visible").length === 0) {
        document.getElementsByClassName("no_searchFound20")[0].style.display ="flex";
    }
    else if ($("#rowTable_forSearch_archive #facultyRow_archive:visible").length != 0) {
        document.getElementsByClassName("no_searchFound20")[0].style.display ="none";
    }
 


  }