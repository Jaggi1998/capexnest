var express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
var app = express();

const PORT = process.env.PORT || 8080;

require('./db/conn');
 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(express.static('public'));
 
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/assets/css'));
app.use('/js', express.static(__dirname + '/public/assets/js'));
app.use('/images', express.static(__dirname + '/public/assets/images'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


    // ikaria 
    app.get('/ikaria', function(req, res) {
    res.render('pages/ikaria');
    });
      
    // index 
    app.get('/', function(req, res) {
    res.render('pages/index');
    });

    // terms
    app.get('/terms', function(req, res) {
    res.render('pages/terms');
    });

    // privacy
    app.get('/privacy', function(req, res) {
    res.render('pages/privacy');
    });

    // disclaimer
    app.get('/disclaimer', function(req, res) {
    res.render('pages/disclaimer');
    });

    app.get('*', function(req, res){
        res.render('pages/pageNotFound');
      });

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});