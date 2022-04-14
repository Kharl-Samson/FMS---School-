import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from "react";

import SearchIcon from "../images/icons/search.svg";
import no_record_icon from "../images/no_record_icon.png";
import $ from 'jquery';
import TaskBox from './TaskBox';

import Grid from '@mui/material/Grid';
import SuccessSlideRightModal from '../modalsUi/SuccessSlideRightModal';

export default function SeeAllTask(){
  //Email key
  let email_key = localStorage.getItem('email'); 
  //Hook for view the list of task of user



    return(
        <h1></h1>

    )
}