function NavTabs(node){
    this.node = node;
    this.init();
}

NavTabs.prototype.init = function(){
    var cxt = this;
	var myTabs = document.querySelectorAll("ul.nav-tabs > li");

    setTimeout(function(){
        cxt.node.classList.add('initialised');
    }, 300);

	function myTabClicks(tabClickEvent) {

		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}

		var clickedTab = tabClickEvent.currentTarget;

		clickedTab.classList.add("active");

		tabClickEvent.preventDefault();

		var myContentPanes = document.querySelectorAll(".tab-pane");

		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}

		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);

		activePane.classList.add("active");

	}

	for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}

}

module.exports = NavTabs;
