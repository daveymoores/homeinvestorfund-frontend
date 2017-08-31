var Promise = require('promise');

function MobileProperties(node){
    this.$node = node;
    this.setVars();
    this.init();
}

MobileProperties.prototype.setVars = function(){
    this.css = {
        states : {
            'active':'active'
        },
        selectors : {
            'mapOverlay' : 'mapOverlayHook',
            'mapClose'  : '.map__overlay--close',
            'mapCarouselTrack' : '.map__overlay--carousel-track',
            'mapCarouselThumbnails' : '.map__overlay--thumbnails',
            'mapOverlayTitle'  :  '.map__overlay--title',
            'mapOverlayContents' : '.map__overlay--contents',
            'mapOverlayLoading' : '.map__overlay--loading',
            'locationMobSelect' : 'locationMobSelectHook'
        }
    }
}

MobileProperties.prototype.init = function(){
    var cxt = this;
    
    this.mapOverlay = document.getElementById(this.css.selectors.mapOverlay);
    this.mapOverlayClose = this.mapOverlay.querySelector(this.css.selectors.mapClose);
    this.mapCarouselThumbnails = this.mapOverlay.querySelector(this.css.selectors.mapCarouselThumbnails);
    this.mapCarouselTrack = this.mapOverlay.querySelector(this.css.selectors.mapCarouselTrack);
    this.mapOverlayTitle = this.mapOverlay.querySelector(this.css.selectors.mapOverlayTitle);
    this.mapOverlayContents = this.mapOverlay.querySelector(this.css.selectors.mapOverlayContents);
    this.mapOverlayLoading = this.mapOverlay.querySelector(this.css.selectors.mapOverlayLoading);
    this.locationMobSelect = document.getElementById(this.css.selectors.locationMobSelect);

    this.get('json/locations.json').then(function(locations) {

        for (i = 0; i < locations.length; i++) {
            cxt.buildOverlay(locations[i]);
        }

    }, function(error) {
      console.error("Failed!", error);
    });

}

MobileProperties.prototype.get = function(url) {

  return new Promise(function(resolve, reject) {

    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {

      if (req.status == 200) {
        resolve(JSON.parse(req.response));
      }
      else {
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    req.send();
  });
}

MobileProperties.prototype.buildList = function(data){
    var cxt = this;
}

module.exports = MobileProperties;
