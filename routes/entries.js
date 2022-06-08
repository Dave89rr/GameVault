const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');

const router = express.Router();

router.post('/', /*requireAuth*/ asyncHandler(async (req, res) => {
    const { game_id } = req.body;
    const collection_id = parseInt(req.originalUrl.split('/')[2], 10);

    const collection = await db.Collection.findByPk(collection_id);
    const entry = await db.Entry.create({
        game_id: game_id,
        played_status_id: 1,
        collection_id: collection_id
    });
    //res.send('it is done')

    res.render('collection', { collection });
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const entryId = parseInt(req.params.id,10);
    await db.Entry.destroy({where: {id: entryId}});
    res.send('it is deleted')
}))

module.exports = router;
