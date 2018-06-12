const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../../config');
const mongoose = require('mongoose');
const Quiz = mongoose.model('Quiz');
const quizController = require('../controllers/quiz.controller');

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
router.post('/response', ((req, res) => {
  quizController.response(req, res, req.body.user_id, req.body.date, req.body.duration, req.body.answers[{
    questionid: req.body.questionid,
    answerid: req.body.answerid
  }])

}));


module.exports = router;
