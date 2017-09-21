function Share(node){
    this.node = node;
    this.init();
}

Share.prototype.init = function(){

    var href = window.location.href;
    var social = this.node.getElementsByTagName('a');

    Array.prototype.forEach.call(social, function(el, index, array){
    	el.setAttribute('href', el.getAttribute('href').replace("SHAREURL", href));
    });

}

module.exports = Share;
