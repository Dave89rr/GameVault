const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');

const router = express.Router();

// /collections should display all collections created by all users..it should give a 404
// router.get(
//   '/',
//   requireAuth,
//   asyncHandler(async (req, res) => {
//     const userId = res.locals.user.id;
//     const collections = await db.Collection.findAll({
//       include: 'Games',
//       where: {
//         user_id: userId,
//       },
//     });
//     res.render('vault-view', { collections });
//   })
// );

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

router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
  const collectionId = parseInt(req.params.id, 10);
  const collection = await db.Collection.findByPk(collectionId);
  const { name, description } = req.body;
  await collection.update({ name, description });
  res.render('collection', { collection });
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const collectionId = parseInt(req.params.id, 10);
  const entries = await db.Entry.findAll({ where: { collection_id: collectionId } });
  if (entries.length != 0) {
    res.send('need to delete all games') //send a warning to the user
  } else {
    await db.Collection.destroy({ where: { id: collectionId } });
    res.send('it is deleted');
    // const userId = res.locals.user.id;
    // const collections = await db.Collection.findAll({
    //   include: 'Games',
    //   where: {
    //     user_id: userId,
    //   },
    // });
    // res.render('vault-view', { collections });
  }
}));



module.exports = router;
