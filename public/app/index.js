if (process.env.NODE_ENV === 'production') {
  module.exports = require('./index.production');
} else {
  module.exports = require('./index.development');
}
