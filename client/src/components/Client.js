import React from "react";
import Header from "./Header";
import ServiceDescription from "./ServiceDescription";
import Products from "./Products";
import Footer from "./Footer";

const ProductsList = () => {
  return (
    <div className="App">
      <Header />
      <ServiceDescription />
      <Products />
      <Footer />
    </div>
  );
};

export default ProductsList;
