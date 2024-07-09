import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.about-accordion-container', {
    duration: 500,
    openOnInit: [0],
});