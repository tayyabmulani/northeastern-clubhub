import React from "react";
import { Container } from "@mui/material";
import LoginForm from "../../components/LoginForm";
import clubAdminService from "../../services/User-Auth/club-admin-service";
import { useNavigate } from "react-router-dom";

const ClubAdminLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      const { token } = await clubAdminService.login(data);
      localStorage.setItem("token", token); // Store JWT token
      navigate("/club-admin-dashboard"); // Navigate to Club Admin dashboard
    } catch (error: any) {
      alert(error.message || "Invalid email or password.");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <LoginForm onSubmit={handleLogin} redirectLink="/club-admin-signup" />
    </Container>
  );
};

export default ClubAdminLogin;
