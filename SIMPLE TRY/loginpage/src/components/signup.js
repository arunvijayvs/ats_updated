import React, { useEffect ,useState } from 'react';
import {Avatar, TextField , Button , Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material';
import './signup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  const [confirmpassword, setconfirmPassword] = useState('');
  const handleConfirmPassword = (event) => { 
      setconfirmPassword(event.target.value) 
      
  }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const userData = {
        firstname: firstname,
        lastname: lastname,
        mailid: mailid,
        password: password,
      };
    
      console.log('User Data:', userData);
    
      axios.post(`http://localhost:3000/users`, userData)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log("Something went wrong " + error);
        });
      let message=document.getElementById("message");
      if(password.length!==0)
      {
        if(password===confirmpassword)
        {
          message.textContent="Passwords Matched";
          backtologin("/login")
        }
        else
        {
          message.textContent="Passwords didn't Match";
        }
      }
    };
    

  let backtologin=useNavigate();


  return (
    <Container id='bigcontainer'>
    <Container id='imgicon'>
      
      </Container>
    <Container maxWidth="xs" id='signup' >
      <br></br>
      <Avatar  id='avataricon' sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <AccountCircleIcon />
                        </Avatar>
                       
      
      <h1 id="head">Signup</h1>
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
        <TextField variant="outlined" margin="normal" required fullWidth label="Confirm Password" type="password" onChange={handleConfirmPassword}>
            {confirmpassword}
        </TextField>
        <br></br>
        <p id="message"></p>
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
