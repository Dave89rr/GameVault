const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');

const router = express.Router();

//come back to this :)
router.post(
  '/',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { game_id, collection_id } = req.body;

    const check = await db.Entry.findOne({
      where: {
        game_id: game_id,
        played_status_id: 1,
        collection_id: collection_id,
      },
    });

    if (!check) {
      const entry = await db.Entry.create({
        game_id: game_id,
        played_status_id: 1,
        collection_id: collection_id,
      });

      const game = await db.Game.findByPk(game_id);

      res.send({ message: 'db updated', game });
    } else {
      res.send({ message: 'Game already present' });
    }

    // res.render('collection', { collection });
    // res.send('hi');
  })
);

router.delete(
  '/:id(\\d+)',
  requireAuth,
  asyncHandler(async (req, res) => {
    const entryId = parseInt(req.params.id, 10);
    const entry = await db.Entry.findByPk(entryId);
    if (entry) {
      await entry.destroy();
      res.send({ message: 'it is deleted' });
    }
  })
);

router.put(
  '/',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { played_status_id, game_id, collection_id } = req.body;
    const entry = await db.Entry.findOne({
      where: {
        game_id: game_id,
        collection_id: collection_id,
      },
    });
    await entry.update({ played_status_id });
    res.json({ message: 'Success!', entry });
  })
);

module.exports = router;
