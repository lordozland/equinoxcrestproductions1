// Is this a Model, a View, or a Controller? 
// This file is a Controller. 
// What is it responsible for handling?
// It routes commands to the Model and View parts.

const router = require('express').Router();

// Add a comment describing the purpose of the 'get' route
// GET route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
  res.render('home');
});

router.get('/home', async (req, res) => {
    res.render('home');
  });

router.get('/life', async (req, res) => {
    res.render('life');
  });



module.exports = router;