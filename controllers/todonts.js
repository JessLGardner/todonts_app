const express = require('express');
const router = express.Router();
const data = require('../models/data');

// INDEX

router.get('/', (req, res) =>{
    res.render('todonts/index', {
        todonts: data.seededToDonts
    });
});




// NEW





// CREATE




// SHOW





// EDIT




// UPDATE





// DELETE






module.exports = router;