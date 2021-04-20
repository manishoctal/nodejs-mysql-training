var express = require('express');
var router = express.Router();
var sequelize = require('../models/index');
const { Op } = require('sequelize')
const { banners } = sequelize.models;
/* GET users listing. */
router.post('/create-banner', async function(req, res, next) {
  const createdData =  await banners.destroy({where: {id: 5}});
  res.json(createdData);
});


module.exports = router;
