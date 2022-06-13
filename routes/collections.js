const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { requireAuth, restoreUser } = require('../auth');

const router = express.Router();

router.get(
  '/new',
  csrfProtection,
  requireAuth,
  asyncHandler(async (req, res) => {
    const collection = await db.Collection.build();
    res.render('collections-new', {
      title: 'New Collection',
      collection,
      csrfToken: req.csrfToken(),
    });
  })
);

const collectionValidator = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a name for your collection')
    .isLength({ max: 255 }),
  check('description')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a description for your collection')
    .isLength({ max: 255 }),
];

router.post(
  '/new',
  csrfProtection,
  requireAuth,
  collectionValidator,
  asyncHandler(async (req, res) => {
    const { name, description } = req.body;
    const userId = res.locals.user.id;
    const collection = db.Collection.build({
      user_id: userId,
      name,
      description,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await collection.save();
      const collId = collection.id;
      res.redirect(`/collections/${collId}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('collections-new', {
        title: 'Create new collection!',
        collection,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get(
  '/:id(\\d+)',
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const allGames = await db.Game.findAll();
    const collection = await db.Collection.findOne({
      include: 'Games',
      where: {
        id: parseInt(req.params.id, 10),
      },
      order: [[{ model: db.Game }, 'name', 'ASC']],
    });

    const allStatuses = await db.PlayedStatus.findAll();

    res.render('collection', {
      title: 'collection page',
      collection: collection,
      allGames,
      allStatuses,
    });
  })
);

router.put(
  '/:id(\\d+)', requireAuth,
  asyncHandler(async (req, res) => {
    const collectionId = parseInt(req.params.id, 10);
    const collection = await db.Collection.findByPk(collectionId);
    const { name, description } = req.body;
    await collection.update({ name, description });
    res.json({ message: 'edit successful', collection, name, description });
  })
);

router.delete(
  '/:id(\\d+)',
  requireAuth,
  asyncHandler(async (req, res) => {
    const collectionId = req.params.id;
    const userId = res.locals.user.id;
    const collection = await db.Collection.findByPk(collectionId);
    if (collection) {
      await collection.destroy();
      res.send({ message: 'it is deleted', userId });
    }
  })
);

module.exports = router;
