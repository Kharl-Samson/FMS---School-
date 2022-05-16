import $ from "jquery";
export default function ApplyFilterFacultyPending() {
  document.getElementById("basic-menu11").style.display = "none";
  var div = document.getElementsByClassName("facultyRow_desktopPending");

    if (document.getElementById("input_from").value !== "" && document.getElementById("input_to").value !== "") {
      for (var i = 0; i < div.length; i++) {
        var key = document.getElementsByClassName("inputDateKey_hidden_facultyPending")[i].value;
        if (key) {
          if ( key >= document.getElementById("input_from").value && key <= document.getElementById("input_to").value) {
            div[i].style.display = "flex";
          } else {
            div[i].style.display = "none";
          }
        }


        if ($("#rowTable_forSearch_pending #facultyRow_desktopPending:visible").length === 0) {
            document.getElementsByClassName("no_searchFound8")[0].style.display ="flex";
        }
        else if ($("#rowTable_forSearch_pending #facultyRow_desktopPending:visible").length != 0) {
            document.getElementsByClassName("no_searchFound8")[0].style.display ="none";
        }
      }
    }
  
}