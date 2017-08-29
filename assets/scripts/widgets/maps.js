var GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY = 'AIzaSyDor4jeGMzVTzl6x5QgpGPvahUSje9I-E0';

function InitGoogleMaps(node){
    this.$node = node;
    this.init();
}

InitGoogleMaps.prototype.init = function(){
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

module.exports = InitGoogleMaps;
