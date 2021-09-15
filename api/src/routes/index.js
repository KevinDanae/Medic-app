const { Router } = require('express');
//const doctorRouter = require('../routes/doctors')
const doctorRouter = require('../routes/doctors')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res) =>{
  res.json("soy la ruta get")
})

//router.use('/doctor',doctorRouter);

module.exports = router;

