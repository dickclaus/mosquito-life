define(function (require) {
	// Load any app-specific modules
	// with a relative require call,
	// like:
	var PIXI = require("lib/pixi.min");
	var Game = require("game/views/Game");

	var renderer = PIXI.autoDetectRenderer(Game.WIDTH, Game.HEIGHT);
	document.body.appendChild(renderer.view);

	var stage = new PIXI.Container();
	renderer.backgroundColor = 0x061639;

	renderer.view.style.position = "absolute";

	function setup() {
		var game = new Game(stage, renderer);
		game.showGame();
	}

	function onLoadProgress(loader) {
		console.log(loader.progress);
	}

	var loader = PIXI.loader.add("images/objects.json");
	loader.on("progress", onLoadProgress);
	loader.load(setup);


	//TODO: turn on correct resize
	//game.resizeGame();

	function gameLoop() {
		requestAnimationFrame(gameLoop);
		renderer.render(stage);
	}

	gameLoop();

});