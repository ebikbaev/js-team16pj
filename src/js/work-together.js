import { addRequestCooperation } from './requests-api';
import * as modal from './modal-window';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const refs = {
    form: document.querySelector('#work-together-form'),
    emailContainer: document.querySelector('#email-container'),
    email: document.querySelector('#email'),
}

refs.form.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const email = ev.target.elements['email'].value.trim();
    const comment = ev.target.elements['comment'].value.trim();

    try {
        const response = await addRequestCooperation(email, comment);
        refs.form.reset();
        // modal.showModalWindow(response.title, response.message);
        modal.showModalWindow();
        refs.emailContainer.classList.remove('success');
    } catch (error) {
        iziToast.error({
            icon:false,
            theme: 'dark',
            color: '#ED3B44',
            position: 'topCenter',
            message: error.message,
            closeOnEscape:true,
            closeOnClick:true
        });
    }
});

refs.email.addEventListener('blur', () => {
    if (refs.email.value.trim() !== '') {
        if (refs.email.checkValidity()) {
            refs.emailContainer.classList.add('success');
            refs.emailContainer.classList.remove('invalid');
        } else {
            refs.emailContainer.classList.add('invalid');
            refs.emailContainer.classList.remove('success');
        }
    } else {
        refs.emailContainer.classList.remove('success');
        refs.emailContainer.classList.remove('invalid');
    }
});