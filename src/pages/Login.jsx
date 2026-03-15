import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthFormSplitScreen } from "../components/ui/AuthFormSplitScreen";
import logo from "../assets/pitchsap_logo.png";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post("http://localhost:5001/api/auth/login", data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      navigate("/chat");
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <AuthFormSplitScreen
      logo={
        <div className="flex items-center gap-3">
          <img src={logo} alt="Pitchsap" className="h-8 w-auto" />
          <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>Pitchsap</span>
        </div>
      }
      title="Welcome Back"
      description="Enter your credentials to access your dashboard"
      imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
      imageAlt="Futuristic technology background"
      onSubmit={handleLogin}
      forgotPasswordHref="#"
      createAccountHref="/signup"
    />
  );
}
