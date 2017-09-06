var lory = require('lory.js').lory;

function Carousel(node){
    this.node = node;
    this.init();
}

Carousel.prototype.init = function(){

    var slider = this.node;
    var dot_count         = slider.querySelectorAll('.js_slide').length;
    var dot_container     = slider.querySelector('.js_dots');
    var dot_list_item     = document.createElement('li');

    function handleDotEvent(e) {
        if (e.type === 'before.lory.init') {
          for (var i = 0, len = dot_count; i < len; i++) {
            var clone = dot_list_item.cloneNode();
            dot_container.appendChild(clone);
          }
          dot_container.childNodes[0].classList.add('active');
        }
        if (e.type === 'after.lory.init') {
          for (var i = 0, len = dot_count; i < len; i++) {
            dot_container.childNodes[i].addEventListener('click', function(e) {
              dot_navigation_slider.slideTo(Array.prototype.indexOf.call(dot_container.childNodes, e.target));
            });
          }
        }
        if (e.type === 'after.lory.slide') {
          for (var i = 0, len = dot_container.childNodes.length; i < len; i++) {
            dot_container.childNodes[i].classList.remove('active');
          }
          dot_container.childNodes[e.detail.currentSlide - 1].classList.add('active');
        }
        if (e.type === 'on.lory.resize') {
            for (var i = 0, len = dot_container.childNodes.length; i < len; i++) {
                dot_container.childNodes[i].classList.remove('active');
            }
            dot_container.childNodes[0].classList.add('active');
        }
    }
    slider.addEventListener('before.lory.init', handleDotEvent);
    slider.addEventListener('after.lory.init', handleDotEvent);
    slider.addEventListener('after.lory.slide', handleDotEvent);
    slider.addEventListener('on.lory.resize', handleDotEvent);

    var dot_navigation_slider = lory(slider, {
        infinite: 3,
        enableMouseEvents: true
    });

}

module.exports = Carousel;
