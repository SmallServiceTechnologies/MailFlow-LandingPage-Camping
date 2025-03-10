import React from "react";
import "../css/popup.css";
import CTABtn from "./CTABtn.jsx";

export default function Popup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={`overlay ${isOpen ? "active" : ""}`}>
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>❌</button>

                <h3 className="gradient-text"><strong>Kostenlos: MailFlow für Ihren Campingplatz!</strong></h3>

                <p>
                    Probieren Sie MailFlow <strong>kostenlos</strong> aus und integrieren Sie es mühelos in Ihren Campingplatz-Alltag.
                </p>

                <p>
                    <strong>Kein Konfigurationsaufwand!</strong> MailFlow passt sich problemlos Ihrem Postfach und
                    System an, besonders wenn Sie <strong>CampNerd</strong> nutzen. Andernfalls finden wir eine Lösung!
                </p>

                <p><strong>Jetzt testen!</strong> Sichern Sie sich Ihre kostenlose Testphase und entdecken Sie die
                    Vorteile von MailFlow!
                </p>

                <CTABtn closePopup={onClose}/>
            </div>
        </div>
    );
}
