const pokemonRouter = require('./pokemon.js');
const router = require('express').Router();

router.use(pokemonRouter)

router.get('/', (res, req) => {
  res.render('index')
})

module.exports = router
