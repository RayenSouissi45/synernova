import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./pages/Header";
// import Footer from "./pages/Footer";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/services";
// import Contact from "./pages/Contact";
// import ScrollToTop from "./components/components/scrollToTop";

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> Ensure this is placed here */}
      {/* <Header /> */}
      <Routes>
        <Route path="/secondtest" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
