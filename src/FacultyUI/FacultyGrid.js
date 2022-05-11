import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ListItemIcon from "@mui/material/ListItemIcon";
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import { useNavigate } from "react-router-dom";

export default function FacultyGrid(props){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    let navigate = useNavigate();
    function viewFaculty_function(){
        window.localStorage.setItem('viewFacultyName', props.fName);
        window.localStorage.setItem('viewFacultyPhoto', props.fImage);
        window.localStorage.setItem('viewFacultyEmail', props.fEmail);
        navigate(`/ViewFaculty`);
    }

    function viewFacultyCertificate_function(){
        window.localStorage.setItem('viewFacultyName', props.fName);
        window.localStorage.setItem('viewFacultyPhoto', props.fImage);
        window.localStorage.setItem('viewFacultyEmail', props.fEmail);
        navigate(`/ViewFacultyCertificates`);
    }

    return(
        <div className="faculty_imageContainer faculty_desktop" id="faculty_desktop">

            <p style={{display:"none"}}>{props.fName}</p>
            <p style={{display:"none"}}>{props.fEmail}</p>
            <p style={{display:"none"}}>{props.fDep}</p>
            <p style={{display:"none"}}>{props.fEmp}</p>
            <p style={{display:"none"}}>{props.fDate}</p>
            <input type="hidden" className="inputDateKey_hidden_faculty" value={props.fDate.slice(0, 10)}/>

            <img 
            className="faculty_img"
            src={"http://localhost/fms/upload_profile/"+props.fImage} 
            onError={(e)=>{e.target.onerror = null; e.target.src="http://localhost/fms/upload_profile/default_avatar.png"}}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            />
            <p className="fName">{props.fName}</p>
            <p className="fEmail">{props.fEmail}</p>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem style={{display:"none"}}></MenuItem>
                <MenuItem onClick={viewFaculty_function}>
                    <ListItemIcon>
                        <AccountBoxIcon fontSize="medium" />
                    </ListItemIcon>
                    View personal information
                </MenuItem>
                <MenuItem onClick={viewFacultyCertificate_function}>
                    <ListItemIcon>
                        <CardMembershipIcon fontSize="medium" />
                    </ListItemIcon>
                    View all certifications
                </MenuItem>
            </Menu>
        </div>
    )
}

