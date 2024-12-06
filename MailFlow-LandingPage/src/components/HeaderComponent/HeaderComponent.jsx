import React from "react";
import "./HeaderComponent.css";
import flowLogo from "../../assets/flowLogo.svg";

export default function HeaderComponent() {
  console.log("Current working directory:", window.location.href); // Zeigt die aktuelle URL an

  return (
    <header className="header">
      <div className="header-logo">
        <img src={flowLogo} className="logo" alt="Logo" />
      </div>
        <input type="submit" value="Book a call" className="book-button" />
    </header>
  );
}
