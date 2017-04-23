define(["lib/pixi.min", "core/utils/ClassUtil", "core/screens/BaseScreen", "views/screens/Screens", "core/ui/ImageButton",
		"models/GameModel", "controllers/KeyboardController", "controllers/FindController", "core/events/msg", "game/views/Map",
		"game/views/Counter", "core/utils/setTimeout", "game/views/ui/FoundPopup"],
	function(PIXI, ClassUtil, BaseScreen, Screens, ImageButton, gameModel, keyboardController, findController, msg, Map,
	         Counter, setTimeout, FoundPopup) {
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
			this.counter = this.createCounter();
			this.exitButton = this.createExitButton();
			keyboardController.enable();
			findController.enable();

			window.createjs.Sound.play("music", {loop:-1, volume:1});

			msg.on("found", this.onItemFound);
			this.emit("screenShowed");
		};

		PlayScreen.prototype.onItemFound = function(index) {
			keyboardController.disable();
			this.showPopup(gameModel.items[index]);
			setTimeout(this.onPopupHide, 5.0);
		};

		PlayScreen.prototype.showPopup = function(item) {
			this.popup = new FoundPopup(item);
			this.addChild(this.popup);
		};

		PlayScreen.prototype.onPopupHide = function() {
			keyboardController.enable();
			this.removeChild(this.popup);
			this.popup = null;
			if (gameModel.collected === gameModel.total) {
				this.showPopup("everything");
			}
		};

		PlayScreen.prototype.createMap = function() {
			var map = new Map();
			map.init();
			return this.addChild(map);
		};

		PlayScreen.prototype.createCounter = function() {
			var counter = new Counter();
			return this.addChild(counter);
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
			findController.disable();
			msg.off("keyUp", this.moveUp);
			msg.off("keyDown", this.moveDown);
			msg.off("keyRight", this.moveRight);
			msg.off("keyLeft", this.moveLeft);
			this.emit("changeScreen", Screens.GAME_SCREEN);
		};

		return PlayScreen;
	});