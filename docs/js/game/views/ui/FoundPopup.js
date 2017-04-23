define(["lib/pixi.min", "core/utils/ClassUtil", "core/utils/FunctionUtil", "core/events/msg", "models/GameModel"],
	function(PIXI, ClassUtils, FunctionUtils, msg, gameModel) {

	"use strict";

	function FoundPopup(name) {
		PIXI.Container.call(this);
		var popup = PIXI.Sprite.fromFrame("you_found.png");
		popup.anchor.set(0, 0);
		popup.position.set(0, 120);
		this.addChild(popup);

		var item = PIXI.Sprite.fromFrame(name + ".png");
		item.anchor.set(0.5,0.5);
		item.position.set(160, 160);
		popup.addChild(item);
	};

	ClassUtils.extend(FoundPopup, PIXI.Container);

	return FoundPopup;
});

