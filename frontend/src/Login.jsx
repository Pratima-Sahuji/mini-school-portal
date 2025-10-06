import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "./api";  

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${api}/user/login`, form);

     
      if (response.data && response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("accessToken", response.data.accessToken);
         if (res.data.user.role.toLowerCase() === "student") navigate("/student-dashboard");
       else navigate("/teacher-dashboard"); 
      } else {
        alert("Invalid response from server.");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Server error. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

