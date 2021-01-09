var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(date) {
        res.render("index", {burgers: data});
    });
});

router.post("/api/add", function(req, res) {
    console.log(req.body);
    console.log(typeof req.body.devoured);
    burger.create([
       "burger_name", "devoured" 
    ], [
        req.body.burger_name, false
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/devour/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
    });
});

module.exports = router;