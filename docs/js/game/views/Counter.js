define(["lib/pixi.min", "core/utils/ClassUtil", "core/utils/FunctionUtil", "core/events/msg", "models/GameModel"],
	function(PIXI, ClassUtils, FunctionUtils, msg, gameModel) {

	"use strict";

	function Counter() {
		PIXI.Container.call(this);
		FunctionUtils.bindAll(this);

		this.counterText = this.addText();
		msg.on("found", this.updateCounter);
	};

	ClassUtils.extend(Counter, PIXI.Container);

	Counter.prototype.addText = function() {
		var bitmapFontText = new PIXI.extras.BitmapText(gameModel.collected + "?" + gameModel.total, { font: "64px potions", align: "right" });
		bitmapFontText.x = 320 - bitmapFontText.width;
		return this.addChild(bitmapFontText);
	};

	Counter.prototype.updateCounter = function() {
		this.counterText.text = gameModel.collected + "?" + gameModel.total;
		this.counterText.x = 320 - this.counterText.width;
	};

	return Counter;

});


