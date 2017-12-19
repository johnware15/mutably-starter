const pokemon = require('../model/seeds/pokemon.js')
const pokeRoutes = require('../controller/routes/pokemon.js')

const method = 'DELETE'

fetch('/pokemon/remove/:id', method) {
  .then(result => response)
  .catch(error)
}

module.exports = remove
