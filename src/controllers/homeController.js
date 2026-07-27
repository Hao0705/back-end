const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('homePage.ejs');
}

const getImage = (req, res) => {
    res.render('sample.js');
}

const postCreateUser = async (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    // let {email, name, city} = req.body;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?);`,
        [email, name, city],
    );

    console.log(">>> check results: ", results);
    res.send("Create user succeed!");

}

const createUserPage = (req, res) => {
    res.render('createUser.ejs');
}

module.exports = {
    getHomepage,
    getImage,
    postCreateUser,
    createUserPage
};
