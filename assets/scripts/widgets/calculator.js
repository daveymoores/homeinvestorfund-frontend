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
    this.getRate();
}

Calculator.prototype.handleInput = function(e){
    var plainValue = e.currentTarget.innerText;
    //var plainValue = value.replace(/\,/g,'');
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

    this.get('https://staging-datafeeds.feprecisionplus.com/api/SeriesData/hearthstone/a123f344-408c-e904-615d-49d0df97bfea/yearly/dayend?InstrumentTypes=B&span=70&seriestypes=2&benchmarkcodes=BM5G&basevalue=raw').then(function(fund) {

        var data = fund.HistoryData[0].Instrument[0].SeriesList[0].SeriesData;
        var data = data.slice(Math.max(data.length - 5, 1));
        cxt.fundRate = cxt.calculateRate(data);
        console.log(cxt.fundRate);

    }, function(error) {
      console.error("Failed!", error);
    });

    this.get('https://staging-datafeeds.feprecisionplus.com/api/SeriesData/hearthstone/a123f344-408c-e904-615d-49d0df97bfea/yearly/dayend?InstrumentTypes=F&span=70&seriestypes=2&citicodes=112G&basevalue=raw').then(function(fe_proxy) {

        var data = fe_proxy.HistoryData[0].Instrument[0].SeriesList[0].SeriesData;
        var data = data.slice(Math.max(data.length - 5, 1));
        cxt.feproxyRate = cxt.calculateRate(data);
        console.log(cxt.feproxyRate);

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

    console.log(storeArray);
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
