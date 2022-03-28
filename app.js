var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs')


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'flutter-web')));

const templatePathCompleted = './flutter-web/index.html'
const templateCompleted = fs.readFileSync(templatePathCompleted, 'utf-8')

app.listen(3000, (req, res) => {
    
})

app.get('/', (req, res) => {
    return res.send(templateCompleted)
})

