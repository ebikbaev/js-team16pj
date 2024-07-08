import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
    const accordion = new Accordion('.ac', {
      duration: 300,
      showMultiple: true,
      openOnInit: getInitialOpenIndexes()
    });

    function getInitialOpenIndexes() {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1440) {
        return [0, 1, 2, 3, 4, 5];
      } else {
        return [0, 1, 2];
      }
    }

    document.querySelectorAll('.toggle-button').forEach((button, index) => {
      button.addEventListener('click', () => {
        const svg = button.querySelector('svg');
        const isOpen = accordion.items[index].isOpen;
        svg.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      });
    });
  });












// Без АКОРДЕОНУ ТУТ ВСЕ ПРАЦЮЄ!
// function initialAnswerDisplay() {
//     const answers = document.querySelectorAll('.faq-answer');
//     const buttons = document.querySelectorAll('.toggle-button svg');

//     if (window.innerWidth >= 1440) { 
//         answers.forEach(answer => {
//             answer.style.display = 'block'; // Всі відповіді видимі ?????
//         });
//         buttons.forEach(svg => {
//             svg.style.transform = 'rotate(180deg)'; // Стрілки повернуті вгору ?????
//         });
//     } else if (window.innerWidth >= 768 && window.innerWidth < 1440) { // Для планшетів ?????
//         answers.forEach((answer, index) => {
//             if (index < 3) {
//                 answer.style.display = 'block'; // Перші три відповіді видимі ?????
//                 buttons[index].style.transform = 'rotate(180deg)'; // Стрілки повернуті вгору ?????
//             } else {
//                 answer.style.display = 'none'; // Інші відповіді не видимі ?????
//             }
//         });
//     } else { // Для мобільних пристроїв ?????
//         answers.forEach((answer, index) => {
//             if (index < 3) {
//                 answer.style.display = 'block'; // Перші три відповіді видимі ?????
//                 buttons[index].style.transform = 'rotate(180deg)'; // Стрілки повернуті вгору ?????
//             } else {
//                 answer.style.display = 'none'; // Інші відповіді не видимі ?????
//             }
//         });
//     }
// }

// // Викликаємо функцію при завантаженні сторінки
// window.addEventListener('load', initialAnswerDisplay); // ?????






