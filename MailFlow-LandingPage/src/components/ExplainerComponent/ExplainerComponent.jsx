// eslint-disable-next-line no-unused-vars
import React from "react";
import anfrage from "../../assets/anfrage_1.svg";
import antwort from "../../assets/antwort_1.svg";
import "./ExplainerComponent.css";


const ExplainerComponent = () => {
    return (
        <div>
            <div className="div-block-explainer">
                <div className="div-block-explainer-photo">
                    <img src={anfrage} alt="Mail Icon"/>
                </div>
                <div className="div-block-explainer-text">
                    <h3>Wiederkehrende Anfragen von Gästen</h3>
                    <p>E-Mail-Anfragen von Gästen sind oft repetitiv, meist Buchungsanfragen oder Fragen, deren Antworten auf Ihrer Website stehen.</p>
                </div>
            </div>

            <div className="div-block-explainer">
                <div className="div-block-explainer-text">
                    <h3>Title</h3>
                    <p>Description</p>
                </div>
                <div className="div-block-explainer-photo">
                    <img src={antwort} alt="Mail Icon"/>
                </div>
            </div>
        </div>
    );
};

export default ExplainerComponent;
