const router = require('express').Router();
const { getAllCommunities, createNewCommunity } = require('../../model/community.js')
const sendSJONrep = (req, res) => res.json(res.community || []);

router.route('/')
      .get(getAllCommunities, sendSJONrep)
      .post(createNewCommunity);

module.exports = router;
