import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/**
 * Add roboto fonts of 300, 400, 500, and 700
 */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
