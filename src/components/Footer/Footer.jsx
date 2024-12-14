// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="margin-center" id="footer">
            <strong>Impressum</strong>
            <div className="footer-container">
                <div>
                    <p>Anbieter und Verantwortlicher</p>
                    <ul>
                        <li>Small Service Technologies GbR</li>
                        <li>Streitfeldstr. 16</li>
                        <li>81673 München</li>
                        <li>info@flow-suite.de</li>
                    </ul>
                </div>
                <div>
                    <p>Vertretungbrechtige</p>
                    <ul>
                        <li>Jure Kleindienst</li>
                        <li>Kevin Fischer</li>
                        <li>Moritz Schultz</li>
                        <li>Flamur Maliqi</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
