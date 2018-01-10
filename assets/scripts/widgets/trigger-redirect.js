function TriggerRedirect(node){
    this.node = node;
    this.init();
}

TriggerRedirect.prototype.init = function(){
    var bg = document.createElement('div');
    var object = document.createElement('object');
    object.setAttribute('data', './dist/images/icons/throbber-3.svg');
    object.setAttribute('type', 'image/svg+xml');
    object.classList.add('throbber');
    bg.classList.add('map__overlay--bg');
    document.body.appendChild(bg);
    document.body.appendChild(object);

    var red = '#EE1358';

    this.node.addEventListener('click', function(e){
        e.preventDefault();
        bg.style.zIndex = 99;

        var svgDoc = object.contentDocument;
        var circles = svgDoc.querySelectorAll('.circle');

        setInterval(function(){
            [].forEach.call(circles, function(element, index, array){
                setTimeout(function(){
                    element.classList.add('active');
                    setTimeout(function(){
                        element.classList.remove('active');
                    }, 600);
                }, 50*index);
            });
        }, 1200);

        setTimeout(function(){
            object.style.opacity = 1;
            bg.style.opacity = 1;
        }, 50);
    });
}

module.exports = TriggerRedirect;
