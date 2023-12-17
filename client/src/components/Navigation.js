import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>Ice Cream Website</h1>
      <nav>
        <ul>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>

      <hr />
    </div>
  );
};

export default Navigation;
