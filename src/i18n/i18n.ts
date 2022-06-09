import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const ru = require('./ru.json')
const en = require('./en.json')

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        ru: {
          ru
        },
        en: {
          en
        },
      },
      fallbackLng: 'ru',
      debug: true,

      interpolation: {
        escapeValue: false,
      }
    });

export default i18n;