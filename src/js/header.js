document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const menuBtn = document.querySelector('.header-menu-btn');
  const desktopMenu = document.querySelector('.header-list-navigation');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list');
  const orderBtns = document.querySelectorAll('.header-link-btn, .mobile-menu-order-btn');

  // Helper function for smooth scrolling
  function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      console.error(`Element not found: ${target}`);
    }
  }

  // Desktop Menu Toggle
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      desktopMenu.classList.toggle('is-hidden');
    });
  }

  // Mobile Menu Open
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
    });
  }

  // Mobile Menu Close
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  }

  // Mobile Menu Link Click
  if (mobileMenuLinks) {
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Order Button Click
  if (orderBtns) {
    orderBtns.forEach(btn => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        smoothScroll('#work-together');
        if (btn.classList.contains('mobile-menu-order-btn')) {
          mobileMenu.classList.remove('open');
          mobileMenu.setAttribute('aria-hidden', 'true');
        }
      });
    });
  }
});
