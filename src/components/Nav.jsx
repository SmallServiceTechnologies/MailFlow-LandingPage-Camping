import React from "react";
import CTABtn from "./CTABtn.jsx";
import "../css/nav.css"
import mailflowlogo from "../assets/mailflow-logo-color.svg";

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
                <img src={mailflowlogo}
                     alt="FlowSutie Logo, ein in einem Strich gezogenes kleines f mit buntem Farbverlauf."/>
            </a>
            <CTABtn></CTABtn>
        </div>
    )
}