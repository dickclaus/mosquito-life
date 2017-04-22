define(["lib/pixi.min", "core/utils/ClassUtil"], function(PIXI, ClassUtil) {
	"use strict";

	function msg() {
		PIXI.Container.call(this);
		console.log("create");
	}

	ClassUtil.extend(msg, PIXI.Container);

	return new msg();
});
