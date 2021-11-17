const Flower = require('../models/Flower');
const fs = require('fs');


//recupération de toutes les fleurs
exports.getAllFlowers = (req, res, next) => {
    Flower.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};