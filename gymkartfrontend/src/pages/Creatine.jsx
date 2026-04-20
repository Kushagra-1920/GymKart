import React, { useEffect, useState } from "react";
import axios from "axios";
import banner2 from "../assets/creatineBanner.png";
import ProductCard from "../components/ProductCards.jsx";


const Protein = ({ isLoggedIn }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products/category/CREATINE")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="body">
      <div className="card text-bg-dark">
        <img src={banner2} className="card-img" alt="banner" />
      </div>

      <div className="container mt-4 py-2">
              <h1>Creatine</h1>
            <p className=''>
                Creatine is a powerful, naturally occurring compound proven to enhance strength, power, and muscle growth. Fuel your workouts, accelerate recovery, and unlock new levels of athletic potential. Whether you're a serious athlete or looking to gain an edge, our high-quality creatine supplements are engineered to help you achieve your fitness goals faster.
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

export default Protein;
