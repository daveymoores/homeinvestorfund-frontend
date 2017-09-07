var plyr = require('plyr');

function PlyrInit(node){
    this.node = node;
    this.init();
}

PlyrInit.prototype.init = function(){
    plyr.setup(this.node);
}

module.exports = PlyrInit;
