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
    this.fundRate;
    this.feProxyRate;

    //create loader
    var loader = document.createElement('span');
    loader.classList.add('spinner');
    this.node.appendChild(loader);

    this.get('https://staging-datafeeds.feprecisionplus.com/api/funddata/Hearthstone/a123f344-408c-e904-615d-49d0df97bfea?citicodes=I3HM').then(function(fund) {

        cxt.fundRate = fund[0].Cumulative5y_DE;
        var feesRate = fund[0].OngoingCharge;
        fundDomElement.innerText = cxt.fundRate+'%'; //set fund cumulative rate
        feesDomElement.innerText = feesRate+'%';

        var rate,
            year,
            data,
            i;

        //get Date
        var todaysDate = new Date(),
            todaysDateFormatted = todaysDate.toISOString().substring(0, 10),
            dateWindows = [
                {
                    "dateStart" : "01-01",
                    "dateEnd"   : "03-31"
                },
                {
                    "dateStart" : "04-01",
                    "dateEnd"   : "06-30"
                },
                {
                    "dateStart" : "07-01",
                    "dateEnd"   : "09-30"
                },
                {
                    "dateStart" : "10-01",
                    "dateEnd"   : "12-31"
                }
            ];

        function dateCheck(tdf, dw){
            var startDateFormat,
                EndDateFormat,
                todaysDateFormatted,
                from,
                to,
                today,
                year = new Date().getFullYear(),
                yearFormat = year.toString().slice(-2);

            for(var i=0; i<4; i++) {
                //split them for parsing
                startDateFormat = dw[i].dateStart.split("-");
                EndDateFormat = dw[i].dateEnd.split("-");
                todaysDateFormatted = tdf.split("-")
                //parse dates

                from = new Date(year, parseInt(startDateFormat[0])-1, startDateFormat[1]);
                to   = new Date(year, parseInt(EndDateFormat[0])-1, EndDateFormat[1]);
                today = new Date(todaysDateFormatted[0], parseInt(todaysDateFormatted[1])-1, todaysDateFormatted[2]);

                if(today >= from && today < to){
                    switch (i) {
                        case 0:
                            return ['Dec', yearFormat];
                            break;
                        case 1:
                            return ['Mar', yearFormat];
                            break;
                        case 2:
                            return ['Jun', yearFormat];
                            break;
                        case 3:
                            return ['Sep', yearFormat];
                            break;
                    }
                }
            }
        }

        var dateVars = dateCheck(todaysDateFormatted, dateWindows);


        for(i=0; i<5; i++) {
            if(dateVars[0] == 'Dec') {
                year = new Date().getFullYear() - (i+1);
            } else {
                year = new Date().getFullYear() - i;
            }

            yearMonth = dateVars[0] + ' ' + year.toString().slice(-2);
            rate = fund[0]['Annualised'+(5-i)+'y_DE'];
            data = [yearMonth, rate];

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

        cxt.setSlider();

    }, function(error) {
      console.error("Failed!", error);
    });

    this.get('https://staging-datafeeds.feprecisionplus.com/api/instrumentdata/Hearthstone/a123f344-408c-e904-615d-49d0df97bfea?indexcodes=BM5G').then(function(fe_proxy) {

        cxt.feProxyRate = fe_proxy[0].Cumulative5y_DE;
        feProxyDomElement.innerText = cxt.feProxyRate+'%';

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
        behaviour: 'drag',
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
    var r = this.feProxyRate/100;
    var R = this.fundRate/100;
    var standardRate = Math.round(amount*(1 + (r * 5)));
    var fundRate = Math.round(amount*(1 + (R * 5)));
    return [standardRate.toLocaleString(), fundRate.toLocaleString()];
}

module.exports = Calculator;
