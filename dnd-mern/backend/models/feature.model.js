const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const featureSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    description: {type: [String], required: true},
    url: {type: String}
});

const Feature = mongoose.model('Feature', featureSchema);


module.exports = Feature;