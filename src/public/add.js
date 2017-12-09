const express = require('express');
const app = express();


app.post('/', (req, res) => {
  let add
  if(!req.body.add) {
    res.json('Enter something to add')
  } else {
    res.render('')
  }
})

//'POST' request
//const add

module.exports = add
