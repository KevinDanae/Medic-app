const { Router } = require('express');
const { Blood } = require('../db');
const router = Router();

router.get("/", async (req, res) => {
  try {
    const groups = await Blood.findAll();
    res.json(groups);
  } catch (error) {
    console.log(error);
    res.status(404).json(error)
  }
})

module.exports = router;