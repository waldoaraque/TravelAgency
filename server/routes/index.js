const express = require('express')
const router = express.Router()
const Viaje = require('../models/Viajes')

module.exports = () => {
    router.get('/', (req, res) => res.render('index')) 

    router.get('/nosotros', (req, res) => res.render('nosotros', {
        page: 'Sobre Nosotros'
    }))

    router.get('/viajes', (req, res) => Viaje.findAll()
        .then(viajes => res.render('viajes', {
            page: 'Próximos Viajes',
            viajes 
        }))
        .catch(err => console.log(`Ha ocurrido un error: ${err}`))
    )

    router.get('/viajes/:id', (req, res) => Viaje.findById(req.params.id)
        .then(viaje => res.render('viaje', {
            viaje
        }))
        .catch(err => console.log(`Ha ocurrido un error: ${err}`))
    )

    router.get('/testimoniales', (req, res) => res.render('testimoniales', {
        page: 'Testimoniales'
    }))

    return router
}