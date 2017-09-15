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
            'calcSlider' : '.calculator--slider',
            'calcStandardRate' : '.calculator__standard-rate',
            'calcFundRate' : '.calculator__fund-rate'
        }
    }
}

Calculator.prototype.init = function(){
    var cxt = this;
    this.calcUnit = this.node.querySelector(this.CLASSES.selectors.calcUnit);
    this.calcSlider = this.node.querySelector(this.CLASSES.selectors.calcSlider);
    this.calcStandardRate = this.node.querySelector(this.CLASSES.selectors.calcStandardRate);
    this.calcFundRate = this.node.querySelector(this.CLASSES.selectors.calcFundRate);

    this.calcUnit.addEventListener('keyup', this.handleInput.bind(this));
    
    this.setSlider();
}

Calculator.prototype.handleInput = function(e){
    var value = e.currentTarget.innerText;
    var plainValue = value.replace(/\,/g,'');

    this.calcSlider.rangeSlider.update({value : plainValue});
    this.calcStandardRate.innerText = this.calcInterest(plainValue)[0];
    this.calcFundRate.innerText = this.calcInterest(plainValue)[1];
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
            console.info('onInit');
        },
        onSlideStart: function (position, value) {
            console.info('onSlideStart', 'position: ' + position, 'value: ' + value);
        },
        onSlide: function (position, value) {
            console.log('onSlide', 'position: ' + position, 'value: ' + value);
            cxt.calcUnit.innerText = position;
            cxt.calcStandardRate.innerText = cxt.calcInterest(position)[0];
            cxt.calcFundRate.innerText = cxt.calcInterest(position)[1];
        },
        onSlideEnd: function (position, value) {
            console.warn('onSlideEnd', 'position: ' + position, 'value: ' + value);
        }
    });
}

Calculator.prototype.calcInterest = function(amount){
    var r = 1.8/100;
    var R = 35.73/100;
    var standardRate = Math.round(amount*(1 + (r * 5)));
    var fundRate = Math.round(amount*(1 + (R * 5)));
    return [standardRate.toLocaleString(), fundRate.toLocaleString()];
}

module.exports = Calculator;
