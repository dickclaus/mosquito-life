define(["lib/pixi.min", "core/utils/ClassUtil", "core/utils/FunctionUtil", "core/events/msg", "models/GameModel"],
	function(PIXI, ClassUtils, FunctionUtils, msg, gameModel) {
	"use strict";

	function Map() {
		PIXI.Container.call(this);
		FunctionUtils.bindAll(this);
		this.currentCol = 5;
		this.currentRow = 6;

		this.map = this.addMap();
		this.repositionMap();

		msg.on("keyUp", this.moveUp);
		msg.on("keyDown", this.moveDown);
		msg.on("keyRight", this.moveRight);
		msg.on("keyLeft", this.moveLeft);
	}

	ClassUtils.extend(Map, PIXI.Container);

	Map.prototype.addMap = function() {
		var map = PIXI.Sprite.fromFrame("map.png");
		map.anchor.set(0, 0);
		return this.addChild(map);
	};

	Map.prototype.moveUp = function() {
		this.currentRow--;
		this.repositionMap();
	};

	Map.prototype.moveDown = function() {
		this.currentRow++;
		this.repositionMap();
	};

	Map.prototype.moveLeft = function() {
		this.currentCol--;
		this.repositionMap();
	};

	Map.prototype.moveRight = function() {
		this.currentCol++;
		this.repositionMap();
	};

	Map.prototype.playNoWay = function() {
		window.createjs.Sound.play("noWay");
	};

	Map.prototype.checkBorder = function() {
		if (this.currentCol >= gameModel.W_SIZE) {
			this.currentCol--;
			this.playNoWay();
		}
		if (this.currentCol < 0) {
			this.currentCol++;
			this.playNoWay();
		}
		if (this.currentRow >= gameModel.H_SIZE) {
			this.currentRow--;
			this.playNoWay();
		}
		if (this.currentRow < 0) {
			this.currentRow++;
			this.playNoWay();
		}
	};

	Map.prototype.repositionMap = function() {
		this.checkBorder();

		this.map.position.x = this.currentCol * -64;
		this.map.position.y = this.currentRow * -64;
	};


	return Map;
});
