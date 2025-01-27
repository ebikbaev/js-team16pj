'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { swiperActivate } from './reviews-sw';
import { fetchData } from './reviews-api';
import { reviewsTemplate } from './reviews-render';
const gallery = document.querySelector('.swiper-reviews .swiper-wrapper');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');


//  ============ main function==========
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetchData();
    const markup = reviewsTemplate(data);
    gallery.innerHTML = markup;
    const slides = document.querySelectorAll('.swiper-slide.reviewers-card');
    slides.forEach(slide => {
      if (slide.scrollHeight > slide.clientHeight) {
        slide.classList.add('scrollable');
      }
    });

    swiperActivate();
    
  } catch (error) {
      iziToast.error({
        icon: false,
        theme: 'dark',
        color: '#ED3B44',
        position: 'topCenter',
        message: error.message,
        closeOnEscape: true,
        closeOnClick: true,
      });
    gallery.innerHTML = `<p class = "alert-reviews">Not found</p>`;
    const buttons = document.querySelectorAll('.reviews-button');
    buttons.forEach(button => (button.style.display = 'none'));
  }
});
