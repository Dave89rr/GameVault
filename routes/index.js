var express = require('express');
var router = express.Router();
const { asyncHandler } = require('./utils');

const db = require('../db/models');

/* GET home page. */
router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const games = await db.Game.findAll({
      limit: 20,
      order: [['release_date', 'DESC']],
    });
    res.render('home', { title: 'GameVault', games });
  })
);

module.exports = router;
