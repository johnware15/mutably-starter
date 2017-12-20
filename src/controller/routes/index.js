const pokemonRouter = require('./pokemon');
const router = require('express').Router();

router.use(pokemonRouter)

module.exports = router
