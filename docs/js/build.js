({
	mainConfigFile: "config.js",
	// Relativve to this file
	baseUrl: ".",
	name: "config",
	paths: {
		"lib/pixi.min":"empty:",
		"lib/TweenMax.min":"empty",
		"lib/soundjs.min":"empty"
	},
	out: "../../dist/js/game.js",
	removeCombined: true,
	findNestedDependencies: true
})