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

export default function ActivityTop() {

  const [anchorEl_open, setAnchorEl_open] = React.useState(null);
  const openTEST = Boolean(anchorEl_open);
  const handleClick = (event) => {
    setAnchorEl_open(event.currentTarget);
    document.getElementById("basic-menu").style.display = "flex";
  };
  const handleCloseEffect = () => {
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
      var div = document.getElementsByClassName("tr_log");
      for (var i = 0; i < div.length; i++) {
        div[i].style.display = "flex";
      }
      document.getElementsByClassName("no_searchFound5")[0].style.display = "none";
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
    var from = fromArray[0] + "/" + fromArray[1] + "/" + fromArray[2];
    var toArray = moment(state[0].endDate).format("L").split("/");
    var to = toArray[0] + "/" + toArray[1] + "/" + toArray[2];
    document.getElementById("span_from").textContent =
      fromArray[0] + "/" + fromArray[1] + "/" + fromArray[2];
    document.getElementById("span_to").textContent =
      toArray[0] + "/" + toArray[1] + "/" + toArray[2];
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
          placeholder="Search log"
          id="search_log"
          onKeyUp={search_log}
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
                <span onClick={ApplyFilter}>Apply</span>
              </div>
            </div>
          </MenuItem>
        </Menu>
      </div>

    </div>
  );
}


//Search Log
function search_log() {
  var value = document.getElementById("search_log").value.toLowerCase();

  if(document.getElementById("search_log").value == "") {
      document.getElementsByClassName("no_searchFound5")[0].style.display = "none";
  }

  $("#table_log #tr_log").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
  if($("#table_log #tr_log:visible").length === 0) {
      document.getElementsByClassName("no_searchFound5")[0].style.display = "flex";
  }
  else if ($("#table_log #tr_log:visible").length != 0) {
      document.getElementsByClassName("no_searchFound5")[0].style.display ="none";
  }
}

function ApplyFilter() {
  document.getElementById("basic-menu").style.display = "none";
  var div = document.getElementsByClassName("tr_log");  

    if (document.getElementById("input_from").value !== "" && document.getElementById("input_to").value !== "") {
      for (var i = 0; i < div.length; i++) {
        var key = document.getElementsByClassName("inputDateKey_hidden")[i].value;
        if (key) {
          if ( key >= document.getElementById("input_from").value && key <= document.getElementById("input_to").value) {
            div[i].style.display = "flex";
          } else {
            div[i].style.display = "none";
          }
        }
      if($("#table_log #tr_log:visible").length === 0) {
          document.getElementsByClassName("no_searchFound5")[0].style.display = "flex";
      }
      else if ($("#table_log #tr_log:visible").length != 0) {
          document.getElementsByClassName("no_searchFound5")[0].style.display ="none";
      }
      }
    }
}


