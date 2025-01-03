import React from "react";
import flowSuiteLogo from "../assets/FlowSuite-Logo.svg";
import CTABtn from "./CTABtn.jsx";
import "../css/nav.css"

export default function Nav() {
    return (
        <div className="nav-container">
            <a href="/" className="logo">
                <img src={flowSuiteLogo}
                     alt="FlowSutie Logo, ein in einem Strich gezogenes kleines f mit buntem Farbverlauf."/>
            </a>
            <CTABtn></CTABtn>
        </div>
    )
}