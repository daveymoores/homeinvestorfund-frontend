var GoogleMapsLoader = require('google-maps');
var Promise = require('promise');
GoogleMapsLoader.KEY = 'AIzaSyDor4jeGMzVTzl6x5QgpGPvahUSje9I-E0';
var debounce = require('debounce');

function InitGoogleMaps(node){
    this.$node = node;
    this.setVars();
    this.init();
}

InitGoogleMaps.prototype.setVars = function(){
    this.css = {
        states : {
            'active':'active',
            'init' : 'initialised',
            'disabled' : 'disabled'
        },
        selectors : {
            'propertiesPanel' : '.properties__panel',
            'propertiesContainer' : '.properties__container',
            'properties' : 'propertiesHook'
        }
    }
}

InitGoogleMaps.prototype.init = function(){

    var cxt = this;
    var ww = window.innerWidth;

    //mobile selectors
    this.locationMobSelect = document.getElementById(this.css.selectors.locationMobSelect);
    this.properties = document.getElementById(this.css.selectors.properties);
    this.propertiesContainer = this.properties.querySelector(this.css.selectors.propertiesContainer);
    this.loadMore = this.properties.querySelector('a');

    this.loadMore.addEventListener('click', this.loadData.bind(this));
    window.addEventListener('load', this.initMap.bind(this));
    window.addEventListener('resize', debounce(this.initMap.bind(this), 200));

}

InitGoogleMaps.prototype.loadData = function(e){
    //load more button functionality
    // NOTE: move json out into seperate method
    var cxt = this;

    e.preventDefault();

    cxt.propertiesPanels = cxt.properties.querySelectorAll(cxt.css.selectors.propertiesPanel);
    //prevent action if button is disabled
    if(!e.currentTarget.classList.contains(cxt.css.states.disabled)) {
        //current number of panels
        var panels = cxt.propertiesPanels.length;
        var panelsMax = panels+3;

        cxt.get('http://homeinvestor.fund/json/locations.json').then(function(locations) {

            var locationsMax = locations.length; //max number of locations

            if(locationsMax < panelsMax) {
                cxt.loadMore.classList.add(cxt.css.states.disabled);
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

}

InitGoogleMaps.prototype.initMap = function(e) {

    var cxt = this;
    var ww = window.innerWidth;

    GoogleMapsLoader.load(function(google) {
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
          [51.521722, -0.130443],
          [53.386278, -1.469588],
          [55.869120, -4.251686],
          [51.461624, -2.588994]
        ];

        var options = {
           draggable: false,
           scrollwheel: false,
           panControl: false,
           maxZoom: 6,
           minZoom: 6,
           zoom: 6,
           disableDefaultUI: true,
           clickableIcons: false,
           center: {lat: 53.634566, lng: -3.472727},
           mapTypeId: google.maps.MapTypeId.ROADMAP,
           styles: myStyles
       };


      if(ww > 767) {
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

          for (i = 0; i < locations.length; i++) {
              marker = new google.maps.Marker({
                  position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                  map: map,
                  icon: image
              });
           }

      } else {

          //check whether it already contains properties and has initialised
          if(!cxt.propertiesContainer.classList.contains(cxt.css.states.init)) {
              cxt.get('json/locations.json').then(function(locations) {
                  for (i = 0; i < locations.length; i++) {
                      if(locations.length > 3 && i < 3) {
                           cxt.buildMobileList(locations[i], locations[i].location, locations[i].pics[0]); //create property panels
                      }
                  }
                 cxt.propertiesContainer.classList.add(cxt.css.states.init);
              }, function(error) {
                console.error("Failed!", error);
              });
          }
      }

    });

}

InitGoogleMaps.prototype.buildMobileList = function(data, title, picUrl) {

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
}


InitGoogleMaps.prototype.get = function(url) {

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

module.exports = InitGoogleMaps;
