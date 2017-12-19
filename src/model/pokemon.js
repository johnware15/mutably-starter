const pokemon = require('../model/seeds/pokemon.js');

function remove(element) {
  return new Promise((resolve, reject) => {
    if(typeof element === 'number'){
      pokemon.splice(element, 1)
      resolve(pokemon)
    }
    reject()
  })
}

module.exports = {
  remove
}
