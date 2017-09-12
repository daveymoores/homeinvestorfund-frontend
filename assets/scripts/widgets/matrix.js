var Isotope = require('isotope-layout');
var Promise = require('promise');


function Matrix(node){
    this.node = node;
    this.setVars();
    this.init();
}

Matrix.prototype.setVars = function(){
    this.css = {
        states : {
            'init' : 'init',
            'active' : 'active',
            'disabled' : 'disabled',
            'dblWidth' : 'grid-item--width2'
        },
        selectors : {
            'grid' : '.grid',
            'newsNavigation' : '.grid--navigation',
            'btn' : '.btn__primary--teal',
            'gridMatrix' : '.grid--matrix',
            'gridItem' : '.grid-item'
        }
    }
}


Matrix.prototype.init = function(){
    this.elem = this.node.querySelector(this.css.selectors.grid);
    this.navigation = this.node.querySelector(this.css.selectors.newsNavigation);
    this.navAnchor = this.navigation.querySelectorAll('a');
    this.btn = this.node.querySelector(this.css.selectors.btn);
    this.gridMatrix = this.node.querySelector(this.css.selectors.gridMatrix);
    this.gridItem = this.node.querySelectorAll(this.css.selectors.gridItem);

    var cxt = this;

    //check whether it already contains properties and has initialised
    if(!this.node.classList.contains(cxt.css.states.init)) {
        cxt.get('json/news.json').then(function(news) {
            for (var i = 0; i < news.length; i++) {
                if(i < 12) {
                    cxt.buildNewsItem(news[i], news[i].img, news[i].date, news[i].title, news[i].url, news[i].cat);
                }
                cxt.setClassNames(); // set class names
                cxt.setGrid();
            }
           cxt.node.classList.add(cxt.css.states.init);
        }, function(error) {
          console.error("Failed!", error);
        });
    }


    [].forEach.call(this.navAnchor, function(element, index, array){
        element.addEventListener('click', function(e){
            e.preventDefault();
            var active = cxt.navigation.querySelector('.'+cxt.css.states.active);
            active.classList.remove(cxt.css.states.active);
            e.currentTarget.parentNode.classList.add(cxt.css.states.active);
            var filterValue = e.currentTarget.getAttribute('data-filter');
            cxt.iso.arrange({filter: filterValue});
        });
    });

    this.btn.addEventListener('click', this.loadData.bind(this));
}


Matrix.prototype.loadData = function(e){
    //load more button functionality
    // NOTE: move json out into seperate method
    var cxt = this;
    e.preventDefault();

    this.gridItem = this.node.querySelectorAll(this.css.selectors.gridItem);

    if(!e.currentTarget.classList.contains(cxt.css.states.disabled)) {

        cxt.get('json/news.json').then(function(news) {

            var newsMax = news.length; //max number of locations
            var panelsMax = cxt.gridItem.length;
            var num2Load = 3;

            console.log(newsMax, panelsMax);

            if(newsMax <= (panelsMax+num2Load)) {
                cxt.btn.classList.add(cxt.css.states.disabled);
                for (i = panelsMax; i < (panelsMax+num2Load); i++) {
                    cxt.buildNewsItem(news[i], news[i].img, news[i].date, news[i].title, news[i].url, news[i].cat);
                }
                cxt.setClassNames(); // set class names
                cxt.iso.layout(); //reset layout
            } else {
                for (i = panelsMax; i < (panelsMax+num2Load); i++) {
                    cxt.buildNewsItem(news[i], news[i].img, news[i].date, news[i].title, news[i].url, news[i].cat);
                }
                cxt.setClassNames(); // set class names
                cxt.iso.layout(); //reset layout
            }

        }, function(error) {
          console.error("Failed!", error);
        });

    }

}


Matrix.prototype.setClassNames = function(e){
    var cxt = this;
    var arr = [];
    var k = 0;

    this.gridItem = this.node.querySelectorAll(this.css.selectors.gridItem);

    [].forEach.call(this.gridItem, function(element, index, array){
        var l = arr.length;

        if(l == 0 || l == 5) {
            element.classList.add(cxt.css.states.dblWidth);
        } else if(l == 6) {
            element.classList.add(cxt.css.states.dblWidth);
            arr = [];
            k = 0;
        }
        //console.log(arr);
        arr.push(k);
        k++;
    });
}

Matrix.prototype.setGrid = function(e){
    this.iso = new Isotope( this.elem, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });
}


Matrix.prototype.buildNewsItem = function(data, img, date, title, url, cat) {

    var parent = document.createElement('div');
    var content = document.createElement('div');
    var a = document.createElement('a');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');

    a.innerText = title;
    a.setAttribute('href', url);
    p2.innerText = date;
    console.log(img);
    parent.classList.add('grid-item');
    parent.classList.add(cat);
    content.classList.add('grid-item__content');
    content.style.backgroundImage = "url('"+img+"')";
    p1.classList.add('grid-item__content--title');
    p2.classList.add('grid-item__content--date');
    parent.appendChild(content);
    content.appendChild(p1);
    content.appendChild(p2);
    p1.appendChild(a);

    if(this.node.classList.contains(this.css.states.init)) {
        this.iso.insert(parent);
    } else {
        this.gridMatrix.appendChild(parent);
    }
}


Matrix.prototype.get = function(url) {

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

module.exports = Matrix;
