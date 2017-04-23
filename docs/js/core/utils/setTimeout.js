define(["TweenMax"], function(TweenMax) {
	"use strict";

	return function(func, timeout) {
		return TweenMax.delayedCall(timeout, func, Array.prototype.slice.call(arguments, 2));
	};
});