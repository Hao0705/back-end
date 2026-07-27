const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('homePage.ejs');
}

const getImage = (req, res) => {
    res.render('sample.js');
}

const postCreateUser = (req, res) => {
    console.log(">>> req.body: ", req.body);

    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    // let {email, name, city} = req.body;

    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?);`,
        [email, name, city],

        function (err, results) {
            if (err) {
                console.log(err);
                return res.status(500).send("Insert failed");
            }

            console.log(results);
            res.send("Create a new user");
        }
    )
}

module.exports = {
    getHomepage,
    getImage,
    postCreateUser
};
