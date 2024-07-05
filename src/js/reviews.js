"use strict"
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Axios from 'axios';
const gallery = document.querySelector('.swiper-reviews .swiper-wrapper');
// const nextButton = document.querySelector('.next-button');
// const prevButton = document.querySelector('.prev-button');



//  ============ render function==========
function reviewTemplate(reviews) {
  return `<li class="swiper-slide reviewers-card">
            <img src="${reviews.avatar_url}" alt="" class="reviews-image">
            <h3 class="reviewer-name">${reviews.author}</h3>
            <p class="reviewer-text">${reviews.review}</p>
          </li>`;
};

function reviewsTemplate(arr) {
  return arr.map(reviewTemplate).join('');
};

//  ============ API function==========
async function fetchData() {
  const res = await Axios.get('https://portfolio-js.b.goit.study/api/reviews');
  return res.data;
  
}


//  ============ main function==========
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetchData()
    const markup = reviewsTemplate(data)
    gallery.innerHTML = markup;

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
      roundLengths:'true',
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
  catch {
    gallery.innerHTML = `<p class = "alert">Not found</p>`;
  }
});



