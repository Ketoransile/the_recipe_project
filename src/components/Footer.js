import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} My Recipe Website. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
