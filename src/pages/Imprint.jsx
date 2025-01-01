import React from 'react';
import Footer from "../components/Footer.jsx";
import Nav from "../components/Nav.jsx";

export default function Imprint() {
    return (
        <React.Fragment>
            <section>
                <Nav></Nav>
            </section>
            <section className="imprint">
                <div className="container">
                    <strong>Impressum</strong>
                    <ul>
                        <li>Small Service Technologies GbR</li>
                        <li>Streitfeldstraße 16</li>
                        <li>81673 München</li>
                        <li>info@flow-suite.de</li>
                    </ul>
                </div>
                <div className="container">
                    <strong>Vertretungsberechtigte</strong>
                    <ul>
                        <li>Jure Kleindienst</li>
                        <li>Kevin Fischer</li>
                        <li>Moritz Schultz</li>
                        <li>Flamur Maliqi</li>
                    </ul>
                </div>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </React.Fragment>
    )
}