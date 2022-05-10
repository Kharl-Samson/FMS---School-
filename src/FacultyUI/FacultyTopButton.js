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

import filterBy from "../functions/filterCertificate";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import axios from "axios";
import search_faculty from "../functions/searchFaculty";
import ApplyFilterFaculty from "../functions/ApplyFilterFaculty";
import filterFaculty from "../functions/filterFaculty";

export default function FacultyTopActions() {
  setTimeout(function () {
    if ($("#gridTable_forSearch #faculty_desktop:visible").length === 0) {
      document.getElementsByClassName("no_searchFound6")[0].style.display ="flex";
    }
    else if ($("#gridTable_forSearch #faculty_desktop:visible").length != 0) {
      document.getElementsByClassName("no_searchFound6")[0].style.display ="none";
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
    var div = document.getElementsByClassName("faculty_desktop");
    for (var i = 0; i < div.length; i++) {
      div[i].style.display = "block";
    }
    document.getElementsByClassName("no_searchFound6")[0].style.display = "none";
    document.getElementById("input_from").value = "";
    document.getElementById("input_to").value = "";
    document.getElementById("span_from").textContent = "dd/mm/yyyy";
    document.getElementById("span_to").textContent = "dd/mm/yyyy";
    setAnchorEl_open(null);
  };

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
    var div = document.getElementsByClassName("faculty_desktop");
    for (var i = 0; i < div.length; i++) {
      div[i].style.display = "block";
    }
    document.getElementsByClassName("no_searchFound6")[0].style.display = "none";
    document.getElementById("input_from").value = "";
    document.getElementById("input_to").value = "";
    document.getElementById("span_from").textContent = "dd/mm/yyyy";
    document.getElementById("span_to").textContent = "dd/mm/yyyy";
    setAnchorEl_open(null);
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
    var from = fromArray[1] + "-" + fromArray[0] + "-" + fromArray[2];
    var toArray = moment(state[0].endDate).format("L").split("/");
    var to = toArray[1] + "-" + toArray[0] + "-" + toArray[2];
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
          placeholder="Find faculty"
          id="search_faculty"
          onKeyUp={search_faculty}
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
              <div className="left" style={{ pointerEvents: "none" }} id="filterByText">
                Filter By
              </div>
              <div className="right" id="filterByTextRight">
                <div className="checkbox_container">
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="Regular"
                      onClick={filterFaculty}
                    />
                    <label for="cb_filter">Regular</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="BSIT"
                      onClick={filterFaculty}
                    />
                    <label for="cb_filter">BSIT</label>
                  </div>
                </div>
                <div className="checkbox_container">
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="PartTime"
                      onClick={filterFaculty}
                    />
                    <label for="cb_filter">Part Time</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="BLIS"
                      onClick={filterFaculty}
                    />
                    <label for="cb_filter">BLIS</label>
                  </div>
                </div>
                <div className="checkbox_container">
                  <div>
                    <input
                      type="radio"
                      className="cb_filter"
                      name="cb_filter"
                      id="Temporary"
                      onClick={filterFaculty}
                    />
                    <label for="cb_filter">Temporary</label>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="fitlerBYdatRange"
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
                <span onClick={ApplyFilterFaculty}>Apply</span>
              </div>
            </div>
          </MenuItem>
        </Menu>  

      </div>

      <div className="container">
        View :
        <div>
          <div id="GridBtn">
            <img id="grid_icon" src={gridTableYellow} />
          </div>
          <div id="RowBtn">
            <img id="row_icon" src={rowTableGray} />
          </div>
        </div>
      </div>
      
      <div className="container">
        <div>
        <form>
          <img src={download_yellow}/> Download as PDF
        </form>  
        </div>
      </div>


    </div>
  );
}


