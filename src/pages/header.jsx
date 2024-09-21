import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";
import i18n from "../translation/i18n";
import { styled } from "@mui/system";
import { ScrollContext } from "../context/ScrollContext";
import { useTranslation } from "react-i18next";
import synernovaLogoWeb from "../assets/images/bluesynernova.png"; // Import the logo

const StyledButton = styled(Button)({
  position: "relative",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    backgroundColor: "#2c5784",
    bottom: "-2px",
    left: "0",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
    transition: "transform 0.25s ease-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
});

const DrawerHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
});

const Header = () => {
  const { t } = useTranslation();
  const { formRef } = useContext(ScrollContext);

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  console.log("Current language:", i18n.language);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("i18nextLng")?.toUpperCase() ||
      i18n.language.slice(0, 2).toUpperCase()
  );

  // Set the language on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage.toUpperCase().slice(0, 2));
    }
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLanguageMenuOpen = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguageAnchorEl(null);
    i18n.changeLanguage(language.toLowerCase());
    localStorage.setItem("i18nextLng", language.toLowerCase()); // Save to localStorage
    setDrawerOpen(false); // Close the drawer after selecting a language
  };

  const languageNames = {
    en: "English",
    fr: "Français",
    es: "Español",
    it: "Italiano",
    de: "Deutsch",
  };
  const drawerList = () => (
    <Box
      sx={{
        width: "80vw",
        height: "100vh",
        background: "linear-gradient(135deg, #e3f2fd, #2c5784)",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(false)} // Only on keydown, not click
    >
      <DrawerHeader>
        <Link to="/synernova">
          <Box
            component="img"
            src={synernovaLogoWeb}
            alt="Synernova Logo"
            sx={{ height: "60px", mr: 2 }} // Increased the height for a bigger logo
          />
        </Link>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: "#ffffff" }}>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider sx={{ backgroundColor: "#ffffff" }} />
      <List>
        <ListItem
          button
          component={NavLink}
          to="/synernova"
          sx={{
            color: "#ffffff",
            "&.active": {
              color: "#003873", // Active item color
            },
            ":hover": {
              color: "#ffffff", // Ensure color remains white on hover
            },
          }}
        >
          <ListItemText primary={t("navbar.home")} />
        </ListItem>

        <ListItem
          button
          component={NavLink}
          to="/synernova/about"
          sx={{
            color: "#ffffff",
            "&.active": {
              color: "#003873", // Active item color
            },
            ":hover": {
              color: "#ffffff", // Ensure color remains white on hover
            },
          }}
        >
          <ListItemText primary={t("navbar.aboutUs")} />
        </ListItem>

        <ListItem
          button
          component={NavLink}
          to="/synernova/services"
          sx={{
            color: "#ffffff",
            "&.active": {
              color: "#003873", // Active item color
            },
            ":hover": {
              color: "#ffffff", // Ensure color remains white on hover
            },
          }}
        >
          <ListItemText primary={t("navbar.ourServices")} />
        </ListItem>

        <ListItem
          button
          onClick={handleScrollToForm}
          sx={{ color: "#ffffff", ":hover": { color: "#ffffff" } }}
        >
          <ListItemText primary={t("navbar.contact")} />
        </ListItem>

        <Divider sx={{ backgroundColor: "#ffffff" }} />

        <ListItem
          button
          sx={{ color: "#ffffff", ":hover": { color: "#ffffff" } }}
          onClick={handleLanguageMenuOpen}
        >
          <ListItemText primary={selectedLanguage} />
        </ListItem>
      </List>

      <Box sx={{ textAlign: "center", paddingBottom: "20px" }}>
        {/* <Typography variant="caption" component="p" sx={{ color: "black" }}>
          © 2024 Soynova. All Rights Reserved.
        </Typography> */}
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff",
        color: "black",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.015)",
      }}
    >
      <Toolbar>
        <Link to="/synernova">
          <Box
            component="img"
            src={synernovaLogoWeb}
            alt="Synernova Logo"
            sx={{ height: "60px", mr: 2 }} // Increased the height for a bigger logo
          />
        </Link>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#003873" }}
        >
          {/* SOYNOVA */}
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <StyledButton
            component={NavLink}
            to="/synernova"
            sx={{ fontWeight: "bold" }}
            style={({ isActive }) => ({
              color: isActive ? "#0077E6" : "#003873", // Change color when active
            })}
            end
          >
            {t("navbar.home")}
          </StyledButton>
          <StyledButton
            component={NavLink}
            to="/synernova/about"
            sx={{ color: "black", fontWeight: "bold" }}
            style={({ isActive }) => ({
              color: isActive ? "#0077E6" : "#003873", // Change color when active
            })}
          >
            {t("navbar.aboutUs")}
          </StyledButton>
          <StyledButton
            component={NavLink}
            to="/synernova/services"
            sx={{ color: "black", fontWeight: "bold" }}
            style={({ isActive }) => ({
              color: isActive ? "#0077E6" : "#003873", // Change color when active
            })}
          >
            {t("navbar.ourServices")}
          </StyledButton>
          <StyledButton
            component={NavLink}
            sx={{ color: "#003873", fontWeight: "bold" }}
            style={{ color: "#003873" }}
            onClick={handleScrollToForm}
          >
            {t("navbar.contact")}
          </StyledButton>
          <StyledButton
            sx={{
              color: "#003873",
              fontWeight: "bold",
              backgroundColor: "#f0f4f8", // Light background to stand out
              padding: "6px 16px", // Adjust padding for button shape
              borderRadius: "20px", // Rounded corners for distinct look
              border: "1px solid #003873", // Border for added emphasis
              position: "relative",
              "&::after": {
                content: '""',
                display: "none", // Disable underline effect
              },
              "&:hover": {
                backgroundColor: "#e0e7ef", // Slight background change on hover
                color: "#0077E6", // Text color change on hover
                borderColor: "#0077E6", // Border color change on hover
              },
            }}
            onClick={handleLanguageMenuOpen}
          >
            {selectedLanguage}
          </StyledButton>

          <Menu
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={handleLanguageMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: "#ffffff", // White background for the menu
                color: "#003873", // Dark blue text color to match the navbar
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for the dropdown
              },
            }}
            MenuListProps={{
              sx: {
                padding: 0,
              },
            }}
          >
            {Object.keys(i18n.services.resourceStore.data).map((lng) => (
              <MenuItem
                key={lng}
                onClick={() => selectLanguage(lng.toUpperCase())}
                sx={{
                  padding: "12px 20px", // Adjust padding for a cleaner look
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#e0e7ef", // Slight hover background color change
                    color: "#0077E6", // Text color change on hover
                  },
                }}
              >
                {languageNames[lng]}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              width: "80%",
              maxWidth: "300px",
              // boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#2c5784",
              color: "#ffffff",
              animation: "slide-in 0.3s ease-out",
            },
          }}
        >
          {drawerList()}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
