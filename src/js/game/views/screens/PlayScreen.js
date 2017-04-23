define(["lib/pixi.min", "core/utils/ClassUtil", "core/screens/BaseScreen", "views/screens/Screens", "core/ui/ImageButton",
		"models/GameModel", "controllers/KeyboardController", "core/events/msg", "game/views/Map"],
	function(PIXI, ClassUtil, BaseScreen, Screens, ImageButton, gameModel, keyboardController, msg, Map) {
		"use strict";

		function PlayScreen(id) {
			BaseScreen.apply(this, arguments);
		}

		ClassUtil.extend(PlayScreen, BaseScreen);

		PlayScreen.prototype.createBackground = function() {
			var graphics = new PIXI.Graphics();
			graphics.beginFill(0x3366AA, 1);
			graphics.drawRect(0, 0, 320, 512);
			graphics.endFill();
			return this.addChild(graphics);
		};

		PlayScreen.prototype.show = function() {
			this.map = this.createMap();
			this.addHero();
			this.exitButton = this.createExitButton();
			keyboardController.enable();

			this.emit("screenShowed");
		};

		PlayScreen.prototype.createMap = function() {
			var map = new Map();
			return this.addChild(map);
		};

		PlayScreen.prototype.addHero = function() {
			var hero = PIXI.Sprite.fromFrame("wizard.png");
			hero.anchor.set(0.5,0.5);
			hero.position.set(160, 256 - 32);
			this.addChild(hero);
		};

		PlayScreen.prototype.createExitButton = function() {
			var exitButton = new ImageButton("back_button.png");
			exitButton.x = 32;
			exitButton.y = 480;
			exitButton.on("buttonClicked", this.onExitClicked);
			return this.addChild(exitButton);
		};

		PlayScreen.prototype.onExitClicked = function() {
			keyboardController.disable();
			msg.off("keyUp", this.moveUp);
			msg.off("keyDown", this.moveDown);
			msg.off("keyRight", this.moveRight);
			msg.off("keyLeft", this.moveLeft);
			this.emit("changeScreen", Screens.GAME_SCREEN);
		};

		return PlayScreen;
	});