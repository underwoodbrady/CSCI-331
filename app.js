let express = require('express'),
    app = express(),
    serv = require('http').Server(app),
    path = require('path');

let requests = [];

app.get('/', function (req, res) {
    //console.log(req.header('x-forwarded-for') || req.connection.remoteAddress);
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

app.use(express.static(path.join(__dirname, 'public')));

let port = process.env.PORT;

if (port == null || port == "") {
    port = 2020;
}

serv.listen(port);