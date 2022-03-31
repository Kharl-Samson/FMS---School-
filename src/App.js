import React from "react";
import Login from "./components/Login";
import './css/global.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import FacultyDashboard from "./components/FacultyDashboard";


export default function App() {
  return (
    <div className="App">
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="Register" element={<Register/>} />
              <Route path="ForgotPassword" element={<ForgotPassword/>} />

              <Route path="Home" element={<Home/>} />

              <Route path="FacultyDashboard" element={<FacultyDashboard/>} />

            </Routes>
        
    </div>
  );
}


