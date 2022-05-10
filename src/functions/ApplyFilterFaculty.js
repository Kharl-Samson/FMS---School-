import $ from "jquery";
export default function ApplyFilterFaculty() {
  document.getElementById("basic-menu").style.display = "none";
  var div = document.getElementsByClassName("faculty_desktop");  

    if (document.getElementById("input_from").value !== "" && document.getElementById("input_to").value !== "") {
      for (var i = 0; i < div.length; i++) {
        var key = document.getElementsByClassName("inputDateKey_hidden_faculty")[i].value;
        if (key) {
          if ( key >= document.getElementById("input_from").value && key <= document.getElementById("input_to").value) {
            div[i].style.display = "block";
          } else {
            div[i].style.display = "none";
          }
        }


        if ($("#gridTable_forSearch #faculty_desktop:visible").length === 0) {
          document.getElementsByClassName("no_searchFound6")[0].style.display ="flex";
        }
        else if ($("#gridTable_forSearch #faculty_desktop:visible").length != 0) {
          document.getElementsByClassName("no_searchFound6")[0].style.display ="none";
        }
      }
    }
  
}