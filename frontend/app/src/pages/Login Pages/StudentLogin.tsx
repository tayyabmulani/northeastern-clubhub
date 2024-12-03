import React from "react";
import { Container } from "@mui/material";
import LoginForm from "../../components/LoginForm";
import studentService from "../../services/User-Auth/student-service";
import { useNavigate } from "react-router-dom";

const StudentLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      const { token } = await studentService.login(data);
      localStorage.setItem("token", token);
      navigate("/student-home");
    } catch (err: any) {
      alert(err.response?.data?.error || "Invalid email or password");
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
      <LoginForm onSubmit={handleLogin} redirectLink="/student-signup" />
    </Container>
  );
};

export default StudentLogin;
