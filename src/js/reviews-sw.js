'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function swiperActivate() {
  const swiper = new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 4,
      },
    },

    simulateTouch: 'true',
    roundLengths: 'true',
    keyboard: {
      enabled: true,
    },
    // mousewheel: {
    //   invert: false,
    // },
    navigation: {
      nextEl: '.next-button',
      prevEl: '.prev-button',
    },
    on: {
      init: function () {
        updateNavigationButtons(this);
      },
      slideChange: function () {
        updateNavigationButtons(this);
      },
      reachEnd: function () {
        updateNavigationButtons(this);
      },
      reachBeginning: function () {
        updateNavigationButtons(this);
      },
    },
  });

  function updateNavigationButtons(swiper) {
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    if (swiper.isBeginning) {
      prevButton.classList.add('button-inactive');
    } else {
      prevButton.classList.remove('button-inactive');
    }

    if (swiper.isEnd) {
      nextButton.classList.add('button-inactive');
    } else {
      nextButton.classList.remove('button-inactive');
    }
  }
}
