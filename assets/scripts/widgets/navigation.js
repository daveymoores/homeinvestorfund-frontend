function Navigation(node){
    this.node = node;
    this.CLASSES();
    this.init();
}

Navigation.prototype.CLASSES = function(){
    this.CLASSES = {
        states : {
            'open' : 'open',
            'active' : 'is-active'
        },
        selectors : {
            'menuButton' : '.navigation--menu-button',
            'dropdownToggle' : '.navigation__dropdown',
            'dropdownPanel' : '.navigation__dropdown--panel',
            'navigationMain' : '.navigation__list--main',
            'navigationWrapper' : '.navigation__list--main'
        }
    }
}

Navigation.prototype.init = function(){
    this.menuButton = this.node.querySelector(this.CLASSES.selectors.menuButton);
    this.dropdownToggle = this.node.querySelector(this.CLASSES.selectors.dropdownToggle);
    this.dropdownPanel = this.dropdownToggle.querySelector(this.CLASSES.selectors.dropdownPanel);
    this.navigationMain = this.node.querySelector(this.CLASSES.selectors.navigationMain);
    this.navigationWrapper = this.node.querySelector(this.CLASSES.selectors.navigationWrapper);

    this.menuButton.addEventListener('click', this.openMenu.bind(this));
}

Navigation.prototype.openMenu = function(e){
    var navHeight = this.navigationMain.getBoundingClientRect().height;
    var wrapHeight = this.navigationWrapper.getBoundingClientRect().height;
    var ww = window.innerHeight;
    var hh = navHeight+wrapHeight;

    if(ww<hh) {
        hh = ww;
    }

    e.currentTarget.classList.toggle(this.CLASSES.states.active);
    this.node.classList.toggle(this.CLASSES.states.open);

    if(this.node.classList.contains(this.CLASSES.states.open)) {
        this.node.style.maxHeight = hh+'px';
    } else {
        this.node.style.maxHeight = "";
    }

    e.preventDefault();
}

module.exports = Navigation;
