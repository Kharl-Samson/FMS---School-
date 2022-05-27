import $ from "jquery";
export default function filterBy() {
    var div = document.getElementsByClassName("certDesktop");
    for (var i = 0; i < div.length; i++) {
      if (document.getElementById("International").checked) {
        div[i].textContent.includes("INTERNATIONAL") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("Seminars").checked) {
        div[i].textContent.includes("SEMINAR") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("National").checked) {
        div[i].textContent.includes("NATIONAL") &&
        !div[i].textContent.includes("INTERNATIONAL") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("Training").checked) {
        div[i].textContent.includes("TRAINING") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("Regional").checked) {
        div[i].textContent.includes("REGIONAL") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("Workshop").checked) {
        div[i].textContent.includes("WORKSHOP") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("Local").checked) {
        div[i].textContent.includes("LOCAL") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
    }

    var div = document.getElementsByClassName("certTABLEDesktop");
    for (var i = 0; i < div.length; i++) {
      if (document.getElementById("International").checked) {
        div[i].textContent.includes("INTERNATIONAL") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("Seminars").checked) {
        div[i].textContent.includes("SEMINAR") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("National").checked) {
        div[i].textContent.includes("NATIONAL") &&
        !div[i].textContent.includes("INTERNATIONAL") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("Training").checked) {
        div[i].textContent.includes("TRAINING") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("Regional").checked) {
        div[i].textContent.includes("REGIONAL") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("Workshop").checked) {
        div[i].textContent.includes("WORKSHOP") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("Local").checked) {
        div[i].textContent.includes("LOCAL") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
    }

    var div = document.getElementsByClassName("certTABLEMobile");
    for (var i = 0; i < div.length; i++) {
      if (document.getElementById("International").checked) {
        div[i].textContent.includes("INTERNATIONAL") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("Seminars").checked) {
        div[i].textContent.includes("SEMINAR") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("National").checked) {
        div[i].textContent.includes("NATIONAL") &&
        !div[i].textContent.includes("INTERNATIONAL") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("Training").checked) {
        div[i].textContent.includes("TRAINING") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("Regional").checked) {
        div[i].textContent.includes("REGIONAL") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("Workshop").checked) {
        div[i].textContent.includes("WORKSHOP") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
      if (document.getElementById("Local").checked) {
        div[i].textContent.includes("LOCAL") ? (div[i].style.display = "block") : (div[i].style.display = "none");
      }
    }

    var div = document.getElementsByClassName("certDesktopPDF");
    for (var i = 0; i < div.length; i++) {
      if (document.getElementById("International").checked) {
        div[i].textContent.includes("INTERNATIONAL") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("Seminars").checked) {
        div[i].textContent.includes("SEMINAR") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("National").checked) {
        div[i].textContent.includes("NATIONAL") &&
        !div[i].textContent.includes("INTERNATIONAL") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("Training").checked) {
        div[i].textContent.includes("TRAINING") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("Regional").checked) {
        div[i].textContent.includes("REGIONAL") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("Workshop").checked) {
        div[i].textContent.includes("WORKSHOP") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
      if (document.getElementById("Local").checked) {
        div[i].textContent.includes("LOCAL") ? (div[i].style.display = "flex") : (div[i].style.display = "none");
      }
    }

    if ($("#gridTable_forSearch #certDesktop:visible").length === 0) {      
      document.getElementsByClassName("no_searchFound")[0].style.display = "flex";
    } 
    else if ($("#gridTable_forSearch #certDesktop:visible").length != 0) {      
      document.getElementsByClassName("no_searchFound")[0].style.display = "none";
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