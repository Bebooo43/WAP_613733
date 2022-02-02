const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const conn = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'entries'
});

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json()); //parse requests to content-type: application/json
router.use(bodyParser.json())
router.use(express.urlencoded({extended: true})); //parse requests TO content-type: application/x-www-form-urlencoded

router.post("/dictionary", function (req, res) {
    conn.query('SELECT * FROM entries where word = ' +  mysql.escape(req.body.term), function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send({payload:result} )
    });

})

module.exports = router;