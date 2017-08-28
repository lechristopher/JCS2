// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for homepage
    app.get("/", function (req, res) {
        console.log("homepage");
        res.sendFile(path.join(global.__basedir, '/views/index.html'));
    });
    // // GET route for servicepage
    //  app.get("/services", function(req, res) {
    //    console.log("servicepage");
    //        res.sendFile(path.join(global.__basedir, '/views/services.html'));
    //  });
    // GET route for aboutpage
    app.get("/about", function (req, res) {
        console.log("aboutpage");
        res.sendFile(path.join(global.__basedir, '/views/about.html'));
    });
    // GET route for contact me
    app.get("/contact", function (req, res) {
        console.log("contactme");
        res.sendFile(path.join(global.__basedir, '/views/contact.html'));
    });

    // POST route for saving a new client.
    app.post("/contact", function (req, res) {
        console.log(req.body);
        db.ClientDirectory.create(req.body, function (result) {
        })
    });

};