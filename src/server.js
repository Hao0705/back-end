require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT;

// config template engine
configViewEngine(app);

// khai bao route 
app.use(webRoutes);


const connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "123456",
    database: 'hoidanit'
});
// simple query 
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>>> Results=", results);
        console.log(">>>> Fields=", fields);
    }
)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

