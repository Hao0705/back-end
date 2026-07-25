const getHomepage = (req, res) => {
    res.send('Hello word Hoi Dan it');
}

const getImage = (req, res) => {
    res.render('sample.js');
}
module.exports = {
    getHomepage,
    getImage
};