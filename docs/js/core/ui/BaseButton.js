define(["lib/pixi.min", "core/utils/ClassUtil"], function(PIXI, ClassUtil) {
	"use strict";

	function BaseButton() {
		PIXI.Container.call(this);

		this.interactive = true;
		this.click = this.tap = this.onClick;

		this.enabled = true;
		this.drawSkin();
	}

	ClassUtil.extend(BaseButton, PIXI.Container);

	BaseButton.prototype.setEnabled = function(enabled) {
		this.enabled = enabled;
		this.refresh();
	};

	BaseButton.prototype.onClick = function() {

	};

	BaseButton.prototype.drawSkin = function() {

	};

	BaseButton.prototype.refresh = function() {
		if (this.enabled) {
			this.alpha = 1;
		} else {
			this.alpha = 0.5;
		}
	};

	return BaseButton;
});
