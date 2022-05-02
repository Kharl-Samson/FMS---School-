import React from "react";
import menuIconGray from "../images/icons/menuIconGray.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

export default function EachCertificate() {
  //getting the email of user
  let email_key = localStorage.getItem("email");

  //Menu on Certificate
  const [anchor_act, setAnchorEl_act] = React.useState(null);
  const open_act = Boolean(anchor_act);
  const handleClick_act = (event) => {
    setAnchorEl_act(event.currentTarget);
  };
  const handleClose_act = () => {
    setAnchorEl_act(null);
  };

  //Hook for getting all certificates
  const [pdsStep5, setpdsStep5] = useState([]);
  const loadpdsStep5 = async () => {
    const result = await axios.get("http://localhost/fms/pdsStep5.php");
    setpdsStep5(result.data.phpresult);
  };
  useEffect(() => {
    loadpdsStep5();
  }, []);

  const input_keyForCertificates = pdsStep5.map((res) => {
    if (res.email_id === email_key) {
      return (
        <div>
          <input type="hidden" id="LD_img" value={res.LD_img} />
          <input type="hidden" id="LD_title" value={res.LD_title} />
          <input type="hidden" id="LD_dateFrom" value={res.LD_dateFrom} />
          <input type="hidden" id="LD_dateTo" value={res.LD_dateTo} />
          <input type="hidden" id="LD_hours" value={res.LD_hours} />
          <input type="hidden" id="LD_type" value={res.LD_type} />
          <input type="hidden" id="LD_sponsored" value={res.LD_sponsored} />
          <input type="hidden" id="LD_coverage" value={res.LD_coverage} />
          <input type="hidden" id="LD_category" value={res.LD_category} />
        </div>
      );
    }
  });

 //Hook for getting Each Certificates
 const [LDimage, setLDimage] = useState([]);
 const loadLDimage = async () => {
   var inputLDimage = document.getElementById("LD_img").value;
   var sliceinputLDimage = inputLDimage.slice(0, -5);
   const inputLDimage_Array = sliceinputLDimage.split(" |:| ");
   setLDimage(inputLDimage_Array);
 };
 const [LDtitle, setLDtitle] = useState([]);
 const loadLDtitle = async () => {
   var inputLDtitle = document.getElementById("LD_title").value;
   var sliceinputLDtitle = inputLDtitle.slice(0, -5);
   const inputLDtitle_Array = sliceinputLDtitle.split(" |:| ");
   const newArray = [];

   for(var i=0 ; i<inputLDtitle_Array.length ; i++){
        var len = inputLDtitle_Array[i].length-18;
        if(inputLDtitle_Array[i].length >= 18){
            newArray.push(inputLDtitle_Array[i].slice(0, -len)+"...");
        }
        else{
            newArray.push(inputLDtitle_Array[i]);
        }
   }
   setLDtitle(newArray);
 };

 const [LDtitleFull, setLDtitleFull] = useState([]);
 const loadLDtitleFull = async () => {
   var inputLDtitleFull = document.getElementById("LD_title").value;
   var sliceinputLDtitleFull = inputLDtitleFull.slice(0, -5);
   const inputLDtitleFull_Array = sliceinputLDtitleFull.split(" |:| ");
   setLDtitleFull(inputLDtitleFull_Array);
 };
 const [LDfrom, setLDfrom] = useState([]);
 const loadLDfrom = async () => {
   var inputLDfrom = document.getElementById("LD_dateFrom").value;
   var sliceinputLDfrom = inputLDfrom.slice(0, -5);
   const inputLDfrom_Array = sliceinputLDfrom.split(" |:| ");
   setLDfrom(inputLDfrom_Array );
 };
 const [LDto, setLDto] = useState([]);
 const loadLDto = async () => {
   var inputLDto = document.getElementById("LD_dateTo").value;
   var replaceTo = inputLDto.replace(/-/g, "-");
   var sliceinputLDto = replaceTo.slice(0, -5);
   const inputLDto_Array = sliceinputLDto.split(" |:| ");
   const newArray1 = [];
   for(var i=0 ; i<inputLDto_Array .length ; i++){
        newArray1.push(moment(inputLDto_Array [i]).format('LL'))
   }
   setLDto(newArray1);
 };

 const [LDto1, setLDto1] = useState([]);
 const loadLDto1 = async () => {
   var inputLDto1 = document.getElementById("LD_dateTo").value;
   var sliceinputLDto1 = inputLDto1.slice(0, -5);
   const inputLDto1_Array = sliceinputLDto1.split(" |:| ");
   setLDto1(inputLDto1_Array);
 };

 const [LDhours, setLDhours] = useState([]);
 const loadLDhours = async () => {
   var inputLDhours = document.getElementById("LD_hours").value;
   var sliceinputLDhours = inputLDhours.slice(0, -5);
   const inputLDhours_Array = sliceinputLDhours.split(" |:| ");
   setLDhours(inputLDhours_Array);
 };
 const [LDtype, setLDtype] = useState([]);
 const loadLDtype = async () => {
   var inputLDtype = document.getElementById("LD_type").value;
   var sliceinputLDtype = inputLDtype.slice(0, -5);
   const inputLDtype_Array = sliceinputLDtype.split(" |:| ");
   setLDtype(inputLDtype_Array);
 };
 const [LDsponsor, setLDsponsor] = useState([]);
 const loadLDsponsor = async () => {
   var inputLDsponsor = document.getElementById("LD_sponsored").value;
   var sliceinputLDsponsor = inputLDsponsor.slice(0, -5);
   const inputLDsponsor_Array = sliceinputLDsponsor.split(" |:| ");
   setLDsponsor(inputLDsponsor_Array);
 };
 const [LDcoverage, setLDcoverage] = useState([]);
 const loadLDcoverage = async () => {
   var inputLDcoverage = document.getElementById("LD_coverage").value;
   var sliceinputLDcoverage = inputLDcoverage.slice(0, -5);
   const inputLDcoverage_Array = sliceinputLDcoverage.split(" |:| ");
   setLDcoverage(inputLDcoverage_Array);
 };
 const [LDcategory, setLDcategory] = useState([]);
 const loadLDcategory = async () => {
   var inputLDcategory = document.getElementById("LD_category").value;
   var sliceinputLDcategory = inputLDcategory.slice(0, -5);
   const inputLDcategory_Array = sliceinputLDcategory.split(" |:| ");
   setLDcategory(inputLDcategory_Array);
 };

 useEffect(() => {
    setTimeout(function () {
        loadLDto1();
        loadLDtitleFull();
        loadLDimage();
        loadLDtitle();
        loadLDfrom(); 
        loadLDto();
        loadLDhours(); 
        loadLDtype();
        loadLDsponsor();
        loadLDcoverage();
        loadLDcategory();
    }, 1000);
  }, []);

    //Certificate content
    let ld_ctr = -1;
    const ldContent = LDtitle.map(() => {
      ld_ctr++;
      return (
        <div className="for_boxShadow certDesktop" id="certDesktop">
          <p style={{display:"none"}}>{LDtitleFull[ld_ctr]}</p>
          <p style={{display:"none"}}>{LDfrom[ld_ctr]}</p>
          <input type="hidden" value={LDto1[ld_ctr]} className="inputDateKey_hidden"/>
          <p style={{display:"none"}}>{LDhours[ld_ctr]+" HOURS"}</p>
          <p style={{display:"none"}}>{LDtype[ld_ctr]}</p>
          <p style={{display:"none"}}>{LDsponsor[ld_ctr]}</p>
          <p style={{display:"none"}}>{LDcoverage[ld_ctr]}</p>
          <p style={{display:"none"}}>{LDcategory[ld_ctr]}</p>
          <div
            className="certificate"
            style={{
              backgroundImage: `url(http://localhost/fms/upload_certificate/`+LDimage[ld_ctr]+`)`,
            }}
           >
          </div>

        <div className="btn_container">
          <div>
            <p>{LDtitle[ld_ctr]}</p>
            <p>{LDto[ld_ctr]}</p>
          </div>
          <div>
            <img src={menuIconGray} onClick={handleClick_act} />
          </div>
        </div>

        <Menu
          anchorEl={anchor_act}
          id="account-menu"
          open={open_act}
          onClose={handleClose_act}
          onClick={handleClose_act}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(1px 1px 1.5px rgba(0, 0, 0, 0.18))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <ListItemIcon>
              <VisibilityIcon fontSize="small" />
            </ListItemIcon>
            View
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            Edit
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            Delete  
          </MenuItem>
        </Menu>
      </div>
      );
    });

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      id="gridTable_forSearch"
    >
      {ldContent}
      {input_keyForCertificates}
    </Grid>
  );
}
