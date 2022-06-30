import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import vi from './vi';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources: {vi},
    lng: 'vi',
    defaultNS: 'app',
    fallbackNS: 'default',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
