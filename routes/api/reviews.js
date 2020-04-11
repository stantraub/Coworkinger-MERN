const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Space = require('../../models/Space')
const Review = require('../../models/Review');
const validateReviewInput = require('../../validation/reviews');

router.get('/', (req, res) => {
    Review.find()
        .sort({ date: -1 })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(404).json({ noreviewsfound: 'No reviews found' }));
});

router.get('/user/:user_id', (req, res) => {
    Review.find({ user: req.params.user_id })
        .sort({ date: -1 })
        .then(reviews => res.json(reviews))
        .catch(err =>
            res.status(404).json({ noreviewsfound: 'No reviews found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err =>
            res.status(404).json({ noreviewfound: 'No review found with that ID' })
        );
});

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        // const { errors, isValid } = validateReviewInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }

        const { text, rating, reviewer, spaceId} = req.body
        const review = new Review({
            text,
            rating,
            reviewer,
            spaceId
        });

        const space = await Space.findById(spaceId)
        
        space.reviews.push(review)
        await space.save()
        await review.save()
        
        res.json(review)
    }
);

module.exports = router;