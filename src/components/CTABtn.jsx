import React, {useContext} from 'react';
import "../css/calendlyBtn.css"
import {AppContext} from "../AppContext.jsx";

export default function CTABtn({closePopup}) {
    const { handleOpenContactForm }  = useContext(AppContext)

    const openCalendly = () => {
        Calendly.initPopupWidget({
            url: 'https://calendly.com/flow-suite-info/30min'
        });
        closePopup();
        return false;
    };

    return (
        <button className="cta-btn" onClick={handleOpenContactForm}>
            <span className="gradient-text">Termin reservieren!</span>
        </button>
    )
}