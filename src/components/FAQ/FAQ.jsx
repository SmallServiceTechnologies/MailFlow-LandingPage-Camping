// eslint-disable-next-line no-unused-vars
import React from 'react';
import FAQItem from '../FAQItem/FAQItem';
import './FAQ.css'; 

const FAQ = () => {
  const faqs = [
    {
      question: 'Was ist MailFlow?',
      answer: 'MailFlow ist eine KI-gestützte Lösung, die E-Mails automatisch analysiert und beantwortet. Die Software nutzt Daten aus Ihrer Website und Ihrem Buchungssystem, um personalisierte und präzise Antworten zu generieren.'
    },
    {
      question: 'Wie funktioniert die automatische E-Mail-Beantwortung?',
      answer: 'Unsere KI analysiert eingehende E-Mails, extrahiert den Kontext und greift auf Informationen von Ihrer Website sowie über Schnittstellen zu Ihrem Buchungssystem zu. Dadurch kann sie auf Kundenanfragen schnell und zuverlässig reagieren.'
    },
    {
      question: 'Welche Arten von E-Mails kann die Software beantworten, und wie geht sie mit komplexen Anfragen um?',
      answer: 'Unsere Software kann sowohl häufig gestellte Fragen (z. B. Öffnungszeiten, Verfügbarkeiten, Stornierungsbedingungen) als auch komplexere Anfragen analysieren und auf Basis der verfügbaren Daten kontextbezogene, personalisierte Antworten erstellen. Sollte eine Anfrage eine manuelle Bearbeitung erfordern, wird die E-Mail automatisch zur weiteren Bearbeitung weitergeleitet.'
    },
    {
      question: 'Welche Vorteile bietet die automatische E-Mail-Beantwortung und wie verbessert sie den Kundenservice?',
      answer: 'Mit MailFlow sparen Sie Zeit, steigern die Effizienz und verbessern die Kundenzufriedenheit durch schnelle und präzise Antworten. Die KI bearbeitet Anfragen rund um die Uhr und sorgt dafür, dass Ihr Team sich auf wichtigere Aufgaben konzentrieren kann, während die Anfragen schnell und effizient beantwortet werden.'
    },
    {
      question: 'Kann die Software angepasst werden?',
      answer: 'Ja, die Software kann individuell an Ihre Anforderungen angepasst werden, um Ihre spezifischen Geschäftsprozesse zu unterstützen.'
    },
    {
      question: 'Wer sind Wir?',
      answer: 'Wir sind vier Informatikstudenten der Technischen Universität München. Mit unserer Software möchten wir Unternehmen dabei unterstützen, ihre Kommunikation zu optimieren und den Kundenservice zu verbessern.'
         },
  ];

  return (
    <div className="faq-container">
      <div className="faq-title">
        <p>Häufig gestellte Fragen</p>
      </div>
      <div className="faq-elements">
        {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
