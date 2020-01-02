const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Space = require('../../models/Space');
const validateSpaceInput = require('../../validation/spaces');

router.get('/', (req, res) => {
    Space.find()
        .then(spaces => res.json(spaces))
        .catch(err => res.status(404).json({ nospacesfound: 'No spaces found' }));
});

router.get('/user/:user_id', (req, res) => {
    Space.find({ owner: req.params.user_id })
        .then(spaces => res.json(spaces))
        .catch(err =>
            res.status(404).json({ nospacesfound: 'No spaces found from that owner' }
            )
        );
});

router.get('/:id', (req, res) => {
    Space.findById(req.params.id)
        .then(space => res.json(space))
        .catch(err =>
            res.status(404).json({ nospacefound: 'No space found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateSpaceInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newSpace = new Space({
            name: req.body.name,
            address: req.body.address,
            cost: req.body.cost,
            phone:req.body.phone,
            email: req.body.email,
            owner: req.user.id
        });

        newSpace.save().then(space => res.json(space));
    }
);

module.exports = router;