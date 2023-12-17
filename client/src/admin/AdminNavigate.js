import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";

const AdminNavigate = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AdminNavigate;
