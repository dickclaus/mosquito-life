define(["lib/pixi.min", "core/utils/ClassUtil", "core/utils/FunctionUtil", "core/events/msg", "models/GameModel"],
	function(PIXI, ClassUtils, FunctionUtils, msg, gameModel) {
	"use strict";

	function Map() {
		PIXI.Container.call(this);
		FunctionUtils.bindAll(this);

		this.LEFT_OFFSET = 2;
		this.TOP_OFFSET = 3;

		this.map = this.addMap();
		this.items = [];

		msg.on("keyUp", this.moveUp);
		msg.on("keyDown", this.moveDown);
		msg.on("keyRight", this.moveRight);
		msg.on("keyLeft", this.moveLeft);
		msg.on("found", this.onFound);
	}

	ClassUtils.extend(Map, PIXI.Container);

	Map.prototype.init = function() {
		this.addObjects();
		this.repositionMap();
	};

	Map.prototype.onFound = function(i) {
		this.map.removeChild(this.items[i]);
	};

	Map.prototype.addMap = function() {
		var map = PIXI.Sprite.fromFrame("map.png");
		map.anchor.set(0, 0);
		return this.addChild(map);
	};

	Map.prototype.addObjects = function() {
		for (var i = 0; i < gameModel.items.length; i++) {
			var item = gameModel.items[i];
			var child = this.addItem(item, gameModel.itemPositions[i]);
			this.items.push(child);
		}
	};

	Map.prototype.addItem = function(itemName, position) {
		var item = PIXI.Sprite.fromFrame(itemName + ".png");
		item.anchor.set(0, 0);
		item.position.set((this.LEFT_OFFSET + position.col) * 64, (this.TOP_OFFSET + position.row) * 64);
		return this.map.addChild(item);
	};

	Map.prototype.moveUp = function() {
		gameModel.currentRow--;
		this.repositionMap();
	};

	Map.prototype.moveDown = function() {
		gameModel.currentRow++;
		this.repositionMap();
	};

	Map.prototype.moveLeft = function() {
		gameModel.currentCol--;
		this.repositionMap();
	};

	Map.prototype.moveRight = function() {
		gameModel.currentCol++;
		this.repositionMap();
	};

	Map.prototype.playNoWay = function() {
		window.createjs.Sound.play("noWay");
	};

	Map.prototype.checkBorder = function() {
		if (gameModel.currentCol >= gameModel.W_SIZE) {
			gameModel.currentCol--;
			this.playNoWay();
		}
		if (gameModel.currentCol < 0) {
			gameModel.currentCol++;
			this.playNoWay();
		}
		if (gameModel.currentRow >= gameModel.H_SIZE) {
			gameModel.currentRow--;
			this.playNoWay();
		}
		if (gameModel.currentRow < 0) {
			gameModel.currentRow++;
			this.playNoWay();
		}
	};

	Map.prototype.repositionMap = function() {
		this.checkBorder();
		this.map.position.x = gameModel.currentCol * -64;
		this.map.position.y = gameModel.currentRow * -64;
		msg.emit("moved");
	};


	return Map;
});
