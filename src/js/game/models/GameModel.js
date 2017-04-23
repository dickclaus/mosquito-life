define(function() {
	"use strict";

	function GameModel() {
		this.initialize();
	}

	GameModel.prototype.initialize = function() {
		this.collected = 0;
		this.total = 3;

		this.W_SIZE = 10;
		this.H_SIZE = 16;
	};

	return new GameModel();
});
