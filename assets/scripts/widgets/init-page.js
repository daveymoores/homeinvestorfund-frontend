function InitPage(node){
    this.node = node;
    this.init();
}

InitPage.prototype.init = function(){
    this.node.innerHTML = '<h1>Hello World</h1>'
}

module.exports = InitPage;
