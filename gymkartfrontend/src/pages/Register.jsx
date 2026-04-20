import React from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../axiosconfig";

const Register = ({ onRegisterSuccess }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await instance.post("/users/register", { name, email, password });
      if (res.data === "user registered successfully") {
        onRegisterSuccess();
        alert("Registration successful!");
        navigate("/login");
      } else if (res.data === "email already exists") {
        onRegisterSuccess();
        alert("Email already exists. Please login.");
        navigate("/login");
      } else {
        alert(res.data);
      }
    } catch (error) {

      console.log(error.response?.data || error.message);
      alert("Registration failed");

    }
  }

  return (
    <div className="container mt-5 text-center p-2" style={{ maxWidth: "400px" }}>
      <form onSubmit={handleRegister} >
        <div className="mb-3 ">
          <label className="form-label"><strong>Name</strong></label>
          <input
            type="text"
            className="form-control"
            placeholder="enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="form-label mt-2"><strong>Email</strong></label>
          <input
            type="email"
            className="form-control"
            placeholder="enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="form-label mt-2"> <strong>Password</strong></label>
          <input
            type="password"
            className="form-control"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <p className="mt-3">
          Already registered? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
