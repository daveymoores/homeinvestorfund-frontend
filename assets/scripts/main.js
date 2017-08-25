(function () {
	'use strict';

	var widgets;
    var $body = document.body;

	widgets = {
		"init-page" : require("./widgets/init-page"),
		"offcanvas" : require("./widgets/offcanvas")
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
