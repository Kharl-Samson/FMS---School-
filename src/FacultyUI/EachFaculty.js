import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import DeleteIconModal from '../images/icons/delete_icon_modal.svg';
import moment from 'moment';
import FacultyGrid from "./FacultyGrid";

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
        />
      );
    }
  });


    
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      id="gridTable_forSearch"
    >


      {input_keyForUser}


    </Grid>
  );
}

