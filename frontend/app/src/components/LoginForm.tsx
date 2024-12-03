import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
  redirectLink?: string; // Link to redirect if the user doesn't have an account
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, redirectLink }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Both email and password are required.");
      return;
    }
    setError("");
    onSubmit(formData);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 400,
        padding: 4,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Log in
      </Typography>
      {error && (
        <Typography color="error" textAlign="center" gutterBottom>
          {error}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "black",
            "&:hover": { backgroundColor: "#FD514E" },
            paddingY: 1.5,
            marginTop: 2,
          }}
        >
          Log In
        </Button>
      </form>
      <Typography textAlign="center" mt={2}>
        Don't have an account?{" "}
        <Link href={redirectLink || "/signup"} underline="hover">
          Sign up
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
