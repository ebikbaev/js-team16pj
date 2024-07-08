import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

ocument.addEventListener('DOMContentLoaded', function () {
    const accordions = Array.from(document.querySelectorAll('.ac'));
    new Accordion(accordions, {
        duration: 400,
        showMultiple: true,
        onOpen: function (currentElement) {
            console.log(currentElement);
            currentElement.classList.add('ac-item--active');
        },
        onClose: function (currentElement) {
            currentElement.classList.remove('ac-item--active');
        }
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






