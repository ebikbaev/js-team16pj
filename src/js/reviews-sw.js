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
      nextEl: '.prev-button',
      prevEl: '.next-button',
    },
  });
}
