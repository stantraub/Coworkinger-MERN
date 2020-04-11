const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reviewer: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    rating: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    spaceId: {
        type: Schema.Types.ObjectId,
        ref: 'spaces'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('reviews', ReviewSchema);

module.exports = Review;