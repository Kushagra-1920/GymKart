import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import instance from '../axiosconfig';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await instance.post("/users/login", { email, password });

      if (res.data === "Login successful") {
        onLoginSuccess();
        alert("Login successful!");
        navigate("/");
      } else {
        alert(res.data);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid email or password.");
    }
  }
  return (

    <div className="container mt-5 text-center p-2" style={{ maxWidth: "400px" }}>
      <form onSubmit={handleLogin} >
        <div className="mb-3">
          <label className="form-label">email</label>
          <input
            type="email"
            className="form-control"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="form-label mt-3">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <p className="mt-3">
          New to GymKart? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>



  )
}

export default Login
