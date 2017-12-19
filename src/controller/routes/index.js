const pokemonRouter = require('./pokemon.js');
const router = require('express').Router();

router.use(pokemonRouter)

router.get('/', (res, req) => {
  if(router) {
    res.send(router)
  }
})

module.exports = router
