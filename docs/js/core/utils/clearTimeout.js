define(function() {
	"use strict";

	return function(tween) {
		if (tween && tween.kill) {
			tween.kill();
			tween = null;
		}
	};
});