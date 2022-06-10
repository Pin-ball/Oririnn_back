// require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})
require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
const cors = require("cors");
var con = require("./config");
var path = require("path")
const port = process.env.PORT || 8000;

var indexRouter = require('./routes/index');


var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// app.use(express.static(path.join(__dirname, 'build_front')))
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, 'build_front', 'index.html'))
// });


app.listen(port, '0.0.0.0', () => {
  console.log(`listening on port ${port}`); 
});

app.use('/static', express.static('public'))
app.use('/', indexRouter);


con.connect()


module.exports = app;
