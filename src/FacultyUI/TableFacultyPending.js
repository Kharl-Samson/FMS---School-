import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import no_record_icon from "../images/no_record_icon.png";
import FacultyRowPending from "./FacultyRowPending";
import success_modal from "../images/icons/success_modal.svg";

export default function TableFacultyPending() {
   //getting the email of user
   let email_key = localStorage.getItem("email");

   //Hook for getting all certificates
   const [getAllUser, setGetAllUser] = useState([]);
   const loadGetAllUser = async () => {
     const result = await axios.get("http://localhost/fms/getAllUser.php");
     setGetAllUser(result.data.phpresult);
   };
   useEffect(() => {
     loadGetAllUser();
   }, []);
 
   var input_keyForGetUser_ctr = 0;
   const input_keyForUser = getAllUser.map((res) => {
     if (res.email != email_key && res.account_status =="Pending") {
       input_keyForGetUser_ctr++;
       return (
        <FacultyRowPending
        key={input_keyForGetUser_ctr}
        fClass = {"fclass_pendFaculty"+input_keyForGetUser_ctr}
        fName = {res.fname}
        fLname = {res.lname}
        fEmail = {res.email}
        fdate = {res.date_created}
        />
       );
     }
   });
 


  return (
    <div id="rowTable_forSearch_pending" className="rowTable_forSearch_pending">
      <div className="header_faculty header_faculty_pending">
            <div className="th th1a"><span>First Name</span></div>
            <div className="th th2a"><span>Last Name</span></div>
            <div className="th th3a"><span>Email Address</span></div>
            <div className="th th4a"><span>Date</span></div>
            <div className="th th5a"><span>Action</span></div>
      </div>

      <div className="tableRow_scrollable_container_faculty">

        {input_keyForUser}

        {/*input_keyForUser*/} 
        <div className="no_searchFound8">
              <img src={no_record_icon}/>
              <p>No Faculty Available!</p>
        </div>
      </div>


      <div className="success_modal_right_side accept_side_modal">
            <div className="left"><img src={success_modal}/></div>
            <div className="center">
                <p>Success!</p>
                <p>This action was process succesfully.</p>
            </div>
            <div className="right">
                <p title="Close" onClick={closingSuccessModalRight}>&#215;</p>
            </div>
        </div>

    </div>
  );
}

function closingSuccessModalRight(){
  document.getElementsByClassName("accept_side_modal")[0].style.right = "-100%"; 
  setTimeout(function(){
      document.getElementsByClassName("accept_side_modal")[0].style.display = "none"; 
  },2000);
}