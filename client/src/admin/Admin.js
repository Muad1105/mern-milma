import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import ProductList from "./AdminProductList";

const Admin = () => {
  return (
    <div>
      <AddProduct />
      <ProductList />
    </div>
  );
};

export default Admin;
