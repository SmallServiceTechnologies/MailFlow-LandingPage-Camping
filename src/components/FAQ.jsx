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
                    content="Absolutely. mailflow either sends auto-replies or saves drafts for your review, ensuring you stay in control before sending them.">
                </Accordion>
                <Accordion
                    title="Does mailflow support multiple languages?"
                    content="Yes, mailflow can generate responses in many different languages and is ideal for international customers.">
                </Accordion>
                <Accordion
                    title="Can mailflow be integrated with any email or email program?"
                    content="mailflow integrates seamlessly with popular providers and programs like Outlook, Gmail, Thunderbird, and many more.">
                </Accordion>
        </div>

    )
}