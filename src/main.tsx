import React from "react";
import ReactDOM from "react-dom/client";
import TicTacToe from "./components/tic-tac-toe.tsx";
import { Analytics } from "@vercel/analytics/react";
import spanishContent from "./lang/en.json";
import englishContent from "./lang/es.json";

import "./assets/index.css";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: spanishContent,
    },
    es: {
      translation: englishContent,
    },
    // Puedes agregar más idiomas según sea necesario
  },
  lng: "en", // Establece el idioma predeterminado
  fallbackLng: "en", // Establece el idioma de reserva en caso de que el idioma actual no tenga traducciones
  interpolation: {
    escapeValue: false, // No es necesario escapar los valores
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TicTacToe />
    <Analytics />
  </React.StrictMode>
);
