var MarkerClusterer = require('node-js-marker-clusterer');
var GoogleMaps = require('google-maps');
var Promise = require('promise');
GoogleMaps.KEY = 'AIzaSyDor4jeGMzVTzl6x5QgpGPvahUSje9I-E0';
var debounce = require('debounce');

function PropertyMap(node){
    this.$node = node;
    this.setVars();
    this.init();
}

PropertyMap.prototype.setVars = function(){
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
            'mapOverlaySpotlight'  : '.map__overlay--spotlight',
            'mapOverlayLoading' : '.map__overlay--loading',
            'locationMobSelect' : 'locationMobSelectHook',
            'propertiesPanel' : '.properties__panel',
            'propertiesContainer' : '.properties__container',
            'properties' : 'propertiesHook'
        }
    }
}

PropertyMap.prototype.init = function(){
    var cxt = this;

    this.mapOverlay = document.getElementById(this.css.selectors.mapOverlay);
    this.mapOverlayClose = this.mapOverlay.querySelector(this.css.selectors.mapClose);
    this.mapCarouselThumbnails = this.mapOverlay.querySelector(this.css.selectors.mapCarouselThumbnails);
    this.mapCarouselTrack = this.mapOverlay.querySelector(this.css.selectors.mapCarouselTrack);
    this.mapOverlayTitle = this.mapOverlay.querySelector(this.css.selectors.mapOverlayTitle);
    this.mapOverlayContents = this.mapOverlay.querySelector(this.css.selectors.mapOverlayContents);
    this.mapOverlaySpotlight = this.mapOverlay.querySelector(this.css.selectors.mapOverlaySpotlight);
    this.mapOverlayLoading = this.mapOverlay.querySelector(this.css.selectors.mapOverlayLoading);

    //mobile selectors
    this.locationMobSelect = document.getElementById(this.css.selectors.locationMobSelect);
    this.properties = document.getElementById(this.css.selectors.properties);
    this.propertiesContainer = this.properties.querySelector(this.css.selectors.propertiesContainer);
    this.loadMore = this.properties.querySelector('a');


    //same close button for desktop and mobile overlays
    this.mapOverlayClose.addEventListener('click', function(e){
        e.preventDefault();
        cxt.mapOverlay.classList.remove(cxt.css.states.active);
    });


    this.initMap();
    window.addEventListener('resize', debounce(this.initMap.bind(this), 200));

}

