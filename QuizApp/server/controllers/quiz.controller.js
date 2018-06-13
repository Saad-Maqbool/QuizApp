const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('Quiz');
const Question = mongoose.model('Question');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config');

const response = (req, res, user_id, date, duration, questionid,answerid,answers) => {
  Quiz.create({
    user_id: user_id,
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

const getAll = (req, res) => {

  Question.find().then((question) => {
    if (!question.length) {
      return res.status(404).send("no question found");
    }
    res.status(200).send(question);
  })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};


module.exports = {

  response: response,
  getAll: getAll
};
