function OpenRightNavbar(){
    document.getElementsByClassName('right_nav_sizer')[0].title = "Minimize";
    document.getElementsByClassName('right_navbar_container')[0].style.marginRight = "0%";
   
    document.getElementsByClassName('minimizer_adjuster')[0].style.justifyContent = "flex-start";
    
    setTimeout(function(){
        document.getElementsByClassName('avatar_navbar_sizer')[0].style.display = "none";
        document.getElementsByClassName('right_nav_sizer')[0].style.width = "45px";
        document.getElementsByClassName('right_nav_sizer')[0].style.backgroundColor = "#ffaa28";
        document.getElementsByClassName('span2_right_nav')[0].style.color = "#ffaa28";
        document.getElementsByClassName('span1_right_nav')[0].style.display = "flex";

    }, 500);
}

export default OpenRightNavbar;