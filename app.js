const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chalk = require('chalk');
require('dotenv').config();


// Importing helpers and utilities
const connectToDatabase = require('./utils/database');


const app = express();

// Connecting to database
(async () => {
    try {
        await connectToDatabase();
    } catch (error) {
        console.log(chalk.redBright(`Error connecting to database! Error details: ${error}`))
    }
})();

// Importing routes
const user = require('./routes/api/user');

// Initializing middleware
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Registering routes
app.use('/api', user);


module.exports = app;
