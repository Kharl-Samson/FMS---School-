import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OpenRightNavbar from "../functions/OpenRightNavbar";
import CICT_Logo from "../images/login/cict_logo.png";
import Dashboard_icon from "../images/icons/dashboard.svg";
import Profile_icon from "../images/icons/profile.svg";
import account_setting from "../images/icons/account_setting.svg";
import Certificate_icon from "../images/icons/certificate.svg";
import Logout_icon from "../images/icons/logout.svg";
import Menu_icon from "../images/icons/menu.svg";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import ProfileNotifyer from '../components/NotifyerProfile';
import signOutModal from "../images/icons/signOutModal.svg";
import loading from "../images/loading.gif";

export default function NavbarFaculty(props) {
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


  const mq1 = window.matchMedia("(max-width: 850px)");
  function clickCert(){
    var auth1 = localStorage.getItem("pds_status");

    if (mq1.matches) {
      navigate(`/Certificates`);
    }
    else{

      if (auth1 === "Pending") {
        document.getElementById("profile_notify_container").style.display="flex";
      }
      else{
        navigate(`/Certificates`);
      }
    }
  
  }


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

    document.getElementsByClassName("LoadingContainer")[0].style.display = "flex";
    document.getElementsByClassName("logout_modalAdmin")[0].style.display = "none";
    //Sending the data to my backend
    axios.post('http://localhost/fms/logout.php',sendData)
    .then((result)=>{
      setTimeout(function(){
         document.getElementsByClassName("LoadingContainer")[0].style.display = "none";
         navigate(`/`);
      },1000)
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
      className="cict_logo skeleton_done1" id="toEditLogo"/>
    );
});
const webC_abbr = getWebContent.map((res) => {
  return (
    <span className="skeleton_done1">{res.abbreviation === "" ? "CICT" : res.abbreviation}</span>
  );
});
  return (
    <div className="navbar_account_container">

            {/*Loading when getting data*/ }
            <div className="LoadingContainer">
                <div className="mid">
                    <img src={loading}/>
                    <span>This may take a while. Please wait...</span>
                </div>
            </div>

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
          <div id="link_dashboard" className="link_disabler">
            <Link
              to="/FacultyDashboard"
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

          <div id="link_profile" className="link_disabler">
            <Link
              to="/PersonalInformation"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <div className="navlink_container" id="pds_link">
                <Skeleton
                  animation="wave"
                  className="skeleton_show1"
                  height={"22px"}
                  width={"100%"}
                  sx={{ margin: "3vh 1rem" }}
                />
                <LightTooltip title="My Profile">
                  <img
                    src={Profile_icon}
                    className="left_nav_minimize_img skeleton_done1"
                  />
                </LightTooltip>
                <span className="left_nav_minimize skeleton_done1">
                  My Profile
                </span>
              </div>
            </Link>
          </div>

          <div id="link_certificate" className="link_disabler" onClick={clickCert}>
              <div
                className="navlink_container nav_part3"
                id="certificate_link"
              >
                <Skeleton
                  animation="wave"
                  className="skeleton_show1"
                  height={"22px"}
                  width={"100%"}
                  sx={{ margin: "3vh 1rem" }}
                />
                <LightTooltip title="Certificates">
                  <img
                    src={Certificate_icon}
                    className="left_nav_minimize_img skeleton_done1"
                  />
                </LightTooltip>
                <span className="left_nav_minimize skeleton_done1">
                  Certificates
                </span>
              </div>
          </div>

          <div id="link_accountSetting" className="link_disabler">
            <Link to="/AccountSettings" style={{ textDecoration: "none", width: "100%" }}>
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
        </div>
      </div>

      <form>
        <div className="logout_container navlink_container"  onClick={openModal}>
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
      </form> 

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
