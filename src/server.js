require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT;

// config template engine
configViewEngine(app);

// khai bao route 
app.use(webRoutes);


// simple query 
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>>> Results=", results);
    }
)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

