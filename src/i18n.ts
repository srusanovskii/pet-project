import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        Form: {
          "header": "Заголовок",
          "text": "Текст",
          "add": "Добавить"
        },
        EditTodo: {
          "new header": "Новый заголовок",
          "new text": "Новый текст",
          "change": "Изменить"
        },
        Title: {
          "number of tasks": "Число задач"
        },
        ToDo: {
          "ready": "Готово",
          "edit": "Редактировать",
          "delete": "Удалить"
        }
      },
      en: {
        Form: {
          "header": "Header",
          "text": "Text",
          "add": "Add"
        },
        EditTodo: {
          "new header": "New header",
          "new text": "New text",
          "change": "Change"
        },
        Title: {
          'number of tasks': "Number of tasks"
        },
        ToDo: {
          "ready": "Ready",
          "edit": "Edit",
          "delete": "Delete"
        }
      }
    },
    fallbackLng: 'ru',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });
export default i18n;