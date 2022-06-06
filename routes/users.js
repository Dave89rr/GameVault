var express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

router.get('/sign-up', csrfProtection, (req, res) => {
  const user = db.User.build();
  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
