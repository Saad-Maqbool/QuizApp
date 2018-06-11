const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../../config');
const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const questionController = require('../controllers/question.controller');

router.use('/', function (req, res, next) {

  jwt.verify(req.query.token, config.secret, function (err, decode) {
    if (err) {
      res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    next();

  })
});
router.post('/', ((req, res) => {
  questionController.create(req, res, req.body.question, req.body.category);

}));


module.exports = router;
