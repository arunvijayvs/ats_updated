import React, { useState } from 'react';
import { TextField , Button , Container, Box } from '@mui/material';
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

  return (
    <Box className="row">
      <Container className="column1">
      </Container>
    <Container className="column2">

        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>

          <TextField variant="outlined" margin="normal" required fullWidth label="Username" onChange={handleUsername}>
              {username}
          </TextField>

          <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password" onChange={handlePassword}>
              {password}
          </TextField>

          

          <Button type="submit" fullWidth variant="contained" color="primary">
            Log In
          </Button>
          <br></br>
          <br></br>

        </form>
    </Container>
    </Box>
  );
};

export default Login;