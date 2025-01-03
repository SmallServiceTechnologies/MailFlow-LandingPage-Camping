import React from 'react';
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
import PricingCalculator from "../components/PricingCalculator.jsx";
import Mail from "../components/Mail.jsx";
import ArrowMail from "../assets/arrow-mail.svg"
import "../css/home.css"
import ArrowVideo from "../assets/arrow-video.png";
import CookieBanner from "../components/CookieBanner.jsx";
import MailUserPicture from "../assets/user-svgrepo-com.svg"
import CampgroundPicture from "../assets/campground-svgrepo-com.svg"

export default function Home() {
    const handleLinkClick = (event) => {
        event.preventDefault();

        const confirmation = window.confirm("Sind Sie sicher, dass Sie die Seite verlassen wollen?");
        if (confirmation) {
            window.location.href = event.currentTarget.href;
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
                        <span className="gradient-text">Automatisieren Sie das Postfach Ihres Campingplatzes mit MailFlow</span> –
                        Schnelle Antworten, minimaler manueller Aufwand!
                    </h1>
                    <h2>
                        Sparen Sie Zeit, indem Sie wiederkehrende E-Mail-Anfragen automatisieren. MailFlow integriert
                        sich nahtlos in Ihr E-Mail Postfach und verwaltet die Gästekommunikation schnell, höflich und
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
                       href="https://www.bvcd.de"
                       rel="noopener noreferrer"
                       target="_blank"
                       onClick={handleLinkClick}>
                        <img src={BVCDLogo} alt="Bundesverband der Campingwirtschaft in Deutschland e.V. Logo"></img>
                    </a>
                    <a className="partner-company"
                       href="https://www.campnerd.camp"
                       rel="noopener noreferrer"
                       target="_blank"
                       onClick={handleLinkClick}>
                        <img src={CampNerdLogo} alt="CampNerd Logo"></img>
                    </a>
                    <a className="partner-company"
                       href="https://www.unternehmertum.de"
                       rel="noopener noreferrer"
                       target="_blank"
                       onClick={handleLinkClick}>
                        <img src={UnternehmerTUMLogo} alt="UnternehmerTUM Logo"></img>
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
                        to={"kontakt@campingplatz.de"}
                        subject={"Buchungsanfrage August 2025"}
                        text={[
                            "Guten Tag,",
                            <br key="1"></br>,
                            <br key="2"></br>,
                            "Ich möchte gerne mit meiner Familie eine Woche im August bei Ihnen, mit unserem Wohnmobil, " +
                            "verbringen. Wir sind zu viert (zwei Kinder) und haben unseren Hund Morty dabei. Außerdem " +
                            "benötigen wir einen Stromanschluss für unser Wohnmobil. Können Sie mir bitte ein " +
                            "entsprechendes Angebot machen?",
                            <br key="3"></br>,
                            <br key="4"></br>,
                            "Liebe Grüße,",
                            <br key="5"></br>,
                            "Kevin Fischer"
                        ]}
                    ></Mail>
                    <div className="container">
                        <h4>
                            MailFlow beantwortet E-Mails automatisch, prüft die Verfügbarkeit und Preise in Ihrem
                            Channel Manager (z.B. CampNerd) oder Buchungssystem und nutzt zusätzlichen Kontext (z.B.
                            Website), um eine passende Antwort zu
                            erstellen.
                        </h4>
                        <img id="arrow-mail" src={ArrowMail} alt="Geschwungender Pfeil der auf die E-Mail zeigt"/>
                    </div>
                    <Mail
                        id={"mail-campground"}
                        picture={CampgroundPicture}
                        from={"kontakt@campingplatz.de"}
                        to={"kevin@flow-suite.de"}
                        subject={"Re: Buchungsanfrage August 2025"}
                        text={[
                            "Guten Tag Herr Fischer,",
                            <br key="1"></br>,
                            <br key="2"></br>,
                            "Vielen Dank für Ihre Anfrage. Wir freuen uns, dass Sie Ihren Urlaub bei uns verbringen möchten. " +
                            "Für den gewünschten Zeitraum im August haben wir noch einige Plätze verfügbar. Wir können Ihnen einen Stellplatz " +
                            "mit Stromanschluss anbieten. Der Preis beträgt 45€ pro Nacht für vier Personen inklusive Strom. " +
                            "Hunde sind bei uns willkommen, hierfür fällt eine kleine Gebühr von 5€ pro Nacht an.",
                            <br key="3"></br>,
                            <br key="4"></br>,
                            "Bitte lassen Sie uns wissen, ob Sie das Angebot annehmen möchten, damit wir den Platz für Sie reservieren können.",
                            <br key="5"></br>,
                            <br key="6"></br>,
                            "Mit freundlichen Grüßen,",
                            <br key="7"></br>,
                            "Flamur Maliqi - Ihr Campingplatz-Team"
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
                        body={"MailFlow sortiert E-Mails automatisch in Kategorien wie Buchungsanfragen, " +
                            "Gruppenbuchungen, allgemeine Anfragen, Spam oder E-Mails, die eine manuelle Bearbeitung " +
                            "erfordern. Dadurch schafft MailFlow Struktur und erleichtert die Arbeit Ihrer Mitarbeiter erheblich."}
                    ></Card>
                    <Card
                        heading={"Intelligente Antwortgenerierung durch KI"}
                        body={"MailFlow nutzt Informationen von Ihrer Website und zusätzlichen Quellen und prüft " +
                            "Verfügbarkeiten direkt in Ihrem Buchungssystem oder Channel Manager (z.B. CampNerd). " +
                            "Es erstellt bis zu 10 personalisierte Antworten pro Minute, wodurch die Antwortzeiten " +
                            "verkürzt und die Zufriedenheit Ihrer Gäste gesteigert wird."}
                    ></Card>
                    <Card
                        heading={"Automatisch senden oder manuell prüfen"}
                        body={"MailFlow kann Antworten entweder automatisch versenden oder Entwürfe zur Überprüfung " +
                            "durch Ihre Mitarbeiter erstellen. So bleibt die Kontrolle über die Kommunikation " +
                            "gewährleistet, während ein Großteil der Anfragen effizient automatisiert wird."}
                    ></Card>
                </div>
            </section>
            <section id="why">
                <h3 className="section-heading gradient-text">Stellen Sie sich vor ...</h3>
                <h4>
                    ... Sie hätten einen Mitarbeiter, der rund um die Uhr arbeitet, alle Gästeanfragen bearbeitet,
                    Buchungen in Echtzeit prüft und nie einen Tag frei nimmt - wie viel wäre
                    Ihnen das wert?
                </h4>
                <div className="card-container-grid Nx3">
                    <Card
                        image={ClockIcon}
                        body={"Bearbeitet bis zu 10 E-Mails pro Minute – 24 Stunden am Tag, 365 Tage im Jahr."}
                    ></Card>
                    <Card
                        image={HeartIcon}
                        body={"Schafft Zeit und Fokus für wichtige Aufgaben und sorgt für ein besseres Gästeerlebnis."}
                    ></Card>
                    <Card
                        image={DollarIcon}
                        body={"Senkt die Kosten für saisonale Arbeitskräfte und vereinfacht die Personalplanung."}
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