const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
//router
const router = require('./src/router');
// database
const { db, connect_to_db } = require('./config/db')
// Variables
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST

const app = express();

//router
app.use('/', router);


//server running
app.listen(PORT, () => {
    connect_to_db;
    console.log(`server running successfully on: http://${HOST}:${PORT}`)
})