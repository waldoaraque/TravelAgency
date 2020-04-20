const Viaje = require('../models/Viajes')

exports.getViajes = (req, res) => {
    Viaje.findAll()
        .then(viajes => res.render('viajes', {
            page: 'Próximos Viajes',
            viajes 
        }))
        .catch(err => console.log(`Ha ocurrido un error: ${err}`))
}

exports.getViajesById = (req, res) => {
    Viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje', { viaje }))
        .catch(err => console.log(`Ha ocurrido un error: ${err}`))
}