function InfoOverlay(node){
    this.node = node;
    this.init();
}

InfoOverlay.prototype.init = function(){
    var lnk = document.querySelectorAll('[data-target]');
    var bg = document.getElementById('overlayBackgroundHook');
    var close = this.node.querySelector('.map__overlay--close');
    var cxt = this;

    close.addEventListener('click', function(){
        cxt.node.classList.remove('active');
        bg.classList.remove('active');
        setTimeout(function(){
            bg.style.zIndex = -1;
        }, 300);
    });

    Array.prototype.forEach.call(lnk, function(ele, index, array){
        ele.addEventListener('click', function(e){
            e.preventDefault();
            bg.classList.add('active');
            bg.style.zIndex = 998;
            cxt.node.classList.add('active');
        });
    });
}

module.exports = InfoOverlay;
