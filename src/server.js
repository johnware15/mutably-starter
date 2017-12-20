const express = require('express')
const app = express()
const path = require('path');
const routes = require('./controller/routes');
const ejs = require('ejs');
const bodyParser = require('body-parser');

app.use(express.static('public'))

// set 'html' as the engine, using ejs's renderFile function
// require('ejs');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html')
// app.set('views', path.join(__dirname, 'views'));

// app.use(routes)

app.get('/', (req, res) => {
  res.render('index')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
