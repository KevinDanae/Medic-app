const { Router } = require('express');
const { Patient } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", (req, res) =>{
  res.json("soy la ruta get")
})

router.post("/patient", async(req, res) => {
  const {identification, name, lastname, age, plan, status, email, mobil} = req.body 
  try {
    if( identification && name && lastname && email &&age && plan && status){
      const newPatient = await Patient.create({
        identification,
        name,
        lastname,
        email,
        mobil,
        age,
        plan,
        status
      })
      res.json(newPatient)
    }
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
})

module.exports = router;