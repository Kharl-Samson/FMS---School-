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
import { useEffect, useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import ProfileAvatarAdmin from './ProfileAvatarAdmin';

export default function RightNavbarAdmin(){

    let email_key = localStorage.getItem("email");

    //Menu on activity log
    const [anchor_act, setAnchorEl_act] = React.useState(null);
    const open_act = Boolean(anchor_act);
    const handleClick_act = (event) => {
      setAnchorEl_act(event.currentTarget);
    };
    const handleClose_act = () => {
      setAnchorEl_act(null);
    };

  //Hook for getting all certificates
  const [getAllLog, setgetAllLog] = useState([]);
  const loadgetAllLog = async () => {
    const result = await axios.get("http://localhost/fms/getAllActivityLog.php");
    setgetAllLog(result.data.phpresult);
  };
  useEffect(() => {
    loadgetAllLog();
  }, []);

  var key_log = 0;
  const activityLogContent = getAllLog.map((res) => {
    if (res.email_id === email_key && key_log<10) {
      key_log++;
      var resDescription = res.description;
      resDescription = resDescription.substring(0, 20);
      var dot = "...";
      res.description.length >= 23 ? dot = "..." : dot = "" ; 
      return (
        <div key={key_log} id="link_actLog">
        <Link to="/ActivityLogAdmin" style={{ textDecoration: 'none', color: '#3D3D3D' }}>
        <div className='activity_box'>
            <div className='left'><img src={log_login}/></div>
            <div className='right'>
                <span>{res.date}</span>
                <span>{res.time}</span>
                <span>{resDescription+dot}</span>
            </div>
        </div>
        </Link>
        </div>
      );
    }
  });


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
                
                <div className='theme_toggle' id="theme_toggle" style={{ backgroundImage: `url(${LightThemeBG})`,visibility:"hidden" }} >
                    <div className='circle' id="circle" onClick={theme_toggle}></div>
                </div>

                <ProfileAvatarAdmin/>

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
                        <MenuItem style={{display:"none"}}></MenuItem>
                        <Link to="/ActivityLogAdmin" style={{ textDecoration: 'none', color: '#212121' }}>
                        <MenuItem>
                            <ListItemIcon>
                                <LocalActivityIcon fontSize="small" />
                            </ListItemIcon>
                            View all recent activity
                        </MenuItem>
                        </Link>
                </Menu>
            </div>    

            <div className='activitylog_content'>
                {activityLogContent}
            </div>   

        </div>
    )
}