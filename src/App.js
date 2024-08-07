import React from 'react';
import './App.css';
import LinkedInCallback from './coponent/LinkedInCallback';
import LinkedInLoginButton from './coponent/LinkedInLogInButton ';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Navbar from'./coponent/Navbar'

function App() {
  return (
    <BrowserRouter >
    <Routes>
      {/* <Route path="/" element={<LinkedInLoginButton />} />
      <Route path="/linkedin" element={<LinkedInCallback />} /> */}
      <Route path='/' element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

