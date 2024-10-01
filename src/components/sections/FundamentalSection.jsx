import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import {
  FaRocket,
  FaHandshake,
  FaEye,
  FaCogs,
  FaThumbsUp,
} from "react-icons/fa"; // Using Font Awesome icons
import { useTranslation } from "react-i18next"; // Importing useTranslation

const FundamentalsSection = () => {
  const { t } = useTranslation(); // Using translation hook
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index > -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, [visibleItems]);

  const fundamentals = [
    {
      icon: <FaRocket size={50} />, // Rocket icon
      title: t("fundamentalsSection.agilityAndResponsivenessTitle"),
      description: t("fundamentalsSection.agilityAndResponsivenessDescription"),
    },
    {
      icon: <FaHandshake size={50} />, // Handshake icon
      title: t("fundamentalsSection.commitmentAndReliabilityTitle"),
      description: t("fundamentalsSection.commitmentAndReliabilityDescription"),
    },
    {
      icon: <FaEye size={50} />, // Eye icon
      title: t("fundamentalsSection.clarityAndTransparencyTitle"),
      description: t("fundamentalsSection.clarityAndTransparencyDescription"),
    },
    {
      icon: <FaCogs size={50} />, // Cogwheels icon
      title: t("fundamentalsSection.operationalExcellenceTitle"),
      description: t("fundamentalsSection.operationalExcellenceDescription"),
    },
    {
      icon: <FaThumbsUp size={50} />, // Thumbs-up icon
      title: t("fundamentalsSection.satisfactionGuaranteedTitle"),
      description: t("fundamentalsSection.satisfactionGuaranteedDescription"),
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#1565C0", // New darker blue background
        color: "white", // White text and icons
        textAlign: "center",
        py: 8,
      }}
    >
      <Typography variant="h4" gutterBottom>
        {t("fundamentalsSection.title")}
      </Typography>
      <Grid container spacing={7} justifyContent="center">
        {fundamentals.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            sx={{
              textAlign: "center",
              opacity: visibleItems.includes(index) ? 1 : 0,
              transform: visibleItems.includes(index)
                ? "none"
                : "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
            ref={(el) => {
              if (el) {
                itemRefs.current[index] = el;
              }
            }}
          >
            <Box sx={{ color: "white" }}>{item.icon}</Box> {/* White icons */}
            <Typography variant="h6" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body1" sx={{ paddingX: "7px" }}>
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FundamentalsSection;
