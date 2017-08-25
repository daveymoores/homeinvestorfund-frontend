function OffcanvasMuscle(object) {
    this.options = {
        menu: "offcanvas-right-menu",
        button: "trigger-right-menu"
    }

    this.menuSelector = object.menu;
    this.menuElement = document.getElementById(object.menu);
    this.triggerElement = document.getElementById(object.button);

    this.attachEvents();
}

OffcanvasMuscle.prototype = {
    attachEvents: function() {
      let _self = this;
      this.triggerElement.addEventListener("click", function() {
        _self.toggleMenu();
      });
    },

    toggleMenu: function() {
      // Open the menu element
      this.menuElement.classList.toggle("open");
      // Slide the site wrap
      var siteWrap = document.getElementsByClassName('offcanvas-site-wrap')[0];
      siteWrap.classList.toggle('open');

      if (this.menuElement.classList.contains('left'))
        siteWrap.classList.toggle('left');

      if (this.menuElement.classList.contains('right'))
        siteWrap.classList.toggle('right');
    }
}

module.exports = OffcanvasMuscle;
