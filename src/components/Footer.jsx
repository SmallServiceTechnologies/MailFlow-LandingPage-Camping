import React from 'react';
import {Link} from "react-router-dom";
import "../css/footer.css"

export default function Footer() {
    return (
        <div className="footer-container">
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
            <div className="container">
                <Link to="/datenschutz">Datenschutzerklärung</Link>
                <a href="/https://www.youtube.com/watch?v=dQw4w9WgXcQ">Nicht klicken ;)</a>
            </div>
        </div>
    )
}