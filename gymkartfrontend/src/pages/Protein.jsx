import React, { useEffect, useState } from "react";
import axios from "axios";
import banner1 from "../assets/bannerProtein.jpg";
import ProductCard from "../components/ProductCards.jsx";
import '../index.css'

const Protein = ({ isLoggedIn }) => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    axios
      .get("http://localhost:8080/products/category/PROTEIN")
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
        <h1>Whey Protein</h1>
        <br />

        <p>
          Whey protein powder is a popular and effective supplement for those
          looking to support muscle growth, recovery, and overall fitness. It is
          derived from milk and is rich in essential amino acids, making it an
          excellent choice for protein synthesis. The best whey protein for
          muscle gain often includes whey protein isolate or hydrolyzed whey
          protein, which are processed to provide higher protein content and
          faster absorption. For beginners, whey protein concentrate is a great
          option, offering a balance of quality and affordability. These
          supplements can help enhance workout performance, promote muscle
          repair, and support overall health when used as part of a balanced diet
          and regular exercise routine.
        </p>
        <hr />

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
