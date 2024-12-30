import React from 'react';
import Card from "../components/Card.jsx";
import CalendlyBtn from "../components/CalendlyBtn.jsx";
import Video from "../components/Video.jsx";

export default function Home() {
    return (
        <React.Fragment>
            <section id="#above-the-fold">
                <div className="container">
                    <h1><span className="gradient-text">Automatisiere Dein E-Mail Postfach</span> –<br></br>Schnelle Antworten, Weniger manueller Aufwand!</h1>
                    <h2>Spare Zeit, indem du wiederkehrende E-Mail-Anfragen automatisierst. MailFlow integriert sich in dein Postfach und verwaltet die Gästekommunikation schnell und effizient.</h2>
                    <div className="btn-container">
                        <a href="#how-mailflow-works" className="btn">Wie funktioniert MailFlow?</a>
                        <CalendlyBtn></CalendlyBtn>
                    </div>
                </div>
                <Video></Video>
            </section>
            <section id="why-mailflow">
                <h3>Warum MailFlow?</h3>
                <h4>Durch die sofortige Bearbeitung von wiederholender Anfragen spart MailFlow stundenlange manuelle
                    Arbeit, so dass sich die Mitarbeiter auf wichtigere Aufgaben konzentrieren können und der Bedarf an
                    saisonalen Neueinstellungen sinkt.</h4>
                <div className="card-container-grid Nx3">
                    <Card
                        image={}
                        body={""}
                    ></Card>
                    <Card
                        image={}
                        body={""}
                    ></Card>
                    <Card
                        image={}
                        body={""}
                    ></Card>
                </div>
            </section>
            <section id="how-mailflow-works">
                <h3>Wie funktioniert MailFlow?</h3>
                <div className="card-container-grid Nx1">
                    <Card
                        body={""}
                        heading={""}
                    ></Card>
                    <Card
                        body={""}
                        heading={""}
                    ></Card>
                    <Card
                        body={""}
                        heading={""}
                    ></Card>
                    <Card
                        body={""}
                        heading={""}
                    ></Card>
                </div>
            </section>
        </React.Fragment>
)
}