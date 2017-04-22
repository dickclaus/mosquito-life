define(["views/Root"], function(Root) {
	"use strict";

	function Game(stage) {
		this.stage = stage;
		this.root = null;
	}

	Game.prototype.showGame = function() {
		console.log("showGame");
		this.root = this.createGame();
	};

	Game.prototype.createGame = function() {
		var root = new Root();
		return this.stage.addChild(root);
	};

	return Game;
});