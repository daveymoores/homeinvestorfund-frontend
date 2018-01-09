var plyr = require('plyr');

function PlyrInit(node){
    this.node = node;
    this.init();
}

PlyrInit.prototype.init = function(){
    this.playBtn = this.node.querySelector('.video-prompt--btn');
    this.heading = this.node.querySelector('.centered-heading');
    this.videoPlayer = this.node.querySelector('[data-type]');
    var cxt = this;

    this.vidInstance = plyr.setup(cxt.videoPlayer,
        {
            clickToPlay : false
        }
    );

    this.playBtn.addEventListener('click', function(e){
        e.preventDefault();
        cxt.vidInstance[0].play();
        cxt.heading.classList.add('remove');

        var vidWrapper = cxt.node.childNodes[0].nextSibling;
        vidHeight = vidWrapper.getBoundingClientRect().height;
        cxt.node.style.maxHeight = vidHeight + 'px';
    });

    this.vidInstance[0].on('pause', function(event) {
      cxt.node.style.maxHeight = '470px';
      cxt.heading.classList.remove('remove');
      cxt.playBtn.classList.remove('remove');
    });

    this.vidInstance[0].on('play', function(event) {
      cxt.playBtn.classList.add('remove');
    });

    this.vidInstance[0].on('stop', function(event) {
      cxt.node.style.maxHeight = '470px';
      cxt.heading.classList.remove('remove');
      cxt.playBtn.classList.remove('remove');
    });
}

module.exports = PlyrInit;
