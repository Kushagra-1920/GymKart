import React, { useState } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";

const AddSupplements = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  // Image compression
  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(file, options);
    setImage(compressedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const res = await axios.post(
        "https://gymkart-backend-20.onrender.com/products/add",
        formData
      );

      console.log(res.data);
      alert("Product added successfully 🔥");

      // Reset form
      setName("");
      setBrand("");
      setPrice("");
      setDescription("");
      setStock("");
      setCategory("");
      setImage(null);

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Failed to add product ❌");
    }
  };

  return (
    <div className="container text-center mb-4">
      <h1 className="m-2">Add Product</h1>
      <hr />

      <form className="container" onSubmit={handleSubmit} style={{width:"50%"}}>

        {/* Name */}
        <div className="mb-3 " >
          <label className="form-label"><strong>Name</strong></label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Brand */}
        <div className="mb-3">
          <label className="form-label"><strong>Brand</strong></label>
          <input
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label"><strong>Category</strong></label>
          <select
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="PROTEIN">Protein</option>
            <option value="MASS_GAINER">Mass Gainer</option>
            <option value="PRE_WORKOUT">Pre Workout</option>
            <option value="CREATINE">Creatine</option>
            <option value="BCAA">BCAA</option>
          </select>
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label"><strong>Description</strong></label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="form-label"><strong>Price</strong></label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Stock */}
        <div className="mb-3">
          <label className="form-label"><strong>Stock</strong></label>
          <input
            type="number"
            className="form-control"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>

        {/* Image */}
        <div className="mb-3">
          <label className="form-label"><strong>Image</strong></label>
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="  ">
          <button type="submit" className="btn btn-success px-4 mx-4">
            Submit
          </button>
        
          <button className="btn btn-warning px-4" >
            Reset Filter
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddSupplements;