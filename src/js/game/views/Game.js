define(["core/utils/FunctionUtil", "views/Root", "core/utils/setTimeout", "core/events/msg"],
	function(FunctionUtil, Root, setTimeout, msg) {
	"use strict";

	function Game(stage, renderer) {
		FunctionUtil.bindAll(this);
		this.stage = stage;
		this.renderer = renderer;
		this.root = null;

		this.resizeTimeout = null;
		window.addEventListener("resize", this.onResize);
		msg.emit("second");
	}

	Game.WIDTH = 320;
	Game.HEIGHT = 512;

	Game.prototype.showGame = function() {
		//console.log("showGame");
		this.root = this.createGame();
	};

	Game.prototype.createGame = function() {
		var root = new Root();
		return this.stage.addChild(root);
	};

	Game.prototype.resizeHandler = function() {
		this.resizeTimeout = null;
		this.resizeGame();
		this.renderer.render(this.stage);
	};

	Game.prototype.resizeGame = function() {
		var viewport = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		var newScale;
		if (Game.HEIGHT / Game.WIDTH > viewport.height / viewport.width) {
			newScale = viewport.height / Game.HEIGHT;
		} else {
			newScale = viewport.width / Game.WIDTH;
		}
		var newPositionX = (viewport.width - this.renderer.view.width * newScale) / 2;
		var newPositionY = (viewport.height - this.renderer.view.height * newScale) / 2;
		this.renderer.view.style.transformOrigin = "top left";
		this.renderer.view.style.transform = "scale(" + newScale + "," + newScale +")";
		this.renderer.view.style.left = newPositionX + "px";
		this.renderer.view.style.top = newPositionY + "px";
	};

	Game.prototype.onResize = function() {
		if (!this.resizeTimeout) {
			this.resizeTimeout = setTimeout(this.resizeHandler, 0.66);
		}
	};

	return Game;
});