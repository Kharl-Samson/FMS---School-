import React, { useState } from 'react';
import '../css/dashboard.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Arrowdown_icon from '../images/icons/arrow_down.svg'

export default function RightNavbar(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className="right_navbar_container">

            <div className='profile_rightbar_container'>
                <img src="http://localhost/fms/upload_profile/sample_profile.jpg" 
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src="http://localhost/fms/upload_profile/default_avatar.jpg";
                    }}
                     className='profile_img'
                />
                <p>{localStorage.getItem('name')}</p>
                <img src={Arrowdown_icon}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Terms of Service</MenuItem>
                    <MenuItem onClick={handleClose}>Privacy Policy</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>

    
        </div>
    )
}