import React from 'react';
import Arrow from "../assets/arrow-1.svg"

export default function Step({id, title, children, isActive, showArrow }) {
    return (
        <div id={id} className={`step ${isActive ? "active" : ""}`}>
            {title &&
                <div className="container">
                    <h5>{title}</h5>
                    {showArrow && <img className="step-arrow" src={Arrow} alt="Arrow icon" />}
                </div>
            }
            {children}
        </div>
    );
}
