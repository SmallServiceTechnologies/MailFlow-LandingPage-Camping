import React from 'react';
import Accordion from "./Accordion.jsx";
import "../css/faq.css"

export default function FAQ() {
    return (
        <div className="FAQ-container">
            <h3 className="section-heading gradient-text">Frequently asked questions</h3>

            <Accordion
                title="What kind of emails can mailflow handle?"
                content="Mailflow is ideal for handling any kind of customer service or sales related emails like order confirmations, shipping inquiries, FAQs, cancellations, and appointment scheduling. It can also assist with more complex cases by using integrations into your systems."
            />

            <Accordion
                title="How fast does mailflow respond to emails?"
                content="Mailflow generates responses in seconds significantly reducing customer wait times and increasing team efficiency."
            />

            <Accordion
                title="Is any training or setup required?"
                content="No technical skills are needed. Our team guides you through a simple onboarding process. Mailflow works out of the box using your publicly available data from your website. Using data sources like a CRM or other third party systems requires a custom integraion. Book a call to talk about your specific requirements."
            />

            <Accordion
                title="Is there a free trial available?"
                content="Yes, we offer a risk-free trial so you can test mailflow in your real-world workflow and evaluate its impact before committing."
            />

            <Accordion
                title="Can mailflow work with custom internal systems?"
                content="Yes. We support integrations with CRMs, ERPs, and proprietary systems through APIs or custom connectors tailored to your setup."
            />

            <Accordion
                title="How secure is mailflow?"
                content="Security is our top priority. All data is encrypted in transit and at rest. We comply with GDPR standards."
            />

            <Accordion
                title="Who is mailflow designed for?"
                content="Mailflow is designed for customer support and sales teams across industries who handle high volumes of inbound emails."
            />

            <Accordion
                title="Can mailflow improve response time SLAs?"
                content="Yes. By automating repetitive tasks and suggesting accurate replies instantly, mailflow helps your team meet and exceed email response SLAs consistently."
            />

            <Accordion
                title="How does mailflow handle multiple languages?"
                content="Mailflow supports English and German communication at the moment. If you require other languages we are happy to extend the support."
            />

            <Accordion
                title="Does mailflow offer a dashboard with analytics, configuration and knowledge base management?"
                content="Yes, mailflow includes a powerful dashboard where you can track key performance metrics like processing time, response rates, categories and customer satisfaction. You can also manage your knowledge base and settings directly from the dashboard."
            />


        </div>

    )
}