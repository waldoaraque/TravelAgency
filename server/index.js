const express = require('express')
const path = require('path')
const routes = require('./routes')
const app = express()
const port = 8080
app.set('view engine', 'pug') //habilita pug
app.set('views', path.join(__dirname, './views'))
app.use(express.static('public'))
app.use('/', routes())
app.listen(port)