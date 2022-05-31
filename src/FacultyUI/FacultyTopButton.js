import React from "react";
import searchYellow from "../images/icons/searchYellow.svg";
import filterYellow from "../images/icons/filterYellow.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import gridTableYellow from "../images/icons/gridTableYellow.svg";
import rowTableGray from "../images/icons/rowTableGray.svg";
import download_yellow from "../images/icons/download_yellow.svg";
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
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import search_faculty from "../functions/searchFaculty";
import ApplyFilterFaculty from "../functions/ApplyFilterFaculty";
import filterFaculty from "../functions/filterFaculty";
import micIcon from "../images/mic.png";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import speechRecog from "../images/speechRecog.gif";

export default function FacultyTopActions() {
  setTimeout(function () {
    if ($("#gridTable_forSearch #faculty_desktop:visible").length === 0) {
      document.getElementsByClassName("no_searchFound6")[0].style.display ="flex";
    }
    else if ($("#gridTable_forSearch #faculty_desktop:visible").length != 0) {
      document.getElementsByClassName("no_searchFound6")[0].style.display ="none";
    }

    if ($("#rowTable_forSearch #facultyRow_desktop:visible").length === 0) {
      document.getElementsByClassName("no_searchFound7")[0].style.display ="flex";
    }
    else if ($("#rowTable_forSearch #facultyRow_desktop:visible").length != 0) {
      document.getElementsByClassName("no_searchFound7")[0].style.display ="none";
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
    var div1 = document.getElementsByClassName("facultyRow_desktop");
    for (var i = 0; i < div.length; i++) {
      div[i].style.display = "block";
      div1[i].style.display = "flex";
    }
    document.getElementsByClassName("no_searchFound6")[0].style.display = "none";
    document.getElementsByClassName("no_searchFound7")[0].style.display = "none";
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
    var div1 = document.getElementsByClassName("facultyRow_desktop");
    for (var i = 0; i < div.length; i++) {
      div[i].style.display = "block";
      div1[i].style.display = "flex";
    }
    document.getElementsByClassName("no_searchFound6")[0].style.display = "none";
    document.getElementsByClassName("no_searchFound7")[0].style.display = "none";
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

  function gridView() {
    document.getElementsByClassName("no_searchFound6")[0].style.display ="none";
    document.getElementsByClassName("no_searchFound7")[0].style.display ="none";
    document.getElementById("grid_icon").src = gridTableYellow;
    document.getElementById("row_icon").src = rowTableGray;
    document.getElementById("GridBtn").style.backgroundColor = "#FFFF";
    document.getElementById("RowBtn").style.backgroundColor = "transparent";
    document.getElementById("row_table").style.display = "none";
    document.getElementById("table_containerID").style.backgroundColor ="#ffff";
    document.getElementById("table_containerID").style.boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px";
    document.getElementById("grid_table").style.display = "block";
    if ($("#gridTable_forSearch #faculty_desktop:visible").length === 0) {
      document.getElementById("faculty_desktop").style.display = "none"
      document.getElementsByClassName("no_searchFound6")[0].style.display ="flex";
    }
  }
  function rowView() {
    document.getElementsByClassName("no_searchFound6")[0].style.display ="none";
    document.getElementsByClassName("no_searchFound7")[0].style.display ="none";
    document.getElementById("grid_icon").src = gridTableGray;
    document.getElementById("row_icon").src = rowTableYellow;
    document.getElementById("GridBtn").style.backgroundColor = "transparent";
    document.getElementById("RowBtn").style.backgroundColor = "#FFFF";
    document.getElementById("table_containerID").style.backgroundColor = "transparent";
    document.getElementById("table_containerID").style.boxShadow = "none";
    document.getElementById("grid_table").style.display = "none";
    document.getElementById("row_table").style.display = "block";
    if ($("#rowTable_forSearch #facultyRow_desktop:visible").length === 0) {
        document.getElementById("facultyRow_desktop").style.display = "none"
        document.getElementsByClassName("no_searchFound7")[0].style.display ="flex";
    }
  }

  const downloadAllUser=(e)=>{
    e.preventDefault();
    //Sending the data request to call it on backend
    const sendData = {
        email:localStorage.getItem('email'),
    }
    //Sending the data to my backend
    axios.post('http://localhost/fms/downloadAllUsers.php',sendData)
    .then((result)=>{})    
  }


  //Tooltip
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: ".8rem",
    },
  }));
  function record() {
    var recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-GB";


    document.getElementsByClassName("speech_Modal")[0].style.display="flex";
    document.getElementById("speak_text").textContent = "Speak now"
    setTimeout(function () {
      document.getElementById("speak_text").style.marginRight="40px";
    }, 300);
    recognition.onresult = function(event) {

      if (event.results[0][0].transcript.indexOf('.') !== -1) {
        document.getElementById('search_faculty').value = event.results[0][0].transcript.slice(0, -1);
        document.getElementById("speak_text").textContent = event.results[0][0].transcript.slice(0, -1);
      } else {
        document.getElementById('search_faculty').value = event.results[0][0].transcript;
        document.getElementById("speak_text").textContent = event.results[0][0].transcript;
      }
      search_faculty();
      setTimeout(function () {
        document.getElementsByClassName("speech_Modal")[0].style.display="none";
        document.getElementById("speak_text").style.marginRight="140px";
      }, 500);
    }
    recognition.start();
  }
  function close_speechModal(){
      document.getElementsByClassName("speech_Modal")[0].style.display="none";
  } 

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
        <LightTooltip title="Search by voice">
        <div className="speechRecognition" onClick={record}>
            <img src={micIcon}/>
        </div>
        </LightTooltip>
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
          <div id="GridBtn" onClick={gridView}>
            <img id="grid_icon" src={gridTableYellow} />
          </div>
          <div id="RowBtn" onClick={rowView}>
            <img id="row_icon" src={rowTableGray} />
          </div>
        </div>
      </div>
      
      <div className="container" id="f_container3">
        <div onClick={printDocument} style={{border: "1.5px solid #c2c2c2"}}>
        <form>
          <img src={download_yellow}/> Generate as PDF
        </form>  
        </div>
      </div>

      {/*MODAL FOR SPEECH RECOGNITION */}
      <div className="speech_Modal">
          <LightTooltip title="Close">
            <p className="close_speech" onClick={close_speechModal}>&#215;</p>
          </LightTooltip> 
          <p id="speak_text">Speak now</p>
          <img src={speechRecog}/> 
      </div>


    </div>
  );
}


//Printing certificate
function printDocument() {
  document.getElementById("generatedPrint").textContent = localStorage.getItem('name');
  document.getElementById("datePrint").textContent = moment().format('LL');  
  document.getElementById("timePrint").textContent = moment().format('LTS');
  html2canvas(document.querySelector("#ActiveUsers_pdf"), {
    useCORS: true,
    allowTaint: true,
    scrollY: 0,
  }).then((canvas) => {
    const image = { type: "png", quality: 0.98 };
    const margin = [0, 0];
    const filename = "ActiveUsers.pdf";
    var imgWidth = 8.5;
    var pageHeight = 10.5;
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
    window.open(pdf.output('bloburl'))
    //pdf.save(filename);
  });
}
