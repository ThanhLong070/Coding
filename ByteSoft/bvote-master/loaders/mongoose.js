const mongoose = require('mongoose');

module.exports = async () => {
  const connection = await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  return connection.connection.db;
};