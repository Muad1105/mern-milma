// src/Admin/AddProduct.js
import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    flavor: "",
    image: null,
    price: 0,
    quantity: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiURL = "http://localhost:4000/api/products";

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("image", product.image);
    formData.append("flavor", product.flavor);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    console.log(product, formData.entries(), "typeof", product.image);
    try {
      await axios.post(apiURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Product added successfully");
      product.name("");
      product.image(null);
      product.flavor("");
      product.price(0);
      product.quantity("");
    } catch (error) {
      console.error(error);
      alert("Error adding product");
    }
  };

  const handleChange = (e) => {
    console.log(e.target);
    const name = e.target.name;
    if (name !== "image") {
      console.log(name, e.target.value);
      setProduct((prev) => {
        return { ...prev, [name]: e.target.value };
      });
    } else
      setProduct((prev) => {
        console.log(name);

        return { ...prev, [name]: e.target.files[0] };
      });
  };
  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <select
          type="text"
          name="flavor"
          placeholder="Flavor"
          value={product.flavor}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="vanilla">Vanilla</option>
          <option value="pista">Pista</option>
          <option value="chocolate">Chocolate</option>
        </select>
        <input
          type="file"
          placeholder="Image"
          name="image"
          onChange={handleChange}
        />
        <input
          type="text"
          name="quantity"
          value={product.quantity}
          placeholder="Quantity"
          onChange={handleChange}
        />

        {/* Add other input fields for flavor, image, price, quantity, section */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
