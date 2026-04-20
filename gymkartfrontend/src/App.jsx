import React, { useEffect, useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddSupplements from "./components/AddSupplements";
import Home from "./pages/Home.jsx";
import CartPage from './pages/CartPage.jsx';
import Protein from "./pages/Protein.jsx";
import Creatine from "./pages/Creatine.jsx";
import PreWorkout from "./pages/PreWorkout.jsx";
import Massgainer from "./pages/MassGainer.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Logout from "./components/Logout.jsx";
import instance from "./axiosconfig.js";

const App = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const checkCurrentUser = async () => {
      try {
        const res = await instance.get("/users/currentUser");
        const loggedIn = Boolean(res.data);

        setIsLoggedIn(loggedIn);
        localStorage.setItem("isLoggedIn", String(loggedIn));
      } catch (error) {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", "false");
      }
    };

    checkCurrentUser();
  }, []);

  const handleRegisterSuccess = () => {
    localStorage.setItem("isRegistered", "true");
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isRegistered", "true");
  };

  const handleLogoutSuccess = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <>
      <Navbar
        setSearchResults={setSearchResults}
        isLoggedIn={isLoggedIn}
      />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/search" element={<SearchResults searchResults={searchResults} isLoggedIn={isLoggedIn} />} />
        <Route path="/addsupplements" element={<AddSupplements />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<Register onRegisterSuccess={handleRegisterSuccess} />} />
        <Route path="/logout" element={<Logout onLogoutSuccess={handleLogoutSuccess} />} />
        <Route path="/contactus" element={< ContactUs/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/protein" element={<Protein isLoggedIn={isLoggedIn} />} />
        <Route path="/creatine" element={<Creatine isLoggedIn={isLoggedIn} />} />
        <Route path="/pre-workout" element={<PreWorkout isLoggedIn={isLoggedIn} />} />
        <Route path="/mass-gainer" element={<Massgainer isLoggedIn={isLoggedIn} />} />
      </Routes>
    </>
  );
};

export default App;
