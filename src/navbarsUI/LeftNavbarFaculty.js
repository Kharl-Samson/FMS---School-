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

  return (
    <div className="navbar_account_container">
      <div>
        <div className="navbar_logo_container nav_part1">
          <img src={CICT_Logo} className="cict_logo" />
          <div className="cict_text left_nav_minimize">
            <span>CICT</span>
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

          <div id="link_certificate" className="link_disabler">
            <Link to="/Certificates" style={{ textDecoration: "none", width: "100%" }}>
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
            </Link>
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

      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logout_container navlink_container">
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
      </Link>

      {/* Nav drawer fo smaller device */}
      <div
        className="drawer_btn"
        onClick={OpenRightNavbar}
        id="leftnav_drawerBTN"
      >
        <img src={Menu_icon} />
      </div>
    </div>
  );
}
