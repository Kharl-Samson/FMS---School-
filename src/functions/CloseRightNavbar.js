function CloseRightNavbar(){
    document.getElementsByClassName('right_navbar_container')[0].style.marginRight = "-200%";
    setTimeout(function(){
        document.getElementsByClassName('right_nav_sizer_Open')[0].style.display = "flex";
    },200);
}

export default CloseRightNavbar;