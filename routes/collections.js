const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');

const router = express.Router();

router.get('/', requireAuth, asyncHandler(async(req, res) => {
  const userId = res.locals.user.id;
  const collection = await db.Collection.findAll({
    where: {
      user_id: userId
    }
  })
  console.log(collection);

  res.render('vault-view', { collection })
}))

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
    //   res.send("It works! It's alive");
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
  asyncHandler(async (req, res) => {
    const collection = await db.Collection.findByPk(
      parseInt(req.params.id, 10)
    );
    res.render('collection', {
      collection,
    });
  })
);


module.exports = router;
