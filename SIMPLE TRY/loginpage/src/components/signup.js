import React, { useState } from 'react';
import {Avatar, TextField , Button , Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material';
import './signup.css'
const Signuppage= () => {
    
    const[firstname,setFirstname]=useState('');
    const handleFirstname=(event)=>{
      setFirstname(event.target.value)
    }
    
  const [lastname, setLastname] = useState('');
  const handleLastname = (event) => { 
      setLastname(event.target.value) 
  }

  const[mailid ,setMailid]=useState('');
  const handleMailid=(event)=>{
    setMailid(event.target.value)
  }

  const [password, setPassword] = useState('');
  const handlePassword = (event) => { 
      setPassword(event.target.value) 
      
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Firstname:',firstname);
    console.log('Lastname:', lastname);
    console.log('email:',mailid);
    console.log('Password:', password);
  };

  return (
    <Container id='bigcontainer'>
    <Container id='imgicon'>
      
      </Container>
    <Container maxWidth="xs" id='signup' >
      <br></br>
      <Avatar  id='avataricon' sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <AccountCircleIcon />
                        </Avatar>
                       
      
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>

        <TextField variant="outlined" margin="normal" required fullWidth label="Firstname"  type="text" onChange={handleFirstname}>
            {firstname}
        </TextField>
        <br></br>

        <TextField variant="outlined" margin="normal" required fullWidth label="Lastname" type="text" onChange={handleLastname}>
            {lastname}
        </TextField>
        <br></br>

        <TextField variant="outlined" margin="normal" required fullWidth label="Email" type="email" onChange={handleMailid}>
            {mailid}
        </TextField>
        <br></br>
        <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password" onChange={handlePassword}>
            {password}
        </TextField>
        <br></br>
        <br></br>
   
        


        <Button type="submit" fullWidth variant="contained" color="primary">
          Create Account
        </Button>
        <br></br>
        <br></br>
        <br></br>
      </form>
   
    </Container>
    </Container>
  );
};

export default Signuppage;