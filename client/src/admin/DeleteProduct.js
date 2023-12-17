// src/Admin/DeleteProduct.js
import React from "react";
import axios from "axios";

const DeleteProduct = ({ productId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/products/${productId}`);
      // Optionally, you can fetch and update the product list after deleting
      // Example: fetchProducts();
      onDelete(); // Notify the parent component about the deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteProduct;
