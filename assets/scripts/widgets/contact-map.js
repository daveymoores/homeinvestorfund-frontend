var GoogleMapsLoader = require('google-maps');
var Promise = require('promise');
GoogleMapsLoader.KEY = 'AIzaSyDor4jeGMzVTzl6x5QgpGPvahUSje9I-E0';

function ContactMap(node){
    this.$node = node;
    this.init();
}


ContactMap.prototype.init = function(){

    this.initMap();

}

ContactMap.prototype.initMap = function() {

    var cxt = this;

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
          [51.514839, -0.091090]
        ];

        var options = {
           draggable: true,
           scrollwheel: true,
           panControl: true,
           zoom: 15,
           disableDefaultUI: true,
           zoomControl: true,
           clickableIcons: false,
           center: {lat: 51.514809, lng: -0.091095},
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

          for (i = 0; i < locations.length; i++) {
              marker = new google.maps.Marker({
                  position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                  map: map,
                  icon: image
              });
           }



    });

}

module.exports = ContactMap;
