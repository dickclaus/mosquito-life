define(["lib/pixi.min", "core/utils/ClassUtil", "core/utils/FunctionUtil", "views/screens/Screens",
		"views/screens/GameScreen", "views/screens/PlayScreen", "core/screens/ScreenManager"],
	function(PIXI, ClassUtil, FunctionUtil, Screens, GameScreen, PlayScreen, ScreenManager) {
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

		Root.prototype.resize = function(width, height) {

		};

		Root.prototype.configureScreens = function() {
			this.screenManager = new ScreenManager(this);

			var gameScreen = new GameScreen(Screens.GAME_SCREEN);
			this.screenManager.registerScreen(gameScreen);

			var playScreen = new PlayScreen(Screens.PLAY_SCREEN);
			this.screenManager.registerScreen(playScreen);

			this.screenManager.show(Screens.GAME_SCREEN);
		};

		return Root;
	});