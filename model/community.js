const db = require('../lib/dbConnect.js');

function getAllCommunities(req, res, next) {
  db.any(`SELECT * FROM community;`)
  .then((community) => {
    res.community = community
   next();
  })
  .catch((error) => next(error));
}

function createNewCommunity(req, res, next) {
  db.none(`INSERT INTO community ( name, discription, location)
           VALUES ($/name/, $/discription/, $/location/);`,
           req.body)
  .then(next())
  .catch((error) => next(error));
}

module.exports = {
  getAllCommunities,
  createNewCommunity
}
