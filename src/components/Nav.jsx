import React from "react";
import flowSuiteLogo from "../assets/FlowSuite-Logo.svg";
import CTABtn from "./CTABtn.jsx";
import "../css/nav.css"

export default function Nav() {

    document.addEventListener("scroll", () => {
        const nav = document.getElementById("nav");
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > window.innerHeight * 0.1) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

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