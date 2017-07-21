// REQUIRE
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// APP SETTINGS
const app = express();
const port = process.env.PORT || 3000;


// APP PARAMS
const TodontsController = require('./controllers/todonts');


// MIDDLEWARE
app.use( logger('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));


// VIEWS
app.set('view engine', 'hbs');
app.use('/todonts', TodontsController);








// SERVER 
app.listen(port, (req, res) =>{
    console.log(`server up on ${port}`);
});