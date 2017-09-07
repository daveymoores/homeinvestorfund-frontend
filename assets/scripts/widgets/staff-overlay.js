function StaffOverlay(node){
    this.node = node;
    this.init();
}

StaffOverlay.prototype.init = function(){
    var lnk = this.node.querySelector('[data-target]');

    this.h3 = this.node.querySelector('h3').innerText;
    this.h5 = this.node.querySelector('h5').innerText;
    this.content = this.node.querySelector('.staff-panel--hidden-content').innerText;

    this.overlay = document.getElementById('overlayHook');
    this.overlayH3 = this.overlay.querySelector('h3');
    this.overlayH5 = this.overlay.querySelector('h5');
    this.overlayP = this.overlay.querySelector('p');

    var bg = document.getElementById('overlayBackgroundHook');
    var close = this.overlay.querySelector('.map__overlay--close');
    var cxt = this;

    close.addEventListener('click', function(e){
        e.preventDefault();
        cxt.overlay.classList.remove('active');
        bg.classList.remove('active');
        setTimeout(function(){
            bg.style.zIndex = -1;
        }, 300);
    });

    lnk.addEventListener('click', function(e){
        e.preventDefault();
        bg.classList.add('active');
        bg.style.zIndex = 998;
        cxt.overlay.classList.add('active');
        cxt.populateOverlay();
    });
}

StaffOverlay.prototype.populateOverlay = function(){
    this.overlayH3.innerText = this.h3;
    this.overlayH5.innerText = this.h5;
    this.overlayP.innerText = this.content;
}

module.exports = StaffOverlay;
