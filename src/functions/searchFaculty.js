//Filter Search
import $ from "jquery";

export default function search_faculty() {
  var value = document.getElementById("search_faculty").value.toLowerCase();

  if(document.getElementById("search_faculty").value == "") {
      document.getElementsByClassName("no_searchFound6")[0].style.display = "none";
  }

  $("#gridTable_forSearch #faculty_desktop").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
  if ($("#gridTable_forSearch #faculty_desktop:visible").length === 0) {
    document.getElementsByClassName("no_searchFound6")[0].style.display ="flex";
  }
  else if ($("#gridTable_forSearch #faculty_desktop:visible").length != 0) {
    document.getElementsByClassName("no_searchFound6")[0].style.display ="none";
  }

}