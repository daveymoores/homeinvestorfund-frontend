function TriggerRedirect(node){
    this.node = node;
    this.init();
}

TriggerRedirect.prototype.init = function(){
    var bg = document.getElementById('throbber-bg');
    var object = document.getElementById('throbber');

    var red = '#EE1358';

    this.node.addEventListener('click', function(e){
        e.preventDefault();
        bg.style.zIndex = 99;
        object.style.zIndex = 99;

        var svgDoc = object.contentDocument;
        var circles = svgDoc.querySelectorAll('.circle');

        function glowCircles(){
            [].forEach.call(circles, function(element, index, array){
                setTimeout(function(){
                    element.classList.add('active');
                    setTimeout(function(){
                        element.classList.remove('active');
                    }, 600);
                }, 50*index);
            });
        }

        glowCircles();
        setInterval(function(){
            glowCircles();
        }, 1000);

        setTimeout(function(){
            object.style.opacity = 1;
            bg.style.opacity = 1;
        }, 50);
    });
}

module.exports = TriggerRedirect;
