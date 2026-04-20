import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axiosconfig";

const Logout = ({ onLogoutSuccess }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await instance.post("/users/Logout");
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        onLogoutSuccess();
        navigate("/");
      }
    };

    handleLogout();
  }, [navigate, onLogoutSuccess]);

  return <div className="container py-4">Logging out...</div>;
};

export default Logout;
