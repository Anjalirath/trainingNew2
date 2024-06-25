import React, { useState } from 'react';
import {Grid, TextField, Button,FormControl, FormControlLabel, Checkbox, Typography, Box } from '@mui/material';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log(loginData);
    
  };

  return (
    <div>
      <Grid container spacing={3} alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={4} style={{
          textAlign: 'center',
          color: 'white',
          padding: '20px',
          backgroundImage: 'url(/image1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Typography variant="h4">LOGIN NOW</Typography>
          <Typography variant="subtitle1">Please Log In</Typography>
        </Grid>
        <Grid item xs={10} md={8} style={{ padding: '20px' }}>
          <form noValidate>
            <Typography variant="h5" gutterBottom>Login</Typography>
            <FormControl fullWidth margin="normal">
              <TextField label="Username" name="username" value={loginData.username} onChange={handleChange} required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Password" type="password" name="password" value={loginData.password} onChange={handleChange} required />
            </FormControl>
            <FormControlLabel
              control={<Checkbox checked={loginData.remember} onChange={handleChange} name="remember" />}
              label="Remember Me"
            />
            <Box mt={3}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>Login</Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;