var Swiper = require('swiper');

function Carousel(node){
    this.node = node;
    this.init();
}

Carousel.prototype.init = function(){
    var cxt = this;
    this.ww = window.innerWidth;
    this.slider = this.node;
    this.parent = this.slider.parentNode;
    this.parent.classList.add('swiper-initialised');
    this.slides = this.node.querySelectorAll('.swiper-slide');

    this.swiper = new Swiper(this.slider, {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
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

    this.buildCarousel();

    window.addEventListener('resize', function(){
        var w = window.innerWidth;
        cxt.buildCarousel(w);
    });
}

Carousel.prototype.buildCarousel = function(ww){
    ww = typeof ww !== 'undefined' ? ww : this.ww;

    var ll = this.slides.length;
    console.log(ll);

    if(ww < 998) {
        if(ll > 2) {
            this.swiper.init();
        }
    } else if(ww < 500) {
        if(ll > 1) {
            this.swiper.init();
        }
    } else {
        if(ll > 3) {
            this.swiper.init();
        }
    }

}

module.exports = Carousel;
