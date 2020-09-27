const express = require('express');
const router = express.Router();
const { partialBotObject } = require("../utils/bot");
const tags = require("../utils/tags");
const colors = require("../utils/colors");

module.exports = (mongo) => {
  router.get('/', async (req, res) => {
    const filter = {"approvedBy": {$ne: null}};
    res.render('index', {
      title: 'Início',
      bots: {
        top: (await mongo.bots.find(filter).limit(6).sort({"votes.current": -1})).map(partialBotObject),
        recent: (await mongo.bots.find(filter).limit(6).sort({"dates.sent": -1})).map(partialBotObject),
        random: (await mongo.bots.aggregate([{$match: filter}, {$sample: {size: 12}}])).map(partialBotObject)
      },
      tags,
      colors
  })});
  
  router.get("/userdata", (req, res) => {
    if(req.session)
      res.send(req.session.user)
    else
      res.sendStatus(404)
  });
  return router;
};
