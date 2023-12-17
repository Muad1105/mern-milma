import React from "react";
import { styled } from "styled-components";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img
        className="child"
        src="./images/Charecter.png"
        st=""
        alt="charecter"
      />
      <img
        className="background"
        src="./images/Asset 1@2x 3.png"
        alt="background"
      />
      <img className="description" src="./images/quote.png" alt="" />
      <img className="logo" src="./images/Frame.png" alt="" />
    </div>
  );
};

export default Header;
