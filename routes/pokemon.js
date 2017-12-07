const express = require('express');
const app = express();
const pokemon = require('../seeds/pokemon.js');

app.get('/pokemon/getAll', (req, res) => {
  if(!req.body.pokemon) {
    return 'Your ball is empty'
  } else {
    res.setHeader('Content-Type', 'application/json')
    res.json(JSON.stringify(pokemon))
  }
})
