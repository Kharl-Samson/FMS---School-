import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import DeleteIconModal from '../images/icons/delete_icon_modal.svg';
import moment from 'moment';
import FacultyGrid from "./FacultyGrid";
import loading from "../images/loading.gif";

export default function EachFaculty() {
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
    if (res.email != email_key && res.account_status =="Approved") {
      input_keyForGetUser_ctr++;
      return (
        <FacultyGrid
            key={input_keyForGetUser_ctr}
            fImage = {res.profile_photo}
            fName = {res.fname+" "+res.lname}
            fEmail = {res.email}
            fDep = {res.department}
            fEmp = {res.employment}
            fDate = {res.date_created}
            fLocker = {res.profile_locked}
        />
      );
    }
  });

  const deleteAccountForm=(e)=>{
    e.preventDefault();   
        const sendData = {
            email: localStorage.getItem('email'),
            email11: document.getElementById("keyDel").value,
       }     
       //Sending the data to my backend
       document.getElementsByClassName("LoadingContainer")[0].style.display = "flex";
       document.getElementById("deleteAcc_modal").style.display="none";
       axios.post('http://localhost/fms/deleteAccountFaculty.php',sendData)
       .then((result)=>{                   
            setTimeout(function(){
              window.location.reload();
            },2000)

    })//End of axios      
}
    
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      id="gridTable_forSearch"
    >

            {/*Loading when getting data*/ }
            <div className="LoadingContainer">
                <div className="mid">
                    <img src={loading}/>
                    <span>This may take a while. Please wait...</span>
                </div>
            </div>

      {input_keyForUser}



            {/*Delete Modal*/}
            <div className="modal_container delete_account" id="deleteAcc_modal">
                <div className="modal_validation_version2">             
                <p title="Close" className='close_modal' onClick={closeDeleteAcc}>&#215;</p>
                <div className='top'>
                    <img src={DeleteIconModal} style={{marginLeft:"25px"}}/>
                    Confirm Action
                </div>
                <p className='title' style={{maxWidth:"90%"}}>Are you sure you want to permanently delete your account? </p>
        
                <form style={{width: "100%"}} onSubmit={deleteAccountForm}>
                <div className='bot'>
                    <input type="hidden" id="keyDel"/>
                    <button type="button" onClick={closeDeleteAcc}>Cancel</button>
                    <button type="submit" style={{backgroundColor:"#F16262"}}>OK</button>
                </div>
                </form>
                </div>
            </div>
    </Grid>
  );
}

//Close modal
function closeDeleteAcc(){
  document.getElementsByClassName("delete_account")[0].style.display = "none"
}
