const express = require('express')
const {createShoe, getShoe} = require('../controllers/ShoesController');

// saving express Router as router 
const router = express.Router()

router.get('/shoes/:id?', getShoe )
router.post('/shoes', createShoe )



// exporting the router 
module.exports = router