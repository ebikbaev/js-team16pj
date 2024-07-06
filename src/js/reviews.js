'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { swiperActivate } from './reviews-sw';
import { fetchData } from './reviews-api';
import { reviewsTemplate } from './reviews-render';
const gallery = document.querySelector('.swiper-reviews .swiper-wrapper');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

const iziToastOptions = {
  message: "We're sorry, server error.",
  messageColor: 'white',
  backgroundColor: '#3B3B3B33',
  maxWidth: '360px',
  position: 'bottomRight',
  theme: 'dark',
};


//  ============ main function==========
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetchData();
    const markup = reviewsTemplate(data);
    gallery.innerHTML = markup;
    swiperActivate();
    
  } catch {
    iziToast.info(iziToastOptions);
    gallery.innerHTML = `<p class = "alert">Not found</p>`;
  }
});
