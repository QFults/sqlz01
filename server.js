const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
// app.set('view engine', '.hbs')

app.use(require('./routes'))

require('./connection')
  .sync()
  .then(() => app.listen(3000, () => console.log('http://localhost:3000')))
  .catch(err => console.error(err))


// Application name: Class Demo App
// API key: 5d9dd88125c2d891b1626606cc234b66
// Shared secret: c8d4e861df54117171359a3926e32b05
// Registered to: quintonfults