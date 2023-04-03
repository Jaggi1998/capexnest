var express = require("express");
const bodyParser = require('body-parser');
var app = express();
require('./db/conn');
 
app.use(express.static('public'));
 
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});