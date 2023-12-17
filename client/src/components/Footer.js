import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src="./images/Frame.png" alt="frame" />
      <div className="social-media-section">
        <div className="social-media">
          <p>Follow us</p>
          <FacebookIcon className="facebook-icon" />
          <LinkedInIcon className="linkedin-icon" />
          <YouTubeIcon className="youtube-icon" />
          <InstagramIcon className="instagram-icon" />
        </div>
        <p className="all-rights">
          <CopyrightIcon style={{ width: "15px" }} />
          <p>Milmaicecream. All rights Reserved.</p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
