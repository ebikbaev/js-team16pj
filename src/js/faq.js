import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
    const accordion = new Accordion('.accordion-container', {
        duration: 300, // Тривалість анімації
        showMultiple: true, // Дозволяємо відкривати декілька елементів одночасно
        openOnInit: getInitialOpenIndexes() // Визначаємо початковий стан
    });

    // Функція для визначення початкового стану акордеону
    function getInitialOpenIndexes() {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 1440) {
            return [0, 1, 2, 3, 4, 5]; // Відкриваємо всі відповіді на десктопах
        } else {
            return [0, 1, 2]; // Відкриваємо три перші відповіді на планшетах і мобільних
        }
    }

    //  для зміни стану стрілок
    document.querySelectorAll('.toggle-button').forEach((button, index) => {
        button.addEventListener('click', () => {
            const svg = button.querySelector('svg');
            const isOpen = accordion.items[index].isOpen;
            svg.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    });
});












// Без АКОРДЕОНУ
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






