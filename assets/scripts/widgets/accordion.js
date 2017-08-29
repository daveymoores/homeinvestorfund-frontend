function Accordion(element) {
    this.element = element;

    this.setVars();
    this.setEventListeners();
    this.init();
}

Accordion.prototype.setVars = function() {
    this.css = {
      classes: {
        active: "active",
        rendered: "accordion--rendered"
      },
      selectors: {
        accordion: ".accordion",
        accordionItem: ".accordion__item",
        accordionTrigger: ".accordion__item__trigger"
      }
    };

    this.accordionTriggers = this.element.querySelectorAll(this.css.selectors.accordionTrigger);
    this.accordionItems = this.element.querySelectorAll(this.css.selectors.accordionItem);
    this.openAnswers = 0;
    this.totalAnswers = this.accordionTriggers.length;
};

Accordion.prototype.init = function() {
    this.element.classList.add(this.css.classes.rendered);
};

Accordion.prototype.setEventListeners = function() {
    var cxt = this;
    Array.prototype.forEach.call(this.accordionTriggers, function(el, arr, index){
        el.addEventListener('click', cxt.toggleContent.bind(cxt));
    });
};

Accordion.prototype.toggleContent = function(event) {
    var accordionItem = event.target.closest(this.css.selectors.accordionItem);

    event.preventDefault();

    if (accordionItem.classList.contains(this.css.classes.active)) {
        this.openAnswers -= 1;
    } else {
        this.openAnswers += 1;
    }

    if (this.openAnswers === this.totalAnswers) {
        this.showAllContent();
    } else if (!this.openAnswers) {
        this.hideAllContent();
    } else {
        accordionItem.classList.toggle(this.css.classes.active);
    }
};


Accordion.prototype.showAllContent = function() {
    var cxt = this;
    Array.prototype.forEach.call(this.accordionItems, function(el, arr, index){
        el.classList.add(cxt.css.classes.active);
    });
    this.openAnswers = this.totalAnswers;
    console.log('openAnswers', this.openAnswers);
};

Accordion.prototype.hideAllContent = function() {
    var cxt = this;
    Array.prototype.forEach.call(this.accordionItems, function(el, arr, index){
        el.classList.remove(cxt.css.classes.active);
    });

    this.openAnswers = 0;
    console.log('openAnswers', this.openAnswers);
};

Accordion.prototype.toggleAllContent = function() {
    if (this.openAnswers < this.totalAnswers) {
        this.showAllContent();
    } else {
        this.hideAllContent();
    }
};

module.exports = Accordion;
