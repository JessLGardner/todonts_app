// REQUIRE
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');

// APP SETTINGS
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.use( logger('dev'));


// VIEWS
app.set('view engine', 'hbs');









// SERVER 
app.listen(port, (req, res) =>{
    console.log(`server up on ${port}`);
});