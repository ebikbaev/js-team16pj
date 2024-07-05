'use strict';

import { swiperActivate } from './reviews-sw';
import { fetchData } from './reviews-api';
import { reviewsTemplate } from './reviews-render';
const gallery = document.querySelector('.swiper-reviews .swiper-wrapper');
// const nextButton = document.querySelector('.next-button');
// const prevButton = document.querySelector('.prev-button');

//  ============ main function==========
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetchData();
    const markup = reviewsTemplate(data);
    gallery.innerHTML = markup;
    swiperActivate();
  } catch {
    gallery.innerHTML = `<p class = "alert">Not found</p>`;
  }
});
