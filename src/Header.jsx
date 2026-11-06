import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="title">
        <h1>Selfless Humanitarian Service</h1>
        <h2>SECP-Registered National NGO in Pakistan</h2>
      </div>
    </header>
  );
}

export default Header;
