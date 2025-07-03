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
                <img src={mailflowlogo}/>
            </a>
            <div className="container">
                <a href="mailto:demo@mail-flow.com?subject=Question%20about%20mailflow&body=Ask%20something%20about%20mailflow" className="btn secondary-btn">Demo</a>
                <a href="https://dashboard.mail-flow.com" className="btn secondary-btn">Log In</a>
                <CTABtn></CTABtn>
            </div>
        </div>
    )
}