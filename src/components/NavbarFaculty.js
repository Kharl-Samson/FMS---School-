import * as React from 'react';
import { useEffect }  from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CICT_Logo from "../images/login/cict_logo.png";
import Dashboard_icon from "../images/icons/dashboard.svg";
import Profile_icon from "../images/icons/profile.svg";
import Pds_icon from "../images/icons/pds.svg";
import Certificate_icon from "../images/icons/certificate.svg";
import Logout_icon from "../images/icons/logout.svg";
import Arrowup_icon from "../images/icons/arrow_up.svg";

import { Link, Navigate } from "react-router-dom";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Drawer from './ProfileDrawer';


export default function NavbarFaculty(){

        //If wala laman yung local storage di makaka access sa loob
        const [auth,setAuth] = useState('');
        let navigate = useNavigate();
        
        useEffect(()=>{
            var auth = localStorage.getItem('email');
            if(auth === null){
                navigate(`/`)
            }
            setAuth(auth);
        },
        [])


        //--------------------------------------
        const [state, setState] = React.useState({
            bottom: false
          });
        
          const toggleDrawer = (anchor, open) => (event) => {
            if (
              event &&
              event.type === 'keydown' &&
              (event.key === 'Tab' || event.key === 'Shift')
            ) {
              return;
            }
        
            setState({ ...state, [anchor]: open });
          };
        
          const list = (anchor) => (
            <Box
              sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                 <Drawer/>
              </List>
            </Box>
          );
        

    return (
        <div className="navbar_account_container">

            <div>
                <div className="navbar_logo_container nav_part1">
                    <img src={CICT_Logo} className="cict_logo"/>
                    <div className="cict_text">
                        <span>College of Information and</span>
                        <span>Communication Technology</span>
                    </div>
                </div>
                <div className="nav_line nav_part1"></div>

                <div className="nav_part2">
                    <div className="navlink_container nav_active">
                        <img src={Dashboard_icon}/>
                        <span>Dashboard</span>
                    </div>

                    <div className="navlink_container">
                        <img src={Profile_icon}/>
                        <span>Profile</span>
                    </div>

                    <div className="navlink_container">
                    <img src={Pds_icon}/>
                        <span>PDS</span>
                    </div>

                    <div className="navlink_container nav_part3" >
                        <img src={Certificate_icon}/>
                        <span>Certificate</span>
                    </div>
                </div>
            </div>


     
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="logout_container">
                    <img src={Logout_icon}/>
                    Sign Out
                </div>
            </Link>

            {/* Nav drawer fo smaller device */}
            {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
            <div className="drawer_btn" onClick={toggleDrawer(anchor, true)}>
                <img src={Arrowup_icon}/>
            </div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}

        </div>
    )
}