import React from 'react';
import "../css/calendlyBtn.css"

export default function CalendlyBtn() {
    const openCalendly = () => {
        window.Calendly.initPopupWidget({ url: 'https://calendly.com/flow-suite-info/30min' });
    };

    return (
        <button className="calendly-cta-btn" onClick={openCalendly}>
            MailFlow jetzt testen!
        </button>
    )
}