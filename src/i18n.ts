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
        descriptionOne:
          "As a frontend developer, I create visually stunning, high-performance websites that work seamlessly on any device.",
        descriptionTwo:
          "If you want a site that looks great and functions perfectly, you're in the right place.",
        arrowOne: "Read more about me",
        arrowTwo: "Explore my projects",
        aboutMe: "About me",
        aboutMeOne:
          "I'm a frontend developer who likes to code and create interactive websites.",
        aboutMeTwo: "Technologies I like are ",
        aboutMeThree: "React and Typescript",
        aboutMeFour:
          ", but I'm always looking for new challenges to improve my skills.",
        aboutMeFive: "I also know and use ",
        aboutMeSix: "Git and GitHub",
        aboutMeSeven: " to manage my projects.",
        projectsTitle: "Projects",
        projectsNo: "No projects yet.",
        getInTouch: "Get in touch",
        contactMeTitle: "Contact me",
        contactMeDescription:
          "If you want to get in touch with me or have any questions, feel free to send me an email.",
        contactMeClickOne: "Click me ",
        contactMeClickTwo: " times to send me an email.",
        goBack: "Go back",
        notAvailable: "I am not available to work for the moment",
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
        descriptionOne:
          "Come sviluppatore frontend, creo siti web visivamente sorprendenti e di alta prestazione che funzionano perfettamente su qualsiasi dispositivo.",
        descriptionTwo:
          "Se vuoi un sito che sia bello e che funzioni perfettamente, sei nel posto giusto.",
        arrowOne: "Leggi di più su di me",
        arrowTwo: "Esplora i miei progetti",
        aboutMe: "Chi sono",
        aboutMeOne:
          "Sono un sviluppatore frontend a cui piace pensare e creare siti web interattivi.",
        aboutMeTwo: "Le tecnologie che mi piacciono sono ",
        aboutMeThree: "React e Typescript",
        aboutMeFour:
          ", ma cerco sempre nuove sfide per migliorare le mie competenze.",
        aboutMeFive: "Inoltre conosco e uso ",
        aboutMeSix: "Git e GitHub",
        aboutMeSeven: " per gestire i miei progetti.",
        projectsTitle: "Progetti",
        projectsNo: "Ancora nessun progetto.",
        getInTouch: "Contattami",
        contactMeTitle: "Contattami",
        contactMeDescription:
          "Se vuoi contattarmi o hai domande, non esitare a mandarmi una email.",
        contactMeClickOne: "Cliccami ",
        contactMeClickTwo: " volte per mandarmi un'email.",
        goBack: "Torna su",
        notAvailable: "Non sono disponibile a lavorare per il momento",
      },
    },
  },
});

export default i18n;
