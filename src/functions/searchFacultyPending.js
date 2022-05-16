//Filter Search
import $ from "jquery";

export default function search_facultyPending() {
  var value = document.getElementById("search_faculty_Pending").value.toLowerCase();

  if(document.getElementById("search_faculty_Pending").value == "") {
      document.getElementsByClassName("no_searchFound8")[0].style.display = "none";
  }

  $("#rowTable_forSearch_pending #facultyRow_desktopPending").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
  if ($("#rowTable_forSearch_pending #facultyRow_desktopPending:visible").length === 0) {
    document.getElementsByClassName("no_searchFound8")[0].style.display ="flex";
  }
  else if ($("#rowTable_forSearch_pending #facultyRow_desktopPending:visible").length != 0) {
    document.getElementsByClassName("no_searchFound8")[0].style.display ="none";
  }

}