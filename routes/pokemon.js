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

app.delete('/pokemon/remove/:id', (req, res) => {
  const element = req.params.element
  if(!req.params.pokemon) {
    return 'You removing something or nah?'
  } else if(typeof element === 'integer') {
    function remove(pokemon, element) {
      const index = pokemon.indexOf(element)
      return pokemon.splice(index, 1)
    }
    res.setHeader('Content-Type', 'application/json')
    res.json(JSON.stringify(element))
  }
})
