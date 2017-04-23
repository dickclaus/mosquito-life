define(["core/utils/FunctionUtil", "core/events/msg"], function(FunctionUtil, msg) {
	"use strict";

	function KeyboardController() {
		FunctionUtil.bindAll(this);
		this.keyPressed = null;
	}

	KeyboardController.prototype.onKeyDown = function(event) {
		this.keyPressed = event.keyCode;
		window.removeEventListener("keydown", this.onKeyDown);
		window.addEventListener("keyup", this.onKeyUp);
	};

	KeyboardController.prototype.onKeyUp = function(event) {
		if (event.keyCode === this.keyPressed) {
			window.addEventListener("keydown", this.onKeyDown);
			window.removeEventListener("keyup", this.onKeyUp);
			this.emitEvent();
			this.keyPressed = null;
		}
	};

	KeyboardController.prototype.emitEvent = function() {
		if (this.keyPressed === 38) {
			msg.emit("keyUp");
		} else if (this.keyPressed === 40) {
			msg.emit("keyDown");
		} else if (this.keyPressed === 39) {
			msg.emit("keyRight");
		} else if (this.keyPressed === 37) {
			msg.emit("keyLeft");
		} else {
			msg.emit("keyPress", this.keyPressed);
		}
	};

	KeyboardController.prototype.enable = function() {
		window.addEventListener("keydown", this.onKeyDown);
	};

	KeyboardController.prototype.disable = function() {
		window.removeEventListener("keyup", this.onKeyUp);
		window.removeEventListener("keydown", this.onKeyDown);
	};

	return new KeyboardController();
});
