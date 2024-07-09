const refs = {
    backdrop: document.querySelector('.work-together-backdrop'),
    successTitle: document.querySelector('.success-title'),
    successText: document.querySelector('.success-message')
}

function renderSuccessMessage(title, message) {
    refs.successTitle.textContent = title;
    refs.successText.textContent = message;
}

export function showModalWindow(title, message) {
    refs.backdrop.classList.remove('hidden')
    renderSuccessMessage(title, message)
}

function hideModalWindow() {
    const closeBtn = document.querySelector('.close-btn');
    function closeModal() {
        refs.backdrop.classList.add('hidden');
    }
    closeBtn.addEventListener('click', closeModal);
    refs.backdrop.addEventListener('click', (event) => {
        if (event.target === refs.backdrop) {
            closeModal();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

hideModalWindow();