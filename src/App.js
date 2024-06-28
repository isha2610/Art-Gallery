import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ContactUs from './components/ContactUs';
import Footer from "./components/Footer";
import UploadFiles from "./components/UploadFiles";
import GalleryRetrieve from "./components/GalleryRetrieve";
import SignIn from "./components/SignIn";

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <HeroSection />
          <ContactUs />
           </> } />
      
      <Route path="/uploadFiles" element={<UploadFiles />} /> 
      <Route path="/gallery" element={<GalleryRetrieve />} /> 
      <Route path="/login" element={<SignIn />} />
      </Routes>
      <Footer />
      </Router>
      
  );
};
export default App;