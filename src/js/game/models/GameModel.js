define(function() {
	"use strict";

	var instance = null;

	function GameModel() {
		if (instance !== null) {
			throw new Error("This is singleton, should not be initialized twice");
		}
		this.initialize();
	}

	GameModel.prototype.initialize = function() {
		this.collected = 0;
		this.total = 3;
		this.wMapSize = 10;
		this.hMapSize = 16;
		this.wScreenSize = 5;
		this.hScreenSize = 8;
	};

	GameModel.getInstance = function() {
		if (instance === null) {
			instance = new GameModel();
		}
		return instance;
	};

	return GameModel.getInstance();
});
