const expressLoader = require('./express');
// const mongooseLoader = require('./mongoose');
const Logger = require('./logger');

module.exports = async app => {
//   await mongooseLoader();
//   Logger.info('✌️ DB loaded and connected!');

  await expressLoader(app);
  Logger.info('✌️ Express loaded');
};
