const express = require("express");
const app = express();
const quizServer = require("./quizServer");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.set("view engine", "jade");

app.get("/", function(req, res) {
    res.render("number_quiz.pug", { score: 0, count: 0, sequence: quizServer.sequence });
})

app.post("/", function(req, res) {
    quizServer.checkAnswer(req, res);
});

app.listen(8080, function() {
    console.log("server running on port 8080");
})