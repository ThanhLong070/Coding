const { Router } = require('express');

// const auth = require('./routes/auth');
const introductoryInfor = require('./routes/introductoryInfor');

// guaranteed to get dependencies
module.exports = () => {
  const app = Router();
//   auth(app);
introductoryInfor(app);

  return app;
};