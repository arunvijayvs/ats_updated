import './App.css';
import About from './Day7/About';
import Home from './Day7/Home';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar from './Day7/Navbar';
import LoginPage from './New/LoginPage';
import SignupPage from './New/SignupPage';

function App() {
  return (
    <div>
      <SignupPage/>
    </div>
  )
}

export default App;
