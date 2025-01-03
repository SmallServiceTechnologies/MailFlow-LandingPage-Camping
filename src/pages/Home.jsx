import React from 'react';
import "../css/home.css"
import Card from "../components/Card.jsx";
import CTABtn from "../components/CTABtn.jsx";
import Video from "../components/Video.jsx";
import ClockIcon from "../assets/clock-check-svgrepo-com.svg"
import HeartIcon from "../assets/circle-heart-svgrepo-com.svg"
import DollarIcon from "../assets/dollar-circle-list-svgrepo-com.svg"
import Nav from "../components/Nav.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";
import CampNerdLogo from "../assets/CampNerd-Logo.svg";
import BVCDLogo from "../assets/BVCD-Logo.svg";
import UnternehmerTUMLogo from "../assets/UnternehmerTUM-Logo.svg";
import Mail from "../components/Mail.jsx";
import ArrowMail1 from "../assets/arrow-mail-1.svg"
import ArrowMail2 from "../assets/arrow-mail-2.svg"
import ArrowVideo from "../assets/arrow-video.svg";
import CookieBanner from "../components/CookieBanner.jsx";
import MailUserPicture from "../assets/user-svgrepo-com.svg"

export default function Home() {
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
            <section id="nav" className="no-margin-bottom">
                <Nav></Nav>
            </section>
            <section id="above-the-fold">
                <div></div>
                <img id="arrow-video" src={ArrowVideo} alt="Gerader Pfeil der auf das Video zeigt"/>
                <div className="container">
                    <h1>
                        <span className="gradient-text">Automatisieren Sie das Postfach Ihres Unternehmens mit MailFlow</span> –
                        Schnelle Antworten, minimaler manueller Aufwand!
                    </h1>
                    <h2>
                        Sparen Sie Zeit, indem Sie wiederkehrende E-Mail-Anfragen automatisieren. MailFlow integriert
                        sich nahtlos in Ihr E-Mail Postfach und verwaltet die Kundenkommunikation schnell, höflich und
                        effizient.
                    </h2>
                    <div className="btn-container">
                        <CTABtn></CTABtn>
                        <a href="#how" className="btn">Wie funktioniert MailFlow?</a>
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
                        picture={MailUserPicture}
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
                            "Mit dieser Nummer können Sie den aktuellen Status Ihrer Sendung auf unserer Webseite oder beim Versanddienstleister überprüfen.",
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
                        body={"MailFlow sortiert E-Mails automatisch in von Ihnen definiere Kategorien wie zum Beispiel Retoure, " +
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
                        body={"MailFlow kann nicht nur Informationen aus Ihren Systemen nutzen, um Antworten zu erstellen. " +
                            "Durch individuelle Lösungen für Ihren Geschäftsprozess kann MailFlow Daten aus Anfragen, wie " +
                            "beispielsweise eine Adressänderung, direkt in Ihr System übertragen."}
                    ></Card>
                </div>
            </section>
            <section id="why">
                <h3 className="section-heading gradient-text">Stellen Sie sich vor ...</h3>
                <h4>
                    ... Sie hätten einen Mitarbeiter, der rund um die Uhr arbeitet, alle Kundenanfragen bearbeitet,
                    Ihre Systeme in Echtzeit prüft und nie einen Tag frei nimmt - wie viel wäre
                    Ihnen das wert?
                </h4>
                <div className="card-container-grid Nx3">
                    <Card
                        image={ClockIcon}
                        body={"Bearbeitet bis zu 10 E-Mails pro Minute – 24 Stunden am Tag, 365 Tage im Jahr."}
                    ></Card>
                    <Card
                        image={HeartIcon}
                        body={"Schafft Zeit und Fokus für wichtige Aufgaben und sorgt für ein besseres Kundenerlebnis."}
                    ></Card>
                    <Card
                        image={DollarIcon}
                        body={"Reduziert Personalkosten, minimiert Fluktuation und erleichtert dadurch die Personalplanung."}
                    ></Card>
                </div>
            </section>
            {/*
            <section id="pricing">
                <PricingCalculator></PricingCalculator>
            </section>
            */}
            <section id="FAQ">
                <FAQ></FAQ>
            </section>
            <section className="no-margin-bottom">
                <Footer></Footer>
            </section>
        </React.Fragment>
    )
}