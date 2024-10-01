import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ogImage from "./assets/images/footersynernova.png";

// Set the Open Graph image dynamically
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute("content", ogImage);
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
