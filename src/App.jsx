import React from "react";
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Imprint from "./pages/Imprint.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/impressum" element={<Imprint />} />
            <Route path="/datenschutzerklärung" element={<PrivacyPolicy />} />
        </Routes>
    </Router>
  );
}

export default App;
