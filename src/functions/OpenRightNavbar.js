function OpenRightNavbar(){

    document.getElementsByClassName('right_nav_sizer_Open')[0].style.display = "none";
    document.getElementsByClassName('right_navbar_container')[0].style.display = "block";

    setTimeout(function(){
        document.getElementsByClassName('right_navbar_container')[0].style.marginRight = "0%";  
    },200);
}

export default OpenRightNavbar;