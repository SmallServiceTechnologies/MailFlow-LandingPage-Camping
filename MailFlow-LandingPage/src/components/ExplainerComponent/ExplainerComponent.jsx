// eslint-disable-next-line no-unused-vars
import React from "react";
import anfrage from "../../assets/anfrage.svg";
import antwort from "../../assets/antwort.svg";
import antwort1 from "../../assets/antwort1.svg";
import "./ExplainerComponent.css";


const ExplainerComponent = () => {
    return (
        <div className="margin-center">
            <div className="div-block-explainer">
                <div className="div-block-explainer-photo">
                    <img src={anfrage} alt="Mail Icon"/>
                </div>
                <div className="div-block-explainer-text">
                    <h3>Title</h3>
                    <p>Description</p>
                </div>
            </div>

            <div className="div-block-explainer">
                <div className="div-block-explainer-text">
                    <h3>Title</h3>
                    <p>Description</p>
                </div>
                <div className="div-block-explainer-photo">
                    <img src={antwort1} alt="Mail Icon"/>
                </div>
            </div>
        </div>
    );
};

export default ExplainerComponent;
