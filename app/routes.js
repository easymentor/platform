/* jshint node: true */
/* jshint esversion: 6 */
'use strict';

module.exports = function (app) {
  app.use('/api/entity', require('./controllers/entity-controller'));

  app.get('*', function (req, res) {
    res.sendFile(__dirname + './client/index.html');
  });
};
