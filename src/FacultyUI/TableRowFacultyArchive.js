import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import no_record_icon from "../images/no_record_icon.png";
import continueYellow from '../images/icons/continueYellow.svg';
import FacultyRowArchive from "./FacultyRowArchive";
import loading from "../images/loading.gif";

export default function TableRowFacultyArchive() {
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
     if (res.email != email_key && res.account_status =="Archive") {
       input_keyForGetUser_ctr++;
       return (
         <FacultyRowArchive
             key={input_keyForGetUser_ctr}
             fImage = {res.profile_photo}
             fName = {res.fname+" "+res.lname}
             fEmail = {res.email}
             fDep = {res.department}
             fEmp = {res.employment}
             fDate = {res.date_created}
         />
       );
     }
   });
 

   const activateAccountForm=(e)=>{
    e.preventDefault();   
        const sendData = {
            email: localStorage.getItem('email'),
            email11: document.getElementById("keyActivate").value,
       }     
       //Sending the data to my backend
       document.getElementsByClassName("LoadingContainer")[0].style.display = "flex";
       document.getElementById("restoreAcc_modal").style.display = "none"
       axios.post('http://localhost/fms/activateAccountAdmin.php',sendData)
       .then((result)=>{                   
            setTimeout(function(){
              window.location.reload();
            },2000)

    })//End of axios      
   }

  return (
    <div id="rowTable_forSearch_archive" className="rowTable_forSearch_archive">

            {/*Loading when getting data*/ }
            <div className="LoadingContainer">
                <div className="mid">
                    <img src={loading}/>
                    <span>This may take a while. Please wait...</span>
                </div>
            </div>

      <div className="header_faculty">
            <div className="th th1"><span>Name</span></div>
            <div className="th th2"><span>Email Address</span></div>
            <div className="th th3"><span>Department</span></div>
            <div className="th th4"><span>Employment</span></div>
            <div className="th th5"><span>Action</span></div>
      </div>

      <div className="tableRow_scrollable_container_faculty">

        {input_keyForUser}

        {/*input_keyForUser*/} 
        <div className="no_searchFound20">
              <img src={no_record_icon}/>
              <p>No Faculty Available!</p>
        </div>
      </div>

            {/*Restore Modal*/}
            <div className="modal_container delete_account" id="restoreAcc_modal">
                <div className="modal_validation_version2">             
                <p title="Close" className='close_modal' onClick={closeRestoreAcc}>&#215;</p>
                <div className='top'>
                    <img src={continueYellow} style={{marginLeft:"25px"}}/>
                    Confirm Action
                </div>
                <p className='title' style={{maxWidth:"90%"}}>Are you sure you want to activate this account? </p>
        
                <form style={{width: "100%"}}  onSubmit={activateAccountForm}>
                <div className='bot'>
                    <input type="hidden" id="keyActivate"/>
                    <button type="button" onClick={closeRestoreAcc}>Cancel</button>
                    <button type="submit" style={{backgroundColor:"#f4b24c"}}>OK</button>
                </div>
                </form>
                </div>
            </div>

    </div>
  );
}

//Close modal
function closeRestoreAcc(){
    document.getElementById("restoreAcc_modal").style.display = "none"
}
  

