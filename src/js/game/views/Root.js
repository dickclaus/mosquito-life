define(["lib/pixi.min", "core/utils/ClassUtil", "core/utils/FunctionUtil", "views/screens/Screens",
		"views/screens/GameScreen", "core/screens/ScreenManager"],
	function(PIXI, ClassUtil, FunctionUtil, Screens, GameScreen, ScreenManager) {
		"use strict";

		function Root() {
			PIXI.Container.call(this);
			FunctionUtil.bindAll(this);

			this.background = this.createBackground();

			this.configureScreens();
		}

		ClassUtil.extend(Root, PIXI.Container);

		Root.prototype.createBackground = function() {
			// to override
		};

		Root.prototype.configureScreens = function() {
			this.screenManager = new ScreenManager(this);

			var gameScreen = new GameScreen(Screens.GAME_SCREEN);
			this.screenManager.registerScreen(gameScreen);

			this.screenManager.show(Screens.GAME_SCREEN);
		};

		return Root;
	});