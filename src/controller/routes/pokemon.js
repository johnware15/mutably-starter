const router = require('express').Router()

const pokemon = require('../../model/seeds/pokemon.js');
const Pokemon = require('../../model/pokemon.js');

router.get('/pokemon/getAll', (req, res) => {
  if(!req.body.pokemon) {
    return 'Your ball is empty'
  } else {
    res.setHeader('Content-Type', 'application/json')
    res.json(JSON.stringify(pokemon))
  }
})

router.delete('/pokemon/remove/:id', (req, res) => {
  const element = parseInt(req.params.id)
  Pokemon.remove(element)
    .then(result => res.json(result))
    .catch(error => res.send('You removing something or nah?'))
})

router.put('/pokemon/edit/:id', (req, res) => {
  const element = parseInt(req.params.id)
  Pokemon.edit(element)
    .then(result => res.json(result))
    .catch(error => res.send('Nothing to change'))
})

router.post('/pokemon/add', (req, res) => {
  const element = req.body.pokemon
  Pokemon.add(element)
    .then(result => res.json(result))
    .then(error => res.send('Please add something'))
})

function remove(element, callback) {
  pokemon.splice(element, 1)
  callback(pokemon)
}

function edit(element, callback) {
  let old
  let changed
  pokemon.name.replace(old, changed)
  pokemon.pokedex.replace(old, changed)
  pokemon.image.replace(old, changed)
  callback(pokemon)
}

function add(element, callback) {
  let poke = {
    name: name,
    pokedex: pokedex,
    evolves_from: evolvesFrom,
    image: image
  }
  pokemon.push(poke)
  callback(pokemon)
}

module.exports = router
