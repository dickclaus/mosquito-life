define(["core/utils/ClassUtil", "core/screens/BaseScreen", "views/screens/Screens", "core/ui/TextButton", "core/events/msg"],
	function(ClassUtil, BaseScreen, Screens, TextButton, msg) {
	"use strict";

	function GameScreen(id) {
		BaseScreen.apply(this, arguments);

		this.optionsButton = this.createOptionsButton();
		this.playButton = this.createPlayButton();
	}

	ClassUtil.extend(GameScreen, BaseScreen);

	GameScreen.prototype.createBackground = function() {
		var graphics = new PIXI.Graphics();
		graphics.beginFill(0x3366AA, 1);
		graphics.drawRect(0, 0, 320, 512);
		graphics.endFill();
		return this.addChild(graphics);
	};

	GameScreen.prototype.createOptionsButton = function() {
		var optionsButton = new TextButton("Options");
		optionsButton.x = 160;
		optionsButton.y = 355;
		optionsButton.on("buttonClicked", this.onOptionsClicked);
		return this.addChild(optionsButton);
	};

	GameScreen.prototype.createPlayButton = function() {
		var playButton = new TextButton("Play");
		playButton.x = 160;
		playButton.y = 275;
		playButton.on("buttonClicked", this.onPlayClicked);
		return this.addChild(playButton);
	};

	GameScreen.prototype.onOptionsClicked = function() {
		console.log("onExitClicked");
	};

	GameScreen.prototype.onPlayClicked = function() {
		this.emit("changeScreen", Screens.PLAY_SCREEN);
	};

	return GameScreen;
});