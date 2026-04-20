import React, { useEffect, useState } from "react";
import axios from "axios";
import banner1 from "../assets/bannerProtein.jpg";
import ProductCard from "../components/ProductCards.jsx";


const MassGainer = ({ isLoggedIn }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://gymkart-backend-20.onrender.com/products/category/MASS_GAINER")
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
        <h1>Mass and Weight Gainers</h1>
        <p className=''>
          Mass gainers are a type of weight gain supplement that helps you gain muscle mass, bulk up and build an overall healthier body. These products are formulated to increase your overall calorie intake that help you meet your weight gain goals, in a shorter time.        </p>

        <div className="row mt-4 ">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} isLoggedIn={isLoggedIn} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MassGainer;
