import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OpenRightNavbar from "../functions/OpenRightNavbar";
import CICT_Logo from "../images/login/cict_logo.png";
import Dashboard_icon from "../images/icons/dashboard.svg";
import account_setting from "../images/icons/account_setting.svg";
import manageUser from "../images/icons/manageUser.svg";
import Logout_icon from "../images/icons/logout.svg";
import Menu_icon from "../images/icons/menu.svg";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import signOutModal from "../images/icons/signOutModal.svg";
import editContent from "../images/icons/editContent.svg";

export default function NavbarAdmin(props) {
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

  //If wala laman yung local storage di makaka access sa loob
  const [auth, setAuth] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    var auth = localStorage.getItem("email");
    if (auth === null) {
      navigate(`/`);
    }
    setAuth(auth);
  }, []);

  const mq = window.matchMedia("(max-width: 850px)");
  //Skeleton show
  setTimeout(function () {
    if (mq.matches) {
      var elements11 = document.getElementsByClassName("left_nav_minimize_img");
      for (var i = 0, len = elements11.length; i < len; i++) {
        elements11[i].style.display = "block";
      }
    } else {
      var elements11 = document.getElementsByClassName("skeleton_done1");
      for (var i = 0, len = elements11.length; i < len; i++) {
        elements11[i].style.display = "block";
      }
      var elements12 = document.getElementsByClassName("skeleton_show1");
      for (var i = 0, len = elements12.length; i < len; i++) {
        elements12[i].style.display = "none";
      }
    }
  }, 1200);

  const logoutForm=(e)=>{
    e.preventDefault();
    //Sending the data request to call it on backend
    const sendData = {
        email:localStorage.getItem('email'),
    }

    //Sending the data to my backend
    axios.post('http://localhost/fms/logout.php',sendData)
    .then((result)=>{
      navigate(`/AdminLogin`);
    })    
}

  //Hook for getting web content
  const [getWebContent, setWebContent] = useState([]);
  const loadWebContent = async () => {
    const result = await axios.get("http://localhost/fms/getWebContent.php");
    setWebContent(result.data.phpresult);
  };
  useEffect(() => {
    loadWebContent();
  }, []);
  const webC_LOGO = getWebContent.map((res) => {
      return (
        <img src={"http://localhost/fms/web_content/" + res.logo}
        onError={(e)=>{e.target.onerror = null; e.target.src="http://localhost/fms/web_content/cict_logo.png"}} 
        className="cict_logo skeleton_done1"/>
      );
  });
  const webC_abbr = getWebContent.map((res) => {
    return (
      <span className="skeleton_done1">{res.abbreviation === "" ? "CICT" : res.abbreviation}</span>
    );
});

  return (
    <div className="navbar_account_container">
      <div>
        <div className="navbar_logo_container nav_part1">
          <Skeleton
            animation="wave"
            variant="circular"
            className="skeleton_show1"
            height={"50px"}
            width={"50px"}
            sx={{ marginRight: "5%" }}
          />
          {webC_LOGO}
          <div className="cict_text left_nav_minimize">
          <Skeleton
            animation="wave"
            className="skeleton_show1"
            height={"60px"}
            width={"109px"}
          />
          {webC_abbr}
          </div>
        </div>
        <div className="nav_line nav_part1"></div>

        <div className="nav_part2">
            
          <div id="link_dashboard" className="link_disabler link_disablerAdmin">
            <Link
              to="/AdminDashboard"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <div className="navlink_container" id="dashboard_link">
                <Skeleton
                  animation="wave"
                  className="skeleton_show1"
                  height={"22px"}
                  width={"100%"}
                  sx={{ margin: "3vh 1rem" }}
                />
                <LightTooltip title="Dashboard">
                  <img
                    src={Dashboard_icon}
                    className="left_nav_minimize_img skeleton_done1"
                  />
                </LightTooltip>
                <span className="left_nav_minimize skeleton_done1">
                  Dashboard
                </span>
              </div>
            </Link>
          </div>

          <div id="link_faculty" className="link_disabler link_disablerAdmin">
            <Link
              to="/Faculty"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <div className="navlink_container" id="faculty_link">
                <Skeleton
                  animation="wave"
                  className="skeleton_show1"
                  height={"22px"}
                  width={"100%"}
                  sx={{ margin: "3vh 1rem" }}
                />
                <LightTooltip title="Dashboard">
                  <img
                    src={manageUser}
                    className="left_nav_minimize_img skeleton_done1"
                  />
                </LightTooltip>
                <span className="left_nav_minimize skeleton_done1">
                  Manage Users
                </span>
              </div>
            </Link>
          </div>

          <div id="link_accountSetting" className="link_disabler link_disablerAdmin">
            <Link to="/AccountSettingsAdmin" style={{ textDecoration: "none", width: "100%" }}>
              <div className="navlink_container" id="profile_link">
                <Skeleton
                  animation="wave"
                  className="skeleton_show1"
                  height={"22px"}
                  width={"100%"}
                  sx={{ margin: "3vh 1rem" }}
                />
                <LightTooltip title="Account Setting">
                  <img
                    src={account_setting}
                    className="left_nav_minimize_img skeleton_done1"
                  />
                </LightTooltip>
                <span className="left_nav_minimize skeleton_done1">
                  Account Setting
                </span>
              </div>
            </Link>
          </div>

          <div id="link_contentSetting" className="link_disabler link_disablerAdmin">
            <Link to="/ContentSetting" style={{ textDecoration: "none", width: "100%" }}>
              <div className="navlink_container" id="contentS_link">
                <Skeleton
                  animation="wave"
                  className="skeleton_show1"
                  height={"22px"}
                  width={"100%"}
                  sx={{ margin: "3vh 1rem" }}
                />
                <LightTooltip title="Account Setting">
                  <img
                    src={editContent}
                    className="left_nav_minimize_img skeleton_done1"
                  />
                </LightTooltip>
                <span className="left_nav_minimize skeleton_done1">
                  Content Setting
                </span>
              </div>
            </Link>
          </div>


        </div>
      </div>


        <div className="logout_container navlink_container" onClick={openModal}>
          <Skeleton
            animation="wave"
            className="skeleton_show1"
            height={"22px"}
            width={"100%"}
            sx={{ margin: "3vh 1rem" }}
          />
          <LightTooltip title="Sign Out">
            <img
              src={Logout_icon}
              className="left_nav_minimize_img skeleton_done1"
            />
          </LightTooltip>
          <span className="left_nav_minimize skeleton_done1">Sign Out</span>
        </div>


      {/* Nav drawer fo smaller device */}
      <div
        className="drawer_btn"
        onClick={OpenRightNavbar}
        id="leftnav_drawerBTN"
      >
        <img src={Menu_icon} />
      </div>

            {/*Accept Modal*/}
            <div className="modal_container logout_modalAdmin">
                <div className="modal_validation_version2">             
                <p title="Close" className='close_modal' onClick={closeDeleteModal}>&#215;</p>
                <div className='top'>
                    <img src={signOutModal} />
                    Confirm Action
                </div>
                <p className='title'>Are you sure you want to sign out this account? </p>
        
                <form style={{width: "100%"}} onSubmit={logoutForm}>
                <div className='bot'>
                    <button type="button" onClick={closeDeleteModal}>Cancel</button>
                    <button type="submit" style={{backgroundColor:"#f4b24c",color:"#ffff",marginLeft:"5px"}}>Sign Out</button>
                </div>
                </form>
                </div>
            </div>

    </div>
  );
}
//Close modal
function closeDeleteModal(){
  document.getElementsByClassName("logout_modalAdmin")[0].style.display = "none"
}
//Open modal
function openModal(){
  document.getElementsByClassName("logout_modalAdmin")[0].style.display = "flex"
}
