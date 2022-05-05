import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import menuIconGray from "../images/icons/menuIconGray.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function CertificateGrid(props){
  //Menu on Certificate
  const [anchor_act, setAnchorEl_act] = React.useState(null);
  const open_act = Boolean(anchor_act);
  const handleClick_act = (event) => {
    setAnchorEl_act(event.currentTarget);
  };
  const handleClose_act = () => {
    setAnchorEl_act(null);
  };

//Open delete certificate modal
function openDeleteModal(){
    document.getElementsByClassName("delete_certificate_modal_container")[0].style.display = "flex";

    var imgInp = document.getElementById("LD_img").value;
    var NewimgInp = imgInp.split(" |:| ");  
    delete NewimgInp[props.LDkey]
    var img = "";

    var titleInp = document.getElementById("LD_title").value;
    var NewtitleInp = titleInp.split(" |:| ");  
    delete NewtitleInp[props.LDkey]
    var title = "";

    var fromInp = document.getElementById("LD_dateFrom").value;
    var NewfromInp = fromInp.split(" |:| ");  
    delete NewfromInp[props.LDkey]
    var from = "";

    var toInp = document.getElementById("LD_dateTo").value;
    var NewtoInp = toInp.split(" |:| ");  
    delete NewtoInp[props.LDkey]
    var to = "";

    var hoursInp = document.getElementById("LD_hours").value;
    var NewhoursInp = hoursInp.split(" |:| ");  
    delete NewhoursInp[props.LDkey]
    var hours = "";

    var typeInp = document.getElementById("LD_type").value;
    var NewtypeInp = typeInp.split(" |:| ");  
    delete NewtypeInp[props.LDkey]
    var type = "";

    var sponsorInp = document.getElementById("LD_sponsored").value;
    var NewsponsorInp = sponsorInp.split(" |:| ");  
    delete NewsponsorInp[props.LDkey]
    var sponsor = "";

    var coverageInp = document.getElementById("LD_coverage").value;
    var NewcoverageInp = coverageInp.split(" |:| ");  
    delete NewcoverageInp[props.LDkey]
    var coverage = "";

    var categoryInp = document.getElementById("LD_category").value;
    var NewcategoryInp = categoryInp.split(" |:| ");  
    delete NewcategoryInp[props.LDkey]
    var category = "";

    for(var i=0 ; i<NewimgInp.length ; i++){
        img+=NewimgInp[i]+" |:| ";
        title+= NewtitleInp[i]+" |:| ";
        from+= NewfromInp[i]+" |:| ";
        to+= NewtoInp[i]+" |:| ";
        hours+= NewhoursInp[i]+" |:| ";
        type+= NewtypeInp[i]+" |:| ";
        sponsor+= NewsponsorInp[i]+" |:| ";
        coverage+= NewcoverageInp[i]+" |:| ";
        category+= NewcategoryInp[i]+" |:| ";
    }
    img = img.replace('undefined |:| ','').slice(0, -5);
    title = title.replace('undefined |:| ','').slice(0, -5);
    from = from.replace('undefined |:| ','').slice(0, -5);
    to = to.replace('undefined |:| ','').slice(0, -5);
    hours = hours.replace('undefined |:| ','').slice(0, -5);
    type = type.replace('undefined |:| ','').slice(0, -5);
    sponsor = sponsor.replace('undefined |:| ','').slice(0, -5);
    coverage = coverage.replace('undefined |:| ','').slice(0, -5);
    category = category.replace('undefined |:| ','').slice(0, -5);

    document.getElementById("edit_imgInp").value = img;
    document.getElementById("edit_titleInp").value = title;
    document.getElementById("edit_fromInp").value = from;
    document.getElementById("edit_toInp").value = to;
    document.getElementById("edit_hoursInp").value = hours;
    document.getElementById("edit_typeInp").value = type;
    document.getElementById("edit_sponsorInp").value = sponsor;
    document.getElementById("edit_coverageInp").value = coverage;
    document.getElementById("edit_categoryInp").value = category;
}  

//View Certificate
function viewCertificate(){
  document.getElementsByClassName("view_certificate_container")[0].style.display="flex";

  document.getElementById("viewCert_img").src = "http://localhost/fms/upload_certificate/"+props.LDimage;
  document.getElementById("viewCert_title").textContent = props.LDtitleFull;
  document.getElementById("viewCert_fromTo").textContent = "( "+props.LDfrom+" ) TO ( "+props.LDto1+" )";
  document.getElementById("viewCert_hours").textContent = props.LDhours+" HOURS";
  document.getElementById("viewCert_type").textContent =props.LDtype;
  document.getElementById("viewCert_sponsor").textContent =props.LDsponsor;
  document.getElementById("viewCert_coverage").textContent = props.LDcoverage;
  document.getElementById("viewCert_category").textContent = props.LDcategory;
}


//Edit Certificate
function goToEditCert(){
    document.getElementById("edit_Certificate_Container").style.display="block"
    document.getElementById("certificates_container").style.display="none"

    document.getElementById("edit_certIMG").src = "http://localhost/fms/upload_certificate/"+props.LDimage;
    document.getElementById("imgInput_holder").value = props.LDimage;
    document.getElementById("edit_titleLD").value = props.LDtitleFull;
    document.getElementById("edit_dateFromLD").value = props.LDfrom;
    document.getElementById("edit_dateToLD").value = props.LDto1;
    document.getElementById("edit_hoursLD").value = props.LDhours;
    document.getElementById("edit_typeLD").value = props.LDtype;
    document.getElementById("edit_sponsoredLD").value = props.LDsponsor;
    document.getElementById("edit_coverageLD").value = props.LDcoverage;
    document.getElementById("edit_categoryLD").value = props.LDcategory;

    document.getElementById("editCetificate_key").value = props.LDkey;
}  

    return(
        <div className="for_boxShadow certDesktop" id="certDesktop">
        <p style={{display:"none"}}>{props.LDtitleFull}</p>
        <p style={{display:"none"}}>{props.LDfrom}</p>
        <input type="hidden" value={props.LDto1} className="inputDateKey_hidden"/>
        <p style={{display:"none"}}>{props.LDhours+" HOURS"}</p>
        <p style={{display:"none"}}>{props.LDtype}</p>
        <p style={{display:"none"}}>{props.LDsponsor}</p>
        <p style={{display:"none"}}>{props.LDcoverage}</p>
        <p style={{display:"none"}}>{props.LDcategory}</p>
        <div
          className="certificate"
          style={{
            backgroundImage: `url(http://localhost/fms/upload_certificate/`+props.LDimage+`)`,
          }}
         >
        </div>

      <div className="btn_container">
        <div>
          <p style={{textTransform:"Capitalize"}}>{props.LDtitle}</p>
          <p style={{textTransform:"Capitalize"}}>{props.LDto}</p>
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
         <MenuItem style={{display:"none"}}>
        </MenuItem>
        <MenuItem onClick={viewCertificate}>
          <ListItemIcon>
            <VisibilityIcon fontSize="small" />
          </ListItemIcon>
          View
        </MenuItem>
        <MenuItem onClick={goToEditCert}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem onClick={openDeleteModal}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          Delete  
        </MenuItem>
      </Menu>
    </div>
    )
}

