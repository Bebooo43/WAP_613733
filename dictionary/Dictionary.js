// const sql = require('mysql2');
const express = require("express");
const app = express();
app.use(require('./word'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.set("view engine", "jade");

app.get("/", function(req, res) {
    res.render("dict.pug");
})

app.listen(8080, function () {
    console.log("server running on port 8080");
})