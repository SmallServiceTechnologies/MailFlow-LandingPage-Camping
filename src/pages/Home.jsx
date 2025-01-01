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
            <section>
                <Nav></Nav>
            </section>
            <section>
                <div className="container">
                    <h1>
                        <span className="gradient-text">Automatisieren Sie das Postfach Ihres Campingplatzes</span> –<br></br>
                        Schnelle Antworten, weniger manueller Aufwand!
                    </h1>
                    <h2>
                        Sparen Sie Zeit, indem Sie wiederkehrende E-Mail-Anfragen automatisieren. MailFlow integriert
                        sich nahtlos in Ihr Postfach und verwaltet die Gästekommunikation schnell und effizient.
                    </h2>
                    <div className="btn-container">
                        <a href="#how-mailflow-works" className="btn">Wie funktioniert MailFlow?</a>
                        <CTABtn></CTABtn>
                    </div>
                </div>
                <Video></Video>
            </section>
            <section id="partners">
                <div className="container">
                    <a href="https://www.campnerd.camp" rel="noopener noreferrer" target="_blank" onClick={handleLinkClick}>
                        <img src={CampNerdLogo} alt="CampNerd Logo"></img>
                    </a>
                    <a href="https://www.bvcd.de" rel="noopener noreferrer" target="_blank" onClick={handleLinkClick}>
                        <img src={BVCDLogo} alt="Bundesverband der Campingwirtschaft in Deutschland e.V. Logo"></img>
                    </a>
                    <a href="https://www.unternehmertum.de" rel="noopener noreferrer" target="_blank" onClick={handleLinkClick}>
                        <img src={UnternehmerTUMLogo} alt="UnternehmerTUM Logo"></img>
                    </a>
                </div>
            </section>
            <section>
                <div className="mail-continer-gird">
                    <Mail></Mail>
                    <img id="arrow-mail" src={ArrowMail} alt="Geschwungender Pfeil der auf die E-Mail zeigt"/>
                    <Mail></Mail>
                </div>
            </section>
            <section id="why-mailflow">
                <h3>Warum MailFlow?</h3>
                <h4>
                    MailFlow bearbeitet E-Mail-Anfragen sofort und spart dadurch stundenlange manuelle Arbeit.
                    Es ist rund um die Uhr im Einsatz, sodass Ihre Mitarbeiter sich auf wichtigere Aufgaben
                    konzentrieren können.
                    Besonders in der Hauptsaison reduziert MailFlow den Bedarf an temporären Arbeitskräften und
                    entlastet Ihr Team.
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
            <section id="how-mailflow-works">
                <h3>Wie funktioniert MailFlow?</h3>
                <div className="card-container-grid Nx1">
                    <Card
                        body={"Test"}
                        heading={"Test"}
                    ></Card>
                    <Card
                        body={"Test"}
                        heading={"Test"}
                    ></Card>
                    <Card
                        body={"Test"}
                        heading={"Test"}
                    ></Card>
                    <Card
                        body={"Test"}
                        heading={"Test"}
                    ></Card>
                </div>
            </section>
            <section id="pricing">
                <PricingCalculator></PricingCalculator>
            </section>
            <section id="FAQ">
                <FAQ></FAQ>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </React.Fragment>
)
}