const Viaje = require('../models/Viajes')
const Testimonial = require('../models/Testimoniales')

exports.homeController = async (req, res) => {
    try {
        const viajes = await Viaje.findAll({ limit: 3 })
        const testimoniales = await Testimonial.findAll({ limit: 3 })
    
        res.render('index', {
            page: 'Próximos Viajes',
            clase: 'home',
            viajes,
            testimoniales
        }) 
    } catch (err) {
        console.log(`Ha ocurrido un error: ${err}`)
    }
}