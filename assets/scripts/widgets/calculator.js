var Promise = require('promise');
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
            'calcFundRate' : '.calculator__fund-rate',
            'calcAnnualisedRates' : '.calculator--rates'
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
    this.calcAnnualisedRates = this.node.querySelector(this.CLASSES.selectors.calcAnnualisedRates);

    this.calcUnit.addEventListener('keyup', this.handleInput.bind(this));

    this.setSlider();
    this.getRate();
}

Calculator.prototype.handleInput = function(e){
    var plainValue = e.currentTarget.innerText;
    var plainValueLength = plainValue.length;

    if(parseInt(plainValue) > 150000) {
        plainValue = 150000;
        this.calcUnit.innerText = '150000';
    }

    if(plainValueLength > 6) {
        plainValue = 150000;
        this.calcUnit.innerText = '150000';
    }

    this.calcInput.noUiSlider.set([0, plainValue]);
    this.calcStandardRate.innerText = this.calcInterest(plainValue)[0];
    this.calcFundRate.innerText = this.calcInterest(plainValue)[1];
}

Calculator.prototype.getRate = function(){
    var cxt = this;
    var fundDomElement = document.getElementById('fund-rate');
    var feProxyDomElement = document.getElementById('fe_proxy-rate');
    var feesDomElement = document.getElementById('fees-rate');
    var rateLi = this.calcAnnualisedRates.querySelectorAll('li');

    //create loader
    var loader = document.createElement('span');
    loader.classList.add('spinner');
    this.node.appendChild(loader);

    this.get('https://staging-datafeeds.feprecisionplus.com/api/funddata/Hearthstone/a123f344-408c-e904-615d-49d0df97bfea?citicodes=I3HM').then(function(fund) {

        var fundRate = fund[0].Cumulative5y_DE;
        var feesRate = fund[0].OngoingCharge;
        fundDomElement.innerText = fundRate+'%'; //set fund cumulative rate
        feesDomElement.innerText = feesRate+'%';

        var fundRate,
            year,
            data,
            i;

        for(i=0; i<5; i++) {
            year = new Date().getFullYear() - i;
            fundRate = fund[0]['Annualised'+(5-i)+'y_DE'];
            data = [year, fundRate];

            var spans = rateLi[i+1].querySelectorAll('span');
            [].forEach.call(spans, function(e, i, a){
                if(i==0){
                    e.innerText = data[i];
                } else {
                    e.innerText = data[i]+'%';
                }
            });

            if(i==4){
                cxt.node.classList.add('loaded');
                loader.style.display = 'none';
            }
        }

    }, function(error) {
      console.error("Failed!", error);
    });

    this.get('https://staging-datafeeds.feprecisionplus.com/api/instrumentdata/Hearthstone/a123f344-408c-e904-615d-49d0df97bfea?indexcodes=BM5G').then(function(fe_proxy) {

        var feProxyRate = fe_proxy[0].Cumulative5y_DE;
        feProxyDomElement.innerText = feProxyRate+'%';

    }, function(error) {
      console.error("Failed!", error);
    });

}

Calculator.prototype.calculateRate = function(values){
    var storeArray = [];
    var diffs = [];
    var previousYearVal;

    for(var i=0; i<5; i++) {
        storeArray.push(values[i].Value);
    }

    storeArray.map(function(yearVal) {
        if(previousYearVal){
            diffs.push( ((yearVal - previousYearVal) / yearVal) * 100 );
        }

        previousYearVal = yearVal;
    });

    var sum = diffs.reduce(add, 0);

    function add(a, b) {
        return a + b;
    }

    return sum;
}

Calculator.prototype.get = function(url) {

  return new Promise(function(resolve, reject) {

    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {

      if (req.status == 200) {
        resolve(JSON.parse(req.response));
      }
      else {
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    req.send();
  });
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

    this.calcInput.noUiSlider.on('slide', function(values, handle){
        cxt.calcUnit.innerText = Math.round(values[1]);
        cxt.calcStandardRate.innerText = cxt.calcInterest(values[1])[0];
        cxt.calcFundRate.innerText = cxt.calcInterest(values[1])[1];
    });

    cxt.calcStandardRate.innerText = cxt.calcInterest(25000)[0];
    cxt.calcFundRate.innerText = cxt.calcInterest(25000)[1];
}

Calculator.prototype.calcInterest = function(amount){
    var r = 1.8/100;
    var R = 35.73/100;
    var standardRate = Math.round(amount*(1 + (r * 5)));
    var fundRate = Math.round(amount*(1 + (R * 5)));
    return [standardRate.toLocaleString(), fundRate.toLocaleString()];
}

module.exports = Calculator;
