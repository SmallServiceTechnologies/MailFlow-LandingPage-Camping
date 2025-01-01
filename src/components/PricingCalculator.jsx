import React, {useState} from "react";
import "../css/pricingCalculator.css"

export default function PricingCalculator() {
    const [stellplaetze, setStellplaetze] = useState(1);

    const pricePerStellplatzMonthly = 5;
    const pricePerStellplatzYearly = 5 * 8;

    const calculateMonthlyPrice = () => {
        if (stellplaetze === 0) return 0;
        return pricePerStellplatzMonthly * stellplaetze;
    };

    const calculateYearlyPrice = () => {
        if (stellplaetze === 0) return 0;
        return pricePerStellplatzYearly * stellplaetze;
    };


    return (
        <div className="pricing-calculator">
            <h3>Preiskalkulator</h3>

            <p>
                <strong>Profitieren Sie vom Jahresangebot – 12 Monate zum Preis von 8!</strong><br></br>
                Mit unserem Jahresangebot erhalten Sie ein volles Jahr Zugang zu MailFlow und sparen dabei 4 Monate!
                Automatisieren Sie E-Mails mit KI, eliminieren Sie wiederkehrende Fragen, und steigern Sie die
                Gästezufriedenheit – alles zu reduzierten Kosten. Sparen Sie Zeit und Geld, während Sie Ihr Team
                optimal unterstützen!
            </p>

            {/* Stellplätze input */}
            <label htmlFor="stellplaetze">Wie viele Stellplätze hat Ihr Campingplatz?</label>
            <input
                id="stellplaetze"
                type="number"
                min="1"
                value={stellplaetze}
                onChange={(e) => setStellplaetze(e.target.value)}
                placeholder="Anzahl der Stellplätze"
            />

            {/* Displaying the price */}
            <div className="pricing-result">
                <div>
                    <h4>Monatlich*:</h4>
                    <p>{calculateMonthlyPrice()} €</p>
                </div>
                <div>
                    <h4>Jährlich*:</h4>
                    <p>{calculateYearlyPrice()} €</p>
                    <strong>
                        Warum warten? Profitieren Sie jetzt von diesem exklusiven Angebot und sichern Sie sich 12
                        Monate zum Preis von 8!
                    </strong>
                </div>
            </div>
            <p>* Beim Erstkauf fällt eine einmalige Setup-Gebühr an. Zusätzlich wird, in jedem Folgejahr, eine Support-
                und Wartungsgebühr berechnet.</p>
        </div>
    )
}