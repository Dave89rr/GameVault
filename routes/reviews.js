var express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

router.get(
  '/:id(\\d+)',
  asyncHandler(async (req, res) => {
    //individual game page
    const gameId = req.params.id;
    const game = await db.Game.findOne({
      include: 'Reviews',
      where: { id: gameId },
    });

    const reviews = await db.Review.findAll({
      include: 'User',
      where: { game_id: gameId },
    });
    let loggedInUser;
    let userCollections;
    if (req.session.auth) {
      loggedInUser = req.session.auth.userId;
    }

    if (loggedInUser) {
      userCollections = await db.Collection.findAll({
        where: {
          user_id: loggedInUser,
        },
      });
    } else {
      userCollections = null;
    }

    res.render('game', {
      game: game,
      reviews: reviews,
      loggedInUser: loggedInUser,
      userCollections: userCollections,
    });
  })
);

router.post(
  '/:id(\\d+)/reviews',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { content, ratings } = req.body;
    const gameId = parseInt(req.params.id, 10);
    const userId = res.locals.user.id;

    const review = await db.Review.create({
      game_id: gameId,
      user_id: userId,
      content: content,
      stars: ratings,
    });

    const user = await db.User.findByPk(userId);
    res.send({ message: 'review ok', review, user });
  })
);

router.put('/:id(\\d+)/reviews/:reviewId(\\d+)', asyncHandler( async (req, res) => {
  const reviewId = req.params.reviewId;
  const review = await db.Review.findByPk(reviewId);
  // const { content } = req.body;
  const user = await db.User.findByPk(review.user_id)
  console.log(reviewId);
  review.content = req.body.content
  await review.save();

  res.send({ message: 'edit successful', review, user })


}))

router.delete(
  '/:id(\\d+)/reviews/:reviewId(\\d+)',
  asyncHandler(async (req, res) => {
    const reviewId = req.params.reviewId;
    const review = await db.Review.findByPk(reviewId);
    await review.destroy();
    res.send({ message: 'deleted' });
  })
);

module.exports = router;
