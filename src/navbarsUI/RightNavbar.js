import React from 'react';
import '../css/dashboard.css';
import RightNavbar_bg from '../images/right_navbar_bg.png';
import LightThemeBG from '../images/light_themeBG.png';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CloseRightNavbar from '../functions/CloseRightNavbar'
import theme_toggle from '../functions/ThemeToggle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import log_login from '../images/icons/log_login.svg'
import ProfileAvatar from './ProfileAvatar';
import TaskContent from '../taskUI/TaskContent';

export default function RightNavbar(){


    //Menu on activity log
    const [anchor_act, setAnchorEl_act] = React.useState(null);
    const open_act = Boolean(anchor_act);
    const handleClick_act = (event) => {
      setAnchorEl_act(event.currentTarget);
    };
    const handleClose_act = () => {
      setAnchorEl_act(null);
    };


    return (
        <div className="right_navbar_container"
            style={{
                backgroundImage: `url(${RightNavbar_bg})` 
            }}
        >
            <div className='right_navbar_top' id="right_navbar_top">

                <div className='right_nav_sizer'  title="Minimize" onClick={CloseRightNavbar}>
                    <span className='span1_right_nav'>&#187;</span>
                </div>
                
                <div className='theme_toggle' id="theme_toggle" style={{ backgroundImage: `url(${LightThemeBG})` }} >
                    <div className='circle' id="circle" onClick={theme_toggle}></div>
                </div>

                <ProfileAvatar/>

            </div>

            <TaskContent/>
 
            <div className='activitylog_container'>
                <span>Activity Log</span>
                <MoreHorizIcon sx={{marginRight : '5%'}} className={"MoreHorizIcon"} onClick={handleClick_act}/>
                <Menu
                    anchorEl={anchor_act}
                    id="account-menu"
                    open={open_act}
                    onClose={handleClose_act}
                    onClick={handleClose_act}
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
                        <MenuItem>
                            <ListItemIcon>
                                <LocalActivityIcon fontSize="small" />
                            </ListItemIcon>
                            View all recent activity
                        </MenuItem>
                </Menu>
            </div>    

            <div className='activitylog_content'>
                <div className='activity_box'>
                    <div className='left'><img src={log_login}/></div>
                    <div className='right'>
                         <span>March 20, 2022</span>
                         <span>2:20 PM</span>
                         <span>You logged in</span>
                    </div>
                </div>
                <div className='activity_box'>
                    <div className='left'><img src={log_login}/></div>
                    <div className='right'>
                         <span>March 20, 2022</span>
                         <span>2:20 PM</span>
                         <span>You logged in</span>
                    </div>
                </div>
                <div className='activity_box'>
                    <div className='left'><img src={log_login}/></div>
                    <div className='right'>
                         <span>March 20, 2022</span>
                         <span>2:20 PM</span>
                         <span>You logged in</span>
                    </div>
                </div>
            </div>   

        </div>
    )
}