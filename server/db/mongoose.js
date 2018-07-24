var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Add options to remove deprication warning messages
mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

module.exports = {mongoose};
