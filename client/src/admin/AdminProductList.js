import React, { useState, useEffect } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import "./admin-product-list.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products");

        console.log(response);

        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
      alert("Product deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Error deleting product");
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list-container">
        {products.map((product) => {
          console.log(product);
          return (
            <div key={product._id} className="product">
              <div>
                <p>
                  <span>Name :</span>
                  <span>{product.name}</span>
                </p>
                <p>
                  <span>Flavor :</span>
                  <span>{product.flavor}</span>
                </p>
                <p>
                  <span>Price :</span>
                  <span>{product.price}</span>
                </p>
                <p>
                  <span>Quantity :</span>
                  <span>{product.quantity}</span>
                </p>
                <img
                  src={`data:image/png;base64,${product.image}`}
                  className="product-image"
                  alt="image"
                />
              </div>
              <button onClick={() => handleDelete(product._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
