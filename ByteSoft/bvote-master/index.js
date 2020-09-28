require('dotenv').config();

const express = require('express');

const logger = require('./loaders/logger');

async function startServer() {

  const app = express();

  await require('./loaders')(app);

  const port = process.env.PORT || 7000;
  
  app.listen(port, (err) => {
    if (err) {
      logger.error(err);
      process.exit(1);
    }

    logger.info(`
      ################################################
      🛡️  Server listening on port: ${port} 🛡️ 
      ################################################
    `);
  });
}

startServer();