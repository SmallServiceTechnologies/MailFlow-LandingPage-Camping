import React from 'react';
import Accordion from "./Accordion.jsx";
import "../css/faq.css"

export default function FAQ() {
    return (
        <div className="FAQ-container">
                <Accordion
                    title="Is mailflow GDPR compliant?"
                    content="Yes, mailflow is fully compliant with GDPR regulations, ensuring data protection and privacy for customers in the EU. All servers are securely hosted within the EU, providing localized support and full regulatory compliance.">
                </Accordion>
                <Accordion
                    title="How does pricing work?"
                    content="We offer custom pricing based on your team's needs and the specific problems we’re solving. Get in touch for a tailored quote.">
                </Accordion>
                <Accordion
                    title="Will I still have control over the emails?"
                    content="Absolutely. mailflow drafts replies, but you review and send every email.">
                </Accordion>
        </div>

    )
}