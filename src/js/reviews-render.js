'use strict';

function reviewTemplate(reviews) {
  return `<li class="swiper-slide reviewers-card">
            <img src="${reviews.avatar_url}" alt="" class="reviews-image">
            <h3 class="reviewer-name">${reviews.author}</h3>
            <p class="reviewer-text">${reviews.review}</p>
          </li>`;
}

export function reviewsTemplate(arr) {
  return arr.map(reviewTemplate).join('');
}
