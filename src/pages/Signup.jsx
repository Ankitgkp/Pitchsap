import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthFormSplitScreen } from "../components/ui/AuthFormSplitScreen";
import logo from "../assets/pitchsap_logo.png";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    try {
      const response = await axios.post("https://pitchsapapi.1forge.in/api/auth/signup", data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      navigate("/chat");
    } catch (error) {
      console.error("Signup failed:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <AuthFormSplitScreen
      isSignup={true}
      logo={
        <div className="flex items-center gap-3">
          <img src={logo} alt="Pitchsap" className="h-8 w-auto" />
          <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Aeonik Pro', sans-serif" }}>Pitchsap</span>
        </div>
      }
      title="Create an Account"
      description="Join Pitchsap and start building your legacy today"
      imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"
      imageAlt="Team working together on technology"
      onSubmit={handleSignup}
      forgotPasswordHref="#"
      createAccountHref="/signup"
    />
  );
}
