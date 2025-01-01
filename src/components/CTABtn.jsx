import React from 'react';
import "../css/calendlyBtn.css"

export default function CTABtn() {
    const openCalendly = () => {
        window.Calendly.initPopupWidget({ url: 'https://calendly.com/flow-suite-info/30min' });
    };

    return (
        <button className="cta-btn" onClick={openCalendly}>
            Jetzt kostenlose Testphase vereinbaren!
        </button>
    )
}