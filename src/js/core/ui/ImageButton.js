define(["lib/pixi.min", "core/utils/ClassUtil", "core/ui/BaseButton"], function(PIXI, ClassUtil, BaseButton) {
	"use strict";

	function ImageButton(image) {
		this.image = image;
		BaseButton.call(this);

		this.mouseover = this.onMouseOver;
		this.mouseout = this.onMouseOut;
	}

	ClassUtil.extend(ImageButton, BaseButton);

	ImageButton.prototype.onClick = function() {
		if (!this.enabled) return;
		this.emit("buttonClicked");
	};

	ImageButton.prototype.drawSkin = function() {
		var sprite = PIXI.Sprite.fromFrame(this.image);
		sprite.anchor.set(0.5, 0.5);
		this.addChild(sprite);
	};

	ImageButton.prototype.onMouseOver = function() {
		console.log("%c" + "over", "color: #FF0000");
	};

	ImageButton.prototype.onMouseOut = function() {
		console.log("%c" + "out", "color: #FF0000");
	};

	return ImageButton;
});
