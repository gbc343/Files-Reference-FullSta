const express = require('express');
let router = express.Router();

router.route('/brain')
  .get((req, res) => {
    res.send('GET - /book/health/brain')
  })

router.route("/lungs")
  .post( (req, res) => {
    res.send(' POST - /book/health/lungs')
  })

  module.exports = router