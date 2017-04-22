define(["core/utils/ClassUtil", "core/screens/BaseScreen", "views/screens/Screens", "core/ui/TextButton"],
	function(ClassUtil, BaseScreen, Screens, TextButton) {
	"use strict";

	function GameScreen(id) {
		BaseScreen.apply(this, arguments);

		this.exitButton = this.createExitButton();
		this.playButton = this.createPlayButton();
	}

	ClassUtil.extend(GameScreen, BaseScreen);

	GameScreen.prototype.createExitButton = function() {
		var exitButton = new TextButton("Exit");
		exitButton.x = 675;
		exitButton.y = 75;
		exitButton.on("buttonClicked", this.onExitClicked);
		return this.addChild(exitButton);
	};

	GameScreen.prototype.createPlayButton = function() {
		var playButton = new TextButton("Play");
		playButton.x = 400;
		playButton.y = 75;
		playButton.on("buttonClicked", this.onPlayClicked);
		return this.addChild(playButton);
	};

	GameScreen.prototype.onExitClicked = function() {
		console.log("onExitClicked");
	};

	GameScreen.prototype.onPlayClicked = function() {
		this.emit("changeScreen", Screens.PLAY_SCREEN);
	};

	return GameScreen;
});