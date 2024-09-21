import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Icon from "@mui/icons-material/Chat";
import { useTranslation } from "react-i18next";

const CustomButton = styled(Button)({
  background: "linear-gradient(45deg, #38bdf8 30%, #1976D2 90%)",
  border: 0,
  borderRadius: 50,
  boxShadow: "0 3px 5px 2px rgba(105, 135, 255, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  fontFamily: "'Roboto', sans-serif",
  textTransform: "none",
  fontSize: "1rem",
  letterSpacing: "0.5px",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    backgroundColor: "#0D47A1",
    transform: "translateY(-2px)",
  },
});

const GetInTouchButton = ({ text = "Get in touch", icon = <Icon /> }) => {
  const { t } = useTranslation();
  return (
    <CustomButton startIcon={icon} type="submit">
      {t("getInTouch")}
    </CustomButton>
  );
};

export default GetInTouchButton;
