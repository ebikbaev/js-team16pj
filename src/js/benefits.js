const orderBtnEl = document.querySelector('.benefits-order-btn');
const targetElement = document.querySelector('#work-together');

orderBtnEl.addEventListener('click', (evt) => {
    evt.preventDefault();
    
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
});