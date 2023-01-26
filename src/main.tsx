import "./init";
import React from "react";
import { Amplify } from "aws-amplify";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { AppProvider } from "./contexts/AppProvider";
import { endpoints } from "./libs/aws-config";
import { store } from "./store/store";
import Cookies from "universal-cookie";
import App from "./App";
import "./index.css";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;
const vite_identity_url = import.meta.env.VITE_IDENTITY_URL;
const vite_core_url = import.meta.env.VITE_CORE_URL;
const vite_socket_url = import.meta.env.VITE_SOCKET_URL;
const cookies = new Cookies();
const helmetContext = {};

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "VITE_IDENTITY_URL",
        endpoint: vite_identity_url,
      },
      {
        name: "VITE_AI_URL",
        endpoint:
          "https://qnanswer-api.pk25mf6178910.eu-west-3.cs.amazonlightsail.com/q_and_a",
      },
      {
        name: "VITE_SOCKET_URL",
        endpoint: vite_socket_url,
      },
      {
        name: "VITE_CORE_URL",
        endpoint: vite_core_url,
        custom_header: async () => {
          return {
            "X-Zapi-Auth-Token": `Bearer ${cookies.get("accessToken")}`,
          };
        },
      },
    ],
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={clientId}>
          <HelmetProvider context={helmetContext}>
            <AppProvider>
              <App />
            </AppProvider>
          </HelmetProvider>
        </GoogleOAuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
