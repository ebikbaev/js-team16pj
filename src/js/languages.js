export function saveLanguageCode(langugageCode) {
    localStorage.setItem('language', langugageCode)
}

export function getLanguageCode() {
     return localStorage.getItem('language') || 'en'
}
  
export function loadTranslations(lang) {
  return fetch(`./languages/${lang}.json`)
    .then(response => response.json())
    .catch(error => console.error('Error loading translations:', error));
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