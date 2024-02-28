const express = require('express');
const router = express.Router();
const { users } = require('../models')

// GET Routes

router.get("/",async (req, res) => {
    const response = await users.findAll();
    res.json(response);
});


// POST Routes

router.post("/", async (req, res) => {
    const requestBody = req.body;
    await modes.create(requestBody);
    res.json(requestBody); // Return object sent in POST request as confirmation   
});


module.exports = router;
