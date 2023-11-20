import './App.css';
import About from './Day7/About';
import Home from './Day7/Home';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar from './Day7/Navbar';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
