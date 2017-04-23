define(["lib/pixi.min", "core/utils/ClassUtil", "core/utils/FunctionUtil"],
	function(PIXI, ClassUtil, FunctionUtil) {
	"use strict";

	function BaseScreen(id) {
		PIXI.Container.call(this);
		FunctionUtil.bindAll(this);

		this.id = id;

		this.background = this.createBackground();
	}

	ClassUtil.extend(BaseScreen, PIXI.Container);

	BaseScreen.prototype.createBackground = function() {
		var graphics = new PIXI.Graphics();
		graphics.lineStyle(2, 0xFFFFFF, 1);
		graphics.beginFill(0x3366AA, 1);
		graphics.drawRoundedRect(0, 0, 800, 600, 150);
		graphics.endFill();
		return this.addChild(graphics);
	};

	BaseScreen.prototype.show = function() {
		this.emit("screenShowed");
	};

	BaseScreen.prototype.hide = function() {

	};

	return BaseScreen;
});