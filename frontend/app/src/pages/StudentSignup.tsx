import React, { useState } from 'react';
import { createUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import InputField from '../components/InputField';

const StudentSignup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the specific field in formData
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    setError('Passwords do not match');
    return;
  }

  try {
    const response = await createUser({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      password: formData.password,
      role: 'student',
    });

    console.log('API Response:', response); // Debugging the API response

    if (response.success) {
      navigate('/student-home'); // Redirect on success
    } else {
      setError(response.message || 'Unexpected error: Success field missing.');
    }
  } catch (err: any) {
    console.error('Error during signup:', err);
    setError(err.message || 'An error occurred. Please try again.');
  }
};


  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 4,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 500,
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Student Sign Up
        </Typography>
        <Typography variant="body2" textAlign="center" gutterBottom>
          Already have an account? <a href="/login">Log in</a>
        </Typography>
        {/* Display error message if it exists */}
        {error && (
          <Typography color="error" textAlign="center" gutterBottom>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputField
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Box display="flex" alignItems="center" marginY={2}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: 'black',
                '&:hover': {
                  backgroundColor: '#FD514E',
                },
              }}
            >
              Create an Account
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default StudentSignup;
