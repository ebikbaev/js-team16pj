import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const nextButton = document.querySelector('.button-next');
const prevButton = document.querySelector('.button-prev');

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  speed: 1000,

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
