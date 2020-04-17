const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


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
        .populate({
            path: 'reviews',
            model: 'reviews',
            populate: {
                path: 'reviewer',
                model: 'users'
            }
        })
        .then(space => res.json(space))
        .catch(err =>
            res.status(404).json({ nospacefound: 'No space found with that ID' })
        );
});

router.post('/', (req, res) => {
        // const { errors, isValid } = validateSpaceInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }

        const { name, address, state, zipcode, description, cost, phone, email, mainPhoto, latitude, longitude } = req.body
        const newSpace = new Space({
            name,
            address,
            mainPhoto,
            state,
            zipcode,
            description,
            email,
            cost,
            phone,
            latitude,
            longitude
        });

        console.log('hit post route')

        newSpace.save().then(space => res.json(space));
    }
);

module.exports = router;