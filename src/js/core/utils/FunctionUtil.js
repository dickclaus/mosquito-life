define(function() {
	"use strict";

	var FunctionUtil = {};

	FunctionUtil.bindAll = function(context) {
		if (context.__bind) {
			console.error("This scope was already bound. You should not bind twice.");
			return;
		}
		context.__bind = true;

		for (var i in context) {
			if (typeof context[i] === "function") {
				context[i] = context[i].bind(context);
			}
		}
	};

	return FunctionUtil;
});