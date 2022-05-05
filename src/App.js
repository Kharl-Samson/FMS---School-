import React from "react";
import Login from "./components/Login";
import './css/global.css';
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import FacultyDashboard from "./components/FacultyDashboard";
import Privacy_Policy from "./components/Privacy_Policy";
import Terms_of_Service from "./components/Terms_of_Service";
import PersonalDataSheet from "./components/PersonalDataSheet";
import CreatePersonalDataSheet from "./components/CreatePDS";
import EditPersonalDataSheet from "./components/EditPDS";
import Certificates from "./components/Certificates";
import UploadCertificate from "./certificatesUI/UploadCertificate";
import AccountSettings from "./components/AccountSettings";

export default function App() {
  return (
    <div className="App">
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="Register" element={<Register/>} />
              <Route path="ForgotPassword" element={<ForgotPassword/>} />
              <Route path="PrivacyPolicy" element={<Privacy_Policy/>} />
              <Route path="TermsOfService" element={<Terms_of_Service/>} />
              
              <Route path="FacultyDashboard" element={<FacultyDashboard/>} />   

              <Route path="PersonalInformation" element={<PersonalDataSheet/>} /> 
              <Route path="CreatePersonalInformation" element={<CreatePersonalDataSheet/>} /> 
              <Route path="EditPersonalInformation" element={<EditPersonalDataSheet/>} /> 

              <Route path="Certificates" element={<Certificates/>} />   
              <Route path="UploadCertificate" element={<UploadCertificate/>} />   

              <Route path="AccountSettings" element={<AccountSettings/>} />   
            </Routes>
        
    </div>
  );
}


