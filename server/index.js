const express = require('express')
const path = require('path')
const routes = require('./routes')
const configs = require('./config')
const app = express()
const port = 8080
const config = configs[app.get('env')] //extraemos el ambiente dev o pro
/*
db.authenticate()
    .then( res => console.log(`Conectado a la Base de Datos.`))
    .catch( err => console.log(`Ha ocurrido un error: ${err}`))
*/
app.locals.title = config.website
app.set('view engine', 'pug') //habilita pug
app.set('views', path.join(__dirname, './views'))
app.use(express.static('public'))
app.use((req, res, next) => {
    const date = new Date()
    res.locals.actualDate = date.getFullYear() //locals se pueden crear variables
    console.log(res.locals)
    return next()
})
app.use('/', routes())
app.listen(port)