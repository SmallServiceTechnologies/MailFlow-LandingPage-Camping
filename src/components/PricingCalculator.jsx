import React, {useState} from "react";
import "../css/pricingCalculator.css"

export default function PricingCalculator() {
    const [stellplaetze, setStellplaetze] = useState(30);

    const pricePerStellplatzMonthly = 5;
    const pricePerStellplatzYearly = 5 * 8;

    const calculateMonthlyPrice = () => {
        if (stellplaetze === 0 || stellplaetze === null) return "Bitte geben Sie eine korrekte Anzahl an";
        return pricePerStellplatzMonthly * stellplaetze + "€";
    };

    const calculateYearlyPrice = () => {
        if (stellplaetze === 0 || stellplaetze === null) return "Bitte geben Sie eine korrekte Anzahl an";
        return pricePerStellplatzYearly * stellplaetze + "€";
    };


    return (
        <div className="pricing-calculator-container">
            <h3 className="section-heading gradient-text">Profitieren Sie vom Jahresangebot – 12 Monate zum Preis von 8!</h3>
            <p>
                <strong>12 Monate zum Preis von 8!</strong> Mit unserem Jahresangebot können Sie ein volles Jahr MailFlow
                nutzen und sparen dabei 4 Monate! Automatisieren Sie E-Mails mit KI, eliminieren Sie wiederkehrende Fragen,
                und steigern Sie die Gästezufriedenheit – alles zu reduzierten Kosten. Sparen Sie Zeit und Geld, während Sie Ihr Team
                optimal unterstützen!
            </p>
            <h4>Berechnen Sie die individuellen Kosten für Ihren Campingplatz</h4>
            <p>Um kleine und mittelgroße Campingplätze nicht zu benachteiligen, hängen die Kosten für MailFlow ausschließlich von der Anzahl der Stellplätze Ihres Campingplatzes ab.</p>

            <label htmlFor="stellplaetze"><strong>Wie viele Stellplätze hat Ihr Campingplatz?</strong></label>
            <input
                id="stellplaetze"
                type="number"
                min="1"
                value={stellplaetze}
                onChange={(e) => setStellplaetze(e.target.value)}
                placeholder="Anzahl der Stellplätze"
            />

            <div className="pricing-result">
                <div>
                    <h4>Monatlich*:</h4>
                    <p>{calculateMonthlyPrice()}</p>
                </div>
                <div>
                    <h4>Jährlich*:</h4>
                    <p>{calculateYearlyPrice()}</p>
                </div>
            </div>
            <p>* Beim Erstkauf fällt eine einmalige Setup-Gebühr an. Zusätzlich wird, in jedem Folgejahr, eine Support-
                und Wartungsgebühr berechnet.</p>
        </div>
    )
}