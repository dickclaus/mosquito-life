define(function() {
	"use strict";

	function GameModel() {
		this.initialize();
	}

	GameModel.prototype.initialize = function() {
		this.collected = 0;

		this.W_SIZE = 10;
		this.H_SIZE = 16;

		this.currentCol = 5;
		this.currentRow = 6;

		this.found = [];

		this.items = ["ebony", "stone", "fire", "mosquito"];
		this.total = this.items.length;
		this.itemPositions = [{col:6,row:6}, {col:5, row:5}, {col:9, row:0}, {col:0, row:14}];
	};

	GameModel.prototype.hasFound = function(item) {
		if (this.found.indexOf(item) === -1) {
			return false;
		}
		return true;
	};

	return new GameModel();
});
