import React from "react";
import "./HeaderComponent.css";
import flowLogo from "../../assets/flowLogo.svg";

export default function HeaderComponent({ openCalendly }) {

  const handleClick = () => {
    openCalendly();
  };

  return (
    <header className="header">
        <div className="inner-header">
            <div className="header-logo">
                <img src={flowLogo} className="logo" alt="Logo"/>
            </div>
            <input type="submit" value="Termin Vereinbaren" className="book-button" onClick={handleClick}/>
        </div>
    </header>
  );
}
