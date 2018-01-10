var Promise = require('promise');

function MoreInfo(node){
    this.node = node;
    this.init();
}

MoreInfo.prototype.init = function(){
    var cxt = this;
    this.targetAnchors = this.node.querySelectorAll('[data-target]');
    this.overlay = document.getElementById('faq-overlay');
    this.bg = document.getElementById('overlayBackgroundHook');
    this.overlayTitle = this.overlay.querySelector('h4');
    this.overlayDesc = this.overlay.querySelector('p');

    [].forEach.call(this.targetAnchors, function(element, index, array){
        element.addEventListener('click', cxt.getData.bind(cxt));
    });

    this.getUrl();
}

MoreInfo.prototype.getData = function(e){
    var cxt = this;
    var target = e.currentTarget;
    this.targetSlug = target.getAttribute('data-faq-slug');

    this.checkJson(this.targetSlug);
    cxt.setUrl(this.targetSlug);
}

MoreInfo.prototype.checkJson = function(slug){
    var cxt = this;
    this.get('json/faqs.json').then(function(faqs) {
        for(var i = 0; i < faqs.length; i++) {
            if(faqs[i].slug == slug) {
                cxt.buildFaqItem(faqs[i].title, faqs[i].description);
                cxt.showModal();
            }
        }
    }, function(error) {
      console.error("Failed!", error);
    });
}


MoreInfo.prototype.setUrl = function(slug){
    if(history.pushState) {
        history.pushState(null, null, '#' + slug);
    } else {
        location.hash = '#' + slug;
    }
}

MoreInfo.prototype.getUrl = function(e){
    var type = window.location.hash.substr(1);
    this.checkJson(type);
}

MoreInfo.prototype.showModal = function(){
    this.bg.classList.add('active');
    this.bg.style.zIndex = 998;
    this.overlay.classList.add('active');
}

MoreInfo.prototype.buildFaqItem = function(title, description){
    this.overlayTitle.innerText = title;
    this.overlayDesc.innerText = description;
}

MoreInfo.prototype.get = function(url) {

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

module.exports = MoreInfo;
