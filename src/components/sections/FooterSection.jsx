import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Email, Phone } from "@mui/icons-material"; // Import icons
import Logo from "../../assets/images/footersynernova.png"; // Replace with the actual path to your logo file
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const FooterSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Below 600px
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md")); // Between 600px and 900px
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "#071330",
        color: "#fff",
        padding: isSmallScreen || isMediumScreen ? "2rem 1rem" : "3rem 0",
        textAlign: isSmallScreen || isMediumScreen ? "center" : "left",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={isSmallScreen || isMediumScreen ? 2 : 4}
          justifyContent="center"
          alignItems={isSmallScreen || isMediumScreen ? "center" : "flex-start"}
        >
          {/* Logo and Name */}
          <Grid item xs={12} md={3}>
            <Box
              display="flex"
              flexDirection={isSmallScreen || isMediumScreen ? "column" : "row"}
              alignItems="center"
              justifyContent={
                isSmallScreen || isMediumScreen ? "center" : "flex-start"
              }
            >
              <img
                src={Logo}
                alt="Company Logo"
                style={{
                  height: "100px",
                  marginBottom: isSmallScreen || isMediumScreen ? "1rem" : "0",
                }}
              />
            </Box>
          </Grid>

          {/* Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              {t("footer.quickLinks")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: isSmallScreen || isMediumScreen ? "0.5rem" : "1rem",
                alignItems:
                  isSmallScreen || isMediumScreen ? "center" : "flex-start",
              }}
            >
              <Link href="/" passHref>
                <a style={linkStyle}>{t("navbar.home")}</a>
              </Link>
              <Link href="/about" passHref>
                <a style={linkStyle}>{t("navbar.aboutUs")}</a>
              </Link>
              <Link href="/services" passHref>
                <a style={linkStyle}>{t("navbar.ourServices")}</a>
              </Link>
            </Box>
          </Grid>

          {/* Contact Us with Icons */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              {t("footer.contactUs")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: isSmallScreen || isMediumScreen ? "0.5rem" : "1rem",
                alignItems:
                  isSmallScreen || isMediumScreen ? "center" : "flex-start",
              }}
            >
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Email fontSize="small" /> {/* Email icon */}
                <Typography variant="body1">info@synernova.com</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Phone fontSize="small" /> {/* Phone icon */}
                <Typography variant="body1">+41 78 253 9393</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              {t("footer.followUs")}
            </Typography>
            <Box
              display="flex"
              justifyContent={
                isSmallScreen || isMediumScreen ? "center" : "flex-start"
              }
              gap={isSmallScreen || isMediumScreen ? 2 : 3}
              mt={isSmallScreen || isMediumScreen ? 2 : 0}
            >
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                sx={iconButtonStyle}
              >
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                sx={iconButtonStyle}
              >
                <Twitter fontSize="large" />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                sx={iconButtonStyle}
              >
                <LinkedIn fontSize="large" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box
          textAlign="center"
          marginTop={isSmallScreen || isMediumScreen ? "2rem" : "3rem"}
          paddingTop="1rem"
          borderTop="1px solid rgba(255, 255, 255, 0.2)"
        >
          <Typography
            variant="body2"
            fontSize={isSmallScreen || isMediumScreen ? "0.875rem" : "1rem"}
          >
            © {new Date().getFullYear()} Synernova.{" "}
            {t("footer.allRightsReserved")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

// Styles for links and icons
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#00bcd4",
  },
};

const iconButtonStyle = {
  color: "#fff",
  "&:hover": {
    color: "#00bcd4",
  },
  fontSize: "2rem", // Slightly larger for better tap targets on mobile
};

export default FooterSection;
