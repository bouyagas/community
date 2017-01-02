const router = require('express').Router();
const { getAllCulture, createNewCulture } = require('../../model/culture.js');
const sendSJONrep = (req, res) => res.json(res.culture || []);

router.route('/')
      .get(getAllCulture, sendSJONrep)
      .post(createNewCulture);

module.exports = router;
