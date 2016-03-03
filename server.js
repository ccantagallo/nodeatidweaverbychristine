var express = require("express");

var app = express();

app.user(express.static)('public'));

app.get("/", function(req,res,next)
{
    res.send("Node at idweaver by Christine");
});

module.exports = app;
