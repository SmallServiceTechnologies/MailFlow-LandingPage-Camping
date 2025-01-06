import React from 'react';
import Accordion from "./Accordion.jsx";
import "../css/faq.css"

export default function FAQ() {
    return (
        <div className="FAQ-container">
                <h3 className="section-heading gradient-text">Frequently asked questions</h3>
                <Accordion
                    title="Wie viel kostet MailFlow?"
                    content="Wir möchten kleine und mittelgroße Unternehmen nicht benachteiligen. Daher richten sich die Kosten für MailFlow vor allem nach der Größe Ihres Unternehmens und Ihren individuellen Anforderungen. Buchen Sie ein kostenloses Beratungsgespräch, um mehr über eine Lösung zu erfahren, die optimal zu Ihrem Unternehmen passt.">
                </Accordion>
                <Accordion
                    title="Wie lange dauert die Einrichtung von MailFlow?"
                    content="MailFlow kann in der Regel innerhalb weniger Stunden eingerichtet und getestet werden. Wir kümmern uns um alle technischen Notwendigkeiten und leiten Sie durch die notwendigen Schritte. Buchen Sie sich ein Gespräch, damit wir Ihnen genau sagen können, wie schnell die Testversion bei Ihnen eingesetzt werden kann.">
                </Accordion>
                <Accordion
                    title="Lässt sich MailFlow mit jeder E-Mail bzw. jedem E-Mail-Programm integrieren?"
                    content="MailFlow integriert sich nahtlos in gängige Provider und Programme wie Gmail, Outlook, Thunderbird und viele mehr.">
                </Accordion>
                <Accordion
                    title="Was passiert, wenn die KI nicht die richtige Antwort findet?"
                    content="Anfragen, die eine manuelle Bearbeitung erfordern, werden entsprechend klassifiziert und in einen passenden Ordner verschoben, um es Ihrem Personal leichter zu machen diese zu bearbeiten.">
                </Accordion>
                <Accordion
                    title="Ist MailFlow sicher?"
                    content="Ja! Wir legen hohen Wert darauf so DSGVO-konform wie möglich zu agieren. Ihre E-Mail Daten und die Ihrer Kunden werden ausschließlich bei Ihnen im Postfach und bei keinem Dritten gespeichert.">
                </Accordion>
                <Accordion
                    title="Unterstützt MailFlow mehrere Sprachen?"
                    content="Ja, MailFlow kann Antworten in vielen verschiedenen Sprachen generieren und ist ideal für internationale Kunden.">
                </Accordion>
                <Accordion
                    title="Wie bewältigt MailFlow große Anfragenmengen?"
                    content="MailFlow bearbeitet bis zu 10 E-Mails pro Minute.">
                </Accordion>
                <Accordion
                    title="Kann die Software auf mein Unternehmen und Prozess angepasst werden?"
                    content="Ja, MailFlow kann individuell an Ihre Geschäftsprozesse angepasst werden. Vereinbaren Sie gerne einen Termin, damit wir gemeinsam eine Lösung für Ihren Prozess entwickeln.">
                </Accordion>
                <Accordion
                    title="Welche Arten von E-Mails kann MailFlow bearbeiten, und wie geht es mit komplexen Anfragen um?"
                    content="MailFlow kann E-Mails nahezu so gut wie ein Mensch beantworten, vorausgesetzt, es wird mit den richtigen Werkzeugen ausgestattet. Es bearbeitet FAQs sowie Anfragen zu Buchungen, Reservierungen, Bestellungen, Stornierungen und allgemeinen Themen. Dabei nutzt MailFlow Informationen von Ihrer Website oder aus bereitgestellten Dokumenten. Komplexe Anfragen werden automatisch klassifiziert und an Ihr Personal weitergeleitet, damit diese individuell bearbeitet werden können.">
                </Accordion>
                <Accordion
                    title="Wer ist das Team hinter MailFlow?"
                    content="Wir sind vier (Wirtschafts-)Informatik-Studenten der Technischen Universität München und der Technischen Hochschule Ingolstadt. Mit MailFlow möchten wir Unternehmen dabei helfen, ihre Kommunikation effizienter zu gestalten, Zeit und Kosten zu sparen und den Kundenservice zu entlasten.">
                </Accordion>
        </div>

    )
}