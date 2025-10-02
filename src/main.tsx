import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@/assets/css/index.css";

import App from "./app.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
