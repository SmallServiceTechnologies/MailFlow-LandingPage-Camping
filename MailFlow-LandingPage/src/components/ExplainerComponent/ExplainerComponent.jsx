import React from "react";
import "./ExplainerComponent.css"
import anfrage from "../../assets/anfrage_1.svg";
import antwort from "../../assets/antwort_1.svg";
import arrowQuestion from "../../assets/arrowQuestion.png";
import arrowAnswer from "../../assets/arrowAnswer.png"
import kunde from "../../assets/Kunde.png"



import "./ExplainerComponent.css";


const ExplainerComponent = () => {
    return (
        <div className="explainer-component">
            <div className="div-block-explainer">
                <div className="div-block-explainer-photo">
                    <img src={anfrage} alt="Mail Icon"/>
                </div>
                <div className="div-block-explainer-text">
                    <h3>Wiederkehrende Anfragen von Gästen</h3>
                    <p>E-Mail-Anfragen von Gästen sind oft repetitiv, meist Buchungsanfragen oder Fragen, deren Antworten auf Ihrer Website stehen.</p>
                    <img src={arrowQuestion} alt="Arrow Icon" className="arrow-image" />
                </div>
            </div>

            <div className="div-block-explainer">
                <div className="div-block-explainer-text">
                    <div className="image-container">
                    <img src={kunde} alt="Arrow Icon" className="arrow-image first-item" />
                    <img src={arrowAnswer} alt="Arrow Icon" className="arrow-image second-item" />
                    </div>
                </div>
                <div className="div-block-explainer-photo">
                    <img src={antwort} alt="Mail Icon"/>
                </div>
            </div>
        </div>
    );
};

export default ExplainerComponent;
