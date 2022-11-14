import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector';


import {EN_ALL} from "./en/EN_main"
import {FR_ALL} from "./fr/FR_main"
i18n
.use(initReactI18next)
.use(LanguageDetector)
.init({
    debug:true,
    lng:'en',
    fallbackLng:'en',
    resources:{
        en:{
            translation: EN_ALL
        },
        fr:{
            translation: FR_ALL
        }
    },
    interpolation:{
        escapeValue:true
    }
})
i18n.changeLanguage('fr')
export default i18n


