import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import OurTeamSection from "../components/sections/OurTeamSection";
import FormSection from "../components/sections/FormSection";
import AboutUsSectionAboutUsPage from "../components/sections/AboutUsSectionAboutUsPage";
import AboutUsIntroSection from "../components/sections/AboutUsIntroSection";

const AboutUs = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        background: `
        linear-gradient(to bottom, white, #ECF9FF )`,
      }}
    >
      <AboutUsIntroSection />
      <AboutUsSectionAboutUsPage />
      {/* ---- OUR TEAM ---- */}
      <OurTeamSection />
      <FormSection />
    </Container>
  );
};

export default AboutUs;
