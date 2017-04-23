define(function() {
	"use strict";

	function BaseController(model, view) {
		this.model = model;
		this.view = view;
	}

	return BaseController;
});