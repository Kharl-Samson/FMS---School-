function CloseRightNavbar(){
    document.getElementsByClassName('right_nav_sizer')[0].title = "Maximize";
    document.getElementsByClassName('right_navbar_container')[0].style.marginRight = "-70%";
    document.getElementsByClassName('span1_right_nav')[0].style.display = "none";
    document.getElementsByClassName('avatar_navbar_sizer')[0].style.display = "flex";
    document.getElementsByClassName('right_nav_sizer')[0].style.width = "80px";
    document.getElementsByClassName('right_nav_sizer')[0].style.backgroundColor = "#ffff";
    document.getElementsByClassName('span2_right_nav')[0].style.color = "#ffaa28";

    document.getElementsByClassName('minimizer_adjuster')[0].style.justifyContent = "center";
}

export default CloseRightNavbar;