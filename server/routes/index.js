const express = require('express')
const router = express.Router()
const Viaje = require('../models/Viajes')
const Testimonial = require('../models/Testimoniales')

module.exports = () => {
    router.get('/', (req, res) => {
        const promises = []
        promises.push(Viaje.findAll({ limit: 3 }))

        promises.push(Testimonial.findAll({ limit: 3 }))

        const result = Promise.all(promises)
        
        result
            .then(rslt => res.render('index', {
                page: 'Próximos Viajes',
                clase: 'home',
                viajes: rslt[0],
                testimoniales: rslt[1] 
            }))
            .catch(err => console.log(`Ha ocurrido un error: ${err}`))  
    })
    
    
     

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

    router.get('/viajes/:id', (req, res) => Viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje', {
            viaje
        }))
        .catch(err => console.log(`Ha ocurrido un error: ${err}`))
    )

    router.get('/testimoniales', (req, res) => Testimonial.findAll()
        .then(testimoniales => res.render('testimoniales', {
            page: 'Testimoniales',
            testimoniales
        }))
        .catch(err => console.log(`Ha ocurrido un error: ${err}`)))

    router.post('/testimoniales', (req, res) => {
        let {nombre, correo, mensaje} = req.body
        let errors = []
        if (!nombre) {
            errors.push({'mensaje': 'Agrega tu nombre'})
        }
        if (!correo) {
            errors.push({'mensaje': 'Agrega tu correo'})
        }
        if (!mensaje) {
            errors.push({'mensaje': 'Agrega tu mensaje'})
        }

        if (errors.lenght > 0) {
            res.render('testimoniales', {
                errors,
                nombre,
                correo,
                mensaje
            })
        } else {
            Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            .then(testimonial => res.redirect('/'))
            .catch(err => console.log(`Ha ocurrido un error: ${err}`))

        }
    })

    return router
}