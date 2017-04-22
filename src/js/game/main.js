define(function (require) {
	// Load any app-specific modules
	// with a relative require call,
	// like:
	var PIXI = require("lib/pixi.min");
	var Game = require("game/views/Game");

	var renderer = PIXI.autoDetectRenderer(800, 600);
	document.body.appendChild(renderer.view);

	var stage = new PIXI.Container();
	renderer.backgroundColor = 0x061639;

	var game = new Game(stage);
	game.showGame();
	
	renderer.render(stage);
});