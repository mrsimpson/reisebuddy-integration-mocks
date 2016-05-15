'use strict';

var url = require('url');


var Preparewebservice = require('./PreparewebserviceService');


module.exports.prepareUsingPOST = function prepareUsingPOST (req, res, next) {
  Preparewebservice.prepareUsingPOST(req.swagger.params, res, next);
};
