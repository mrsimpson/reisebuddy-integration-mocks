'use strict';

var url = require('url');
var Storebuilderwebservice = require('./StorebuilderwebserviceService');
var Helpers = require('../nonGenerated/helpers');

module.exports.buildStoreUsingPOST = function buildStoreUsingPOST (req, res, next) {
    Storebuilderwebservice.buildStoreUsingPOST(req.swagger.params, res, next);

    console.log('STORE request ->', Helpers.prettyPrint(req.swagger.params));
};