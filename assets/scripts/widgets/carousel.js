var carousel = require('tiny-slider').tns;

function Carousel(node){
    this.node = node;
    this.init();
}

Carousel.prototype.init = function(){

    // var slider = carousel({
    //     container: this.node,
    //     items: 6,
    //     slideBy: 'page',
    //     autoplay: true
    //   });

}

module.exports = Carousel;
