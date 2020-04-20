const express = require('express')
const router = express.Router()

const nosotrosCtrl = require('../controllers/nosotros.controller')
const homeCtrl = require('../controllers/home.controller')
const viajesCtrl = require('../controllers/viajes.controller')
const testimCtrl = require('../controllers/testimoniales.controller')

module.exports = () => {
    
    router.get('/', homeCtrl.homeController)
    router.get('/nosotros', nosotrosCtrl.infoNosotros)
    router.get('/viajes', viajesCtrl.getViajes)
    router.get('/viajes/:id', viajesCtrl.getViajesById)
    router.get('/testimoniales', testimCtrl.getTestimoniales)
    router.post('/testimoniales', testimCtrl.setTestimoniales)

    return router
}