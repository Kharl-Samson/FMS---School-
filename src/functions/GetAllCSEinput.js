//Getting all the ELEMENTARY NAME 
function getAllCSEinput(){
    var CSE_board_handler="", CSE_rating_handler="", CSE_dateExam_handler="", CSE_placeExam_handler="", CSE_licenseNo_handler="", CSE_dateValidity_handler="";

    var boardCSE = document.getElementsByName("boardCSE[]");
    var ratingCSE = document.getElementsByName("ratingCSE[]");
    var dateExamCSE = document.getElementsByName("dateExamCSE[]");
    var placeExamCSE = document.getElementsByName("placeExamCSE[]");
    var licenseCSE = document.getElementsByName("licenseCSE[]");
    var dateValidityCSE = document.getElementsByName("dateValidityCSE[]");
        
    for(var i = 0; i < boardCSE.length; i++) {

        CSE_board_handler+=boardCSE[i].value+" |:| ";
        CSE_rating_handler+=ratingCSE[i].value+" |:| ";
        CSE_dateExam_handler+=dateExamCSE[i].value+" |:| ";
        CSE_placeExam_handler+=placeExamCSE[i].value+" |:| ";
        CSE_licenseNo_handler+=licenseCSE[i].value+" |:| ";
        CSE_dateValidity_handler+=dateValidityCSE[i].value+" |:| ";
    }
    document.getElementById("CSE_board_handler").value = CSE_board_handler;
    document.getElementById("CSE_rating_handler").value = CSE_rating_handler;
    document.getElementById("CSE_dateExam_handler").value = CSE_dateExam_handler;
    document.getElementById("CSE_placeExam_handler").value = CSE_placeExam_handler;
    document.getElementById("CSE_licenseNo_handler").value = CSE_licenseNo_handler;
    document.getElementById("CSE_dateValidity_handler").value = CSE_dateValidity_handler;

}

export default getAllCSEinput;