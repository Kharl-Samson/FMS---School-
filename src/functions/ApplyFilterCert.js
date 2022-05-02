import $ from "jquery";
export default function ApplyFilter() {
  document.getElementById("basic-menu").style.display = "none";
  var div = document.getElementsByClassName("certDesktop");  
  var div1 = document.getElementsByClassName("certTABLEDesktop");
  var div2 = document.getElementsByClassName("certTABLEMobile");

    if (document.getElementById("input_from").value !== "" && document.getElementById("input_to").value !== "") {
      for (var i = 0; i < div.length; i++) {
        var key = document.getElementsByClassName("inputDateKey_hidden")[i].value;
        if (key) {
          if ( key >= document.getElementById("input_from").value && key <= document.getElementById("input_to").value) {
            div[i].style.display = "block";
            div1[i].style.display = "flex";
            div2[i].style.display = "block";
          } else {
            div[i].style.display = "none";
            div1[i].style.display = "none";
            div2[i].style.display = "none";
          }
        }


        if ($("#gridTable_forSearch #certDesktop:visible").length === 0) {
          document.getElementsByClassName("no_searchFound")[0].style.display ="flex";
        }
        else if ($("#gridTable_forSearch #certDesktop:visible").length != 0) {
          document.getElementsByClassName("no_searchFound")[0].style.display ="none";
        }
        if ($("#rowTable_forSearch #certTABLEDesktop:visible").length === 0) {    
          document.getElementsByClassName("no_searchFound1")[0].style.display = "flex";
        } 
        else if ($("#rowTable_forSearch #certTABLEDesktop:visible").length != 0) {    
          document.getElementsByClassName("no_searchFound1")[0].style.display ="none";
        }
        if ($("#rowTableMobile_forSearch #certTABLEMobile:visible").length === 0) {
          document.getElementsByClassName("no_searchFound2")[0].style.display = "flex";
        } 
        else if ($("#rowTableMobile_forSearch #certTABLEMobile:visible").length != 0 ) {
          document.getElementsByClassName("no_searchFound2")[0].style.display ="none";
        }
      }
    }
  
}