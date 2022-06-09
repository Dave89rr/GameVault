var express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

router.get('/:id(\\d+)', asyncHandler(async (req, res) => { //individual game page
    const gameId = req.params.id
    const game = await db.Game.findOne({ include: 'Reviews', where: { id:gameId }})

    const reviews = await db.Review.findAll({include: 'User', where: {game_id: gameId}});
    //console.log(reviews[0].User)
    let loggedInUser
    if (req.session.auth) {
        loggedInUser = req.session.auth.userId
    }
    res.render('game', {
        game: game,
        reviews: reviews,
        loggedInUser: loggedInUser
    })
}))

router.post('/:id(\\d+)/reviews', requireAuth, asyncHandler(async (req, res) => {
    const { content, ratings } = req.body;
    console.log(req.body);
    const gameId = parseInt(req.params.id, 10);
    const userId = res.locals.user.id;

    const review = await db.Review.create({
        game_id: gameId,
        user_id: userId,
        content: content,
        stars: ratings
    })

    const user = await db.User.findByPk(userId)
    res.send({ message: 'review ok', review, user});
}));

module.exports = router;
