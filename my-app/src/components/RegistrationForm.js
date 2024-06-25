import React, { useState } from 'react';
import {Grid, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup, MenuItem, Typography, Box,} from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    dob: '',
    country: 'us',
    gender: '',
    hobbies: [],
    bio: '',
    terms: false
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData.hobbies, value]
          : prevData.hobbies.filter((hobby) => hobby !== value)
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = () => {
    setSubmittedData([...submittedData, formData]);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      phone: '',
      dob: '',
      country: 'us',
      gender: '',
      hobbies: [],
      bio: '',
      terms: false
    });
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
          height: '190vh', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Typography variant="h4">REGISTER NOW</Typography>
          <Typography variant="subtitle1">while seats are available!</Typography>
        </Grid>
        <Grid item xs={10} md={8} style={{ padding: '20px' }}>
          <form noValidate onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom>Registration Form</Typography>
            <FormControl fullWidth margin="normal">
              <TextField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Username" name="username" value={formData.username} onChange={handleChange} required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Email Address" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Date of Birth" type="date" name="dob" InputLabelProps={{ shrink: true }} value={formData.dob} onChange={handleChange} required />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField select label="Country" name="country" value={formData.country} onChange={handleChange}>
                <MenuItem value="us">United States</MenuItem>
                <MenuItem value="ca">Canada</MenuItem>
                <MenuItem value="uk">United Kingdom</MenuItem>
                <MenuItem value="au">Australia</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </FormControl>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Hobbies</FormLabel>
              <FormGroup row>
                <FormControlLabel control={<Checkbox checked={formData.hobbies.includes('reading')} onChange={handleChange} name="hobbies" value="reading" />} label="Reading" />
                <FormControlLabel control={<Checkbox checked={formData.hobbies.includes('traveling')} onChange={handleChange} name="hobbies" value="traveling" />} label="Traveling" />
                <FormControlLabel control={<Checkbox checked={formData.hobbies.includes('cooking')} onChange={handleChange} name="hobbies" value="cooking" />} label="Cooking" />
                <FormControlLabel control={<Checkbox checked={formData.hobbies.includes('other')} onChange={handleChange} name="hobbies" value="other" />} label="Other" />
              </FormGroup>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField label="Bio" multiline rows={4} name="bio" value={formData.bio} onChange={handleChange} />
            </FormControl>
            <FormControlLabel control={<Checkbox checked={formData.terms} onChange={handleChange} name="terms" />} label="Agree to Terms and Conditions" />
            <Box mt={3}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
              <Button variant="contained" color="secondary" onClick={resetForm}>Reset</Button>
            </Box>
          </form>
          </Grid>
      </Grid>
      </div>
  );
};

export default RegistrationForm;