const Testimonial = require('../models/Testimoniales')
exports.getTestimoniales =  async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            page: 'Testimoniales',
            testimoniales
        })
    } catch (err) {
        console.log(`Ha ocurrido un error: ${err}`)
    }
}

exports.setTestimoniales = async (req, res) => {
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
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errors,
            nombre,
            correo,
            mensaje,
            page: 'Testimoniales',
            testimoniales
        })
    } else {
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(err => console.log(`Ha ocurrido un error: ${err}`))
    }
}