import React from "react";
import "./ExplainerComponent.css"
import anfrage from "../../assets/anfrage_1.svg";
import antwort from "../../assets/antwort_1.svg";
import arrowQuestion from "../../assets/arrowQuestion.png";
import arrowAnswer from "../../assets/arrowAnswer.png"
import kunde from "../../assets/Kunde.png"
import anfrage_email from "../../assets/anfrage_email.svg"
import antwort_email from "../../assets/antwort_email.svg"
import antwort_email_1 from "../../assets/antwort_email_2.svg";
import arrow_down from "../../assets/arrow_down_1.svg";


import "./ExplainerComponent.css";


const ExplainerComponent = () => {
    return (
        <div className="explainer-main">
            <div className="explainer-component">
                <div className="div-block-explainer">
                    <div className="div-block-explainer-photo">
                        <div className="explainer-photo-text">
                            <p>Kunde stellt Anfrage</p>
                        </div>
                        <img src={anfrage_email} alt="Mail Icon"/>
                    </div>
                    <div className="div-block-explainer-arrow">
                        <img src={arrow_down} className="arrow-image"/>
                    </div>
                </div>

                <div className="div-block-explainer">
                    <div className="div-block-explainer-arrow">
                        <div className="image-container">
                        </div>
                    </div>
                    <div className="div-block-explainer-photo">
                        <div className="explainer-photo-text">
                            <p>MailFlow generiert Automatische Antwort</p>
                        </div>
                        <img src={antwort_email_1} alt="Mail Icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplainerComponent;
