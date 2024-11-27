import React from 'react';
import { Button } from '@mui/material';

interface SignupButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const SignupButton: React.FC<SignupButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundColor: '#888',
        '&:hover': { backgroundColor: '#555' },
        mt: 2,
      }}
    >
      {label}
    </Button>
  );
};

export default SignupButton;
