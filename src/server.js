require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT;

// config template engine
configViewEngine(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// khai bao route 
app.use(webRoutes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

