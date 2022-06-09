const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');

const router = express.Router();

router.post(
  '/',
  /*requireAuth*/ asyncHandler(async (req, res) => {
    const { game_id, collection_id } = req.body;

    const entry = await db.Entry.create({
      game_id: game_id,
      played_status_id: 1,
      collection_id: collection_id,
    });
    const game = await db.Game.findByPk(game_id);

    res.send({ message: 'db updated', game });

    // res.render('collection', { collection });
    // res.send('hi');
  })
);

router.delete(
  '/:id(\\d+)',
  asyncHandler(async (req, res) => {
    const entryId = parseInt(req.params.id, 10);
    await db.Entry.destroy({ where: { id: entryId } });
    res.send('it is deleted');
  })
);

module.exports = router;
