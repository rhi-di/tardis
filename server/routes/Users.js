const express = require('express');
const router = express.Router();
const { MongoClient } = require("mongodb");

async function connectToMongoDB(req, res, next) {
    try {
        const client = new MongoClient(process.env.DB_STRING);
        await client.connect();
        const database = client.db(process.env.DB_NAME);
        req.db = {
            client: client,
            collection: database.collection("test")
        };
        next();
    } catch (error) {
        next(error);
    }
}

function closeMongoDBConnection(req, res, next) {
    if (req.db && req.db.client) {
        req.db.client.close();
    }
    next();
}

// GET Route(s)
router.get("/", connectToMongoDB, async (req, res, next) => {
    try {
        const response = await req.db.collection.find({}).toArray();
        res.json(response);
    } catch (error) {
        next(error);
    }
});

// POST Route(s)
router.post("/", connectToMongoDB, async (req, res, next) => {
    try {
        const response = await req.db.collection.insertOne(req.body);
        res.json(req.body); // Return object sent in POST request as confirmation
    } catch (error) {
        next(error);
    }
});

router.use(closeMongoDBConnection);

module.exports = router;
