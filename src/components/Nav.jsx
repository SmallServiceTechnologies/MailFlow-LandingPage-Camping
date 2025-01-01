import flowSuiteLogo from "../assets/FlowSuite-Logo.svg";
import CTABtn from "./CTABtn.jsx";
import "../css/nav.css"
import CookieBanner from "./CookieBanner.jsx";
import React from "react";

export default function Nav() {
    return (
        <div className="nav-container">
            <a href="/">
                <img src={flowSuiteLogo} className="logo" alt="FlowSutie Logo, ein in einem Strich gezogenes kleines f mit buntem Farbverlauf."/>
            </a>
            <CTABtn></CTABtn>
            <CookieBanner></CookieBanner>
        </div>
    )
}