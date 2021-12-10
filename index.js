const discord = require("discord.js");
const client = new discord.Client();

var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs")
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.render('pages/index');
});

var listeners = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listeners.address().port)
});





client.on("ready", () => {
  console.log("I am Looking Forward to this :D")
})

client.login("ODE1OTU1MDA2NTExMTIwNDI0.YDz7UQ.A4Pn3NrmD2pSk9m2UYi7RjVT-oQ")