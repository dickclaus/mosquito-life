define(["core/utils/FunctionUtil", "core/events/msg", "models/GameModel", ],
	function(FunctionUtil, msg, gameModel) {
	"use strict";

	function FindController() {
		FunctionUtil.bindAll(this);
	}

	FindController.prototype.onMoved = function() {
		for (var i = 0; i < gameModel.itemPositions.length; i++) {
			var pos = gameModel.itemPositions[i];
			if (pos.col === gameModel.currentCol && pos.row === gameModel.currentRow) {
				if (!gameModel.hasFound(gameModel.items[i])) {
					gameModel.found.push(gameModel.items[i]);
					gameModel.collected++;
					msg.emit("found", i);
					window.createjs.Sound.play("found");
				}
			}
		}
	};

	FindController.prototype.enable = function() {
		msg.on("moved", this.onMoved);
	};

	FindController.prototype.disable = function() {
		msg.off("moved", this.onMoved);
	};

	return new FindController();
});