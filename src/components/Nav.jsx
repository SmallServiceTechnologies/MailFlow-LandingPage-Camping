import flowSuiteLogo from "../assets/FlowSuiteLogo.svg";
import CalendlyBtn from "./CalendlyBtn.jsx";
import "../css/nav.css"

export default function Nav() {
    return (
        <div className="nav-container">
            <a href="/">
                <img src={flowSuiteLogo} className="logo" alt="FlowSutie Logo, ein in einem Strich gezogenes kleines f mit buntem Farbverlauf."/>
            </a>
            <CalendlyBtn></CalendlyBtn>
        </div>
    )
}