'use strict';

var url = require('url');
var Preparewebservice = require('./PreparewebserviceService');
var Helpers = require('../nonGenerated/helpers');

module.exports.prepareUsingPOST = function prepareUsingPOST (req, res, next) {
  Preparewebservice.prepareUsingPOST(req.swagger.params, res, next);

  console.log('REQUIRE request ->', Helpers.prettyPrint(req.swagger.params));
};

