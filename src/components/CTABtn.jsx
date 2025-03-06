import React from 'react';
import "../css/calendlyBtn.css"

export default function CTABtn() {
    const openCalendly = () => {
        Calendly.initPopupWidget({
            url: 'https://calendly.com/flow-suite-info/30min'
        });
        return false;
    };

    return (
        <button className="cta-btn" onClick={openCalendly}>
            <span className="gradient-text">Termin reservieren!</span>
        </button>
    )
}