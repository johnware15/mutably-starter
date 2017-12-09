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
  const element = req.params.id
  if (!req.params.id) {
    return 'Nothing to see. Nothing to edit.'
  } else if (typeof element === 'integer') {
    function edit(pokemon, element) {

    }
  }
})

router.post('/pokemon/add', (req, res) => {

})
//
// function remove(element, callback) {
//   pokemon.splice(element, 1)
//   callback(pokemon)
// }

module.exports = router