PropertyMap.prototype.initMap = function() {

    var cxt = this;
    var ww = window.innerWidth;


    GoogleMaps.load(function(google) {
        var map;
          var styles = {
              silver:
                [
                    {
                        "featureType": "all",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#92d1f4"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "gamma": 0.01
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "saturation": -31
                            },
                            {
                                "lightness": -33
                            },
                            {
                                "weight": 2
                            },
                            {
                                "gamma": 0.8
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 80
                            },
                            {
                                "saturation": 10
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "saturation": 20
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 70
                            },
                            {
                                "saturation": -20
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 670
                            },
                            {
                                "saturation": -30
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "saturation": 25
                            },
                            {
                                "lightness": 25
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": 35
                            },
                            {
                                "lightness":20
                            }
                        ]
                    }
                ]
            };


          var myStyles =[
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                      { visibility: "off" }
                ]
            },
            {
              featureType: 'transit',
              elementType: 'labels.icon',
              stylers: [{visibility: 'off'}]
            }
        ];


        var options = {
           draggable: true,
           scrollwheel: true,
           panControl: true,
           zoom: 6,
           disableDefaultUI: true,
           zoomControl: true,
           clickableIcons: true,
           center: {lat: 53.634566, lng: -3.472727},
           mapTypeId: google.maps.MapTypeId.ROADMAP,
           styles: myStyles
       };


       if(ww > 768) {
           map = new google.maps.Map(cxt.$node, options);
           map.setOptions({styles: styles['silver']});

           //Resize Function
           google.maps.event.addDomListener(window, "resize", function() {
               var center = map.getCenter();
               google.maps.event.trigger(map, "resize");
               map.setCenter(center);
           });

           var image = {
             url: './dist/images/icons/pin.png',
             size: new google.maps.Size(37, 40),
             origin: new google.maps.Point(0, 0),
             anchor: new google.maps.Point(0, 32)
           };

           var marker, i;
           var gmarkers = []; //marker for clusters

           cxt.get('json/locations.json').then(function(locations) {

               for (i = 0; i < locations.length; i++) {
                   marker = new google.maps.Marker({
                       position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                       map: map,
                       icon: image
                   });

                   google.maps.event.addListener(marker, "click", (function(marker, i) {
                       return function() {
                           cxt.mapOverlayLoading.classList.add(cxt.css.states.active);
                           cxt.mapOverlayLoading.style.zIndex = 3;
                           setTimeout(function(){
                               cxt.scrap();
                               cxt.buildOverlay(locations[i]);
                           }, 300);
                       }
                   })(marker, i));

                   gmarkers.push(marker);
               }

               //begin cluster definition
               var clusterStyles = [
                   {
                       textColor: 'white',
                       textSize: 16,
                       url: 'dist/images/icons/m1.png',
                       height: 48,
                       width: 48
                   },
                   {
                       textColor: 'white',
                       textSize: 16,
                       url: 'dist/images/icons/m2.png',
                       height: 48,
                       width: 48
                   },
                   {
                       textColor: 'white',
                       textSize: 16,
                       url: 'dist/images/icons/m3.png',
                       height: 48,
                       width: 48
                   },
                   {
                       textColor: 'white',
                       textSize: 16,
                       url: 'dist/images/icons/m4.png',
                       height: 48,
                       width: 48
                   },
                   {
                       textColor: 'white',
                       textSize: 16,
                       url: 'dist/images/icons/m5.png',
                       height: 48,
                       width: 48
                   }
               ];


                 var mcOptions = {
                     gridSize: 50,
                     styles: clusterStyles,
                     maxZoom: 15
                 };

                 var markerCluster = new MarkerClusterer(map, gmarkers, mcOptions);

           }, function(error) {
             console.error("Failed!", error);
           });

       } else {

           //load more button functionality
           // NOTE: move json out inton seperate method
           cxt.loadMore.addEventListener('click', function(e){
               e.preventDefault();

               cxt.propertiesPanels = cxt.properties.querySelectorAll(cxt.css.selectors.propertiesPanel);
               //prevent action if button is disabled
               if(!e.currentTarget.classList.contains('disabled')) {
                   //current number of panels
                   var panels = cxt.propertiesPanels.length;
                   var panelsMax = panels+3;

                   cxt.get('json/locations.json').then(function(locations) {

                       var locationsMax = locations.length; //max number of locations

                       if(locationsMax < panelsMax) {
                           cxt.loadMore.classList.add('disabled');
                           for (i = panels; i < panelsMax; i++) {
                               cxt.buildMobileList(locations[i], locations[i].location, locations[i].pics[0]); //create property panels
                           }
                       } else {
                           for (i = panels; i < panelsMax; i++) {
                               cxt.buildMobileList(locations[i], locations[i].location, locations[i].pics[0]); //create property panels
                           }
                       }

                   }, function(error) {
                     console.error("Failed!", error);
                   });
               }

           });

           cxt.get('json/locations.json').then(function(locations) {

               for (i = 0; i < locations.length; i++) {
                   if(locations.length > 3 && i < 3) {
                        cxt.buildMobileList(locations[i], locations[i].location, locations[i].pics[0]); //create property panels
                   }
               }

           }, function(error) {
             console.error("Failed!", error);
           });
       }

    });
}

