(function () {
	'use strict';

	var widgets;
    var $body = document.body;

	widgets = {
		"init-page" : require("./widgets/init-page"),
		"navigation" : require("./widgets/navigation"),
		"calculator" : require("./widgets/calculator"),
		"accordion" : require("./widgets/accordion"),
		"maps" : require("./widgets/maps"),
		"property-map" : require("./widgets/property-map"),
		"carousel" : require("./widgets/carousel"),
		"contact-map" : require("./widgets/contact-map"),
		"info-overlay" : require("./widgets/info-overlay"),
		"plyr-init" : require("./widgets/plyr-init"),
		"nav-tabs" : require("./widgets/nav-tabs"),
		"staff-overlay" : require("./widgets/staff-overlay"),
		"matrix" : require("./widgets/matrix"),
		"video-modal" : require("./widgets/video-modal"),
		"equal-heights" : require("./widgets/equal-heights"),
		"share-btns" : require("./widgets/share"),
		"video-display" : require("./widgets/video-display")
	};

    function initWidgets ($node) {
        var dw = $node.querySelectorAll('[data-widget]');
        Array.prototype.forEach.call(dw, function(el, index, array){
            var type;
            type = el.getAttribute('data-widget');

            if (widgets[type]) {
                new widgets[type](el);
            }
        });
    }

    initWidgets($body);

}());
