var Isotope = require('isotope-layout');

function Matrix(node){
    this.node = node;
    this.setVars();
    this.init();
}

Matrix.prototype.setVars = function(){
    this.css = {
        states : {
            'active' : 'active'
        },
        selectors : {
            'grid' : '.grid',
            'newsNavigation' : '.grid--navigation'
        }
    }
}

Matrix.prototype.init = function(){
    this.elem = this.node.querySelector(this.css.selectors.grid);
    this.navigation = this.node.querySelector(this.css.selectors.newsNavigation);
    this.navAnchor = this.navigation.querySelectorAll('a');
    var cxt = this;

    this.iso = new Isotope( cxt.elem, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });

    [].forEach.call(this.navAnchor, function(element, index, array){
        element.addEventListener('click', function(e){
            e.preventDefault();
            var filterValue = e.currentTarget.getAttribute('data-filter');
            cxt.iso.arrange({filter: filterValue});
        });
    });
}

module.exports = Matrix;
