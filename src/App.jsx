import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/header";
// import Footer from "./pages/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
// import Contact from "./pages/Contact";
import ScrollToTop from "./components/components/scrollToTop";
import { ScrollProvider } from "./context/ScrollContext";
import FooterSection from "./components/sections/FooterSection";

function App() {
  return (
    <ScrollProvider>
      <Router>
        {" "}
        <ScrollToTop /> Ensure this is placed here
        <Header />
        <div style={{ paddingTop: "70px", backgroundColor: "white" }}>
          <Routes>
            <Route path="/synernova" element={<Home />} />
            <Route path="/synernova/about" element={<About />} />
            <Route path="/synernova/services" element={<Services />} />
          </Routes>
        </div>
        <FooterSection />
      </Router>
    </ScrollProvider>
  );
}

export default App;
