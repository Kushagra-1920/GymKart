import React, { useEffect, useState } from "react";
import axios from "axios";
import banner1 from "../assets/bannerProtein.jpg";
import ProductCard from "../components/ProductCards.jsx";


const PreWorkout = ({ isLoggedIn }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products/category/PRE_WORKOUT")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="body">
      <div className="card text-bg-dark">
        <img src={banner1} className="card-img" alt="banner" />
      </div>

      <div className="container mt-4 py-2">
        <h1>Pre Workout</h1>
        <p className=''>
          Pre workout supplement is a dietary supplement that is taken before workout to improve energy, strength, endurance and enhance focus, which in all enhances the workout performance. This includes Caffeine, Beta-alanine, Creatine, Citrulline Malate & Electrolytes. A combination of all these also work best.
        </p>

        <div className="row mt-4 ">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} isLoggedIn={isLoggedIn} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreWorkout;
