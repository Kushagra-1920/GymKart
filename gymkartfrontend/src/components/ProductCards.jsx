import React from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axiosconfig";
import "../style/ProductCards.css"


const ProductCards = ({ product, isLoggedIn }) => {
  const navigate = useNavigate();

  const addToCart = async () => {
    if (!isLoggedIn) {
      alert("Please login before adding items to cart.");
      navigate("/login");
      return;
    }

    try {
      const response = await instance.post("/cart/add", {
        productId: product.id,
        name: product.name,
        price: product.price,
        imageBase64: product.imageBase64,
        quantity: 1
      });

      console.log(response.data);
      alert("Item added to cart");
    } catch (error) {
      console.error("Error:", error);
      if (error.response?.status === 401) {
        alert("Please login before adding items to cart.");
        navigate("/login");
      } else {
        alert("Failed to add item");
      }
    }
  };

  return (
    <div className="col-md-3 cardStyle"style={{hover:'transform: translateY(-8px),box-shadow: 0 10px 25px rgba(0,0,0,0.4)'}}>
      <div className="card mb-4 ">
        <img
          src={`data:image/jpeg;base64,${product.imageBase64}`}
          className="card-img-top img-center m-auto"
          alt={product.name}
          style={{ height: "200px", width:'200px' }}
        />

        <div className="card-body text-center text-white">
          <h5>{product.name}</h5>
          <hr />
          <p>{product.brand}</p>
          <h6>₹ {product.price}</h6>

          <button className="btn btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
