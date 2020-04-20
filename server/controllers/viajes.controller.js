const Viaje = require('../models/Viajes')

exports.getViajes = async (req, res) => {
    try {
        const viajes = await Viaje.findAll()
        res.render('viajes', {
            page: 'Próximos Viajes',
            viajes 
        })
    } catch (err) {
        console.log(`Ha ocurrido un error: ${err}`)
    }
}

exports.getViajesById = async (req, res) => {
    try {
        const viaje = await Viaje.findByPk(req.params.id)
        res.render('viaje', { viaje })
    } catch (err) {
        console.log(`Ha ocurrido un error: ${err}`)
    }    
}