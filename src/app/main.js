// Swiper.JS LOGIC

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 1500,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
    bulletClass: "swiper-pagination-bullet",
    bullletActiveClass: "swiper-pagination-bullet-active",
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});

const swiperEl = document.querySelector('.swiper');
const buttonEl = document.querySelector('.swiper');

buttonEl.addEventListener('click', () => {
  swiperEl.swiper.slideNext();
});

