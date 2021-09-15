const { Router } = require('express');
const {Doctor} = require('../db');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('Soy la Ruta Doctor');
//   router.get('/', async (req, res) => {
 
    // try {    
    //    const doctors = await Doctor.findAll({
    //     attributes: ['nombre']
    //    })
    //    let dbDoctors = doctors.map(p => p.nombre)        
    //    res.status(200).send(dbDoctors);
    // } catch (error) {
    //     res.send(`Error in route /genres ${error}`);
    // } 
});

module.exports = router;