PropertyMap.prototype.buildMobileList = function(data, title, picUrl) {

    var cxt = this;
    var parent = document.createElement('div');
    var imgCont = document.createElement('div');
    var img = document.createElement('img');
    var p = document.createElement('p');

    parent.classList.add('properties__panel');
    imgCont.classList.add('properties__panel--img-cont');
    parent.appendChild(imgCont);

    img.setAttribute('src', picUrl.url);
    imgCont.appendChild(img);

    p.innerHTML = title;
    parent.appendChild(p);

    this.propertiesContainer.appendChild(parent);

    //add click handler and build overlay
    parent.addEventListener('click', function(){
        cxt.mapOverlayLoading.classList.add(cxt.css.states.active);
        cxt.mapOverlayLoading.style.zIndex = 3;
        setTimeout(function(){
            cxt.scrap();
            cxt.buildOverlay(data);
        }, 300);
    });
}


PropertyMap.prototype.get = function(url) {

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

PropertyMap.prototype.scrap = function(){
    var h4 = this.mapOverlayTitle.querySelector('h4');
    var p = this.mapOverlayContents.querySelector('p');
    var li = this.mapOverlayContents.querySelectorAll('li');

    h4.innerHTML = '';
    p.innerHTML = '';
    [].forEach.call(li, function(el, index, array){
        el.innerHTML = '';
    });
    this.mapCarouselTrack.innerHTML = '';
    this.mapCarouselThumbnails.innerHTML = '';
}

PropertyMap.prototype.initCarousel = function(){
    var cxt = this;
    var thumbs = this.mapCarouselThumbnails.querySelectorAll('a');
    var imgs = this.mapCarouselTrack.querySelectorAll('img');
    var imgsNum = imgs.length;
    var imgWidth = this.mapOverlaySpotlight.getBoundingClientRect().width;

    [].forEach.call(imgs, function(el, index, array){
        el.setAttribute('data-imgindex', index);
        el.style.width = imgWidth + 'px';
    });

    [].forEach.call(thumbs, function(el, index, array){
        el.setAttribute('data-thumbindex', index);

        el.addEventListener('click', function(e){
            e.preventDefault();
            var active = cxt.mapCarouselThumbnails.querySelector('.'+cxt.css.states.active);
            active.classList.toggle(cxt.css.states.active);
            e.currentTarget.classList.toggle(cxt.css.states.active);

            var i = parseInt(e.currentTarget.getAttribute('data-thumbindex'));
            cxt.mapCarouselTrack.style.webkitTransform = 'translateX('+ -(i*imgWidth) + 'px)';
            cxt.mapCarouselTrack.style.transform = 'translateX('+ -(i*imgWidth) + 'px)';
        });
    });

    this.mapOverlay.classList.add(cxt.css.states.active);
    this.mapCarouselTrack.style.width = imgWidth*imgsNum + 'px';
    cxt.mapOverlayLoading.classList.remove(cxt.css.states.active);
    setTimeout(function(){
        cxt.mapOverlayLoading.style.zIndex = -1;
    }, 300);
}

PropertyMap.prototype.buildOverlay = function(data){
    var cxt = this;

    //title
    var h4 = this.mapOverlayTitle.querySelector('h4');
    h4.innerHTML = data.location;

    //intro and bullets
    var p = this.mapOverlayContents.querySelector('p');
    var li = this.mapOverlayContents.querySelectorAll('li');

    [].forEach.call(li, function(el, index, array){
        el.innerHTML = '<span class="check"></span>' + data.points[index].txt;
    });

    p.innerHTML = data.intro;

    //fill thumbnails
    //fill gallery
    console.log(data.pics.length);
    data.pics.forEach(function(i){
        var img = document.createElement('img');
        var a = document.createElement('a');
        img.setAttribute('src', i.url);
        a.innerHTML = "<img src="+ i.url +" alt=''>";
        cxt.mapCarouselTrack.appendChild(img);
        cxt.mapCarouselThumbnails.appendChild(a);
    });

    var firstAnchor = cxt.mapCarouselThumbnails.querySelectorAll('a')[0];
    firstAnchor.classList.add(this.css.states.active);

    cxt.initCarousel();
}

module.exports = PropertyMap;
