const express = require('express');
const { db } = require('../config');
const { csrfProtection, asyncHandler } = require('./utils');

const router = express.Router();

router.get(
  '/new',
  csrfProtection,
  asyncHandler(async (req, res) => {
    const collection = await db.Collection.build();
    res.render('pugviewnamemissing', {
      title: 'New Collection',
      collection,
      csrfToken: req.csrfToken(),
    });
    //   res.send("It works! It's alive");
  })
);

module.exports = router;
