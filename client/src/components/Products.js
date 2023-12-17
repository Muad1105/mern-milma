import React, { useEffect, useState } from "react";
import "./products.css";
import axios from "axios";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [vanillaIceCreamData, setVanillaIceCreamData] = useState([]);
  const [chocolateIceCreamData, setChocolateIceCreamData] = useState([]);
  const [pistaIceCreamData, setPistaIceCreamData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products");
        const productData = response.data;
        const chocolateICData = productData.filter(
          (e, i) => e.flavor === "chocolate"
        );
        const vanillaICData = productData.filter(
          (e, i) => e.flavor === "vanilla"
        );
        const pistaICData = productData.filter((e, i) => e.flavor === "pista");
        console.log(response.data, "chocolateICData", chocolateICData);
        setProducts(response.data);
        setChocolateIceCreamData(chocolateICData);
        setVanillaIceCreamData(vanillaICData);
        setPistaIceCreamData(pistaICData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(
      products,
      "vanillaIceCreamData",
      vanillaIceCreamData,
      "pistaIceCreamData",
      pistaIceCreamData,
      "chocolateIceCreamData",
      chocolateIceCreamData
    );
  }, [products, vanillaIceCreamData, chocolateIceCreamData, pistaIceCreamData]);

  return (
    <div className="products-section">
      <div className="title">Products</div>
      <div className="display-products-section">
        <div className="unique-flavor-products">
          <p className="chocolate heading">Chocolate</p>
          <div className="induvidual-products-section">
            {chocolateIceCreamData.map((e, i) => {
              return (
                <div
                  className="product-details product-details-chocolate"
                  key={e._id}
                >
                  <img src={`data:image/png;base64,${e.image}`} alt="" />
                  <div className="product-description">
                    <div className="item">
                      <p>{e.name}</p>
                      <p>{e.quantity}</p>
                    </div>
                    <div className="price">
                      <CurrencyRupeeIcon style={{ fontSize: "14px" }} />
                      <p>{e.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="unique-flavor-products-vanilla">
          <p className="vanilla heading">Vanilla</p>
          <div className="induvidual-products-section">
            {vanillaIceCreamData.map((e, i) => {
              return (
                <div
                  className="product-details product-details-vanilla"
                  key={e._id}
                >
                  <img src={`data:image/png;base64,${e.image}`} alt="" />
                  <div className="product-description">
                    <div className="item">
                      <p>{e.name}</p>
                      <p>{e.quantity}</p>
                    </div>
                    <div className="price">
                      <CurrencyRupeeIcon style={{ fontSize: "14px" }} />
                      <p>{e.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="unique-flavor-products">
          <p className="pista heading">Pista</p>
          <div className="induvidual-products-section">
            {pistaIceCreamData.map((e, i) => {
              console.log(e);
              return (
                <div
                  className="product-details product-details-pista"
                  key={e._id}
                >
                  <img src={`data:image/png;base64,${e.image}`} alt="" />
                  <div className="product-description">
                    <div className="item">
                      <p>{e.name}</p>
                      <p>{e.quantity}</p>
                    </div>
                    <div className="price">
                      <CurrencyRupeeIcon style={{ fontSize: "14px" }} />
                      <p>{e.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
