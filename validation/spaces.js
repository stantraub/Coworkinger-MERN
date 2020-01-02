const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateSpaceInput(data) {
    let errors = {};

    data.text = validText(data.text) ? data.text : '';

    if (!Validator.isLength(data.name, { min: 1, max: 50 })) {
        errors.name = 'Review must be between 1 and 50 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if (Validator.isEmpty(data.phone)) {
        errors.phone = 'Phone Number is required';
    }

    if (!Validator.isLength(data.address, { min: 1, max: 200 })) {
        errors.address = 'Address must be between 1 and 200 characters';
    }

    if (Validator.isEmpty(data.address)) {
        errors.address = 'Address field is required';
    }

    if (Validator.isEmpty(data.cost)) {
        errors.cost = 'Cost field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};