var Swiper = require('swiper');

function FaqCarousel(node){
    this.node = node;
    this.init();
}

FaqCarousel.prototype.init = function(){

    var ww = window.innerWidth;
    var slider = this.node;
    var dot_count         = slider.querySelectorAll('.js_slide').length;
    var dot_container     = slider.querySelector('.js_dots');
    var dot_list_item     = document.createElement('li');

    var swiper = new Swiper(slider, {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      pagination: {
         el: '.swiper-pagination',
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        998: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });

}

module.exports = FaqCarousel;
