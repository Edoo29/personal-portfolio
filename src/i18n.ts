import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        english: "English",
        italian: "Italian",
        welcome: "Hi, I am Edoardo",
        introTextOne: "Design that works,",
        introTextTwo: "experiences that captivate.",
      },
    },
    it: {
      translation: {
        home: "Home",
        about: "Chi sono",
        projects: "Progetti",
        contact: "Contattami",
        english: "Inglese",
        italian: "Italiano",
        welcome: "Ciao, sono Edoardo",
        introTextOne: "Design che funziona,",
        introTextTwo: "esperienze che catturano.",
      },
    },
  },
});

export default i18n;
