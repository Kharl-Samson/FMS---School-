import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import menuIconGray from "../images/icons/menuIconGray.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function ViewCertificateGrid(props){
  //Menu on Certificate
  const [anchor_act, setAnchorEl_act] = React.useState(null);
  const open_act = Boolean(anchor_act);
  const handleClick_act = (event) => {
    setAnchorEl_act(event.currentTarget);
  };
  const handleClose_act = () => {
    setAnchorEl_act(null);
  };

//View Certificate
function viewCertificate(){
  document.getElementsByClassName("view_certificate_container")[0].style.display="flex";

  document.getElementById("imgCert").src =  "http://localhost/fms/upload_certificate/"+props.LDimage;
  
  document.getElementById("viewCert_img").src = "http://localhost/fms/upload_certificate/"+props.LDimage;
  document.getElementById("viewCert_title").textContent = props.LDtitleFull;
  document.getElementById("viewCert_fromTo").textContent = "( "+props.LDfrom+" ) TO ( "+props.LDto1+" )";
  document.getElementById("viewCert_hours").textContent = props.LDhours+" HOURS";
  document.getElementById("viewCert_type").textContent =props.LDtype;
  document.getElementById("viewCert_sponsor").textContent =props.LDsponsor;
  document.getElementById("viewCert_coverage").textContent = props.LDcoverage;
  document.getElementById("viewCert_category").textContent = props.LDcategory;
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
          onClick={viewCertificate}
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
      </Menu>
    </div>
    )
}

