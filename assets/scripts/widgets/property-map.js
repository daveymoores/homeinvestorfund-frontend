var MarkerClusterer = require('node-js-marker-clusterer');
var GoogleMaps = require('google-maps');
var Promise = require('promise');
GoogleMaps.KEY = 'AIzaSyDor4jeGMzVTzl6x5QgpGPvahUSje9I-E0';

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
            'mapOverlayContents' : '.map__overlay--contents'
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

    this.mapOverlayClose.addEventListener('click', function(e){
        e.preventDefault();
        cxt.mapOverlay.classList.remove(cxt.css.states.active);
    });

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

        var locations = [
            {
                lat: 51.521722,
                lng: -0.130443,
                pics: [
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg'
                ],
                location: 'Ferndale Road, Clapham',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                points: [
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet'
                ]
            },
            {
                lat: 53.386278,
                lng: -1.469588,
                pics: [
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg'
                ],
                location: 'Some Road, Some place',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                points: [
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet'
                ]
            },
            {
                lat: 55.869120,
                lng: -4.251686,
                pics: [
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg'
                ],
                location: 'Long Road, Longtown',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                points: [
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet'
                ]
            },
            {
                lat: 51.461624,
                lng: -2.588994,
                pics: [
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg'
                ],
                location: 'High Road, Hightown',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                points: [
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet'
                ]
            },
            {
                lat: 51.537584,
                lng: -0.138843,
                pics: [
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg'
                ],
                location: 'Low Road, Lowtown',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                points: [
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet'
                ]
            },
            {
                lat: 51.584594,
                lng: -0.109231,
                pics: [
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg'
                ],
                location: 'Middle Road, Middletown',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                points: [
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet'
                ]
            },
            {
                lat: 51.597818,
                lng: -0.106313,
                pics: [
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg',
                    './dist/images/house-pics/placeholder.jpg'
                ],
                location: 'Top Road, Toptown',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                points: [
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet',
                    'Lorem ipsum dolor sit amet'
                ]
            }
          ]

        var options = {
           draggable: true,
           scrollwheel: true,
           panControl: true,
           zoom: 6,
           disableDefaultUI: true,
           clickableIcons: true,
           center: {lat: 53.634566, lng: -3.472727},
           mapTypeId: google.maps.MapTypeId.ROADMAP,
           styles: myStyles
       };

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

        cxt.get('json/locations.json').then(function(response) {
          console.log(response);
        }, function(error) {
          console.error("Failed!", error);
        })

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                map: map,
                icon: image
            });

            google.maps.event.addListener(marker, "click", (function(marker, i) {
                return function() {
                    cxt.buildOverlay(locations[i]);
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

    });

}

PropertyMap.prototype.get = function(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(JSON.parse(req.response));
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

PropertyMap.prototype.scrap = function(){

}

PropertyMap.prototype.initCarousel = function(){
    var cxt = this;
    var thumbs = this.mapCarouselThumbnails.querySelectorAll('a');
    var imgs = this.mapCarouselTrack.querySelectorAll('img');
    var imgsNum = imgs.length;
    var imgWidth = imgs[0].getBoundingClientRect().width;

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

    cxt.mapOverlay.classList.add(cxt.css.states.active);
    this.mapCarouselTrack.style.width = imgWidth*imgsNum + 'px';
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
        el.innerHTML = '<span class="check"></span>' + data.points[index];
    });

    //fill thumbnails
    //fill gallery
    data.pics.forEach(function(i){
        var img = document.createElement('img');
        var a = document.createElement('a');
        img.setAttribute('src', i);
        a.innerHTML = "<img src="+ i +" alt=''>";
        cxt.mapCarouselTrack.appendChild(img);
        cxt.mapCarouselThumbnails.appendChild(a);
    });

    var firstAnchor = cxt.mapCarouselThumbnails.querySelectorAll('a')[0];
    firstAnchor.classList.add(this.css.states.active);
    this.initCarousel();
}

module.exports = PropertyMap;
