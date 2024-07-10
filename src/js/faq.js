import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
new Accordion('.accordion-container');

document.addEventListener('DOMContentLoaded', () => {
    const accordion = new Accordion('.accordion-container', {
        duration: 300,
        showMultiple: false,
        elementClass: 'ac',
        triggerClass: 'ac-header',
        panelClass: 'ac-panel',
        activeClass: 'active'
    });

    // Додаємо обробник кліків для SVG
    document.querySelectorAll('.ac-trigger').forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.stopPropagation();
            const parentItem = this.closest('.list-item');
            if (parentItem.classList.contains('active')) {
                parentItem.classList.remove('active');
            } else {
                document.querySelectorAll('.list-item.active').forEach(item => item.classList.remove('active'));
                parentItem.classList.add('active');
            }
        });
    });
});