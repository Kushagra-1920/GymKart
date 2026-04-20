import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ex from "../assets/excercise.png";
import "../index.css";

const Navbar = ({ setSearchResults, isLoggedIn }) => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const authLink = isLoggedIn
        ? { to: "/logout", label: "Logout" }
        : { to: "/login", label: "Login" };

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!keyword.trim()) return;

        try {
            const res = await axios.get(
                `http://localhost:8080/products/search?keyword=${keyword}`
            );

            setSearchResults(res.data);
            navigate("/search");
        } catch (error) {
            console.log("Search error:", error);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark sticky-top h-100 background" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                        <img src={ex} alt="Logo" width="30" height="24" />
                        <span className="fw-bold">
                            Gym<span className="text-danger">Kart</span>
                        </span>
                    </Link>

                    <div className="navbar-nav mx-auto gap-3 text-center">
                        <Link className="nav-link text-white" to="/">Home</Link>
                        <Link className="nav-link text-white" to="/addsupplements">Add Supplements</Link>

                        <li className="nav-item dropdown text-white">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Products
                            </a>
                            <ul className="dropdown-menu bg-dark">
                                <li><a className="dropdown-item nav-link text-white" href="/protein">Protein</a></li>
                                <li><a className="dropdown-item nav-link text-white" href="/creatine">Creatine</a></li>
                                <li><a className="dropdown-item nav-link text-white" href="/mass-gainer">Mass Gainer</a></li>
                                <li><a className="dropdown-item nav-link text-white" href="/pre-workout">Pre Workout</a></li>
                            </ul>
                        </li>

                        <Link className="nav-link text-white" to="/contactus">Contact Us</Link>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <form className="d-flex" onSubmit={handleSearch}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search products..."
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                            <button
                                className="btn btn-outline-warning"
                                type="button"
                                onClick={() => {
                                    setSearchResults([]);
                                    setKeyword("");
                                    navigate("/");
                                }}
                            >
                                Clear
                            </button>
                        </form>

                        <div className="gap-1">
                            <Link to="/cart" className="btn btn-success">
                                🛒
                            </Link>
                            <Link to={authLink.to} className="btn btn-success">
                                {authLink.label}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="bg-warning text-center py-2 fw-semibold">
                Sale is Live. Shop Now 🔥
            </div>
        </>
    );
};

export default Navbar;
