define(["TweenMax"], function(TweenMax) {
	"use strict";

	return function(func, timeout) {
		TweenMax.delayedCall(timeout, func, Array.prototype.slice.call(arguments, 2));
	};
});