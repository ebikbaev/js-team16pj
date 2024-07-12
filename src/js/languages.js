import en from '../languages/en.json';
import ua from '../languages/ua.json';

export function saveLanguageCode(langugageCode) {
    localStorage.setItem('language', langugageCode)
}
export function getLanguageCode() {
     return localStorage.getItem('language') || 'en'
}
  
export function loadTranslations(lang) {
  return lang == "ua" ? ua : en;
}
  
export function translatePage(translations) {
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (element.tagName === 'INPUT' && element.placeholder === 'comments') {
      element.placeholder = translations[key] || element.placeholder;
    } else {
      element.innerHTML = translations[key] || element.textContent;
    }
  });
}