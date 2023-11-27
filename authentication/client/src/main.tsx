import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "react-oidc-context";

const oidcConfig = {
  authority:
    "https://barlowtestkeycloak.duckdns.org:2320/realms/DND",
  client_id: "dnduser",
  redirect_uri: "http://localhost:3000/",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
