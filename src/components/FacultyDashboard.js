import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FacultyDashboard(){

    const [auth,setAuth] = useState('');
    let navigate = useNavigate();
    
    useEffect(()=>{
        var auth = localStorage.getItem('email');
        if(auth === null){
            navigate(`/`)
        }
        setAuth(auth);
    },
    [])

    return (
        <h1>Dashboard : Hello {   localStorage.getItem('email')  }</h1>
    )
}