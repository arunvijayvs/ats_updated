import React from 'react'
import './Navbar.css'
import {useNavigate} from 'react-router-dom';

export default function Navbar() {
  let navida= useNavigate();
  return (
    <>
    <div className='menu'>
      <h1 className='name' style={{marginLeft:"50px"}}>
       HIRESMART
      </h1>
      <div className='con'>
        <ul className='right'>
            <li onClick={()=>{
              navida("/Aboutus")
            }}>About us</li>
            <li>Departments</li>
            <li>Vacancies</li>
            <li>FAQs</li>
            <li onClick={()=>{
              navida("/login")
            }}>Login</li>
        </ul>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img className='image' src="https://i.pinimg.com/564x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg"></img>
      </div>
    </div>
    </>
  )
}
