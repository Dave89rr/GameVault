var express = require('express');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

router.get('/:id(\\d+)', asyncHandler(async (req, res) => { //individual game page
    console.log('*****************' + req.params.id)
    //const gameId = parseInt(req.orginalUrl.split('/')[2], 10);
    const gameId = req.params.id
    console.log('**********************' + gameId)
    const game = await db.Game.findOne({ include: 'Reviews', where: { id:gameId }})
   // console.log(game.Reviews[0].content)
    const reviews = await db.Review.findAll({where: {game_id: gameId}});
    console.log(reviews)
    res.render('game', {
        game: game,
        reviews: reviews
    })
}))

router.post('/:id(\\d+)/reviews', requireAuth, asyncHandler(async (req, res) => {
    const { content } = req.body;
    const gameId = parseInt(req.params.id, 10);
    const userId = res.locals.user.id;
    await db.Review.create({
        game_id: gameId,
        user_id: userId,
        content: content,
        stars: "5"
    })

    // const game = await db.Game.findOne({ include: 'Reviews', where: { id:gameId }})
    // const reviews = await db.Review.findAll({where: {game_id: gameId}});
    // res.render('game', {
    //     game: game,
    //     reviews: reviews
    // })
    res.redirect(`/games/${gameId}`);
}));

module.exports = router;
