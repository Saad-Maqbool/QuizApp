const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('Quiz');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config');

const response = (req, res, userid, date, duration, questionid,answerid,answers) => {
  Income.create({
    userid: userid,
    date: date,
    duration: duration,
    questionid: questionid,
    answerid: answerid,
    answers:answers


  }).then((quiz) => {
    res.status(200).send(quiz);
  }).catch((err) => {
    res.status(500).send(err.message);
  });
};



module.exports = {

  response: response,
};
