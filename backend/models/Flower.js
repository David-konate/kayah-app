const mongoose = require('mongoose');

//Schema (id géné par mongo)
const flowerSchema = mongoose.Schema({
    name: { type: String, require: true},
    cbd: { type: Number},
    thc: { type: Number},
    picture: { type: String},
    types: { type: Array}
});

module.exports = mongoose.model('Flower', flowerSchema);