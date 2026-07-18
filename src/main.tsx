import { MotionConfig } from "framer-motion";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { CustomCursor, PageLoader, ScrollProgress } from "./experience";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MotionConfig>
  </StrictMode>,
);
