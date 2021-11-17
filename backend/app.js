const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.sujyt.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // accéder à notre API depuis n'importe quelle origine
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With , Content, Accept, Content-Type, Authorization'); // ajouter les headers mentionnés aux requêtes envoyées vers notre API
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // envoyer des requêtes avec les méthodes mentionnées
  next();
});

app.use(express.json());


module.exports = app;