define(["core/utils/FunctionUtil"], function(FunctionUtil) {
	"use strict";

	function ScreenManager(container) {
		FunctionUtil.bindAll(this);
		this.container = container;
		this.screens = {};
	}

	ScreenManager.prototype.registerScreen = function(screen) {
		this.screens[screen.id] = screen;
	};

	ScreenManager.prototype.getScreenById = function(id) {
		return this.screens[id];
	};

	ScreenManager.prototype.show = function(id) {
		this.currentScreen = this.screens[id];
		this.container.addChild(this.currentScreen);
		//console.log(this.currentScreen);
		this.currentScreen.on("changeScreen", this.onChangeScreen);
		this.currentScreen.show();
	};

	ScreenManager.prototype.onChangeScreen = function(id) {
		//console.log("%c" + "onChangeScreen " + id, "color: #FF0000");
		this.currentScreen.off("changeScreen", this.onChangeScreen);
		this.container.removeChild(this.currentScreen);
		this.show(id);
	};

	ScreenManager.prototype.hide = function(id) {

	};

	return ScreenManager;
});
