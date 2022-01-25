var express = require("express");
var route = express.Router();
var admin = require("../controllers/admin");

route.get("/", (req,res) => {
 res.send("hello world");
})

route.get("/api/admins", admin.index);

route.get("/test", function(req, res) {
    console.log("this is a test")
    res.status(200).send("this is a test");
})

route.get('/400', function(req,res){
    res.status(400).send('You are in some shit');
})


module.exports = route;
