import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const nextButton = document.querySelector('.button-right');
const prevButton = document.querySelector('.button-left');

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  speed: 1000,

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  on: {
    init: function () {
      classSwitcher(this);
    },
    slideChange: function () {
      classSwitcher(this);
    },
    reachEnd: function () {
      classSwitcher(this);
    },
    reachBeginning: function () {
      classSwitcher(this);
    },
  },
});

function classSwitcher(swiper) {
  if (swiper.isBeginning) {
    prevButton.classList.add('btn-off');
  } else {
    prevButton.classList.remove('btn-off');
  }

  if (swiper.isEnd) {
    nextButton.classList.add('btn-off');
  } else {
    nextButton.classList.remove('btn-off');
  }
}
