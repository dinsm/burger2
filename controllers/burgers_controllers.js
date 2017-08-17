// Node Dependencies
var express = require("express");
var path = require("path");
var body = require("body-parser");
//var models = require("../models/burger.js");
var models = require(path.join(__dirname,"..","models"));

var router = express.Router();
var app = express();

// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync();


// Create routes
// ----------------------------------------------------
router.get("/", function (req, res) {
    models.burgers.findAll({})

        .then (function (data) {
            var hbsObject = {
                burgers: data
            };
            res.render("index", hbsObject);
        });
    });


router.post("/", function (req, res) {
    var burgerName = req.body.name;
    models.burgers.create({
            burger_name: burgerName, //burger_name: req.body.burger_name
            devoured: false
    })
        .then (res.redirect("/"));
        // .then(function(res) {
        // res.redirect("/");
});


router.put("/:id", function(req,res) {
    models.burgers.update({
        devoured: true},
        //var id = req.params.id,
        {where:
            {id: req.params.id}
        })
        .then(res.redirect("/"));
    });

//I want destroy/truncate
router.delete("/:id", function (req, res) {
 //var burger_Id = req.params.id;
    models.burgers.truncate({
        //db.Booking.destroy({ truncate : true, cascade: false })
        where:{
            id: req.params.id
            //id: burger_Id
            }
    })
        .then(res.redirect("/"));
});

// Export routes
module.exports = router;











