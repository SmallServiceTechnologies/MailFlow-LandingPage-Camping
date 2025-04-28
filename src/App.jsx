import React from "react";
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Imprint from "./pages/Imprint.jsx";
import {AppContext, AppContextProvider} from "./AppContext.jsx";

export default function App() {
    return (
        <AppContextProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/impressum" element={<Imprint />} />
                    <Route path="/datenschutzerklärung" element={<PrivacyPolicy />} />
                </Routes>
            </Router>
        </AppContextProvider>
    );
}