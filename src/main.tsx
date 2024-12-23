import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/style/base.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
