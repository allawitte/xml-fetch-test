var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(express.static(__dirname + '/public'));
//app.use(require('body-parser').urlencoded({extended: true}));
//app.use(bodyParser.json());

app.post('/xmlhttp/', function (req, response) {
    console.log(req.body);
    response.send('hello xmlhttp');
});

app.post('/fetch/', function (req, response) {
    console.log(req.body);
    response.json('hello fetch');
});
app.post('/formdata/', upload.fields([]), function (req, response) {
    console.log(req.body);
    response.json('hello formdata');
});

app.listen(8888);
console.log("Running at Port 8888");


/**
 * Created by Alla on 8/29/2017.
 */
/**
 * Created by Alla on 9/13/2017.
 */
