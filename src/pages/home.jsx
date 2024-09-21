import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../translation/i18n";
import Container from "@mui/material/Container";
import ServicesSection from "../components/sections/ServiceSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import HeroSection from "../components/sections/HeroSection";
import FormSection from "../components/sections/FormSection";
import FundamentalsSection from "../components/sections/FundamentalSection";
import CompanySection from "../components/sections/CompanySection";

const HomePage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        background: `
        linear-gradient(to bottom, white, #ECF9FF 30%, white 70%, #ECF9FF 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        rowGap: "1.3rem",
        minHeight: "100vh", // Ensure it covers the full height of the viewport
      }}
    >
      {/* --------- HERO SECTION -------------------- */}
      <HeroSection scrollToForm={scrollToForm} />
      {/* -------------- ABOUT US SECTION ------------------ */}
      <AboutUsSection />
      {/* ---- Why choose us -----*/}
      <WhyChooseUsSection />
      {/* --------- OUR SERVICES --------- */}
      <ServicesSection />
      {/* ---- Fundamental ------- */}
      <FundamentalsSection />
      {/* ---- Company Section ----- */}
      <CompanySection />
      {/* ---- FORM SECTION ----- */}
      <div ref={formRef}>
        {" "}
        <FormSection />{" "}
      </div>
      {/* ----- Footer Section ----- */}
    </Container>
  );
};

export default HomePage;
