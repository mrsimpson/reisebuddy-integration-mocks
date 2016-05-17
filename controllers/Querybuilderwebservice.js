'use strict';

var url = require('url');
var Querybuilderwebservice = require('./QuerybuilderwebserviceService');
var Helpers = require('../nonGenerated/helpers');

module.exports.buildQueryUsingPOST = function buildQueryUsingPOST (req, res, next) {
  Querybuilderwebservice.buildQueryUsingPOST(req.swagger.params, res, next);

  console.log('QUERY request ->', Helpers.prettyPrint(req.swagger.params));
};