import React from "react";
import searchYellow from "../images/icons/searchYellow.svg";
import filterYellow from "../images/icons/filterYellow.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import gridTableYellow from "../images/icons/gridTableYellow.svg";
import rowTableGray from "../images/icons/rowTableGray.svg";
import download_yellow from "../images/icons/download_yellow.svg";
import uploadWhite from "../images/icons/uploadWhite.svg";
import gridTableGray from "../images/icons/gridTableGray.svg";
import rowTableYellow from "../images/icons/rowTableYellow.svg";
import $ from "jquery";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import moment from "moment";
import search_certificate from "../functions/searchCertificate";
import filterBy from "../functions/filterCertificate";
import ApplyFilter from "../functions/ApplyFilterCert";
import CertificatePDF from "./CertificatePDF";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function CertificateTopActions() {
  setTimeout(function () {
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
  }, 1200);

  const [anchorEl_open, setAnchorEl_open] = React.useState(null);
  const openTEST = Boolean(anchorEl_open);
  const handleClick = (event) => {
    setAnchorEl_open(event.currentTarget);
    document.getElementById("basic-menu").style.display = "flex";
  };
  const handleCloseEffect = () => {

    var ele = document.getElementsByName("cb_filter");
    for (var i = 0; i < ele.length; i++) {
      ele[i].checked = false;
    }
    var div = document.getElementsByClassName("certDesktop");
    var div1 = document.getElementsByClassName("certTABLEDesktop");
    var div2 = document.getElementsByClassName("certTABLEMobile");
    for (var i = 0; i < div.length; i++) {
      div[i].style.display = "block";
      div1[i].style.display = "flex";
      div2[i].style.display = "block";
    }
    document.getElementsByClassName("no_searchFound")[0].style.display = "none";
    document.getElementsByClassName("no_searchFound1")[0].style.display = "none";
    document.getElementsByClassName("no_searchFound2")[0].style.display = "none";
    document.getElementById("input_from").value = "";
    document.getElementById("input_to").value = "";
    document.getElementById("span_from").textContent = "dd/mm/yyyy";
    document.getElementById("span_to").textContent = "dd/mm/yyyy";

    setAnchorEl_open(null);
  };

  function gridView() {
    document.getElementsByClassName("no_searchFound")[0].style.display ="none";
    document.getElementsByClassName("no_searchFound1")[0].style.display ="none";
    document.getElementById("grid_icon").src = gridTableYellow;
    document.getElementById("row_icon").src = rowTableGray;
    document.getElementById("GridBtn").style.backgroundColor = "#FFFF";
    document.getElementById("RowBtn").style.backgroundColor = "transparent";
    document.getElementById("row_table").style.display = "none";
    document.getElementById("rowMobile_table").style.display = "none";
    document.getElementById("table_containerID").style.backgroundColor ="#ffff";
    document.getElementById("table_containerID").style.boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px";
    document.getElementById("grid_table").style.display = "block";
  }

  const mq = window.matchMedia("(max-width: 850px)");
  function rowView() {
    document.getElementsByClassName("no_searchFound")[0].style.display ="none";
    document.getElementsByClassName("no_searchFound1")[0].style.display ="none";

    document.getElementById("grid_icon").src = gridTableGray;
    document.getElementById("row_icon").src = rowTableYellow;
    document.getElementById("GridBtn").style.backgroundColor = "transparent";
    document.getElementById("RowBtn").style.backgroundColor = "#FFFF";
    document.getElementById("table_containerID").style.backgroundColor = "transparent";
    document.getElementById("table_containerID").style.boxShadow = "none";
    document.getElementById("grid_table").style.display = "none";
    if (mq.matches) {
      document.getElementById("rowMobile_table").style.display = "block";
      document.getElementById("row_table").style.display = "none";
    } else {
      document.getElementById("row_table").style.display = "block";
      document.getElementById("rowMobile_table").style.display = "none";
    }
  }


  function clearFilter() {
    setState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 0),
          key: "selection",
        },
      ]);

    var ele = document.getElementsByName("cb_filter");
    for (var i = 0; i < ele.length; i++) {
      ele[i].checked = false;
    }
    var div = document.getElementsByClassName("certDesktop");
    var div1 = document.getElementsByClassName("certTABLEDesktop");
    var div2 = document.getElementsByClassName("certTABLEMobile");
    for (var i = 0; i < div.length; i++) {
      div[i].style.display = "block";
      div1[i].style.display = "flex";
      div2[i].style.display = "block";
    }
    document.getElementsByClassName("no_searchFound")[0].style.display = "none";
    document.getElementsByClassName("no_searchFound1")[0].style.display = "none";
    document.getElementsByClassName("no_searchFound2")[0].style.display = "none";
    document.getElementById("input_from").value = "";
    document.getElementById("input_to").value = "";
    document.getElementById("span_from").textContent = "dd/mm/yyyy";
    document.getElementById("span_to").textContent = "dd/mm/yyyy";
  }

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const [anchorEl_open1, setAnchorEl_open1] = React.useState(null);
  const openTEST1 = Boolean(anchorEl_open1);
  const handleClick1 = (event) => {
    setAnchorEl_open1(event.currentTarget);
  };

  const handleCloseEffect1 = () => {
    setAnchorEl_open1(null);
    var fromArray = moment(state[0].startDate).format("L").split("/");
    var from = fromArray[2] + "-" + fromArray[0] + "-" + fromArray[1];
    var toArray = moment(state[0].endDate).format("L").split("/");
    var to = toArray[2] + "-" + toArray[0] + "-" + toArray[1];
    document.getElementById("span_from").textContent =
      fromArray[1] + "/" + fromArray[0] + "/" + fromArray[2];
    document.getElementById("span_to").textContent =
      toArray[1] + "/" + toArray[0] + "/" + toArray[2];
    document.getElementById("input_from").value = from;
    document.getElementById("input_to").value = to;
  };

  return (
    <div className="top">
      <div className="container">
        <div>
          <img src={searchYellow} />
        </div>
        <input
          type="text"
          placeholder="Find certificate"
          id="search_certificate"
          onKeyUp={search_certificate}
        />
        <div
          className="filter_container"
          id="basic-button"
          aria-controls={openTEST ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openTEST ? "true" : undefined}
          onClick={handleClick}
        >
          Filter
          <img src={filterYellow} />
        </div>
        <Menu
          disableRipple
          id="basic-menu"
          anchorEl={anchorEl_open}
          open={openTEST}
          onClose={handleCloseEffect}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem style={{ display: "none" }}></MenuItem>
          <MenuItem
            id="removeTrans_MUI"
            style={{ display: "flex", flexDirection: "column" }}
            disableRipple
          >
            <div className="filterCert_container">
              <div className="left" style={{ pointerEvents: "none" }}>
                Filter By
              </div>
              <div className="right">
                <div className="checkbox_container">
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="International"
                      onClick={filterBy}
                    />
                    <label for="cb_filter">International</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="Seminars"
                      onClick={filterBy}
                    />
                    <label for="cb_filter">Seminars</label>
                  </div>
                </div>
                <div className="checkbox_container">
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="National"
                      onClick={filterBy}
                    />
                    <label for="cb_filter">National</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="Training"
                      onClick={filterBy}
                    />
                    <label for="cb_filter">Trainings</label>
                  </div>
                </div>
                <div className="checkbox_container">
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="Regional"
                      onClick={filterBy}
                    />
                    <label for="cb_filter">Regional</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="Workshop"
                      onClick={filterBy}
                    />
                    <label for="cb_filter">Workshops</label>
                  </div>
                </div>
                <div className="checkbox_container">
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="Local"
                      onClick={filterBy}
                    />
                    <label for="cb_filter">Local</label>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="filterCert_container"
              style={{ borderTop: "1px solid rgb(152, 152, 152)" }}
            >
              <div className="left" style={{ pointerEvents: "none" }}>
                Date
              </div>
              <div
                className="right"
                style={{ display: "flex", padding: "15px 0" }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="date_range"
                    id="basic-button1"
                    aria-controls={openTEST1 ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openTEST1 ? "true" : undefined}
                    onClick={handleClick1}
                  >
                    <span id="span_from">dd/mm/yyyy</span> <CalendarMonthIcon />
                  </div>
                  -
                  <div
                    className="date_range"
                    id="basic-button1"
                    aria-controls={openTEST1 ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openTEST1 ? "true" : undefined}
                    onClick={handleClick1}
                  >
                    <span id="span_to">dd/mm/yyyy</span> <CalendarMonthIcon />
                  </div>
                </div>

                <Menu
                  disableRipple
                  id="basic-menu1"
                  anchorEl={anchorEl_open1}
                  open={openTEST1}
                  onClose={handleCloseEffect1}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem disableRipple>
                    <DateRangePicker
                      onChange={(item) => setState([item.selection])}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      ranges={state}
                      direction="vertical"
                    />
                  </MenuItem>
                </Menu>
              </div>
            </div>

            <input type="hidden" id="input_from" />
            <input type="hidden" id="input_to" />
            <div className="filter_btn">
              <div className="left">
                <span onClick={clearFilter}>Clear Filter</span>
              </div>
              <div className="right">
                <span onClick={handleCloseEffect}>Cancel</span>
                <span onClick={ApplyFilter}>Apply</span>
              </div>
            </div>
          </MenuItem>
        </Menu>
      </div>

      <div className="container">
        View :
        <div>
          <div id="GridBtn" onClick={gridView}>
            <img id="grid_icon" src={gridTableYellow} />
          </div>
          <div id="RowBtn" onClick={rowView}>
            <img id="row_icon" src={rowTableGray} />
          </div>
        </div>
      </div>
      <div className="container">
        <div onClick={printDocument}>
          <img src={download_yellow}/> Download as PDF
        </div>
        <div>
          <img src={uploadWhite} /> Upload Certificate
        </div>
      </div>

        <CertificatePDF/>
    </div>
  );
}


