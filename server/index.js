require('dotenv').config();
PORT = process.env.PORT || 3001

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());


// Routers
const usersRouter = require('./routes/Users');
app.use("/users", usersRouter);

app.listen(3001, () => {
    console.log("Server running on port 3001")
});
