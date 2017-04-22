define(["core/utils/ClassUtil", "core/screens/BaseScreen", "views/screens/Screens", "core/ui/TextButton"],
	function(ClassUtil, BaseScreen, Screens, TextButton) {
		"use strict";

		function PlayScreen(id) {
			BaseScreen.apply(this, arguments);

			this.exitButton = this.createExitButton();
		}

		ClassUtil.extend(PlayScreen, BaseScreen);

		PlayScreen.prototype.createExitButton = function() {
			var exitButton = new TextButton("Exit");
			exitButton.x = 675;
			exitButton.y = 75;
			exitButton.on("buttonClicked", this.onExitClicked);
			return this.addChild(exitButton);
		};

		PlayScreen.prototype.onExitClicked = function() {
			this.emit("changeScreen", Screens.GAME_SCREEN);
		};

		return PlayScreen;
	});