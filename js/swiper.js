// const swiper = new Swiper('.swiper-container', {
//    // Optional parameters
//    direction: 'horizontal',
//    loop: true,

//    // Navigation arrows
//    navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//    },
//    scrollbar: {
//       el: '.swiper-scrollbar',
//    },
// });
const swiper = new Swiper('.swiper-container', {
   effect: 'flip',
   loop: true,
   flipEffect: {
      slideShadows: false,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});