var express = require('express');
var app = express();
var router = express.Router();
var crypto = require('crypto');
var Post = require('../modules/post')


router.get('/',function (req, res, next) {
    res.render('index',{});
});

module.exports = router;
