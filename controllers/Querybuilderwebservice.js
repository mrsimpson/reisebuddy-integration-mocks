'use strict';

var url = require('url');


var Querybuilderwebservice = require('./QuerybuilderwebserviceService');


module.exports.buildQueryUsingPOST = function buildQueryUsingPOST (req, res, next) {
  Querybuilderwebservice.buildQueryUsingPOST(req.swagger.params, res, next);
};
