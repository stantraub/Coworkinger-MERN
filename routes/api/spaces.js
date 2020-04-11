const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const multer = require("multer");
const uuid = require('uuid')
const AWS = require("aws-sdk");
const AWS_ACCESS_KEY_ID = require("../../config/keys").accessKeyId
const AWS_SECRET_ACCESS_KEY = require("../../config/keys").secretAccessKey
const AWS_REGION = require("../../config/keys").region
const AWS_BUCKET = require("../../config/keys").bucket


var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

const Space = require('../../models/Space');
const Review = require('../../models/Review')
const validateSpaceInput = require('../../validation/spaces');

router.get('/', (req, res) => {
    Space.find()
        .then(spaces => res.json(spaces))
        .catch(err => res.status(404).json({ nospacesfound: 'No spaces found' }));
});

router.get('/:id', (req, res) => {
    Space.findById(req.params.id)
        .populate('reviews')
        .then(space => res.json(space))
        .catch(err =>
            res.status(404).json({ nospacefound: 'No space found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }), (req, res) => {
        // const { errors, isValid } = validateSpaceInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }
        const newSpace = new Space({
            name: req.body.name,
            address: req.body.address,
            cost: req.body.cost,
            phone:req.body.phone,
            email: req.body.email
        });

        console.log('hit post route')

        newSpace.save().then(space => res.json(space));
    }
);

module.exports = router;