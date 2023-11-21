import React from 'react'
import './App.css';
import Signuppage from './components/signup';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/login';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/signup" element={<Signuppage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
