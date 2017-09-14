var debounce = require('debounce');

function EqualHeights(node){
    this.node = node;
    this.init();
}

EqualHeights.prototype.init = function(){
    this.eq(false);
    window.addEventListener('resize', debounce(this.eq.bind(this, true), 50));
}

EqualHeights.prototype.eq = function(resize){
    var parent = this.node;
    var elements = parent.getElementsByClassName("eq"),
        allHeights = [],
        i = 0;
    if(resize === true){
      for(i = 0; i < elements.length; i++){
        elements[i].style.height = 'auto';
      }
    }
    for(i = 0; i < elements.length; i++){
      var elementHeight = elements[i].clientHeight;
      allHeights.push(elementHeight);
    }
    for(i = 0; i < elements.length; i++){
      elements[i].style.height = Math.max.apply( Math, allHeights) + 'px';
    }
}

module.exports = EqualHeights;
