import React from "react";
import "./HeaderComponent.css";
import flowLogo from "../../assets/flowLogo.svg";

export default function HeaderComponent() {

  return (
    <header className="header">
      <div className="header-logo">
        <img src={flowLogo} className="logo" alt="Logo" />
        <span className="logo-text">MailFlow</span> 
      </div>
      <input type="submit" value="Buche einen Termin" className="book-button" />
    </header>
  );
}
