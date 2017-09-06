var lory = require('lory.js').lory;

function Carousel(node){
    this.node = node;
    this.init();
}

Carousel.prototype.init = function(){

    var slider = this.node;

    lory(slider, {
        infinite: 3,
        enableMouseEvents: true
    });

}

module.exports = Carousel;
