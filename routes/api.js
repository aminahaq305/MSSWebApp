const express = require('express');

const Dispensed = require('../models/dispensed');

const router = express.Router();


// Routes
router.get('/get', (req, res) => {

    Dispensed.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

module.exports = router;
