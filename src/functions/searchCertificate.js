  //Filter Search
  import $ from "jquery";

  export default function search_certificate() {
    var value = document.getElementById("search_certificate").value.toLowerCase();

    if(document.getElementById("search_certificate").value == "") {
        document.getElementsByClassName("no_searchFound")[0].style.display = "none";
    }

    $("#gridTable_forSearch #certDesktop").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    if($("#gridTable_forSearch #certDesktop:visible").length === 0) {
        document.getElementsByClassName("no_searchFound")[0].style.display = "flex";
    }
    else if ($("#gridTable_forSearch #certDesktop:visible").length != 0) {
        document.getElementsByClassName("no_searchFound")[0].style.display ="none";
    }

    $("#rowTable_forSearch #certTABLEDesktop").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    if ($("#rowTable_forSearch #certTABLEDesktop:visible").length === 0) {
        document.getElementsByClassName("no_searchFound1")[0].style.display = "flex";
    } 
    else if ($("#rowTable_forSearch #certTABLEDesktop:visible").length != 0 ) {
        document.getElementsByClassName("no_searchFound1")[0].style.display ="none";
    }

    $("#rowTableMobile_forSearch #certTABLEMobile").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    if ($("#rowTableMobile_forSearch #certTABLEMobile:visible").length === 0) {
        document.getElementsByClassName("no_searchFound2")[0].style.display = "flex";
    } 
    else if ($("#rowTableMobile_forSearch #certTABLEMobile:visible").length != 0 ) {
        document.getElementsByClassName("no_searchFound2")[0].style.display ="none";
    }

    $("#gridTable_forSearchPDF #certDesktopPDF").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });

  }