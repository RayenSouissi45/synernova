import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useTranslation } from "react-i18next";

const CustomButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #007BFF 30%, #00C6FF 90%)", // Blue gradient
  borderRadius: 50,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  fontFamily: "'Roboto', sans-serif",
  textTransform: "none",
  fontSize: "1rem",
  letterSpacing: "0.5px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  boxShadow: "0 3px 5px 2px rgba(0, 123, 255, .3)",
  "&:hover": {
    background: "linear-gradient(45deg, #00C6FF 30%, #007BFF 90%)",
    boxShadow: "0 6px 10px 4px rgba(0, 123, 255, .3)",
    transform: "translateY(-2px)",
  },
  "&:active": {
    boxShadow: "0 2px 4px 1px rgba(0, 123, 255, .3)",
    transform: "translateY(0)",
  },
  "& .MuiButton-startIcon": {
    color: "inherit",
    marginRight: theme.spacing(1),
  },
}));

const StartProjectButton = ({ scrollToForm }) => {
  const { t } = useTranslation();
  return (
    <CustomButton startIcon={<RocketLaunchIcon />} onClick={scrollToForm}>
      {t("buttons.startProject")}
    </CustomButton>
  );
};

export default StartProjectButton;
