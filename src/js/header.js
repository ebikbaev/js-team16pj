document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.header-menu-btn');
  const desktopMenu = document.querySelector('.header-list-navigation');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list');
  
  const orderBtns = document.querySelectorAll('.header-link-btn, .mobile-menu-order-btn');
  const body = document.querySelector('body');



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
      
      desktopMenu.classList.toggle('visually-hidden');
      desktopMenu.classList.toggle('is-hidden');
      
    });
  }

  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      
      mobileMenu.classList.add('open');
      body.classList.add('no-scroll')
      
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
      
      mobileMenu.classList.remove('open');
      body.classList.remove('no-scroll')
      
    });
  }

  if (mobileMenu) {
    mobileMenu.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        
        mobileMenu.classList.remove('open');
        body.classList.remove('no-scroll')
      }
    });
  }


  
  if (orderBtns) {
    orderBtns.forEach(btn => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        
        smoothScroll('#work-together');
        if (btn.classList.contains('mobile-menu-order-btn') && mobileMenu) {
          mobileMenu.classList.remove('open');
          mobileMenu.setAttribute('aria-hidden', 'true');
          
        }
      });
    });
  }
});
