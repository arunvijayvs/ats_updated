import React, { useState } from 'react';
import { TextField , Button , Container, Box } from '@mui/material';
import { Email } from '@mui/icons-material';
import './Resume.css';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const FormPage= () => {
    


  const[fname,setFname] = useState('');
  const handleFname = (Event) =>{
    setFname(Event.target.value)
  }

  const[lname,setLname] = useState('');
  const handleLname = (Event) =>{
    setLname(Event.target.value)
  }


  const[email,setEmail] = useState('');
  const handleEmail = (Event) =>{
    setEmail(Event.target.value)
  }


  const[phone,setPhone] = useState('');
  const handlePhone = (Event) =>{
    setPhone(Event.target.value)
  }

  const[branch,setBranch] = useState('');
  const handleBranch = (Event) =>{
    setBranch(Event.target.value)
  }

  const[year,setYear] = useState('');
  const handleYear = (Event) =>{
    setYear(Event.target.value)
  }

  const[resume,setResume] = useState('');
  const handleResume = (Event) =>{
    setResume(Event.target.value)
  }
  const[gender,setGender] = useState('');
  const handleGender = (Event) =>{
    setGender(Event.target.value)
  }
  const navi=useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Resume uploaded successfully")
    const Data = {
        firstname: fname,
        lastname: lname,
        email: email,
        phone: phone,
        branch: branch,
        year: year,
        gender: gender
      };
      console.log( "Resume:" ,Data);
      axios.post(`http://localhost:3000/resume`, Data)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log("Something went wrong " + error);
        });
      navi("/submission");
  };


  return (
    <div id='div'>
        <Navbar/>
        <br></br>
        <br></br>
    <Container className="container">
      <h2>Resume</h2>
      <form onSubmit={handleSubmit}>

      <TextField variant="outlined" margin="normal" required  label="First Name" onChange={handleFname}>
            {fname}
        </TextField>


        <TextField variant="outlined" margin="normal" required fullWidth label="Last Name" onChange={handleLname}>
            {lname}
        </TextField>

        <TextField variant="outlined" margin="normal" required fullWidth label="Email" type="Email" onChange={handleEmail}>
            {email}
        </TextField>

        <TextField variant="outlined" margin="normal" required fullWidth label="Phone" type="text" onChange={handlePhone}>
            {phone}
        </TextField>


        


        <TextField variant="outlined" margin="normal" required fullWidth label="Branch of Study" type="text" onChange={handleBranch}>
            {branch}
        </TextField>

        <TextField variant="outlined" margin="normal" required fullWidth label="Years of experience" type="text" onChange={handleYear}>
            {year}
        </TextField>

        <TextField variant="outlined" margin="normal" required fullWidth label="" type="file"  accept=".pdf, .doc, .docx" onChange={handleResume}>
            
        </TextField>

        <TextField variant="outlined" margin="normal" required fullWidth label="Gender" type="text" onChange={handleGender}>
            {gender}
        </TextField>

        <Button type="submit" fullWidth variant="contained" color="primary">
         Submit
        </Button>


       
      </form>
    </Container>
    </div>
  );
};

export default FormPage;