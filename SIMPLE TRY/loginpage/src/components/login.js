import React, { useState } from 'react';
import { TextField , Button , Container} from '@mui/material';
import {Link, useNavigate } from 'react-router-dom';
import './login.css'

const Login= () => {

  const [username, setUsername] = useState('');
  const handleUsername = (event) => { 
      setUsername(event.target.value) 
  }

  const [password, setPassword] = useState('');
  const handlePassword = (event) => { 
      setPassword(event.target.value) 
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  let navigate=useNavigate();
  let gotosignup=useNavigate();

  return (
    <>
    <div className='logoof'>
    </div>
    <div className='bigrow'>
      <Container className="column1">
        <img src='https://i.pinimg.com/564x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg'></img>
      </Container>
    <Container  maxWidth='xs' className="column2" >

        <h1 id="head">Login</h1>
        <form onSubmit={handleSubmit}>

          <TextField variant="outlined" margin="normal" required fullWidth label="Username" onChange={handleUsername}>
              {username}
          </TextField>

          <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password" onChange={handlePassword}>
              {password}
          </TextField>

          

          <Button type="submit" onClick={()=> {navigate("/home")}} fullWidth variant="contained" color="primary">
            Log In
          </Button>
          <br></br>
          <br></br>
          <p>Don't have an Account?
            <a id='goda' onClick={()=>{
              gotosignup("/signup")
            }}>  Create new account</a>
          </p>
        </form>
    </Container>
    </div>
    </>
  );
};

export default Login;