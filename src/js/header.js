document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.header-menu-btn');
  const desktopMenu = document.querySelector('.header-list-navigation');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list');
  
  const orderBtns = document.querySelectorAll('.header-link-btn, .mobile-menu-order-btn');



  function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      console.log(`Scrolling to ${target}`);
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      console.error(`Element not found: ${target}`);
    }
  }

  
  if (menuBtn && desktopMenu) {
    menuBtn.addEventListener('click', () => {
      console.log('Menu button clicked');
      desktopMenu.classList.toggle('visually-hidden');
      desktopMenu.classList.toggle('is-hidden');
      console.log('desktopMenu classList after toggle:', desktopMenu.classList);
    });
  }

  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      console.log('Mobile menu button clicked');
      mobileMenu.classList.add('open');
      console.log('mobileMenu classList after adding open:', mobileMenu.classList);
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      console.log('Mobile menu close button clicked');
      mobileMenu.classList.remove('open');
      console.log('mobileMenu classList after removing open:', mobileMenu.classList);
    });
  }

  if (mobileMenu) {
    mobileMenu.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        console.log('Mobile menu link clicked');
        mobileMenu.classList.remove('open');
        console.log('mobileMenu classList after removing open:', mobileMenu.classList);
      }
    });
  }


  
  if (orderBtns) {
    orderBtns.forEach(btn => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Order button clicked:', btn);
        smoothScroll('#work-together');
        if (btn.classList.contains('mobile-menu-order-btn') && mobileMenu) {
          mobileMenu.classList.remove('open');
          mobileMenu.setAttribute('aria-hidden', 'true');
          console.log('mobileMenu classList after order button click:', mobileMenu.classList);
        }
      });
    });
  }
});
