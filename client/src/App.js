import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import "./App.css";
import ServiceDescription from "./components/ServiceDescription";
import ProductsList from "./components/Client";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AddProduct from "./admin/AddProduct";
import DeleteProduct from "./admin/DeleteProduct";
import Navigation from "./components/Navigation";
import Admin from "./admin/Admin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Navigation />} />
        <Route path="/user" element={<ProductsList />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
