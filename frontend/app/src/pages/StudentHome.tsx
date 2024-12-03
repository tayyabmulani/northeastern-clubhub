import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const StudentHome: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Student Home Page
      </Typography>
      <Button
        variant="contained"
        onClick={handleButtonClick}
        sx={{
          backgroundColor: '#555',
          '&:hover': { backgroundColor: '#888' },
          mt: 2,
        }}
      >
        Click Me
      </Button>
    </Box>
  );
};

export default StudentHome;
