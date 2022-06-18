import $ from "jquery";
export default function ApplyFilterFacultyArchive() {
  document.getElementById("basic-menu22").style.display = "none";
  var div = document.getElementsByClassName("facultyRow_archive");

    if (document.getElementById("input_from").value !== "" && document.getElementById("input_to").value !== "") {
      for (var i = 0; i < div.length; i++) {
        var key = document.getElementsByClassName("inputDateKey_hidden_facultyArchive")[i].value;
        if (key) {
          if ( key >= document.getElementById("input_from").value && key <= document.getElementById("input_to").value) {
            div[i].style.display = "flex";
          } else {
            div[i].style.display = "none";
          }
        }


        if ($("#rowTable_forSearch_archive #facultyRow_archive:visible").length === 0) {
            document.getElementsByClassName("no_searchFound20")[0].style.display ="flex";
        }
        else if ($("#rowTable_forSearch_archive #facultyRow_archive:visible").length != 0) {
            document.getElementsByClassName("no_searchFound20")[0].style.display ="none";
        }
      }
    }
  
}