var express = require('express');

var router = express.Router();

var tourLocations = require ('./models/tourAttributes');

router.route('/tourLocations')
    
    .post(function(req, res) {
        var request = new tourLocations();
        
        request.title = req.body.title
        request.type = req.body.type
        request.longitude = req.body.longitude
        request.latitude = req.body.latitude
        request.description = req.body.description
        request.images = req.body.images
        request.thumbnail = req.body.thumbnail
        
        request.save(function(err) {
            if (err)
            res.send(err);
           res.json({ request: 'your location have been added succesfully'});
        });
    });
    module.exports = router;
