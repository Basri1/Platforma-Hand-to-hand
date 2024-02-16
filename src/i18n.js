import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "WelcomeMessage": "Welcome to our platform",
            "FormTitle": "Contact Us",
            // Add more key-value pairs for your English translations
        }
    },
    fr: {
        translation: {
            "WelcomeMessage": "Bienvenue sur notre plateforme",
            "FormTitle": "Contactez-nous",
            // Add more key-value pairs for your French translations
        }
    },
    // Add more languages here
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
    resources,
    lng: "en", // language to use, more languages can be added to resources
    interpolation: {
      escapeValue: false // React already safes from xss
    }
    });

export default i18n;

