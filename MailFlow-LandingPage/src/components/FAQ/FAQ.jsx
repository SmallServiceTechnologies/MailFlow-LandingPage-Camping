import React from 'react';
import FAQItem from '../FAQItem/FAQItem';
import './FAQ.css'; 

const FAQ = () => {
  const faqs = [
    {
      question: 'Was ist der Zweck dieser FAQ?',
      answer: 'Die FAQ dient dazu, häufig gestellte Fragen zu beantworten und den Besuchern zu helfen.'
    },
    {
      question: 'Wie kann ich eine Buchung vornehmen?',
      answer: 'Sie können eine Buchung über unser Online-Formular oder durch Kontaktaufnahme mit unserem Team vornehmen.'
    },
    {
      question: 'Was sind die Zahlungsoptionen?',
      answer: 'Wir akzeptieren Zahlungen per Kreditkarte, Banküberweisung und PayPal.'
    },
    {
      question: 'Kann ich meinen Aufenthalt stornieren?',
      answer: 'Ja, Stornierungen sind bis 48 Stunden vor der Ankunft möglich.'
    }
  ];

  return (
    <div className="faq-container">
      <h2 className="headline">Häufige Fragen (FAQ)</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
