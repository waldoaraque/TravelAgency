const Testimonial = require('../models/Testimoniales')
exports.getTestimoniales =  (req, res) => {
    Testimonial.findAll()
        .then(testimoniales => res.render('testimoniales', {
            page: 'Testimoniales',
            testimoniales
        }))
        .catch(err => console.log(`Ha ocurrido un error: ${err}`))
}

exports.setTestimoniales =  (req, res) => {
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
}