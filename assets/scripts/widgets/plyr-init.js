var plyr = require('plyr');

function PlyrInit(node){
    this.node = node;
    this.init();
}

PlyrInit.prototype.init = function(){
    var playBtn = this.node.querySelector('.video-prompt--btn');
    var heading = this.node.querySelector('.centered-heading');
    var videoPlayer = this.node.querySelector('[data-type]');
    var cxt = this;

    var vidInstance = plyr.setup(videoPlayer,
        {
            clickToPlay : false
        }
    );

    playBtn.addEventListener('click', function(e){
        e.preventDefault();
        vidInstance[0].play();
        heading.classList.add('remove');

        var vidWrapper = cxt.node.childNodes[0].nextSibling;
        vidHeight = vidWrapper.getBoundingClientRect().height;
        cxt.node.style.maxHeight = vidHeight + 'px';
    });

    vidInstance[0].on('pause', function(event) {
      cxt.node.style.maxHeight = '470px';
      heading.classList.remove('remove');
    });

    vidInstance[0].on('stop', function(event) {
      cxt.node.style.maxHeight = '470px';
      heading.classList.remove('remove');
    });
}

module.exports = PlyrInit;
