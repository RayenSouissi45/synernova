import React, { useState, useContext } from "react";
import {
  TextField,
  Grid,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import GetInTouchButton from "../buttons/GetInTouchButton";
import SendIcon from "@mui/icons-material/Send";
import ForumIcon from "@mui/icons-material/Forum";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assets/lottie/dealForm.json";
import { ScrollContext } from "../../context/ScrollContext";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const FormSection = () => {
  const { formRef } = useContext(ScrollContext);
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    email: false,
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for name and email
    const isFirstNameEmpty = formData.firstName === "";
    const isEmailEmpty = formData.email === "";

    if (isFirstNameEmpty || isEmailEmpty) {
      setErrors({
        firstName: isFirstNameEmpty,
        email: isEmailEmpty,
      });
      setSnackbarMessage(t("formSection.control"));
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return; // Don't send the email if fields are empty
    }

    const emailData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      message: formData.message,
    };

    emailjs
      .send(
        "service_qtfgvwd",
        "template_h3ynm7d",
        emailData,
        "U5jq7NYPK5Sa73eHU"
      )
      .then(
        (result) => {
          setSnackbarMessage(
            t("Thank you for reaching out! We will get back to you soon.")
          );
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
        },
        (error) => {
          setSnackbarMessage(
            t("Oops! Something went wrong. Please try again.")
          );
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      );

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });

    // Reset validation errors
    setErrors({
      firstName: false,
      email: false,
    });
  };

  return (
    <Box sx={{ borderRadius: "8px" }} ref={formRef}>
      <Box sx={{ padding: "2rem" }} component="form" onSubmit={handleSubmit}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                marginBottom: "1.5rem",
                textAlign: "left",
                fontWeight: "bold",
                color: "#213547",
              }}
            >
              {t("formSection.title")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "2.5rem",
                textAlign: "left",
                lineHeight: 1.6,
                color: "#213547",
              }}
            >
              {t("formSection.subtitle")}
            </Typography>
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: "300px", width: "300px" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
              }}
            >
              <ForumIcon sx={{ fontSize: "48px", color: "#1976d2" }} />
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t("formSection.firstName")}
                  variant="outlined"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  helperText={errors.firstName && t("formSection.control")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t("formSection.lastName")}
                  variant="outlined"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t("formSection.email")}
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email && t("formSection.control")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t("formSection.phoneNumber")}
                  variant="outlined"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("formSection.message")}
                  variant="outlined"
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <GetInTouchButton
                  text={t("formSection.send")}
                  icon={<SendIcon />}
                  type="submit"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FormSection;
