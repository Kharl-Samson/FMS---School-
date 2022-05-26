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
import AdminDashboard from "./components/AdminDashboard";
import AccountSettingsAdmin from "./components/AccountSettingsAdmin";
import ActivityLog from "./components/ActivityLog";
import ActivityLogAdmin from "./components/ActivityLogAdmin";
import Faculty from "./components/Faculty";
import ViewFacultyInfo from "./FacultyUI/ViewFacultyInfo";
import ViewFacultyCert from "./FacultyUI/ViewFacultyCert";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import AdminLogin from "./components/AdminLogin";
import ContentSetting from "./components/ContentSetting";
import TestPDF from "./components/TestPDF";
import PageLoader from "./components/PageLoader";

export default function App() {
  //window.onerror = function(message, url, lineNumber) {  
    //return true; // prevents browser error messages  
 // };


  return (
    <div className="App">
            <Routes>
              <Route path="/PageLoader" element={<PageLoader/>} />
              <Route path="/" element={<Login/>} />
              <Route path="/AdminLogin" element={<AdminLogin/>} />
              <Route path="Register" element={<Register/>} />
              <Route path="ForgotPassword" element={<ForgotPassword/>} />
              <Route path="ForgotPasswordForm" element={<ForgotPasswordForm/>} />
              <Route path="PrivacyPolicy" element={<Privacy_Policy/>} />
              <Route path="TermsOfService" element={<Terms_of_Service/>} />
              
              <Route path="FacultyDashboard" element={<FacultyDashboard/>} />   

              <Route path="PersonalInformation" element={<PersonalDataSheet/>} /> 
              <Route path="CreatePersonalInformation" element={<CreatePersonalDataSheet/>} /> 
              <Route path="EditPersonalInformation" element={<EditPersonalDataSheet/>} /> 

              <Route path="Certificates" element={<Certificates/>} />   
              <Route path="UploadCertificate" element={<UploadCertificate/>} />   

              <Route path="AccountSettings" element={<AccountSettings/>} />   

              <Route path="AdminDashboard" element={<AdminDashboard/>} /> 
              <Route path="Faculty" element={<Faculty/>} /> 
              <Route path="ViewFaculty" element={<ViewFacultyInfo/>} /> 
              <Route path="ViewFacultyCertificates" element={<ViewFacultyCert/>} /> 

              <Route path="AccountSettingsAdmin" element={<AccountSettingsAdmin/>} />              
              <Route path="ContentSetting" element={<ContentSetting/>} /> 

              <Route path="ActivityLog" element={<ActivityLog/>} /> 
              <Route path="ActivityLogAdmin" element={<ActivityLogAdmin/>} /> 

              <Route path="Test" element={<TestPDF/>} /> 
            </Routes>
        
    </div>
  );
}


