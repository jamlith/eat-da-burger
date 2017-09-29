var express = require('express');
var hbrs = require('express-handlebars');
var mongoose = require('mongoose');
var bp = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bp.json);
app.use(bp.urlencoded({ extended: true }));
app.use(bp.text());
app.use(bp.json({ type: 'application/vnd.api+json' }));
app.engine('handlebars', hbrs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/test', (req, res) => {
    res.send('word.');
});

app.use((req, res) => {
    console.log(JSON.stringify(req));
})

app.listen(PORT, function() {
    console.log('Server is listening on port ' + PORT);
});