import React from 'react';
import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";
import CookieBanner from "../components/CookieBanner.jsx";

export default function Imprint() {
    return (
        <React.Fragment>
            <CookieBanner></CookieBanner>
            <section id="nav" className="no-margin-bottom">
                <Nav></Nav>
            </section>
            <section id="imprint">
                <h1>Impressum</h1>
                <ul>
                    <li>Small Service Technologies GbR</li>
                    <li>Streitfeldstraße 16</li>
                    <li>81673 München</li>
                    <li>info@flow-suite.de</li>
                    <li>IBAN: DE97700703620074933300</li>
                    <li>BIC: DEUTDEMMXXX</li>
                    <li>USt-IdNr: DE450182419</li>
                    <li>Steuernummer: 143/518/70223</li>
                </ul>
                <h2>Vertretungsberechtigte</h2>
                <ul>
                    <li>Jure Kleindienst</li>
                    <li>Kevin Fischer</li>
                    <li>Moritz Schultz</li>
                    <li>Flamur Maliqi</li>
                </ul>
            </section>
            <section className="no-margin-bottom">
                <Footer></Footer>
            </section>
        </React.Fragment>
    )
}