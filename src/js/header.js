document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.header-menu-btn');
  const menu = document.querySelector('.header-list-navigation');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('visible');
    });
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      menu.classList.toggle('visible');
    });
  }

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      menu.classList.remove('visible');
    });
  });

  const orderBtn = document.querySelector('.header-link-btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', function() {
      const workTogetherSection = document.querySelector('#work-together');
      if (workTogetherSection) {
        workTogetherSection.scrollIntoView({ behavior: 'smooth' });
        menu.classList.remove('visible');
      }
    });
  }
});

  
