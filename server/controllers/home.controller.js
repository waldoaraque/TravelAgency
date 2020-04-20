const Viaje = require('../models/Viajes')
const Testimonial = require('../models/Testimoniales')

exports.homeController = (req, res) => {
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
}