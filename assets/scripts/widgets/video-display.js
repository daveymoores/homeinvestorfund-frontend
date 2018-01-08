var plyr = require('plyr');

function VideoDisplay(node){
    this.node = node;
    this.selectors();
    this.init();
}

VideoDisplay.prototype.selectors = function(){
    this.css = {
        states : {
            'init' : 'initialised'
        },
        selectors : {
            'video' : '.video-display--player'
        }
    }
}

VideoDisplay.prototype.init = function(){
    var cxt = this;
    this.videoPlayer = this.node.querySelector('.video-display--player');
    this.playBtn = this.node.querySelector('.video-prompt--btn');

    this.vidInstance = plyr.setup(this.videoPlayer,
        {
            clickToPlay : true
        }
    );

    this.playBtn.addEventListener('click', function(e){
        e.preventDefault();
        cxt.vidInstance[0].play();
        cxt.playBtn.classList.add('remove');
    });

    this.vidInstance[0].on('pause', function(event) {
      cxt.playBtn.classList.remove('remove');
    });

    this.vidInstance[0].on('stop', function(event) {
      cxt.playBtn.classList.remove('remove');
    });
}

module.exports = VideoDisplay;
