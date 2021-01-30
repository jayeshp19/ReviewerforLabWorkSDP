const express = require('express');
const router = express.Router();
const verify = require('../verifyToken');


router.get('/',verify, (req,res) => {
    res.json({
        assignments: {
            title: 'fisrt assignment',
            description: 'data that user cannot access without login'
        }
    });
});

module.exports = router;