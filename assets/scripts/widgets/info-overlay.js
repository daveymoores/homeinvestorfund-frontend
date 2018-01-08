function InfoOverlay(node){
    this.node = node;
    this.init();
}

InfoOverlay.prototype.init = function(){
    this.lnk = document.querySelectorAll('[data-target]');
    this.bg = document.getElementById('overlayBackgroundHook');
    this.close = this.node.querySelector('.map__overlay--close');
    var cxt = this;

    this.close.addEventListener('click', function(e){
        cxt.closeModal(e);
    });

    this.bg.addEventListener('click', function(e){
        cxt.closeModal(e);
    });

    Array.prototype.forEach.call(this.lnk, function(ele, index, array){
        ele.addEventListener('click', function(e){
            cxt.openModal(e);
        });
    });
}

InfoOverlay.prototype.openModal = function(e){
    e.preventDefault();
    this.bg.classList.add('active');
    this.bg.style.zIndex = 998;
    this.node.classList.add('active');
}

InfoOverlay.prototype.closeModal = function(e){
    e.preventDefault();
    this.node.classList.remove('active');
    this.bg.classList.remove('active');

    var cxt = this;
    setTimeout(function(){
        cxt.bg.style.zIndex = -1;
    }, 300);
}

module.exports = InfoOverlay;
