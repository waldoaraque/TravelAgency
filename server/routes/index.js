const express = require('express')
const router = express.Router()

module.exports = () => {
    router.get('/', (req, res) => res.send('hello')) 

    router.get('/nosotros', (req, res) => res.send('nosotros'))

    return router
}