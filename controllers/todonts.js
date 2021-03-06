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
router.get('/new', (req, res) => {
    res.render('todonts/new');
});


// CREATE
router.post('/', (req, res) => {
   const newTodont = {
    description: req.body.description,
    urgent: req.body.urgent
    };

    data.seededToDonts.push(newTodont);  
    res.redirect('todonts')
});


// SHOW
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const todonts = data.seededToDonts[id];

    res.render('todonts/show', {
        todonts: todonts,
        id: id
    });
});



// EDIT
router.get('/:id/edit', (req, res) =>{
    const id = req.params.id;
    const todonts = data.seededToDonts[id];
    
    res.render('todonts/edit', {
      todonts: todonts,
      id: id
    });
});



// UPDATE
router.put('/:id', (req, res) =>{
    const id = req.params.id;                 
    const todonts = data.seededToDonts[id];         
    todonts.description = req.body.description;   
    todonts.urgent = req.body.urgent;
    res.method="GET";                          
    res.redirect(`/todonts/${id}`);
});




// DELETE
router.delete('/:id', (req, res) =>{
    data.seededToDonts.splice(req.params.id, 1);
    res.method="GET";                          
    res.redirect('/todonts');
});




module.exports = router;