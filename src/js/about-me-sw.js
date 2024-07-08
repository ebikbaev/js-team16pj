import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperAboutMe = new Swiper('.swiper-container', {
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 6,
        },
    },
    loop: true,
    speed: 500,
    navigation: {
        nextEl: '.swiper-button-next',
    },
});

