import React, {useContext} from 'react';
import "../css/home.css"
import Card from "../components/Card.jsx";
import CTABtn from "../components/CTABtn.jsx";
import Video from "../components/Video.jsx";
import HeartIcon from "../assets/circle-heart-svgrepo-com.svg"
import Nav from "../components/Nav.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";
import CampNerdLogo from "../assets/CampNerd-Logo.svg";
import BVCDLogo from "../assets/BVCD-Logo.svg";
import UnternehmerTUMLogo from "../assets/UnternehmerTUM-Logo.svg";
import Mail from "../components/Mail.jsx";
import ArrowMail1 from "../assets/arrow-1.svg"
import ArrowMail2 from "../assets/arrow-2.svg"
import CookieBanner from "../components/CookieBanner.jsx";
import MailUserPicture from "../assets/user-svgrepo-com.svg"
import DemoMailSelector from "../components/DemoMailSelector.jsx";
import Popup from "../components/Popup.jsx";
import ContactForm from "../components/ContactForm.jsx";
import {AppContext} from "../AppContext.jsx";
import RegistrationGIF from "../assets/Register.gif"
import EmailGenerationGIF from "../assets/email-generation-GIF.gif"
import ReviewSendGIF from "../assets/review-and-send-GIF.gif";

export default function Home() {
    const { isContactFormOpen, handleCloseContactForm, isPopupOpen, handleOpenPopup, handleClosePopup }  = useContext(AppContext)

    const handleLinkClick = (event) => {
        event.preventDefault();

        const confirmation = window.confirm("Sind Sie sicher, dass Sie die Seite verlassen wollen?");
        if (confirmation) {
            window.open(event.currentTarget.href, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <React.Fragment>
            <CookieBanner></CookieBanner>
            <ContactForm isOpen={isContactFormOpen} onClose={handleCloseContactForm}></ContactForm>
            <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
            <section id="nav" className="no-margin-bottom">
                <Nav></Nav>
            </section>
            <section id="above-the-fold">
                <div className="container">
                    <h1>
                        <span className="gradient-text">Automate repetitive emails with AI.</span>
                    </h1>
                    <h2>
                        Save time and improve the performance of your customer service and sales teams.
                        mailflow connects to your inbox and automatically generates ready-to-send drafts before your first sip of morning coffee.
                        <br/><br/>Empty your inbox faster!
                    </h2>
                    <div className="btn-container">
                        <CTABtn></CTABtn>
                        <a href="#how-it-works" className="btn">Learn More</a>
                    </div>
                </div>
                <Video></Video>
            </section>
            <section id="partners">
                <div className="container">
                    <h3>Unsere Partner und Unterstützer</h3>
                    <a className="partner-company"
                       href="https://www.unternehmertum.de"
                       rel="noopener noreferrer"
                       target="_blank"
                       onClick={handleLinkClick}>
                        <img src={UnternehmerTUMLogo} alt="UnternehmerTUM Logo"></img>
                    </a>
                    <a className="partner-company"
                       href="https://www.campnerd.camp"
                       rel="noopener noreferrer"
                       target="_blank"
                       onClick={handleLinkClick}>
                        <img src={CampNerdLogo} alt="CampNerd Logo"></img>
                    </a>
                    <a className="partner-company"
                       href="https://www.bvcd.de"
                       rel="noopener noreferrer"
                       target="_blank"
                       onClick={handleLinkClick}>
                        <img src={BVCDLogo} alt="Bundesverband der Campingwirtschaft in Deutschland e.V. Logo"></img>
                    </a>
                </div>
            </section>
            <section id="how">
                <h3 className="section-heading gradient-text">Wie funktioniert MailFlow?</h3>
                <div className="mail-container-grid Nx8">
                    <Mail
                        id={"mail-customer"}
                        icon={MailUserPicture}
                        from={"kevin@flow-suite.de"}
                        to={"support@example.de"}
                        subject={"Sendungsverfolgung meiner Bestellung"}
                        text={[
                            "Guten Tag,",
                            <br key="1"></br>,
                            <br key="2"></br>,
                            "Ich habe vor Kurzem bei Ihnen eine Buchung aufgegeben und möchte gerne den Sendungsstatus " +
                            "meiner Bestellung überprüfen. Könnten Sie mir bitte die Sendungsverfolgungsnummer mitteilen?",
                            <br key="3"></br>,
                            <br key="4"></br>,
                            "Meine Bestellnummer lautet: B20250101-12345.",
                            <br key="5"></br>,
                            <br key="6"></br>,
                            "Liebe Grüße,",
                            <br key="5"></br>,
                            "Kevin Fischer"
                        ]}
                    ></Mail>
                    <div className="container">
                        <img id="arrow-mail-1" src={ArrowMail1} alt="Geschwungender Pfeil"/>
                        <h4>
                            <span className="gradient-text">MailFlow beantwortet E-Mails automatisch</span>, prüft
                            Verfügbarkeiten, Preise, Bestand, Kundendaten, Buchungsdaten sowie Bestelldaten und vieles
                            mehr, in Ihren Systemen und nutzt zusätzlichen Kontext (z.B. Website), um eine passende
                            Antwort zu erstellen.
                        </h4>
                        <img id="arrow-mail-2" src={ArrowMail2} alt="Geschwungender Pfeil"/>
                    </div>
                    <Mail
                        id={"mail-campground"}
                        picture={HeartIcon}
                        from={"support@example.de"}
                        to={"kevin@flow-suite.de"}
                        subject={"Re: Sendungsverfolgung meiner Bestellung"}
                        text={[
                            "Guten Tag Herr Fischer,",
                            <br key="1"></br>,
                            <br key="2"></br>,
                            "Vielen Dank für Ihre Anfrage. Ihre Bestellung mit der Bestellnummer B20250101-12345 wurde bearbeitet und heute morgen versandt. " +
                            "Hier ist die Sendungsverfolgungsnummer: DE123456789000.",
                            <br key="3"></br>,
                            <br key="4"></br>,
                            "Mit dieser Nummer können Sie den aktuellen Status Ihrer Sendung auf unserer Website oder beim Versanddienstleister überprüfen.",
                            <br key="5"></br>,
                            <br key="6"></br>,
                            "Falls Sie weitere Fragen haben, stehen wir Ihnen gerne zur Verfügung.",
                            <br key="7"></br>,
                            <br key="8"></br>,
                            "Mit freundlichen Grüßen,",
                            <br key="7"></br>,
                            "Flamur Maliqi - Customer Support"
                        ]}
                    ></Mail>
                </div>
                <div className="card-container-grid Nx1">
                    <Card
                        heading={"Integration mit Ihrem Posteingang"}
                        body={"MailFlow integriert sich nahtlos und in wenigen Minuten in nahezu jedes E-Mail-Postfach – " +
                            "ganz ohne Lernkurve oder technische Vorkenntnisse. Wir führen Sie durch die wenigen, " +
                            "einfachen Schritte, die erforderlich sind."}
                    ></Card>
                    <Card
                        heading={"Automatische Kategorisierung von Anfragen"}
                        body={"MailFlow sortiert E-Mails automatisch in von Ihnen definierte Kategorien wie zum Beispiel Retoure, " +
                            "Kundendaten, allgemeine Anfragen, Spam/Unwichtig oder E-Mails, die eine manuelle Bearbeitung " +
                            "erfordern. Dadurch schafft MailFlow Struktur und erleichtert die Arbeit Ihrer Mitarbeiter erheblich."}
                    ></Card>
                    <Card
                        heading={"Intelligente Antwortgenerierung durch KI"}
                        body={"MailFlow nutzt Informationen von Ihrer Website, Ihren Systemen und zusätzlichen Quellen " +
                            "und erstellt bis zu 10 personalisierte Antworten pro Minute, wodurch die Antwortzeiten " +
                            "verkürzt und die Zufriedenheit Ihrer Kunden gesteigert wird."}
                    ></Card>
                    <Card
                        heading={"Automatisch senden oder manuell prüfen"}
                        body={"MailFlow kann Antworten entweder automatisch versenden oder Entwürfe zur Überprüfung " +
                            "durch Ihre Mitarbeiter erstellen. So bleibt die Kontrolle über die Kommunikation " +
                            "gewährleistet, während ein Großteil der Anfragen effizient automatisiert wird."}
                    ></Card>
                    <Card
                        heading={"Datenänderung in Ihren Systemen"}
                        body={"MailFlow nutzt nicht nur die Informationen aus Ihren Systemen, um passende Antworten zu " +
                            "erstellen. Dank maßgeschneiderter Lösungen für Ihre Geschäftsprozesse kann MailFlow zudem " +
                            "Daten aus Anfragen, wie beispielsweise Adressänderungen, direkt in Ihr System übertragen."}
                    ></Card>
                </div>
            </section>
            <section id="how-it-works">
                <h3 className="section-heading">How It Works</h3>
                <h4>
                    mailflow is an AI email assistant that automates repetitive emails, helping customer service and sales teams save time and improve performance.
                </h4>
                <div className="card-container-grid Nx3">
                    <Card
                        heading={"1. Connect Your Inbox"}
                        image={RegistrationGIF}
                        body={"Get started by creating an account and connecting your email inbox."}
                    ></Card>
                    <Card
                        heading={"2. Email Generation"}
                        image={EmailGenerationGIF}
                        body={"Using context from your website, CRM, and other systems, mailflow automatically generates reply drafts to incoming emails."}
                    ></Card>
                    <Card
                        heading={"3. Review and Send"}
                        image={ReviewSendGIF}
                        body={"You stay in control by reviewing every draft before it’s sent."}
                    ></Card>
                </div>
            </section>
            {/*<section id="demo">
                <h3 className="section-heading">Try It Yourself</h3>
                <DemoMailSelector openPopup={handleOpenPopup}></DemoMailSelector>
            </section>*/}
            {/*
            <section id="pricing">
                <PricingCalculator></PricingCalculator>
            </section>
            */}
            <section id="FAQ">
                <h3 className="section-heading">Frequently Asked Questions</h3>
                <FAQ></FAQ>
            </section>
            <section className="no-margin-bottom">
                <Footer></Footer>
            </section>
        </React.Fragment>
    )
}