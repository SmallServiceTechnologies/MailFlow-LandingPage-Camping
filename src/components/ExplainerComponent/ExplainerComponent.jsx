// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ExplainerComponent.css"
import antwort_email_1 from "../../assets/antwort_email_2.svg";
import arrow_down from "../../assets/arrow_down_1.svg";
import anfrage_email_1 from "../../assets/anfrage_fixed.svg";


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
                        <img src={anfrage_email_1} alt="Mail Icon"/>
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
                            <p>MailFlow generiert automatische Antwort</p>
                        </div>
                        <img src={antwort_email_1} alt="Mail Icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplainerComponent;
