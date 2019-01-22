var db = require("../models/brewery");

module.exports = function(app) {
	// Load index page
	app.get("/", function(req, res) {
		res.render("index", {
			msg: "Welcome!"
		});
	});

	// Load example page and pass in an example by id
	app.get("/survey", function(req, res) {
		res.render("survey", {
			msg: "Welcome!"
		});
	});
	
  // Load example page and pass in an example by id
  app.get("/result", function(req, res) {
    res.render("result", {
      msg: "Welcome!",
      examples: {}
    });
  });

	// // Load example page and pass in an example by id
	// app.get("/result", function(req, res) {
	// 	db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
	// 		res.render("result", {
	// 			example: dbExample
	// 		});
	// 	});
	// });

	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
		res.render("404");
	});
};
