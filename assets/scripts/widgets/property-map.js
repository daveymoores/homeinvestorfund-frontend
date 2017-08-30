var MarkerClusterer = require('node-js-marker-clusterer');
var GoogleMaps = require('google-maps');
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
            'mapOverlay' : 'mapOverlayHook'
        }
    }
}

PropertyMap.prototype.init = function(){
    var cxt = this;

    this.mapOverlay = document.getElementById(this.css.selectors.mapOverlay);

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
        {lat: 51.521722, lng: -0.130443},
        {lat: 53.386278, lng: -1.469588},
        {lat: 55.869120, lng: -4.251686},
        {lat: 51.461624, lng: -2.588994},
        {lat: 51.537584, lng: -0.138843},
        {lat: 51.584594, lng: -0.109231},
        {lat: 51.597818, lng: -0.106313}
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
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                map: map,
                icon: image
            });

            google.maps.event.addListener(marker, "click", (function(marker, i) {
                return function() {
                    cxt.mapOverlay.classList.add(cxt.css.states.active);
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

PropertyMap.prototype.buildOverlay = function(){

}

module.exports = PropertyMap;
