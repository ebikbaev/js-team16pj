import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// Додаємо обробник подій для всіх кнопок з питаннями
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = answer.style.display === 'block';

        // Закриваємо всі відповіді
        document.querySelectorAll('.faq-answer').forEach(answer => {
            answer.style.display = 'none';
        });

        // Відкриваємо поточну відповідь, якщо вона була закрита
        if (!isActive) {
            answer.style.display = 'block';
        }
    });
});

// Додаємо обробник подій для всіх кнопок зі стрілочками
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Зупиняємо розповсюдження події

        const answer = button.parentElement.nextElementSibling;
        const isActive = answer.style.display === 'block';

        // Закриваємо всі відповіді
        document.querySelectorAll('.faq-answer').forEach(answer => {
            answer.style.display = 'none';
        });

        // Відкриваємо поточну відповідь, якщо вона була закрита
        if (!isActive) {
            answer.style.display = 'block';
        }
    });
});


