//var rangeSlider = require("rangeslider-pure");
var noUiSlider = require("nouislider");

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
    this.calcInput = this.calcSlider.querySelector('#slider');
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

    noUiSlider.create(this.calcInput, {
    	start: [ 0, 25000 ],
        connect: true,
        step: 100,
    	range: {
    		'min': [  100 ],
    		'max': [ 150000 ]
    	}
    });

    this.calcInput.noUiSlider.on('start', function(values, handle){
        console.log(values);
    });

    this.calcInput.noUiSlider.on('slide', function(values, handle){
        cxt.calcUnit.innerText = Math.round(values[1].toLocaleString());
        cxt.calcStandardRate.innerText = cxt.calcInterest(values[1])[0];
        cxt.calcFundRate.innerText = cxt.calcInterest(values[1])[1];
    });

    this.calcInput.noUiSlider.on('end', function(values, handle){
        console.log(values);
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
