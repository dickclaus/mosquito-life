define(["lib/pixi.min", "core/utils/ClassUtil", "core/ui/BaseButton"], function(PIXI, ClassUtil, BaseButton) {
	"use strict";

	function TextButton(label) {
		this.labelText = label;
		BaseButton.call(this);
	}

	ClassUtil.extend(TextButton, BaseButton);

	TextButton.prototype.onClick = function() {
		if (!this.enabled) return;
		console.log("%c" + "clicked", "color: #FF0000");
		this.emit("buttonClicked");
	};

	TextButton.prototype.drawSkin = function() {
		var graphics = new PIXI.Graphics();
		graphics.lineStyle(1, 0, 1);
		graphics.beginFill(0x3366AA, 1);
		graphics.drawRect(-60, -25, 120, 50);
		graphics.endFill();
		this.addChild(graphics);

		this.label = this.createLabelText();
	};

	TextButton.prototype.createLabelText = function() {
		var text = new PIXI.Text(this.labelText);
		text.anchor.set(0.5);
		return this.addChild(text);
	};



	return TextButton;
});
