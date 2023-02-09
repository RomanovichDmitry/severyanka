
import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
  });

  const swiperArt = new Swiper('.swiper-art', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
  });