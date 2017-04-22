define(function() {
	"use strict";

	var ClassUtil = {};

	ClassUtil.extend = function(child, parent) {
		child.prototype = Object.create(parent.prototype);
		child.prototype.constructor = child;
		for (var i in parent) {
			child[i] = parent[i];
		}
	};

	return ClassUtil;
});