//Printing certificate
function printDocument() {
    html2canvas(document.querySelector("#convertable_pdf"), {
      useCORS: true,
      allowTaint: true,
      scrollY: 0,
    }).then((canvas) => {
      const image = { type: "png", quality: 0.98 };
      const margin = [0.5, 0.5];
      const filename = "MyCertificates.pdf";
      var imgWidth = 8.5;
      var pageHeight = 11;
      var innerPageWidth = imgWidth - margin[0] * 2;
      var innerPageHeight = pageHeight - margin[1] * 2;
      // Calculate the number of pages.
      var pxFullHeight = canvas.height;
      var pxPageHeight = Math.floor(canvas.width * (pageHeight / imgWidth));
      var nPages = Math.ceil(pxFullHeight / pxPageHeight);
      // Define pageHeight separately so it can be trimmed on the final page.
      var pageHeight = innerPageHeight;
      // Create a one-page canvas to split up the full image.
      var pageCanvas = document.createElement("canvas");
      var pageCtx = pageCanvas.getContext("2d");
      pageCanvas.width = canvas.width;
      pageCanvas.height = pxPageHeight;
      // Initialize the PDF.
      var pdf = new jsPDF("p", "in", [8.5, 11]);
      for (var page = 0; page < nPages; page++) {
        // Trim the final page to reduce file size.
        if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
          pageCanvas.height = pxFullHeight % pxPageHeight;
          pageHeight = (pageCanvas.height * innerPageWidth) / pageCanvas.width;
        }
        // Display the page.
        var w = pageCanvas.width;
        var h = pageCanvas.height;
        pageCtx.fillStyle = "white";
        pageCtx.fillRect(0, 0, w, h);
        pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);
        // Add the page to the PDF.
        if (page > 0) pdf.addPage();
        debugger;
        var imgData = pageCanvas.toDataURL(
          "image/" + image.type,
          image.quality
        );
        pdf.addImage(
          imgData,
          image.type,
          margin[1],
          margin[0],
          innerPageWidth,
          pageHeight
        );
      }
      pdf.save(filename);
    });
  }