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
    this.qLists = this.node.querySelectorAll('.faqs__q-list');

    [].forEach.call(this.targetAnchors, function(element, index, array){
        element.addEventListener('click', cxt.getData.bind(cxt));
    });

    // [].forEach.call(this.qLists, function(element, index, array){
    //     cxt.loadMore(element);
    // });

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

MoreInfo.prototype.loadMore = function(element){
    var cxt = this;
    var items = element.querySelectorAll('.faqs__q-list--item');
    var itemsUl = element.querySelector('.faqs__q-list--ul');
    var loadMore = element.querySelector('.faqs__q-list--see-more');
    var itemsLength = items.length;

    cxt.get('json/faqs.json').then(function(faqs) {
        loadMore.innerText = 'See ' + (faqs.length - itemsLength) + ' more';

        loadMore.addEventListener('click', function(e){
            e.preventDefault();
            var faqsMax = faqs.length; //max number of locations

            if(itemsLength < faqsMax) {
                for (var i = itemsLength; i < faqsMax; i++) {
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    li.appendChild(a);
                    li.classList.add("faqs__q-list--item");
                    a.innerText = faqs[i].title;
                    a.setAttribute('data-faq-slug', faqs[i].slug);
                    a.setAttribute('href', '#' + faqs[i].slug);
                    itemsUl.appendChild(li);
                    a.addEventListener('click', cxt.getData.bind(cxt));
                }

                loadMore.classList.add('disabled');
            }

        });
    }, function(error) {
        console.error("Failed!", error);
    });

}

module.exports = MoreInfo;
