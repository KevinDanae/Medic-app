const { Router } = require('express');
//const doctorRouter = require('../routes/doctors')
const bloodRouter = require('../routes/blood')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/blood', bloodRouter)
//router.use('/doctor',doctorRouter);

//router.use('/doctor',doctorRouter);

module.exports = router;

