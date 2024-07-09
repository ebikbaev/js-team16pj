import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.accordion-container', {
    duration: 250,
    openOnInit: [0],
});