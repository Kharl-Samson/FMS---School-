import React from "react";
import { Link} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import TermsOfService from '@mui/icons-material/Article';
import PrivacyPolicy from '@mui/icons-material/Security';
import Logout from '@mui/icons-material/Logout';
import Arrow_down from '../images/icons/arrow_down.svg'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function ProfileAvatar(){
    //for getting the initial name in avatar
    let initialName = localStorage.getItem('name').charAt(0);
    let firstName = localStorage.getItem('name').split(' ')[0]
    let profile_photo = "http://localhost/fms/upload_profile/"+localStorage.getItem('profile_photo');
    
    //Menu on avatar
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
    <div className='right_navbar_profile'>
        <Avatar 
            src={profile_photo} 
            sx={{ bgcolor: deepOrange[600] , width: "4vh", height: "4vh", fontSize: "1rem"}}
        >
            {initialName}
        </Avatar>
        <span>{firstName}</span>
        <img src={Arrow_down} className="arrow_down" title='Account' onClick={handleClick}/>

        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                },
                '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <Link to="/PersonalInformation" style={{ textDecoration: 'none', color: '#212121' }}>
            <MenuItem>
                <Avatar 
                    src={profile_photo} 
                    sx={{ bgcolor: deepOrange[600] , width: "4vh", height: "4vh", fontSize: "1rem"}}
                    >
                    {initialName}
                </Avatar>
                My Profile
            </MenuItem>
            </Link>

            <Divider />
            <MenuItem>
                <ListItemIcon>
                    <LocalActivityIcon fontSize="small" />
                </ListItemIcon>
                Activity Logs
            </MenuItem>
            <Link to="/TermsofService" style={{ textDecoration: 'none', color: '#212121' }} target="_blank">
            <MenuItem>
                <ListItemIcon>
                    <TermsOfService fontSize="small" />
                </ListItemIcon>
                Terms of Service
            </MenuItem>
            </Link>
            <Link to="/PrivacyPolicy" style={{ textDecoration: 'none', color: '#212121' }} target="_blank">
            <MenuItem>
                <ListItemIcon>
                    <PrivacyPolicy fontSize="small" />
                </ListItemIcon>
                Privacy Policy
            </MenuItem>
            </Link>
            <Link to="/" style={{ textDecoration: 'none', color: '#212121' }}>
            <MenuItem>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Sign Out
            </MenuItem>
            </Link>
        </Menu>
    </div>
    )
}