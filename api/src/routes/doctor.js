const { Router } = require('express');
const {Doctor} = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    try {    
        const doctors = await Doctor.findAll({
            attributes: ['name']
        })
        if (doctors.length === 0) {
            res.status(200).send('El modelo Doctor no tiene datos')
        } else {
            let dbDoctors = doctors.map(p => p.name)        
            res.status(200).send(dbDoctors);
        }     
    } catch (error) {
         res.send(`Error in route /doctor ${error}`);
    } 
});

module.exports = router;