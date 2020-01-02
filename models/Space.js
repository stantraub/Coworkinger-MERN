const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

const Space = mongoose.model('spaces', SpaceSchema);
module.exports = Space;