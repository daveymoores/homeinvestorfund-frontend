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
            'active' : 'active',
            'disabled' : 'disabled'
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

    this.iso = new Isotope( cxt.elem, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });

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

    cxt.get('json/news.json').then(function(news) {

        var newsMax = news.length; //max number of locations
        var panelsMax = cxt.gridItem.length;

        if(newsMax < panelsMax) {
            cxt.loadMore.classList.add(cxt.css.states.disabled);
            for (i = panelsMax; i < (panelsMax+3); i++) {
                cxt.buildNewsItem(news[i], news[i].img, news[i].date, news[i].title);
            }
        } else {
            for (i = panelsMax; i < (panelsMax+3); i++) {
                cxt.buildNewsItem(news[i], news[i].img, news[i].date, news[i].title);
            }
        }

    }, function(error) {
      console.error("Failed!", error);
    });

}


Matrix.prototype.buildNewsItem = function(data, img, date, title) {

    console.log(img, date, title);
    var parent = document.createElement('div');
    var content = document.createElement('div');
    var a = document.createElement('a');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');

    a.innerText = title;
    p2.innerText = date;

    parent.classList.add('grid-item');
    content.classList.add('grid-item__content');
    p1.classList.add('grid-item__content--title');
    p2.classList.add('grid-item__content--date');
    parent.appendChild(content);
    content.appendChild(p1);
    content.appendChild(p2);
    p1.appendChild(a);

    this.iso.insert(parent);
    this.iso.layout();
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
