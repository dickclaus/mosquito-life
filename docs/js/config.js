// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
	baseUrl: "js",
	paths: {
		core: "core",
		controllers: "game/controllers",
		models: "game/models",
		views: "game/views",
		lib: "../lib",
		TweenMax: "../lib/TweenMax.min"
	},
	deps: ["game/main"]
});