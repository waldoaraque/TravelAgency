const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config({ path: 'vars.env' })
const routes = require('./routes')
const configs = require('./config')
const db = require('./config/database')
const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 8080
const config = configs[app.get('env')] //extraemos el ambiente dev o pro

db.authenticate() //test connection to db
    .then( res => console.log(`Conectado a la Base de Datos.`))
    .catch( err => console.log(`Ha ocurrido un error: ${err}`))

app.locals.title = config.website
app.set('view engine', 'pug') //habilita pug
app.set('views', path.join(__dirname, './views'))
app.use(express.static('public'))
app.use((req, res, next) => { //middlewate -> next()
    const date = new Date()
    res.locals.actualDate = date.getFullYear() //locals se pueden crear variables
    res.locals.route = req.path
    console.log(res.locals)
    return next()
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes())
app.listen(port, host, () => console.log(`Corriendo el servidor en: ${host}:${port}`))