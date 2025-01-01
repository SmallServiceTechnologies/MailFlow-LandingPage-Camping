import React, { useState } from 'react';
import "../css/accordion.css"
import LeftArrow from "../assets/arrow-circle-left-svgrepo-com.svg";
import DownArrow from "../assets/arrow-circle-down-svgrepo-com.svg";

export default function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h4>{title}</h4>
                <img
                    src={isOpen ? LeftArrow : DownArrow}
                    alt={isOpen ? "Collapse" : "Expand"}
                    className="accordion-arrow"
                />
                <hr></hr>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    )
}