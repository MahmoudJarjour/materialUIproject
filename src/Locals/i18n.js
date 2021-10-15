import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en/trsnslationEN.json';
import translationAR from './ar/translationAR.json';




// the translations
// (tip move them in a JSON file and import them)
const resources = {
	en: { translation: translationEN },
	ar: { translation: translationAR},
};

i18n

	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources:resources,
		lang:'en',
        fallbackLng:'en', 
        
		keySeparator: '.', // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

    
export default i18n;
