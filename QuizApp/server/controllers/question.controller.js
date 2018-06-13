const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config');

const create = (req, res, question, category) => {
  Question.create({
    question: question,
    category: category,
  }).then((question) => {
    res.status(200).send(question);
  }).catch((err) => {
    res.status(500).send(err.message);
  });
};


module.exports = {

  create: create,

};
