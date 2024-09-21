import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Icon from "@mui/icons-material/Public";

const CustomButton = styled(Button)({
  backgroundColor: "white",
  border: 0,
  borderRadius: 10,
  boxShadow: "0 3px 5px 2px rgba(105, 135, 255, .3)",
  color: "black",
  height: 48,
  padding: "0 30px",
  fontFamily: "'Roboto', sans-serif",
  textTransform: "none",
  fontSize: "1rem",
  letterSpacing: "0.5px",
  // transition: "background-color 0.3s ease, transform 0.3s ease",
  transition: "0.8s",
  "&:hover": {
    backgroundColor: "black",
    transform: "translateY(-2px)",
    color: "white",
    borderRadius: 50,
  },
});

const ExploreMoreButton = () => {
  return <CustomButton startIcon={<Icon />}>Explore More</CustomButton>;
};

export default ExploreMoreButton;
