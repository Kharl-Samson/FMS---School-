//Filter Search
import $ from "jquery";

export default function search_facultyArchive() {
  var value = document.getElementById("search_faculty_Pending22").value.toLowerCase();

  if(document.getElementById("search_faculty_Pending22").value == "") {
      document.getElementsByClassName("no_searchFound20")[0].style.display = "none";
  }

  $("#rowTable_forSearch_archive #facultyRow_archive").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
  if ($("#rowTable_forSearch_archive #facultyRow_archive:visible").length === 0) {
    document.getElementsByClassName("no_searchFound20")[0].style.display ="flex";
  }
  else if ($("#rowTable_forSearch_archive #facultyRow_archive:visible").length != 0) {
    document.getElementsByClassName("no_searchFound20")[0].style.display ="none";
  }

}