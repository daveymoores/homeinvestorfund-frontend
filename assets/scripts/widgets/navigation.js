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
            'dropdownPanel' : '.navigation__dropdown--panel'
        }
    }
}

Navigation.prototype.init = function(){
    this.menuButton = this.node.querySelector(this.CLASSES.selectors.menuButton);
    this.dropdownToggle = this.node.querySelector(this.CLASSES.selectors.dropdownToggle);
    this.dropdownPanel = this.dropdownToggle.querySelector(this.CLASSES.selectors.dropdownPanel);

    this.menuButton.addEventListener('click', this.openMenu.bind(this));
}

Navigation.prototype.openMenu = function(e){
    var ww = window.innerWidth + 30;
    e.currentTarget.classList.toggle(this.CLASSES.states.active);
    this.node.classList.toggle(this.CLASSES.states.open);

    if(this.node.classList.contains(this.CLASSES.states.open)) {
        this.node.style.maxHeight = ww+'px';
    } else {
        this.node.style.maxHeight = "";
    }

    e.preventDefault();
}

module.exports = Navigation;
