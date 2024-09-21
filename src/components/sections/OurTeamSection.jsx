import React from "react";
import Box from "@mui/material/Box";
import { Typography, Grid, Divider } from "@mui/material";
import { MdOutlineLightbulb, MdOutlineCheckCircle } from "react-icons/md";
import { FaDraftingCompass } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import groupImage from "../../assets/images/group.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";

const OurTeamSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: 4,
        position: "relative",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          margin: 5,
          color: "#333",
        }}
      >
        {t("ourTeamSection.title")}
      </Typography>

      {/* New Paragraph */}
      <Typography
        variant="body1"
        sx={{
          lineHeight: "1.8",
          color: "#555",
          maxWidth: "800px",
          marginBottom: 4,
        }}
      >
        {t("ourTeamSection.description")}
      </Typography>

      {/* Team Image */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 4,
        }}
      >
        <img
          src={groupImage}
          alt="Our Team"
          style={{
            width: "75%",
            borderRadius: "8px",
          }}
        />
      </Box>

      {/* Our Process Title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 6, // Add margin-top for spacing above the header
          marginBottom: 3, // Space between the header and the steps
        }}
      >
        <Divider sx={{ flexGrow: 1, marginRight: 2 }} />
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#003873", // Use a standout color for the header
          }}
        >
          {t("ourProcessSection.title")}
        </Typography>
        <Divider sx={{ flexGrow: 1, marginLeft: 2 }} />
      </Box>

      <Typography
        variant="body1"
        sx={{
          lineHeight: "1.8",
          color: "#555",
          maxWidth: "800px",
          marginBottom: 4,
        }}
      >
        {t("ourProcessSection.description")}
      </Typography>

      {/* Process Steps */}
      <Grid
        container
        spacing={7}
        sx={{
          padding: "0 3%",
          marginBottom: 4,
          mt: "1.5rem",
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#444",
                textAlign: "left",
                alignItems: "center",
                display: "flex",
                columnGap: "8px",
              }}
            >
              {t("steps.step1.title")}
              <MdOutlineLightbulb
                style={{ color: "#2196F3", marginRight: 8 }}
              />
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.8",
              color: "#555",
              textAlign: "left",
            }}
          >
            {t("steps.step1.description")}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#444",
                textAlign: "left",
                alignItems: "center",
                display: "flex",
                columnGap: "8px",
              }}
            >
              {t("steps.step3.title")}
              <FiCode style={{ color: "#2196F3", marginRight: 8 }} />
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.8",
              color: "#555",
              textAlign: "left",
            }}
          >
            {t("steps.step3.description")}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={7}
        sx={{
          padding: "0 3%",
          marginBottom: 4,
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#444",
                textAlign: "left",
                alignItems: "center",
                display: "flex",
                columnGap: "8px",
              }}
            >
              {t("steps.step2.title")}
              <FaDraftingCompass style={{ color: "#2196F3", marginRight: 8 }} />
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.8",
              color: "#555",
              textAlign: "left",
            }}
          >
            {t("steps.step2.description")}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#444",
                textAlign: "left",
                alignItems: "center",
                display: "flex",
                columnGap: "8px",
              }}
            >
              {t("steps.step4.title")}
              <MdOutlineCheckCircle
                style={{ color: "#2196F3", marginRight: 8 }}
              />
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.8",
              color: "#555",
              textAlign: "left",
            }}
          >
            {t("steps.step4.description")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurTeamSection;
