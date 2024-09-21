import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import BackgroundImage from "../../assets/images/company.png";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const CompanySection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate(); // Add this inside your component

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Crée l'effet de parallaxe
        color: "white",
        minHeight: "100vh", // Hauteur complète de la vue
        display: "flex",
        alignItems: "flex-start", // Aligne le contenu en haut
        justifyContent: "flex-start", // Aligne le contenu à gauche
        width: "100%",
        paddingY: "4rem",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Noir avec 60% d'opacité
        marginTop: "-2rem",
      }}
    >
      {/* Superposition pour l'opacité */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Noir avec 60% d'opacité
          zIndex: 1,
        }}
      />

      {/* Contenu au-dessus de l'arrière-plan */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          my: 10,
        }}
      >
        <Box
          sx={{
            maxWidth: isSmallScreen ? "100%" : "60%", // Adjusts to full width on small screens
          }}
        >
          <Typography variant="h3" sx={{ mb: 3, fontWeight: "bold" }}>
            {t("companySection.title")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 5 }}>
            {t("companySection.description")}
          </Typography>

          {/* Bouton avec effet amélioré */}
          <Button
            sx={{
              color: "white", // Nouvelle couleur du texte (gris foncé)
              fontWeight: "bold",
              padding: "10px 30px",
              border: "2px solid #fff", // Bordure blanche
              borderRadius: "15px", // Bords arrondis
              backgroundColor: "transparent", // Fond initial transparent
              fontSize: "16px",
              textTransform: "uppercase",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.4s ease",
              display: "flex", // Aligne le symbole et le texte
              alignItems: "center",
              gap: "10px", // Espace entre l'icône et le texte
              boxShadow: "0 3px 4px 2px rgba(256, 256, 256,.3)",
              "&:hover": {
                backgroundColor: "#fff", // Le fond devient blanc au survol
                color: "black", // Le texte devient noir au survol
                borderColor: "white", // La bordure devient blanche au survol
                borderRadius: "50px",
                transition: "0.8s",
                transform: "translateY(-2px)",
              },
              "&:hover .symbol": {
                transform: "rotate(-45deg)", // La flèche se tourne de 45 degrés
                color: "black", // La flèche devient noire au survol
              },
              "&:hover::before": {
                width: "100%", // Soulignement complet au survol
              },
            }}
            onClick={() => {
              navigate("/synernova/about");
              window.scrollTo(0, 0); // Scrolls to the top of the page
            }}
          >
            <span>{t("companySection.aboutSynernova")}</span>
            <Box
              className="symbol"
              sx={{
                color: "white", // Couleur initiale de la flèche (gris foncé)
                transition: "all 0.3s ease",
                fontSize: "1.2rem", // Taille de la flèche
              }}
            >
              ➔
            </Box>
          </Button>
        </Box>

        {/* Section en grille sous le texte */}
        <Grid container spacing={5} sx={{ marginY: 7 }} rowSpacing={10}>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: { xs: "2rem", md: "3rem" }, // Reduced padding on smaller screens
                borderRadius: "12px",
                backdropFilter: "blur(5px)",
                textAlign: "left",
                transition: "padding 0.3s ease",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "1.75rem" }, // Adjust font size
                }}
              >
                {t("companySection.proactiveApproach.title")}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" }, // Smaller font for medium screens
                }}
              >
                {t("companySection.proactiveApproach.description")}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: { xs: "2rem", md: "3rem" }, // Reduced padding on smaller screens
                borderRadius: "12px",
                backdropFilter: "blur(5px)",
                textAlign: "left",
                transition: "padding 0.3s ease",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "1.75rem" }, // Adjust font size
                }}
              >
                {t("companySection.multidisciplinaryTalent.title")}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" }, // Smaller font for medium screens
                }}
              >
                {t("companySection.multidisciplinaryTalent.description")}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: { xs: "2rem", md: "3rem" }, // Reduced padding on smaller screens
                borderRadius: "12px",
                backdropFilter: "blur(5px)",
                textAlign: "left",
                transition: "padding 0.3s ease",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "1.75rem" }, // Adjust font size
                }}
              >
                {t("companySection.agileAndEfficient.title")}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" }, // Smaller font for medium screens
                }}
              >
                {t("companySection.agileAndEfficient.description")}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: { xs: "2rem", md: "3rem" }, // Reduced padding on smaller screens
                borderRadius: "12px",
                backdropFilter: "blur(5px)",
                textAlign: "left",
                transition: "padding 0.3s ease",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "1.75rem" }, // Adjust font size
                }}
              >
                {t("companySection.measurableResults.title")}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" }, // Smaller font for medium screens
                }}
              >
                {t("companySection.measurableResults.description")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CompanySection;
