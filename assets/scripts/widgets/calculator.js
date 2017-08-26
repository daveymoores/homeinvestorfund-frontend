var rangeSlider = require("rangeslider-pure");

function Calculator(node){
    this.node = node;

    this.setVars();
    this.init();
}

Calculator.prototype.setVars = function(){
    this.CLASSES = {
        states : {},
        selectors : {
            'calcUnit' : '.calculator__amount--unit',
            'calcSlider' : '.calculator--slider'
        }
    }
}

Calculator.prototype.init = function(){
    this.calcUnit = this.node.querySelector(this.CLASSES.selectors.calcUnit);
    this.calcSlider = this.node.querySelector(this.CLASSES.selectors.calcSlider);

    this.setSlider();
}

Calculator.prototype.setSlider = function(){
    var cxt = this;

    rangeSlider.create(this.calcSlider, {
        polyfill: true,     // Boolean, if true, custom markup will be created
        rangeClass: 'rangeSlider',
        disabledClass: 'rangeSlider--disabled',
        fillClass: 'rangeSlider__fill',
        bufferClass: 'rangeSlider__buffer',
        handleClass: 'rangeSlider__handle',
        startEvent: ['mousedown', 'touchstart', 'pointerdown'],
        moveEvent: ['mousemove', 'touchmove', 'pointermove'],
        endEvent: ['mouseup', 'touchend', 'pointerup'],
        vertical: false,    // Boolean, if true slider will be displayed in vertical orientation
        min: 100,          // Number , 0
        max: 150000,          // Number, 100
        step: 100,         // Number, 1
        value: 25000,        // Number, center of slider
        buffer: null,       // Number, in percent, 0 by default
        stick: null,        // [Number stickTo, Number stickRadius] : use it if handle should stick to stickTo-th value in stickRadius
        borderRadius: 10,    // Number, if you use buffer + border-radius in css for looks good,
        onInit: function () {
            console.info('onInit')
        },
        onSlideStart: function (position, value) {
            console.info('onSlideStart', 'position: ' + position, 'value: ' + value);
        },
        onSlide: function (position, value) {
            console.log('onSlide', 'position: ' + position, 'value: ' + value);
            cxt.calcUnit.innerText = position.toLocaleString();
        },
        onSlideEnd: function (position, value) {
            console.warn('onSlideEnd', 'position: ' + position, 'value: ' + value);
        }
    });
}

module.exports = Calculator;
