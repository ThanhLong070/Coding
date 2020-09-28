const { Router } = require('express');

const route = Router();

const asyncMiddleware = require('../middlewares/asyncMiddleware');
const introductoryInfoController = require('../../controllers/introductoryInfoController');

module.exports = app => {
  app.use('/introductoryInfo', route);

  route.get('/test', asyncMiddleware(introductoryInfoController.test));
};