import React from "react";
import Login from "./components/Login";
import './css/global.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";

export default function App() {
  return (
    <div className="App">
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="Register" element={<Register/>} />
              <Route path="Home" element={<Home/>} />
            </Routes>
        
    </div>
  );
}


