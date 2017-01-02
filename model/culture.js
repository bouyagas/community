const db = require('../lib/dbConnect.js');

function getAllCulture(req, res, next) {
 db.any(`SELECT * FROM culture;`)
 .then((culture) => {
   res.culture = culture;
  next();
 })
 .catch(error => next(error));
}

function createNewCulture(req, res, next) {
  db.none(`INSERT INTO culture (symbol, value, costom, tradition, language)
          VALUES($/symbol/, $/value/, $/custom/, $/tradition/, $/language/);`,
          req.body)
  .then(next())
  .catch(error => next(error))
}

module.exports = {
  getAllCulture,
  createNewCulture
}
