import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>Ice Cream Website, Admin and user links</h1>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/user">Navigate to User</Link>

        <Link to="/admin">Navigate To Admin</Link>
      </nav>

      <hr />
    </div>
  );
};

export default Navigation;
