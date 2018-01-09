var plyr = require('plyr');

function VideoModal(node){
    this.node = node;
    this.init();
}

VideoModal.prototype.init = function(){
    var cxt = this;
    this.playBtn = this.node.querySelector('.video-prompt--btn');
    this.heading = this.node.querySelector('.centered-heading');
    this.videoPlayer = this.node.querySelector('[data-type]');
    this.videoModalHook = document.getElementById('videoModalHook');
    this.videoModalBg = document.getElementById('videoModalBgHook');
    this.closeBtn = this.node.querySelector('.video-modal--close');

    this.videoModalHook.addEventListener('click', this.triggerModal.bind(this));
    this.closeBtn.addEventListener('click', this.closeModal.bind(this));

    this.vidInstance = plyr.setup(this.videoPlayer,
        {
            clickToPlay : false
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

    this.vidInstance[0].on('play', function(event) {
      cxt.playBtn.classList.add('remove');
    });

    this.vidInstance[0].on('stop', function(event) {
      cxt.playBtn.classList.remove('remove');
    });
}

VideoModal.prototype.triggerModal = function(e){
    e.preventDefault();
    var cxt = this;

    this.videoModalBg.style.display = 'block';
    this.videoModalBg.style.zIndex = 8;
    this.videoModalBg.classList.add('reveal');

    this.node.style.zIndex = 9;
    this.node.classList.add('reveal');

    setTimeout(function(){
        cxt.vidInstance[0].play();
        cxt.playBtn.classList.add('remove');
    }, 400);
}

VideoModal.prototype.closeModal = function(e){
    var cxt = this;

    this.videoModalBg.classList.remove('reveal');
    setTimeout(function(){
        cxt.videoModalBg.style.display = 'none';
        cxt.videoModalBg.style.zIndex = -1;
    }, 400);

    this.node.classList.remove('reveal');
    setTimeout(function(){
        cxt.node.style.zIndex = -1;
    }, 400);

    this.vidInstance[0].pause();
}

module.exports = VideoModal;
