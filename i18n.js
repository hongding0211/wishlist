import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonCn from './public/locales/cn/common.json'
import loginCn from './public/locales/cn/login.json'
import commonEn from './public/locales/en/common.json'
import loginEn from './public/locales/en/login.json'
import getLocales from './utils/locales'

const locales = getLocales()

const resources = {
  cn: {
    common: commonCn,
    login: loginCn,
  },
  en: {
    common: commonEn,
    login: loginEn,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: locales,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
