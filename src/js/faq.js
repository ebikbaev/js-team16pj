import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// document.querySelectorAll('.faq-question').forEach(question => {
//     question.addEventListener('click', () => {
//         const answer = question.nextElementSibling;
//         const isActive = answer.style.display === 'block';

        
//         document.querySelectorAll('.faq-answer').forEach(answer => {
//             answer.style.display = 'none';
//         });

        
//         document.querySelectorAll('.toggle-button svg').forEach(svg => {
//             svg.style.transform = 'rotate(0deg)'; // ?????
//         });

        
//         if (!isActive) {
//             answer.style.display = 'block';
            
//             question.querySelector('.toggle-button svg').style.transform = 'rotate(180deg)'; // ?????
//         }
//     });
// });


// document.querySelectorAll('.toggle-button').forEach(button => {
//     button.addEventListener('click', (e) => {
//         e.stopPropagation(); 

//         const answer = button.parentElement.nextElementSibling;
//         const isActive = answer.style.display === 'block';

       
//         document.querySelectorAll('.faq-answer').forEach(answer => {
//             answer.style.display = 'none';
//         });

        
//         document.querySelectorAll('.toggle-button svg').forEach(svg => {
//             svg.style.transform = 'rotate(0deg)'; // ?????
//         });

        
//         if (!isActive) {
//             answer.style.display = 'block';
            
//             button.querySelector('svg').style.transform = 'rotate(180deg)'; // ?????
//         }
//     });
// });


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







// document.addEventListener('DOMContentLoaded', function () {
//     var faqAccordion = new Accordion(document.getElementById('faqAccordion'), {
//         duration: 400, // Налаштування тривалості анімації в мілісекундах
//         showItem: function(item) {
//             // Перевіряємо ширину вікна для відповідної настройки
//             if (window.innerWidth >= 1440) {
//                 return true; // Показуємо всі елементи на десктопі
//             } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
//                 return item.index < 3; // Показуємо перші три елементи на планшеті
//             } else {
//                 return item.index < 3; // Показуємо перші три елементи на мобільному
//             }
//         },
// collapseOthers: true, // Закриваємо інші елементи, коли відкриваємо новий
//                 onChange: function(item) {
//                     // Оновлюємо вигляд стрілок при згортанні і розгортанні відповідей
//                     var arrow = item.button.querySelector('svg');
//                     if (item.isExpanded) {
//                         arrow.style.transform = 'rotate(180deg)'; // Стрілка вгору, коли відповідь відкрита
//                     } else {
//                         arrow.style.transform = 'rotate(0deg)'; // Стрілка вниз, коли відповідь закрита
//                     }
//                 }
//             });
//         });
