import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCards";

import c1 from "../assets/caraousel.jpg";
import c2 from "../assets/caraousel2.jpg";
import c3 from "../assets/caraousel3.jpg";
import c4 from "../assets/banner4.jpg";
import c5 from "../assets/banner5.jpg";
import creatine from "../assets/cr.jpeg";
import gainer from "../assets/gainer.png";
import protein from "../assets/pre.jpg";
import pre from "../assets/pr.jpg";
import "../style/Home.css";
import "../index.css"

const Home = ({ isLoggedIn }) => { 
    return (


        <div className="body">
            {/* carousels section */}
            <section>
                <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="2000"
                >
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src={c5} className="d-block w-100" style={{ height: "630px", objectFit: "cover" }} />
                        </div>

                        <div className="carousel-item">
                            <img src={c1} className="d-block w-100" style={{ height: "630px", objectFit: "cover" }} />
                        </div>

                        <div className="carousel-item">
                            <img src={c2} className="d-block w-100" style={{ height: "630px", objectFit: "cover" }} />
                        </div>

                        <div className="carousel-item">
                            <img src={c3} className="d-block w-100" style={{ height: "630px", objectFit: "cover" }} />
                        </div>

                        <div className="carousel-item">
                            <img src={c4} className="d-block w-100" style={{ height: "630px", objectFit: "cover" }} />
                        </div>

                       


                    </div>
                </div>
            </section>
            {/* Texts */}
            <section className="mt-3  backgroundbody">
                <div className="text-center mt-10 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Fuel Your <strong>Fitness Journey</strong> 💪
                    </h2>
                    <hr />
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Premium supplements, expert-approved products, and everything you
                        need to build your dream physique.
                    </p>

                    <div className="container paragraph my-3 text-gray-600 max-w-2xl mx-auto" style={{ textAlign: 'justify' }}>

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti asperiores voluptates consequatur dicta reprehenderit corporis quod necessitatibus, ex ducimus deleniti doloremque iusto, error cum expedita nesciunt eligendi aliquam ad culpa?
                        Aliquam suscipit iste consequuntur sit corporis praesentium cumque doloribus amet similique aliquid, aperiam laudantium saepe architecto et at inventore? Voluptate culpa laborum nesciunt et vel sit fugit, officia deleniti temporibus.
                        Eius enim dignissimos, possimus, quos voluptates quam quasi dolorum sint a rem quibusdam earum eveniet culpa adipisci dicta fugiat nihil officia sapiente consequuntur harum tempora! Mollitia ullam minima dolor rerum?

                    </div>

                    <a href="#products">
                        <button type="button" className="mt-2 px-6 p-3 py-2 btn btn-outline-success  transition duration-300">
                            Shop Now
                        </button>
                    </a>
                </div>
            </section>

            <section className=" backgroundbody">
                <h1 className="m-5 heading  backgroundbody">
                    <span style={{ color: "#FFC107" }}>|</span> Essentials
                </h1>
            </section>

            {/* cards section */}
            <section id="products" className=" body">
                <div className="row row-cols-1 row-cols-md-4 g-3 body">
                    <div className="col ">
                        <div className="card   ">
                            <img
                                src={protein}
                                className="card-img-top  body "
                                alt="..."
                                style={{ height: "360.4px", objectFit: "fill" }}
                            />
                            <div className="card-body  body">
                                <h5 className="card-title text-white">Protein</h5>
                                <hr style={{ color: 'white' }} />
                                <Link to="/protein"><button type="button" className="btn btn-warning  backgroundbody">Explore</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col  ">
                        <div className="card">
                            <img
                                src={creatine}
                                className="card-img-top"
                                alt="..."
                                style={{ height: "360.4px", objectFit: "fill" }}
                            />
                            <div className="card-body  body">
                                <h5 className="card-title text-white ">Creatine</h5>
                                <hr style={{ color: 'white' }} />
                                <Link to="/creatine"><button type="button" className="btn btn-warning">Explore</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col  backgroundbody">
                        <div className="card  backgroundbody">
                            <img
                                src={pre}
                                className="card-img-top"
                                alt="..."
                                style={{ height: "360.4px", objectFit: "fill" }}
                            />
                            <div className="card-body  body">
                                <h5 className="card-title text-white">Pre Workout</h5>
                                <hr style={{ color: 'white' }} />
                                <Link to="/pre-workout"><button type="button" className="btn btn-warning">Explore</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col  backgroundbody">
                        <div className="card  backgroundbody">
                            <img
                                src={gainer}
                                className="card-img-top"
                                alt="..."
                                style={{ height: "360.4px", objectFit: "fill" }}
                            />
                            <div className="card-body  body">
                                <h5 className="card-title text-white">Mass Gainer</h5>
                                <hr style={{ color: 'white' }} />
                                <Link to="/mass-gainer"><button type="button" className="btn btn-warning">Explore</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* icons and authentication */}
            <section className="mt-10 " >
                <hr />
                <div className=" py-4 bg-dark  " >
                    <div className="row text-center mx-5 my-6">

                        <div className="col-6 col-md-3">
                            <i className="bi bi-shield-check fs-1 mb-2"></i>
                            <p className="mb-0">100% Safe &<br />Secure Payments</p>
                        </div>

                        <div className="col-6 col-md-3">
                            <i className="bi bi-truck fs-1 mb-2"></i>
                            <p className="mb-0">Free Shipping</p>
                        </div>

                        <div className="col-6 col-md-3">
                            <i className="bi bi-coin fs-1 mb-2"></i>
                            <p className="mb-0">Shop with us &<br />earn GK Cash</p>
                        </div>

                        <div className="col-6 col-md-3">
                            <i className="bi bi-patch-check fs-1 mb-2"></i>
                            <p className="mb-0">Authenticity<br />Guaranteed</p>
                        </div>

                    </div>
                </div>
                <hr />

            </section>

            {/* footer */}
            <section >
                <footer className=" text-dark pt-5 pb-4">
                    <div className="container">
                        <div className="row">

                            {/* <!-- Logo --> */}
                            <div className="col-md-3 mb-4">
                                <h3 className="fw-bold">GymKart</h3>
                                <p className="small">SPORTS NUTRITION</p>
                            </div>

                            {/* <!-- Products --> */}
                            <div className="col-md-3 mb-4">
                                <h5 className="fw-bold">Products</h5>
                                <ul className="list-unstyled">
                                    <li>Protein Wafer Bar</li>
                                    <li>100% Performance Whey</li>
                                    <li>Fuel Whey</li>
                                    <li>Whey Protein</li>
                                    <li>Isorich Protein</li>
                                    <li>Creatine Monohydrate</li>
                                    <li>Nitro Iso Whey</li>
                                    <li>Alpha Whey</li>
                                    <li>Muscle Gainer</li>
                                    <li>Mass Gainer</li>
                                    <li>Accessories</li>
                                </ul>
                            </div>

                            {/* <!-- Information --> */}
                            <div className="col-md-3 mb-4">
                                <h5 className="fw-bold">Information</h5>
                                <ul className="list-unstyled">
                                    <li>About Us</li>
                                    <li>Why GymKart</li>
                                    <li>Privacy Policy</li>
                                    <li>Authenticate</li>
                                    <li>Terms of Use</li>
                                    <li>Media</li>
                                    <li>Return Policy</li>
                                    <li>Track Order</li>
                                </ul>
                            </div>

                            {/* <!-- Contact --> */}
                            <div className="col-md-3 mb-4">
                                <h5 className="fw-bold">Contact Us</h5>
                                <p><strong>Toll Free Number :</strong> 18001033</p>
                                <p><strong>GymKart Care Email :</strong><br /> customercare@parag.com</p>

                                <p><strong>Email & Call Timings</strong><br />
                                    Monday to Saturday (11:00 AM – 6:00 PM)</p>

                                <p><strong>WhatsApp Messaging :</strong><br />
                                    Monday to Friday (9:30 AM – 6:30 PM)</p>
                            </div>

                        </div>
                    </div>
                </footer>

            </section>

        </div>
    );
};

export default Home;
