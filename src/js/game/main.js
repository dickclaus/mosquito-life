define(function (require) {
	// Load any app-specific modules
	// with a relative require call,
	// like:
	var PIXI = require("lib/pixi.min");
	var soundjs = require("lib/soundjs.min");
	var Game = require("game/views/Game");

	var renderer = PIXI.autoDetectRenderer(Game.WIDTH, Game.HEIGHT);
	document.body.appendChild(renderer.view);

	var stage = new PIXI.Container();
	renderer.backgroundColor = 0x061639;

	renderer.view.style.position = "absolute";

	function setup() {
		var game = new Game(stage, renderer);
		game.showGame();
		game.resizeGame();
	}

	function onLoadProgress(loader) {
		console.log(loader.progress);
	}

	var loader = PIXI.loader.add("images/objects.json").add('potions', 'images/potions.xml');
	loader.on("progress", onLoadProgress);
	loader.load(setup);


	window.createjs.Sound.registerSound("sounds/music.mp3", "music");
	window.createjs.Sound.registerSound("sounds/no_way.mp3", "noWay");
	window.createjs.Sound.registerSound("sounds/found.mp3", "found");



	function gameLoop() {
		requestAnimationFrame(gameLoop);
		renderer.render(stage);
	}

	gameLoop();

});