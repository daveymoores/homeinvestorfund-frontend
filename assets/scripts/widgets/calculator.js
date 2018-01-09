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
    this.calcInput = this.calcSlider.querySelector('input');
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

    rangeSlider.create(this.calcInput, {
        polyfill: true,
        rangeClass: 'rangeSlider',
        disabledClass: 'rangeSlider--disabled',
        fillClass: 'rangeSlider__fill',
        bufferClass: 'rangeSlider__buffer',
        handleClass: 'rangeSlider__handle',
        startEvent: ['mousedown', 'touchstart', 'pointerdown'],
        moveEvent: ['mousemove', 'touchmove', 'pointermove'],
        endEvent: ['mouseup', 'touchend', 'pointerup'],
        vertical: false,
        min: 100,
        max: 150000,
        step: 100,
        value: 25000,
        buffer: null,
        stick: null,
        borderRadius: 10,
        onInit: function () {
            //console.info('onInit');
        },
        onSlideStart: function (position, value) {
            //console.info('onSlideStart', 'position: ' + position, 'value: ' + value);
        },
        onSlide: function (position, value) {
            //console.log('onSlide', 'position: ' + position, 'value: ' + value);
            cxt.calcUnit.innerText = position;
            cxt.calcStandardRate.innerText = cxt.calcInterest(position)[0];
            cxt.calcFundRate.innerText = cxt.calcInterest(position)[1];
        },
        onSlideEnd: function (position, value) {
            //console.warn('onSlideEnd', 'position: ' + position, 'value: ' + value);
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
